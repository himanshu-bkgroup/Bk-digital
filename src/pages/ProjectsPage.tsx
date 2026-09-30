import React, { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { Project } from '../types';

interface ProjectsPageProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
  onNavigateStartProject: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  onOpenCaseStudy,
  onNavigateStartProject,
}) => {
  const [filter, setFilter] = useState('All');

  const industries = ['All', 'Retail & Manufacturing', 'Fitness & Health', 'Healthcare & Clinical', 'Luxury Beauty & Wellness'];

  const filtered = projects.filter((p) => filter === 'All' || p.industry === filter);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          Verified Portfolio
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black tracking-tight text-white">
          SELECTED WORK
        </h1>
        <p className="mt-4 text-base text-neutral-300 leading-relaxed">
          Real digital experiences built for real business problems. We only showcase verified, completed systems and architectures.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {industries.map((ind) => (
          <button
            key={ind}
            onClick={() => setFilter(ind)}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-mono transition-colors ${
              filter === ind
                ? 'border border-[#D4AF37] bg-[#1A160A] text-[#FFF0BD]'
                : 'border border-neutral-800 bg-[#090C14] text-neutral-400 hover:text-white hover:border-neutral-700'
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenCaseStudy(project)}
            data-cursor-text="OPEN"
            className="group cursor-pointer rounded-2xl border border-neutral-800 bg-[#090C14] p-4 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] flex flex-col justify-between"
          >
            <div>
              {/* Device Window Chrome */}
              <div className="flex items-center justify-between rounded-t-xl border-b border-neutral-800 bg-[#121622] px-4 py-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-neutral-600" />
                  <div className="h-2 w-2 rounded-full bg-neutral-600" />
                  <div className="h-2 w-2 rounded-full bg-neutral-600" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400 truncate max-w-[200px]">
                  https://{project.slug}.client.bk-digital.com
                </span>
                <span className="text-[10px] font-mono text-[#D4AF37]">{project.year}</span>
              </div>

              {/* Image Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span className="text-[#D4AF37] uppercase">{project.industry}</span>
                  <span>{project.type}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </div>

            <div className="px-4 pb-4 pt-2 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-500">
                Client: {project.client}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37] group-hover:underline">
                <span>View Case Study</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
