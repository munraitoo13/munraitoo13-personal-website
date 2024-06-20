export default function Links() {
  const professional = [
    { name: "Projects", href: "/professional/projects" },
    { name: "Experiences", href: "/professional/experiences" },
    { name: "Skills & Tools", href: "/professional/skills-and-tools" },
  ];

  const personal = [
    { name: "Blog", href: "/personal/blog" },
    { name: "Contact", href: "/personal/contact" },
  ];

  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      {/* professional */}
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <h1 className="rounded-full bg-neutral-900 px-5 py-2">Professional</h1>

        {professional.map((item) => (
          // put a dot after each link if not the last one

          <a
            key={item.name}
            href={item.href}
            className="hover:opacity-75"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* personal */}
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <h1 className="rounded-full bg-neutral-900 px-5 py-2">Personal</h1>

        {personal.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:opacity-75"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
