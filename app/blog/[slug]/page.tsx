import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { allBlogs, getBlogBySlug, PHONE_NUMBER, PHONE_DISPLAY } from '@/lib/data';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

const blogThumbnails: Record<string, string> = {
  'how-often-should-you-clean-gutters-antioch': '/images/gutter-cleaning.webp',
  'signs-gutters-are-clogged-antioch': '/images/clogged-gutters.webp',
  'fall-gutter-cleaning-storm-prep-antioch': '/images/clean-downspout.webp',
  'gutter-guards-vs-manual-cleaning-antioch': '/images/gutter-guard-installation.webp',
  'pine-needles-eucalyptus-gutter-debris-antioch': '/images/gutter-debris-removal.webp',
  'downspout-maintenance-guide-antioch': '/images/downspout-cleaning.webp',
  'how-clean-gutters-prevent-foundation-damage': '/images/water-flow.webp',
  'roof-valley-debris-moss-clearing-antioch': '/images/roof-and-gutter-cleaning.webp',
  'gutter-cleaning-cost-guide-antioch': '/images/gutter-maintenance.webp',
  'gutter-cleaning-ladder-safety-diy-risks': '/images/ladder-safety.webp',
};

export async function generateStaticParams() {
  return allBlogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const keywordsArray = post.keywords
    ? post.keywords.split(';').map((k) => k.trim())
    : [];

  const cleanTitle = (post.seoTitle || post.title || '').split('|')[0].trim();

  return {
    title: cleanTitle,
    description: post.metaDescription,
    keywords: keywordsArray,
    alternates: {
      canonical: `https://clearviewguttercleaningantioch.com/blog/${post.slug}`,
    },
    openGraph: {
      title: cleanTitle,
      description: post.metaDescription,
      url: `https://clearviewguttercleaningantioch.com/blog/${post.slug}`,
      siteName: 'Clearview Gutter Cleaning Antioch',
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const postImage = blogThumbnails[post.slug] || '/images/hero.webp';
  const relatedPosts = allBlogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0d]">
      {/* Blog Article Banner */}
      <section className="relative overflow-hidden border-b border-[#1c1c22] bg-[#0e0e12] py-12 lg:py-16">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src={postImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e12] via-[#0e0e12]/95 to-[#0e0e12]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5500]">
            <Sparkles className="h-3.5 w-3.5" />
            Homeowner Drainage Guide
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#ff5500]" />
              {post.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#ff5500]" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-[#ff5500]" />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl border border-[#262630] shadow-2xl mb-10">
            <Image
              src={postImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Exact Sheet Content Rendered */}
          <div className="rounded-2xl border border-[#22222a] bg-[#121216] p-6 sm:p-10 shadow-lg">
            <div
              className="sheet-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author / Clearview Callout */}
            <div className="mt-12 rounded-xl border border-[#2c2c36] bg-[#16161c] p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                  Need Help With Your Gutters In Antioch?
                </span>
                <h4 className="text-lg font-bold text-white">
                  Schedule A Free Estimate With Clearview
                </h4>
                <p className="text-xs text-zinc-400">
                  Insured crews, ladder-safe service, and complete debris haul-away.
                </p>
              </div>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="shrink-0 rounded-xl bg-[#ff5500] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#ff6a1a] shadow-lg transition flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Navigation & Related Posts */}
          <div className="mt-14 space-y-6">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-[#ff5500] transition"
              >
                <ArrowLeft className="h-4 w-4" /> Back to All Articles
              </Link>
            </div>

            <h3 className="text-xl font-bold uppercase text-white pt-4">
              More Antioch Gutter Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="rounded-xl border border-[#22222a] bg-[#121216] p-4 hover:border-[#ff5500]/50 transition group"
                >
                  <span className="text-[11px] text-zinc-500 font-semibold">{related.readTime}</span>
                  <h4 className="mt-1 text-sm font-bold text-white group-hover:text-[#ff5500] line-clamp-2 transition">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <CTASection />
    </div>
  );
}
