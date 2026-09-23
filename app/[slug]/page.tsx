import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  CheckCircle2,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  ExternalLink,
  Droplets,
  Wrench,
  Layers,
  Building,
  Home,
  AlertTriangle,
  Search,
  ChevronRight,
} from 'lucide-react';
import { allPages, getPageBySlug, PHONE_NUMBER, PHONE_DISPLAY, GOOGLE_MAP_URL, GOOGLE_MAP_EMBED } from '@/lib/data';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Map slugs to optimized images
const slugImageMap: Record<string, string> = {
  'gutter-cleaning': '/images/gutter-cleaning.webp',
  'downspout-cleaning': '/images/downspout-cleaning.webp',
  'gutter-and-downspout-cleaning': '/images/gutter-cleaning.webp',
  'clogged-gutter-cleaning': '/images/clogged-gutters.webp',
  'gutter-debris-removal': '/images/gutter-debris-removal.webp',
  'gutter-maintenance': '/images/gutter-maintenance.webp',
  'gutter-inspection': '/images/gutter-inspection.webp',
  'gutter-repair': '/images/gutter-repair.webp',
  'gutter-guard-installation': '/images/gutter-guard-installation.webp',
  'gutter-guard-cleaning': '/images/gutter-guard-cleaning.webp',
  'commercial-gutter-cleaning': '/images/commercial-gutter-cleaning.webp',
  'residential-gutter-cleaning': '/images/residential-gutter-cleaning.webp',
  'roof-and-gutter-cleaning': '/images/roof-and-gutter-cleaning.webp',
  'emergency-gutter-cleaning': '/images/emergency-gutter-cleaning.webp',
  'faq': '/images/clean-downspout.webp',
  'areas-we-serve': '/images/ladder-safety.webp',
  'contact': '/images/hero-card.webp',
  'brentwood': '/images/residential-gutter-cleaning.webp',
  'oakley': '/images/gutter-maintenance.webp',
  'pittsburg': '/images/gutter-system.webp',
  'bay-point': '/images/clean-downspout.webp',
  'discovery-bay': '/images/water-flow.webp',
  'concord': '/images/commercial-gutter-cleaning.webp',
  'clayton': '/images/gutter-repair.webp',
  'martinez': '/images/gutter-cleaning.webp',
};

const serviceHighlights = [
  {
    slug: 'gutter-cleaning',
    title: 'Professional Gutter Cleaning',
    desc: 'Full hand-removal of leaves, twigs, and sediment from channels and roof valleys. Thorough clearing for optimal flow.',
    href: '/gutter-cleaning',
    icon: Droplets,
  },
  {
    slug: 'downspout-cleaning',
    title: 'Downspout Flushing & Clearing',
    desc: 'High-volume water flushing to clear stubborn downspout clogs before rainy weather arrives and causes overflow.',
    href: '/downspout-cleaning',
    icon: Droplets,
  },
  {
    slug: 'gutter-repair',
    title: 'Gutter Repair & Sealing',
    desc: 'Fix loose brackets, leaky seams, sagging troughs, and misaligned slope to ensure proper drainage away from foundations.',
    href: '/gutter-repair',
    icon: Wrench,
  },
  {
    slug: 'gutter-guard-installation',
    title: 'Gutter Guard Installation',
    desc: 'High-grade micro-mesh and screen leaf protection systems designed for East Bay oak and pine debris.',
    href: '/gutter-guard-installation',
    icon: Layers,
  },
  {
    slug: 'commercial-gutter-cleaning',
    title: 'Commercial Gutter Cleaning',
    desc: 'Custom maintenance programs for East Bay commercial buildings, multi-family complexes, retail centers, and offices.',
    href: '/commercial-gutter-cleaning',
    icon: Building,
  },
  {
    slug: 'gutter-inspection',
    title: 'Multi-Point Gutter Inspection',
    desc: 'Detailed roofline and drainage assessment with before-and-after photo documentation and repair recommendations.',
    href: '/gutter-inspection',
    icon: Search,
  },
];

