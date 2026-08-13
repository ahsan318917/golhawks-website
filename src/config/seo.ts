export const SITE_URL = 'https://golhawksinternational.com';
export const SITE_NAME = 'GolHawks International';
export const SITE_DESCRIPTION = 'Custom sportswear manufacturing, private label apparel production, OEM/ODM clothing factory, quality control, and global B2B fulfillment from Sialkot, Pakistan.';

export const SITE_OG_IMAGE = '/images/Logo (2).png';

export const CONTACT = {
  email: 'info@golhawksinternational.com',
  whatsapp: '+923712362363',
  phone: '+92 371 2362363',
  location: 'Sialkot, Pakistan',
  timezone: 'GMT+5',
} as const;

export const B2B_KEYWORDS = [
  'Custom Sportswear Manufacturer Sialkot',
  'Private Label Apparel Factory',
  'Wholesale BJJ Gi Manufacturer',
  'OEM Rash Guard Supplier',
  'Streetwear Hoodie Factory Pakistan',
  'Sublimated Team Jersey Production',
  'Custom Denim Jackets Manufacturer',
  'Bulk Activewear Sourcing',
  'Sports Apparel Export Sialkot',
] as const;

export function formatCategoryMetaTitle(categoryTitle: string): string {
  return `Custom ${categoryTitle} Manufacturer & Private Label Factory | Sialkot | ${SITE_NAME}`;
}

export function formatCategoryMetaDesc(categoryTitle: string, description: string): string {
  return `Custom ${categoryTitle} manufacturing & private label apparel production from Sialkot, Pakistan. ${description} Global bulk fulfillment & OEM/ODM service.`;
}

export function formatProductMetaTitle(productName: string, categoryTitle: string): string {
  return `${productName} - Custom ${categoryTitle} Manufacturing & Private Label | ${SITE_NAME}`;
}

export function formatProductMetaDesc(productName: string, description: string): string {
  return `Custom ${productName} manufacturing from Sialkot, Pakistan. ${description} High-quality private label apparel production with custom embroidery, printing, and global export.`;
}

export function formatImageAltText(productName: string, categoryTitle: string, index?: number): string {
  const suffix = typeof index === 'number' ? ` - View ${index + 1}` : '';
  return `${productName} - Custom ${categoryTitle} Manufacturing by GolHawks International Sialkot${suffix}`;
}
