'use client'

import { Nunito_Sans } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
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
        <section className="flex flex-col items-center">
          <h1
            className={`${nunitoSans.className} font-bold text-4xl sm:text-6xl md:text-9xl transition-opacity duration-1000 opacity-100 animate-bounce`}
          >
            wassup
          </h1>
          <div className="my-16 text-center animate-fade-in">
            <h2 className="text-zinc-500">
              Hi, my name is Jeff. I'm a fullstack developer looking to build
              stuff that makes a positive impact
            </h2>
          </div>
        </section>
      </main>
    </div>
  )
}
