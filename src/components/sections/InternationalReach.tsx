import React from 'react';
import { Globe, Clock, ShieldCheck, Video } from 'lucide-react';

const REGIONS = [
  { country: 'India', flag: '🇮🇳', timeZone: 'IST (UTC+5:30)', activeFocus: 'Direct on-site sprint & pan-India tech infrastructure' },
  { country: 'United States', flag: '🇺🇸', timeZone: 'EST / CST / PST', activeFocus: 'Dedicated overlap hours, weekly async video sprint reviews' },
  { country: 'United Kingdom', flag: '🇬🇧', timeZone: 'GMT / BST', activeFocus: 'Full business day overlap, GBP contracts & swift delivery' },
  { country: 'Canada', flag: '🇨🇦', timeZone: 'EST / PST', activeFocus: 'North American market standards, Stripe/CAD billing' },
  { country: 'Australia', flag: '🇦🇺', timeZone: 'AEST (UTC+10)', activeFocus: 'Rapid next-day turnaround via APAC time alignment' },
  { country: 'United Arab Emirates', flag: '🇦🇪', timeZone: 'GST (UTC+4)', activeFocus: 'GCC enterprise portals, multi-lingual & regional payment setups' },
];

export const InternationalReach: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#040507] border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
            Global Execution
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            BUILDING FOR BUSINESSES BEYOND BORDERS.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Available for remote projects internationally. We collaborate across time zones with transparent sprint demos, secure intellectual property protection, and high-velocity communication.
          </p>
        </div>

        {/* Global Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REGIONS.map((region) => (
            <div
              key={region.country}
              className="rounded-xl border border-neutral-800/80 bg-[#080B12] p-6 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{region.flag}</span>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">
                      {region.country}
                    </h3>
                    <span className="font-mono text-[10px] text-neutral-500">
                      {region.timeZone}
                    </span>
                  </div>
                </div>

                <div className="h-2 w-2 rounded-full bg-[#3DD68C]" title="Remote availability active" />
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {region.activeFocus}
              </p>
            </div>
          ))}
        </div>

        {/* Remote Collaboration Standards */}
        <div className="mt-12 rounded-2xl border border-neutral-800 bg-[#090C14] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-300">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">Time-Zone Synchronized</span>
                <p className="text-neutral-400 leading-relaxed">
                  Daily standups and weekly milestones scheduled at hours convenient to your leadership team.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Video className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">Recorded Sprint Walkthroughs</span>
                <p className="text-neutral-400 leading-relaxed">
                  Loom video updates accompany every staging release so you never wonder what code was pushed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">Strict Non-Disclosure & IP</span>
                <p className="text-neutral-400 leading-relaxed">
                  100% intellectual property ownership transferred to client upon final milestone settlement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
