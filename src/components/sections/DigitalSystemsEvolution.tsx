import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Compass, Users, GitBranch, Bot, BarChart3, TrendingUp } from 'lucide-react';

const PIPELINE_STEPS = [
  {
    step: '01',
    title: 'Website',
    subtitle: 'The Front Door',
    description: 'Bespoke high-performance digital presence that establishes immediate credibility and high search discovery.',
    icon: Globe,
  },
  {
    step: '02',
    title: 'Leads',
    subtitle: 'High-Intent Capture',
    description: 'Contextual forms, instant WhatsApp entry points, and appointment triage capturing customer demand.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'CRM',
    subtitle: 'Structured Records',
    description: 'Inquiries automatically logged into secure database with contact history, pipeline status, and owner tags.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Automation',
    subtitle: 'Zero Manual Busywork',
    description: 'Instant customer confirmation, automated sales team alerts, and calendar meeting invitations.',
    icon: GitBranch,
  },
  {
    step: '05',
    title: 'AI',
    subtitle: 'Intelligent Acceleration',
    description: 'AI qualification of lead urgency, automatic proposal drafting, and 24/7 client inquiry handling.',
    icon: Bot,
  },
  {
    step: '06',
    title: 'Analytics',
    subtitle: 'Clear Telemetry',
    description: 'Real-time visibility into cost-per-lead, conversion bottlenecks, and top revenue drivers.',
    icon: BarChart3,
  },
  {
    step: '07',
    title: 'Growth',
    subtitle: 'Compounding Scale',
    description: 'A predictable, automated business engine operating systematically around the clock.',
    icon: TrendingUp,
  },
];

export const DigitalSystemsEvolution: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [toggleText, setToggleText] = useState(false);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setToggleText((prev) => !prev);
    }, 3200);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PIPELINE_STEPS.length);
    }, 4000);

    return () => {
      clearInterval(textInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#040507] border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl">
        {/* Animated Morphing Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
            Paradigm Shift
          </span>

          <div className="mt-4 min-h-[90px] flex items-center justify-center">
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight transition-all duration-700">
              {toggleText ? (
                <span className="text-metallic-gold">
                  WE BUILD DIGITAL SYSTEMS.
                </span>
              ) : (
                <span className="text-neutral-400">
                  WE DON'T JUST BUILD WEBSITES.
                </span>
              )}
            </h2>
          </div>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            In modern commerce, a website is never just an online brochure. It is the active front door of an integrated, automated commercial machine.
          </p>
        </div>

        {/* Linear Stepper Pipeline */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {PIPELINE_STEPS.map((item, idx) => {
              const isSelected = activeStep === idx;
              const Icon = item.icon;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative flex flex-col text-left p-4 rounded-xl border transition-all duration-300 ${
                    isSelected
                      ? 'border-[#D4AF37] bg-[#14120A] shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                      : 'border-neutral-800/80 bg-[#090B10]/90 text-neutral-400 hover:border-neutral-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="font-mono text-xs text-neutral-500 font-semibold">{item.step}</span>
                    <Icon className={`h-4 w-4 ${isSelected ? 'text-[#D4AF37]' : 'text-neutral-500'}`} />
                  </div>
                  <span className={`font-display text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                    {item.title}
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-0.5">
                    {item.subtitle}
                  </span>
                  {isSelected && (
                    <div className="absolute -bottom-1 left-4 right-4 h-[2px] bg-[#D4AF37]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Feature Breakdown */}
          <div className="mt-8 rounded-2xl border border-neutral-800 bg-gradient-to-r from-[#0C0F17] via-[#080A0F] to-[#0C0F17] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#D4AF37]">
                    Step {PIPELINE_STEPS[activeStep].step} of 07
                  </span>
                  <span className="text-neutral-600">·</span>
                  <span className="text-xs text-neutral-400">
                    {PIPELINE_STEPS[activeStep].subtitle}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {PIPELINE_STEPS[activeStep].title} Integration
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  {PIPELINE_STEPS[activeStep].description}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <button
                  onClick={onStartProject}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold text-black hover:bg-[#E5C158] transition-colors"
                >
                  <span>Build This System</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
