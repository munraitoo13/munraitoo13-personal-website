import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-nowrap">
      <span className="font-bold text-red-600">&lt;</span>

      <b className="text-white">munraitoo13</b>

      <span className="font-bold text-red-600"> /&gt;</span>
    </Link>
  );
}
