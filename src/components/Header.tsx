export default function Header({
  pageTitle,
  pageDescription,
}: {
  pageTitle: string;
  pageDescription: string;
}) {
  return (
    <header className="flex w-full flex-col justify-center gap-5 px-5 pb-20 pt-48">
      <h1 className="text-6xl font-bold">{pageTitle}</h1>
      <p className="text-xl opacity-75">{pageDescription}</p>
    </header>
  );
}
