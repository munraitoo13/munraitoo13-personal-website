import { cn } from "@/lib/utils";

export function Markdown({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert text-secondary max-w-4xl pt-24 leading-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
