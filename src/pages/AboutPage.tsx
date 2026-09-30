import React from 'react';
import { Target, Cpu, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { SiteSettings } from '../types';

export const AboutPage: React.FC<{
  settings: SiteSettings;
  onStartProject: () => void;
  onNavigate?: (path: string) => void;
}> = ({ settings, onStartProject, onNavigate }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-12 mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          The Engineering Studio
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
          ABOUT BK-DIGITAL
        </h1>
        <p className="mt-4 font-display text-xl font-bold text-[#E5C158]">
          Digital Experiences. Intelligent Systems. Automated Growth.
        </p>
        <p className="mt-4 text-base text-neutral-300 leading-relaxed max-w-3xl">
          BK-DIGITAL was established around a singular conviction: businesses do not merely need pretty websites. They require integrated digital infrastructure where websites, custom web software, operational CRM, and automated AI pipelines communicate continuously.
        </p>
      </div>

      {/* Core Principles */}
      <div className="space-y-12 mb-16">
        <div className="rounded-2xl border border-neutral-800 bg-[#090C14] p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-[#D4AF37]" />
            <h2 className="font-display text-2xl font-bold text-white">
              The Problem With Traditional Agencies
            </h2>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Most digital agencies operate like assembly lines for static brochures. They design an attractive skin, drop in generic stock imagery, hand over the keys, and leave your team to manually copy-paste inquiries into spreadsheets or answer repetitive customer queries manually.
          </p>
          <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
            BK-DIGITAL operates from an engineering standpoint. When we construct a web presence, we engineer the back-office rails alongside the front-end facade: contextual WhatsApp triggers, automated lead scoring, relational Supabase databases, and bespoke operational dashboards.
          </p>
        </div>

        {/* Founder & CEO Spotlight Card */}
        <div className="rounded-2xl border border-neutral-700/80 bg-gradient-to-r from-[#111624] via-[#0A0D15] to-[#111624] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative h-28 w-28 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shrink-0 bg-neutral-900 shadow-xl">
            <img
              src="/src/assets/images/himanshu_mishra_founder_1790475103548.jpg"
              alt="Himanshu Mishra - Founder & CEO"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex-1 text-center sm:text-left space-y-1.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
              Executive Leadership
            </span>
            <h3 className="font-display text-xl font-bold text-white">
              Himanshu Mishra
            </h3>
            <p className="text-xs font-mono text-[#C4CCD3]">
              Founder & Chief Executive Officer
            </p>
            <p className="text-xs text-neutral-300 leading-relaxed pt-1">
              Guiding systems architecture, enterprise software engineering, and digital growth strategies for BK-DIGITAL worldwide.
            </p>
          </div>
          <div className="shrink-0">
            {onNavigate && (
              <button
                onClick={() => onNavigate('/owner')}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#D4AF37] px-4 py-2 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
              >
                <span>Owner Profile</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-neutral-800 bg-[#07090F] p-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase block mb-1">01 · Method</span>
            <h3 className="font-display text-lg font-bold text-white mb-2">Zero Speculation, Verified Stacks</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We never pitch buzzwords or force AI where a basic relational query is superior. We select technologies strictly based on speed, security, and proven operational efficiency.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-[#07090F] p-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase block mb-1">02 · Delivery</span>
            <h3 className="font-display text-lg font-bold text-white mb-2">Direct Engineer Partnership</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              You collaborate directly with senior solution architects and developers who write and review your actual code. No junior account-manager bottlenecks.
            </p>
          </div>
        </div>
      </div>

      {/* Global Remote Model */}
      <div className="rounded-2xl border border-neutral-800 bg-[#090C14] p-8 sm:p-10 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="h-6 w-6 text-[#D4AF37]" />
          <h2 className="font-display text-2xl font-bold text-white">
            Available For Remote Projects Internationally
          </h2>
        </div>
        <p className="text-sm text-neutral-300 leading-relaxed mb-4">
          Based in Delhi NCR (Noida), India, we work seamlessly with progressive companies across:
        </p>
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {settings.internationalCoverage.map((country) => (
            <span key={country} className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-neutral-200">
              {country}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-neutral-400 italic">
          Transparent remote execution with time-zone overlap, live video reviews, and continuous milestone tracking.
        </p>
      </div>

      {/* Action */}
      <div className="text-center pt-8 border-t border-neutral-800">
        <h3 className="font-display text-2xl font-bold text-white mb-4">
          Ready to engineer your digital system?
        </h3>
        <button
          onClick={onStartProject}
          className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-7 py-3.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
        >
          <span>Initiate Project Consultation</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
