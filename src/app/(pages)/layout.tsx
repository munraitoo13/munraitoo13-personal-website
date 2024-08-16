"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import ScrollTop from "@/app/components/ScrollTop";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname === "/login") {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* scroll to top button */}
        <ScrollTop />

        {/* navbar */}
        <Navbar />

        {/* main content */}
        <main className="flex w-full flex-col items-center overflow-x-hidden overflow-y-hidden bg-gradient-to-t from-neutral-999 from-80%">
          <div className="w-full max-w-screen-xl space-y-36 px-10">
            {children}
          </div>
        </main>

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
