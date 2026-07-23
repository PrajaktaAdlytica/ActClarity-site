import type { Metadata } from "next";
import { ActClarityHome } from "./actclarity-home";

export const metadata: Metadata = {
  title: "ActClarity | EU AI Act compliance workspace",
  description:
    "Inventory AI systems, assess likely obligations, maintain evidence, and prepare for review in one governed workspace.",
};

export default function Home() {
  return <ActClarityHome />;
}
