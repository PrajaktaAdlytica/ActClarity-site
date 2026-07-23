import type { Metadata } from "next";
import { MarketingPage } from "@/components/marketing-page";
import { docsPage } from "@/lib/marketing-pages";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Practical ActClarity guides for AI inventory, EU AI Act classification, evidence, and review readiness.",
};

export default function DocsPage() {
  return <MarketingPage config={docsPage} />;
}
