const navLinks = ['Our Story', 'Strategy', 'Team', 'Portfolio', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-white font-semibold text-sm tracking-[0.3em] uppercase flex-shrink-0">
          KZN Capital
        </p>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(' ', '-')}`}
              className="text-white/25 hover:text-white/60 text-[10px] tracking-[0.25em] uppercase transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <p className="text-white/15 text-[10px] tracking-wider flex-shrink-0">
          © 2025 KZN Capital
        </p>
      </div>
    </footer>
  );
}
