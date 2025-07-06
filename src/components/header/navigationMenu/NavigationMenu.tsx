
"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "لورم ۱",
    href: "/docs/primitives/alert-dialog",
    description: "متن ساختگی برای توضیح ویژگی نخست.",
  },
  {
    title: "لورم ۲",
    href: "/docs/primitives/hover-card",
    description: "متنی نمونه جهت پیش‌نمایش محتوای لینک.",
  },
  {
    title: "لورم ۳",
    href: "/docs/primitives/progress",
    description: "نمایش میزان پیشرفت یک فرایند به صورت میله‌ای.",
  },
  {
    title: "لورم ۴",
    href: "/docs/primitives/scroll-area",
    description: "جداکنندهٔ بصری یا معنایی بین بخش‌های محتوا.",
  },
  {
    title: "لورم ۵",
    href: "/docs/primitives/tabs",
    description: "مجموعه بخش‌های لایه‌ای که یکی‌یکی نمایش داده می‌شوند.",
  },
  {
    title: "لورم ۶",
    href: "/docs/primitives/tooltip",
    description: "پنجرهٔ کوچک راهنما هنگام قرارگیری ماوس یا فوکوس.",
  },
]

export default function NavigationMenuComp() {
  return (
    <NavigationMenu viewport={false} dir="rtl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex-row items-center justify-between gap-4">
            کلاس های امروز
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 gap-1 ">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      لورم آی‌یو‌آی
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      مجموعه‌ای از کامپوننت‌ها با طراحی زیبا و Tailwind CSS.
                    </p>
                  </a>
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
            کلاس ها مجتمع
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex-row items-center justify-between gap-4">
            مدرسین
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">کامپوننت‌ها</div>
                    <div className="text-muted-foreground">
                      مرور همهٔ اجزای موجود در کتابخانه.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">مستندات</div>
                    <div className="text-muted-foreground">
                      یادگیری نحوهٔ استفاده از کتابخانه.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">وبلاگ</div>
                    <div className="text-muted-foreground">
                      آخرین مقالات و اخبار ما را بخوانید.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex-row items-center justify-between gap-4">
            کتاب
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">نمونه‌ها</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">راهنما</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">بلاک‌ها</Link>
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
