"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade-out after delay
    const fadeTimer = setTimeout(() => setFading(true), 800);
    // Remove from DOM after fade transition completes (500ms in CSS)
    const removeTimer = setTimeout(() => setVisible(false), 1300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${fading ? "fade-out" : ""}`} aria-hidden="true">
      <Image
        src="/images/preloader-logo.png"
        alt=""
        width={120}
        height={60}
        priority
      />
      <div className="preloader-spinner" />
    </div>
  );
}
