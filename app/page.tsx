import Image from 'next/image'

export default function Home() {
  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold text-white">
          Wassup, my name is Jeff Soriano
        </h1>
        <p className="mt-2">
          I'm a fullstack developer based out of Las Vegas, NV. I have over 7
          years of experience working across different tech stacks, but my core
          strengths revolve around <strong>React</strong> and{' '}
          <strong>Ruby on Rails</strong>.
        </p>
        <p className="mt-2">
          If you want to build something together, hit me up! ✌️
        </p>
      </div>
      <div className="text-5xl my-4">
        <a href="mailto:soriano.jeffm@gmail.com" rel="noreferrer">
          <i className="fas fa-envelope contact-icon"></i>
        </a>
        <a
          href="https://github.com/jeff-soriano"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          <i className="fab fa-github ml-8 contact-icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jeff-soriano/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          <i className="fab fa-linkedin ml-8 contact-icon"></i>
        </a>
      </div>
      <p className="mt-2">-JS</p>
    </section>
  )
}
