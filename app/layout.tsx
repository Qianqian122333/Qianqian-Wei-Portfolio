import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qian Qian Wei",
  description: "Qian Qian Wei's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="min-h-screen bg-black text-amber-50 flex flex-col md:flex-row">
          <nav className="w-full md:w-2/5">
            <Navbar />
          </nav>
          <main className="w-full md:w-3/5">{children}</main>
        </div>
      </body>
    </html>
  );
}
