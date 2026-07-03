import ProjectCard from "./ProjectCard.jsx";
import { PROJECTS } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-10 py-20">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-display text-martian font-semibold text-sm mb-3">
          Projects
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-cream mb-3">
          Things I've built
        </h2>
        <p className="text-muted text-lg leading-relaxed mb-12 max-w-2xl">
          Seven shipped projects, each one me picking something apart to
          understand it, then building my own version.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
