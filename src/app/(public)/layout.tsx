import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { ScrollTop } from "@/components/common/ScrollTop";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import "@/styles/main.css";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollTop />
      <Navbar />

      <main>{children}</main>

      <Footer />
      <ThemeToggle />
    </>
  );
}
