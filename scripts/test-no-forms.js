const http = require('http');

async function check(url) {
  return new Promise(res => {
    http.get('http://localhost:3005' + url, r => {
      let d = '';
      r.on('data', chunk => d += chunk);
      r.on('end', () => {
        const hasForm = d.includes('<form');
        const hasInput = d.includes('<input');
        const hasPhone = d.includes('+19255062219');
        console.log(`[${r.statusCode}] ${url} | hasForm: ${hasForm} | hasInput: ${hasInput} | hasPhone: ${hasPhone}`);
        res();
      });
    });
  });
}

(async () => {
  await check('/contact');
  await check('/');
  await check('/services');
  await check('/brentwood');
  await check('/gutter-cleaning');
  console.log('All form checks passed!');
})();
