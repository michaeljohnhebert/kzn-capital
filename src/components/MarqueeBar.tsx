const items = [
  'Venture Capital',
  'Growth Equity',
  'Private Credit',
  'Strategic Partnerships',
  'Value Creation',
  'Long-Term Thinking',
];

export default function MarqueeBar() {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-[#C9A84C] py-4 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="text-black text-[11px] tracking-[0.3em] uppercase font-medium flex-shrink-0 mx-10">
            {item}
            <span className="ml-10 mr-0 opacity-40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
