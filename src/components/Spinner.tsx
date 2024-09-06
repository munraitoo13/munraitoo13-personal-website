export default function Spinner() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 bg-neutral-50 dark:bg-neutral-950">
      {/* spinner */}
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-4 border-neutral-50 border-t-red-600 dark:border-neutral-900/25 dark:border-t-red-600"></div>
      <p>Loading...</p>
    </div>
  );
}
