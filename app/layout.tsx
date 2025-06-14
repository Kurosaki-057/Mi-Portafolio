import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import SocialLinks from "@/components/social-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Mi portafolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Navbar />
        <ScrollToTop />
        <SocialLinks />
      </body>
    </html>
  );
}