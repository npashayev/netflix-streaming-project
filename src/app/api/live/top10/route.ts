export const runtime = "edge";

import type { Movie } from "@/types/movies";

// Server-only type — not sent to client
type MovieInternal = Movie & { _momentum: number };

const API_URL = `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular`;
const API_KEY = process.env.TMDB_API_KEY;

export async function GET(req: Request) {
    // Fetch top movies from TMDB
    const tmdbRes = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
        cache: "no-store",
    });

    const data = await tmdbRes.json();

    // Template list for cloning per-client
    const templateMovies: MovieInternal[] = data.results
        .slice(0, 10)
        .map((m: Movie) => ({ ...m, _momentum: 0 }));

    const stream = new ReadableStream({
        start(controller) {
            // Each new client gets its own simulation copy
            const movies = templateMovies.map(m => ({ ...m }));

            // Send initial full dataset
            controller.enqueue(
                `event: initial\ndata: ${JSON.stringify(movies)}\n\n`
            );

            // Update simulation every 1 second
            const intervalId = setInterval(() => {
                for (const movie of movies) {
                    const drift = (Math.random() - 0.5) * 0.8; // -0.4 to +0.4
                    movie.popularity += drift;

                    movie._momentum = movie._momentum * 0.9 + drift * 0.1;
                    movie.popularity += movie._momentum;

                    if (Math.random() < 0.01) {
                        movie.popularity += Math.random() * 20 + 10; // +10 to +30
                    }

                    if (movie.popularity < 0) movie.popularity = 0;

                    // Send delta update
                    const delta = {
                        id: movie.id,
                        popularity: movie.popularity,
                    };

                    controller.enqueue(
                        `event: delta\ndata: ${JSON.stringify(delta)}\n\n`
                    );
                }
            }, 1000);

            // Cleanup: stop simulation when client disconnects
            req.signal.addEventListener("abort", () => {
                clearInterval(intervalId);
            });
        },
    });

    return new Response(stream, {
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            "Connection": "keep-alive",
        },
    });
}