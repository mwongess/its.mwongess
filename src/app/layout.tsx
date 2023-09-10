import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Amos Mwongela ',
  description: 'Talented full-stack software engineer with a passion for creating elegant, robust, and scalable applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id='home' className={inter.className} >{children}</body>
    </html>
  )
}
