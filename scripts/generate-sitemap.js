import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Setup paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const DATA_DIR = path.resolve(__dirname, '../src/data/blogs');

const DOMAIN = 'https://kaizenbreach.vercel.app'; // REPLACE THIS WITH YOUR DOMAIN

// 2. Define Static Routes
const routes = [
  '/',
  '/notes',
  '/tools',
  '/blog',
  '/about',
  '/connect',
  '/resume',
  '/certifications'
];

// 3. Helper to read blog slugs using Regex (since we can't easily import TS in JS script without compiling)
function getBlogSlugs() {
  const slugs = [];
  try {
    const files = fs.readdirSync(DATA_DIR);
    
    files.forEach(file => {
      if (file.endsWith('.ts') && file !== 'index.ts' && file !== 'types.ts') {
        const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
        // Regex to find slug: "practical-helpdesk-notes"
        const regex = /slug:\s*["']([^"']+)["']/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
          slugs.push(match[1]);
        }
      }
    });
  } catch (err) {
    console.error("Error reading blog directory:", err);
  }
  return slugs;
}

// 4. Generate XML
const blogSlugs = getBlogSlugs();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${blogSlugs.map(slug => `
  <url>
    <loc>${DOMAIN}/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

// 5. Write to public folder
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
console.log('✅ sitemap.xml generated in public/ folder');