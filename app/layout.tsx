import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Link from 'next/link'

const outfit = Outfit({ subsets: ['latin'] })

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
        className={`${outfit.className} flex flex-col items-center content-center bg-gradient-to-r from-gray-950 from-90% to-blue-950 to-100% text-gray-200`}
      >
        <div className="w-10/12 h-screen" style={{ maxWidth: '1024px' }}>
          <main className="pt-8 h-full">
            <section className="py-6 px-12 flex flex-col h-full">
              <div className="flex pb-4">
                <h1 className="text-center text-5xl font-bold w-2/3">
                  <Link className="text-white" href="/">
                    JS
                  </Link>
                </h1>
                <div>
                  <br />
                </div>
              </div>
              <div className="flex justify-between h-5/6">
                <section className="px-4 pt-4 border-l-8 border-t-8 col-span-2 border-cyan-700 rounded overflow-scroll w-2/3">
                  {children}
                </section>
                <nav className="flex flex-col">
                  <ul className="px-4 pb-4 border-r-4 border-b-4 border-cyan-700 rounded mt-auto ml-auto self-end">
                    <li>
                      <Link href="/about-me">About me</Link>
                    </li>
                    <li>
                      <Link href="/experience">Experience</Link>
                    </li>
                    <li>
                      <Link href="/side-projects">Projects</Link>
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
