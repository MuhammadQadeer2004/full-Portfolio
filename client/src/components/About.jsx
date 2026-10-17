import { about } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ink text-mist">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading id="about-title">About me</SectionHeading>
          <div className="mt-10 space-y-6 text-xl leading-relaxed text-mist/85">
            {about.paragraphs.map((p) => (
              <p key={p} className="max-w-xl">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="self-end rounded-3xl bg-violet p-8">
          <h3 className="font-display text-2xl font-semibold">Right now</h3>
          <ul className="mt-5 space-y-4">
            {about.currently.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-snug">
                <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sun" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
