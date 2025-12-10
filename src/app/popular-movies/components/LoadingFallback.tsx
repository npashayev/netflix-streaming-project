import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function LoadingFallback({ children }: Props) {
    return (
        <div className="py-10 text-white text-2xl">{children}</div>
    );
}
