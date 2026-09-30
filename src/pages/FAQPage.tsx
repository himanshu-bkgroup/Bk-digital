import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/initialData';

export const FAQPage: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          Architectural Clarity
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="mt-4 text-base text-neutral-300 leading-relaxed">
          Clear, honest answers regarding how BK-DIGITAL approaches development, timeline planning, pricing, and system integrations.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className="rounded-xl border border-neutral-800 bg-[#090C14] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-display text-base font-bold text-white pr-4">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-[#D4AF37] shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neutral-500 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-16 rounded-2xl border border-neutral-800 bg-[#07090F] p-8 text-center">
        <h3 className="font-display text-xl font-bold text-white mb-2">
          Have a question not addressed here?
        </h3>
        <p className="text-xs text-neutral-400 mb-6">
          Our engineering team can address specific technical architectures, security parameters, and timelines.
        </p>
        <button
          onClick={onStartProject}
          className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
        >
          <span>Ask An Engineer</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
