import React, { useState } from 'react';
import { ArrowUpRight, Check, Globe, Layers, Cpu, GitBranch, Code, ShoppingBag } from 'lucide-react';
import { Service } from '../../types';

interface ServicesGridProps {
  services: Service[];
  onSelectService: (service: Service) => void;
  onNavigateServicePage: (slug: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Layers,
  Cpu,
  GitBranch,
  Code,
  ShoppingBag,
};

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  onSelectService,
  onNavigateServicePage,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'core' | 'automation' | 'software'>('all');

  const filtered = services.filter((s) => {
    if (activeTab === 'all') return true;
    return s.category === activeTab;
  });

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050608]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
              Core Capabilities
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              ENGINEERED DIGITAL SOLUTIONS
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-neutral-400">
              High-end digital architecture designed around customer acquisition, automated workflows, and enterprise scale.
            </p>
          </div>

          {/* Interactive filter tabs (segmented control, functional buttons) */}
          <div className="flex items-center gap-1 p-1 bg-[#0E1119] border border-neutral-800 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#1C1F2B] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('core')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'core'
                  ? 'bg-[#1C1F2B] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Websites & E-Com
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'automation'
                  ? 'bg-[#1C1F2B] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Automation & AI
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'software'
                  ? 'bg-[#1C1F2B] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Custom Software
            </button>
          </div>
        </div>

        {/* Large Interactive Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Globe;
            const isFeatured = index === 0 || index === 2;

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-2xl border p-8 transition-all duration-300 ${
                  isFeatured
                    ? 'border-neutral-700/80 bg-gradient-to-b from-[#10141F] to-[#080A0E] hover:border-[#D4AF37]/60'
                    : 'border-neutral-800/80 bg-[#090B10]/80 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-700/60 bg-[#121622] text-[#D4AF37] shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[#F3E5AB] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-[#C4CCD3] leading-relaxed">
                    {service.tagline}
                  </p>

                  <p className="mt-4 text-xs text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-6 space-y-2 border-t border-neutral-800/80 pt-4">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-2">
                      Key Deliverables
                    </span>
                    {service.deliverables.slice(0, 4).map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="h-3.5 w-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-neutral-800/80 pt-6">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#FFF0BD] transition-colors"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigateServicePage(service.slug)}
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    Explore Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
