import { STACKS } from "@/constants/constants";

export function Stacks() {
  return (
    <div className="mt-4 flex items-center gap-4">
      {STACKS.map(({ name, Icon }) => (
        <Icon
          key={name}
          title={name}
          className="hover:text-accent flex"
          stroke={1.25}
        />
      ))}
    </div>
  );
}
