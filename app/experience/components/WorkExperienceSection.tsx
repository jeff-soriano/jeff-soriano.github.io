import Link from 'next/link'

interface Props {
  dates: string
  description: string
  link: string
  moreDetailsLink?: string
  skills: string[]
  title: string
}

export default function WorkExperienceSection({
  dates,
  description,
  link,
  moreDetailsLink,
  skills,
  title,
}: Props) {
  const externalLinkIconClasses = 'fa fa-external-link ml-2 fa-sm'

  return (
    <tr>
      <td className="w-1/4 align-top">{dates}</td>
      <td>
        <h3>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            <strong className="text-white">{title}</strong>
          </a>
          <i className={externalLinkIconClasses} aria-hidden="true"></i>
        </h3>
        <p>{description}</p>
        {moreDetailsLink && (
          <Link
            className="text-cyan-600 hover:underline"
            href={moreDetailsLink}
          >
            More details
          </Link>
        )}
        <p className="mt-2">
          {skills.map((skill, index) => (
            <span>
              {skill} {index !== skills.length - 1 && '• '}
            </span>
          ))}
        </p>
      </td>
    </tr>
  )
}
