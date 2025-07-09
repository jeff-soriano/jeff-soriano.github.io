import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="mt-14 mb-7">
        <h1 className="mb-2">About</h1>
      </div>
      <Image
        priority
        src="/images/profile.jpeg"
        className="rounded-full mb-7"
        height={200}
        width={200}
        alt="cute bois"
      />

      <div>
        <p>
          I was born in Cali, but Reno NV is my hometown. I went to school there
          at the University of Nevada, Reno to obtain my{" "}
          <strong>degree in Computer Science & Engineering</strong>. Shortly
          afterward I worked in the gaming industry for a few years. Then I
          moved to Las Vegas, which is where I live now.
        </p>
        <br />

        <p>
          I decided I wanted to work on web-based products and for companies
          that had a mission that reached beyond profits. In a few short months
          I taught myself <strong>React and NodeJS</strong>, which helped me
          land a job at Boundless Immigration. There, my skills grew to include{" "}
          <strong>Ruby on Rails</strong>.
        </p>
        <br />

        <p>
          I'm looking forward to learning more things. I'm a frontend developer
          who's always looking to expand my skillset. Right now I'm messing
          around with <strong>AI</strong> (along with everyone else, lol).
        </p>
        <br />
        <p>
          Things I <strong>love</strong>: video games, barbecue, hangin' with my
          friends and family
        </p>
        <p>
          Things I <strong>hate</strong>: styrofoam, losing the Amazon Firestick
          remote
        </p>
      </div>
    </div>
  );
}
