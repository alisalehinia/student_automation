import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/Header";
import SidebarLayout from "@/components/layout";

import { Toaster } from "@/components/ui/sonner"
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: {
    default: "سیستم مدیریت آموزش",
    template: "%s | سیستم مدیریت آموزش",
  },
  description: "پنل مدیریت آموزش برای مشاهده کلاس‌ها، مدرسین و خرید کتاب",
  keywords: ["آموزش", "سیستم آموزشی", "کلاس آنلاین", "مدرسین", "کتاب", "سامانه آموزشی"],
  authors: [{ name: "نام شما یا شرکت", url: "https://yourdomain.com" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://yourdomain.com/",
  },
  openGraph: {
    title: "سیستم مدیریت آموزش",
    description: "مشاهده کلاس‌ها، خرید کتاب، مدیریت حساب و بیشتر",
    url: "https://yourdomain.com",
    siteName: "سیستم مدیریت آموزش",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سیستم مدیریت آموزش",
    description: "مدیریت کلاس‌ها، مدرسین و محتواهای آموزشی با یک سامانه مدرن.",
    site: "@YourTwitterHandle", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
       className="w-screen   overflow-x-hidden "
      >
          <ThemeProvider>
            <Providers>
              <Header />
              <SidebarLayout />
              {children}
              <Toaster />
            </Providers>
          </ThemeProvider>
      </body>
    </html>
  );
}
