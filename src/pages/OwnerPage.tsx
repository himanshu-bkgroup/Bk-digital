import React from 'react';
import {
  ShieldCheck, Mail, MessageSquare, ArrowRight, Code, Cpu,
  Layers, Terminal, CheckCircle2, Award, ExternalLink, Calendar,
  Sparkles, Globe
} from 'lucide-react';
import { SiteSettings } from '../types';
import { openWhatsApp } from '../lib/whatsapp';
import defaultFounderPhoto from '../assets/images/himanshu_founder_ceo_1790965828306.jpg';

interface OwnerPageProps {
  settings: SiteSettings;
  onNavigate: (path: string) => void;
}

export const OwnerPage: React.FC<OwnerPageProps> = ({ settings, onNavigate }) => {
  const founderEmail = 'himanshu.bkgroup@gmail.com';

  const founderAvatar =
    localStorage.getItem('bk_founder_custom_avatar') ||
    defaultFounderPhoto ||
    '/founder.jpg';

  const handleFounderWhatsApp = () => {
    const text = 'Hello Himanshu, I would like to schedule a direct architectural discussion regarding a project with Bhavkan Digital (BK-DIGITAL).';
    openWhatsApp(settings.whatsappNumber, text);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb / Kicker */}
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
        <span>Leadership</span>
        <span>/</span>
        <span>Executive Office</span>
      </div>

      {/* Hero Section: Executive Dossier */}
      <div className="rounded-3xl border border-neutral-700/80 bg-gradient-to-br from-[#0F1420] via-[#090C14] to-[#04060A] p-6 sm:p-12 shadow-2xl relative overflow-hidden mb-16">
        {/* Subtle background ambient glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left: Founder Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/40 via-neutral-700/30 to-[#D4AF37]/20 blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-2xl border border-neutral-700/90 bg-[#07090F] overflow-hidden shadow-2xl">
                {/* Photo Header Plate */}
                <div className="flex items-center justify-between border-b border-neutral-800 bg-[#101420] px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#3DD68C]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                      Founder &amp; Chief Executive Officer
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D4AF37]">BHAVKAN DIGITAL</span>
                </div>

                {/* Portrait Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 group/img">
                  <img
                    src={founderAvatar}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/founder.jpg';
                    }}
                    alt="Himanshu Mishra - Founder & CEO, Bhavkan Digital (BK-DIGITAL)"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />

                  {/* Badge on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl font-black text-white tracking-wide">
                        Himanshu Mishra
                      </h3>
                      <p className="text-xs font-mono text-[#D4AF37]">
                        Founder &amp; CEO
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4AF37]/50 bg-[#16130B]/90 text-[#D4AF37] backdrop-blur-md shadow-lg">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Card Sub-bar */}
                <div className="p-4 bg-[#0A0D16] border-t border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <span className="text-neutral-500 font-mono text-[10px] uppercase">Corporate Lead:</span>
                    <span className="font-medium text-white">Full-Stack Systems Architecture</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <span className="text-neutral-500 font-mono text-[10px] uppercase">Direct Email:</span>
                    <a href={`mailto:${founderEmail}`} className="text-[#D4AF37] hover:underline font-mono text-[11px]">
                      {founderEmail}
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <span className="text-neutral-500 font-mono text-[10px] uppercase">Direct WhatsApp:</span>
                    <button onClick={handleFounderWhatsApp} className="text-[#25D366] hover:underline font-mono text-[11px] font-semibold">
                      +91 72178 76220
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision, Biography & Executive Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block rounded-md border border-[#D4AF37]/30 bg-[#1A160A] px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#F3E5AB] font-semibold mb-3">
                Executive Profile
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Himanshu Mishra
              </h1>
              <p className="mt-1 font-display text-lg sm:text-xl font-bold text-metallic-gold">
                Founder &amp; Chief Executive Officer — Bhavkan Digital (BK-DIGITAL)
              </p>
            </div>

            {/* Executive Quote */}
            <div className="border-l-2 border-[#D4AF37] pl-4 sm:pl-6 py-1">
              <blockquote className="text-sm sm:text-base text-neutral-200 italic font-medium leading-relaxed">
                “Most businesses suffer from a fundamental disconnect: creative agencies deliver cosmetic websites that sit passive, while traditional IT houses build rigid software that nobody wants to use. At Bhavkan Digital (BK-DIGITAL), we build cohesive digital systems — where the user interface, database, WhatsApp pipeline, and AI intelligence operate as one synchronized engine.”
              </blockquote>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              As the Founder and CEO of Bhavkan Digital (BK-DIGITAL), <strong className="text-white">Himanshu Mishra</strong> spearheads the company’s engineering direction, product architecture, and enterprise client engagements across India, the USA, the UK, Canada, Australia, and the UAE.
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed">
              With a deep foundation in high-performance web applications, relational database design, cloud infrastructure, and autonomous automation pipelines, Himanshu ensures that every client project at Bhavkan Digital (BK-DIGITAL) is engineered to eliminate manual drag, capture verified commercial demand, and scale seamlessly.
            </p>

            {/* Direct Connect Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={handleFounderWhatsApp}
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-xs font-bold text-black hover:bg-[#20ba59] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Direct WhatsApp with Himanshu</span>
              </button>

              <a
                href={`mailto:${founderEmail}?subject=Direct%20Inquiry%20for%20Himanshu%20Mishra%20(Bhavkan%20Digital)`}
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/90 px-5 py-3 text-xs font-semibold text-white hover:border-[#D4AF37] hover:text-[#FFF0BD] transition-all"
              >
                <Mail className="h-4 w-4 text-[#D4AF37]" />
                <span>Direct Executive Email</span>
              </a>

              <button
                onClick={() => onNavigate('/start-project')}
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-[#07090F] px-4 py-3 text-xs font-semibold text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
              >
                <span>Project Estimator</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Tenets Grid */}
      <div className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
            Core Operating Philosophy
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-black text-white">
            How Himanshu Mishra Directs Engineering at Bhavkan Digital (BK-DIGITAL)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-neutral-800/90 bg-[#05060A] p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#D4AF37]">01</span>
              <h3 className="font-display text-base font-bold text-white">Engineering Over Aesthetics</h3>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Design is critical, but without reliable data validation, sub-second API execution, and persistent state management, a website is merely digital paint. At Bhavkan Digital (BK-DIGITAL), we build engines first, then dress them in elite visual aesthetics.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800/90 bg-[#05060A] p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#D4AF37]">02</span>
              <h3 className="font-display text-base font-bold text-white">Zero Subscription Traps</h3>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Why pay exorbitant per-seat monthly fees for SaaS tools that constrain your workflow? At Bhavkan Digital (BK-DIGITAL), we build custom software where the client holds 100% intellectual property rights and zero user licensing penalties.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800/90 bg-[#05060A] p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#D4AF37]">03</span>
              <h3 className="font-display text-base font-bold text-white">Frictionless Autonomous Pipelines</h3>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              A high-end website must never be an isolated island. In our systems at Bhavkan Digital (BK-DIGITAL), a customer inquiry flows instantly to WhatsApp, syncs to Supabase PostgreSQL, qualifies lead urgency via AI, and alerts your team in seconds.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800/90 bg-[#05060A] p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#D4AF37]">04</span>
              <h3 className="font-display text-base font-bold text-white">Direct Executive Accountability</h3>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              When you work with Bhavkan Digital (BK-DIGITAL), you don’t get bounced between layers of non-technical account managers. Himanshu directly participates in system architecture, milestone reviews, and technical sign-offs.
            </p>
          </div>
        </div>
      </div>

      {/* Personal Message & Consultation Box */}
      <div className="rounded-2xl border border-neutral-700/70 bg-gradient-to-r from-[#121622] via-[#0E121B] to-[#121622] p-8 sm:p-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#D4AF37] block mb-1">
            Direct Dialogue
          </span>
          <h3 className="font-display text-2xl font-black text-white">
            Have a Complex Software or System Idea?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
            Schedule a confidential discovery session directly with Himanshu Mishra at Bhavkan Digital (BK-DIGITAL) to review feasibility, database architecture, and project timelines.
          </p>
        </div>

        <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={handleFounderWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat with Himanshu</span>
          </button>

          <a
            href={`mailto:${founderEmail}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-3 text-xs font-semibold text-white hover:border-neutral-500 transition-colors"
          >
            <Mail className="h-4 w-4 text-neutral-400" />
            <span>Direct Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};
