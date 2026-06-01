import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Sportswear & Apparel Products | Golhawks International",
  description: "Premium sportswear, activewear, gym wear, martial arts apparel, and private label clothing manufactured to your specifications.",
  openGraph: {
    title: "Custom Sportswear & Apparel Products | Golhawks International",
    description: "Premium sportswear, activewear, gym wear, martial arts apparel, and private label clothing manufactured to your specifications.",
    url: "https://golhawksinternational.com/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Sportswear & Apparel Products | Golhawks International",
    description: "Premium sportswear, activewear, gym wear, martial arts apparel, and private label clothing manufactured to your specifications.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
