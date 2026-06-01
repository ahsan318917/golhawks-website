import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Services | Golhawks International",
  description: "End-to-end apparel manufacturing services including sourcing, sampling, production management, quality assurance, and logistics.",
  openGraph: {
    title: "Manufacturing Services | Golhawks International",
    description: "End-to-end apparel manufacturing services including sourcing, sampling, production management, quality assurance, and logistics.",
    url: "https://golhawksinternational.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Services | Golhawks International",
    description: "End-to-end apparel manufacturing services including sourcing, sampling, production management, quality assurance, and logistics.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
