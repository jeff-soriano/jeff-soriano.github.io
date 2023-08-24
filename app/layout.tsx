import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-gray-950 to-blue-950`}
      >
        <nav className="z-10 text-sm">
          <div className="flex justify-center pb-6 pt-8 ">
            <Link className="mr-8" href="/">
              About me
            </Link>
            <Link className="mr-8" href="/experience">
              Experience
            </Link>
            <Link className="mr-8" href="/side-projects">
              Side projects
            </Link>
            <p>Resume</p>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
