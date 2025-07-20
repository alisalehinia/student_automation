import { ReactNode } from "react";

export default function DashBoardLayout({children}: {
    children: ReactNode
}) {
    return <div className="bg-red-300  h-[200px]">{children}</div>
}