import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { PHONE_NUMBER, PHONE_DISPLAY, GOOGLE_MAP_URL, GOOGLE_MAP_EMBED } from '@/lib/data';

export default function Footer() {
  const currentYear = 2026;

  const coreServices = [
    { name: 'Gutter Cleaning', href: '/gutter-cleaning' },
    { name: 'Downspout Cleaning', href: '/downspout-cleaning' },
    { name: 'Gutter & Downspout Cleaning', href: '/gutter-and-downspout-cleaning' },
    { name: 'Clogged Gutter Cleaning', href: '/clogged-gutter-cleaning' },
    { name: 'Gutter Debris Removal', href: '/gutter-debris-removal' },
    { name: 'Gutter Maintenance Plans', href: '/gutter-maintenance' },
    { name: 'Gutter Inspection', href: '/gutter-inspection' },
    { name: 'Gutter Repair', href: '/gutter-repair' },
    { name: 'Gutter Guard Installation', href: '/gutter-guard-installation' },
    { name: 'Commercial Gutter Cleaning', href: '/commercial-gutter-cleaning' },
    { name: 'Residential Gutter Cleaning', href: '/residential-gutter-cleaning' },
    { name: 'Emergency Gutter Cleaning', href: '/emergency-gutter-cleaning' },
  ];

  const serviceAreas = [
    { name: 'Antioch, CA (Home Base)', href: '/' },
    { name: 'Brentwood, CA', href: '/brentwood' },
    { name: 'Oakley, CA', href: '/oakley' },
    { name: 'Pittsburg, CA', href: '/pittsburg' },
    { name: 'Bay Point, CA', href: '/bay-point' },
    { name: 'Discovery Bay, CA', href: '/discovery-bay' },
    { name: 'Concord, CA', href: '/concord' },
    { name: 'Clayton, CA', href: '/clayton' },
    { name: 'Martinez, CA', href: '/martinez' },
    { name: 'View All Service Areas', href: '/areas-we-serve' },
  ];

  return (
    <footer className="border-t border-[#222222] bg-[#09090b] text-zinc-300">
      {/* Top Banner / Call Out */}
      <div className="border-b border-[#1c1c20] bg-[#0e0e11] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                East Contra Costa County Drainage Specialists
              </span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Ready for Antioch&apos;s Rainy Season?
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Call today for a fast, no-obligation quote from our ladder-safe, insured technicians.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 rounded-xl bg-[#ff5500] px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-[#ff5500]/25 transition hover:bg-[#ff6a1a] hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call Direct: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff5500] text-black font-black">
                <span className="text-xl font-extrabold text-white">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white uppercase">
                  Clearview
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-[#a1a1aa] uppercase -mt-1">
                  Gutter Cleaning Antioch
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              Locally owned gutter care company keeping gutters, downspouts, and rooflines flowing properly across Antioch, Brentwood, Oakley, Pittsburg, and surrounding East Bay communities.
            </p>
            <div className="space-y-2 text-sm text-zinc-300 pt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2.5 font-bold text-white hover:text-[#ff5500] transition"
              >
                <Phone className="h-4 w-4 text-[#ff5500]" />
                {PHONE_DISPLAY}
              </a>
              <div className="flex items-start gap-2.5 text-zinc-400">
                <MapPin className="h-4 w-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span>Antioch, CA 94509 &amp; Surrounding East Bay Areas</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-400">
                <Clock className="h-4 w-4 text-[#ff5500]" />
                <span>Mon - Sat: 7:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Gutter Services
            </h4>
            <div className="mt-1 h-0.5 w-8 bg-[#ff5500]" />
            <ul className="mt-4 space-y-2 text-sm">
              {coreServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-zinc-400 transition hover:text-[#ff5500] hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Areas We Serve
            </h4>
            <div className="mt-1 h-0.5 w-8 bg-[#ff5500]" />
            <ul className="mt-4 space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-zinc-400 transition hover:text-[#ff5500] hover:underline"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Google Map Embed */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Find Us In Antioch
              </h4>
              <a
                href={GOOGLE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[#ff5500] hover:underline"
              >
                Open Map <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="mt-1 h-0.5 w-8 bg-[#ff5500]" />
            
            {/* Map Frame */}
            <div className="mt-4 overflow-hidden rounded-xl border border-[#26262a] bg-[#141416]">
              <iframe
                title="Clearview Gutter Cleaning Antioch Location"
                src={GOOGLE_MAP_EMBED}
                width="100%"
                height="190"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full opacity-90 transition hover:opacity-100 filter contrast-125"
              />
              <div className="p-3 bg-[#111113] border-t border-[#202024] flex items-center justify-between">
                <span className="text-xs text-zinc-300 font-semibold">
                  Clearview Gutter Cleaning Antioch
                </span>
                <a
                  href={GOOGLE_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#ff5500]/20 px-2 py-1 text-[11px] font-bold text-[#ff5500] transition hover:bg-[#ff5500] hover:text-white"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="h-4 w-4 text-[#ff5500]" />
              <span>Full Liability Insurance &amp; Ladder Safety Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-[#1a1a1f] bg-[#070709] py-6 text-xs text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div>
            &copy; {currentYear} Clearview Gutter Cleaning Antioch. All rights reserved. Phone: {PHONE_DISPLAY}.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-[#ff5500] transition">Home</Link>
            <Link href="/services" className="hover:text-[#ff5500] transition">Services</Link>
            <Link href="/areas-we-serve" className="hover:text-[#ff5500] transition">Service Areas</Link>
            <Link href="/faq" className="hover:text-[#ff5500] transition">FAQ</Link>
            <Link href="/blog" className="hover:text-[#ff5500] transition">Blog</Link>
            <Link href="/contact" className="hover:text-[#ff5500] transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
