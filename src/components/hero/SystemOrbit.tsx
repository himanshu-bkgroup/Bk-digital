import React, { useState } from 'react';
import { Globe, Database, Bot, GitBranch, Users, BarChart3, MessageSquare, CreditCard, LayoutDashboard, Compass } from 'lucide-react';

interface OrbitModule {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  role: string;
  angle: number; // in degrees
}

const MODULES: OrbitModule[] = [
  {
    id: 'website',
    name: 'WEBSITE',
    icon: Globe,
    role: 'Digital Front Door',
    description: 'High-speed flagship interface engineered for brand authority, SEO capture, and customer acquisition.',
    angle: 0,
  },
  {
    id: 'crm',
    name: 'CRM',
    icon: Users,
    role: 'Customer Command',
    description: 'Centralized record repository managing leads, client history, sales pipelines, and follow-ups.',
    angle: 36,
  },
  {
    id: 'ai',
    name: 'AI',
    icon: Bot,
    role: 'Intelligent Cognition',
    description: 'Automates customer conversations, lead qualification, quotation generation, and business analysis.',
    angle: 72,
  },
  {
    id: 'automation',
    name: 'AUTOMATION',
    icon: GitBranch,
    role: 'Operational Engine',
    description: 'Connects forms, notifications, CRM triggers, and databases into hands-free business workflows.',
    angle: 108,
  },
  {
    id: 'leads',
    name: 'LEADS',
    icon: Compass,
    role: 'Acquisition Funnel',
    description: 'Captures and classifies high-intent customer requests from organic search, ads, and direct referrals.',
    angle: 144,
  },
  {
    id: 'analytics',
    name: 'ANALYTICS',
    icon: BarChart3,
    role: 'Telemetry & ROI',
    description: 'Monitors real-time conversion rates, visitor behavior, channel ROI, and operational velocity.',
    angle: 180,
  },
  {
    id: 'whatsapp',
    name: 'WHATSAPP',
    icon: MessageSquare,
    role: 'Instant Pipeline',
    description: 'Enables direct conversational commerce, instant booking confirmations, and team notification dispatch.',
    angle: 216,
  },
  {
    id: 'database',
    name: 'DATABASE',
    icon: Database,
    role: 'Secure Storage',
    description: 'Enterprise PostgreSQL and Supabase schemas with row-level security and high data integrity.',
    angle: 252,
  },
  {
    id: 'payments',
    name: 'PAYMENTS',
    icon: CreditCard,
    role: 'Monetization Rail',
    description: 'Multi-currency payment gateways with automatic invoice creation, recurring billing, and receipt delivery.',
    angle: 288,
  },
  {
    id: 'dashboard',
    name: 'DASHBOARD',
    icon: LayoutDashboard,
    role: 'Executive Console',
    description: 'Unified administrative control screen providing complete visibility over all digital operations.',
    angle: 324,
  },
];

export const SystemOrbit: React.FC = () => {
  const [activeModule, setActiveModule] = useState<OrbitModule>(MODULES[2]); // default AI
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/80 bg-[#050608] overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
            Unified Ecosystem Architecture
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            THE CONNECTED BUSINESS SYSTEM
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            A standalone website leaves value on the table. BK-DIGITAL engineers a cohesive digital infrastructure where every module communicates with your core operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Orbit Canvas (Desktop + Tablet) */}
          <div
            className="lg:col-span-7 flex items-center justify-center relative min-h-[480px] sm:min-h-[560px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Concentric Orbit Rings */}
            <div className="absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full border border-neutral-800/80 pointer-events-none" />
            <div className="absolute h-[420px] w-[420px] sm:h-[500px] sm:w-[500px] rounded-full border border-dashed border-neutral-800/50 pointer-events-none" />

            {/* Central 3D Digital Core (The Business) */}
            <div className="relative z-10 flex flex-col items-center justify-center h-28 w-28 sm:h-36 sm:w-36 rounded-full border border-[#D4AF37]/40 bg-gradient-to-br from-[#1A1810] via-[#0E1017] to-[#050609] p-4 text-center shadow-[0_0_40px_rgba(212,175,55,0.18)]">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Core</span>
              <span className="font-display text-xs sm:text-sm font-bold text-metallic-gold mt-0.5">
                YOUR BUSINESS
              </span>
              <span className="text-[9px] text-[#A6ADB8] mt-1 font-mono">System Hub</span>
            </div>

            {/* Orbiting Modules */}
            {MODULES.map((mod) => {
              // Convert angle to radian for positioning
              const rad = (mod.angle * Math.PI) / 180;
              const radius = 200; // base px radius for desktop
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isSelected = activeModule.id === mod.id;
              const Icon = mod.icon;

              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  onMouseEnter={() => setActiveModule(mod)}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 0)`,
                  }}
                  className={`absolute z-20 flex items-center gap-2 rounded-lg border px-2.5 py-1.5 transition-all duration-200 ${
                    isSelected
                      ? 'border-[#D4AF37] bg-[#1C180C] shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-110 z-30'
                      : 'border-neutral-800 bg-[#0A0D14]/90 text-neutral-400 hover:border-neutral-600 hover:text-white'
                  }`}
                  aria-label={`View ${mod.name} module`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isSelected ? 'text-[#D4AF37]' : 'text-neutral-400'}`} />
                  <span className={`text-[11px] font-mono font-semibold tracking-wider ${isSelected ? 'text-[#FFF2C2]' : 'text-neutral-300'}`}>
                    {mod.name}
                  </span>
                </button>
              );
            })}

            {/* SVG Connecting Light Conduits from selected module to core */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="-280 -280 560 560">
              {(() => {
                const rad = (activeModule.angle * Math.PI) / 180;
                const x = Math.cos(rad) * 200;
                const y = Math.sin(rad) * 200;
                return (
                  <>
                    <line
                      x1={0}
                      y1={0}
                      x2={x}
                      y2={y}
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="animate-[dash_1.5s_linear_infinite]"
                      opacity="0.8"
                    />
                    <circle cx={x} cy={y} r="3" fill="#D4AF37" />
                  </>
                );
              })()}
            </svg>
          </div>

          {/* Module Deep-Dive Inspector Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-neutral-800 bg-gradient-to-b from-[#0F131D]/80 to-[#07090E]/90 p-6 sm:p-8 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#1A160A] text-[#D4AF37]">
                    <activeModule.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                      {activeModule.role}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      {activeModule.name} SYSTEM
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-neutral-500">
                  NODE #{MODULES.findIndex(m => m.id === activeModule.id) + 1}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-sm leading-relaxed text-neutral-300">
                  {activeModule.description}
                </p>

                <div className="rounded-lg border border-neutral-800/90 bg-[#06080D] p-4 text-xs">
                  <div className="flex items-center justify-between text-neutral-400 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">System Integration</span>
                    <span className="text-[#3DD68C] font-mono text-[10px]">Synchronized</span>
                  </div>
                  <p className="text-neutral-300">
                    Direct two-way sync with core database, automated notification dispatcher, and executive reporting.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {MODULES.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setActiveModule(m)}
                      className={`text-[10px] font-mono px-2 py-1 rounded transition-colors ${
                        activeModule.id === m.id
                          ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40'
                          : 'bg-neutral-900 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
