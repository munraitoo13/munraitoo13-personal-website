import { ThemeToggle } from "@/components/common/ThemeToggle";
import "@/styles/main.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="flex max-h-dvh min-h-dvh flex-col items-center py-4">
        <div className="animate-page-enter flex w-full flex-1 flex-col items-center">
          {children}
        </div>
      </main>

      <ThemeToggle />
    </>
  );
}
