import React from 'react';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface CaseStudiesPageProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
  onStartProject: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  projects,
  onOpenCaseStudy,
  onStartProject,
}) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          Engineering Briefs
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black tracking-tight text-white">
          IN-DEPTH CASE STUDIES
        </h1>
        <p className="mt-4 text-base text-neutral-300 leading-relaxed">
          Examine the technical problem, strategic methodology, and operational outcome for each of our delivered enterprise systems.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="rounded-2xl border border-neutral-800 bg-[#090C14] p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual preview */}
              <div className="lg:col-span-6">
                <div
                  onClick={() => onOpenCaseStudy(proj)}
                  className="cursor-pointer group rounded-xl border border-neutral-700/80 overflow-hidden bg-black shadow-lg"
                >
                  <img
                    src={proj.image}
                    alt={proj.name}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Dossier */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                  <span>CASE STUDY 0{idx + 1}</span>
                  <span>·</span>
                  <span>{proj.industry}</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {proj.name}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {proj.summary}
                </p>

                <div className="rounded-lg border border-neutral-800 bg-[#05060A] p-4 text-xs space-y-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">The Challenge</span>
                    <p className="text-neutral-300">{proj.challenge}</p>
                  </div>
                  <div className="border-t border-neutral-800/80 pt-2">
                    <span className="text-[10px] font-mono uppercase text-[#D4AF37] block">The Engineering Solution</span>
                    <p className="text-neutral-300">{proj.solution}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onOpenCaseStudy(proj)}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={onStartProject}
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    Build Similar Architecture →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
