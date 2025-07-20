import type { Metadata } from "next"
import ForgotPasswordConfirm from "@/allPages/auth/forgort-password-confirm";


export const metadata: Metadata = {
  title: "فراموشی رمز ",
  description: "بازیابی رمز عبور کاربر ",
  keywords: ["فراموشی رمز", "حساب کاربری", "سیستم آموزشی", "forgot password"],
  robots: "noindex, nofollow", 
  alternates: {
    canonical: "/forgot-password-confirm",
  },
  openGraph: {
    title: "ورود به سیستم آموزشی",
    description: "با ورود به حساب خود، به کلاس‌ها و اطلاعات آموزشی دسترسی پیدا کنید.",
    url: "https://yourdomain.com/auth/forgot-password-confirm",
    siteName: "سیستم مدیریت آموزش",
    locale: "fa_IR",
    type: "website",
  },
}

type props = {
    params: {
        token: string
    };
}

export default async function ForgotPasswordConfirmPagePage({params} : props) {
    const { token } = await params;
   
  return <ForgotPasswordConfirm params={{token}}/>
}
