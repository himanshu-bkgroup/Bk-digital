import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigateHome: () => void;
}

export const LegalPages: React.FC<LegalPageProps> = ({ type, onNavigateHome }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-neutral-300">
      <button
        onClick={onNavigateHome}
        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Return to Flagship</span>
      </button>

      <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
        Legal Governance
      </span>
      <h1 className="mt-2 font-display text-3xl sm:text-4xl font-black text-white">
        {isPrivacy ? 'PRIVACY & DATA POLICY' : 'TERMS OF ENGAGEMENT'}
      </h1>
      <p className="mt-2 text-xs text-neutral-500 font-mono">
        Last updated: October 2026 · Bhavkan Digital (BK-DIGITAL)
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed border-t border-neutral-800 pt-8">
        {isPrivacy ? (
          <>
            <div>
              <h2 className="font-display text-lg font-bold text-white mb-2">1. Overview &amp; Data Philosophy</h2>
              <p>
                Bhavkan Digital (BK-DIGITAL) respects your corporate privacy and the integrity of your intellectual property. We do not sell, barter, or distribute client contact records or proprietary operational details to third-party aggregators or advertising networks.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white mb-2">2. Information Collection &amp; Usage</h2>
              <p>
                When you submit project requirements, estimator data, or chat inquiries, we collect information solely to assess technical feasibility, calculate resource allocations, and communicate milestone deliverables.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white mb-2">3. Storage &amp; Infrastructure Security</h2>
              <p>
                All data stored within Bhavkan Digital (BK-DIGITAL) systems is managed with encrypted database connections (PostgreSQL/Supabase) utilizing industry-standard Row Level Security (RLS) and strict least-privilege administrative access protocols.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white mb-2">4. Third-Party Integrations</h2>
              <p>
                Depending on project requirements, we configure official third-party APIs (such as WhatsApp Business API, Stripe, Razorpay, or Google Cloud). Each integration adheres to the strict security boundaries defined by the respective provider.
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2 className="font-display text-lg font-bold text-white mb-2">1. Scope of Engagement</h2>
              <p>
                Bhavkan Digital (BK-DIGITAL) provides custom software engineering, website development, database architecture, and automation services. All engagements are executed against mutually agreed Statements of Work (SOW) defining milestones, deliverables, and timelines.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white mb-2">2. Intellectual Property Ownership</h2>
              <p>
                Upon final settlement of project milestone invoicing, all bespoke source code, database architectures, and graphical brand assets created specifically for the client transfer entirely to the client's intellectual ownership.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white mb-2">3. Verified Engineering & Representations</h2>
              <p>
                We do not guarantee speculative or third-party controlled commercial outcomes (e.g., guaranteed #1 Google ranking positions or fabricated revenue numbers). We deliver verified, performance-tested technical code meeting international standards.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-white mb-2">4. Remote Collaboration & Jurisdiction</h2>
              <p>
                Agreements are conducted under the commercial laws of India for domestic contracts, or governed by international arbitration provisions specified in individual cross-border enterprise contracts.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
