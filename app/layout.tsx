import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leon Trofimenko (Леон Трофименко) - 16-Year-Old Entrepreneur & Developer",
  description: "Leon Trofimenko (Леон Трофименко) is a 16-year-old entrepreneur and developer building innovative e-commerce solutions. Specializing in AI-driven development, system architecture, and data acquisition for global markets. Молодой предприниматель и разработчик из России.",
  keywords: [
    "Leon Trofimenko",
    "Leon Trofimenko developer",
    "Leon Trofimenko entrepreneur",
    "Леон Трофименко",
    "Леон Трофименко разработчик",
    "Леон Трофименко предприниматель",
    "16 year old entrepreneur",
    "young entrepreneur",
    "AI developer",
    "Japrix founder",
    "e-commerce developer",
    "systems architect",
    "teenage entrepreneur",
    "молодой предприниматель",
    "разработчик 16 лет"
  ],
  authors: [{ name: "Leon Trofimenko" }],
  creator: "Leon Trofimenko",
  publisher: "Leon Trofimenko",
  openGraph: {
    title: "Leon Trofimenko (Леон Трофименко) - 16-Year-Old Entrepreneur & Developer",
    description: "Leon Trofimenko (Леон Трофименко) - 16-year-old entrepreneur and developer building innovative e-commerce solutions. Молодой предприниматель и разработчик, специализирующийся на AI-разработке и системной архитектуре.",
    url: "https://leontrofimenko.com",
    siteName: "Leon Trofimenko",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Leon Trofimenko - Entrepreneur & Developer",
      },
      {
        url: "/me2.jpeg",
        width: 1200,
        height: 630,
        alt: "Leon Trofimenko - 16-year-old entrepreneur building e-commerce solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon Trofimenko (Леон Трофименко) - 16-Year-Old Entrepreneur & Developer",
    description: "Building innovative e-commerce solutions with AI-driven development. Молодой предприниматель и разработчик.",
    images: ["/me.jpeg", "/me2.jpeg"],
    creator: "@leontrofimenko",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://leontrofimenko.com",
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/me.jpeg' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Leon Trofimenko",
              "alternateName": "Леон Трофименко",
              "jobTitle": "Entrepreneur & Developer",
              "description": "16-year-old entrepreneur and developer specializing in AI-driven development and e-commerce solutions",
              "url": "https://leontrofimenko.com",
              "email": "leontrofim228@gmail.com",
              "birthDate": "2010",
              "nationality": "Russian",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Self-taught Developer"
              },
              "knowsAbout": [
                "AI Development",
                "E-commerce",
                "Web Development",
                "System Architecture",
                "Data Acquisition",
                "Entrepreneurship"
              ],
              "founder": [
                {
                  "@type": "Organization",
                  "name": "Japrix",
                  "description": "E-commerce platform for Japanese market"
                },
                {
                  "@type": "Organization",
                  "name": "Wordlex",
                  "url": "https://www.wordlex.online",
                  "description": "English learning platform"
                }
              ],
              "image": {
                "@type": "ImageObject",
                "url": "https://leontrofimenko.com/me.jpeg",
                "width": 1200,
                "height": 630,
                "caption": "Leon Trofimenko - 16-year-old entrepreneur and developer"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