const propertySolutions = [
  {
    title: 'Single-Family Homes',
    desc: 'Custom care for classic ranch, two-story, and modern homes across Antioch and the East Bay.',
    image: '/images/residential-gutter-cleaning.webp',
    href: '/residential-gutter-cleaning',
  },
  {
    title: 'Commercial Facilities',
    desc: 'Ladder-safe, fully insured gutter maintenance for retail, industrial, and business properties.',
    image: '/images/commercial-gutter-cleaning.webp',
    href: '/commercial-gutter-cleaning',
  },
  {
    title: 'Seasonal Maintenance',
    desc: 'Scheduled bi-annual cleanings timed specifically before and during East Bay atmospheric river storms.',
    image: '/images/gutter-maintenance.webp',
    href: '/gutter-maintenance',
  },
  {
    title: 'Emergency Drainage',
    desc: 'Rapid unclogging response when heavy storms threaten overflowing gutters and water intrusion.',
    image: '/images/emergency-gutter-cleaning.webp',
    href: '/emergency-gutter-cleaning',
  },
];

const processPoints = [
  {
    title: 'Full Hand-Removal of Leaves, Twigs & Sediment',
    desc: 'We clear debris by hand from gutters and valleys so nothing gets forced deeper into downspout bends.',
  },
  {
    title: 'Downspout Water Flushing & Pressure Testing',
    desc: 'Channels and outlets are flushed to verify unobstructed flow from roofline to splash block or drain.',
  },
  {
    title: 'Visual Inspection for Brackets, Rust & Slope',
    desc: 'Crews check for sagging sections, rusted fasteners, standing water, and disconnected downspouts.',
  },
  {
    title: 'Before-and-After Digital Photos',
    desc: 'Transparent verification of your clean roofline so you can see exactly what was removed without climbing a ladder.',
  },
  {
    title: 'Complete Ground-Level Debris Haul-Away',
    desc: 'All cleared organic matter is collected and hauled away — leaving flower beds, lawns, and decks spotless.',
  },
];

const eastBayCities = [
  { name: 'Antioch', href: '/' },
  { name: 'Brentwood', href: '/brentwood' },
  { name: 'Oakley', href: '/oakley' },
  { name: 'Pittsburg', href: '/pittsburg' },
  { name: 'Bay Point', href: '/bay-point' },
  { name: 'Discovery Bay', href: '/discovery-bay' },
  { name: 'Concord', href: '/concord' },
  { name: 'Clayton', href: '/clayton' },
  { name: 'Martinez', href: '/martinez' },
];

export async function generateStaticParams() {
  return allPages
    .filter((p) => p.slug !== '')
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  const keywordsArray = page.keywords
    ? page.keywords.split(';').map((k) => k.trim())
    : [];

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    keywords: keywordsArray,
    alternates: {
      canonical: `https://clearviewguttercleaningantioch.com/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: `https://clearviewguttercleaningantioch.com/${page.slug}`,
      siteName: 'Clearview Gutter Cleaning Antioch',
      type: 'website',
    },
  };
}

