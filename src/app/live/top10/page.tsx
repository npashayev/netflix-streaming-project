import React, { Suspense } from 'react'
import TopRatedMovies from './components/TopRatedMovies'
import LoadingFallback from '@/lib/components/shared/LoadingFallback'
import LiveTrendingSubscriber from './components/LiveTrendingSubscriber'

export default function page() {
    return (
        <main className='p-10 bg-black min-h-screen flex gap-15'>
            <Suspense fallback={<LoadingFallback>Loading top rated movies...</LoadingFallback>}>
                <LiveTrendingSubscriber />
                <TopRatedMovies />
            </Suspense>
        </main>
    )
}
