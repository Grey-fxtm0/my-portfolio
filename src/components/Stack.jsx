const STACK = [
  "React",
  "Vite",
  "JavaScript",
  "HTML5",
  "Tailwind CSS",
  "Bootstrap",
  "SQL",
  "NoSQL",
  "Supabase",
];

export default function Stack() {
  return (
    <section id="stack" className="px-6 lg:px-10 py-20 bg-dark-card-soft">
      <div className="max-w-[900px] mx-auto">
        <p className="font-display text-martian font-semibold text-sm mb-3">
          What I've learned
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-cream mb-6">
          Built for the web, learning to go further
        </h2>
        <p className="text-muted text-lg leading-relaxed mb-10 max-w-2xl">
          I learned to build web applications at APTECH with React, CSS and HTML
          through real projects, not just tutorials. Right now I'm learning
          Java to round out my skills beyond the front end.
        </p>

        <div className="flex flex-wrap gap-3">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="pill px-4 py-2 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
          <span className="pill px-4 py-2 text-sm font-medium border-dashed">
            Java <span className="text-martian">— learning</span>
          </span>
        </div>
      </div>
    </section>
  );
}
