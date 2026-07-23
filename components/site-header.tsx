"use client";

import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigation = [
  ["Product", "/product"],
  ["Solutions", "/solutions"],
  ["Security", "/security"],
  ["Docs", "/docs"],
  ["Pricing", "/pricing"],
  ["Company", "/company"],
] as const;

export function SiteHeader({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <Link href="/" aria-label="ActClarity home" onClick={() => setOpen(false)}>
        <span className="brand-lockup">
          <img
            className="brand-mark"
            src="/logo-mark.svg"
            alt=""
            width="32"
            height="32"
          />
          <span className="brand-name">ActClarity</span>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <Link
            className={current === label.toLowerCase() ? "active" : undefined}
            href={href}
            key={href}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link className="signin-link" href="/sign-in">
          Sign in
        </Link>
        <Link className="button primary header-cta" href="/request-demo">
          Request demo
          <ArrowUpRight size={15} />
        </Link>
        <button
          ref={menuButtonRef}
          className="icon-button menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav${open ? " open" : ""}`}
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map(([label, href]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {label}
            <ArrowRight size={16} />
          </Link>
        ))}
        <Link
          className="button primary"
          href="/request-demo"
          onClick={() => setOpen(false)}
        >
          Request demo
          <ArrowUpRight size={16} />
        </Link>
      </nav>
    </header>
  );
}
