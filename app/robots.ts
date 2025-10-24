import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://sandiego-makeup.com';
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/dashboard1', '/api/*'] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
