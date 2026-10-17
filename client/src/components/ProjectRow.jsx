import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Ek project ki row: click karne par details khulti hain
export default function ProjectRow({ project }) {
  const [open, setOpen] = useState(false);
  const panelId = `project-${project.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <li className="border-t-2 border-ink last:border-b-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span
          className={`font-display text-3xl font-semibold tracking-tight transition-all duration-300 md:text-5xl ${
            open ? "translate-x-4 text-violet" : "group-hover:translate-x-4"
          }`}
        >
          {project.title}
        </span>
        <span className="flex items-center gap-5">
          <span className="hidden text-lg font-medium text-ink/60 sm:block">{project.year}</span>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-3xl leading-none text-mist"
          >
            +
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 pb-8 md:grid-cols-[1fr_auto] md:items-end md:pl-4">
              <div>
                <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-mint px-3 py-1 text-sm font-semibold"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ink px-5 py-2.5 font-semibold text-mist transition-colors hover:bg-violet"
                >
                  Live demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-ink px-5 py-2.5 font-semibold transition-colors hover:bg-sun"
                >
                  Source code
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
