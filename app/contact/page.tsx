export default function Contact() {
  return (
    <div>
      <div className="mt-14 mb-7">
        <h1 className="mb-2">Contact</h1>
      </div>
      <p>
        Github{' '}
        <a
          href={'https://github.com/jeff-soriano'}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {' '}
          @jeff-soriano
        </a>
      </p>
      <br />
      <p></p>
      <p>
        LinkedIn{' '}
        <a
          href={'https://linkedin.com/in/jeff-soriano'}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {' '}
          @jeff-soriano
        </a>
      </p>
      <br />
      <p>
        Email{' '}
        <a href={'mailto:soriano.jeffm@gmail.com'} className="underline">
          {' '}
          soriano.jeffm@gmail.com
        </a>
      </p>
    </div>
  )
}
