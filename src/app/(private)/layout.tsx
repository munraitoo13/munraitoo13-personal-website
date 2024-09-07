import "@/app/globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="h-screen w-screen p-10">
      <div className="flex h-full flex-col items-center justify-center gap-10 rounded-xl bg-white p-10 dark:bg-neutral-950">
        {children}
      </div>
    </main>
  );
}
