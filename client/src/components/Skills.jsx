import { skills } from "../data/portfolio";
import Marquee from "./Marquee";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="skills-title">Skills</SectionHeading>
      </div>
      <div className="mt-12 space-y-3">
        <Marquee items={skills.rowOne} />
        <Marquee items={skills.rowTwo} reverse filled />
      </div>
    </section>
  );
}
