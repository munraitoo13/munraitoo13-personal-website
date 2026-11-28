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
          title={label}
          className={cn(
            "motion-press text-secondary hover:text-accent-text inline-flex size-11 items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-border-strong)]",
            linkClassName,
          )}
        >
          <Icon className="size-4" stroke={1.5} />
        </Link>
      ))}
    </div>
  );
}
