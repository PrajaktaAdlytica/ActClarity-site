import type { Metadata } from "next";
import { MarketingPage } from "@/components/marketing-page";
import { securityPage } from "@/lib/marketing-pages";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Review ActClarity security foundations, evidence lineage, access controls, and audit history.",
};

export default function SecurityPage() {
  return <MarketingPage config={securityPage} />;
}
