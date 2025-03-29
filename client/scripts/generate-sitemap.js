import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'http://localhost:5000'; // Change if deploying

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/recipes', changefreq: 'daily', priority: 0.9 },
  { url: '/creator', changefreq: 'monthly', priority: 0.7 },
];

const sitemapStream = new SitemapStream({ hostname: BASE_URL });

pages.forEach(page => {
  sitemapStream.write(page);
});

sitemapStream.end();

streamToPromise(sitemapStream)
  .then(sitemap => {
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap.toString());
    console.log('✅ Sitemap generated at public/sitemap.xml');
  })
  .catch(console.error); 