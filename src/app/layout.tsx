import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ScrollTop";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* scroll to top button */}
        <ScrollTop />

        {/* navbar */}
        <Navbar />

        {/* main content */}
        <main className="flex w-full flex-col items-center overflow-x-hidden overflow-y-hidden bg-gradient-to-t from-neutral-999 from-80%">
          <div className="w-full max-w-screen-xl space-y-36 px-10">{children}</div>
        </main>

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
