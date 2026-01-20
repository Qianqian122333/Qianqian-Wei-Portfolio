import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
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
      <body className={`${comfortaa.variable} font-sans antialiased `}>
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
