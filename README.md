# ActClarity

ActClarity is a premium EU AI Act compliance workspace for teams that build,
buy, or operate AI systems. The product experience brings AI inventory,
obligation assessment, evidence, model cards, controls, and review preparation
into one governed workspace.

This repository contains the public website and its polished sign-in demo.

## Experience

- Editorial, scroll-led homepage with Lenis and GSAP ScrollTrigger
- Responsive AI system inventory and evidence observatory
- Accessible navigation, dialogs, disclosures, forms, and reduced-motion states
- Finalized ActClarity logo, favicon, typography, color system, and illustrations
- Dedicated sign-in route with realistic demo states

## Local Development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm test
```

`npm test` creates the Vinext production build and verifies the homepage,
sign-in route, metadata, assets, and interaction dependencies.

## Project Structure

- `app/`: pages, interactions, and visual system
- `public/brand/`: responsive illustration assets
- `public/logo.svg`: primary brand lockup
- `public/logo-mark.svg`: standalone mark
- `public/favicon.svg`: browser icon
- `design-qa.md`: final visual and interaction QA record

## Product Disclaimer

ActClarity provides governance and documentation tooling. It is not legal
advice, a conformity assessment, certification, or a guarantee of compliance.
