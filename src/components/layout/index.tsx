

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../header/sideBar/SideBar";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";


export default function SidebarLayout() {
  return (
    <SidebarProvider>
      <div className="flex w-full overflow-hidden ">
        <AppSidebar />
          <div className="md:hidden p-2 absolute top-3 right-1 z-10">
            <SidebarTrigger >
              <Button variant="outline" className="h-20 w-20 p-0">
                <MenuIcon size={32} />
              </Button>
            </SidebarTrigger>
        </div>
      </div>
    </SidebarProvider>
  );
}
