export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0D0D0D] overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-[0.5em] uppercase mb-8 animate-fade-in">
          Private Investment Firm
        </p>

        <h1 className="text-white font-extralight text-[clamp(4rem,12vw,9rem)] leading-[0.9] tracking-tight mb-10 animate-fade-in-up">
          KZN<br />Capital
        </h1>

        <p className="text-white/40 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-12 animate-fade-in-up">
          We partner with exceptional founders to build transformative businesses
          that redefine industries and create lasting value.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <a
            href="#our-story"
            className="bg-[#C9A84C] text-black px-8 py-4 text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#B8963E] transition-colors duration-200"
          >
            Our Story
          </a>
          <a
            href="#portfolio"
            className="border border-white/20 text-white/80 px-8 py-4 text-xs tracking-[0.3em] uppercase hover:border-white/50 hover:text-white transition-all duration-200"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
