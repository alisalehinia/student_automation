
import type { Metadata } from "next"
import Login from "@/allPages/auth/login"

export const metadata: Metadata = {
  title: "ورود | سیستم مدیریت آموزش",
  description: "صفحه ورود به پنل کاربری سیستم مدیریت آموزش",
  keywords: ["ورود", "حساب کاربری", "سیستم آموزشی", "login"],
  robots: "noindex, nofollow", 
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title: "ورود به سیستم آموزشی",
    description: "با ورود به حساب خود، به کلاس‌ها و اطلاعات آموزشی دسترسی پیدا کنید.",
    url: "https://yourdomain.com/login",
    siteName: "سیستم مدیریت آموزش",
    locale: "fa_IR",
    type: "website",
  },
}

export default function LoginPage() {
  return <Login />
}
