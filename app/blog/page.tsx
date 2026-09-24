import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, Phone } from 'lucide-react';
import { allBlogs, PHONE_NUMBER, PHONE_DISPLAY } from '@/lib/data';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Antioch Gutter Cleaning Blog & Homeowner Drainage Guides',
  description:
    'Expert advice, seasonal maintenance schedules, and gutter care tips for Antioch and East Contra Costa County homeowners. Call +19255062219 for service.',
  keywords: [
    'gutter cleaning tips Antioch',
    'gutter maintenance blog Antioch CA',
    'how often clean gutters Antioch',
    'storm prep Antioch CA',
  ],
};

const blogThumbnails: string[] = [
  '/images/clogged-gutters.webp',
  '/images/gutter-debris-removal.webp',
  '/images/clean-downspout.webp',
  '/images/gutter-guard-installation.webp',
  '/images/gutter-maintenance.webp',
  '/images/downspout-cleaning.webp',
  '/images/water-flow.webp',
  '/images/roof-and-gutter-cleaning.webp',
  '/images/gutter-repair.webp',
  '/images/ladder-safety.webp',
];

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0d]">
      {/* Blog Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#1c1c22] bg-[#0e0e12] py-14 lg:py-20">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/images/clean-downspout.webp"
            alt="Antioch Gutter Cleaning Blog"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e12] via-[#0e0e12]/95 to-[#0e0e12]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Blog & Drainage Guides' }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5500]">
              <Sparkles className="h-3.5 w-3.5" />
              Expert Advice &amp; East Bay Seasonal Guides
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
              Antioch Gutter Insights &amp; Guides
            </h1>
            <p className="mt-4 text-base text-zinc-300 sm:text-lg leading-relaxed">
              Explore in-depth articles written specifically for Antioch homeowners navigating local tree species, atmospheric rivers, ladder safety, and foundation drainage.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allBlogs.map((post, idx) => {
              const thumbnail = blogThumbnails[idx % blogThumbnails.length];
              return (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#22222a] bg-[#121216] transition duration-300 hover:border-[#ff5500]/60 hover:bg-[#15151b]"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={thumbnail}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-4 text-xs text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-[#ff5500]" />
                          {post.publishedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-[#ff5500]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mt-3 text-lg font-bold text-white group-hover:text-[#ff5500] transition line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                        {post.metaDescription}
                      </p>
                    </div>

                    <div className="pt-6">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff5500] group-hover:text-[#ff6a1a]"
                      >
                        Read Article <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
