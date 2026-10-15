const stats = [
  { value: '$2.4B+', label: 'Capital Deployed' },
  { value: '48', label: 'Portfolio Companies' },
  { value: '14', label: 'Countries' },
  { value: '18 Yrs', label: 'Track Record' },
];

export default function About() {
  return (
    <section id="our-story" className="bg-[#0D0D0D] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Two-column heading + body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-24">
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-5">Our Story</p>
            <h2 className="text-white font-extralight text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight">
              Conviction-driven capital for the long term.
            </h2>
          </div>

          <div className="text-white/50 space-y-5 text-base leading-[1.8] font-light lg:pt-16">
            <p>
              KZN Capital was founded on a simple premise: the best returns come from backing the right people at the right moment in history. We are patient, selective, and deeply committed to every company we partner with.
            </p>
            <p>
              As a private investment firm, we operate with the agility of a founder and the discipline of an institution. We bring strategic capital, operational expertise, and a network built across decades of industry experience.
            </p>
            <p>
              We don't chase trends. We identify structural shifts and build lasting positions alongside the entrepreneurs pioneering them.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-white text-4xl md:text-5xl font-extralight tracking-tight mb-2">{s.value}</p>
              <p className="text-white/30 text-xs tracking-[0.3em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
