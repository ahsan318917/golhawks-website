import os

with open('src/app/products/[categorySlug]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('import { use, useState, useMemo } from "react";', 'import { useState, useMemo } from "react";')
content = content.replace('export default function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {', 'export function CategoryPageClient({ categorySlug }: { categorySlug: string }) {')
content = content.replace('  const { categorySlug } = use(params);\n', '')

with open('src/app/products/[categorySlug]/CategoryPageClient.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
