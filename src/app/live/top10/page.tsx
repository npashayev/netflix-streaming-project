
import React, { Suspense } from 'react';
import TopRatedMovies from './components/TopRatedMovies';
import LoadingFallback from '@/lib/components/shared/LoadingFallback';
import LiveTrendingSubscriberWrapper from './components/LiveTrendingSubscriberWrapper';

export default function LiveTrending() {
    return (
        <main className='p-10 bg-black min-h-screen flex gap-15 max-md:flex-col max-md:p-5 max-md:items-center'>
            <LiveTrendingSubscriberWrapper />
            <Suspense fallback={<LoadingFallback>Loading top rated movies...</LoadingFallback>}>
                <TopRatedMovies />
            </Suspense>
        </main>
    );
}
