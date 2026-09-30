import React, { useState } from 'react';
import { ProjectEstimator } from '../components/sections/ProjectEstimator';
import { ProjectForm } from '../components/sections/ProjectForm';
import { SiteSettings } from '../types';

interface StartProjectPageProps {
  settings: SiteSettings;
  prefillEstimate?: any;
}

export const StartProjectPage: React.FC<StartProjectPageProps> = ({
  settings,
  prefillEstimate,
}) => {
  const [activeTab, setActiveTab] = useState<'estimator' | 'form'>(
    prefillEstimate ? 'form' : 'estimator'
  );
  const [currentEstimate, setCurrentEstimate] = useState(prefillEstimate || null);

  const handleEstimateProposal = (data: any) => {
    setCurrentEstimate(data);
    setActiveTab('form');
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          Project Initiation
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
          START YOUR DIGITAL PROJECT
        </h1>
        <p className="mt-4 text-base text-neutral-300 leading-relaxed">
          Calculate an indicative investment range using our interactive estimator, or submit detailed technical requirements for an engineered proposal.
        </p>

        {/* Segmented Switcher */}
        <div className="mt-8 inline-flex items-center gap-1 p-1 bg-[#0E121B] border border-neutral-800 rounded-lg">
          <button
            onClick={() => setActiveTab('estimator')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'estimator'
                ? 'bg-[#1C2130] text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            1. Interactive Estimator
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'form'
                ? 'bg-[#1C2130] text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            2. Detailed Specification Form
          </button>
        </div>
      </div>

      {activeTab === 'estimator' ? (
        <ProjectEstimator onRequestProposal={handleEstimateProposal} />
      ) : (
        <ProjectForm
          settings={settings}
          prefill={currentEstimate}
        />
      )}
    </div>
  );
};
