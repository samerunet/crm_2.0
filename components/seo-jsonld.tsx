'use client';
import React from 'react';
import { buildStructuredData } from '@/lib/structured-data';

const DEFAULT_CANONICAL = 'https://www.sandiego-makeup.com';
const SITE_TITLE = 'San Diego Makeup Artist Fari';
const SITE_DESCRIPTION =
  'San Diego-based makeup artist specializing in modern bridal looks and luxury soft glam across Southern California with stress-free, on-location service.';

export default function SEOJsonLD({ canonical = DEFAULT_CANONICAL }: { canonical?: string }) {
  const structuredData = buildStructuredData({
    origin: DEFAULT_CANONICAL,
    canonical,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
