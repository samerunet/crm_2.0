// app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppProviders from '@/components/ui/app-providers';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const SITE_ORIGIN = 'https://sandiego_makeup.com';
const SITE_URL = new URL(SITE_ORIGIN);
const SITE_TITLE = 'San Diego Makeup Artist Fari';
const SITE_DESCRIPTION =
  'San Diego-based makeup artist specializing in modern bridal looks and luxury soft glam across Southern California with stress-free, on-location service.';
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_TITLE,
  url: SITE_ORIGIN,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_ORIGIN}/favicon.svg`,
    width: 512,
    height: 512,
  },
  image: `${SITE_ORIGIN}/og.jpg`,
  areaServed: {
    '@type': 'City',
    name: 'San Diego',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Diego',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  },
  description: SITE_DESCRIPTION,
};

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: SITE_TITLE,
    template: '%s | San Diego Makeup Artist Fari',
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_ORIGIN,
    languages: {
      'en-US': SITE_ORIGIN,
    },
  },
  applicationName: SITE_TITLE,
  authors: [{ name: SITE_TITLE }],
  creator: SITE_TITLE,
  publisher: SITE_TITLE,
  keywords: [
    'San Diego makeup artist',
    'Fari makeup artist',
    'bridal makeup San Diego',
    'soft glam makeup',
    'natural wedding makeup',
    'luxury makeup San Diego',
    'destination wedding makeup',
    'Southern California makeup artist',
  ],
  openGraph: {
    type: 'website',
    url: SITE_ORIGIN,
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og.jpg'],
  },
  // Keep your manifest file in /public (ensure it references the 192/512 icons too)
  manifest: '/manifest.webmanifest',
  category: 'beauty',
  // ✅ Favicon / icons for SERP + PWA + Apple
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, // Google/desktop fallback
      { url: '/favicon.svg', type: 'image/svg+xml' }, // Modern browsers
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' }, // Android/PWA
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }, // Android/PWA
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="fari-light">
      <head>
        <link
          rel="preload"
          as="image"
          href="/portfolio/12.JPG"
          // mobile first sizing hint keeps preload effective on all breakpoints
          imageSizes="100vw"
          fetchPriority="high"
        />
        <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(STRUCTURED_DATA)}
        </Script>
      </head>
      <body className={inter.className}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-54ESDKQQKV"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-54ESDKQQKV');
          `}
        </Script>
        <AppProviders>
          <Navbar />
          {children}
          <Footer />
        </AppProviders>
        <SpeedInsights />
      </body>
    </html>
  );
}
