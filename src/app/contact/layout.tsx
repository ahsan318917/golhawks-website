import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | GolHawks International",
  description: "Get a quote for your custom sportswear and martial arts apparel production. Elite manufacturing services based in Sialkot.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
