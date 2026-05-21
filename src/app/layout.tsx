import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GolHawks International | Global Sourcing & Manufacturing Partner",
  description: "Elite manufacturing partner for custom sportswear, martial arts wear, and private label apparel. Global sourcing and world-class quality production.",
  metadataBase: new URL("https://golhawksinternational.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#C41230",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "GolHawks International",
    description: "Global Sourcing & Manufacturing Partner.",
    url: "https://golhawksinternational.com",
    siteName: "GolHawks International",
    images: [
      {
        url: "/images/Logo (2).png",
        width: 1200,
        height: 630,
        alt: "GolHawks International Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GolHawks International",
    description: "Global Sourcing & Manufacturing Partner.",
    images: ["/images/Logo (2).png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
