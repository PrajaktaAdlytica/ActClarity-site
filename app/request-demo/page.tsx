import type { Metadata } from "next";
import { RequestDemoPage } from "./request-demo-page";

export const metadata: Metadata = {
  title: "Request a demo",
  description:
    "Bring one AI system and explore how ActClarity maps ownership, obligations, evidence, and review readiness.",
};

export default function DemoPage() {
  return <RequestDemoPage />;
}
