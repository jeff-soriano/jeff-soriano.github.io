import Project from "./components/project";

export default function Projects() {
  return (
    <div>
      <div className="mt-14 mb-7">
        <h1 className="mb-2">Projects</h1>
        <p>Some projects from work/personal time</p>
      </div>
      <div className="flex flex-col gap-4">
        <Project
          title="Ora"
          description="AI-powered prayer and journal app"
          tech="Typescript, React, NextJS, Tailwind, OpenAI, Vercel, Redis"
          link="/projects/ora"
        />
        <Project
          title="Boundless Immigration"
          description="Helps immigrants get visas to come to the United States. Think TurboTax for immigrants."
          tech="Typescript, React, Redux, Tailwind, Material UI, Ruby on Rails, PostgreSQL"
          link="/projects/boundless"
        />
        <Project
          title="Wikipedia Top Results"
          description="Fetches from a wikipedia API to get the top results from a selected day"
          tech="Typescript, React, Tailwind"
          githubLink="https://github.com/jeff-soriano/wikipedia-page-views-ts"
          websiteLink="https://wikipedia-page-views-ts.vercel.app/"
        />
        <Project
          title="PetBase"
          description="PetBase is a simple CRUD app for your pets. You can make your own account and add your pets to a simple interface."
          tech="React, Bootstrap, NodeJS, Express, mongoDB, auth0, AWS S3"
          githubLink="https://github.com/jeff-soriano/petbase"
        />
        <Project
          title="Squad-do"
          description="Squad-do is a to-do list meant for teams. In other words, multiple people have access to the same to-do list, and everyone can add, cross off, or delete items concurrently."
          tech="JavaScript, React, Express, NodeJS, mongoDB, socket.io, Material-UI, Heroku"
          githubLink="https://github.com/jeff-soriano/squad-do"
        />
        <Project
          title="Felinder"
          description="Simple landing page for imaginary Tinder for people who want to find cats to pet."
          tech="HTML5, CSS3, Bootstrap"
          githubLink="https://github.com/jeff-soriano/felinder"
        />
      </div>
    </div>
  );
}
