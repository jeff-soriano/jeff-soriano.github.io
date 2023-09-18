import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  heading: string
}

export default function SubPageLayout({ children, heading }: Props) {
  const navClasses = 'duration-200 text-zinc-400 hover:text-zinc-100'
  return (
    <div className="mx-auto max-w-xl">
      <nav className="flex justify-between pt-4 items-center">
        <div className={`${navClasses} text-2xl`}>
          <Link href="/">{'<-'}</Link>
        </div>
        <div>
          <ul className="flex gap-x-3 text-sm">
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
        </div>
      </nav>
      <h1 className="mt-14 mb-7">{heading}</h1>
      {children}
      <div className="flex justify-between py-8 mt-16 border-t border-zinc-800">
        <p className="text-zinc-600 text-xs">2023 © Jeff Soriano</p>
      </div>
    </div>
  )
}
