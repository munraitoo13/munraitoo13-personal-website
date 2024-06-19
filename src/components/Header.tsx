export default function Header({
  pageTitle,
  pageDescription,
}: {
  pageTitle: string;
  pageDescription: string;
}) {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-5 px-5 pb-28 pt-36 text-center">
      <h1 className="text-6xl font-bold">{pageTitle}</h1>
      <p className="text-xl opacity-75">{pageDescription}</p>
    </header>
  );
}
