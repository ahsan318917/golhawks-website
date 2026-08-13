import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products | Custom Sportswear Manufacturing | GolHawks International",
  description: "Browse our complete product catalog — martial arts gis, premium denim, fleece streetwear, performance wear, team jerseys, and cotton casualwear. Custom manufactured in Sialkot, Pakistan.",
  openGraph: {
    title: "Shop All Products | GolHawks International",
    description: "Browse our complete product catalog — martial arts gis, premium denim, fleece streetwear, performance wear, team jerseys, and cotton casualwear.",
    url: "https://golhawksinternational.com/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop All Products | GolHawks International",
    description: "Browse our complete product catalog — martial arts, denim, fleece, performance wear, team jerseys, and casualwear.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
