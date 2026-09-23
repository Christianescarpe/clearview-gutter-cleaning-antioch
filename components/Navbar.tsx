'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { PHONE_NUMBER, PHONE_DISPLAY } from '@/lib/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const servicesList = [
    { title: 'Gutter Cleaning', href: '/gutter-cleaning' },
    { title: 'Downspout Cleaning', href: '/downspout-cleaning' },
    { title: 'Gutter & Downspout Cleaning', href: '/gutter-and-downspout-cleaning' },
    { title: 'Clogged Gutter Cleaning', href: '/clogged-gutter-cleaning' },
    { title: 'Gutter Debris Removal', href: '/gutter-debris-removal' },
    { title: 'Gutter Maintenance', href: '/gutter-maintenance' },
    { title: 'Gutter Inspection', href: '/gutter-inspection' },
    { title: 'Gutter Repair', href: '/gutter-repair' },
    { title: 'Gutter Guard Installation', href: '/gutter-guard-installation' },
    { title: 'Gutter Guard Cleaning', href: '/gutter-guard-cleaning' },
    { title: 'Commercial Gutter Cleaning', href: '/commercial-gutter-cleaning' },
    { title: 'Residential Gutter Cleaning', href: '/residential-gutter-cleaning' },
    { title: 'Roof & Gutter Cleaning', href: '/roof-and-gutter-cleaning' },
    { title: 'Emergency Gutter Cleaning', href: '/emergency-gutter-cleaning' },
  ];

  const serviceAreasList = [
    { name: 'Areas We Serve (Overview)', href: '/areas-we-serve' },
    { name: 'Brentwood, CA', href: '/brentwood' },
    { name: 'Oakley, CA', href: '/oakley' },
    { name: 'Pittsburg, CA', href: '/pittsburg' },
    { name: 'Bay Point, CA', href: '/bay-point' },
    { name: 'Discovery Bay, CA', href: '/discovery-bay' },
    { name: 'Concord, CA', href: '/concord' },
    { name: 'Clayton, CA', href: '/clayton' },
    { name: 'Martinez, CA', href: '/martinez' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222222] bg-[#0c0c0e]/95 backdrop-blur-md">
      {/* Top Notification Bar */}
      <div className="hidden border-b border-[#1f1f23] bg-[#09090b] py-2 text-xs text-[#a1a1aa] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="h-3.5 w-3.5 text-[#ff5500]" />
              Licensed & Insured Local Crews
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="h-3.5 w-3.5 text-[#ff5500]" />
              Same-Week Appointments Available
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="h-3.5 w-3.5 text-[#ff5500]" />
              Antioch & East Contra Costa County
            </span>
          </div>
          <div>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 font-semibold text-white transition hover:text-[#ff5500]"
            >
              <Phone className="h-3.5 w-3.5 text-[#ff5500]" />
              Call Direct: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff5500] text-black font-black tracking-wider transition group-hover:scale-105 shadow-md shadow-[#ff5500]/20">
            <span className="text-xl font-extrabold text-white">C</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white uppercase group-hover:text-[#ff5500] transition">
              Clearview
            </span>
            <span className="text-[11px] font-semibold tracking-widest text-[#a1a1aa] uppercase -mt-1">
              Gutter Cleaning Antioch
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center space-x-1 lg:flex">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-[#1a1a1a] hover:text-white"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-[#1a1a1a] hover:text-white"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className="h-4 w-4 text-[#a1a1aa]" />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-1 w-72 rounded-xl border border-[#262626] bg-[#121214] p-2 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-1 gap-1">
                  {servicesList.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-lg px-3 py-2 text-xs font-medium text-zinc-300 transition hover:bg-[#ff5500]/10 hover:text-[#ff5500]"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Areas We Serve Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-[#1a1a1a] hover:text-white"
              onClick={() => setAreasOpen(!areasOpen)}
            >
              Areas We Serve
              <ChevronDown className="h-4 w-4 text-[#a1a1aa]" />
            </button>

            {areasOpen && (
              <div className="absolute left-0 mt-1 w-64 rounded-xl border border-[#262626] bg-[#121214] p-2 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-1 gap-1">
                  {serviceAreasList.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="block rounded-lg px-3 py-2 text-xs font-medium text-zinc-300 transition hover:bg-[#ff5500]/10 hover:text-[#ff5500]"
                      onClick={() => setAreasOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/faq"
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-[#1a1a1a] hover:text-white"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-[#1a1a1a] hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-[#1a1a1a] hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button: Call Only */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 rounded-xl bg-[#ff5500] px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-[#ff5500]/25 transition hover:bg-[#ff6a1a] hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now: {PHONE_DISPLAY}</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff5500] text-white"
            aria-label="Call Clearview Gutter Cleaning"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-400 hover:bg-[#1c1c1f] hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-[#222222] bg-[#0f0f12] px-4 py-6 lg:hidden">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-[#1a1a1f]"
            >
              Home
            </Link>

            {/* Services Mobile */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-[#1a1a1f]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#a1a1aa] transition-transform ${
                    servicesOpen ? 'rotate-180 text-[#ff5500]' : ''
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="mt-1 space-y-1 pl-4">
                  {servicesList.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md py-1.5 text-sm text-zinc-400 hover:text-[#ff5500]"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas Mobile */}
            <div>
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-[#1a1a1f]"
              >
                <span>Areas We Serve</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#a1a1aa] transition-transform ${
                    areasOpen ? 'rotate-180 text-[#ff5500]' : ''
                  }`}
                />
              </button>
              {areasOpen && (
                <div className="mt-1 space-y-1 pl-4">
                  {serviceAreasList.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md py-1.5 text-sm text-zinc-400 hover:text-[#ff5500]"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-[#1a1a1f]"
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-[#1a1a1f]"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-[#1a1a1f]"
            >
              Contact
            </Link>

            <div className="pt-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff5500] py-3.5 text-center text-sm font-extrabold text-white shadow-lg shadow-[#ff5500]/20"
              >
                <Phone className="h-4 w-4" />
                Call Direct: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
