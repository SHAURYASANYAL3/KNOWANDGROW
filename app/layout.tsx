import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-serif',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'KNOW & GROW | Rooted in Knowledge, Committed to Society',
  description: 'A youth-led awareness initiative focused on mental health, digital safety, education, and community support.',
  openGraph: {
    title: 'KNOW & GROW',
    description: 'Engaging young communities with compassionate education, trusted support, and premium social impact.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-white text-slate-100`}>{children}</body>
    </html>
  );
}
