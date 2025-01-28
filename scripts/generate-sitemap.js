import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import universitiesData from '../src/data/world_universities_and_domains.json' assert { type: "json" };
import slugify from 'slugify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getUniversitySlug(name) {
  return slugify(name, {
    lower: false,
    strict: true,
    trim: true
  });
}

const generateSitemap = () => {
  const baseUrl = 'https://universitynearyou.com';
  
  // Filter and sort universities
  const selectedUniversities = universitiesData
    // Filter universities with more complete information
    .filter(uni => 
      uni.name && 
      uni.country && 
      uni['state-province'] && 
      uni.web_pages && 
      uni.web_pages.length > 0
    )
    // Sort by country to get a good geographical distribution
    .sort((a, b) => a.country.localeCompare(b.country))
    // Limit to 500 universities
    .slice(0, 500);

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add homepage
  sitemap += `  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;
  
  // Add university pages
  selectedUniversities.forEach(uni => {
    const slug = getUniversitySlug(uni.name);
    sitemap += `  <url>
    <loc>${baseUrl}/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });
  
  sitemap += '</urlset>';
  
  // Write sitemap to public directory
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log(`Sitemap generated successfully with ${selectedUniversities.length} universities!`);
};

generateSitemap();