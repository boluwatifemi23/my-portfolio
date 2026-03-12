import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gloria Aguedu | Full-Stack Developer — Lagos, Nigeria',
  description: 'Full-Stack Developer from Lagos, Nigeria. I build fast, beautiful, production-ready web applications using Next.js, React, Node.js, MongoDB and more. Available for freelance and full-time opportunities.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Web Developer Nigeria', 'Lagos Developer', 'Gloria Aguedu'],
  authors: [{ name: 'Gloria Aguedu' }],
  creator: 'Gloria Aguedu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Gloria Aguedu | Full-Stack Developer',
    description: 'Full-Stack Developer from Lagos, Nigeria. Building fast, beautiful, production-ready web apps.',
    siteName: 'Gloria Aguedu Portfolio',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}