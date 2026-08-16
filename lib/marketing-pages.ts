import type { MarketingPageConfig } from "@/components/marketing-page";

export const productPage: MarketingPageConfig = {
  current: "product",
  variant: "product",
  eyebrow: "ActClarity product",
  title: "One governed record for every AI system.",
  intro:
    "Map the systems your organisation builds and buys, assess likely obligations, and keep every decision connected to current evidence.",
  primary: "Explore your workspace",
  secondary: "See the workflow",
  proof: [
    { value: "Inventory", label: "Know what exists and who owns it" },
    { value: "Classify", label: "Preserve risk reasoning and obligations" },
    { value: "Evidence", label: "Keep review artefacts current and connected" },
  ],
  storyLabel: "The governed workflow",
  storyTitle: "From first record to review-ready evidence.",
  storyIntro:
    "ActClarity gives each AI system a durable governance story that can evolve with the product, provider, and regulatory context.",
  story: [
    {
      id: "inventory",
      number: "01",
      eyebrow: "Inventory",
      title: "Build a complete, accountable AI register.",
      body:
        "Capture systems that are built, bought, embedded, piloted, or retired across every business unit.",
      detail: "Owners · providers · purpose · deployment · lifecycle",
      visual: "registry",
    },
    {
      id: "classification",
      number: "02",
      eyebrow: "Classify",
      title: "Turn uncertainty into a documented assessment.",
      body:
        "Guide teams through risk, transparency, and organisational questions while preserving why each answer was chosen.",
      detail: "Reasoning · obligations · review points · approvals",
      visual: "matrix",
    },
    {
      id: "evidence",
      number: "03",
      eyebrow: "Evidence",
      title: "Connect proof to the decision it supports.",
      body:
        "Link model cards, assessments, controls, policies, approvals, and change history to the governed system.",
      detail: "Lineage · freshness · ownership · export",
      visual: "lineage",
    },
  ],
  capabilitiesLabel: "Platform capabilities",
  capabilitiesTitle: "The working surface behind a living compliance programme.",
  capabilities: [
    {
      title: "Flexible inventory",
      body:
        "Import existing registers or build a structured estate from the ground up.",
      icon: "inventory",
    },
    {
      title: "Guided assessments",
      body:
        "Give product and legal teams a shared, reviewable classification process.",
      icon: "controls",
    },
    {
      title: "Evidence lineage",
      body:
        "Trace claims and decisions back to the documents and people behind them.",
      icon: "evidence",
    },
    {
      title: "Role-based workspaces",
      body:
        "Show each team the context and next action relevant to their responsibility.",
      icon: "roles",
    },
  ],
  callout: {
    label: "Living evidence",
    title: "Your review pack should already exist before the review begins.",
    body:
      "Because evidence stays connected to systems and decisions, ActClarity can prepare a coherent record without rebuilding the story at the last minute.",
    visual: "lineage",
  },
};

