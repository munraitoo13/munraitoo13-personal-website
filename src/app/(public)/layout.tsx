import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { ScrollTop } from "@/components/common/ScrollTop";
import "../globals.css";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* scroll to top button */}
      <ScrollTop />

      {/* navbar */}
      <Navbar />

      {/* main content */}
      <main className="flex w-full flex-col items-center bg-gradient-to-t from-white from-80% dark:from-neutral-950">
        <div className="w-full max-w-screen-lg px-5 sm:px-10 md:px-20 xl:px-0">
          {children}
        </div>
      </main>

      {/* footer */}
      <Footer />
    </>
  );
}
