import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Golhawks International | Request a Production Quote",
  description: "Request a production quote or discuss your apparel manufacturing requirements with our team.",
  openGraph: {
    title: "Contact Golhawks International | Request a Production Quote",
    description: "Request a production quote or discuss your apparel manufacturing requirements with our team.",
    url: "https://golhawksinternational.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Golhawks International | Request a Production Quote",
    description: "Request a production quote or discuss your apparel manufacturing requirements with our team.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
