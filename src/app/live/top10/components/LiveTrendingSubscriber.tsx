"use client";

import { useEffect, useState } from "react";
import type { Movie } from "@/types/movies";

export default function LiveTrendingSubscriber() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const sse = new EventSource("/api/live/top10");

        sse.addEventListener("initial", (event) => {
            const parsed: Movie[] = JSON.parse(event.data);
            setMovies(parsed);
            setIsConnected(true);
        });

        sse.addEventListener("delta", (event) => {
            const { id, popularity } = JSON.parse(event.data);

            setMovies((prev) =>
                prev.map((m) =>
                    m.id === id ? { ...m, popularity } : m
                )
            );
        });

        sse.onerror = () => {
            console.error("SSE connection lost");
            setIsConnected(false);
        };

        return () => sse.close();
    }, []);

    return (
        <aside className="bg-neutral-900 text-white rounded-xl p-4 w-84 shadow-xl border border-neutral-800 h-fit shrink-0 max-md:w-full">
            <h2 className="text-lg font-semibold mb-3 flex items-center justify-between">
                Live Trending
                <span className={`w-3 h-3 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"}`} />
            </h2>

            <div className="text-sm text-neutral-400 mb-2">
                Live popularity updates (Top 10)
            </div>

            <ul className="space-y-2 shrink-0">
                {
                    movies
                        .slice()
                        .sort((a, b) => b.popularity - a.popularity)
                        .map((movie, index) => (
                            <li
                                key={movie.id}
                                className="flex items-center justify-between bg-neutral-800 px-3 py-2 rounded-lg hover:bg-neutral-700 transition"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-neutral-400 text-xs w-5">
                                        #{index + 1}
                                    </span>
                                    <span className="font-medium text-sm line-clamp-1">
                                        {movie.title}
                                    </span>
                                </div>

                                <span className="text-green-400 font-semibold text-sm">
                                    {movie.popularity.toFixed(2)}
                                </span>
                            </li>
                        ))
                }
            </ul>
        </aside>
    );
}