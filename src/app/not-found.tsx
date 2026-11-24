import { Button } from "@/components/common/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="tui-rail flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="text-accent font-mono text-xs uppercase tracking-[0.2em]">
        404 // NOT FOUND
      </p>
      <h1 className="text-primary text-4xl font-medium tracking-tight md:text-5xl">
        Page Not Found
      </h1>
      <p className="text-secondary max-w-md text-base">
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
