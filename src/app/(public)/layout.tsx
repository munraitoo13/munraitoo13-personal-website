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
        <div className="w-full max-w-screen-xl space-y-36 px-10 lg:px-32">
          {children}
        </div>
      </main>

      {/* footer */}
      <Footer />
    </>
  );
}
