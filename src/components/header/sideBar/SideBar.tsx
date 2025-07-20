'use client';
import { ThemeToggle } from "@/components/ToggleTheme";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import routes from "@/constants/routes";
import { XIcon } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";


export default function AppSidebar() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const checkAuth = useAuthStore((state) => state.checkAuth);

    useEffect(() => {
      checkAuth(); 
    }, []);

  const sidebarItems = [
    (isLoggedIn ? routes.profile : routes.login),
    routes.home,
    routes.todayClasses,
    routes.allClasses,
    routes.teachers,
    routes.booksForSale,
  ];
  

  return (
    <Sidebar
      className="
        fixed top-0 left-auto right-0 z-50       
        h-full                            
        bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        translate-x-full                        
        data-[state=open]:translate-x-0           
        md:hidden                                
      "
    >
      <SidebarContent>
        <div className="flex justify-end p-2">
          <SidebarTrigger>
            <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-900 transition">
              <XIcon className="w-5 h-5" />
            </button>
          </SidebarTrigger>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 text-sm"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <ThemeToggle />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
