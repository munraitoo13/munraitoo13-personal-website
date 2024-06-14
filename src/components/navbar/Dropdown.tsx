import { IconMoodLookRight } from "@tabler/icons-react";

export default function Dropdown({ name }: { name: string }) {
  return (
    <button
      disabled
      className="bg-neutral-900 px-5 py-2 rounded-2xl flex items-center gap-1">
      {name}
      <IconMoodLookRight size={14} stroke={2} />
    </button>
  );
}
