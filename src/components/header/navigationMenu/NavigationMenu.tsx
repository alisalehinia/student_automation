

"use client"

import * as React from "react"
import Link from "next/link"
import routes from "@/constants/routes"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuComp() {
  return (
    <NavigationMenu viewport={false} dir="rtl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex-row items-center justify-between gap-4">
            {routes.todayClasses.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 gap-1">
                <NavigationMenuLink asChild>
                  <Link
                    href={routes.todayClasses.url}
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      {routes.todayClasses.name}
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      لیست کلاس‌هایی که امروز برگزار می‌شوند.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="مقدمه">
                کامپوننت‌های قابل استفادهٔ مجدد با Radix UI و Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="نصب">
                راهنمای نصب وابستگی‌ها و ساختاردهی پروژه.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="تایپوگرافی">
                سبک‌های تیتر، پاراگراف، لیست و ...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex-row items-center justify-between gap-4">
            {routes.allClasses.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href={routes.allClasses.url} title={routes.allClasses.name}>
                مشاهده همه کلاس‌های مجتمع و برنامه‌های جاری.
              </ListItem>
              <ListItem href="/docs/primitives/dialog" title="افزودن کلاس جدید">
                افزودن کلاس جدید با انتخاب زمان، استاد و ظرفیت.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex-row items-center justify-between gap-4">
            {routes.teachers.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href={routes.teachers.url}>
                    <div className="font-medium">{routes.teachers.name}</div>
                    <div className="text-muted-foreground">
                      مشاهده لیست کامل اساتید و اطلاعات تماس.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex-row items-center justify-between gap-4">
            {routes.booksForSale.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href={routes.booksForSale.url}>کتاب‌های موجود</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">راهنما خرید</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">تسویه حساب</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
