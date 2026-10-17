import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const ref = useRef(null);
  // Scroll ke saath vertical line neeche ki taraf "draw" hoti hai
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionHeading id="experience-title">Experience</SectionHeading>

      <div ref={ref} className="relative mt-14 pl-10 md:pl-16">
        <div aria-hidden="true" className="absolute bottom-0 left-[11px] top-0 w-0.5 bg-ink/15 md:left-[19px]" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: scrollYProgress }}
          className="absolute bottom-0 left-[11px] top-0 w-0.5 origin-top bg-violet md:left-[19px]"
        />

        <ol className="space-y-14">
          {experience.map((item) => (
            <li key={item.role + item.period} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[39px] top-2 h-6 w-6 rounded-full border-4 border-mist bg-violet md:-left-[63px] md:h-7 md:w-7"
              />
              <p className="text-base font-semibold text-violet">{item.period}</p>
              <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight">
                {item.role}
              </h3>
              <p className="text-lg text-ink/70">{item.org}</p>
              <ul className="mt-4 max-w-2xl space-y-2 text-lg leading-relaxed text-ink/85">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
