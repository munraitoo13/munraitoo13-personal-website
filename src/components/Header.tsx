export default function Header(
  { pageTitle }: { pageTitle: string } = { pageTitle: "Hello World!" },
) {
  return (
    <header className="flex w-full flex-col items-center justify-center pb-28 pt-36">
      <h1 className="text-6xl font-bold">{pageTitle}</h1>
    </header>
  );
}
