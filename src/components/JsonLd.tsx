import { SITE_URL, SITE_NAME, CONTACT } from '@/config/seo';

type OrganizationProps = {
  type?: 'Organization' | 'Corporation';
};

export function OrganizationJsonLd({ type = 'Organization' }: OrganizationProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/Logo (2).png`,
    description: 'Custom sportswear manufacturing, private label apparel production, and global fulfillment from Sialkot, Pakistan.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT.whatsapp,
        email: CONTACT.email,
        contactType: 'sales',
        availableLanguage: ['English', 'Urdu'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sialkot',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type ProductJsonLdProps = {
  name: string;
  description: string;
  image: string;
  category: string;
  slug: string;
  categorySlug: string;
};

export function ProductJsonLd({
  name,
  description,
  image,
  category,
  slug,
  categorySlug,
}: ProductJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
    url: `${SITE_URL}/products/${categorySlug}/${slug}`,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    manufacturer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
