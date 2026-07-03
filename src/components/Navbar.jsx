export default function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-dark/85 backdrop-blur border-b border-cream/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-full bg-martian flex items-center justify-center font-display font-bold text-dark text-lg">
            G
          </span>
          <span className="font-display font-semibold text-lg text-cream">Grey</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#projects" className="btn-primary px-5 py-2.5 text-sm hidden sm:inline-flex">
          See my work
        </a>
      </div>
    </header>
  );
}
