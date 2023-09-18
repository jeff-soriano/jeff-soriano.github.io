import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jeff Soriano',
  description: "Jeff Soriano's personal site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/e2a9be5813.js"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body
        className={`${inter.className} bg-gradient-to-r from-neutral-900 to-stone-950 text-zinc-100 `}
      >
        {children}
      </body>
    </html>
  )
}
