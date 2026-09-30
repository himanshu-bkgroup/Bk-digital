import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Compass, PhoneCall } from 'lucide-react';
import { Hero3DLogo } from '../components/hero/Hero3DLogo';
import { SystemOrbit } from '../components/hero/SystemOrbit';
import { DigitalSystemsEvolution } from '../components/sections/DigitalSystemsEvolution';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { ProjectShowcase } from '../components/sections/ProjectShowcase';
import { BeforeAfterSlider } from '../components/sections/BeforeAfterSlider';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { AutomationShowcase } from '../components/sections/AutomationShowcase';
import { SalesPipeline } from '../components/sections/SalesPipeline';
import { TechConstellation } from '../components/sections/TechConstellation';
import { CustomSoftwareSection } from '../components/sections/CustomSoftwareSection';
import { ProjectEstimator } from '../components/sections/ProjectEstimator';
import { InternationalReach } from '../components/sections/InternationalReach';
import { WhyBKDigital } from '../components/sections/WhyBKDigital';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { Project, Service, SiteSettings } from '../types';

interface HomePageProps {
  projects: Project[];
  services: Service[];
  settings: SiteSettings;
  onNavigate: (path: string) => void;
  onOpenCaseStudy: (project: Project) => void;
  onRequestProposalWithEstimate: (estimate: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  projects,
  services,
  settings,
  onNavigate,
  onOpenCaseStudy,
  onRequestProposalWithEstimate,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 4. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-24 overflow-hidden bg-mesh-dark">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Supporting Statement Kicker (No Pill) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                <span>Website Development</span>
                <span aria-hidden="true">·</span>
                <span>Custom Software</span>
                <span aria-hidden="true">·</span>
                <span>AI Automation</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-400">India &amp; Global</span>
              </div>

              {/* Main Master Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] [text-wrap:balance]">
                WE BUILD BESPOKE WEBSITES &amp; CUSTOM SOFTWARE SYSTEMS.
              </h1>

              {/* Supporting Paragraph */}
              <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-neutral-300 leading-relaxed">
                BK-DIGITAL is India's premier engineering studio for high-converting website development, custom business software, CRM platforms, and intelligent automation systems. Led by Founder &amp; CEO Himanshu Mishra, we build digital machines that dominate markets and scale operations.
              </p>

              {/* 3 CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={() => onNavigate('/start-project')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-7 py-3.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-all shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => onNavigate('/projects')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/90 px-6 py-3.5 text-xs font-semibold text-white hover:border-neutral-500 hover:text-[#FFF0BD] transition-all"
                >
                  <Compass className="h-4 w-4 text-[#D4AF37]" />
                  <span>Explore Our Work</span>
                </button>

                <button
                  onClick={() => onNavigate('/contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-[#07090F] px-5 py-3.5 text-xs font-semibold text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-neutral-400" />
                  <span>Book a Consultation</span>
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Bespoke Engineering</span>
                </span>
                <span>·</span>
                <span>Zero Generic Templates</span>
                <span>·</span>
                <span>Full Source IP Ownership</span>
              </div>
            </div>

            {/* Right: 3D Interactive Centerpiece */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <Hero3DLogo />
            </div>
          </div>
        </div>
      </section>

      {/* 6. DIGITAL SYSTEM VISUALIZATION (ORBITING MODULES) */}
      <SystemOrbit />

      {/* 8. "WE DON'T JUST BUILD WEBSITES" -> "WE BUILD DIGITAL SYSTEMS" */}
      <DigitalSystemsEvolution onStartProject={() => onNavigate('/start-project')} />

      {/* 7. MAIN SERVICES SECTION */}
      <ServicesGrid
        services={services}
        onSelectService={() => onNavigate('/start-project')}
        onNavigateServicePage={(slug) => onNavigate(`/services/${slug}`)}
      />

      {/* 9. SELECTED WORK SHOWCASE */}
      <ProjectShowcase
        projects={projects}
        onOpenCaseStudy={onOpenCaseStudy}
        onExploreAll={() => onNavigate('/projects')}
      />

      {/* 11. BEFORE / AFTER WEBSITE REDESIGN SLIDER */}
      <BeforeAfterSlider />

      {/* 12. WEBSITE DEVELOPMENT PROCESS (8 STAGES) */}
      <ProcessTimeline onStartProject={() => onNavigate('/start-project')} />

      {/* 13-15. AUTOMATION SHOWCASE & WORKFLOW BUILDER DEMO */}
      <AutomationShowcase onStartProject={() => onNavigate('/start-project')} />

      {/* 16. WEBSITE SALES SYSTEM PIPELINE */}
      <SalesPipeline onStartProject={() => onNavigate('/start-project')} />

      {/* 17. TECHNOLOGY CONSTELLATION */}
      <TechConstellation />

      {/* 18. CUSTOM SOFTWARE SECTION */}
      <CustomSoftwareSection onStartProject={() => onNavigate('/start-project')} />

      {/* 19. PRICING / PROJECT ESTIMATOR */}
      <ProjectEstimator onRequestProposal={onRequestProposalWithEstimate} />

      {/* 29. INTERNATIONAL CLIENT POSITIONING */}
      <InternationalReach />

      {/* 30. WHY BK-DIGITAL */}
      <WhyBKDigital />

      {/* 42. FINAL CTA EXPERIENCE */}
      <FinalCTASection
        settings={settings}
        onStartProject={() => onNavigate('/start-project')}
        onBookConsultation={() => onNavigate('/contact')}
      />
    </div>
  );
};
