export function Markdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-4xl pt-24">
      {children}
    </div>
  );
}
