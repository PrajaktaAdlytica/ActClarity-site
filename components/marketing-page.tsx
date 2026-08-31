"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Database,
  FileCheck2,
  FileText,
  Fingerprint,
  LockKeyhole,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export type VisualKind =
  | "registry"
  | "matrix"
  | "lineage"
  | "roles"
  | "controls"
  | "docs"
  | "plans"
  | "map";

export type MarketingPageConfig = {
  current: string;
  variant: string;
  eyebrow: string;
  title: string;
  intro: string;
  primary: string;
  secondary: string;
  proof: Array<{ value: string; label: string }>;
  storyLabel: string;
  storyTitle: string;
  storyIntro: string;
  story: Array<{
    id: string;
    number: string;
    eyebrow: string;
    title: string;
    body: string;
    detail: string;
    visual: VisualKind;
  }>;
  capabilitiesLabel: string;
  capabilitiesTitle: string;
  capabilities: Array<{
    title: string;
    body: string;
    icon:
      | "inventory"
      | "evidence"
      | "security"
      | "roles"
      | "docs"
      | "controls";
  }>;
  callout: {
    label: string;
    title: string;
    body: string;
    visual: VisualKind;
  };
};

const iconMap = {
  inventory: Database,
  evidence: FileCheck2,
  security: ShieldCheck,
  roles: UsersRound,
  docs: BookOpen,
  controls: LockKeyhole,
};

