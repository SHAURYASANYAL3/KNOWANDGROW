import { NextResponse } from 'next/server';

const baseUrl = 'https://knowandgrow.vercel.app';
const now = new Date().toISOString();

const routes = [
  { path: '', priority: 1.0, changefreq: 'daily' },
  { path: 'about', priority: 0.8, changefreq: 'monthly' },
  { path: 'focus-areas', priority: 0.8, changefreq: 'monthly' },
  { path: 'mental-health', priority: 0.8, changefreq: 'monthly' },
  { path: 'digital-safety', priority: 0.8, changefreq: 'monthly' },
  { path: 'drug-awareness', priority: 0.8, changefreq: 'monthly' },
  { path: 'resources', priority: 0.7, changefreq: 'monthly' },
  { path: 'volunteer', priority: 0.7, changefreq: 'monthly' },
  { path: 'contact', priority: 0.7, changefreq: 'monthly' },
  { path: 'faqs', priority: 0.6, changefreq: 'monthly' },
  { path: 'privacy', priority: 0.5, changefreq: 'yearly' },
  { path: 'emergency-help', priority: 0.6, changefreq: 'monthly' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

export function GET() {
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
