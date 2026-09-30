import React, { useState } from 'react';
import { TECH_STACK } from '../../data/initialData';

export const TechConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'AI & Data', 'Automation', 'Payments'];

  const filtered = TECH_STACK.filter(
    (t) => selectedCategory === 'All' || t.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#040507] border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
            Architectural Foundation
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            THE TECHNOLOGY CONSTELLATION
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            We operate exclusively with modern, battle-tested technologies that deliver sub-second performance, bulletproof security, and effortless horizontal scaling.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? 'border border-[#D4AF37] bg-[#1C180C] text-[#FFF2C2] shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                  : 'border border-neutral-800 bg-[#0A0D14] text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Floating Constellation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {filtered.map((item) => {
            const isHovered = hoveredTech === item.name;

            return (
              <div
                key={item.name}
                onMouseEnter={() => setHoveredTech(item.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`relative flex flex-col justify-between p-4 rounded-xl border transition-all duration-300 ${
                  isHovered
                    ? 'border-[#D4AF37] bg-[#121620] shadow-[0_0_20px_rgba(212,175,55,0.25)] scale-105 z-10'
                    : 'border-neutral-800/80 bg-[#07090F] hover:border-neutral-700'
                }`}
              >
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">
                    {item.name}
                  </h4>
                </div>

                <p className="mt-3 text-[11px] text-neutral-400 leading-tight">
                  {item.note}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-neutral-400">
          Strict Engineering Discipline: We only deploy stacks where our team holds verified, production-level depth.
        </div>
      </div>
    </section>
  );
};
