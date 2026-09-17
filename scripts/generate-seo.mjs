import "dotenv/config";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = process.env.SITE_URL;

if (!SITE_URL) {
  throw new Error("SITE_URL is not defined in .env");
}

const ROUTES = [
  "/",
  "/about",
  "/contacts",
  "/catalog",
];

const DIST_DIR = path.resolve("dist");

const getUrl = (route) =>
  route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (route) => `  <url>
    <loc>${getUrl(route)}</loc>
  </url>`,
).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await mkdir(DIST_DIR, { recursive: true });

await Promise.all([
  writeFile(path.join(DIST_DIR, "sitemap.xml"), sitemap),
  writeFile(path.join(DIST_DIR, "robots.txt"), robots),
]);

console.log("Generated sitemap.xml and robots.txt");
