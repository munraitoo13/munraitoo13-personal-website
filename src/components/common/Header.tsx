interface HeaderProps {
  pageTitle: string;
  pageDescription: string;
}

export function Header({ pageTitle, pageDescription }: HeaderProps) {
  return (
    <section className="bg-background border-b border-[var(--color-border)]">
      <div className="tui-rail flex flex-col gap-4 px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 className="font-sans text-primary max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          {pageTitle}
        </h1>

        <p className="text-secondary max-w-[65ch] text-base leading-relaxed md:text-lg">
          {pageDescription}
        </p>
      </div>
    </section>
  );
}
