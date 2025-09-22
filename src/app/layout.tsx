import type { Metadata } from "next";
import { Exo_2, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/SideBar";
import Topbar from "@/components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: "To Do App",
  description: "A comprehensive To do Application for handling tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo.variable} antialiased`}
      >
        <div className="w-full min-h-screen flex">
          <Sidebar />
          <div className="flex flex-col flex-1 min-h-screen ml-40"> 
            <Topbar />
            <main className="p-6 flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
