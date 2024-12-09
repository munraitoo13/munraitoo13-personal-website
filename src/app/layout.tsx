import { Cormorant } from "next/font/google";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "@/styles/main.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${cormorant.className} bg-background text-text`}>
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
            theme={"dark"}
          />
          {children}
        </NextIntlClientProvider>

        <ThemeToggle />
      </body>
    </html>
  );
}
