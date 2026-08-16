"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ClipboardCheck,
  Code2,
  Database,
  FileCheck2,
  FileText,
  GitBranch,
  History,
  Linkedin,
  LockKeyhole,
  Mail,
  Minus,
  PackageCheck,
  Plus,
  Send,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";

const productTabs = [
  "Inventory",
  "Classification",
  "Evidence",
  "Obligations",
  "Controls",
];

const entryScenes = [
  {
    label: "Inventory",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_030107_874273ea-684a-4e90-bb96-8fdfde48d53d.mp4",
  },
  {
    label: "Classify",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4",
  },
  {
    label: "Evidence",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260627_094019_4214ea73-b963-46a4-8327-61489192de99.mp4",
  },
] as const;

const chapters = [
  {
    number: "03",
    eyebrow: "Inventory",
    title: "Know every AI system you are responsible for.",
    body: "Create one governed register for systems your organisation builds, buys, embeds, or pilots. Record ownership, providers, purpose, deployment context, and review status.",
    meta: "27 systems mapped",
    visual: "inventory",
  },
  {
    number: "04",
    eyebrow: "Classify",
    title: "Move from uncertainty to a documented assessment.",
    body: "Guide each system through risk, transparency, and organisational questions while preserving the reasoning behind every decision.",
    meta: "Assessments linked to obligations",
    visual: "classify",
  },
  {
    number: "05",
    eyebrow: "Evidence",
    title: "Keep evidence connected and ready for review.",
    body: "Link model cards, assessments, controls, documents, approvals, and change history to the systems they support.",
    meta: "11 records prepared for review",
    visual: "evidence",
  },
  {
    number: "06",
    eyebrow: "Collaboration",
    title: "Give every accountable team the same source of truth.",
    body: "Legal, product, risk, security, and procurement work from shared records while retaining role-specific views and responsibilities.",
    meta: "Five functions connected",
    visual: "roles",
  },
];

const systems = [
  {
    name: "TalentMatch EU",
    owner: "Product Team",
    provider: "OpenAI",
    risk: "Potential high risk",
    status: "Review ready",
    tone: "peach",
  },
  {
    name: "Support Copilot",
    owner: "Support Ops",
    provider: "Microsoft",
    risk: "Limited risk",
    status: "In progress",
    tone: "butter",
  },
  {
    name: "CreditAssist",
    owner: "Finance Team",
    provider: "AWS Bedrock",
    risk: "Limited risk",
    status: "Evidence due",
    tone: "lilac",
  },
  {
    name: "Demand Forecast",
    owner: "Growth Team",
    provider: "Internal",
    risk: "Minimal risk",
    status: "Review ready",
    tone: "mint",
  },
];

const roles = [
  {
    title: "Legal",
    description: "Know which obligations apply and why.",
    detail: "Review classifications and decisions without chasing product teams.",
    icon: BookOpen,
    tone: "mint",
  },
  {
    title: "Product",
    description: "Ship with requirements visible.",
    detail: "See the controls and evidence needed before a system reaches production.",
    icon: FileCheck2,
    tone: "blue",
  },
  {
    title: "Risk",
    description: "Prioritise systems by exposure.",
    detail: "Move from a scattered portfolio to a clear, reviewable risk picture.",
    icon: ShieldCheck,
    tone: "peach",
  },
  {
    title: "Security",
    description: "Connect controls to evidence.",
    detail: "Link technical assurance to the records legal and risk teams need.",
    icon: LockKeyhole,
    tone: "butter",
  },
  {
    title: "Procurement",
    description: "Assess vendors before purchase.",
    detail: "Capture provider information and open questions at the right moment.",
    icon: PackageCheck,
    tone: "lilac",
  },
];

const trustItems = [
  {
    title: "Evidence lineage",
    description: "See where every claim, decision, and document came from.",
    icon: GitBranch,
    tone: "mint",
  },
  {
    title: "Role-based access",
    description: "Keep sensitive records visible to the right teams.",
    icon: UsersRound,
    tone: "blue",
  },
  {
    title: "Review history",
    description: "Track changes, comments, decisions, and approvals.",
    icon: History,
    tone: "peach",
  },
  {
    title: "Exportable packs",
    description: "Prepare clear review artefacts without rebuilding the story.",
    icon: PackageCheck,
    tone: "butter",
  },
];

const trustedSectors = [
  "Financial services",
  "Health technology",
  "Enterprise SaaS",
  "Mobility",
  "Public sector",
  "Insurance",
];

