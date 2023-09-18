import Image from 'next/image'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <div className="mx-auto max-w-xl">
      <nav className="flex justify-between pt-4 items-center">
        <div className="duration-200 text-zinc-400 hover:text-zinc-100 text-2xl">
          <Link href="/">{'<-'}</Link>
        </div>
        <div>
          <ul className="flex gap-x-3 text-sm">
            <li className="duration-200 text-zinc-400 hover:text-zinc-100">
              <Link href="/about-me">About me</Link>
            </li>
            <li className="duration-200 text-zinc-400 hover:text-zinc-100">
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="mt-14 mb-7">About</h1>
      <Image
        priority
        src="/images/profile.jpeg"
        className="rounded-full mb-7"
        height={200}
        width={200}
        alt="cute bois"
      />

      <div className="border-b pb-16 border-zinc-800">
        <p>
          I was born in Cali, but Reno NV is my hometown. I went to school there
          at the University of Nevada, Reno to obtain my{' '}
          <strong>degree in Computer Science & Engineering</strong>. Shortly
          afterward I worked in the gaming industry for a few years. Then I
          moved to Las Vegas, which is where I live now.
        </p>
        <br />

        <p>
          I decided I wanted to work on web-based products and for companies
          that had a mission that reached beyond profits. In a few short months
          I taught myself <strong>React and NodeJS</strong>, which helped me
          land a job at Boundless Immigration. There, my skills grew to include{' '}
          <strong>Ruby on Rails</strong>.
        </p>
        <br />

        <p>
          I'm looking forward to learning more things. I'm a fullstack developer
          with a slight preference towards the frontend. Right now I'm teaching
          myself the <strong>NextJS</strong> framework, which is what this site
          was built in!
        </p>
        <br />
        <p>
          Things I <strong>love</strong>: video games, barbecue, hangin' with my
          friends and family
        </p>
        <p>
          Things I <strong>hate</strong>: styrofoam, losing the Amazon Firestick
          remote
        </p>
      </div>
      <div className="flex justify-between py-8">
        <p className="text-zinc-600 text-xs">2023 © Jeff Soriano</p>
      </div>
    </div>
  )
}
