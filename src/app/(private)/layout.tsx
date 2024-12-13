import { ThemeToggle } from "@/components/common/ThemeToggle";
import "@/styles/main.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {children}
      </main>

      <ThemeToggle />
    </>
  );
}
