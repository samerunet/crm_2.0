type BuildStructuredDataParams = {
  origin: string;
  canonical?: string;
  name: string;
  description: string;
};

export function buildStructuredData({
  origin,
  canonical,
  name,
  description,
}: BuildStructuredDataParams) {
  const canonicalUrl = canonical ? new URL(canonical) : new URL(origin);
  const originUrl = canonicalUrl.origin;
  const canonicalHref = canonicalUrl.href;

  const professionalServiceId = `${originUrl}/#professional-service`;
  const personId = `${originUrl}/#fariia`;
  const servicesPage = `${originUrl}/services`;
  const aboutPage = `${originUrl}/about`;
  const portfolioPage = `${originUrl}/portfolio`;
  const reviewsPage = `${originUrl}/reviews`;

  const sameAs = ['https://www.instagram.com/fari_makeup/'];
  const knowsAbout = [
    'bridal makeup',
    'luxury soft glam',
    'South Asian bridal beauty',
    'mature skin makeup',
    'destination wedding makeup',
  ];
  const areaServed = [
    { '@type': 'City', name: 'San Diego' },
    { '@type': 'City', name: 'La Jolla' },
    { '@type': 'AdministrativeArea', name: 'Orange County' },
    { '@type': 'City', name: 'Los Angeles' },
  ];
  const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: 'San Diego, CA',
    addressLocality: 'San Diego',
    addressRegion: 'CA',
    postalCode: '92101',
    addressCountry: 'US',
  };

  const offers = [
    {
      '@type': 'Offer',
      name: 'Bridal Makeup Preview',
      url: servicesPage,
      priceCurrency: 'USD',
      price: 'Request a quote',
      availability: 'https://schema.org/InStock',
      description: 'Pre-event session to finalize your bridal makeup look and timelines.',
      itemOffered: {
        '@type': 'Service',
        name: 'Bridal Makeup Trial',
        serviceType: 'Bridal makeup',
        url: servicesPage,
      },
    },
    {
      '@type': 'Offer',
      name: 'Wedding Day Soft Glam',
      url: servicesPage,
      priceCurrency: 'USD',
      price: 'Custom package',
      availability: 'https://schema.org/InStock',
      description: 'Signature soft glam makeup for the wedding party with luxury skin prep.',
      itemOffered: {
        '@type': 'Service',
        name: 'Wedding Day Makeup',
        serviceType: 'Soft glam makeup',
        url: servicesPage,
      },
    },
    {
      '@type': 'Offer',
      name: 'Private Makeup Lesson',
      url: servicesPage,
      priceCurrency: 'USD',
      price: 'Request a quote',
      availability: 'https://schema.org/LimitedAvailability',
      description: 'One-on-one artistry coaching tailored to your features and product kit.',
      itemOffered: {
        '@type': 'Service',
        name: 'Makeup Lesson',
        serviceType: 'Beauty lessons',
        url: servicesPage,
      },
    },
  ];

  const professionalService = {
    '@id': professionalServiceId,
    '@type': 'ProfessionalService',
    name,
    url: originUrl,
    mainEntityOfPage: canonicalHref,
    description,
    image: `${originUrl}/og.jpg`,
    logo: `${originUrl}/favicon.svg`,
    telephone: '+1-619-399-6160',
    email: 'farimakeup.sd@gmail.com',
    priceRange: '$$ - $$$',
    address: postalAddress,
    areaServed,
    serviceType: ['Bridal makeup', 'Soft glam makeup', 'Beauty lessons', 'Editorial makeup'],
    knowsAbout,
    sameAs,
    offers,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: 42,
      ratingCount: 42,
      bestRating: '5',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: servicesPage,
      availableLanguage: ['English'],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+1-619-399-6160',
      email: 'farimakeup.sd@gmail.com',
      areaServed: ['San Diego County', 'Orange County', 'Los Angeles County'],
      availableLanguage: ['English'],
    },
    review: {
      '@type': 'Review',
      name: 'Client Testimonials',
      reviewBody:
        'Clients praise the calm, professional experience and long-lasting bridal makeup looks.',
      datePublished: '2024-05-12',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Verified bridal client',
      },
      url: reviewsPage,
    },
  };

  const artist = {
    '@id': personId,
    '@type': 'Person',
    name: 'Fariia Sipahi',
    alternateName: 'Fari',
    jobTitle: 'Lead Makeup Artist',
    description:
      'San Diego makeup artist delivering luxury soft glam, modern bridal looks, and calm on-location experiences.',
    image: `${originUrl}/og.jpg`,
    telephone: '+1-619-399-6160',
    email: 'farimakeup.sd@gmail.com',
    sameAs,
    knowsAbout,
    knowsLanguage: ['English'],
    areaServed,
    homeLocation: {
      '@type': 'Place',
      name: 'San Diego',
      address: postalAddress,
    },
    worksFor: { '@id': professionalServiceId },
    brand: {
      '@type': 'Brand',
      name,
      url: originUrl,
    },
    mainEntityOfPage: aboutPage,
    subjectOf: [
      {
        '@type': 'WebPage',
        url: aboutPage,
        name: 'About San Diego Makeup Artist Fari',
      },
      {
        '@type': 'WebPage',
        url: portfolioPage,
        name: 'Portfolio of bridal and soft glam makeup looks',
      },
      {
        '@type': 'WebPage',
        url: reviewsPage,
        name: 'San Diego makeup reviews and testimonials',
      },
    ],
    makesOffer: offers,
    url: aboutPage,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [professionalService, artist],
  };
}
