"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-0 right-0 z-50 mb-5 mr-5">
      {theme === "dark" ? (
        <IconSun
          stroke={1.25}
          onClick={() => setTheme("light")}
          className="cursor-pointer text-neutral-700 hover:text-white"
        />
      ) : (
        <IconMoon
          stroke={1.25}
          onClick={() => setTheme("dark")}
          className="cursor-pointer text-neutral-300 hover:text-neutral-900"
        />
      )}
    </div>
  );
}
