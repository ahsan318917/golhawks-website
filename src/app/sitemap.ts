import { MetadataRoute } from 'next';
import { CATEGORY_DATA } from '@/data/categories';
import { SITE_URL } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1. Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/process`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // 2. Dynamic category pages
  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(CATEGORY_DATA).map(
    (slug) => ({
      url: `${SITE_URL}/products/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  );

  // 3. Dynamic individual product pages
  const productRoutes: MetadataRoute.Sitemap = Object.entries(CATEGORY_DATA).flatMap(
    ([categorySlug, category]) =>
      category.products.map((product) => ({
        url: `${SITE_URL}/products/${categorySlug}/${product.id}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
  );

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
