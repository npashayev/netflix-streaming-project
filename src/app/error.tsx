"use client";

interface Props {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: Props) {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white text-center px-6">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>

            <p className="text-lg text-gray-400 max-w-lg mb-8">
                {error.message || "An unexpected error occurred."}
            </p>

            <button
                onClick={reset}
                className="
                    px-6 py-3 rounded-md 
                    bg-red-600 hover:bg-red-700 
                    transition-colors font-semibold
                "
            >
                Try Again
            </button>
        </div>
    );
}
