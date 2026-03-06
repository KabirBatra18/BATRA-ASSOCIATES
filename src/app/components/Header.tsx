"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { navItems, serviceLinks } from "@/app/data/navigation";

interface HeaderProps {
  onMenuOpen: () => void;
  isSubPage?: boolean;
}

export default function Header({ onMenuOpen, isSubPage = false }: HeaderProps) {
  const [sticky, setSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation for dropdown
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setDropdownOpen(false);
      dropdownBtnRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!dropdownOpen) {
        setDropdownOpen(true);
      } else {
        const links = dropdownMenuRef.current?.querySelectorAll("a");
        if (links) {
          const focused = document.activeElement;
          const idx = Array.from(links).indexOf(focused as HTMLAnchorElement);
          const next = links[idx + 1] || links[0];
          (next as HTMLElement).focus();
        }
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const links = dropdownMenuRef.current?.querySelectorAll("a");
      if (links) {
        const focused = document.activeElement;
        const idx = Array.from(links).indexOf(focused as HTMLAnchorElement);
        const prev = links[idx - 1] || links[links.length - 1];
        (prev as HTMLElement).focus();
      }
    }
  }, [dropdownOpen]);

  const getHref = (target: string) =>
    isSubPage ? `/#${target}` : `#${target}`;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (isSubPage) return;
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
      window.scrollTo({ top: el.offsetTop - headerHeight, behavior: "smooth" });
    }
  };

  // On sub-pages, header sits over dark hero — use white text until scrolled
  const isTransparentOnDark = isSubPage && !sticky;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href={isSubPage ? "/" : "#home"} onClick={(e) => handleNavClick(e, "home")}>
          <Image
            src={isTransparentOnDark ? "/images/logo-white.png" : "/images/logo.png"}
            alt="Batra & Associates Logo"
            width={200}
            height={50}
            priority
            className="h-10 w-auto lg:h-12"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.target}>
                <a
                  href={getHref(item.target)}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className={`text-sm font-medium transition-colors ${
                    isTransparentOnDark
                      ? "text-white hover:text-white/80"
                      : "text-dark hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Services Dropdown */}
            <li ref={dropdownRef} className="relative" onKeyDown={handleDropdownKeyDown}>
              <button
                ref={dropdownBtnRef}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  }
                }}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  isTransparentOnDark
                    ? "text-white hover:text-white/80"
                    : "text-dark hover:text-primary"
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-controls="services-dropdown"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
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

              {dropdownOpen && (
                <div
                  ref={dropdownMenuRef}
                  id="services-dropdown"
                  role="menu"
                  className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                >
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-dark hover:bg-primary/5 hover:text-primary transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
            {/* Get a Quote CTA */}
            <li>
              <a
                href={isSubPage ? "/#contact" : "#contact"}
                onClick={(e) => handleNavClick(e, "contact")}
                className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger — min 44x44 touch target */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-3 min-w-[44px] min-h-[44px] items-center justify-center"
          onClick={onMenuOpen}
          aria-label="Open menu"
          aria-expanded="false"
        >
          <span className={`block w-6 h-0.5 ${isTransparentOnDark ? "bg-white" : "bg-dark"}`} />
          <span className={`block w-6 h-0.5 ${isTransparentOnDark ? "bg-white" : "bg-dark"}`} />
          <span className={`block w-6 h-0.5 ${isTransparentOnDark ? "bg-white" : "bg-dark"}`} />
        </button>
      </div>
    </header>
  );
}
