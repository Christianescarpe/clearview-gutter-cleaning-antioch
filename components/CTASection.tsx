import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, ShieldCheck, Calendar, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER, PHONE_DISPLAY } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0e] py-16 sm:py-24 border-t border-[#1e1e24]">
      {/* Subtle Glow & Background Image */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src="/images/banner-cta.webp"
          alt="Antioch Gutter Cleaning Services"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/90 to-[#0c0c0e]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#27272f] bg-[#131317]/90 p-8 shadow-2xl backdrop-blur-md sm:p-12 md:p-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5500]">
                <ShieldCheck className="h-4 w-4" />
                Clearview Gutter Cleaning Antioch
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl uppercase">
                Connect With Us For Reliable Gutter Solutions
              </h2>
              <p className="mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg">
                Whether you need leaves cleared from roof channels, clogged downspouts flushed, or seasonal gutter maintenance, our Antioch crews are ready. Call directly for a free estimate.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-zinc-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[#ff5500]" />
                  Ladder-Safe Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[#ff5500]" />
                  Full Haul-Away Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[#ff5500]" />
                  Before &amp; After Photos
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-[#ff5500] px-8 py-5 text-center text-lg font-extrabold text-white shadow-xl shadow-[#ff5500]/25 transition hover:bg-[#ff6a1a] hover:scale-[1.02]"
              >
                <Phone className="h-6 w-6 transition-transform group-hover:rotate-12" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
              <div className="text-center text-xs text-zinc-400">
                Direct Antioch Dispatch &bull; Free Phone Estimates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
