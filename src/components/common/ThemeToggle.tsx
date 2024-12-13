"use client";

import { useTheme } from "@/hooks/useTheme";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 z-50 text-tertiary opacity-25">
      {theme === "dark" ? (
        <IconSun
          stroke={1.25}
          onClick={() => setTheme("light")}
          className="cursor-pointer"
        />
      ) : (
        <IconMoon
          stroke={1.25}
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}
