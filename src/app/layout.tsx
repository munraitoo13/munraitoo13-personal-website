import type { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { ScrollTop } from "@/components/common/ScrollTop";
import "@/styles/main.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
    <html
      lang={locale}
      className={`dark ${schibstedGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-secondary font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="bg-background-contrast text-primary sr-only z-50 border border-[var(--color-border-strong)] px-4 py-3 font-mono text-xs focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
          >
            Skip to main content
          </a>

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
            toastClassName="!rounded-none !bg-background-contrast !text-primary !border !border-[var(--color-border-strong)] !shadow-none !font-sans !text-sm"
          />

          <div className="flex min-h-dvh flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>

          <ScrollTop />
        </NextIntlClientProvider>

        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
