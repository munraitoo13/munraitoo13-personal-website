import { Button } from "@/components/common/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 py-48 text-center">
      <p className="text-accent text-sm uppercase tracking-widest">404</p>
      <h1 className="text-5xl">Page Not Found</h1>
      <p className="text-secondary max-w-md">
        The route you requested does not exist or has moved. Return home or
        reach out directly.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/contact">
          <Button variant="secondary">Contact</Button>
        </Link>
      </div>
    </section>
  );
}
