import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

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
        <script
          src="https://kit.fontawesome.com/e2a9be5813.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${inter.className}`}>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-neutral-900 to-stone-950 text-zinc-100 h-screen w-screen">
          <nav className="my-16">
            <ul className="flex items-center justify-center gap-4 text-sm">
              <li className="text-zinc-500 duration-500 hover:text-zinc-300">
                <Link href="/about-me">About me</Link>
              </li>
              <li className="text-zinc-500 duration-500 hover:text-zinc-300">
                <Link href="/experience">Experience</Link>
              </li>
              <li className="text-zinc-500 duration-500 hover:text-zinc-300">
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
          <main>
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
