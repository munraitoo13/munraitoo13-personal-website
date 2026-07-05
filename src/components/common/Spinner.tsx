import { Spinner as ShadcnSpinner } from "@/components/ui/spinner";

export function Spinner() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <ShadcnSpinner className="text-accent size-5" />

      <p>Loading</p>
    </div>
  );
}
