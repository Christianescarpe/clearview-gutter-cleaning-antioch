import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Droplets,
  Building,
  Home,
  AlertTriangle,
  Layers,
  Search,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { getHomePage, PHONE_NUMBER, PHONE_DISPLAY } from '@/lib/data';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  const homeData = getHomePage();

  const serviceHighlights = [
    {
      title: 'Professional Gutter Cleaning',
      desc: 'Full hand-removal of leaves, twigs, and sediment from channels and roof valleys. Thorough clearing for optimal flow.',
      href: '/gutter-cleaning',
      icon: Droplets,
    },
    {
      title: 'Downspout Flushing & Clearing',
      desc: 'High-volume water flushing to clear stubborn downspout clogs before rainy weather arrives and causes overflow.',
      href: '/downspout-cleaning',
      icon: Droplets,
    },
    {
      title: 'Gutter Repair & Sealing',
      desc: 'Fix loose brackets, leaky seams, sagging troughs, and misaligned slope to ensure proper drainage away from foundations.',
      href: '/gutter-repair',
      icon: Wrench,
    },
    {
      title: 'Gutter Guard Installation',
      desc: 'High-grade micro-mesh and screen leaf protection systems designed for East Bay oak and pine debris.',
      href: '/gutter-guard-installation',
      icon: Layers,
    },
    {
      title: 'Commercial Gutter Cleaning',
      desc: 'Custom maintenance programs for Antioch commercial buildings, multi-family complexes, retail centers, and offices.',
      href: '/commercial-gutter-cleaning',
      icon: Building,
    },
    {
      title: 'Multi-Point Gutter Inspection',
      desc: 'Detailed roofline and drainage assessment with before-and-after photo documentation and repair recommendations.',
      href: '/gutter-inspection',
      icon: Search,
    },
  ];

  const propertySolutions = [
    {
      title: 'Single-Family Homes',
      desc: 'Custom care for classic ranch, two-story, and modern homes across Antioch neighborhoods.',
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
      desc: 'Scheduled bi-annual cleanings timed specifically before and during Antioch’s atmospheric river storms.',
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
      desc: 'All cleared organic matter is collected and hauled away &mdash; leaving flower beds, lawns, and decks spotless.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0d]">
      {/* 1. HERO SECTION (matching template design) */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#1c1c22]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                <Sparkles className="h-3.5 w-3.5" />
                Antioch, CA &bull; East Contra Costa County
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl leading-[1.08]">
                Pioneering Safe &amp; Efficient Gutter Solutions In Antioch
              </h1>

              <p className="text-base text-zinc-300 sm:text-lg leading-relaxed max-w-2xl">
                As the <strong>local gutter cleaners Antioch</strong> residents call first, our crews know the neighborhoods, tree cover, and weather patterns that make gutter maintenance in this part of East Contra Costa County different from a generic job. We bring a ladder-safe, insured process to every roofline.
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
                    src="/images/hero.webp"
                    alt="Clearview Gutter Cleaning Antioch technician on ladder"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-[#0e0e12]/90 p-4 backdrop-blur-md border border-[#26262a]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                      Local Antioch Care
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

      {/* 2. STATS & METRICS SECTION (matching template section 2) */}
      <section className="bg-[#0e0e11] py-16 border-b border-[#1c1c22]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
              Why Antioch Chooses Clearview
            </span>
            <h2 className="text-3xl font-extrabold uppercase text-white sm:text-4xl">
              Powering Safe Roof Drainage Across The East Bay
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Clearview Gutter Cleaning Antioch focuses on Antioch and surrounding East Bay communities with scheduling and care built for East Contra Costa rainfall patterns.
            </p>
          </div>

          {/* Banner Graphic */}
          <div className="relative mt-10 h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-[#262630]">
            <Image
              src="/images/clean-downspout.webp"
              alt="Rainwater flowing cleanly from downspout"
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

      {/* 3. ADVANCED SERVICES GRID (matching template section 3) */}
      <section className="bg-[#0b0b0d] py-16 sm:py-24 border-b border-[#1c1c22]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
              Our Core Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-extrabold uppercase text-white sm:text-4xl">
              Advanced Gutter Cleaning Solutions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400">
              From residential homes near Hillcrest to commercial buildings on Lone Tree Way, our crews provide thorough, hands-on care.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((service, idx) => {
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

      {/* 4. SOLUTIONS FOR YOUR PROPERTY (matching template section 4) */}
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
              Antioch architecture ranges from single-story ranch homes to multi-unit complexes and commercial facilities.
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

      {/* 5. SPLIT FEATURE: WHAT MAKES A CLEANING THOROUGH (matching template section 5) */}
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

      {/* 6. PROJECT / RECENT WORK SHOWCASE (matching template section 7) */}
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
                Real results from neighborhoods in Antioch, Brentwood, Oakley, and Pittsburg before the rainy season arrives.
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
                  alt="Deep hand vacuum gutter cleaning"
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
                  Full hand clearing of heavy pine needle sludge and downspout flushing on a two-story home.
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
                <h3 className="text-base font-bold text-white">Lone Tree Way Bracket Realignment</h3>
                <p className="mt-2 text-xs text-zinc-400">
                  Reinforced sagging aluminum gutters with heavy-duty hidden hangers to prevent water pooling.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="overflow-hidden rounded-2xl border border-[#22222a] bg-[#131317]">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/project-3.webp"
                  alt="Gutter guard cleaning and inspection"
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
                  Annual seasonal drainage maintenance ensuring high-capacity roof runoff into delta channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DETAILED HOME GUIDE & COMPLETE CONTENT FROM SHEET */}
      <section className="bg-[#0b0b0d] py-16 sm:py-20 border-b border-[#1c1c22]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#22222a] bg-[#111115] p-8 sm:p-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
              Antioch Gutter Maintenance Guide
            </span>
            
            {/* Exact Sheet Content Rendered */}
            <div
              className="sheet-content mt-6"
              dangerouslySetInnerHTML={{ __html: homeData.content }}
            />

            {/* External Links & EPA Citation Highlight from Sheet */}
            <div className="mt-8 rounded-xl border border-[#282834] bg-[#15151b] p-5">
              <div className="flex items-start gap-3">
                <ExternalLink className="h-5 w-5 text-[#ff5500] shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-300">
                  <p className="font-semibold text-white">Environmental Protection Guidance:</p>
                  <p className="mt-1">
                    According to the{' '}
                    <a
                      href="https://www.epa.gov/soakuptherain/soak-rain-downspouts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff5500] underline font-medium"
                    >
                      U.S. Environmental Protection Agency&apos;s guidance on managing roof runoff
                    </a>
                    , properly maintained downspouts play a meaningful role in reducing localized flooding and soil erosion around residential foundations.
                  </p>
                </div>
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
