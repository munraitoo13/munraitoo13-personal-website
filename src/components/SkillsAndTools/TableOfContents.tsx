export default function TableOfContents({ headings }: { headings: any }) {
  return (
    <nav className="h-fit rounded-xl bg-neutral-900 p-5">
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading: any) => {
          return (
            <li key={heading.id}>
              <a href={`#${heading.id}`}>{heading.value}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
