import Link from 'next/link'

interface Props {
  title: string
  description: string
  tech: string
  githubLink?: string
  link?: string
}

export default function Project({
  title,
  description,
  tech,
  githubLink,
  link,
}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <br />
      <p>{description}</p>
      <br />
      <p className="text-zinc-500">{tech}</p>
      <br />
      {githubLink && (
        <p>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Github
          </a>
        </p>
      )}
      {link && (
        <p>
          <Link href={link}>Read more</Link>
        </p>
      )}
    </div>
  )
}
