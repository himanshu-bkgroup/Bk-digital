import React from 'react';
import { ArrowLeft, Check, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { Service, SiteSettings } from '../types';
import { openWhatsApp } from '../lib/whatsapp';

interface ServiceDetailPageProps {
  service: Service;
  settings: SiteSettings;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  settings,
  onNavigate,
}) => {
  const handleWhatsApp = () => {
    const text = `Hello BK-DIGITAL, I am reviewing your ${service.title} capabilities and would like to build a solution for my business.`;
    openWhatsApp(settings.whatsappNumber, text);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => onNavigate('/services')}
        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to Services</span>
      </button>

      {/* Hero */}
      <div className="border-b border-neutral-800 pb-10 mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          Specialized Capability
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
          {service.title}
        </h1>
        <p className="mt-4 font-display text-lg font-bold text-[#E5C158]">
          {service.tagline}
        </p>
        <p className="mt-4 text-base text-neutral-300 leading-relaxed max-w-3xl">
          {service.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onNavigate('/start-project')}
            className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
          >
            <span>{service.ctaLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#0E1A13] px-5 py-3 text-xs font-semibold text-[#3DD68C] hover:bg-[#152B1E] transition-colors"
          >
            <MessageSquare className="h-4 w-4 text-[#25D366]" />
            <span>Discuss on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Deliverables deep-dive */}
      <div className="rounded-2xl border border-neutral-800 bg-[#090C14] p-8 sm:p-10 mb-12">
        <h2 className="font-display text-2xl font-bold text-white mb-6">
          System Specifications & Deliverables
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-[#05060A] p-4 text-xs text-neutral-200">
              <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Value */}
      <div className="rounded-2xl border border-neutral-800 bg-[#06080E] p-8 sm:p-10 text-center">
        <h3 className="font-display text-2xl font-bold text-white mb-3">
          Deploy this capability into your operations
        </h3>
        <p className="text-sm text-neutral-400 max-w-xl mx-auto mb-6">
          Schedule an engineering discovery consultation to establish scope, timeline, and architectural integration.
        </p>
        <button
          onClick={() => onNavigate('/start-project')}
          className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-7 py-3.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
        >
          <span>Initiate Scoping</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
