"use client";

import { useState } from "react";

// logo
const Logo = () => {
  return (
    <a href="/" className="h-6 text-nowrap">
      <span className="font-bold text-red-600">&lt;</span>

      <b>munraitoo13</b>

      <span className="font-bold text-red-600"> /&gt;</span>
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return <nav className="p-4 pt-2"></nav>;
}
