import Image from "next/image";
import logo from "../../../public/next.svg"
import NavigationMenuComp from "./navigationMenu/NavigationMenu";
import DropdownMenuProfile from "./dropDownProfile/DropDownProfile";
import Link from "next/link";
import { ThemeToggle } from "../ToggleTheme";


export default async function  Header() {

    return <div className="w-full h-16 flex justify-center md:justify-between items-center absolute top-0 bg-slate-100 dark:bg-slate-900 px-2 z-10">
        <div className="flex items-center justify-center gap-1">
            <Image src={logo} alt="logo" height={50} width={60} />
            <Link  href="/">نام مجموعه</Link>
           
        </div>
        <div className="hidden md:flex justify-center items-center gap-2">
                <NavigationMenuComp/> 
                <DropdownMenuProfile />
                <ThemeToggle />
        </div>
    </div>
}