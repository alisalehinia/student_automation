import { ReactNode } from "react";

export default function DashBoardLayout({children}: {
    children: ReactNode
}) {
    return <div 
    className="mt-[64px] mx-2.5 my-3 md:max-w-[1500px] md:mx-auto"
    >{children}</div>
}