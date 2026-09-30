import React from 'react';
import { ArrowUpRight, Check, ArrowRight, Globe, Layers, Cpu, GitBranch, Code, ShoppingBag, LayoutDashboard } from 'lucide-react';
import { Service } from '../types';

interface ServicesPageProps {
  services: Service[];
  onNavigate: (path: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Layers,
  Cpu,
  GitBranch,
  Code,
  ShoppingBag,
  LayoutDashboard,
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ services, onNavigate }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          Engineering Capabilities
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black tracking-tight text-white">
          SYSTEMS & SERVICES
        </h1>
        <p className="mt-4 text-base text-neutral-300 leading-relaxed">
          BK-DIGITAL constructs full-stack digital infrastructure. We move beyond cosmetic websites to build unified commercial systems that automate work and attract high-value clients.
        </p>
      </div>

      {/* Services List Panels */}
      <div className="space-y-12">
        {services.map((service, index) => {
          const Icon = ICON_MAP[service.iconName] || Globe;

          return (
            <div
              key={service.id}
              className="rounded-2xl border border-neutral-800 bg-[#090C14] p-8 sm:p-10 transition-colors hover:border-neutral-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-700 bg-[#121622] text-[#D4AF37]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-neutral-500 uppercase">
                        Service 0{index + 1}
                      </span>
                      <h2 className="font-display text-2xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="font-display text-sm font-semibold text-[#D4AF37]">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => onNavigate('/start-project')}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    <button
                      onClick={() => onNavigate(`/services/${service.slug}`)}
                      className="text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      Read Technical Spec →
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-[#05060A] rounded-xl border border-neutral-850 p-6">
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 block mb-4">
                    Architectural Inclusions & Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
