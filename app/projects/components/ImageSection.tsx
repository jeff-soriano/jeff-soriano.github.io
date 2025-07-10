import Image from "next/image";

interface Props {
  children: React.ReactNode;
  src: string;
  header: string;
}

export default function ImageSection({ children, src, header }: Props) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2 text-white">{header}</h2>
      <Image
        priority
        className="mb-2"
        src={src}
        height={850}
        width={850}
        alt="travel visa questionnaire gif"
      />
      <p>{children}</p>
    </section>
  );
}
