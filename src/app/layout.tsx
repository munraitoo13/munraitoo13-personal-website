import { Inter } from "next/font/google";
import ThemeToggle from "@/components/common/ThemeToggle";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] text-sm text-neutral-700 [background-size:16px_16px] dark:bg-neutral-950 dark:bg-[radial-gradient(#101010_1px,transparent_1px)] dark:text-neutral-300`}
      >
        <NextIntlClientProvider messages={messages}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
          />
          {children}
        </NextIntlClientProvider>

        <ThemeToggle className="fixed bottom-0 right-0 z-50 mb-5 mr-5" />
      </body>
    </html>
  );
}
