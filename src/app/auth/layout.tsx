import { ReactNode } from "react";

export default function AuthLayout({children}:{children: ReactNode}){
    return <div className="w-full h-screen 
    flex justify-center items-center
   relative
    max-w-screen
    overflow-x-hidden
    ">
        <div className="absolute border-2 top-[50%] right-[10%] h-[200px] w-[200px] rounded-2xl hidden md:block -rotate-12 shadow-lg dark:shadow-slate-700 -z-10 " />
      <div className="absolute border-2 top-[30%] right-[20%] h-[120px] w-[120px] rounded-2xl hidden md:block rotate-12 shadow-lg dark:shadow-slate-700 -z-10" />
      <div className="absolute border-2 top-[50%] right-[50%] h-[300px] w-[300px] rounded-2xl hidden md:block rotate-6 shadow-lg dark:shadow-slate-700 -z-10" />
      <div className="absolute border-2 top-[0%] right-[80%] h-[400px] w-[400px] rounded-2xl hidden md:block rotate-45 shadow-lg dark:shadow-slate-700 -z-10" />
        {children}
    </div>
}