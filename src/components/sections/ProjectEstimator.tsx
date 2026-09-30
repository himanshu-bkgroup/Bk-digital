import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { Storage } from '../../lib/storage';

interface ProjectEstimatorProps {
  onRequestProposal: (estimateData: any) => void;
}

const PROJECT_TYPES = [
  { id: 'website', name: 'Website Development', base: 45000, curr: '₹' },
  { id: 'ecommerce', name: 'E-commerce Store', base: 75000, curr: '₹' },
  { id: 'webapp', name: 'Web Application', base: 110000, curr: '₹' },
  { id: 'software', name: 'Custom Software', base: 140000, curr: '₹' },
  { id: 'ai', name: 'AI Automation System', base: 65000, curr: '₹' },
  { id: 'crm', name: 'CRM & Admin Dashboard', base: 85000, curr: '₹' },
  { id: 'redesign', name: 'Website Redesign', base: 40000, curr: '₹' },
];

const BUSINESS_TYPES = ['Startup / Early Stage', 'Local Business / Clinic / Gym', 'Growing SME', 'Enterprise / International'];
const PAGE_OPTIONS = ['1 - 5 Pages / Views', '6 - 12 Pages / Views', '15+ Pages / Large Portal'];
const TIMELINES = ['Urgent (2-3 Weeks)', 'Standard (4-6 Weeks)', 'Flexible (8+ Weeks)'];

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onRequestProposal }) => {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [businessType, setBusinessType] = useState(BUSINESS_TYPES[1]);
  const [pagesOption, setPagesOption] = useState(PAGE_OPTIONS[0]);
  const [hasAI, setHasAI] = useState(false);
  const [hasAutomation, setHasAutomation] = useState(true);
  const [hasAdmin, setHasAdmin] = useState(true);
  const [timeline, setTimeline] = useState(TIMELINES[1]);

  // Compute indicative pricing range
  const calculateRange = () => {
    let base = selectedType.base;

    if (pagesOption.includes('6 - 12')) base += 25000;
    if (pagesOption.includes('15+')) base += 55000;

    if (hasAI) base += 35000;
    if (hasAutomation) base += 20000;
    if (hasAdmin) base += 25000;

    if (timeline.includes('Urgent')) base *= 1.2;

    const min = Math.round(base / 5000) * 5000;
    const max = Math.round((base * 1.35) / 5000) * 5000;

    const minUsd = Math.round(min / 86);
    const maxUsd = Math.round(max / 86);

    return {
      inr: `₹${min.toLocaleString('en-IN')} – ₹${max.toLocaleString('en-IN')}`,
      usd: `$${minUsd.toLocaleString('en-US')} – $${maxUsd.toLocaleString('en-US')}`,
    };
  };

  const range = calculateRange();

  const handleProposalClick = () => {
    Storage.trackEvent('estimator_used', `Estimated: ${selectedType.name} (${range.inr})`);
    onRequestProposal({
      projectType: selectedType.name,
      businessType,
      pagesOption,
      hasAI,
      hasAutomation,
      hasAdmin,
      timeline,
      estimatedRange: range.inr,
    });
  };

  return (
    <section id="estimator" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#040507] border-t border-neutral-800/80">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
            Transparent Scoping
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            INTERACTIVE PROJECT ESTIMATOR
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Select your architectural parameters to calculate an indicative investment bracket for your project.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-700/80 bg-[#090C14] p-6 sm:p-10 shadow-2xl">
          <div className="space-y-8">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                1. What do you need to build?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = selectedType.id === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setSelectedType(pt)}
                      className={`p-3 rounded-lg border text-left text-xs font-semibold transition-all ${
                        isSelected
                          ? 'border-[#D4AF37] bg-[#1A160A] text-[#FFF0BD]'
                          : 'border-neutral-800 bg-[#06080E] text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      {pt.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Business Stage & Scale */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  2. Business Type
                </label>
                <div className="space-y-2">
                  {BUSINESS_TYPES.map((bt) => (
                    <button
                      key={bt}
                      onClick={() => setBusinessType(bt)}
                      className={`w-full p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                        businessType === bt
                          ? 'border-[#D4AF37] bg-[#1A160A] text-[#FFF0BD]'
                          : 'border-neutral-800 bg-[#06080E] text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {bt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  3. Scope / Pages / Views
                </label>
                <div className="space-y-2">
                  {PAGE_OPTIONS.map((po) => (
                    <button
                      key={po}
                      onClick={() => setPagesOption(po)}
                      className={`w-full p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                        pagesOption === po
                          ? 'border-[#D4AF37] bg-[#1A160A] text-[#FFF0BD]'
                          : 'border-neutral-800 bg-[#06080E] text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {po}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Systems & Features Add-ons */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                4. Required Modules & Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setHasAI(!hasAI)}
                  className={`p-3 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                    hasAI
                      ? 'border-[#D4AF37] bg-[#1A160A] text-[#FFF0BD]'
                      : 'border-neutral-800 bg-[#06080E] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div>
                    <span className="font-semibold block">AI Automation</span>
                    <span className="text-[10px] text-neutral-500">Chatbot / Lead Qualification</span>
                  </div>
                  <CheckCircle2 className={`h-4 w-4 ${hasAI ? 'text-[#D4AF37]' : 'text-neutral-700'}`} />
                </button>

                <button
                  onClick={() => setHasAutomation(!hasAutomation)}
                  className={`p-3 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                    hasAutomation
                      ? 'border-[#D4AF37] bg-[#1A160A] text-[#FFF0BD]'
                      : 'border-neutral-800 bg-[#06080E] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div>
                    <span className="font-semibold block">WhatsApp Triggers</span>
                    <span className="text-[10px] text-neutral-500">Direct notifications & alerts</span>
                  </div>
                  <CheckCircle2 className={`h-4 w-4 ${hasAutomation ? 'text-[#D4AF37]' : 'text-neutral-700'}`} />
                </button>

                <button
                  onClick={() => setHasAdmin(!hasAdmin)}
                  className={`p-3 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                    hasAdmin
                      ? 'border-[#D4AF37] bg-[#1A160A] text-[#FFF0BD]'
                      : 'border-neutral-800 bg-[#06080E] text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div>
                    <span className="font-semibold block">Admin Command CRM</span>
                    <span className="text-[10px] text-neutral-500">Lead management & analytics</span>
                  </div>
                  <CheckCircle2 className={`h-4 w-4 ${hasAdmin ? 'text-[#D4AF37]' : 'text-neutral-700'}`} />
                </button>
              </div>
            </div>

            {/* Step 4: Timeline */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                5. Target Deployment Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeline(t)}
                    className={`p-2.5 rounded-lg border text-center text-xs font-medium transition-all ${
                      timeline === t
                        ? 'border-[#D4AF37] bg-[#1A160A] text-[#FFF0BD]'
                        : 'border-neutral-800 bg-[#06080E] text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Result Bracket Card */}
            <div className="rounded-xl border border-neutral-700/80 bg-gradient-to-r from-[#121622] via-[#0E121B] to-[#121622] p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#D4AF37] block mb-1">
                  Indicative Project Range
                </span>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {range.inr}
                </div>
                <div className="font-mono text-xs text-neutral-400 mt-0.5">
                  International Bracket: {range.usd} (USD)
                </div>
                <p className="mt-2 text-[11px] text-neutral-400 italic">
                  Indicative estimate — final pricing requires project discussion.
                </p>
              </div>

              <div className="mt-4 sm:mt-0 shrink-0">
                <button
                  onClick={handleProposalClick}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <span>Request Detailed Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
