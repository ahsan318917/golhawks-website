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

export function FaqJsonLd() {
  const faqs = [
    {
      question: "Can I request sample garments before placing a bulk lot order?",
      answer: "Yes! We produce pre-production samples with your exact branding and fabric specs within 7-10 business days for approval."
    },
    {
      question: "What are the standard payment terms for lot booking?",
      answer: "Standard terms are 50% deposit upon order confirmation & tech pack approval, and 50% prior to dispatch following final QC inspection."
    },
    {
      question: "Do you offer custom tech pack and pattern development?",
      answer: "Our in-house R&D team can generate technical flat sketches, size grading charts, and complete tech packs from physical samples or photos."
    },
    {
      question: "How is quality control handled during manufacturing?",
      answer: "Every lot undergoes 100% inline stitching audits, fabric verification, color-fastness testing, and final AQL 2.5 inspection before packing."
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

