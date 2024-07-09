import Link from "next/link";

// professional links
export const professional = [
  { name: "Projects", href: "/professional/projects" },
  { name: "Experiences", href: "/professional/experiences" },
  { name: "Skills & Tools", href: "/professional/skills-and-tools" },
];

// personal links
export const personal = [
  { name: "Blog", href: "/personal/blog" },
  { name: "Contact", href: "/personal/contact" },
];

export default function NavItems() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      {/* professional */}
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <h1 className="rounded-full bg-neutral-900 px-5 py-2">Professional</h1>

        {/* links */}
        {professional.map((item) => (
          <Link href={item.href} className="hover:opacity-75">
            {item.name}
          </Link>
        ))}
      </div>

      {/* personal */}
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <h1 className="rounded-full bg-neutral-900 px-5 py-2">Personal</h1>

        {/* links */}
        {personal.map((item) => (
          <Link href={item.href} className="hover:opacity-75">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
