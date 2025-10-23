'use client';
import React from 'react';

const DEFAULT_CANONICAL = 'https://sandiego_makeup.com';

export default function SEOJsonLD({ canonical = DEFAULT_CANONICAL }: { canonical?: string }) {
  const canonicalUrl = new URL(canonical);
  const origin = canonicalUrl.origin;

  const org = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'San Diego Makeup Artist Fari',
    url: origin,
    logo: `${origin}/favicon.svg`,
    image: `${origin}/og.jpg`,
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'San Diego Makeup Artist Fari',
    url: canonical,
    image: `${origin}/og.jpg`,
    areaServed: [
      { '@type': 'City', name: 'San Diego' },
      { '@type': 'City', name: 'La Jolla' },
      { '@type': 'City', name: 'Orange County' },
      { '@type': 'City', name: 'Los Angeles' },
    ],
    description:
      'San Diego makeup artist delivering modern bridal looks, luxury soft glam, and stress-free on-location service throughout Southern California.',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${origin}/services` },
    provider: {
      '@type': 'Person',
      name: 'Fari',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
