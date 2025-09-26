import Link from "next/link";

interface Repos {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
}

export function Projects({ repos }: { repos: Repos[] }) {
  return (
    <section className="max-w-4xl space-y-12">
      {repos.map(({ html_url, id, name, description, language }) => (
        <Link
          href={html_url}
          key={id}
          target="_blank"
          className="flex items-center gap-8"
        >
          <hr className="border-background-contrast hidden w-12 md:inline" />

          <div className="flex-1">
            <h2 className="text-2xl">{name}</h2>
            <p>{description}</p>
            <p className="text-tertiary pt-4">{language}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
