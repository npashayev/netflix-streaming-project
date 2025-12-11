"use client";

import LoadingFallback from "@/lib/components/shared/LoadingFallback";
import dynamic from "next/dynamic";

const LiveTrendingSubscriber = dynamic(
    () => import("./LiveTrendingSubscriber"),
    {
        ssr: false,
        loading: () => <LoadingFallback>Loading live trending items...</LoadingFallback>
    }
);

export default function LiveTrendingSubscriberWrapper() {
    return <LiveTrendingSubscriber />;
}
