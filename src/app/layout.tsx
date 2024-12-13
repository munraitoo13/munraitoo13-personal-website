import "@/styles/main.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
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
            theme={"dark"}
          />
          {children}
        </NextIntlClientProvider>
      </body>

      <GoogleAnalytics gaId="G-D8094R1DSH" />
    </html>
  );
}
