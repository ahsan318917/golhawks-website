import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Process & Quality Control | Golhawks International",
  description: "Discover our proven manufacturing process from concept development and prototyping to production, quality control, and delivery.",
  openGraph: {
    title: "Manufacturing Process & Quality Control | Golhawks International",
    description: "Discover our proven manufacturing process from concept development and prototyping to production, quality control, and delivery.",
    url: "https://golhawksinternational.com/process",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Process & Quality Control | Golhawks International",
    description: "Discover our proven manufacturing process from concept development and prototyping to production, quality control, and delivery.",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
