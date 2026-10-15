const companies = [
  { name: 'Meridian Health', stage: 'Series B', sector: 'Healthcare', year: '2021' },
  { name: 'Archon AI', stage: 'Seed', sector: 'Artificial Intelligence', year: '2022' },
  { name: 'FinFlow', stage: 'Growth', sector: 'Fintech', year: '2019' },
  { name: 'TerraForm', stage: 'Series A', sector: 'Climate Tech', year: '2020' },
  { name: 'CloudBridge', stage: 'Series C', sector: 'Infrastructure', year: '2018' },
  { name: 'Nexus Commerce', stage: 'Growth', sector: 'B2B SaaS', year: '2021' },
  { name: 'Luminary Labs', stage: 'Series A', sector: 'EdTech', year: '2023' },
  { name: 'Vanta Credit', stage: 'Seed', sector: 'Fintech', year: '2023' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#F7F6F2] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-5">Portfolio</p>
            <h2 className="text-[#0D0D0D] font-extralight text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1]">
              Companies we believe in.
            </h2>
          </div>
          <p className="text-[#0D0D0D]/45 max-w-xs text-sm leading-[1.8]">
            A selection of the businesses we've had the privilege of partnering with across our three strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0D0D0D]/8">
          {companies.map((c) => (
            <div
              key={c.name}
              className="bg-[#F7F6F2] p-8 group hover:bg-[#0D0D0D] transition-colors duration-300 cursor-default"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[#0D0D0D]/25 group-hover:text-white/20 text-xs tracking-widest transition-colors">
                  {c.year}
                </span>
                <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">{c.stage}</span>
              </div>
              <h3 className="text-[#0D0D0D] group-hover:text-white text-lg font-medium mb-2 transition-colors">
                {c.name}
              </h3>
              <p className="text-[#0D0D0D]/35 group-hover:text-white/35 text-xs tracking-[0.2em] uppercase transition-colors">
                {c.sector}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
