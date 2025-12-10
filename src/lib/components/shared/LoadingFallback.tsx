import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function LoadingFallback({ children }: Props) {
    return (
        <div className="py-10 text-white text-2xl max-sm:text-xl w-full flex justify-center">{children}</div>
    );
}
