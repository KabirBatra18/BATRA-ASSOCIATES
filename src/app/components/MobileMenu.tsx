"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { navItems, serviceLinks } from "@/app/data/navigation";
import { PHONE_FORMATTED, EMAIL } from "@/app/data/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isSubPage?: boolean;
}

export default function MobileMenu({ isOpen, onClose, isSubPage = false }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap + Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }

    if (e.key !== "Tab") return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusableEls = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableEls.length === 0) return;

    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const getHref = (target: string) =>
    isSubPage ? `/#${target}` : `#${target}`;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (isSubPage) {
      onClose();
      return;
    }
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
        window.scrollTo({ top: el.offsetTop - headerHeight, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[min(300px,85vw)] bg-primary z-[60] transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <Image
              src="/images/logo-white.png"
              alt="Batra & Associates"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="text-white text-3xl leading-none hover:opacity-70 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          {/* Nav */}
          <nav aria-label="Mobile navigation">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.target}>
                  <a
                    href={getHref(item.target)}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className="text-white text-lg font-medium hover:opacity-80 transition-opacity block py-2 border-b border-white/20"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Services Accordion */}
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-white text-lg font-medium hover:opacity-80 transition-opacity flex items-center justify-between w-full py-2 border-b border-white/20"
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services-list"
                >
                  Services
                  <svg
                    className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {servicesOpen && (
                  <ul id="mobile-services-list" className="mt-2 space-y-1 pl-3">
                    {serviceLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={onClose}
                          className="text-white/80 text-sm hover:text-white transition-colors block py-1.5"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="mt-10 space-y-4">
            <a
              href={`tel:${PHONE_FORMATTED.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {PHONE_FORMATTED}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
