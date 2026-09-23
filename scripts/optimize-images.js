const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = 'D:\\images\\gutter cleaning';
const TARGET_DIR = path.join(__dirname, '../public/images');

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Map logical names to source files
const imageMappings = [
  { target: 'hero.webp', source: 'man-on-ladder-cleaning-gutters-of-a-suburban-house-2026-08-14-15-27-48-utc.jpg', width: 1920, height: 1080, quality: 80 },
  { target: 'hero-card.webp', source: 'gutter-cleaning-with-brush-and-pole-in-suburbia-2026-03-25-23-41-31-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'gutter-cleaning.webp', source: 'gutter-cleaning-with-brush-and-pole-in-suburbia-2026-03-25-23-41-31-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'downspout-cleaning.webp', source: 'drainpipe-next-to-building-overlooking-green-grass-2026-03-17-04-25-09-utc.JPG', width: 800, height: 600, quality: 80 },
  { target: 'clogged-gutters.webp', source: 'gutters-clogged-with-leaves-and-small-branches-2026-03-24-00-28-54-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'gutter-debris-removal.webp', source: 'man-cleans-leaves-from-gutters-in-autumn-2026-04-13-23-53-02-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'gutter-maintenance.webp', source: 'man-working-on-gutter-wearing-gloves-and-cap-2026-09-22-07-59-27-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'gutter-inspection.webp', source: 'fixing-ladder-on-a-rooftop-on-bright-day-2026-03-25-07-04-50-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'gutter-repair.webp', source: 'man-repairing-gutter-with-power-tool-outside-home-2026-03-09-03-26-08-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'gutter-guard-installation.webp', source: 'rooftop-gutter-protection-system-on-a-residential-2026-03-23-23-00-24-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'gutter-guard-cleaning.webp', source: 'pressure-washing-the-black-gutters-of-a-house-2026-03-20-06-16-51-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'commercial-gutter-cleaning.webp', source: 'window-cleaner-working-high-up-on-urban-building-2026-03-24-07-43-18-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'residential-gutter-cleaning.webp', source: 'house-exterior-detail-with-autumn-leaves-2026-03-19-07-01-42-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'roof-and-gutter-cleaning.webp', source: 'man-power-washing-the-roof-on-a-sunny-day-2026-03-24-09-07-13-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'emergency-gutter-cleaning.webp', source: 'orange-roof-tiles-and-gutter-with-debris-2026-03-25-04-05-47-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'ladder-safety.webp', source: 'worker-climbs-ladder-inspecting-building-under-blu-2026-03-24-03-56-08-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'clean-downspout.webp', source: 'rainwater-flowing-from-downspout-on-house-roof-2026-03-11-04-23-28-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'gutter-system.webp', source: 'silver-gutter-system-on-a-brown-roof-2026-03-10-03-57-13-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'project-1.webp', source: 'man-cleaning-gutters-with-vacuum-and-safety-gloves-2026-09-22-07-59-36-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'project-2.webp', source: 'man-using-red-power-drill-to-install-gutter-on-met-2026-09-03-04-08-11-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'project-3.webp', source: 'man-cleaning-gutters-on-house-with-vacuum-2026-03-25-23-48-48-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'water-flow.webp', source: 'water-splashes-abstractly-in-sunlight-with-buildin-2026-03-26-06-52-18-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'technician-ladder.webp', source: 'male-technician-in-blue-uniform-climbing-ladder-on-2026-09-01-16-21-02-utc.jpg', width: 800, height: 600, quality: 80 },
  { target: 'banner-cta.webp', source: 'man-on-ladder-cleaning-gutters-of-a-suburban-house-2026-08-14-15-27-48-utc.jpg', width: 1600, height: 600, quality: 80 }
];

async function optimizeImages() {
  console.log(`Optimizing ${imageMappings.length} images...`);
  for (const item of imageMappings) {
    const srcPath = path.join(SOURCE_DIR, item.source);
    const destPath = path.join(TARGET_DIR, item.target);

    if (!fs.existsSync(srcPath)) {
      console.warn(`Source file not found: ${srcPath}`);
      continue;
    }

    try {
      await sharp(srcPath)
        .resize({ width: item.width, height: item.height, fit: 'cover', position: 'center' })
        .webp({ quality: item.quality })
        .toFile(destPath);
      
      const stats = fs.statSync(destPath);
      console.log(`Optimized ${item.target}: ${(stats.size / 1024).toFixed(1)} KB`);
    } catch (err) {
      console.error(`Error optimizing ${item.target}:`, err);
    }
  }
  console.log('All image optimizations finished successfully!');
}

optimizeImages();
