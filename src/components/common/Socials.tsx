import { cn } from "@/lib/utils";
import { SOCIALS } from "@/constants/constants";
import Link from "next/link";

type SocialsProps = {
  className?: string;
  linkClassName?: string;
};

export function Socials({ className, linkClassName }: SocialsProps) {
  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      {SOCIALS.map(({ label, href, Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn("hover:text-accent", linkClassName)}
        >
          <Icon stroke={1.25} />
        </Link>
      ))}
    </div>
  );
}