export const solutionsPage: MarketingPageConfig = {
  current: "solutions",
  variant: "solutions",
  eyebrow: "Solutions for accountable teams",
  title: "One compliance workspace. Every responsible team.",
  intro:
    "Legal, product, risk, security, and procurement work from shared records while keeping the views and decisions that belong to their role.",
  primary: "Map your team workflow",
  secondary: "Explore team views",
  proof: [
    { value: "Legal", label: "See obligations and the reasoning behind them" },
    { value: "Product", label: "Know what evidence is needed before release" },
    { value: "Risk", label: "Prioritise the systems that need attention" },
  ],
  storyLabel: "Shared context",
  storyTitle: "The same governed record, shaped for the question at hand.",
  storyIntro:
    "Teams stop rebuilding context in separate documents and start making decisions from one traceable source of truth.",
  story: [
    {
      id: "legal",
      number: "01",
      eyebrow: "Legal and compliance",
      title: "Review obligations without chasing product context.",
      body:
        "See purpose, provider, deployment, classification reasoning, and open decisions in one governed view.",
      detail: "Obligations · interpretations · approvals · review history",
      visual: "docs",
    },
    {
      id: "product",
      number: "02",
      eyebrow: "Product and engineering",
      title: "Ship with governance requirements visible.",
      body:
        "Turn compliance work into clear actions attached to the system and its delivery lifecycle.",
      detail: "Controls · owners · due dates · release readiness",
      visual: "controls",
    },
    {
      id: "risk",
      number: "03",
      eyebrow: "Risk and security",
      title: "Find exposure before it becomes an audit surprise.",
      body:
        "Prioritise systems and connect technical assurance to the evidence reviewers need.",
      detail: "Portfolio risk · controls · evidence · escalations",
      visual: "roles",
    },
    {
      id: "procurement",
      number: "04",
      eyebrow: "Procurement",
      title: "Assess AI providers before the contract is signed.",
      body:
        "Capture vendor answers, supporting documents, deployment context, and unresolved questions in a durable review record.",
      detail: "Providers · due diligence · evidence · decisions",
      visual: "registry",
    },
  ],
  capabilitiesLabel: "Role-specific clarity",
  capabilitiesTitle: "Built for collaboration without flattening responsibility.",
  capabilities: [
    {
      title: "Legal review",
      body: "Keep interpretations, decisions, and approvals attached to context.",
      icon: "docs",
    },
    {
      title: "Product readiness",
      body: "Translate obligations into visible product and engineering actions.",
      icon: "controls",
    },
    {
      title: "Portfolio risk",
      body: "Compare systems by exposure, evidence quality, and urgency.",
      icon: "security",
    },
    {
      title: "Vendor assurance",
      body: "Capture provider questions and evidence before purchase.",
      icon: "evidence",
    },
  ],
  callout: {
    label: "Continuity across teams",
    title: "The decision moves. The governance story stays connected.",
    body:
      "Every role sees the same underlying context, so ownership can change without losing the evidence, reasoning, or history behind the work.",
    visual: "roles",
  },
};

export const securityPage: MarketingPageConfig = {
  current: "security",
  variant: "security",
  eyebrow: "Security and trust",
  title: "Evidence you can trace. Access you can govern.",
  intro:
    "ActClarity is designed to preserve the integrity of AI governance records through controlled access, review history, connected evidence, and exportable audit packs.",
  primary: "Review the trust model",
  secondary: "See security controls",
  proof: [
    { value: "Access", label: "Role-aware visibility for sensitive records" },
    { value: "History", label: "Trace changes, comments, and approvals" },
    { value: "Lineage", label: "Know where every evidence claim came from" },
  ],
  storyLabel: "Trust by design",
  storyTitle: "Audit confidence is built long before the audit.",
  storyIntro:
    "Security and compliance records remain useful only when teams can trust their source, ownership, freshness, and review history.",
  story: [
    {
      id: "access",
      number: "01",
      eyebrow: "Access",
      title: "Keep sensitive governance records appropriately visible.",
      body:
        "Role-aware workspace views support collaboration while maintaining clear ownership boundaries.",
      detail: "Roles · permissions · accountable owners · review scope",
      visual: "roles",
    },
    {
      id: "history",
      number: "02",
      eyebrow: "History",
      title: "Preserve the path from question to approval.",
      body:
        "Track changes, open issues, comments, evidence updates, and decision history for every system.",
      detail: "Change log · comments · versions · timestamps",
      visual: "lineage",
    },
    {
      id: "controls",
      number: "03",
      eyebrow: "Controls",
      title: "Connect technical assurance to governance evidence.",
      body:
        "Map controls and supporting records directly to the systems, risks, and obligations they address.",
      detail: "Control mapping · evidence freshness · review status",
      visual: "controls",
    },
  ],
  capabilitiesLabel: "Security foundations",
  capabilitiesTitle: "A trustworthy operating layer for AI governance.",
  capabilities: [
    {
      title: "Role-based access",
      body: "Give teams the context they need without exposing every record.",
      icon: "roles",
    },
    {
      title: "Immutable history",
      body: "Retain a clear sequence of changes, reviews, and approvals.",
      icon: "security",
    },
    {
      title: "Connected controls",
      body: "Link technical and organisational controls to governed systems.",
      icon: "controls",
    },
    {
      title: "Review exports",
      body: "Prepare coherent evidence packs for internal or external review.",
      icon: "evidence",
    },
  ],
  callout: {
    label: "Review readiness",
    title: "Export a connected record, not a folder of unexplained files.",
    body:
      "ActClarity preserves relationships between systems, risks, controls, decisions, and evidence so reviewers can follow the complete governance story.",
    visual: "controls",
  },
};