const testimonials = [
  {
    quote:
      "We need product context, legal reasoning, and evidence to stay connected as the system changes.",
    role: "Head of AI Governance",
    organisation: "European financial services group",
    initials: "HG",
    tone: "blue",
    trail: ["Product context", "Legal reasoning", "Evidence"],
  },
  {
    quote:
      "A register is only useful when owners can see the next decision and the evidence needed to support it.",
    role: "Director of Product Risk",
    organisation: "Enterprise software company",
    initials: "PR",
    tone: "mint",
    trail: ["Accountable owner", "Next decision", "Required proof"],
  },
  {
    quote:
      "The hard part is not producing another document. It is keeping the governance story current across teams.",
    role: "Senior Legal Counsel",
    organisation: "Regulated technology business",
    initials: "LC",
    tone: "peach",
    trail: ["System change", "Team review", "Current record"],
  },
];

const plans = [
  {
    name: "Inventory",
    description: "For teams building their first complete AI register.",
    price: "From €790 / month",
    features: [
      "System inventory",
      "Ownership and providers",
      "Risk triage",
      "CSV import and export",
    ],
    cta: "Start inventory",
  },
  {
    name: "Compliance",
    description: "For teams operationalising EU AI Act readiness.",
    price: "Talk to sales",
    features: [
      "Everything in Inventory",
      "Classification workflows",
      "Model cards and evidence",
      "Review-ready exports",
    ],
    cta: "Request demo",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For complex groups and regulated portfolios.",
    price: "Custom",
    features: [
      "Everything in Compliance",
      "Advanced access controls",
      "Multi-entity reporting",
      "Priority onboarding",
    ],
    cta: "Talk to sales",
  },
];

const faqs = [
  {
    question: "Is ActClarity a legal advice service?",
    answer:
      "No. ActClarity is a workflow and evidence platform. It helps teams organise their AI governance work and collaborate with their legal advisers; it does not replace legal advice.",
  },
  {
    question: "Can we inventory third-party and embedded AI?",
    answer:
      "Yes. The register can cover systems your company builds, buys, embeds, pilots, or uses through a provider, with ownership and deployment context recorded for each one.",
  },
  {
    question: "How does classification stay current?",
    answer:
      "Classifications remain connected to the system record, evidence, decisions, and review history, so teams can revisit them when a use case, provider, or deployment context changes.",
  },
  {
    question: "What evidence can we export?",
    answer:
      "Teams can prepare structured packs containing system records, classifications, model cards, linked evidence, controls, decisions, and review history.",
  },
  {
    question: "Can teams use SSO and role-based access?",
    answer:
      "Enterprise workspaces can be configured around role-based access and organisation-level identity requirements during onboarding.",
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className="brand-lockup">
      <img
        src="/logo-mark.svg"
        alt=""
        className="brand-mark"
      />
      <span className={light ? "brand-name light" : "brand-name"}>
        ActClarity
      </span>
    </span>
  );
}

function ArtPicture({ name }: { name: string }) {
  const base = `/brand/${name}`;
  return (
    <picture>
      <source srcSet={`${base}.avif`} type="image/avif" />
      <source srcSet={`${base}.webp`} type="image/webp" />
      <img src={`${base}.png`} alt="" />
    </picture>
  );
}

function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`section-label${light ? " light" : ""}`}>
      <span>{number}</span>
      <span aria-hidden="true">/</span>
      {children}
    </p>
  );
}

