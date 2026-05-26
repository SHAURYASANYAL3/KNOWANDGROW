import { NextResponse } from 'next/server';

const robots = `User-agent: *
Allow: /
Sitemap: https://knowandgrow.vercel.app/sitemap.xml
`;

export function GET() {
  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
