import { CATEGORY_DATA } from "@/data/categories";
import { SITE_URL, SITE_NAME } from "@/config/seo";
import { CategoryPageClient } from "./CategoryPageClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(CATEGORY_DATA).map((slug) => ({
    categorySlug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;

  const categoryData = CATEGORY_DATA[categorySlug];
  if (!categoryData) return {};

  const title = `${categoryData.title} | Custom Manufacturing | ${SITE_NAME}`;
  const description = categoryData.description;
  const url = `${SITE_URL}/products/${categorySlug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  const categoryData = CATEGORY_DATA[categorySlug];
  if (!categoryData) notFound();

  return <CategoryPageClient categorySlug={categorySlug} />;
}
