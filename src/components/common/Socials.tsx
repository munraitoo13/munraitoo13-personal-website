import { cn } from "@/lib/cn";
import { SOCIALS } from "@/constants/constants";
import Link from "next/link";

type SocialsProps = {
  className?: string;
  linkClassName?: string;
};

export function Socials({ className, linkClassName }: SocialsProps) {
  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      {SOCIALS.map(({ href, Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          className={cn("hover:text-accent", linkClassName)}
        >
          <Icon stroke={1.25} />
        </Link>
      ))}
    </div>
  );
}
