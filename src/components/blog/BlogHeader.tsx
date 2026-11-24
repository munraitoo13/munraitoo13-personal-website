interface BlogHeaderProps {
  title: string;
  description: string;
  language: string;
  date: string;
}

export function BlogHeader({
  title,
  description,
  language,
  date,
}: BlogHeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-[var(--color-border)] pb-10">
      <p className="text-tertiary font-mono text-xs uppercase tracking-[0.16em]">
        {date} · {language}
      </p>
      <h1 className="text-primary text-4xl font-medium tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="text-secondary max-w-2xl text-base leading-relaxed md:text-lg">
        {description}
      </p>
    </header>
  );
}
