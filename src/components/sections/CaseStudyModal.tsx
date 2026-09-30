import React from 'react';
import { X, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onStartSimilar: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl border border-neutral-700/80 bg-[#0A0D14] shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-5 bg-[#07090F]">
          <div>
            <span className="font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider">
              {project.industry} · {project.year}
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-black text-white mt-0.5">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close case study"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Browser Mockup Frame in Modal */}
        <div className="border-b border-neutral-800 bg-[#0D1017] p-4">
          <div className="rounded-xl border border-neutral-700/80 overflow-hidden bg-[#050608] shadow-lg">
            {/* Browser top chrome */}
            <div className="flex items-center justify-between border-b border-neutral-800 bg-[#121622] px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                <div className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                <div className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
              </div>
              <div className="flex items-center gap-2 rounded-md bg-[#0A0C13] px-4 py-1 text-[11px] font-mono text-neutral-400 max-w-xs truncate border border-neutral-800">
                <span>https://{project.slug}.client.bk-digital.com</span>
              </div>
              <div className="w-10" />
            </div>

            {/* Project Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
              <img
                src={project.image}
                alt={`${project.name} interface mockup`}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Case Study Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Summary / Tagline */}
          <div className="border-l-2 border-[#D4AF37] pl-4">
            <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-neutral-800/90 bg-[#06080D] p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#E5C158] font-bold mb-2">
                The Challenge
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800/90 bg-[#06080D] p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
                The Strategy
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
              The Engineering Solution
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Interactive Feature List */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
              Delivered Architectural Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 rounded-lg border border-neutral-800 bg-[#0B0E16] p-3 text-xs text-neutral-200">
                  <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Nodes */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2.5">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-neutral-700/70 bg-[#121620] px-3 py-1 font-mono text-xs text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Results Section */}
          <div className="rounded-xl border border-neutral-700/60 bg-[#0E121A] p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1">
              Verified Project Outcome
            </h3>
            <p className="text-xs text-neutral-300 font-medium">
              {project.resultsNote}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800 px-6 py-4 bg-[#07090F]">
          <div className="text-xs text-neutral-400">
            Client: <span className="text-white font-medium">{project.client}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onStartSimilar(project)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors w-full sm:w-auto"
            >
              <span>Build Similar System</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
