'use client'

import { Nunito_Sans } from 'next/font/google'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import Particles from './components/particles'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export default function Home() {
  const navClasses = 'text-zinc-500 duration-500 hover:text-zinc-300'
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <nav className="my-16">
        <ul className="flex items-center justify-center gap-4 text-sm animate-fade-in">
          <li className={navClasses}>
            <Link href="/about">About</Link>
          </li>
          <li className={navClasses}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={navClasses}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <section className="flex flex-col items-center">
          <h1
            className={`${nunitoSans.className} text-white font-bold text-4xl sm:text-6xl md:text-9xl typewriter`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('wassup').start()
              }}
            />
          </h1>
          <div className="my-16 text-center">
            <h3 className="text-zinc-500 animate-fade-in">
              Hi, my name is Jeff. I'm a fullstack developer looking to build
              stuff that makes a positive impact
            </h3>
          </div>
        </section>
      </main>
    </div>
  )
}
