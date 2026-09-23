import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs text-zinc-400">
      <Link href="/" className="flex items-center gap-1 hover:text-white transition">
        <Home className="h-3.5 w-3.5 text-[#ff5500]" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
            {isLast || !item.href ? (
              <span className="font-semibold text-zinc-200 truncate max-w-xs sm:max-w-md">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-white transition">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
