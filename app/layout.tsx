import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { SEO_CONFIG } from '../domain/seo/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  openGraph: {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [{ url: SEO_CONFIG.ogImage }],
    url: SEO_CONFIG.url,
    siteName: SEO_CONFIG.siteName,
    locale: SEO_CONFIG.locale,
    type: SEO_CONFIG.type,
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
