import React from 'react';
import { ArrowUpRight, MessageSquare, PhoneCall, ArrowRight } from 'lucide-react';
import { SiteSettings } from '../../types';
import { openWhatsApp } from '../../lib/whatsapp';

interface FinalCTASectionProps {
  settings: SiteSettings;
  onStartProject: () => void;
  onBookConsultation: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  settings,
  onStartProject,
  onBookConsultation,
}) => {
  const handleWhatsApp = () => {
    const text = 'Hello BK-DIGITAL, I have a digital idea and would like to build it with your team.';
    openWhatsApp(settings.whatsappNumber, text);
  };

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050608] via-[#090C14] to-[#040507] border-t border-neutral-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10 text-center">
        {/* System capability chain */}
        <div className="mb-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-neutral-800 bg-[#06080E]/90 px-4 py-2 text-[10px] sm:text-xs font-mono text-neutral-400">
          <span>WEBSITE</span>
          <span>→</span>
          <span>WEB APP</span>
          <span>→</span>
          <span>CRM</span>
          <span>→</span>
          <span>AI</span>
          <span>→</span>
          <span>AUTOMATION</span>
          <span>→</span>
          <span>DATABASE</span>
          <span>→</span>
          <span>DASHBOARD</span>
          <span>→</span>
          <span className="text-[#D4AF37] font-bold">BUSINESS SYSTEM</span>
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-mono block mb-2">
          HAVE A DIGITAL IDEA?
        </span>

        <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          LET'S BUILD IT.
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 leading-relaxed">
          We don't just design websites. We engineer digital systems that automate manual tasks, capture qualified customer leads, and scale your operations digitally.
        </p>

        {/* 3 Call-To-Action Options */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-8 py-3.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-3.5 text-xs font-semibold text-white hover:border-[#D4AF37] hover:text-[#FFF0BD] transition-all"
          >
            <PhoneCall className="h-4 w-4 text-[#D4AF37]" />
            <span>Talk to BK-DIGITAL</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#0F1E15] px-6 py-3.5 text-xs font-semibold text-[#3DD68C] hover:border-[#25D366] hover:bg-[#152B1E] transition-all"
          >
            <MessageSquare className="h-4 w-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};
