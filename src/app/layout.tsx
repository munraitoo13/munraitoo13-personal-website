import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex w-full flex-col items-center bg-gradient-to-t from-neutral-999 via-neutral-999">
          <div className="max-w-screen-xl">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
