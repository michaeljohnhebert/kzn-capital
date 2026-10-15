'use client';

import { useState } from 'react';

type Field = { key: 'name' | 'email' | 'subject'; label: string; type: string };

const fields: Field[] = [
  { key: 'name', label: 'Full Name', type: 'text' },
  { key: 'email', label: 'Email Address', type: 'email' },
  { key: 'subject', label: 'Subject', type: 'text' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0D0D0D] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left */}
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-5">Get in Touch</p>
            <h2 className="text-white font-extralight text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-10">
              Let's start a conversation.
            </h2>
            <p className="text-white/45 text-base leading-[1.8] mb-14">
              Whether you're a founder seeking capital, an LP interested in our funds, or a potential partner — we want to hear from you.
            </p>

            <div className="space-y-8 text-sm">
              <div>
                <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase mb-2">General Inquiries</p>
                <a href="mailto:info@kzncapital.com" className="text-white hover:text-[#C9A84C] transition-colors">
                  info@kzncapital.com
                </a>
              </div>
              <div>
                <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase mb-2">New York</p>
                <p className="text-white/60 leading-relaxed">425 Madison Avenue, 14th Floor<br />New York, NY 10017</p>
              </div>
              <div>
                <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase mb-2">London</p>
                <p className="text-white/60 leading-relaxed">30 St Mary Axe, 8th Floor<br />London, EC3A 8BF</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="border border-[#C9A84C]/20 p-14 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 border border-[#C9A84C]/50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-light mb-3">Message Received</h3>
                <p className="text-white/40 text-sm">We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {fields.map((f) => (
                  <div key={f.key}>
                    <label className="block text-white/25 text-[10px] tracking-[0.35em] uppercase mb-3">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-white/10"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-white/25 text-[10px] tracking-[0.35em] uppercase mb-3">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A84C] text-black py-4 text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#B8963E] transition-colors duration-200 mt-4"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
