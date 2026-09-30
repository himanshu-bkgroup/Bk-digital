import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/initialData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
            Execution Methodology
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            THE 8-STAGE DEVELOPMENT ROADMAP
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            From preliminary business discovery to post-launch AI automation, our disciplined engineering pipeline guarantees predictable, high-performance outcomes.
          </p>
        </div>

        {/* Timeline Grid Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const isPast = idx < activeStepIndex;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative flex flex-col text-left p-3.5 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? 'border-[#D4AF37] bg-[#14120A] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                    : isPast
                    ? 'border-neutral-700/80 bg-[#090C12] text-neutral-300'
                    : 'border-neutral-800/80 bg-[#07080D] text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#D4AF37]' : 'text-neutral-500'}`}>
                    {step.number}
                  </span>
                  {isPast && <CheckCircle2 className="h-3 w-3 text-[#3DD68C]" />}
                </div>
                <span className={`font-display text-xs font-bold tracking-tight truncate ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                  {step.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="rounded-2xl border border-neutral-700/80 bg-gradient-to-br from-[#0F131E] via-[#090C14] to-[#05060A] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#19150B] font-mono text-xs font-bold text-[#E5C158]">
                  {activeStep.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37]">
                  Phase {activeStep.number} — {activeStep.name}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                {activeStep.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-neutral-400">
                <span className="rounded bg-neutral-900 px-3 py-1.5 border border-neutral-800">
                  Strict Technical Milestone Review
                </span>
                <span className="rounded bg-neutral-900 px-3 py-1.5 border border-neutral-800">
                  No Fabricated Assumptions
                </span>
                <span className="rounded bg-neutral-900 px-3 py-1.5 border border-neutral-800">
                  Direct Engineer Access
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center gap-4 border-t lg:border-t-0 lg:border-l border-neutral-800/80 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center sm:text-right">
                <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                  Ready to execute?
                </span>
                <span className="text-sm font-bold text-white">
                  Sprint with BK-DIGITAL
                </span>
              </div>

              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
              >
                <span>Initiate Stage 01</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
