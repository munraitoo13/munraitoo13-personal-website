interface Header {
  pageTitle: string;
  pageDescription: string;
}

export function Header({ pageTitle, pageDescription }: Header) {
  return (
    <header className="flex flex-col gap-3 pt-48 pb-24">
      <h1 className="decoration-accent text-6xl underline">{pageTitle}</h1>
      <p>{pageDescription}</p>
    </header>
  );
}
