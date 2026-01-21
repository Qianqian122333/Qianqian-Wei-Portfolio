import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
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
      <body className={`${funnelSans.variable} font-sans antialiased `}>
        <div className="min-h-screen bg-black text-amber-50 flex flex-col md:flex-row">
          {/* <nav className="w-full md:w-2/5"> */}
          <nav className="w-full md:w-2/5 md:sticky md:top-0 md:h-screen overflow-y-auto">
            <Navbar />
          </nav>
          <main className="w-full md:w-3/5">{children}</main>
        </div>
      </body>
    </html>
  );
}
