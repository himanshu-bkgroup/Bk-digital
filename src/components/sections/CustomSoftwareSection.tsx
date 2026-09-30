import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface CustomSoftwareProps {
  onStartProject: () => void;
}

const USE_CASES = [
  { title: 'Gym & Fitness Management', desc: 'Member subscriptions, trainer routine assignments, automated expiry notifications.' },
  { title: 'Healthcare & Clinic Triage', desc: 'Doctor outpatient scheduling, emergency WhatsApp dispatch, diagnostic package capture.' },
  { title: 'Proprietary Sales CRM', desc: 'Bespoke deal pipelines matching your exact sales stages, call logging, and follow-ups.' },
  { title: 'Warehouse & Inventory Control', desc: 'Multi-location stock level tracking, barcode generation, low-inventory alerts.' },
  { title: 'Staff & Contractor Portals', desc: 'Time logging, task assignment, role-based document access, and internal communication.' },
  { title: 'B2B Wholesale Ordering', desc: 'Bulk quotation builder, tier-based pricing, invoice ledger, and payment tracking.' },
];

export const CustomSoftwareSection: React.FC<CustomSoftwareProps> = ({ onStartProject }) => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
              Bespoke Software Architecture
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              IF SOFTWARE DOESN'T EXIST FOR YOUR BUSINESS — WE CAN BUILD IT.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Most businesses suffer from using fragmented off-the-shelf software tools that force operations into rigid, awkward patterns. BK-DIGITAL constructs custom software engineered strictly around your actual proprietary business workflows.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#1C180C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-xs sm:text-sm text-neutral-200">
                  Zero monthly subscription seat fees per user — you own your core intellectual property.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#1C180C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-xs sm:text-sm text-neutral-200">
                  Tailored database schemas, custom reports, and automated WhatsApp/email pipelines.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#1C180C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-xs sm:text-sm text-neutral-200">
                  Built to scale with your organization from 10 users to 100,000+ operations.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <span>Discuss Custom Software</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Concrete Use Case Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-800 bg-[#090C13] p-5 hover:border-neutral-700 transition-colors"
              >
                <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider block mb-1">
                  Architecture 0{i + 1}
                </span>
                <h4 className="font-display text-sm font-bold text-white">
                  {uc.title}
                </h4>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
