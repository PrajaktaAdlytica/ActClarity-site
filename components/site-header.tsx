"use client";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuItem = {
  label: string;
  href: string;
  description: string;
};

type NavigationItem =
  | {
      label: string;
      href: string;
      menu?: undefined;
    }
  | {
      label: string;
      href?: undefined;
      menu: MenuItem[];
    };

const navigation: NavigationItem[] = [
  {
    label: "Product",
    menu: [
      {
        label: "Product overview",
        href: "/product",
        description: "The complete governed workflow",
      },
      {
        label: "Inventory",
        href: "/product#inventory",
        description: "Map systems, owners, and providers",
      },
      {
        label: "Classify",
        href: "/product#classification",
        description: "Preserve risk reasoning and obligations",
      },
      {
        label: "Evidence",
        href: "/product#evidence",
        description: "Connect proof to every decision",
      },
    ],
  },
  {
    label: "Solutions",
    menu: [
      {
        label: "Solutions overview",
        href: "/solutions",
        description: "One workspace for accountable teams",
      },
      {
        label: "Legal and compliance",
        href: "/solutions#legal",
        description: "Review obligations with context",
      },
      {
        label: "Product and risk",
        href: "/solutions#product",
        description: "Make release requirements visible",
      },
      {
        label: "Procurement",
        href: "/solutions#procurement",
        description: "Assess AI providers before purchase",
      },
    ],
  },
  { label: "Security", href: "/security" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    menu: [
      {
        label: "About ActClarity",
        href: "/company",
        description: "Our mission and European focus",
      },
      {
        label: "Principles",
        href: "/company#principles",
        description: "How we build for consequential work",
      },
      {
        label: "Portfolio announcement",
        href: "/news/tiphub-allocation",
        description: "TipHub-announced $550K allocation",
      },
      {
        label: "Careers",
        href: "/company#careers",
        description: "Help build responsible AI infrastructure",
      },
      {
        label: "Contact",
        href: "/company#contact",
        description: "Start with one real AI workflow",
      },
    ],
  },
];

export function SiteHeader({
  current,
  darkAtTop = false,
}: {
  current?: string;
  darkAtTop?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () =>
      setScrolled(
        window.scrollY >
          (darkAtTop ? Math.max(24, window.innerHeight - 200) : 24),
      );
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [darkAtTop]);

  useEffect(() => {
    if (!open && !desktopOpen) return;
    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDesktopOpen(null);
      if (open) {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setDesktopOpen(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [desktopOpen, open]);

  function closeNavigation() {
    setOpen(false);
    setDesktopOpen(null);
    setMobileOpen(null);
  }

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " scrolled" : ""}${
        darkAtTop && !scrolled ? " dark-top" : ""
      }`}
    >
      <Link href="/" aria-label="ActClarity home" onClick={closeNavigation}>
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
        {navigation.map((item) => {
          const key = item.label.toLowerCase();
          if (!item.menu) {
            return (
              <Link
                className={`nav-direct${current === key ? " active" : ""}`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          }

          const expanded = desktopOpen === key;
          return (
            <div
              className="nav-group"
              key={item.label}
              onMouseEnter={() => setDesktopOpen(key)}
              onMouseLeave={() => setDesktopOpen(null)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setDesktopOpen(null);
                }
              }}
            >
              <button
                className={`nav-trigger${current === key ? " active" : ""}`}
                type="button"
                aria-expanded={expanded}
                aria-controls={`${key}-navigation-menu`}
                onClick={() => setDesktopOpen(expanded ? null : key)}
              >
                {item.label}
                <ChevronDown size={13} />
              </button>
              <div
                id={`${key}-navigation-menu`}
                className={`nav-dropdown${expanded ? " open" : ""}`}
                aria-hidden={!expanded}
              >
                <span className="nav-dropdown-label">
                  Explore {item.label.toLowerCase()}
                </span>
                {item.menu.map((entry, index) => (
                  <Link
                    href={entry.href}
                    key={entry.href}
                    onClick={closeNavigation}
                    tabIndex={expanded ? 0 : -1}
                  >
                    <span className="nav-menu-index">0{index + 1}</span>
                    <span>
                      <strong>{entry.label}</strong>
                      <small>{entry.description}</small>
                    </span>
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
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
          onClick={() => {
            setOpen((value) => !value);
            setMobileOpen(null);
          }}
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
        {navigation.map((item) => {
          if (!item.menu) {
            return (
              <Link href={item.href} key={item.href} onClick={closeNavigation}>
                {item.label}
                <ArrowRight size={16} />
              </Link>
            );
          }

          const key = item.label.toLowerCase();
          const expanded = mobileOpen === key;
          return (
            <div className="mobile-nav-group" key={item.label}>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`${key}-mobile-menu`}
                onClick={() => setMobileOpen(expanded ? null : key)}
              >
                {item.label}
                <ChevronDown size={17} />
              </button>
              <div
                id={`${key}-mobile-menu`}
                className={`mobile-submenu${expanded ? " open" : ""}`}
                hidden={!expanded}
              >
                {item.menu.map((entry) => (
                  <Link
                    href={entry.href}
                    key={entry.href}
                    onClick={closeNavigation}
                  >
                    <span>
                      <strong>{entry.label}</strong>
                      <small>{entry.description}</small>
                    </span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        <Link
          className="button primary"
          href="/request-demo"
          onClick={closeNavigation}
        >
          Request demo
          <ArrowUpRight size={16} />
        </Link>
      </nav>
    </header>
  );
}
