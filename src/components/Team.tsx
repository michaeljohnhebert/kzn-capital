const team = [
  {
    initials: 'JK',
    name: 'Jonathan Katz',
    title: 'Founder & Managing Partner',
    bio: '25 years in private markets. Previously led investments at Goldman Sachs and co-founded two technology companies with successful exits.',
  },
  {
    initials: 'MZ',
    name: 'Maya Zhou',
    title: 'Partner, Venture Capital',
    bio: 'Former operator turned investor. Built and sold two SaaS businesses before joining KZN in 2015. Deep expertise in enterprise software and AI.',
  },
  {
    initials: 'AN',
    name: 'Amir Nkosi',
    title: 'Partner, Growth Equity',
    bio: 'Expert in healthcare and B2B services. Led 20+ growth equity transactions across North America, Europe, and Sub-Saharan Africa.',
  },
  {
    initials: 'SL',
    name: 'Sophie Lindqvist',
    title: 'Managing Director, Operations',
    bio: 'Leads portfolio operations and LP relations. Previously at McKinsey & Company and Sequoia Capital\'s portfolio support team.',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#111111] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-5">Our Team</p>
          <h2 className="text-white font-extralight text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1]">
            The people behind<br className="hidden md:block" /> the capital.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-[#1A1A1A] mb-6 relative overflow-hidden">
                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/10 text-6xl font-extralight tracking-widest">
                    {member.initials}
                  </span>
                </div>
                {/* Hover gold underline */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              <h3 className="text-white font-medium text-base mb-1">{member.name}</h3>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-4">{member.title}</p>
              <p className="text-white/35 text-sm leading-[1.7]">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
