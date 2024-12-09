"use client";

import { useTheme } from "@/hooks/useTheme";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-0 right-0 z-50 mb-5 mr-5">
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
