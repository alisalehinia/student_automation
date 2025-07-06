
import { ThemeToggle } from "@/components/ToggleTheme";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Book, GraduationCap, Home, LibraryBig,University,User } from "lucide-react";
import Link from "next/link";

const items = [
{title: 'پروفایل' ,url:"/profile" , icon:User},
  { title: "خانه", url: "/", icon: Home },
  { title: "کلاس های امروز", url: "/today-classes", icon: Book },
  { title: "کلاس های مجتمع", url: "/all-classes", icon: University },
  { title: "مدرسین", url: "/teachers", icon: GraduationCap },
  { title: "کتاب", url: "/books-for-sale", icon: LibraryBig },
];

export default function AppSidebar() {
  return (
    <Sidebar  className="
    fixed top-0 left-auto right-0 z-50       
    h-full                            
    bg-white shadow-lg
    transform transition-transform duration-300 ease-in-out
    translate-x-full                        
    data-[state=open]:translate-x-0           
    md:hidden                                
  ">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 text-sm"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
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
