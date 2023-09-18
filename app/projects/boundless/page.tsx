import SubPageLayout from '@/app/components/SubPageLayout'
import GifSection from '../components/GifSection'

export default function Boundless() {
  return (
    <section>
      <section className="mb-4">
        <div className="mt-14 mb-7">
          <h1 className="mb-2"> Boundless Immigration</h1>
          <p>
            <a
              href={'https://apply.boundless.com/'}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Website
            </a>
          </p>
        </div>

        <p className="mb-2">
          At Boundless, I started out as a front-end engineer, but quickly grew
          to work in the back-end as well. While there I developed and
          maintained 5 customer-facing products, one internal operations tool,
          and one frontend library.
        </p>
        <p className="mb-2">
          The tech stack was React/Redux written in Typescript, Ruby on Rails,
          and PostgreSQL
        </p>
        <p>Here's just a few things I worked on while I was there:</p>
      </section>
      <section>
        <GifSection gif="b1b2" header="B1/B2 Travel Visa Questionnaire">
          Questionnaire product that screens risk of denial when applying for
          B1/B2 travel visa. Built in "just-in-time" components that explains to
          customer why their risk may go up or down depending on answers.{' '}
        </GifSection>
        <GifSection gif="address-history" header="Address & Employment History">
          Simple user interface with a lot going on in the background. Both
          frontend and backend validation was written to ensure addresses were
          inputted correctly, and that there were no overlaps in dates in order
          to avoid getting possible rejections from USCIS
        </GifSection>
        <GifSection gif="doc-upload" header="Document Upload">
          Document upload page for customers to upload supporting documents that
          support their case in obtaining a visa. Each page contains
          instructions for the type of document to upload. Documents were
          securely uploaded to AWS S3.
        </GifSection>
        <GifSection gif="milestone-tracker" header="Milestone Tracker">
          A "milestone tracker" to let customers who have completed their K1
          visa application track further actions needed when obtaining a
          marriaged-based green card in the future. Dates and inputs on the page
          were dynamically altered based on customer input to certain fields.
        </GifSection>
        <GifSection gif="checkout" header="Checkout Page">
          Checkout page that leads you down two options, paying for government
          fees upfront or deciding to do that later. Integrated with Stripe and
          SplitIt webhooks.
        </GifSection>
      </section>
    </section>
  )
}
