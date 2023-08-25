import Image from 'next/image'

export default function Home() {
  return (
    <section className="py-6 px-12 grid grid-cols-2 gap-4">
      <section className="px-4 pt-4 border-l-4 border-t-4">
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
      <section className="px-4 pt-4">
        <h2 className="text-3xl font-bold">Work experience</h2>
        <table className="table-auto border-separate border-spacing-y-4">
          <tbody>
            <tr>
              <td className="w-1/4 align-top">2021 - 2023</td>
              <td>
                <h3>
                  <strong>
                    Senior Software Engineer - Boundless Immigration
                  </strong>
                </h3>
                <p>
                  Developed 5 customer facing products, one internal product,
                  and one internal frontend library
                </p>
                <p className="mt-2">TS • React • Ruby on Rails</p>
              </td>
            </tr>
            <tr className="mt-10">
              <td className="w-1/4 align-top">2021 - 2023</td>
              <td>
                <h3>
                  <strong>
                    Senior Software Engineer - Boundless Immigration
                  </strong>
                </h3>
                <p>
                  Developed 5 customer facing products, one internal product,
                  and one internal frontend library
                </p>
                <p className="mt-2">TS • React • Ruby on Rails</p>
              </td>
            </tr>
            <tr className="mt-10">
              <td className="w-1/4 align-top">2021 - 2023</td>
              <td>
                <h3>
                  <strong>
                    Senior Software Engineer - Boundless Immigration
                  </strong>
                </h3>
                <p>
                  Developed 5 customer facing products, one internal product,
                  and one internal frontend library
                </p>
                <p className="mt-2">TS • React • Ruby on Rails</p>
              </td>
            </tr>
            <tr className="mt-10">
              <td className="w-1/4 align-top">2021 - 2023</td>
              <td>
                <h3>
                  <strong>
                    Senior Software Engineer - Boundless Immigration
                  </strong>
                </h3>
                <p>
                  Developed 5 customer facing products, one internal product,
                  and one internal frontend library
                </p>
                <p className="mt-2">TS • React • Ruby on Rails</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  )
}
