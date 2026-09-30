import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectShowcaseProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
  onExploreAll: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onOpenCaseStudy,
  onExploreAll,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex] || projects[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/80 bg-[#050608] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
              Selected Work
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              REAL DIGITAL EXPERIENCES
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-neutral-400">
              Verified software, web applications, and conversion portals engineered for actual operational businesses.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-[#0A0D14] text-neutral-300 hover:border-neutral-600 hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-[#0A0D14] text-neutral-300 hover:border-neutral-600 hover:text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={onExploreAll}
              className="ml-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:underline"
            >
              <span>All Projects</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Featured Project 3D Browser Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Floating Browser Device Frame */}
          <div className="lg:col-span-7">
            <div
              onClick={() => onOpenCaseStudy(activeProject)}
              data-cursor-text="VIEW"
              className="group cursor-pointer rounded-2xl border border-neutral-700/80 bg-[#0A0D15] p-2 sm:p-3 shadow-2xl transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.2)]"
            >
              {/* Browser Chrome Header */}
              <div className="flex items-center justify-between rounded-t-xl border-b border-neutral-800 bg-[#121622] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 rounded-md bg-[#080A0F] px-4 py-1 text-[11px] font-mono text-neutral-400 border border-neutral-800 max-w-[260px] truncate">
                  <span>https://{activeProject.slug}.bk-digital.com</span>
                </div>
                <div className="text-[10px] font-mono text-neutral-400">
                  SECURE SSL
                </div>
              </div>

              {/* Mockup Display */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-xl bg-[#030406]">
                <img
                  src={activeProject.image}
                  alt={`${activeProject.name} showcase`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="rounded-lg bg-black/80 px-4 py-2 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/50 backdrop-blur-md">
                    Open Case Study
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Project Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-2">
                <span>{activeProject.industry}</span>
                <span>/</span>
                <span>{activeProject.type}</span>
              </div>
              <h3 className="font-display text-3xl font-extrabold text-white">
                {activeProject.name}
              </h3>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                {activeProject.summary}
              </p>
            </div>

            {/* Problem & Solution Compact */}
            <div className="space-y-3 rounded-xl border border-neutral-800/90 bg-[#090C13] p-5 text-xs">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1">
                  Problem Addressed
                </span>
                <p className="text-neutral-300">
                  {activeProject.challenge}
                </p>
              </div>
              <div className="border-t border-neutral-800 pt-3">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] block mb-1">
                  Architecture Deployed
                </span>
                <p className="text-neutral-300">
                  {activeProject.solution}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-2">
                Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-neutral-800 bg-[#0E121C] px-2.5 py-1 font-mono text-[11px] text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenCaseStudy(activeProject)}
                className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>

              <span className="text-xs text-neutral-400">
                Project #{activeIndex + 1} of {projects.length}
              </span>
            </div>
          </div>
        </div>

        {/* Project Thumbnail Bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {projects.map((proj, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col text-left p-3 rounded-xl border transition-all duration-200 ${
                  isCurrent
                    ? 'border-[#D4AF37] bg-[#14120A]'
                    : 'border-neutral-800/80 bg-[#080A0E] text-neutral-400 hover:border-neutral-700 hover:text-white'
                }`}
              >
                <span className="font-mono text-[10px] text-neutral-400">
                  0{idx + 1} · {proj.industry}
                </span>
                <span className={`font-display text-xs font-bold mt-1 truncate ${isCurrent ? 'text-white' : 'text-neutral-300'}`}>
                  {proj.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
