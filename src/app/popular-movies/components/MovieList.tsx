import { Movie } from "@/types/movies";
import MovieListSlider from "./MovieListSlider";
import { ReactNode } from "react";

interface Props {
    regionPromise?: Promise<string>;
    fetchFn: (region?: string) => Promise<Movie[]>;
    children: ReactNode;
}

export default async function MovieList({ regionPromise, fetchFn, children }: Props) {
    const region = regionPromise ? await regionPromise : undefined;
    const movies = await fetchFn(region);

    return (
        <div className="text-2xl mt-10">
            <h2 className="mb-10">
                {children}
                {region && ` in ${region}`}
            </h2>
            <MovieListSlider movies={movies} />
        </div>
    );
}

