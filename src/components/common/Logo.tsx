import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="text-nowrap">
      <span>&lt;</span>

      <span className="text-primary">munraitoo13</span>

      <span> /&gt;</span>
    </Link>
  );
}
