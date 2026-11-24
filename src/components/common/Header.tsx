import { SectionLabel } from "@/components/common/SectionLabel";

interface HeaderProps {
  pageTitle: string;
  pageDescription: string;
  sectionLabel?: string;
  sectionIndex?: string;
}

export function Header({
  pageTitle,
  pageDescription,
  sectionLabel,
  sectionIndex,
}: HeaderProps) {
  return (
    <header className="bg-background border-b border-[var(--color-border)]">
      <div className="tui-rail flex flex-col gap-5 px-6 py-14 md:py-20">
        {(sectionLabel || sectionIndex) && (
          <SectionLabel
            label={sectionLabel ?? pageTitle}
            index={sectionIndex}
            className="w-fit"
          />
        )}

        <h1 className="font-serif text-primary max-w-3xl text-5xl font-normal tracking-tight md:text-6xl">
          {pageTitle}
        </h1>

        <p className="text-secondary max-w-2xl text-base leading-relaxed md:text-lg">
          {pageDescription}
        </p>
      </div>
    </header>
  );
}
