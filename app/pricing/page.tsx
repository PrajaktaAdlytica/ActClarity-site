import type { Metadata } from "next";
import { MarketingPage } from "@/components/marketing-page";
import { pricingPage } from "@/lib/marketing-pages";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "ActClarity plans for AI inventory, EU AI Act compliance operations, and enterprise governance.",
};

export default function PricingPage() {
  return <MarketingPage config={pricingPage} />;
}
