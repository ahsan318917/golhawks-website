import { CATEGORY_DATA } from "@/data/categories";
import { SITE_URL, SITE_NAME, formatProductMetaTitle, formatProductMetaDesc, formatImageAltText, B2B_KEYWORDS } from "@/config/seo";
import { ProductPageClient } from "./ProductPageClient";
import { ProductJsonLd } from "@/components/JsonLd";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { categorySlug: string; productId: string }[] = [];
  for (const [categorySlug, data] of Object.entries(CATEGORY_DATA)) {
    for (const product of data.products) {
      params.push({ categorySlug, productId: product.id });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string; productId: string }> }): Promise<Metadata> {
  const { categorySlug, productId } = await params;
  
  const categoryData = CATEGORY_DATA[categorySlug];
  if (!categoryData) return {};
  
  const product = categoryData.products.find(p => p.id === productId);
  if (!product) return {};

  const title = formatProductMetaTitle(product.name, categoryData.title);
  const description = formatProductMetaDesc(product.name, product.description);
  const url = `${SITE_URL}/products/${categorySlug}/${productId}`;
  const ogImage = product.images?.[0] ? `${SITE_URL}${product.images[0]}` : undefined;
  const altText = formatImageAltText(product.name, categoryData.title);

  return {
    title,
    description,
    keywords: [product.name, categoryData.title, ...product.tags, ...B2B_KEYWORDS, 'Sialkot Factory'],
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: ogImage ? [{ url: ogImage, width: 800, height: 600, alt: altText }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ categorySlug: string; productId: string }> }) {
  const { categorySlug, productId } = await params;

  const categoryData = CATEGORY_DATA[categorySlug];
  if (!categoryData) notFound();
  
  const product = categoryData.products.find(p => p.id === productId);
  if (!product) notFound();

  return (
    <>
      <ProductJsonLd 
        name={product.name} 
        description={product.description} 
        image={product.images[0]} 
        category={categoryData.title} 
        slug={product.id} 
        categorySlug={categorySlug} 
      />
      <ProductPageClient categorySlug={categorySlug} productId={productId} />
    </>
  );
}