function ChapterVisual({ type }: { type: string }) {
  if (type === "inventory") {
    return (
      <div className="chapter-visual chapter-register" aria-hidden="true">
        <div className="visual-toolbar">
          <span>AI system register</span>
          <small>27 systems</small>
        </div>
        {[
          ["TalentMatch EU", "Product", "Review required"],
          ["Support Copilot", "Operations", "In progress"],
          ["Demand Forecast", "Growth", "Mapped"],
        ].map(([name, owner, status], index) => (
          <div className="visual-system-row" key={name}>
            <span className={`record-dot ${["peach", "blue", "mint"][index]}`} />
            <strong>{name}</strong>
            <span>{owner}</span>
            <small>{status}</small>
          </div>
        ))}
        <div className="visual-summary">
          <span>8 require review</span>
          <span>11 evidence complete</span>
        </div>
      </div>
    );
  }

  if (type === "classify") {
    return (
      <div className="chapter-visual chapter-classifier" aria-hidden="true">
        <div className="classifier-question">
          <span>Purpose and deployment</span>
          <strong>Does the system support an employment decision?</strong>
          <div>
            <span className="selected">Yes</span>
            <span>No</span>
            <span>Needs review</span>
          </div>
        </div>
        <div className="risk-matrix">
          <span className="matrix-label">Impact</span>
          {Array.from({ length: 9 }, (_, index) => (
            <i className={index === 7 ? "active" : ""} key={index} />
          ))}
          <span className="matrix-axis">Likelihood</span>
        </div>
        <div className="classification-result">
          <ShieldCheck size={18} />
          <span>
            <small>Workflow assessment</small>
            <strong>Potential high-risk classification</strong>
          </span>
        </div>
      </div>
    );
  }

  if (type === "evidence") {
    return (
      <div className="chapter-visual chapter-evidence-pack" aria-hidden="true">
        <div className="evidence-spine">
          <span />
          <span />
          <span />
        </div>
        {[
          ["Model card", "Current"],
          ["Risk assessment", "Reviewed"],
          ["Human oversight", "Linked"],
        ].map(([title, status], index) => (
          <article className={`mini-evidence evidence-${index + 1}`} key={title}>
            <FileText size={18} />
            <small>Evidence 0{index + 1}</small>
            <strong>{title}</strong>
            <span>
              <Check size={12} />
              {status}
            </span>
          </article>
        ))}
        <div className="evidence-pack-label">
          <PackageCheck size={18} />
          Review pack · version 1.4
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-visual chapter-role-network" aria-hidden="true">
      <div className="role-network-center">
        <img src="/logo-mark.svg" alt="" />
        <strong>One governed record</strong>
        <span>Shared context</span>
      </div>
      {["Legal", "Product", "Risk", "Security", "Procurement"].map(
        (role, index) => (
          <span className={`role-node role-node-${index + 1}`} key={role}>
            {role}
          </span>
        ),
      )}
      <svg viewBox="0 0 560 360" preserveAspectRatio="none">
        <path d="M280 180 L108 70 M280 180 L445 75 M280 180 L485 235 M280 180 L280 320 M280 180 L72 245" />
      </svg>
    </div>
  );
}

function DemoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && modalRef.current) {
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((element) => !element.hasAttribute("disabled"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        ref={modalRef}
        className="demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="icon-button modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close demo request"
        >
          <X size={20} />
        </button>
        {submitted ? (
          <div className="form-success" role="status">
            <span className="success-icon">
              <Check size={24} />
            </span>
            <SectionLabel number="Thank you">Request received</SectionLabel>
            <h2 id="demo-title">We’ll make the session useful.</h2>
            <p>
              Your request has been captured for this demo. A production
              integration can route it to your CRM or scheduling workflow.
            </p>
            <button className="button primary" type="button" onClick={onClose}>
              Return to ActClarity
            </button>
          </div>
        ) : (
          <>
            <SectionLabel number="30 min">Working session</SectionLabel>
            <h2 id="demo-title">Bring your AI register. Or start with ours.</h2>
            <p className="modal-intro">
              We’ll map one real system, assess its likely obligations, and
              show how its evidence trail would work.
            </p>
            <form className="demo-form" onSubmit={submit}>
              <label>
                Work email
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.eu"
                  autoComplete="email"
                  required
                  autoFocus
                />
              </label>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  autoComplete="organization"
                  required
                />
              </label>
              <label>
                Your role
                <select name="role" defaultValue="">
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option>Legal or compliance</option>
                  <option>Risk or governance</option>
                  <option>Product or engineering</option>
                  <option>Security</option>
                  <option>Procurement</option>
                  <option>Executive leadership</option>
                </select>
              </label>
              <button className="button primary form-submit" type="submit">
                Request demo
                <ArrowUpRight size={16} />
              </button>
              <p className="form-note">
                By submitting, you agree that ActClarity may contact you about
                this request.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function ActClarityHome() {
  const rootRef = useRef<HTMLElement>(null);
  const demoTriggerRef = useRef<HTMLElement | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProductTab, setActiveProductTab] = useState("Inventory");
  const [activeEntryScene, setActiveEntryScene] = useState(0);
  const [nicosiaTime, setNicosiaTime] = useState("--:--:--");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Nicosia",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const update = () => setNicosiaTime(formatter.format(new Date()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

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
      const lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });
      const update = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      const context = gsap.context(() => {
        gsap.from(".hero-copy > *", {
          y: 24,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
        });

        gsap.to(".hero-art", {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.from(".problem-card", {
          y: 32,
          opacity: 0,
          scale: 0.96,
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".problem-stage",
            start: "top 42%",
            end: "bottom 65%",
            scrub: 1,
          },
        });

        gsap.to(".problem-art", {
          xPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: ".problem-scroll",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        gsap.from(".trusted-strip-copy, .sector-list span", {
          y: 22,
          opacity: 0,
          stagger: 0.06,
          scrollTrigger: {
            trigger: ".trusted-strip",
            start: "top 86%",
          },
        });

        gsap.from(".portfolio-note-copy > *, .portfolio-note-record > *", {
          y: 24,
          opacity: 0,
          stagger: 0.07,
          scrollTrigger: {
            trigger: ".portfolio-note",
            start: "top 82%",
          },
        });

        const media = gsap.matchMedia();
        media.add("(min-width: 960px)", () => {
          const track = document.querySelector<HTMLElement>(".chapters-track");
          const progress = document.querySelector<HTMLElement>(
            ".chapter-progress span",
          );
          if (!track) return;
          const distance = () =>
            Math.max(0, track.scrollWidth - window.innerWidth);
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: ".chapters-section",
              start: "top top",
              end: "bottom bottom",
              pin: ".chapters-pin",
              scrub: 0.8,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (progress) {
                  progress.style.transform = `scaleX(${Math.max(0.08, self.progress)})`;
                }
              },
            },
          });
        });

        gsap.from(".observation-lens", {
          scale: 0.94,
          y: 50,
          opacity: 0,
          scrollTrigger: {
            trigger: ".observatory",
            start: "top 72%",
            end: "top 24%",
            scrub: 1,
          },
        });

        gsap.from(".evidence-card", {
          y: 34,
          opacity: 0,
          stagger: 0.11,
          scrollTrigger: {
            trigger: ".connected-evidence",
            start: "top 78%",
          },
        });

        gsap.from(".role-card", {
          y: (index) => (index % 2 ? 42 : 20),
          opacity: 0,
          stagger: 0.09,
          scrollTrigger: {
            trigger: ".roles-grid",
            start: "top 78%",
          },
        });

        gsap.from(".testimonial-heading > *", {
          y: 36,
          opacity: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top 82%",
            end: "top 48%",
            scrub: 0.8,
          },
        });

        gsap.from(".continuity-rail-line span", {
          scaleX: 0,
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: ".continuity-rail",
            start: "top 82%",
            end: "top 46%",
            scrub: 1,
          },
        });

        gsap.from(".continuity-node", {
          y: 16,
          opacity: 0,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".continuity-rail",
            start: "top 74%",
            end: "top 42%",
            scrub: 0.8,
          },
        });

        gsap.from(".testimonial-card", {
          x: (index) => [-70, 0, 70][index] ?? 0,
          y: (index) => [82, 34, 92][index] ?? 50,
          opacity: 0,
          rotate: (index) => [-1.4, 0.8, 1.2][index] ?? 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".testimonial-grid",
            start: "top 88%",
            end: "top 38%",
            scrub: 1,
          },
        });

        gsap.to(".testimonial-backdrop-mark", {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.from(".trust-item", {
          x: -24,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".trust-grid",
            start: "top 76%",
          },
        });

        gsap.from(".price-card", {
          y: (index) => (index === 1 ? 64 : 38),
          opacity: 0,
          rotate: (index) => [-0.7, 0.4, 0.7][index] ?? 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 82%",
            end: "top 48%",
            scrub: 0.7,
          },
        });

        gsap.from(".faq-item", {
          x: 32,
          opacity: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 82%",
          },
        });

        gsap.from(".final-cta-copy > *", {
          x: -42,
          opacity: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".final-cta",
            start: "top 76%",
          },
        });

        gsap.from(".session-step", {
          y: 24,
          opacity: 0,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".session-path",
            start: "top 78%",
          },
        });
      }, rootRef);

      ScrollTrigger.refresh();
      dispose = () => {
        context.revert();
        lenis.destroy();
        gsap.ticker.remove(update);
      };
    });

    return () => dispose();
  }, []);

  function openDemo() {
    demoTriggerRef.current = document.activeElement as HTMLElement | null;
    setDemoOpen(true);
  }

  function closeDemo() {
    setDemoOpen(false);
    requestAnimationFrame(() => demoTriggerRef.current?.focus());
  }

  return (
    <main ref={rootRef} className="site-shell">
      <link
        rel="preload"
        as="image"
        href="/brand/actclarity-evidence-garden.avif"
        type="image/avif"
      />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <SiteHeader darkAtTop />

      <section className="entry-hero" id="top" aria-labelledby="entry-title">
        <div className="entry-videos" aria-hidden="true">
          {entryScenes.map((scene, index) => (
            <video
              className={activeEntryScene === index ? "active" : undefined}
              key={scene.src}
              src={scene.src}
              muted
              autoPlay
              playsInline
              loop
              preload={index === 0 ? "auto" : "metadata"}
            />
          ))}
        </div>
        <div className="entry-scrim" aria-hidden="true" />
        <div className="entry-content">
          <div className="entry-control-row">
            <div
              className="entry-switcher"
              aria-label="ActClarity product pillars"
            >
              {entryScenes.map((scene, index) => (
                <button
                  className={activeEntryScene === index ? "active" : undefined}
                  type="button"
                  key={scene.label}
                  aria-pressed={activeEntryScene === index}
                  onClick={() => setActiveEntryScene(index)}
                >
                  <span>0{index + 1} /</span>
                  {scene.label}
                </button>
              ))}
            </div>
            <div className="entry-status">
              <span>
                <i aria-hidden="true" />
                EU AI Act workspace
              </span>
              <span>Nicosia {nicosiaTime}</span>
            </div>
          </div>
          <div className="entry-identity-row">
            <h1 id="entry-title">
              ActClarity<span>.</span>
            </h1>
            <div className="entry-intro">
              <p>
                One governed workspace to inventory AI, classify obligations,
                and keep evidence ready for review.
              </p>
              <a href="#foundation">
                Enter the workspace
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" id="foundation">
        <div className="hero-art" aria-hidden="true">
          <ArtPicture name="actclarity-evidence-garden" />
        </div>
        <div className="hero-copy" id="main-content">
          <SectionLabel number="01">The foundation</SectionLabel>
          <h1>Compliance grows from knowing what you have.</h1>
          <p className="hero-lede">
            Inventory AI systems, assess likely obligations, and cultivate a
            living evidence trail.
          </p>
          <div className="button-row">
            <button
              className="button primary"
              type="button"
              onClick={openDemo}
            >
              Request demo
              <ArrowUpRight size={16} />
            </button>
            <a className="button secondary" href="#product">
              <span className="desktop-button-label">Explore the product</span>
              <span className="mobile-button-label">Explore</span>
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="readiness-row">
            <span className="status-pill">
              <ShieldCheck size={14} />
              Supports EU AI Act readiness
            </span>
            <span>Built for European teams</span>
          </div>
        </div>
        <div className="hero-annotations" aria-hidden="true">
          <span className="annotation governance">Governance</span>
          <span className="annotation transparency">Transparency</span>
          <span className="annotation accountability">Accountability</span>
          <span className="annotation oversight">Human oversight</span>
        </div>
        <a className="scroll-cue" href="#problem" aria-label="Continue to problem">
          <span>Scroll to discover</span>
          <ArrowRight size={14} />
        </a>
      </section>

      <section className="trusted-strip" aria-labelledby="trusted-heading">
        <div className="trusted-strip-copy">
          <span className="trusted-pulse" aria-hidden="true" />
          <p id="trusted-heading">Built for teams trusted with AI decisions</p>
          <small>Early-access programme · Cyprus and the European Union</small>
        </div>
        <div className="sector-list" aria-label="Industries ActClarity supports">
          {trustedSectors.map((sector) => (
            <span key={sector}>{sector}</span>
          ))}
        </div>
      </section>

      <section className="portfolio-note" aria-labelledby="portfolio-note-title">
        <div className="portfolio-note-copy">
          <span className="portfolio-note-eyebrow">Portfolio announcement</span>
          <h2 id="portfolio-note-title">
            TipHub announces a $550K allocation to ActClarity.
          </h2>
          <p>
            ActClarity is joining the TipHub portfolio as it builds practical
            infrastructure for RegTech and AI compliance.
          </p>
          <div className="portfolio-note-actions">
            <a className="button primary" href="/news/tiphub-allocation">
              Read the announcement
              <ArrowRight size={16} />
            </a>
            <a
              className="text-link"
              href="https://tiphub-prototype-review.vercel.app/companies/actclarity"
              target="_blank"
              rel="noreferrer"
            >
              Visit TipHub
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="portfolio-note-record" aria-label="Announcement summary">
          <span className="portfolio-note-index">Company record / 01</span>
          <div className="portfolio-note-allocation">
            <small>TipHub-announced allocation</small>
            <strong>$550K</strong>
          </div>
          <dl>
            <div>
              <dt>Company</dt>
              <dd>ActClarity</dd>
            </div>
            <div>
              <dt>Sector</dt>
              <dd>RegTech and AI compliance</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>Global</dd>
            </div>
          </dl>
        </div>
        <div className="portfolio-note-linework" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
      </section>

      <section className="problem-scroll" id="problem">
        <div className="problem-stage">
          <div className="problem-art" aria-hidden="true">
            <ArtPicture name="actclarity-fragment-map" />
          </div>
          <div className="problem-copy">
            <SectionLabel number="02">The problem</SectionLabel>
            <h2>
              AI lives in fragments.
              <em>Risk does too.</em>
            </h2>
            <p>
              Systems, models, and tools are built everywhere. Ownership is
              unclear. Obligations are missed. Evidence is scattered.
            </p>
          </div>
          <div
            className="problem-cards"
            aria-label="Disconnected AI governance records"
          >
            <article className="problem-card fragment-deployment">
              <header className="fragment-header">
                <span className="fragment-icon blue">
                  <Database size={15} />
                </span>
                <span>Deployment record</span>
                <span className="fragment-badge peach">Production</span>
              </header>
              <strong>CV ranking service</strong>
              <dl className="fragment-fields">
                <div>
                  <dt>Owner</dt>
                  <dd>Unassigned</dd>
                </div>
                <div>
                  <dt>Region</dt>
                  <dd>EU</dd>
                </div>
              </dl>
              <p className="fragment-alert">
                <span aria-hidden="true">!</span>
                No risk decision linked
              </p>
            </article>

            <article className="problem-card fragment-vendor">
              <header className="fragment-header">
                <span className="fragment-icon peach">
                  <Mail size={15} />
                </span>
                <span>Vendor intake</span>
                <span className="fragment-badge">External</span>
              </header>
              <strong>NeuralHire API</strong>
              <div
                className="fragment-progress"
                aria-label="6 of 14 questions answered"
              >
                <span style={{ width: "43%" }} />
              </div>
              <footer className="fragment-footer">
                <span>6 of 14 answered</span>
                <b>Legal review missing</b>
              </footer>
            </article>

            <article className="problem-card fragment-notebook">
              <header className="fragment-header">
                <span className="fragment-icon mint">
                  <Code2 size={15} />
                </span>
                <span>Evaluation notebook</span>
                <span className="fragment-badge butter">Stale</span>
              </header>
              <strong>Bias checks / v7</strong>
              <div className="notebook-metric">
                <span>Last test run</span>
                <b>8 months ago</b>
              </div>
              <p className="fragment-alert">
                <span aria-hidden="true">!</span>
                No model card attached
              </p>
            </article>

            <article className="problem-card fragment-folder">
              <header className="fragment-header">
                <span className="fragment-icon lilac">
                  <ClipboardCheck size={15} />
                </span>
                <span>Evidence folder</span>
                <span className="fragment-badge lilac">Draft</span>
              </header>
              <strong>AI controls / Q3</strong>
              <ul className="fragment-checklist">
                <li>
                  <Check size={13} />
                  DPIA.pdf
                  <small>Current</small>
                </li>
                <li className="is-missing">
                  <Minus size={13} />
                  Oversight plan
                  <small>Missing</small>
                </li>
                <li className="is-open">
                  <History size={13} />
                  Approval email
                  <small>Unresolved</small>
                </li>
              </ul>
            </article>
          </div>
          <p className="trace-note">Trace the hidden ownership paths</p>
        </div>
      </section>

      <section className="chapters-section" id="product">
        <div className="chapters-pin">
          <div className="chapters-intro">
            <SectionLabel number="03—06">The ActClarity method</SectionLabel>
            <h2>From scattered systems to a living compliance programme.</h2>
          </div>
          <div className="chapters-track">
            {chapters.map((chapter) => (
              <article className="chapter-panel" key={chapter.number}>
                <div className="chapter-copy">
                  <p className="chapter-eyebrow">
                    <span>{chapter.number}</span> / {chapter.eyebrow}
                  </p>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.body}</p>
                  <div className="chapter-actions">
                    <span className="chapter-meta">
                      <Check size={14} />
                      {chapter.meta}
                    </span>
                    <a href="#observatory">
                      Explore {chapter.eyebrow.toLowerCase()}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
                <ChapterVisual type={chapter.visual} />
              </article>
            ))}
          </div>
          <div className="chapter-progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      <section className="observatory" id="observatory">
        <div className="observatory-copy">
          <SectionLabel number="07">The workspace</SectionLabel>
          <h2>See every AI system in one governed view.</h2>
          <p>
            ActClarity Inventory gives you a single, accurate register of AI
            systems across your organisation, with roles, providers, usage,
            classification, and evidence connected.
          </p>
          <div className="button-row">
            <button
              className="button primary"
              type="button"
              onClick={openDemo}
            >
              Request demo
              <ArrowUpRight size={16} />
            </button>
            <a className="button secondary" href="#evidence">
              Explore Inventory
              <ArrowRight size={16} />
            </a>
          </div>
          <aside className="paper-note">
            <span>Today</span>
            <strong>23 July 2026</strong>
            <p>Compliance is an ongoing system, not a project.</p>
          </aside>
        </div>

        <div className="paper-observatory">
          <div className="paper-sheet sheet-back" aria-hidden="true" />
          <div className="paper-sheet sheet-middle" aria-hidden="true" />
          <div className="observation-lens">
            <div className="product-tabs" role="tablist" aria-label="Product views">
              {productTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={activeProductTab === tab ? "active" : ""}
                  role="tab"
                  aria-selected={activeProductTab === tab}
                  aria-controls="product-tab-panel"
                  onClick={() => setActiveProductTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div id="product-tab-panel" role="tabpanel">
              {activeProductTab === "Inventory" ? (
                <>
                  <div className="inventory-toolbar">
                    <strong>AI systems</strong>
                    <span>27 illustrative records</span>
                    <button type="button">All environments</button>
                  </div>
                  <div
                    className="inventory-table"
                    role="table"
                    aria-label="Illustrative AI inventory"
                  >
                    <div className="inventory-row inventory-head" role="row">
                      <span role="columnheader">AI system</span>
                      <span role="columnheader">Owner</span>
                      <span role="columnheader">Provider</span>
                      <span role="columnheader">Assessment</span>
                      <span role="columnheader">Review status</span>
                    </div>
                    {systems.map((system) => (
                      <div className="inventory-row" role="row" key={system.name}>
                        <span role="cell" className="system-name">
                          <i className="system-dot" />
                          {system.name}
                        </span>
                        <span role="cell">{system.owner}</span>
                        <span role="cell">{system.provider}</span>
                        <span role="cell">
                          <small className={`risk-chip ${system.tone}`}>
                            {system.risk}
                          </small>
                        </span>
                        <span role="cell" className="audit-status">
                          <i />
                          {system.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="product-tab-placeholder">
                  <span>{activeProductTab}</span>
                  <h3>
                    {activeProductTab === "Classification" &&
                      "Assess and document likely obligations."}
                    {activeProductTab === "Evidence" &&
                      "Keep every governance artefact connected."}
                    {activeProductTab === "Obligations" &&
                      "Translate requirements into owned work."}
                    {activeProductTab === "Controls" &&
                      "Link operational controls to supporting evidence."}
                  </h3>
                  <p>
                    This view is part of the ActClarity workspace and shares the
                    same system record, ownership, and review history.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="observatory-stats">
            <div>
              <strong>27</strong>
              <span>AI systems</span>
            </div>
            <div>
              <strong className="attention">8</strong>
              <span>Potential high risk</span>
            </div>
            <div>
              <strong>11</strong>
              <span>Review ready</span>
            </div>
            <div>
              <strong className="attention">6</strong>
              <span>Evidence due</span>
            </div>
          </div>
        </div>

        <div className="connected-evidence" id="evidence">
          <div className="evidence-heading">
            <span>Connected evidence</span>
            <p>Evidence labels connect systems to decisions and approvals.</p>
          </div>
          {[
            ["Model card", "TalentMatch EU", "blue"],
            ["Risk assessment", "Potential high risk", "peach"],
            ["DPIA summary", "Linked", "mint"],
            ["Conformity log", "Version 1A", "butter"],
            ["Evidence pack", "Exported today", "lilac"],
          ].map(([title, meta, tone]) => (
            <article className={`evidence-card ${tone}`} key={title}>
              <FileText size={18} />
              <strong>{title}</strong>
              <span>{meta}</span>
              <small>Current · linked</small>
            </article>
          ))}
        </div>
      </section>

      <section className="roles-section" id="solutions">
        <div className="section-heading">
          <SectionLabel number="08">Built for every role</SectionLabel>
          <h2>One source of truth. Different ways in.</h2>
          <p>
            The same evidence adapts to the question each team needs to answer.
          </p>
        </div>
        <div className="roles-grid">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <article className="role-card" key={role.title}>
                <span className={`role-icon ${role.tone}`}>
                  <Icon size={20} />
                </span>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <div className="role-detail">{role.detail}</div>
                <a href="#product">
                  View solution
                  <ArrowRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="testimonial-section" aria-labelledby="voices-heading">
        <span className="testimonial-backdrop-mark" aria-hidden="true">
          CONTINUITY
        </span>
        <div className="testimonial-heading">
          <SectionLabel number="09">Design-partner perspectives</SectionLabel>
          <h2 id="voices-heading">
            Governance leaders are asking for continuity, not another checklist.
          </h2>
          <p>
            The product direction is shaped around recurring needs from
            European legal, risk, product, and governance teams.
          </p>
        </div>
        <div className="continuity-rail" aria-hidden="true">
          <div className="continuity-rail-line">
            <span />
          </div>
          {["Context", "Decision", "Evidence"].map((label, index) => (
            <div className="continuity-node" key={label}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
            </div>
          ))}
          <p>One governance story, kept intact as the system changes.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <figure className={`testimonial-card ${testimonial.tone}`} key={testimonial.role}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="perspective-chain" aria-label="Perspective themes">
                {testimonial.trail.map((item, trailIndex) => (
                  <span key={item}>
                    {item}
                    {trailIndex < testimonial.trail.length - 1 ? (
                      <ArrowRight size={12} aria-hidden="true" />
                    ) : null}
                  </span>
                ))}
              </div>
              <figcaption>
                <span className="testimonial-avatar" aria-hidden="true">
                  {testimonial.initials}
                </span>
                <span>
                  <strong>{testimonial.role}</strong>
                  <small>{testimonial.organisation}</small>
                </span>
                <em>Representative profile</em>
              </figcaption>
              <span className="testimonial-index">0{index + 1}</span>
            </figure>
          ))}
        </div>
        <p className="testimonial-disclaimer">
          Representative design-partner perspectives for this product demo, not
          attributed customer endorsements.
        </p>
      </section>

      <section className="trust-section" id="security">
        <div className="trust-heading">
          <SectionLabel number="10" light>
            Security and trust
          </SectionLabel>
          <h2>Audit confidence is built before the audit.</h2>
          <p>
            ActClarity keeps decisions, evidence, and ownership connected from
            first inventory to final review.
          </p>
        </div>
        <div className="trust-grid">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="trust-item" key={item.title}>
                <span className={`trust-icon ${item.tone}`}>
                  <Icon size={18} />
                </span>
                <span className="trust-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
        <a className="text-link light" href="#docs">
          Security overview
          <ArrowRight size={15} />
        </a>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="section-heading">
          <SectionLabel number="11">Plans</SectionLabel>
          <h2>Start with your register. Grow into your programme.</h2>
          <p>
            Choose the workspace depth that matches your AI portfolio and
            review cadence.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`price-card${plan.featured ? " featured" : ""}`}
              key={plan.name}
            >
              {plan.featured && <span className="popular-pill">Most complete</span>}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <strong className="plan-price">{plan.price}</strong>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>
                      <Check size={13} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`button ${plan.featured ? "primary" : "secondary"}`}
                type="button"
                onClick={openDemo}
              >
                {plan.cta}
                <ArrowUpRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="docs">
        <div className="faq-heading">
          <SectionLabel number="12">Questions</SectionLabel>
          <h2>The practical details.</h2>
          <p>
            For legal, risk, product, and procurement teams evaluating
            ActClarity.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const open = openFaq === index;
            return (
              <article className={`faq-item${open ? " open" : ""}`} key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-${index}`}
                    onClick={() => setOpenFaq(open ? null : index)}
                  >
                    {faq.question}
                    {open ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </h3>
                <div id={`faq-${index}`} className="faq-answer" hidden={!open}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="final-cta" id="company">
        <div className="final-cta-copy">
          <SectionLabel number="Next">
            A practical first step
          </SectionLabel>
          <h2>Bring one AI system. Leave with a clearer governance plan.</h2>
          <p>
            In a focused working session, we will map the system, walk through
            its likely obligations, and show the evidence trail your teams can
            maintain together.
          </p>
          <div className="button-row">
            <button
              className="button primary"
              type="button"
              onClick={openDemo}
            >
              Request demo
              <ArrowUpRight size={16} />
            </button>
            <a className="button secondary" href="mailto:hello@actclarity.com">
              Contact us
              <Send size={15} />
            </a>
          </div>
        </div>
        <div className="session-path" aria-label="What happens in a demo session">
          {[
            ["01", "Map", "System, owner, provider, use"],
            ["02", "Assess", "Likely risk and obligations"],
            ["03", "Connect", "Evidence, controls, decisions"],
          ].map(([number, title, detail]) => (
            <div className="session-step" key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <small>{detail}</small>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" aria-label="ActClarity home">
              <BrandMark light />
            </a>
            <p>
              EU AI Act compliance workspace for teams building and buying AI.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Product</strong>
              <a href="/product#inventory">Inventory</a>
              <a href="/product#classification">Classify</a>
              <a href="/product#evidence">Evidence</a>
              <a href="/pricing">Pricing</a>
            </div>
            <div>
              <strong>Solutions</strong>
              <a href="/solutions#legal">Legal</a>
              <a href="/solutions#product">Product</a>
              <a href="/solutions#risk">Risk</a>
              <a href="/solutions#procurement">Procurement</a>
            </div>
            <div>
              <strong>Resources</strong>
              <a href="/docs">Docs</a>
              <a href="/security">Security</a>
              <a href="/company#contact">Contact</a>
              <a href="/docs#eu-ai-act">EU AI Act guide</a>
            </div>
            <div>
              <strong>Company</strong>
              <a href="/company">About</a>
              <a href="/news/tiphub-allocation">Portfolio announcement</a>
              <a href="/company#careers">Careers</a>
              <a href="/company#privacy">Privacy</a>
              <a href="/company#terms">Terms</a>
            </div>
          </div>
        </div>
        <div className="footer-newsletter">
          <div>
            <h2>Stay current on practical AI governance.</h2>
            <p>One useful note when the work changes. No noise.</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setNewsletterSubmitted(true);
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Work email
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Work email"
              required
            />
            <button type="submit" aria-label="Subscribe">
              {newsletterSubmitted ? <Check size={17} /> : <ArrowRight size={17} />}
            </button>
          </form>
          {newsletterSubmitted && (
            <span className="newsletter-success" role="status">
              You’re on the list.
            </span>
          )}
          <a
            className="social-link"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={17} />
            LinkedIn
          </a>
        </div>
        <div className="footer-legal">
          <span>
            © 2026 ActClarity. 4658 Summer Boulevard · Nicosia, NIC 1076 ·
            Cyprus · Phone: 24 894310
          </span>
          <span id="privacy">Privacy</span>
          <span id="terms">Terms</span>
          <span>Accessibility</span>
        </div>
        <p className="legal-disclaimer">
          ActClarity provides governance and documentation tooling, not legal
          advice, conformity assessment, certification, or a guarantee of
          compliance. Product records shown on this site are illustrative.
        </p>
      </footer>

      <DemoModal open={demoOpen} onClose={closeDemo} />
    </main>
  );
}
