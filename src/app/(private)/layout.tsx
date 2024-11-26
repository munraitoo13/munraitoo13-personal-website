import "@/app/globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen w-full flex-grow flex-col items-center justify-center gap-10 rounded-xl bg-white p-5 dark:bg-neutral-950">
      {children}
    </main>
  );
}
