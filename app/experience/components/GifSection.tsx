import Image from 'next/image'

interface Props {
  children: React.ReactNode
  gif: string
  header: string
}

export default function GifSection({ children, gif, header }: Props) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2">{header}</h2>
      <Image
        priority
        className="mb-2"
        src={`/gifs/${gif}.gif`}
        height={850}
        width={850}
        alt="travel visa questionnaire gif"
      />
      <p>{children}</p>
    </section>
  )
}
