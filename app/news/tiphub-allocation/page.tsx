import type { Metadata } from "next";
import { TipHubAnnouncementPage } from "@/components/tiphub-announcement-page";

const title = "ActClarity joins the TipHub portfolio";
const description =
  "TipHub announces a $550K portfolio allocation to ActClarity, supporting its work across RegTech and AI compliance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/news/tiphub-allocation",
  },
  openGraph: {
    type: "article",
    title,
    description,
    url: "/news/tiphub-allocation",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "ActClarity evidence garden",
      },
    ],
  },
};

export default function TipHubAllocationPage() {
  return <TipHubAnnouncementPage />;
}
