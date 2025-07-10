import ImageSection from "../components/ImageSection";

export default function Ora() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4">
        <div className="mt-14 mb-7">
          <h1 className="mb-2">Ora</h1>
          <p>
            <a
              href={"https://ora-xi.vercel.app/"}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Website
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            Full disclosure - I came back to my Catholic faith after a long
            hiatus. I wanted to build something that would lie at the
            intersection of my tech career and my spiritual life. Ora is the
            result of that.
          </p>
          <p>
            Ora is an AI-powered prayer and journaling app. The tech stack was
            NextJS/Typescript and Tailwind for styling. I used OpenAI APIs to
            generate a daily Bible verse and to generate reflections based on
            user input. The daily Bible verse was cached with Redis to avoice
            multiple hits to the API.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ImageSection src="/images/ora/landing.png" header="Landing Page" />
        <ImageSection src="/gifs/ora/journal.gif" header="Journal Page">
          Users can write in their journal and use AI to generate spiritual
          reflections from past entries. Important to note is the user must
          opt-in to this feature.
        </ImageSection>
        <ImageSection src="/gifs/ora/lectio.gif" header="Lectio Divina">
          Lectio Divina is an ancient prayer practice that involves reading a
          passage of scripture, praying with it, and then reflecting on it. Ora
          guides the user through this process then offers an AI-generated
          reflection at the end (also opt-in)
        </ImageSection>
      </div>
    </div>
  );
}
