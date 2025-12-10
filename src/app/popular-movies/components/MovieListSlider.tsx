'use client';

import MovieCard from "@/lib/components/shared/MovieCard";
import { Movie } from "@/types/movies";
import { useRef } from "react";
import ScrollButton from "./ScrollButton";

interface Props {
    movies: Movie[];
}

export default function MovieListSlider({ movies }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        const container = containerRef.current;
        if (!container) return;

        const amount = container.offsetWidth; // Netflix-style scrolling

        container.scrollBy({
            left: direction === "right" ? amount : -amount,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex gap-5 items-center w-full">
            <ScrollButton direction="left" scroll={scroll}>{"<"}</ScrollButton>
            <div ref={containerRef} className="overflow-x-auto flex gap-12 py-5 px-10 no-scrollbar">
                {
                    movies.slice(0, 10).map((movie, index) => <MovieCard key={movie.id} movie={movie} index={index} />)
                }
            </div>
            <ScrollButton direction="right" scroll={scroll}>{">"}</ScrollButton>
        </div >
    );
}
