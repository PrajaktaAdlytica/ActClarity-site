import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete ActClarity homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>ActClarity \| EU AI Act compliance workspace \| ActClarity<\/title>/i,
  );
  assert.match(
    html,
    /Compliance grows from knowing what you have\./,
  );
  assert.match(html, /AI lives in fragments/);
  assert.match(html, /See every AI system in one governed view/);
  assert.match(html, /Request demo/);
  assert.match(html, /Supports EU AI Act readiness/);
  assert.match(html, /Built for teams trusted with AI decisions/);
  assert.match(html, /Design-partner perspectives/);
  assert.match(html, /Bring one AI system/);
  assert.match(html, /not legal advice/);
  assert.match(html, /Skip to main content/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Lovable/i);
});

test("server-renders a polished sign-in route", async () => {
  const response = await render("/sign-in");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Welcome back\./);
  assert.match(html, /Continue with SSO/);
  assert.match(html, /Send secure link/);
  assert.match(html, /Return to ActClarity home/);
});

test("keeps brand assets and finished metadata wired", async () => {
  const [page, layout, stylesheet, packageJson] = await Promise.all([
    readFile(new URL("../app/actclarity-home.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /actclarity-evidence-garden\.avif/);
  assert.match(page, /actclarity-fragment-map/);
  assert.match(page, /chapter-register/);
  assert.match(page, /testimonial-section/);
  assert.match(layout, /Source_Serif_4/);
  assert.match(layout, /Inter/);
  assert.match(layout, /favicon\.svg/);
  assert.match(stylesheet, /--ink:\s*#102f2a/);
  assert.match(stylesheet, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(packageJson, /"gsap"/);
  assert.match(packageJson, /"lenis"/);
  assert.match(packageJson, /"lucide-react"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
