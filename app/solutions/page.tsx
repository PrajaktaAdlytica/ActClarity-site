import type { Metadata } from "next";
import { MarketingPage } from "@/components/marketing-page";
import { solutionsPage } from "@/lib/marketing-pages";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Shared AI governance workflows for legal, product, risk, security, and procurement teams.",
};

export default function SolutionsPage() {
  return <MarketingPage config={solutionsPage} />;
}
