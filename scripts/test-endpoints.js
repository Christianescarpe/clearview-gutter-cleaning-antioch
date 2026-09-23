const http = require('http');

const urls = [
  '/',
  '/gutter-cleaning',
  '/downspout-cleaning',
  '/brentwood',
  '/faq',
  '/areas-we-serve',
  '/contact',
  '/services',
  '/blog',
  '/blog/how-often-should-you-clean-gutters-antioch',
  '/blog/signs-gutters-are-clogged-antioch'
];

async function testUrl(path) {
  return new Promise((resolve) => {
    http.get('http://localhost:3005' + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const hasPhone = data.includes('+19255062219') || data.includes('(925) 506-2219');
        const hasMap = data.includes('maps.google.com') || data.includes('maps.app.goo.gl');
        console.log(`[${res.statusCode}] ${path} - Length: ${data.length} | Phone: ${hasPhone} | Map: ${hasMap}`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error on ${path}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  console.log('Testing endpoints on http://localhost:3005...');
  for (const u of urls) {
    await testUrl(u);
  }
  console.log('Endpoint verification completed!');
}

run();
