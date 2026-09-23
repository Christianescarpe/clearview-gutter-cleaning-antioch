import pagesData from '@/data/pages.json';
import blogsData from '@/data/blogs.json';

export interface PageItem {
  id: number;
  title: string;
  seoTitle: string;
  metaDescription: string;
  url: string;
  slug: string;
  category: 'home' | 'service' | 'service-area' | 'service-areas-index' | 'faq' | 'contact' | 'other';
  keywords: string;
  content: string;
  internalAnchor1: string;
  internalAnchor2: string;
  internalAnchor3: string;
  externalAnchor: string;
}

export interface BlogItem {
  id: number;
  title: string;
  seoTitle: string;
  metaDescription: string;
  url: string;
  slug: string;
  category: string;
  keywords: string;
  content: string;
  internalAnchor1: string;
  internalAnchor2: string;
  internalAnchor3: string;
  externalAnchor: string;
  publishedDate: string;
  readTime: string;
  author: string;
}

export const allPages = pagesData as PageItem[];
export const allBlogs = blogsData as BlogItem[];

export function getHomePage(): PageItem {
  return allPages.find((p) => p.url === '/') || allPages[0];
}

export function getPageBySlug(slug?: string): PageItem | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.replace(/^\//, '');
  return allPages.find((p) => p.slug === cleanSlug || p.url === `/${cleanSlug}`);
}

export function getServicePages(): PageItem[] {
  return allPages.filter((p) => p.category === 'service');
}

export function getServiceAreaPages(): PageItem[] {
  return allPages.filter((p) => p.category === 'service-area');
}

export function getBlogBySlug(slug?: string): BlogItem | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.replace(/^\/blog\//, '').replace(/^\//, '');
  return allBlogs.find((b) => b.slug === cleanSlug);
}

export const PHONE_NUMBER = '+19255062219';
export const PHONE_DISPLAY = '+1 (925) 506-2219';
export const GOOGLE_MAP_URL = 'https://maps.app.goo.gl/Bvkw9VmQ7D3LwDFP8';
export const GOOGLE_MAP_EMBED = 'https://maps.google.com/maps?q=Clearview+Gutter+Cleaning+Antioch&t=&z=12&ie=UTF8&iwloc=&output=embed';
