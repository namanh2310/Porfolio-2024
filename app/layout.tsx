import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={` bg-mybg bg-[radial-gradient(#585a62,transparent_1px)] [background-size:24px_24px] ${spaceGrotesk.className}`}>
        <Navbar/>
        {children}
        <div className="h-8"></div>
        </body>
    </html>
  );
}
