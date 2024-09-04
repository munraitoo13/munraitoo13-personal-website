type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="h-screen w-screen p-5">
      <div className="flex h-full flex-col items-center gap-10 rounded-xl bg-neutral-950 p-10">
        {children}
      </div>
    </main>
  );
}
