import Image from 'next/image'

export default function Home() {
  return (
    <section className="py-6 px-12 grid grid-cols-3 gap-4">
      <section className="px-4 pt-4 border-l-4 border-t-4 col-span-2">
        <h1 className="text-4xl font-bold">
          Hi there, my name is Jeff Soriano
        </h1>
        <p className="mt-2">
          I'm a fullstack developer based out of Las Vegas, NV. I have over 7
          years of experience working across different tech stacks, but my core
          strengths revolve around <strong>React</strong> and{' '}
          <strong>Ruby on Rails</strong>.
        </p>
        <p className="mt-2">
          If you want to build something together, hit me up!
        </p>
        <p className="mt-2">-JS</p>
      </section>
      <section className="flex">
        <div className="mt-auto ml-auto px-4 pt-4 border-l-4 border-t-4">
          <ul>
            <li>About me</li>
            <li>Experience</li>
            <li>Project</li>
          </ul>
        </div>
      </section>
    </section>
  )
}