export const docsPage: MarketingPageConfig = {
  current: "docs",
  variant: "docs",
  eyebrow: "ActClarity documentation",
  title: "Clear guidance for work that cannot stay theoretical.",
  intro:
    "Practical guides, workspace patterns, and implementation references for teams operationalising AI inventory, classification, evidence, and review readiness.",
  primary: "Open the getting-started guide",
  secondary: "Browse documentation",
  proof: [
    { value: "Start", label: "Create the first governed system record" },
    { value: "Assess", label: "Document risk and obligation reasoning" },
    { value: "Maintain", label: "Keep evidence current as systems change" },
  ],
  storyLabel: "Implementation path",
  storyTitle: "Move from policy language to repeatable governance work.",
  storyIntro:
    "The documentation is organised around real workflows and accountable roles, with examples that can be adapted to your operating model.",
  story: [
    {
      id: "getting-started",
      number: "01",
      eyebrow: "Getting started",
      title: "Build the first complete AI system record.",
      body:
        "Define scope, ownership, purpose, provider, deployment context, and the review cadence for one system.",
      detail: "Setup · fields · imports · ownership",
      visual: "registry",
    },
    {
      id: "eu-ai-act",
      number: "02",
      eyebrow: "EU AI Act workflow",
      title: "Translate classification questions into documented reasoning.",
      body:
        "Use practical prompts and examples to structure assessment work across legal and product teams.",
      detail: "Risk questions · transparency · obligations · decisions",
      visual: "matrix",
    },
    {
      id: "evidence-guides",
      number: "03",
      eyebrow: "Evidence operations",
      title: "Keep model cards, controls, and approvals connected.",
      body:
        "Design a maintenance rhythm that makes evidence usable at review time instead of merely stored.",
      detail: "Templates · ownership · freshness · exports",
      visual: "docs",
    },
  ],
  capabilitiesLabel: "Documentation library",
  capabilitiesTitle: "References for administrators, contributors, and reviewers.",
  capabilities: [
    {
      title: "Workspace setup",
      body: "Configure fields, roles, review stages, and inventory imports.",
      icon: "inventory",
    },
    {
      title: "Assessment guides",
      body: "Understand the reasoning expected at each classification stage.",
      icon: "docs",
    },
    {
      title: "Evidence templates",
      body: "Use structured patterns for model cards, controls, and approvals.",
      icon: "evidence",
    },
    {
      title: "Security reference",
      body: "Review access, history, exports, and governance responsibilities.",
      icon: "security",
    },
  ],
  callout: {
    label: "Operational guidance",
    title: "A good template creates consistency without hiding judgment.",
    body:
      "ActClarity documentation explains what to capture, why it matters, and where teams still need to make and record their own decision.",
    visual: "docs",
  },
};

