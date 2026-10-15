'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'Our Story', href: '#our-story' },
  { label: 'Strategy', href: '#strategy' },
  { label: 'Team', href: '#team' },
  { label: 'Portfolio', href: '#portfolio' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="text-white font-semibold text-base tracking-[0.3em] uppercase flex-shrink-0">
          KZN Capital
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[#C9A84C] border border-[#C9A84C]/60 px-5 py-2 text-xs tracking-[0.2em] uppercase hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 border-t border-white/5' : 'max-h-0'
        } bg-[#0D0D0D]`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {[...links, { label: 'Contact', href: '#contact' }].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
