import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/Header";
import SidebarLayout from "@/components/layout";



export const metadata: Metadata = {
  title: "سیستم مدیریت اموزش",
  description: "مدیریت اموزش",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
       className="w-screen  overflow-x-hidden "
      >
          <ThemeProvider>
            <Header />
            <SidebarLayout />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