export default async function GenericPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const isContact = page.slug === 'contact';
  const isLocationPage = page.category === 'service-area' || page.category === 'service-areas-index';
  const isServicePage = page.category === 'service';
  const pageImage = slugImageMap[page.slug] || '/images/hero.webp';
  
  const pageDisplayName = isLocationPage
    ? page.slug === 'areas-we-serve'
      ? 'East Bay Communities'
      : page.title
    : page.title;

  // -------------------------------------------------------------
  // HOMEPAGE-STYLE DESIGN FOR LOCATION AND SERVICE PAGES
  // -------------------------------------------------------------
  if (isLocationPage || isServicePage) {
    const subtitlePill = isLocationPage
      ? `${pageDisplayName}, CA • East Contra Costa County`
      : `${pageDisplayName} • Antioch, CA`;

    const heroTitle = isLocationPage
      ? `Pioneering Safe & Efficient Gutter Solutions In ${pageDisplayName}`
      : `Professional ${pageDisplayName} In Antioch, CA`;

    const statsSubtitle = isLocationPage
      ? `Why ${pageDisplayName} Chooses Clearview`
      : `Why Antioch Chooses Clearview For ${pageDisplayName}`;

    const statsHeading = isLocationPage
      ? `Powering Safe Roof Drainage Across ${pageDisplayName}`
      : `Powering Safe Roof Drainage In Antioch & The East Bay`;

    const statsDescription = isLocationPage
      ? `Clearview Gutter Cleaning Antioch provides dedicated service to ${pageDisplayName} and surrounding East Bay communities with scheduling built around regional rainfall patterns.`
      : `Clearview Gutter Cleaning Antioch provides expert ${pageDisplayName.toLowerCase()} with ladder-safe, insured technicians equipped for East Contra Costa weather and architecture.`;

    const servicesSectionHeading = isLocationPage
      ? `Advanced Gutter Cleaning Solutions In ${pageDisplayName}`
      : `Complete Gutter Drainage Capabilities`;

    const filteredServices = isServicePage
      ? serviceHighlights.filter((s) => s.slug !== page.slug).slice(0, 6)
      : serviceHighlights;

    return (
      <div className="flex flex-col min-h-screen bg-[#0b0b0d]">
        {/* 1. HERO SECTION (identical structure to homepage) */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#1c1c22]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                {
                  label: isLocationPage ? 'Service Areas' : 'Services',
                  href: isLocationPage ? '/areas-we-serve' : '/services',
                },
                { label: pageDisplayName },
              ]}
            />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center mt-4">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                  <Sparkles className="h-3.5 w-3.5" />
                  {subtitlePill}
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl leading-[1.08]">
                  {heroTitle}
                </h1>

                <p className="text-base text-zinc-300 sm:text-lg leading-relaxed max-w-2xl">
                  {page.metaDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center gap-2 rounded-xl bg-[#ff5500] px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-[#ff5500]/25 transition hover:bg-[#ff6a1a] hover:scale-[1.02]"
                  >
                    <Phone className="h-5 w-5" />
                    Call For Free Quote: {PHONE_DISPLAY}
                  </a>
                </div>

                {/* Lower Hero Stats / Trust Mini-Block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-4 rounded-xl border border-[#22222a] bg-[#121216] p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ff5500] text-black font-extrabold text-xl">
                      ✓
                    </div>
                    <div>
                      <span className="block text-xl font-extrabold text-white">100% Insured</span>
                      <span className="text-xs text-zinc-400">Trained ladder-safe local technicians</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-[#22222a] bg-[#121216] p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1c1c24] text-[#ff5500] font-extrabold text-lg border border-[#2d2d38]">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-xl font-extrabold text-white">Zero Debris Left</span>
                      <span className="text-xs text-zinc-400">Complete ground-level clean-up &amp; haul-away</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-[#262630] bg-[#141418] p-3 shadow-2xl">
                  <div className="relative h-96 w-full overflow-hidden rounded-xl">
                    <Image
                      src={pageImage}
                      alt={page.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-[#0e0e12]/90 p-4 backdrop-blur-md border border-[#26262a]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                        {isLocationPage ? `Local ${pageDisplayName} Care` : `Professional ${pageDisplayName}`}
                      </span>
                      <p className="mt-1 text-xs text-zinc-300">
                        Hand-clearing channels, flushing downspouts, and protecting your fascia and foundations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STATS & METRICS SECTION (matching homepage) */}
        <section className="bg-[#0e0e11] py-16 border-b border-[#1c1c22]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                {statsSubtitle}
              </span>
              <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl">
                {statsHeading}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400">
                {statsDescription}
              </p>
            </div>

            {/* Banner Graphic */}
            <div className="relative mt-10 h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-[#262630]">
              <Image
                src="/images/clean-downspout.webp"
                alt="Rainwater flowing cleanly from downspouts"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e]/85 via-transparent to-[#0c0c0e]/85" />
              <div className="absolute bottom-6 left-6 max-w-md">
                <span className="rounded bg-[#ff5500] px-2.5 py-1 text-xs font-bold uppercase text-white">
                  Storm Ready
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Unobstructed Water Flow Protects Foundations
                </h3>
              </div>
            </div>

            {/* 4-Column Metric Row */}
            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
              <div className="rounded-xl border border-[#22222a] bg-[#131317] p-6 text-center">
                <span className="text-3xl sm:text-4xl font-black text-[#ff5500]">100%</span>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-zinc-300">
                  Insured &amp; Ladder-Safe Crews
                </p>
              </div>
              <div className="rounded-xl border border-[#22222a] bg-[#131317] p-6 text-center">
                <span className="text-3xl sm:text-4xl font-black text-[#ff5500]">10,000+</span>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-zinc-300">
                  Linear Feet Cleaned &amp; Flushed
                </p>
              </div>
              <div className="rounded-xl border border-[#22222a] bg-[#131317] p-6 text-center">
                <span className="text-3xl sm:text-4xl font-black text-[#ff5500]">8+</span>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-zinc-300">
                  East Bay Cities Serviced
                </p>
              </div>
              <div className="rounded-xl border border-[#22222a] bg-[#131317] p-6 text-center">
                <span className="text-3xl sm:text-4xl font-black text-[#ff5500]">5-Star</span>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-zinc-300">
                  Local Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ADVANCED SERVICES GRID (matching homepage) */}
        <section className="bg-[#0b0b0d] py-16 sm:py-24 border-b border-[#1c1c22]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                Our Core Capabilities
              </span>
              <h2 className="mt-2 text-3xl font-extrabold uppercase text-white sm:text-4xl">
                {servicesSectionHeading}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-400">
                From residential rooflines to commercial facilities, our crews provide thorough, hands-on gutter care across East Contra Costa County.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, idx) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={idx}
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#22222a] bg-[#121216] p-6 transition duration-300 hover:border-[#ff5500]/60 hover:bg-[#16161c]"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff5500]/15 text-[#ff5500] border border-[#ff5500]/30 transition group-hover:bg-[#ff5500] group-hover:text-white">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-white group-hover:text-[#ff5500] transition">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <div className="pt-6">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff5500] hover:text-[#ff6a1a]"
                      >
                        Learn More <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-[#303038] bg-[#141418] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ff5500] hover:text-[#ff5500]"
              >
                Explore All 14 Gutter Services <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. SOLUTIONS FOR EVERY PROPERTY (matching homepage) */}
        <section className="bg-[#0e0e11] py-16 sm:py-24 border-b border-[#1c1c22]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                Tailored Drainage Programs
              </span>
              <h2 className="mt-2 text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Solutions For Every Property
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Custom exterior roofline drainage care for single-story ranch homes, two-story developments, and commercial buildings.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {propertySolutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-[#22222a] bg-[#131317] flex flex-col justify-between transition hover:border-[#ff5500]/50"
                >
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white">{sol.title}</h3>
                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{sol.desc}</p>
                  </div>
                  <div className="relative h-44 w-full">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent" />
                    <Link
                      href={sol.href}
                      className="absolute bottom-3 right-3 rounded-md bg-[#ff5500] px-3 py-1.5 text-xs font-bold text-white shadow-md hover:bg-[#ff6a1a]"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHAT MAKES A GUTTER CLEANING THOROUGH (matching homepage) */}
        <section className="bg-[#0b0b0d] py-16 sm:py-24 border-b border-[#1c1c22]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
              {/* Left Checklist */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                  Thorough Drainage Care
                </span>
                <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl">
                  What Makes A Gutter Cleaning &ldquo;Thorough&rdquo;
                </h2>
                <p className="text-sm sm:text-base text-zinc-300">
                  Not every cleaning is the same. Some crews simply blow debris off the top of the gutter and call it done, which can push loose material further down the downspout and cause a bigger clog later. Our process is different &mdash; every section is cleared by hand, every downspout is flushed and tested, and we don&apos;t consider the job finished until water flows freely from outlet to ground.
                </p>

                <div className="space-y-4 pt-2">
                  {processPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-xl border border-[#202028] bg-[#121216] p-4 transition hover:border-[#ff5500]/40"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#ff5500] text-black font-extrabold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{point.title}</h4>
                        <p className="mt-1 text-xs text-zinc-400 leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Photo Stack */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-[#262630]">
                  <Image
                    src="/images/ladder-safety.webp"
                    alt="Clearview technician ladder safety check"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs font-bold text-white">
                    Ladder-Safe Certified Technicians
                  </div>
                </div>

                <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-[#262630]">
                  <Image
                    src="/images/gutter-system.webp"
                    alt="Seamless gutter alignment and clean drainage channel"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs font-bold text-white">
                    Flushed Downspouts &amp; Tested Slope
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. RECENT PROJECTS SHOWCASE (matching homepage) */}
        <section className="bg-[#0e0e11] py-16 sm:py-24 border-b border-[#1c1c22]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                  Proven Field Performance
                </span>
                <h2 className="mt-2 text-3xl font-extrabold uppercase text-white sm:text-4xl">
                  Recent Projects Across Antioch &amp; East Bay
                </h2>
                <p className="mt-2 text-sm text-zinc-400 max-w-xl">
                  Real results from residential and commercial properties throughout Antioch and neighboring East Contra Costa communities.
                </p>
              </div>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#ff5500] px-6 py-3.5 text-sm font-extrabold text-white hover:bg-[#ff6a1a] transition shrink-0 shadow-lg shadow-[#ff5500]/20"
              >
                <Phone className="h-4 w-4" />
                Call To Book: {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Card 01 */}
              <div className="overflow-hidden rounded-2xl border border-[#22222a] bg-[#131317]">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/project-1.webp"
                    alt="Residential gutter clearing project"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded bg-black/80 px-2.5 py-1 text-xs font-bold text-[#ff5500]">
                    PROJECT 01
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-white">Mira Vista Residential Clearing</h3>
                  <p className="mt-2 text-xs text-zinc-400">
                    Full hand clearing of heavy seasonal pine needle sludge and downspout flushing on a two-story home.
                  </p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="overflow-hidden rounded-2xl border border-[#22222a] bg-[#131317]">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/project-2.webp"
                    alt="Gutter repair and bracket reinforcement"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded bg-black/80 px-2.5 py-1 text-xs font-bold text-[#ff5500]">
                    PROJECT 02
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-white">Lone Tree Way Slope &amp; Bracket Alignment</h3>
                  <p className="mt-2 text-xs text-zinc-400">
                    Reinforced sagging aluminum gutters with heavy-duty hidden hangers to prevent overflow and water pooling.
                  </p>
                </div>
              </div>

              {/* Card 03 */}
              <div className="overflow-hidden rounded-2xl border border-[#22222a] bg-[#131317]">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/project-3.webp"
                    alt="Commercial property gutter maintenance"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded bg-black/80 px-2.5 py-1 text-xs font-bold text-[#ff5500]">
                    PROJECT 03
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-white">Antioch Marina Commercial Property</h3>
                  <p className="mt-2 text-xs text-zinc-400">
                    Annual seasonal drainage maintenance ensuring high-capacity roof runoff during heavy storms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. DETAILED GUIDE & EXACT VERBATIM SHEET CONTENT */}
        <section className="bg-[#0b0b0d] py-16 sm:py-20 border-b border-[#1c1c22]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#22222a] bg-[#111115] p-8 sm:p-12 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                {pageDisplayName} &bull; Detailed Guide
              </span>

              {/* Exact Sheet Content Rendered */}
              <div
                className="sheet-content mt-6"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />

              {/* Service Communities Strip */}
              <div className="mt-12 pt-8 border-t border-[#202028]">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Available Across Antioch &amp; East Contra Costa County
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {eastBayCities.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="rounded-lg border border-[#26262e] bg-[#16161b] px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-[#ff5500] hover:text-[#ff5500]"
                    >
                      {city.name}, CA
                    </Link>
                  ))}
                </div>
              </div>

              {/* Google Map Widget */}
              <div className="mt-8 rounded-xl border border-[#22222a] bg-[#141418] p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Clearview Service Location
                  </span>
                  <a
                    href={GOOGLE_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] text-[#ff5500] hover:underline"
                  >
                    Open Google Maps <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="overflow-hidden rounded-xl border border-[#26262a]">
                  <iframe
                    title="Clearview Antioch Gutter Map"
                    src={GOOGLE_MAP_EMBED}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PRE-FOOTER CTA SECTION */}
        <CTASection />
      </div>
    );
  }

  // -------------------------------------------------------------
  // FAQ AND CONTACT PAGES
  // -------------------------------------------------------------
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0d]">
      {/* Page Header / Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#1c1c22] bg-[#0e0e12] py-12 lg:py-16">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src={pageImage}
            alt={page.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e12] via-[#0e0e12]/95 to-[#0e0e12]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              {
                label: page.title,
              },
            ]}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                <Sparkles className="h-3.5 w-3.5" />
                Clearview Gutter Cleaning Antioch
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
                {page.title}
              </h1>

              <p className="mt-3 text-base text-zinc-300 max-w-2xl leading-relaxed">
                {page.metaDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 rounded-xl bg-[#ff5500] px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-[#ff5500]/25 transition hover:bg-[#ff6a1a] hover:scale-[1.02]"
                >
                  <Phone className="h-5 w-5" />
                  Call Direct: {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-[#272730] shadow-2xl">
                <Image
                  src={pageImage}
                  alt={page.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white flex items-center justify-between">
                  <span>Antioch &bull; East Bay</span>
                  <span className="text-[#ff5500]">Licensed &amp; Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-[#22222a] bg-[#121216] p-6 sm:p-10 shadow-lg">
                <div
                  className="sheet-content"
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />

                {/* If Contact Page, show direct call card */}
                {isContact && (
                  <div className="mt-10 rounded-2xl border border-[#2e2e38] bg-[#16161c] p-6 sm:p-10 text-center space-y-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff5500]/15 text-[#ff5500] border border-[#ff5500]/30 shadow-lg">
                      <Phone className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                        Direct Phone Contact &bull; Antioch, CA
                      </span>
                      <h3 className="mt-2 text-2xl font-extrabold text-white uppercase sm:text-3xl">
                        Call For Immediate Service &amp; Free Phone Quotes
                      </h3>
                      <p className="mt-2 text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed">
                        We operate exclusively by phone to give you immediate answers, fast pricing, and flexible appointment slots without delay.
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#ff5500] px-8 py-5 text-center text-xl font-extrabold text-white shadow-2xl shadow-[#ff5500]/30 transition hover:bg-[#ff6a1a] hover:scale-105"
                      >
                        <Phone className="h-6 w-6" />
                        <span>Call {PHONE_DISPLAY}</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#25252d] text-xs text-zinc-400">
                      <div>
                        <span className="block font-bold text-white uppercase">Operating Hours</span>
                        <span className="mt-1 block">Mon &ndash; Sat: 7:00 AM &ndash; 6:00 PM</span>
                      </div>
                      <div>
                        <span className="block font-bold text-white uppercase">Service Dispatch</span>
                        <span className="mt-1 block">Antioch &amp; East Contra Costa</span>
                      </div>
                      <div>
                        <span className="block font-bold text-white uppercase">Fast Appointments</span>
                        <span className="mt-1 block">Same-week scheduling available</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-[#292934] bg-[#141418] p-6 shadow-xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5500]/15 text-[#ff5500] border border-[#ff5500]/30">
                  <Phone className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-xl font-bold uppercase text-white">
                  Need Fast Assistance?
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  Speak directly with our local Antioch dispatch team for immediate scheduling.
                </p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-5 block w-full rounded-xl bg-[#ff5500] py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#ff5500]/25 transition hover:bg-[#ff6a1a]"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div className="rounded-2xl border border-[#22222a] bg-[#121216] p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Clearview Quality Standards
                </h4>
                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span>Fully licensed &amp; comprehensively insured crews.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span>Ladder-safe protocols &amp; roof protection stand-offs.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span>Free downspout flushing and testing with every cleaning.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span>Complete ground debris clean-up and haul-away.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#22222a] bg-[#121216] p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Our Location
                  </span>
                  <a
                    href={GOOGLE_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] text-[#ff5500] hover:underline"
                  >
                    Google Maps <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="overflow-hidden rounded-xl border border-[#26262a]">
                  <iframe
                    title="Clearview Antioch Location"
                    src={GOOGLE_MAP_EMBED}
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <CTASection />
    </div>
  );
}
