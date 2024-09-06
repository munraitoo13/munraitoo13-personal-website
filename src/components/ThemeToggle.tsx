"use client";
import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

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
    <>
      {isDark ? (
        <IconSun onClick={() => setIsDark(false)} className="cursor-pointer" />
      ) : (
        <IconMoon onClick={() => setIsDark(true)} className="cursor-pointer" />
      )}
    </>
  );
}
