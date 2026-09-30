import React, { useState } from 'react';
import { Users, Layout, FileSpreadsheet, MessageSquare, Database, Cpu, PhoneCall, Calendar, CreditCard, Sparkles, ArrowRight } from 'lucide-react';

const PIPELINE = [
  { step: '01', label: 'Visitor', icon: Users, desc: 'Targeted organic & referral traffic lands on optimized page' },
  { step: '02', label: 'Landing Page', icon: Layout, desc: 'High-contrast conversion layout with clear value proposition' },
  { step: '03', label: 'Lead Form', icon: FileSpreadsheet, desc: 'Frictionless capture with instant field validation' },
  { step: '04', label: 'WhatsApp', icon: MessageSquare, desc: 'Pre-filled contextual chat opens instantly on mobile/desktop' },
  { step: '05', label: 'CRM', icon: Database, desc: 'Customer record automatically cataloged into pipeline' },
  { step: '06', label: 'AI Qualification', icon: Cpu, desc: 'Automated requirement analysis & urgent priority scoring' },
  { step: '07', label: 'Sales Follow-up', icon: PhoneCall, desc: 'Assigned engineering specialist reaches out within minutes' },
  { step: '08', label: 'Meeting', icon: Calendar, desc: 'Calendar synchronized discovery & milestone briefing' },
  { step: '09', label: 'Payment', icon: CreditCard, desc: 'Secure payment gateway processing and invoice issuance' },
  { step: '10', label: 'Onboarding', icon: Sparkles, desc: 'Client portal handover and live operational tracking' },
];

export const SalesPipeline: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
            Conversion Engine
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            TURN YOUR WEBSITE INTO A SALES SYSTEM.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            A static brochure loses 95% of its potential. We engineer an uninterrupted pipeline that guides every anonymous click toward closed business.
          </p>
        </div>

        {/* Animated Horizontal Pipeline Track */}
        <div className="rounded-2xl border border-neutral-700/80 bg-[#080A10] p-6 sm:p-10 shadow-xl overflow-x-auto">
          <div className="min-w-[850px] flex items-center justify-between relative py-6">
            {/* Background connecting track */}
            <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-[2px] bg-neutral-800 pointer-events-none" />

            {PIPELINE.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                      isHovered
                        ? 'border-[#D4AF37] bg-[#1A160A] text-[#D4AF37] scale-110 shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                        : 'border-neutral-800 bg-[#0E121C] text-neutral-400 group-hover:border-neutral-600 group-hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="mt-2.5 font-mono text-[10px] text-neutral-400 font-semibold">
                    {item.step}
                  </span>
                  <span className={`text-xs font-display font-bold whitespace-nowrap mt-0.5 ${isHovered ? 'text-white' : 'text-neutral-300'}`}>
                    {item.label}
                  </span>

                  {/* Tooltip detail card */}
                  {isHovered && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 rounded-lg border border-[#D4AF37]/40 bg-[#121620] px-3 py-2 text-[11px] text-neutral-200 shadow-xl w-48 text-center pointer-events-none z-30">
                      {item.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 border-t border-neutral-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Hover over each pipeline stage to explore how conversion friction is eliminated.
            </div>

            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
            >
              <span>Engineer My Sales Pipeline</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
