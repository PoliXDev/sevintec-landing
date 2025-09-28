import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sevintec.com'),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.company.name }],
  creator: siteConfig.company.name,
  // Meta tags para forzar tema claro
  other: {
    'color-scheme': 'light only',
    'theme-color': '#ffffff',
    'msapplication-navbutton-color': '#ffffff',
    'apple-mobile-web-app-status-bar-style': 'light-content',
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sevintec.com",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.company.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Meta tags adicionales para forzar tema claro */}
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-navbutton-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body
        className={`${roboto.variable} font-roboto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
