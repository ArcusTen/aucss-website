import './globals.css'
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL('https://aucss.org'),
  title: 'AUCSS - Air University Cyber Security Society',
  description: 'The official website of Air University Cyber Security Society - Empowering students with cybersecurity knowledge and skills',
  keywords: 'AUCSS, Air University, Cyber Security, Society, Pakistan, Education, Technology',
  authors: [{ name: 'AUCSS Team' }],
  openGraph: {
    title: 'Air University Cyber Security Society',
    description: 'Empowering students with cybersecurity knowledge and skills',
    url: 'https://aucss.org',
    siteName: 'AUCSS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AUCSS',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="shortcut icon" href="/favicon.ico" />
      <body className="min-h-screen bg-gray-50">
        <div className="gradient"></div>
        <main className="relative z-10">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
