export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://leontrofimenko.com</loc>
    <image:image>
      <image:loc>https://leontrofimenko.com/me.jpeg</image:loc>
      <image:caption>Leon Trofimenko (Леон Трофименко) - 16-year-old entrepreneur and developer, founder of Japrix and Wordlex. Молодой предприниматель и разработчик.</image:caption>
      <image:title>Leon Trofimenko (Леон Трофименко)</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://leontrofimenko.com/#about</loc>
    <image:image>
      <image:loc>https://leontrofimenko.com/me.jpeg</image:loc>
      <image:caption>Leon Trofimenko (Леон Трофименко) - AI-Driven Developer and Systems Architect. Разработчик и системный архитектор.</image:caption>
      <image:title>Leon Trofimenko (Леон Трофименко) - About</image:title>
    </image:image>
    <image:image>
      <image:loc>https://leontrofimenko.com/me2.jpeg</image:loc>
      <image:caption>Leon Trofimenko (Леон Трофименко) - 16-year-old entrepreneur building innovative e-commerce solutions. Молодой предприниматель.</image:caption>
      <image:title>Leon Trofimenko (Леон Трофименко) - Photo 2</image:title>
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
