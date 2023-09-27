import Link from 'next/link'

interface Props {
  title: string
  description: string
  tech: string
  githubLink?: string
  link?: string
  websiteLink?: string
}

export default function Project({
  title,
  description,
  tech,
  githubLink,
  link,
  websiteLink,
}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <br />
      <p>{description}</p>
      <br />
      <p className="text-zinc-500">{tech}</p>
      <br />
      {websiteLink && (
        <a
          href={websiteLink}
          target="_blank"
          rel="noreferrer"
          className="underline mr-3"
        >
          Website
        </a>
      )}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="underline mr-3"
        >
          Github
        </a>
      )}
      {link && (
        <Link className="underline" href={link}>
          Read more
        </Link>
      )}
    </div>
  )
}
