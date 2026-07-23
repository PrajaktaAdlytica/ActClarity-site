"use client";

import { ArrowRight, Check, KeyRound } from "lucide-react";
import { FormEvent, useState } from "react";

export function SignInForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="auth-success" role="status">
        <span>
          <Check size={18} />
        </span>
        <div>
          <strong>Check your inbox</strong>
          <p>
            This demo has prepared a secure sign-in link. Production
            authentication will connect to your organisation’s identity
            provider.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="auth-form" onSubmit={submit}>
      <button className="sso-button" type="button">
        <KeyRound size={17} />
        Continue with SSO
      </button>
      <div className="auth-divider">
        <span>or continue with email</span>
      </div>
      <label htmlFor="sign-in-email">Work email</label>
      <input
        id="sign-in-email"
        name="email"
        type="email"
        placeholder="you@company.eu"
        autoComplete="email"
        required
      />
      <button className="button primary auth-submit" type="submit">
        Send secure link
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
