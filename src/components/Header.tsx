export default function Header({
  pageTitle,
  pageDescription,
}: {
  pageTitle: string;
  pageDescription: string;
}) {
  return (
    <header className="flex w-full flex-col items-center justify-center pb-28 pt-36">
      <h1 className="text-6xl font-bold">{pageTitle}</h1>
      <p className="">{pageDescription}</p>
    </header>
  );
}
