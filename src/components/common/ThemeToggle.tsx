"use client";

import { useTheme } from "@/hooks/useTheme";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="bg-background/75 text-primary border-background-contrast fixed top-5 right-5 z-50 rounded-full border p-3 backdrop-blur-md transition-opacity hover:opacity-75"
    >
      {isDark ? <IconSun stroke={1.25} /> : <IconMoon stroke={1.25} />}
    </button>
  );
}
