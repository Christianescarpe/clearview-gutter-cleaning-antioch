import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://clearviewguttercleaningantioch.com'),
  title: {
    default: 'Gutter Cleaning Antioch CA',
    template: '%s',
  },
  description:
    'Trusted gutter cleaning Antioch CA homeowners rely on. Free quotes, insured local crews, and same-week scheduling. Call Clearview Gutter Cleaning Antioch today at +19255062219.',
  keywords: [
    'gutter cleaning Antioch',
    'gutter cleaning Antioch CA',
    'gutter cleaners Antioch',
    'gutter cleaning service Antioch',
    'downspout cleaning Antioch',
    'gutter repair Antioch',
  ],
  authors: [{ name: 'Clearview Gutter Cleaning Antioch' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Clearview Gutter Cleaning Antioch',
    title: 'Gutter Cleaning Antioch CA',
    description:
      'Trusted gutter cleaning Antioch CA homeowners rely on. Free quotes, insured local crews, and same-week scheduling. Call +19255062219.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#0b0b0d] text-zinc-100 antialiased selection:bg-[#ff5500] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