function HeroVisual({ kind }: { kind: string }) {
  if (kind === "solutions") {
    return (
      <div className="page-hero-visual role-constellation" aria-hidden="true">
        <div className="constellation-record">
          <span className="brand-seed">
            <img src="/logo-mark.svg" alt="" />
          </span>
          <strong>One governed record</strong>
          <small>Shared context · clear accountability</small>
        </div>
        {["Legal", "Product", "Risk", "Security", "Procurement"].map(
          (role, index) => (
            <span className={`constellation-role role-${index + 1}`} key={role}>
              {role}
            </span>
          ),
        )}
        <i className="constellation-line line-1" />
        <i className="constellation-line line-2" />
        <i className="constellation-line line-3" />
        <i className="constellation-line line-4" />
        <i className="constellation-line line-5" />
      </div>
    );
  }

  if (kind === "security") {
    return (
      <div className="page-hero-visual security-gate" aria-hidden="true">
        <div className="gate-ring ring-1" />
        <div className="gate-ring ring-2" />
        <div className="gate-core">
          <ShieldCheck size={28} />
          <strong>Review ready</strong>
          <small>Evidence lineage intact</small>
        </div>
        {["Access", "History", "Controls", "Exports"].map((item, index) => (
          <span className={`gate-label gate-label-${index + 1}`} key={item}>
            <Check size={12} />
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (kind === "docs") {
    return (
      <div className="page-hero-visual docs-desk" aria-hidden="true">
        <div className="docs-search">
          <Search size={15} />
          Search ActClarity docs
          <kbd>⌘ K</kbd>
        </div>
        <div className="docs-sheet sheet-back">
          <small>GUIDE 03</small>
          <strong>Evidence readiness</strong>
        </div>
        <div className="docs-sheet sheet-middle">
          <small>GUIDE 02</small>
          <strong>Risk classification</strong>
        </div>
        <div className="docs-sheet sheet-front">
          <span>
            <BookOpen size={17} />
            GUIDE 01
          </span>
          <strong>Build your AI inventory</strong>
          <p>Owners · providers · purpose · deployment · change history</p>
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }

  if (kind === "pricing") {
    return (
      <div className="page-hero-visual pricing-ledger" aria-hidden="true">
        {[
          ["Inventory", "Start with visibility", "27 systems"],
          ["Compliance", "Connect obligations", "11 review ready"],
          ["Enterprise", "Govern every team", "5 functions"],
        ].map(([name, line, meta], index) => (
          <div className={`ledger-column ledger-${index + 1}`} key={name}>
            <small>0{index + 1}</small>
            <strong>{name}</strong>
            <span>{line}</span>
            <em>{meta}</em>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "company") {
    return (
      <div className="page-hero-visual company-field" aria-hidden="true">
        <span className="field-coordinate">35.1856° N · 33.3823° E</span>
        <div className="field-stem stem-1">
          <i />
          <i />
          <i />
        </div>
        <div className="field-stem stem-2">
          <i />
          <i />
        </div>
        <div className="field-stem stem-3">
          <i />
          <i />
          <i />
        </div>
        <div className="field-ground" />
        <div className="field-note">
          <span>Built in Saint Louis</span>
          <strong>For teams governing AI in the U.S. and globally.</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="page-hero-visual product-register-hero" aria-hidden="true">
      <div className="register-window">
        <div className="register-window-head">
          <span>
            <Database size={15} />
            AI system inventory
          </span>
          <small>27 systems</small>
        </div>
        {[
          ["TalentMatch EU", "Potential high risk", "Review ready"],
          ["Support Copilot", "Limited risk", "In progress"],
          ["CreditAssist", "Limited risk", "Evidence due"],
        ].map(([system, risk, status], index) => (
          <div className="register-window-row" key={system}>
            <i className={`row-tone tone-${index + 1}`} />
            <strong>{system}</strong>
            <span>{risk}</span>
            <small>{status}</small>
          </div>
        ))}
        <div className="register-window-summary">
          <span>8 require action</span>
          <span>11 audit ready</span>
        </div>
      </div>
      <div className="register-root root-1" />
      <div className="register-root root-2" />
      <div className="register-root root-3" />
    </div>
  );
}

function MiniVisual({ kind }: { kind: VisualKind }) {
  if (kind === "matrix") {
    return (
      <div className="mini-visual mini-matrix" aria-hidden="true">
        <span>Minimal</span>
        <span>Limited</span>
        <span className="active">High risk</span>
        <span>Prohibited</span>
        <i className="matrix-pointer" />
      </div>
    );
  }

  if (kind === "lineage") {
    return (
      <div className="mini-visual mini-lineage" aria-hidden="true">
        {["System", "Decision", "Evidence", "Approval"].map((item, index) => (
          <span key={item}>
            <i>{index + 1}</i>
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (kind === "roles") {
    return (
      <div className="mini-visual mini-roles" aria-hidden="true">
        <div>
          <img src="/logo-mark.svg" alt="" />
          Shared record
        </div>
        {["Legal", "Product", "Risk", "Security"].map((role) => (
          <span key={role}>{role}</span>
        ))}
      </div>
    );
  }

  if (kind === "controls") {
    return (
      <div className="mini-visual mini-controls" aria-hidden="true">
        {[
          ["Access policy", true],
          ["Change history", true],
          ["Evidence export", true],
          ["Owner review", false],
        ].map(([label, ready]) => (
          <span key={String(label)}>
            {ready ? <Check size={13} /> : <Fingerprint size={13} />}
            {label}
            <small>{ready ? "Current" : "Due"}</small>
          </span>
        ))}
      </div>
    );
  }

  if (kind === "docs") {
    return (
      <div className="mini-visual mini-docs" aria-hidden="true">
        <span>
          <FileText size={15} />
          Implementation guide
        </span>
        <strong>Document the decision, not only the outcome.</strong>
        <i />
        <i />
        <i />
      </div>
    );
  }

  if (kind === "plans") {
    return (
      <div className="mini-visual mini-plans" aria-hidden="true">
        {["Inventory", "Compliance", "Enterprise"].map((plan, index) => (
          <span className={index === 1 ? "active" : undefined} key={plan}>
            <i>0{index + 1}</i>
            {plan}
          </span>
        ))}
      </div>
    );
  }

  if (kind === "map") {
    return (
      <div className="mini-visual mini-map" aria-hidden="true">
        <span>Saint Louis</span>
        <span>Berlin</span>
        <span>Paris</span>
        <span>Amsterdam</span>
        <i className="map-route route-a" />
        <i className="map-route route-b" />
      </div>
    );
  }

  return (
    <div className="mini-visual mini-registry" aria-hidden="true">
      {["System", "Owner", "Provider", "Status"].map((label, index) => (
        <span key={label}>
          <i className={`tone-${index + 1}`} />
          {label}
          <small>{index === 3 ? "Ready" : "Recorded"}</small>
        </span>
      ))}
    </div>
  );
}

export function MarketingPage({ config }: { config: MarketingPageConfig }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let dispose = () => {};

    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("lenis"),
    ]).then(([gsapModule, scrollModule, lenisModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollModule.ScrollTrigger;
      const Lenis = lenisModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
      const update = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      const context = gsap.context(() => {
        gsap.from(".page-hero-copy > *", {
          y: 28,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
        });
        gsap.from(".page-hero-visual", {
          x: 56,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
        gsap.to(".page-hero-visual", {
          yPercent: 9,
          ease: "none",
          scrollTrigger: {
            trigger: ".page-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.from(".page-proof-item", {
          y: 24,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".page-proof-band",
            start: "top 84%",
          },
        });
        gsap.utils.toArray<HTMLElement>(".story-block").forEach((block, index) => {
          gsap.from(block, {
            x: index % 2 ? 70 : -70,
            y: 24,
            opacity: 0,
            rotate: index % 2 ? 0.8 : -0.8,
            scrollTrigger: {
              trigger: block,
              start: "top 82%",
              end: "top 42%",
              scrub: 0.8,
            },
          });
        });
        gsap.from(".capability-card", {
          y: 48,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".page-capability-grid",
            start: "top 80%",
          },
        });
        gsap.from(".page-callout-copy > *", {
          x: -40,
          opacity: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".page-callout",
            start: "top 76%",
          },
        });
        gsap.from(".page-callout-visual", {
          scale: 0.9,
          rotate: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: ".page-callout",
            start: "top 78%",
            end: "top 42%",
            scrub: 0.8,
          },
        });
      }, rootRef);

      ScrollTrigger.refresh();
      if (window.location.hash) {
        const anchor = document.querySelector<HTMLElement>(window.location.hash);
        if (anchor) {
          requestAnimationFrame(() => {
            lenis.scrollTo(anchor, { immediate: true, offset: -88 });
            ScrollTrigger.update();
          });
        }
      }
      dispose = () => {
        context.revert();
        lenis.destroy();
        gsap.ticker.remove(update);
      };
    });

    return () => dispose();
  }, []);

  return (
    <main
      ref={rootRef}
      className={`marketing-shell marketing-${config.variant}`}
    >
      <a className="skip-link" href="#page-main">
        Skip to main content
      </a>
      <SiteHeader current={config.current} />

      <section className="page-hero" id="page-main">
        <div className="page-hero-copy">
          <p className="page-eyebrow">{config.eyebrow}</p>
          <h1>{config.title}</h1>
          <p className="page-hero-intro">{config.intro}</p>
          <div className="button-row">
            <Link className="button primary" href="/request-demo">
              {config.primary}
              <ArrowUpRight size={16} />
            </Link>
            <a className="button secondary" href="#page-story">
              {config.secondary}
              <ArrowRight size={16} />
            </a>
          </div>
          <span className="page-hero-note">
            <ShieldCheck size={14} />
            Built for U.S. and global AI governance teams
          </span>
        </div>
        <HeroVisual kind={config.variant} />
        <span className="hero-folio" aria-hidden="true">
          ACTCLARITY / {config.current.toUpperCase()}
        </span>
      </section>

      <section className="page-proof-band" aria-label="Product proof points">
        {config.proof.map((item, index) => (
          <div className="page-proof-item" key={item.label}>
            <span>0{index + 1}</span>
            <strong>{item.value}</strong>
            <small>{item.label}</small>
          </div>
        ))}
      </section>

      <section className="page-story" id="page-story">
        <div className="page-story-heading">
          <p className="page-eyebrow">{config.storyLabel}</p>
          <h2>{config.storyTitle}</h2>
          <p>{config.storyIntro}</p>
        </div>
        <div className="story-blocks">
          {config.story.map((item) => (
            <article className="story-block" id={item.id} key={item.number}>
              <div className="story-copy">
                <span>{item.number} / {item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <small>{item.detail}</small>
              </div>
              <MiniVisual kind={item.visual} />
            </article>
          ))}
        </div>
      </section>

      <section className="page-capabilities">
        <div className="page-capability-heading">
          <p className="page-eyebrow">{config.capabilitiesLabel}</p>
          <h2>{config.capabilitiesTitle}</h2>
        </div>
        <div className="page-capability-grid">
          {config.capabilities.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <article className="capability-card" key={item.title}>
                <span className={`capability-icon capability-tone-${index + 1}`}>
                  <Icon size={20} />
                </span>
                <small>0{index + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ArrowUpRight className="capability-arrow" size={18} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-callout">
        <div className="page-callout-copy">
          <p className="page-eyebrow">{config.callout.label}</p>
          <h2>{config.callout.title}</h2>
          <p>{config.callout.body}</p>
          <Link className="text-link" href="/request-demo">
            Explore it with your own system
            <ArrowRight size={15} />
          </Link>
        </div>
        <div className="page-callout-visual">
          <MiniVisual kind={config.callout.visual} />
          <span className="callout-stamp">
            <PackageCheck size={17} />
            Review-ready workspace
          </span>
        </div>
      </section>

      {config.variant === "company" ? (
        <section className="company-details" aria-label="Company information">
          <article id="careers">
            <span>01 / Careers</span>
            <h2>Help build calm tools for consequential work.</h2>
            <p>
              We are building a focused European product company across
              governance, product design, and engineering.
            </p>
            <a href="mailto:careers@actclarity.com">
              careers@actclarity.com
              <ArrowUpRight size={15} />
            </a>
          </article>
          <article id="contact">
            <span>02 / Contact</span>
            <h2>Start with one AI system and one real workflow.</h2>
            <p>
              Tell us what your teams build or buy and where governance work
              currently loses context.
            </p>
            <a href="mailto:hello@actclarity.com">
              hello@actclarity.com
              <ArrowUpRight size={15} />
            </a>
          </article>
          <article id="privacy">
            <span>03 / Privacy</span>
            <h2>Your enquiry stays focused on your evaluation.</h2>
            <p>
              Demo and newsletter details are used to respond to your request
              and provide the updates you choose to receive.
            </p>
            <a href="mailto:privacy@actclarity.com">
              Privacy enquiries
              <ArrowUpRight size={15} />
            </a>
          </article>
          <article id="terms">
            <span>04 / Terms</span>
            <h2>Clear scope, careful claims, accountable decisions.</h2>
            <p>
              ActClarity supports governance and documentation workflows that
              keep decisions, obligations, and evidence in one reviewable
              workspace.
            </p>
            <a href="mailto:legal@actclarity.com">
              Terms enquiries
              <ArrowUpRight size={15} />
            </a>
          </article>
        </section>
      ) : null}

      <section className="page-final-cta">
        <span className="cta-spark" aria-hidden="true">
          <Sparkles size={22} />
        </span>
        <p className="page-eyebrow">A practical first step</p>
        <h2>Bring one AI system. Leave with a clearer governance plan.</h2>
        <p>
          Map the system, walk through likely obligations, and see the evidence
          trail your teams can maintain together.
        </p>
        <Link className="button primary" href="/request-demo">
          Request a working session
          <ArrowUpRight size={16} />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
