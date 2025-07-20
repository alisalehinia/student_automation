'use client';
import Image from "next/image";
import logo from "../../../public/assets/header/mftlogo.png"
import NavigationMenuComp from "./navigationMenu/NavigationMenu";
import DropdownMenuProfile from "./dropDownProfile/DropDownProfile";
import Link from "next/link";
import { ThemeToggle } from "../ToggleTheme";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";



export default  function  Header() {

    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const checkAuth = useAuthStore((state) => state.checkAuth);

    useEffect(() => {
      checkAuth(); 
    }, []);
  
    return <div className="w-full h-16 flex justify-center md:justify-between items-center absolute top-0 bg-slate-100   dark:bg-slate-900 px-2 z-10">
        <div className="flex items-center justify-center gap-1 ">
            <Image className="z-10 dark:bg-white rounded-[20px]" src={logo} alt="logo" height={30} width={40} />
            <Link  href="/">مجتمع فنی تهران</Link>
           
        </div>
        <div className="hidden md:flex justify-center items-center gap-2">
                <NavigationMenuComp/> 
                    <div className="md:min-w-[75px]">
                        {
                            isLoggedIn ? 
                            <DropdownMenuProfile /> :
                            <Link  href="/auth/login">ورود</Link>
                        }
                    </div>
                <ThemeToggle />
        </div>
    </div>
}