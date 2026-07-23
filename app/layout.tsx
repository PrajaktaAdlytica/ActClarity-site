import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://actclarity.com"),
  title: {
    default: "ActClarity | EU AI Act compliance workspace",
    template: "%s | ActClarity",
  },
  description:
    "Inventory AI systems, assess likely obligations, maintain evidence, and prepare for review in one governed workspace.",
  applicationName: "ActClarity",
  category: "RegTech",
  keywords: [
    "EU AI Act",
    "AI governance",
    "AI inventory",
    "AI compliance",
    "model cards",
    "RegTech",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_EU",
    siteName: "ActClarity",
    title: "ActClarity | Compliance grows from knowing what you have",
    description:
      "A living EU AI Act compliance workspace for inventory, assessment, evidence, and review preparation.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "ActClarity evidence garden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ActClarity | EU AI Act compliance workspace",
    description:
      "Inventory AI systems, assess likely obligations, and cultivate a living evidence trail.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf6ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
