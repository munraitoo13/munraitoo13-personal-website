interface BlogHeader {
  title: string;
  description: string;
  language: string;
  date: string;
}

export function BlogHeader({ title, description, language, date }: BlogHeader) {
  return (
    <header className="flex flex-col gap-4 pt-48">
      <small>
        {date}, {language}.
      </small>
      <h1 className="text-6xl">{title}</h1>
      <p>{description}</p>

      <hr className="border-background-contrast" />
    </header>
  );
}
