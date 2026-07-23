import type { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your ActClarity workspace.",
};

export default function SignInPage() {
  return (
    <main className="auth-page">
      <Link className="auth-brand" href="/" aria-label="Return to ActClarity home">
        <img src="/logo-mark.svg" alt="" />
        <span>ActClarity</span>
      </Link>
      <div className="auth-art" aria-hidden="true">
        <picture>
          <source
            srcSet="/brand/actclarity-evidence-garden.avif"
            type="image/avif"
          />
          <source
            srcSet="/brand/actclarity-evidence-garden.webp"
            type="image/webp"
          />
          <img src="/brand/actclarity-evidence-garden.png" alt="" />
        </picture>
      </div>
      <section className="auth-panel">
        <p className="section-label">
          <span>Workspace</span>
          <span aria-hidden="true">/</span>
          Secure access
        </p>
        <h1>Welcome back.</h1>
        <p className="auth-intro">
          Sign in to continue your organisation’s AI governance work.
        </p>
        <SignInForm />
        <a className="auth-support" href="mailto:support@actclarity.com">
          Need help accessing your workspace?
        </a>
      </section>
    </main>
  );
}
