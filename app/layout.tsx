import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Alexandros Karydas",
  description: "Portfolio of a Developer",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <MobileHeader />
      </body>
    </html>
  );
}
