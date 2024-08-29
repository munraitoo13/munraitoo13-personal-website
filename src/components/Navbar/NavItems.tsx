import Link from "next/link";

// professional links
export const professional = [
  { name: "/experiences", href: "/professional/experiences" },
  { name: "/projects", href: "/professional/projects" },
  { name: "/skills-and-tools", href: "/professional/skills-and-tools" },
];

// personal links
export const personal = [
  { name: "/blog", href: "/personal/blog" },
  { name: "/contact", href: "/personal/contact" },
];

export default function NavItems() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      {/* professional */}
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <h1 className="rounded-full bg-neutral-900/25 px-5 py-2 font-bold">
          /professional
        </h1>

        {/* links */}
        {professional.map((item) => (
          <Link key={item.name} href={item.href} className="hover:text-red-600">
            {item.name}
          </Link>
        ))}
      </div>

      {/* personal */}
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <h1 className="rounded-full bg-neutral-900/25 px-5 py-2 font-bold">
          /personal
        </h1>

        {/* links */}
        {personal.map((item) => (
          <Link key={item.name} href={item.href} className="hover:text-red-600">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
