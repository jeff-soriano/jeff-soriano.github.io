import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <h1
        className={`${nunitoSans.className} font-bold text-4xl sm:text-6xl md:text-9xl transition-opacity duration-1000 opacity-100 animate-bounce`}
      >
        wassup
      </h1>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-zinc-500">
          Hi, my name is Jeff. I'm a fullstack developer looking to build stuff
          that makes a positive impact
        </h2>
      </div>
    </section>
  )
}
