import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Golhawks International | Apparel Manufacturing Partner",
  description: "Learn about Golhawks International, a trusted apparel manufacturing partner helping brands scale with confidence.",
  openGraph: {
    title: "About Golhawks International | Apparel Manufacturing Partner",
    description: "Learn about Golhawks International, a trusted apparel manufacturing partner helping brands scale with confidence.",
    url: "https://golhawksinternational.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Golhawks International | Apparel Manufacturing Partner",
    description: "Learn about Golhawks International, a trusted apparel manufacturing partner helping brands scale with confidence.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
