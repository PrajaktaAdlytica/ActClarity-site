"use client";

import {
  ArrowRight,
  Check,
  Database,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="demo-page-shell">
      <SiteHeader />
      <section className="demo-page">
        <div className="demo-page-copy">
          <p className="page-eyebrow">A focused working session</p>
          <h1>Bring one AI system. Leave with a clearer plan.</h1>
          <p>
            In 30 minutes, we will map the system, walk through its likely
            obligations, and show the evidence trail your teams can maintain
            together.
          </p>
          <div className="demo-outcomes">
            <article>
              <span>
                <Database size={18} />
              </span>
              <strong>Map</strong>
              <small>System, owner, provider, purpose, and deployment.</small>
            </article>
            <article>
              <span>
                <ShieldCheck size={18} />
              </span>
              <strong>Assess</strong>
              <small>Likely risk questions, obligations, and decisions.</small>
            </article>
            <article>
              <span>
                <FileCheck2 size={18} />
              </span>
              <strong>Connect</strong>
              <small>Evidence, controls, approvals, and review status.</small>
            </article>
          </div>
          <Link className="text-link" href="/product">
            Explore the product first
            <ArrowRight size={15} />
          </Link>
        </div>
        <div className="demo-page-form-panel">
          {submitted ? (
            <div className="demo-page-success" role="status">
              <span>
                <Check size={24} />
              </span>
              <p className="page-eyebrow">Request received</p>
              <h2>We will be in touch shortly.</h2>
              <p>
                Thank you. We will use your context to prepare a useful working
                session rather than a generic product tour.
              </p>
              <Link className="button secondary" href="/">
                Return home
                <ArrowRight size={15} />
              </Link>
            </div>
          ) : (
            <>
              <p className="page-eyebrow">Tell us about your context</p>
              <h2>Request your ActClarity demo.</h2>
              <form className="demo-page-form" onSubmit={submit}>
                <label>
                  Work email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.eu"
                    autoComplete="email"
                    required
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
                  <select name="role" defaultValue="" required>
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
                <label className="form-wide">
                  What would make this session useful?
                  <textarea
                    name="context"
                    placeholder="For example: replacing an AI register spreadsheet, classifying a new system, or preparing evidence for review."
                    rows={5}
                  />
                </label>
                <button className="button primary form-wide" type="submit">
                  Request demo
                  <ArrowRight size={16} />
                </button>
                <p className="form-note form-wide">
                  ActClarity will only use this information to respond to your
                  request.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
