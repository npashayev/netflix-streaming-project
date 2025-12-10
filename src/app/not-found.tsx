import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 text-center">
            <h1 className="text-[8rem] font-extrabold leading-none text-red-600">
                404
            </h1>

            <h2 className="mt-4 text-3xl font-bold">
                Page not found
            </h2>

            <p className="mt-3 max-w-md text-gray-400">
                The page you are looking for doesn’t exist, was removed, or is temporarily unavailable.
            </p>

            <div className="mt-10 flex gap-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                    <FaArrowLeft />
                    Go Home
                </Link>

                <Link
                    href="/popular-movies"
                    className="rounded-xl border border-gray-700 px-6 py-3 text-lg font-semibold text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                    Browse Movies
                </Link>
            </div>
        </main>
    );
}
