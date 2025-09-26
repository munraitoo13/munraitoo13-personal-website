import { SOCIALS } from "@/constants/constants";
import Link from "next/link";

export function Socials() {
  return (
    <div className="flex items-center justify-center gap-1">
      {SOCIALS.map(({ href, Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          className="hover:text-accent"
        >
          <Icon stroke={1.25} />
        </Link>
      ))}
    </div>
  );
}
