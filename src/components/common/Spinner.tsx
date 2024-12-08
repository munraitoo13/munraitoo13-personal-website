export function Spinner() {
  return (
    <div className="bg-white flex h-screen flex-col items-center justify-center gap-5">
      <div className="border-neutral-100 h-5 w-5 animate-spin rounded-full border-2 border-t-4 border-t-primary"></div>

      <p>Loading...</p>
    </div>
  );
}