export const pricingPage: MarketingPageConfig = {
  current: "pricing",
  variant: "pricing",
  eyebrow: "ActClarity pricing",
  title: "Start with the register. Grow into complete readiness.",
  intro:
    "Choose the operating scope that matches your AI estate today, with a clear path from inventory visibility to cross-team governance and review readiness.",
  primary: "Discuss your scope",
  secondary: "Compare plans",
  proof: [
    { value: "Inventory", label: "From €790 per month" },
    { value: "Compliance", label: "For operational EU AI Act readiness" },
    { value: "Enterprise", label: "For complex teams and portfolios" },
  ],
  storyLabel: "Plan structure",
  storyTitle: "Pricing aligned to governance maturity, not feature clutter.",
  storyIntro:
    "Every plan begins with accountable system records. Add guided assessments, connected evidence, and enterprise controls as your programme develops.",
  story: [
    {
      id: "inventory",
      number: "01",
      eyebrow: "Inventory",
      title: "Establish one accurate AI register.",
      body:
        "For teams moving from spreadsheets and fragmented lists to structured ownership and portfolio visibility.",
      detail: "Inventory · ownership · providers · imports · exports",
      visual: "registry",
    },
    {
      id: "compliance",
      number: "02",
      eyebrow: "Compliance",
      title: "Operationalise classification and evidence.",
      body:
        "For teams connecting risk reasoning, obligations, controls, evidence, and review workflows.",
      detail: "Assessments · obligations · evidence · review packs",
      visual: "matrix",
    },
    {
      id: "enterprise",
      number: "03",
      eyebrow: "Enterprise",
      title: "Govern complex portfolios across teams.",
      body:
        "For organisations requiring advanced roles, tailored workflows, integrations, and implementation support.",
      detail: "SSO · custom roles · integrations · support",
      visual: "plans",
    },
  ],
  capabilitiesLabel: "Included foundations",
  capabilitiesTitle: "Every plan is built on trustworthy governance records.",
  capabilities: [
    {
      title: "Guided onboarding",
      body: "Shape your inventory structure and first operating workflow.",
      icon: "inventory",
    },
    {
      title: "European hosting",
      body: "Designed for organisations operating under European requirements.",
      icon: "security",
    },
    {
      title: "Exportable records",
      body: "Keep your governance data portable and reviewable.",
      icon: "evidence",
    },
    {
      title: "Human support",
      body: "Work with a team that understands governance operations.",
      icon: "roles",
    },
  ],
  callout: {
    label: "Scope before quote",
    title: "The right plan starts with your AI estate and operating model.",
    body:
      "A short working session helps us understand system volume, accountable teams, evidence needs, and the integrations required for a realistic proposal.",
    visual: "plans",
  },
};

export const companyPage: MarketingPageConfig = {
  current: "company",
  variant: "company",
  eyebrow: "Company",
  title: "Building the operating layer for responsible AI in Europe.",
  intro:
    "ActClarity is a Cyprus-based European product company helping organisations turn AI governance policy into clear, connected, reviewable work.",
  primary: "Meet ActClarity",
  secondary: "Our principles",
  proof: [
    { value: "Nicosia", label: "Built in Cyprus for the European market" },
    { value: "Focused", label: "AI inventory, classification, and evidence" },
    { value: "Practical", label: "Designed around accountable team workflows" },
  ],
  storyLabel: "Why ActClarity",
  storyTitle: "Compliance should clarify how teams work, not bury them in files.",
  storyIntro:
    "We believe the strongest governance programmes are built from transparent ownership, preserved reasoning, and evidence that remains useful as systems change.",
  story: [
    {
      id: "mission",
      number: "01",
      eyebrow: "Mission",
      title: "Make AI accountability easier to see and maintain.",
      body:
        "Give organisations a shared operating layer for understanding systems, decisions, obligations, and evidence.",
      detail: "Clarity · continuity · accountability",
      visual: "lineage",
    },
    {
      id: "principles",
      number: "02",
      eyebrow: "Principles",
      title: "Build calm tools for consequential work.",
      body:
        "Use precise language, visible ownership, and purposeful automation without pretending judgment can be removed.",
      detail: "Human oversight · useful structure · honest scope",
      visual: "docs",
    },
    {
      id: "europe",
      number: "03",
      eyebrow: "Europe",
      title: "Design around the organisations implementing the EU AI Act.",
      body:
        "Start with the legal, product, risk, security, and procurement realities of European companies.",
      detail: "Cyprus · European Union · regulated teams",
      visual: "map",
    },
  ],
  capabilitiesLabel: "How we work",
  capabilitiesTitle: "Close to the problem, careful with the details.",
  capabilities: [
    {
      title: "Product-led",
      body: "Build reusable software for recurring governance operations.",
      icon: "inventory",
    },
    {
      title: "Evidence-minded",
      body: "Design every workflow around traceability and review.",
      icon: "evidence",
    },
    {
      title: "Human-centred",
      body: "Support accountable judgment instead of obscuring it.",
      icon: "roles",
    },
    {
      title: "European",
      body: "Stay grounded in the regulatory and operating context of the EU.",
      icon: "docs",
    },
  ],
  callout: {
    label: "Design partnership",
    title: "The product is shaped with the people doing the governance work.",
    body:
      "We learn from recurring legal, product, risk, security, and procurement needs, then turn those patterns into a coherent workspace.",
    visual: "map",
  },
};
