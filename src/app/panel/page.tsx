import Panel from "@/allPages/panel"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "پنل کاربری",
    description: " پنل کاربری سیستم مدیریت آموزش",
    keywords: [ "حساب کاربری", "سیستم آموزشی"],
    robots: "noindex, nofollow", 
    alternates: {
      canonical: "/panel",
    },
    openGraph: {
      title: " سیستم آموزشی",
      description: "با ورود به حساب خود، به کلاس‌ها و اطلاعات آموزشی دسترسی پیدا کنید.",
      url: "https://yourdomain.com/panel",
      siteName: "سیستم مدیریت آموزش",
      locale: "fa_IR",
      type: "website",
    },
  }

export default function PanelPage() {
    return <Panel/>
}