import { ReactNode } from "react";

interface Props {
    direction: "left" | "right";  // ← add this
    scroll: (direction: "left" | "right") => void;
    children: ReactNode;
}

export default function ScrollButton({ direction, scroll, children }: Props) {
    return (
        <button
            className="text-3xl text-white cursor-pointer bg-gray-800 py-10 px-2 rounded-2xl hover:bg-gray-900 max-sm:text-xl"
            onClick={() => scroll(direction)}
        >
            {children}
        </button>
    );
}
