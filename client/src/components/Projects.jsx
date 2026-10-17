import { projects } from "../data/portfolio";
import ProjectRow from "./ProjectRow";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading id="work-title">Selected work</SectionHeading>
      <p className="mt-4 text-lg text-ink/70">Click a project to open the details.</p>
      <ul className="mt-12">
        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
}
