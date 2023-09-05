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
      <body
        className={`${inter.className} flex flex-col items-center content-center bg-gradient-to-r from-neutral-900 to-stone-950 text-zinc-100`}
      >
        <div className="total-width h-screen" style={{ maxWidth: '1024px' }}>
          <main className="main-padding pt-14 h-full">
            <section className="flex flex-col h-full">
              <div className="flex pb-4 header">
                <h1 className="text-center text-5xl font-bold main-section">
                  <Link className="nav-link" href="/">
                    JS
                  </Link>
                </h1>
                <nav className="mobile-nav text-center">
                  <Link href="/about-me" className="nav-link">
                    About me
                  </Link>
                  <span className="mx-2">|</span>
                  <Link href="/experience" className="nav-link">
                    Experience
                  </Link>
                  <span className="mx-2">|</span>
                  <Link href="/side-projects" className="nav-link">
                    Projects
                  </Link>
                </nav>
              </div>
              <div className="flex justify-between content-height">
                <section className="px-4 pt-4 border-l-8 border-t-8 col-span-2 border-cyan-700 rounded overflow-scroll main-section">
                  {children}
                </section>
                <nav className="flex flex-col nav">
                  <ul className="px-4 pb-4 border-r-4 border-b-4 border-cyan-700 rounded mt-auto ml-auto self-end">
                    <li>
                      <Link href="/about-me" className="nav-link">
                        About me
                      </Link>
                    </li>
                    <li>
                      <Link href="/experience" className="nav-link">
                        Experience
                      </Link>
                    </li>
                    <li>
                      <Link href="/side-projects" className="nav-link">
                        Projects
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </main>
        </div>
      </body>
    </html>
  )
}
