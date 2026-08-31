import type { Metadata } from "next";
import { MarketingPage } from "@/components/marketing-page";
import { companyPage } from "@/lib/marketing-pages";

export const metadata: Metadata = {
  title: "Company",
  description:
    "ActClarity is a US-based European product company building practical AI governance software for European organisations.",
};

export default function CompanyPage() {
  return <MarketingPage config={companyPage} />;
}
