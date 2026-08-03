"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const announcementUrl =
  "https://tiphub-prototype-review.vercel.app/companies/actclarity";

const facts = [
  ["Company", "ActClarity"],
  ["Sector", "RegTech and AI compliance"],
  ["TipHub-announced allocation", "$550K"],
  ["Stage", "Early stage"],
  ["Scope", "Global"],
  ["Portfolio", "TipHub"],
] as const;

export function TipHubAnnouncementPage() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let dispose = () => {};
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, scrollModule]) => {
        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const context = gsap.context(() => {
          gsap.from(".news-hero-copy > *, .news-allocation-record > *", {
            y: 24,
            opacity: 0,
            duration: 0.72,
            stagger: 0.07,
            ease: "power3.out",
          });

          gsap.from(".news-reveal", {
            y: 28,
            opacity: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".news-body",
              start: "top 78%",
            },
          });
        }, rootRef);

        dispose = () => context.revert();
      },
    );

    return () => dispose();
  }, []);

  return (
    <main ref={rootRef} className="news-page">
      <a className="skip-link" href="#announcement-content">
        Skip to announcement
      </a>
      <SiteHeader current="company" />

      <header className="news-hero" id="announcement-content">
        <div className="news-hero-copy">
          <span className="news-eyebrow">Portfolio announcement</span>
          <h1>TipHub announces a $550K allocation to ActClarity.</h1>
          <p>
            ActClarity is joining the TipHub portfolio following a $550K
            TipHub-announced allocation. The partnership supports the
            company&apos;s work across RegTech and AI compliance.
          </p>
        </div>
        <aside className="news-allocation-record" aria-label="Allocation summary">
          <span>Portfolio record / 01</span>
          <div>
            <small>TipHub-announced allocation</small>
            <strong>$550K</strong>
          </div>
          <p>RegTech and AI compliance</p>
        </aside>
        <div className="news-hero-linework" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </header>

      <article className="news-body">
        <div className="news-article-copy news-reveal">
          <span className="news-section-label">The partnership</span>
          <p className="news-lede">
            We are building ActClarity to address an important operating
            problem within RegTech and AI compliance. TipHub&apos;s early-stage,
            global perspective aligns with our ambition to turn a focused
            insight into durable infrastructure.
          </p>
          <p>
            The relationship extends beyond capital to company-building
            support across product, market development, talent, and future
            growth.
          </p>
        </div>

        <section className="news-facts news-reveal" aria-labelledby="facts-title">
          <div className="news-facts-heading">
            <span className="news-section-label">At a glance</span>
            <h2 id="facts-title">Announcement facts</h2>
          </div>
          <dl>
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="news-links news-reveal" aria-labelledby="links-title">
          <div>
            <span className="news-section-label">Source and links</span>
            <h2 id="links-title">Continue reading</h2>
          </div>
          <div className="news-link-list">
            <a href={announcementUrl} target="_blank" rel="noreferrer">
              <span>
                <small>Official source</small>
                Visit TipHub announcement
              </span>
              <ArrowUpRight size={18} />
            </a>
            <a href="https://www.actclarity.com">
              <span>
                <small>Company</small>
                  Company website
              </span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <aside className="news-disclosure news-reveal" aria-label="Allocation disclosure">
          <strong>Disclosure</strong>
          <p>
            The allocation displayed is information supplied and announced by
            TipHub. It does not independently represent the company&apos;s total
            financing and may be updated if an official company disclosure
            differs.
          </p>
        </aside>

        <Link className="news-back-link news-reveal" href="/company">
          <ArrowLeft size={16} />
          Back to company
        </Link>
      </article>

      <SiteFooter />
    </main>
  );
}
