const strategies = [
  {
    number: '01',
    title: 'Venture Capital',
    description:
      'Seed to Series B investments in technology-first companies disrupting established industries. We focus on founders with an unfair insight and the resilience to see it through.',
    areas: ['Enterprise Software', 'Fintech & Insurtech', 'AI & Machine Learning', 'Climate Technology'],
  },
  {
    number: '02',
    title: 'Growth Equity',
    description:
      'Minority and majority positions in proven businesses at an inflection point. We accelerate growth through capital, strategic introductions, and operational partnership.',
    areas: ['Healthcare Services', 'B2B Marketplaces', 'Digital Infrastructure', 'Consumer Brands'],
  },
  {
    number: '03',
    title: 'Private Credit',
    description:
      'Bespoke debt solutions for growing companies that need flexible capital without dilution. Structured to align with each business\'s unique trajectory and cash dynamics.',
    areas: ['Revenue-Based Financing', 'Bridge & Mezzanine', 'Convertible Notes', 'Asset-Backed Lending'],
  },
];

export default function Strategy() {
  return (
    <section id="strategy" className="bg-[#F7F6F2] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-5">Investment Strategy</p>
          <h2 className="text-[#0D0D0D] font-extralight text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] max-w-xl">
            How we deploy capital.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#0D0D0D]/8">
          {strategies.map((s) => (
            <div key={s.title} className="bg-[#F7F6F2] p-10 lg:p-12 flex flex-col group hover:bg-[#EDECE6] transition-colors duration-300">
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-8">{s.number}</span>
              <h3 className="text-[#0D0D0D] text-2xl font-light mb-5">{s.title}</h3>
              <p className="text-[#0D0D0D]/55 text-sm leading-[1.8] mb-10 flex-1">{s.description}</p>
              <ul className="space-y-2 border-t border-[#0D0D0D]/8 pt-6">
                {s.areas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-[#0D0D0D]/40 text-xs tracking-wide">
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
