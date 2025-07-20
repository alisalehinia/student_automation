'use client';

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function DropdownMenuProfile() {

  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button variant="outline">پروفایل</Button>
      </DropdownMenuTrigger>

      {/* بخش اصلی منو */}
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>حساب کاربری من</DropdownMenuLabel>

        {/* گروه نخست: امکانات پرکاربرد دانش‌آموز */}
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={()=>router.push('/manager-panel')} >
            پروفایل من
            <DropdownMenuShortcut className="mr-auto ml-1">⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            دوره‌های من
            <DropdownMenuShortcut className="mr-auto ml-1">⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            پرداخت شهریه
            <DropdownMenuShortcut className="mr-auto ml-1">⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            تنظیمات
            <DropdownMenuShortcut className="mr-auto ml-1">⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* گروه دوم: پشتیبانی و راهنما */}
        <DropdownMenuGroup>
          <DropdownMenuItem>پشتیبانی</DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger  className="
                        pr-2 flex items-center gap-2
                        [&>svg]:ml-0 [&>svg]:mr-auto        
                        [&>svg]:rotate-180      
                        ">ارسال تیکت</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>ایمیل</DropdownMenuItem>
                <DropdownMenuItem>پیام</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>موارد دیگر…</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuItem>
            راهنمای سیستم
            <DropdownMenuShortcut className="mr-auto ml-1">⌘H</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* لینک‌های عمومی */}
        <DropdownMenuItem>درباره ما</DropdownMenuItem>
        <DropdownMenuItem>تماس با ما</DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* خروج */}
        <DropdownMenuItem onClick={()=>{
          logout();
          window.dispatchEvent(new Event("storage"));
          router.push('/')
        }}>
          خروج
          <DropdownMenuShortcut className="mr-auto ml-1">⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
