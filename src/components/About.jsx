export default function About() {
  return (
    <section id="about" className="px-6 lg:px-10 py-20">
      <div className="max-w-[900px] mx-auto">
        <p className="font-display text-martian font-semibold text-sm mb-3">About</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-cream mb-6">
          The kid who broke things to understand them
        </h2>
        <p className="text-muted text-lg leading-relaxed mb-5">
          Growing up, I was the kid who couldn't leave anything alone. Toys,
          remotes, whatever I could get my hands on I'd take it apart just
          to see what was inside and how it worked. It usually didn't go back
          together the same way, but I always learned something.
        </p>
        <p className="text-muted text-lg leading-relaxed">
          That instinct never really went away, it just found a more useful
          outlet. It's only natural that I became a developer: taking
          something apart to understand it, then building my own version, is
          most of what I do now, just with code instead of screwdrivers.
        </p>
      </div>
    </section>
  );
}
