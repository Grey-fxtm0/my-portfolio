import { ArrowRight, Github } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 px-6 lg:px-10">
      {/* Martian crater decoration — nods to the "Martian Green" palette */}
      <div className="crater w-72 h-72 -top-20 -right-10" aria-hidden="true" />
      <div className="crater w-40 h-40 top-40 left-[-40px]" aria-hidden="true" />
      <div className="crater w-24 h-24 bottom-0 right-1/3" aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto text-center">
        <p className="font-display text-martian font-semibold tracking-wide text-sm sm:text-base mb-5">
          Hey, I'm Grey
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-cream mb-6">
          Ajose Jesuferanmi
        </h1>
        <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          I've always taken things apart to see how they work. As a kid it was
          toys and remotes, now it's web applications. Same curiosity, more
          useful outcome.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn-primary px-7 py-3.5 inline-flex items-center gap-2">
            View my projects <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Grey-fxtm0"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost px-7 py-3.5 inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
