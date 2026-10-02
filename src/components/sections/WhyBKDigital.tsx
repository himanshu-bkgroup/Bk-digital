import React from 'react';
import { Target, Wrench, Sparkles, RefreshCcw, Monitor, TrendingUp } from 'lucide-react';

const REASONS = [
  {
    icon: Target,
    title: 'Business-First Development',
    desc: 'We start with your unit economics, acquisition strategy, and operational bottlenecks before drafting architecture. Code serves commercial objectives.',
  },
  {
    icon: Wrench,
    title: 'Custom-Built Architecture',
    desc: 'No generic, bloated CMS themes or restrictive templates. Every system is purpose-built to fit your exact internal operations and customer journeys.',
  },
  {
    icon: Sparkles,
    title: 'AI Ready & Value-Driven',
    desc: 'We deploy AI models only where they provide measurable practical utility: 24/7 lead qualification, automated document parsing, and instant triage.',
  },
  {
    icon: RefreshCcw,
    title: 'Automation Focused',
    desc: 'Eliminate repetitive manual tasks. We integrate WhatsApp triggers, CRM updates, and payment webhooks to let your team focus on high-value execution.',
  },
  {
    icon: Monitor,
    title: 'Modern High-End Experience',
    desc: 'Sophisticated dark cinematic aesthetics, sub-second response times, and ergonomic design built to establish unassailable market authority.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Technical Foundation',
    desc: 'Engineered with clean TypeScript, PostgreSQL, and cloud edge networks designed to scale from early traction to hundreds of thousands of transactions.',
  },
];

export const WhyBKDigital: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050608] border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
            Core Philosophy
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            WHY MODERN ENTERPRISES CHOOSE BHAVKAN DIGITAL (BK-DIGITAL)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            We operate as an elite engineering partner at Bhavkan Digital (BK-DIGITAL), building enduring digital systems that move businesses forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-2xl border border-neutral-800/80 bg-[#080A10] p-8 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-[#0E121B] text-[#D4AF37]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white">
                  {r.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
