import Image from 'next/image'

export default function Home() {
  return (
    <section className="py-6 px-12 flex flex-col items-center">
      <Image
        priority
        src="/images/profile.jpeg"
        className="rounded-full mb-10"
        height={200}
        width={200}
        alt="cute bois"
      />
      <h1 className="text-5xl font-bold">WASSSUUUUUP! ✌️</h1>
      <br />
      <p>
        My name is <span className="font-bold">Jeff</span>. I'm a{' '}
        <span className="font-bold">fullstack developer</span>. I like to work
        on things I <span className="font-bold">believe</span> in.
      </p>
      <br />
      <p>Let's go!</p>
    </section>
  )
}
