const fs = require('fs');
const path = require('path');

const seoData = JSON.parse(fs.readFileSync(path.join(__dirname, '../sheet1_seo.json'), 'utf8'));
const blogData = JSON.parse(fs.readFileSync(path.join(__dirname, '../sheet2_blog.json'), 'utf8'));

// Process SEO pages (skip header row 0)
const pages = seoData.slice(1).map((row, idx) => {
  const cols = row.cols;
  const rawUrl = (cols.D || '').trim();
  // slug is without leading slash
  const slug = rawUrl === '/' ? '' : rawUrl.replace(/^\//, '');
  
  // Categorize page
  let category = 'other';
  if (rawUrl === '/') {
    category = 'home';
  } else if ([
    '/brentwood', '/oakley', '/pittsburg', '/bay-point', '/discovery-bay', '/concord', '/clayton', '/martinez'
  ].includes(rawUrl)) {
    category = 'service-area';
  } else if (rawUrl === '/areas-we-serve') {
    category = 'service-areas-index';
  } else if (rawUrl === '/faq') {
    category = 'faq';
  } else if (rawUrl === '/contact') {
    category = 'contact';
  } else {
    category = 'service';
  }

  return {
    id: idx + 1,
    title: (cols.A || '').trim(),
    seoTitle: (cols.B || '').trim(),
    metaDescription: (cols.C || '').trim(),
    url: rawUrl,
    slug: slug,
    category: category,
    keywords: (cols.E || '').trim(),
    content: (cols.F || '').trim(),
    internalAnchor1: (cols.G || '').trim(),
    internalAnchor2: (cols.H || '').trim(),
    internalAnchor3: (cols.I || '').trim(),
    externalAnchor: (cols.J || '').trim()
  };
});

// Process Blog posts (skip header row 0)
const blogs = blogData.slice(1).map((row, idx) => {
  const cols = row.cols;
  const rawUrl = (cols.D || '').trim();
  // url is /blog/slug -> slug
  const slug = rawUrl.replace(/^\/blog\//, '').replace(/^\//, '');

  return {
    id: idx + 1,
    title: (cols.A || '').trim(),
    seoTitle: (cols.B || '').trim(),
    metaDescription: (cols.C || '').trim(),
    url: rawUrl,
    slug: slug,
    category: 'blog',
    keywords: (cols.E || '').trim(),
    content: (cols.F || '').trim(),
    internalAnchor1: (cols.G || '').trim(),
    internalAnchor2: (cols.H || '').trim(),
    internalAnchor3: (cols.I || '').trim(),
    externalAnchor: (cols.J || '').trim(),
    // Standard publication dates and reading time
    publishedDate: `October ${idx + 2}, 2026`,
    readTime: '5 min read',
    author: 'Clearview Gutter Team'
  };
});

fs.writeFileSync(path.join(__dirname, '../data/pages.json'), JSON.stringify(pages, null, 2));
fs.writeFileSync(path.join(__dirname, '../data/blogs.json'), JSON.stringify(blogs, null, 2));

console.log(`Processed ${pages.length} pages and ${blogs.length} blog posts.`);
