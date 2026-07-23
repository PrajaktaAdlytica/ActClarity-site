"use client";

import { ArrowRight, Check, Linkedin } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export function SiteFooter() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="ActClarity home">
            <span className="brand-lockup">
              <img
                className="brand-mark"
                src="/logo-mark.svg"
                alt=""
                width="32"
                height="32"
              />
              <span className="brand-name light">ActClarity</span>
            </span>
          </Link>
          <p>
            EU AI Act compliance workspace for teams building and buying AI.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Product</strong>
            <Link href="/product#inventory">Inventory</Link>
            <Link href="/product#classification">Classify</Link>
            <Link href="/product#evidence">Evidence</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div>
            <strong>Solutions</strong>
            <Link href="/solutions#legal">Legal</Link>
            <Link href="/solutions#product">Product</Link>
            <Link href="/solutions#risk">Risk</Link>
            <Link href="/solutions#procurement">Procurement</Link>
          </div>
          <div>
            <strong>Resources</strong>
            <Link href="/docs">Docs</Link>
            <Link href="/security">Security</Link>
            <Link href="/company#contact">Contact</Link>
            <Link href="/docs#eu-ai-act">EU AI Act guide</Link>
          </div>
          <div>
            <strong>Company</strong>
            <Link href="/company">About</Link>
            <Link href="/company#careers">Careers</Link>
            <Link href="/company#privacy">Privacy</Link>
            <Link href="/company#terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="footer-newsletter">
        <div>
          <h2>Stay current on practical AI governance.</h2>
          <p>One useful note when the work changes. No noise.</p>
        </div>
        <form onSubmit={submit}>
          <label className="sr-only" htmlFor="site-newsletter-email">
            Work email
          </label>
          <input
            id="site-newsletter-email"
            type="email"
            name="email"
            placeholder="Work email"
            required
          />
          <button type="submit" aria-label="Subscribe">
            {submitted ? <Check size={17} /> : <ArrowRight size={17} />}
          </button>
        </form>
        {submitted ? (
          <span className="newsletter-success" role="status">
            You’re on the list.
          </span>
        ) : null}
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
        <span>© 2026 ActClarity. Warsaw, Poland · European Union</span>
        <Link href="/company#privacy">Privacy</Link>
        <Link href="/company#terms">Terms</Link>
        <span>Accessibility</span>
      </div>
      <p className="legal-disclaimer">
        ActClarity provides governance and documentation tooling, not legal
        advice, conformity assessment, certification, or a guarantee of
        compliance. Product records shown on this site are illustrative.
      </p>
    </footer>
  );
}
