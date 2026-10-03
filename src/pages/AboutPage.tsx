import React from 'react';
import { Target, Cpu, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { SiteSettings } from '../types';
import defaultFounderPhoto from '../assets/images/himanshu_founder_ceo_1790965828306.jpg';

export const AboutPage: React.FC<{
  settings: SiteSettings;
  onStartProject: () => void;
  onNavigate?: (path: string) => void;
}> = ({ settings, onStartProject, onNavigate }) => {
  const founderAvatar =
    localStorage.getItem('bk_founder_custom_avatar') ||
    defaultFounderPhoto ||
    '/founder.jpg';

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-12 mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          The Engineering Studio
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
          ABOUT BHAVKAN DIGITAL (BK-DIGITAL)
        </h1>
        <p className="mt-4 font-display text-xl font-bold text-[#E5C158]">
          Digital Experiences. Intelligent Systems. Automated Growth.
        </p>
        <p className="mt-4 text-base text-neutral-300 leading-relaxed max-w-3xl">
          Bhavkan Digital (BK-DIGITAL) was established around a singular conviction: businesses do not merely need pretty websites. They require integrated digital infrastructure where websites, custom web software, operational CRM, and automated AI pipelines communicate continuously.
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
            Bhavkan Digital (BK-DIGITAL) operates from an engineering standpoint. When we construct a web presence, we engineer the back-office rails alongside the front-end facade: contextual WhatsApp triggers, automated lead scoring, relational PostgreSQL databases, and bespoke operational dashboards.
          </p>
        </div>

        {/* Founder & CEO Spotlight Card */}
        <div className="rounded-2xl border border-neutral-700/80 bg-gradient-to-r from-[#111624] via-[#0A0D15] to-[#111624] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative h-28 w-28 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shrink-0 bg-neutral-900 shadow-xl">
            <img
              src={founderAvatar}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/founder.jpg';
              }}
              alt="Himanshu Mishra - Founder & CEO, Bhavkan Digital (BK-DIGITAL)"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-top"
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
              Founder &amp; Chief Executive Officer
            </p>
            <p className="text-xs text-neutral-300 leading-relaxed pt-1">
              Guiding systems architecture, enterprise software engineering, and digital growth strategies for Bhavkan Digital (BK-DIGITAL) worldwide.
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
              At Bhavkan Digital (BK-DIGITAL), we never pitch buzzwords or force AI where a basic relational query is superior. We select technologies strictly based on speed, security, and proven operational efficiency.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-[#07090F] p-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase block mb-1">02 · Delivery</span>
            <h3 className="font-display text-lg font-bold text-white mb-2">Direct Engineer Partnership</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              At Bhavkan Digital (BK-DIGITAL), you collaborate directly with senior solution architects and developers who write and review your actual code. No junior account-manager bottlenecks.
            </p>
          </div>
        </div>
      </div>

      {/* Global Reach */}
      <div className="rounded-2xl border border-neutral-800 bg-[#090C14] p-8 sm:p-10 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="h-6 w-6 text-[#D4AF37]" />
          <h2 className="font-display text-2xl font-bold text-white">
            Global Enterprise Capabilities
          </h2>
        </div>
        <p className="text-sm text-neutral-300 leading-relaxed">
          While headquartered in India (Noida / Delhi NCR), Bhavkan Digital (BK-DIGITAL) operates on a modern remote delivery model engineered specifically for international engagements across the USA, UK, Canada, Australia, UAE, and India.
        </p>
        <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
          We maintain transparent asynchronous communications, regular sprint demonstrations, code repositories under client ownership, and round-the-clock operational support across international time zones.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-[#141A28] via-[#0C101B] to-[#141A28] border border-neutral-700/80 rounded-2xl p-10">
        <h2 className="font-display text-2xl sm:text-3xl font-black text-white">
          Ready to Work with Bhavkan Digital (BK-DIGITAL)?
        </h2>
        <p className="mt-3 text-sm text-neutral-300 max-w-xl mx-auto">
          Start with a technical assessment of your requirements or calculate project timelines with our instant estimator.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          {onNavigate && (
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-3 text-xs font-semibold text-white hover:border-neutral-500 transition-colors"
            >
              <span>Contact Executive Team</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
