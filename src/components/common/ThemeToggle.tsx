"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setIsDark(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className={`${className}`}>
      {isDark ? (
        <IconSun
          stroke={1.25}
          onClick={() => setIsDark(false)}
          className="cursor-pointer text-neutral-700 hover:text-white"
        />
      ) : (
        <IconMoon
          stroke={1.25}
          onClick={() => setIsDark(true)}
          className="cursor-pointer text-neutral-300 hover:text-neutral-900"
        />
      )}
    </div>
  );
}
