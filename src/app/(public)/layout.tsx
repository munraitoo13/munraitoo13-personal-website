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
      <ScrollTop />
      <Navbar />

      <main className="layout">{children}</main>

      <Footer />
    </>
  );
}
