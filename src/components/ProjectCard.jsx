import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card p-6 sm:p-7 flex flex-col">
      <h3 className="font-display font-semibold text-xl text-cream mb-2.5">
        {project.name}
      </h3>
      <p className="text-muted text-[15px] leading-relaxed mb-6 flex-1">
        {project.description}
      </p>
      <div className="flex items-center gap-5 text-sm font-medium">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="card-link inline-flex items-center gap-1.5"
        >
          Live site <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="card-link inline-flex items-center gap-1.5"
        >
          Repo <Github className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
