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
        "prose prose-neutral text-secondary max-w-3xl pt-8 leading-7",
        className,
      )}
    >
      {children}
    </div>
  );
}
