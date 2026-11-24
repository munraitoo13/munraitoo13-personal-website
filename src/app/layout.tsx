import type { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { ScrollTop } from "@/components/common/ScrollTop";
import "@/styles/main.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://munraitoo13.dev"),
  title: {
    default: "Augusto Mendes | Full-Stack Software Engineer",
    template: "%s | Augusto Mendes",
  },
  description:
    "Full-Stack Software Engineer building scalable back-end systems, APIs, and modern web applications with Python, TypeScript, Go, FastAPI, Next.js, and React.",
  openGraph: {
    type: "website",
    siteName: "munraitoo13.dev",
    title: "Augusto Mendes | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building scalable back-end systems, APIs, and modern web applications.",
    url: "https://munraitoo13.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augusto Mendes | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building scalable back-end systems, APIs, and modern web applications.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-D8094R1DSH";

  return (
    <html lang={locale} className="dark">
      <body className={`${montserrat.className} text-secondary bg-background`}>
        <NextIntlClientProvider messages={messages}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

          <ScrollTop />
          <Navbar />

          <main className="container flex min-h-dvh flex-col">
            <div className="animate-page-enter flex-1">{children}</div>
            <Footer />
          </main>
        </NextIntlClientProvider>

        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
