import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ScrollTop from "@/components/ScrollTop";
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

      <main className="flex w-full flex-col items-center overflow-x-hidden overflow-y-hidden bg-gradient-to-t from-neutral-950 from-80%">
        <div className="w-full max-w-screen-xl space-y-36 px-10">
          {children}
        </div>
      </main>

      {/* footer */}
      <Footer />
    </>
  );
}
