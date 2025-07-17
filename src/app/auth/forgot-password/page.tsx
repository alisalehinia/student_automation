
import type { Metadata } from "next"
import ForgotPassword from "@/allPages/auth/forgot-password"

export const metadata: Metadata = {
  title: "فراموشی رمز ",
  description: "بازیابی رمز عبور کاربر ",
  keywords: ["فراموشی رمز", "حساب کاربری", "سیستم آموزشی", "forgot password"],
  robots: "noindex, nofollow", 
  alternates: {
    canonical: "/forgot-password",
  },
  openGraph: {
    title: "ورود به سیستم آموزشی",
    description: "با ورود به حساب خود، به کلاس‌ها و اطلاعات آموزشی دسترسی پیدا کنید.",
    url: "https://yourdomain.com/auth/forgot-password",
    siteName: "سیستم مدیریت آموزش",
    locale: "fa_IR",
    type: "website",
  },
}

export default function ForgotPasswordPagePage() {
  return <ForgotPassword />
}
