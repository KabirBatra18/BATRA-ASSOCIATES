"use client";

import { useState } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

interface ClientShellProps {
  isSubPage?: boolean;
}

export default function ClientShell({ isSubPage = false }: ClientShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setMenuOpen(true)} isSubPage={isSubPage} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} isSubPage={isSubPage} />
    </>
  );
}
