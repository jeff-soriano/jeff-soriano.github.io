import Link from 'next/link'

export default function Experience() {
  const externalLinkIconClasses = 'fa fa-external-link ml-2 fa-sm'
  return (
    <section>
      <h2 className="text-3xl font-bold text-white">Work experience</h2>
      <table className="table-auto border-separate border-spacing-y-4">
        <tbody>
          <tr>
            <td className="w-1/4 align-top">2021 - 2023</td>
            <td>
              <h3>
                <a
                  href="https://apply.boundless.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <strong>
                    Senior Software Engineer - Boundless Immigration{' '}
                  </strong>
                </a>
                <i className={externalLinkIconClasses} aria-hidden="true"></i>
              </h3>
              <p>
                Developed 5 customer facing products, one internal product, and
                one internal frontend library. Core products were to help
                immigrants prepare their required forms for visas. Think
                TurboTax but for immigration.
              </p>
              <Link
                className="text-cyan-600 hover:underline"
                href="/experience/boundless"
              >
                More details
              </Link>
              <p className="mt-2">
                TypeScript • React • Redux • Ruby on Rails • PostgreSQL
              </p>
            </td>
          </tr>
          <tr className="mt-10">
            <td className="w-1/4 align-top">2018 - 2020</td>
            <td>
              <h3>
                <a
                  href="https://www.ltgame.com/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <strong>Software Engineer II - LT Game</strong>
                </a>
                <i className={externalLinkIconClasses} aria-hidden="true"></i>
              </h3>
              <p>
                Developed 7 slot machine games for a major gaming products
                company based out of Macau. Games include Door to Riches and
                Gold Dragon
              </p>
              <p className="mt-2">Java • Aspect Gaming Platform</p>
            </td>
          </tr>
          <tr className="mt-10">
            <td className="w-1/4 align-top">2017 - 2017</td>
            <td>
              <h3>
                <a
                  href="https://www.igt.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <strong>
                    Software Engineer I - International Game Technology
                  </strong>
                </a>
                <i className={externalLinkIconClasses} aria-hidden="true"></i>
              </h3>
              <p>
                Developed 2 slot machine games for one of the biggest gaming
                companies in the world
              </p>
              <p className="mt-2">C# • Unity</p>
            </td>
          </tr>
          <tr className="mt-10">
            <td className="w-1/4 align-top">2016 - 2016</td>
            <td>
              <h3>
                <a
                  href="https://www.linkedin.com/company/pclender.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <strong>Software Developer - PCLender LLC</strong>
                </a>
                <i className={externalLinkIconClasses} aria-hidden="true"></i>
              </h3>
              <p>
                Wrote automated tests and fixed bugs in web product which helped
                lenders calculate mortgage costs and risks
              </p>
              <p className="mt-2">PHP • Selenium C#</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
