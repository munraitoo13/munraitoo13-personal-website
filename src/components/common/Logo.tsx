import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="text-nowrap">
      <span className="text-red-600">&lt;</span>

      <span className="text-neutral-900 dark:text-white">munraitoo13</span>

      <span className="text-red-600"> /&gt;</span>
    </Link>
  );
}
