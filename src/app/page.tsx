import logo from '@/assets/logo.webp';
import popcorn from '@/assets/popcorn.webp';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineLiveTv } from "react-icons/md";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <header className='relative bg-[linear-gradient(135deg,rgba(10,10,20,0.95),rgba(20,5,25,0.9)),url("/img/background_image.jpg")] bg-center bg-cover min-h-screen flex flex-col gap-8 items-center justify-center px-6 py-20'>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-red-900/20 pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">

          {/* Logo with glow effect */}
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600/30 blur-2xl rounded-full scale-110 group-hover:bg-red-600/50 transition-all duration-500"></div>
            <Image
              src={logo}
              height={320}
              width={320}
              alt='logo'
              className='max-sm:h-48 max-sm:w-auto relative z-10 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500'
            />
          </div>

          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white text-5xl font-black max-w-3xl text-center leading-tight max-lg:text-4xl max-sm:text-3xl drop-shadow-lg animate-fade-in'>
            All the movies you love. None of the complexity.
          </h1>

          <p className="text-gray-300 text-lg max-w-xl text-center max-sm:text-base">
            Discover, explore, and track your favorite films in real-time
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-6 w-full max-w-2xl justify-center">

            <Link
              href='/popular-movies'
              className='group relative flex items-center justify-center gap-3 text-white px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-lg font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-red-600/50 max-sm:text-base flex-1'
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className='relative z-10'>Explore Popular Movies</span>
              <Image
                src={popcorn}
                height={28}
                width={28}
                alt='icon'
                className='relative z-10 rotate-12 group-hover:rotate-30 transition-transform duration-300 group-hover:animate-bounce'
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href='/live/top10'
              className='group relative flex items-center justify-center gap-3 text-white px-8 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-lg font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-600/50 max-sm:text-base flex-1'
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Live indicator pulse */}
              <span className="absolute top-3 right-3 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>

              <span className='relative z-10'>Live Top 10 Trending</span>
              <MdOutlineLiveTv className='relative z-10 text-3xl group-hover:animate-pulse' />
            </Link>

          </div>
        </div>
      </header>
    </main>
  );
}