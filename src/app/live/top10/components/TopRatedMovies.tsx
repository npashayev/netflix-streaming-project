import { getTopRatedMovies } from '@/lib/api/movies';
import MovieCard from '@/lib/components/shared/MovieCard';

export default async function TopRatedMovies() {
    const movies = await getTopRatedMovies();

    return (
        <div className='p-3 flex flex-col justify-center items-center gap-10 h-full'>
            <h2 className='text-3xl font-bold text-white text-center max-md:text-2xl'>Top Rated Movies</h2>
            <div className='flex flex-wrap justify-center items-center gap-10 h-full'>
                {
                    movies.map((movie, index) => <MovieCard index={index} key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    );
}


