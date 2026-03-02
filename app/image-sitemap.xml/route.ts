export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://leontrofimenko.com</loc>
    <image:image>
      <image:loc>https://leontrofimenko.com/me.jpeg</image:loc>
      <image:caption>Leon Trofimenko - 16-year-old entrepreneur and developer, founder of Japrix and Wordlex</image:caption>
      <image:title>Leon Trofimenko</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://leontrofimenko.com/#about</loc>
    <image:image>
      <image:loc>https://leontrofimenko.com/me.jpeg</image:loc>
      <image:caption>Leon Trofimenko - AI-Driven Developer and Systems Architect</image:caption>
      <image:title>Leon Trofimenko - About</image:title>
    </image:image>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
