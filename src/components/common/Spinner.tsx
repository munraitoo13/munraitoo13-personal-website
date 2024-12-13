export function Spinner() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-4 border-background-contrast border-t-accent"></div>

      <p>Loading</p>
    </div>
  );
}
