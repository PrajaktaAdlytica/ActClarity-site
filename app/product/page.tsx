import type { Metadata } from "next";
import { MarketingPage } from "@/components/marketing-page";
import { productPage } from "@/lib/marketing-pages";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Inventory AI systems, document risk classification, and maintain connected evidence in ActClarity.",
};

export default function ProductPage() {
  return <MarketingPage config={productPage} />;
}
