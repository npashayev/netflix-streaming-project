import { Movie } from "@/types/movies";
import Image from "next/image";

interface Props {
    movie: Movie;
    index: number;
}

export default function MovieCard({ movie, index }: Props) {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className='relative shrink-0 hover:scale-102 transition-transform duration-200 hover:cursor-pointer w-max' key={movie.id}>
            <Image
                className='rounded-2xl max-lg:h-[280px] w-auto max-sm:h-40'
                src={posterUrl}
                width={220}
                height={330}
                alt="Movie Poster"
            />
            <div
                className='text-stroke absolute text-[160px] -left-10 font-bold text-black bottom-8 leading-none max-lg:text-[120px] max-lg:-left-7 max-sm:text-[80px] max-sm:-left-6 max-sm:bottom-4'>
                {index + 1}
            </div>
        </div>
    );
};
