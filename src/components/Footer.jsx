import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 lg:px-10 py-16 bg-dark-card-soft border-t border-cream/5">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-lg text-cream mb-1">
            Ajose Jesuferanmi — Grey
          </p>
          <p className="text-muted text-sm">
            Always taking things apart. Always building something new.
          </p>
        </div>

        <a
          href="https://github.com/Grey-fxtm0"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost px-6 py-3 inline-flex items-center gap-2 text-sm"
        >
          <Github className="w-4 h-4" /> github.com/Grey-fxtm0
        </a>
      </div>
    </footer>
  );
}
