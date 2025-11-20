import { writeFileSync } from 'fs';
import { resolve } from 'path';

export default function sitemapPlugin(options = {}) {
  const {
    hostname = 'https://lama.school',
    routes = ['/'],
    outDir = 'dist'
  } = options;

  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      const sitemap = generateSitemap(hostname, routes);
      const robotsTxt = generateRobotsTxt(hostname);
      
      writeFileSync(resolve(outDir, 'sitemap.xml'), sitemap);
      writeFileSync(resolve(outDir, 'robots.txt'), robotsTxt);
    }
  };
}

function generateSitemap(hostname, routes) {
  const urls = routes.map(route => `
  <url>
    <loc>${hostname}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateRobotsTxt(hostname) {
  return `User-agent: *
Allow: /

Sitemap: ${hostname}/sitemap.xml`;
} 