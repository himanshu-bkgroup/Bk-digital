/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Storage } from './lib/storage';
import { Project, Service, SiteSettings } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { Preloader } from './components/layout/Preloader';
import { CaseStudyModal } from './components/sections/CaseStudyModal';
import { BKChatbot } from './components/ai/BKChatbot';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { SEOHead } from './components/common/SEOHead';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { AboutPage } from './pages/AboutPage';
import { OwnerPage } from './pages/OwnerPage';
import { ContactPage } from './pages/ContactPage';
import { StartProjectPage } from './pages/StartProjectPage';
import { FAQPage } from './pages/FAQPage';
import { LegalPages } from './pages/LegalPages';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname) {
      return window.location.pathname;
    }
    return '/';
  });

  const [preloaderDone, setPreloaderDone] = useState(false);
  const [projects, setProjects] = useState<Project[]>(() => Storage.getProjects());
  const [services, setServices] = useState<Service[]>(() => Storage.getServices());
  const [settings, setSettings] = useState<SiteSettings>(() => Storage.getSettings());

  // Active Case Study Modal
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Prefill Estimate data passed to /start-project
  const [estimatorPrefill, setEstimatorPrefill] = useState<any>(null);

  // Sync browser popstate
  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path: string) => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle hash anchors on home page
    if (path.startsWith('/#')) {
      if (currentPath !== '/') {
        setCurrentPath('/');
        window.history.pushState({}, '', '/');
      }
      setTimeout(() => {
        const id = path.replace('/#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    setCurrentPath(path);
    window.history.pushState({}, '', path);
    Storage.trackEvent('page_view', `Navigated to ${path}`);
  };

  const reloadData = () => {
    setProjects(Storage.getProjects());
    setServices(Storage.getServices());
    setSettings(Storage.getSettings());
  };

  const handleOpenCaseStudy = (project: Project) => {
    setActiveCaseStudy(project);
    Storage.trackEvent('project_view', `Opened case study: ${project.name}`);
  };

  const handleStartSimilarProject = (project: Project) => {
    setActiveCaseStudy(null);
    setEstimatorPrefill({
      projectType: project.type,
      notes: `Interested in building a system similar to ${project.name}.`,
    });
    navigate('/start-project');
  };

  const handleProposalWithEstimate = (estimateData: any) => {
    setEstimatorPrefill(estimateData);
    navigate('/start-project');
  };

  // Determine WhatsApp context string
  const getWhatsAppContext = () => {
    if (currentPath.startsWith('/services/')) {
      return `service:${currentPath.replace('/services/', '')}`;
    }
    if (currentPath === '/projects' && activeCaseStudy) {
      return `project:${activeCaseStudy.name}`;
    }
    if (currentPath === '/start-project') {
      return 'estimator:proposal';
    }
    return currentPath;
  };

  // Render Routed Page
  const renderPage = () => {
    // Service Detail Route: /services/:slug
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').trim();
      const service = services.find((s) => s.slug === slug);
      if (service) {
        return (
          <ServiceDetailPage
            service={service}
            settings={settings}
            onNavigate={navigate}
          />
        );
      }
      return <ServicesPage services={services} onNavigate={navigate} />;
    }

    switch (currentPath) {
      case '/services':
        return <ServicesPage services={services} onNavigate={navigate} />;
      case '/projects':
        return (
          <ProjectsPage
            projects={projects}
            onOpenCaseStudy={handleOpenCaseStudy}
            onNavigateStartProject={() => navigate('/start-project')}
          />
        );
      case '/case-studies':
        return (
          <CaseStudiesPage
            projects={projects}
            onOpenCaseStudy={handleOpenCaseStudy}
            onStartProject={() => navigate('/start-project')}
          />
        );
      case '/about':
        return (
          <AboutPage
            settings={settings}
            onStartProject={() => navigate('/start-project')}
            onNavigate={navigate}
          />
        );
      case '/owner':
      case '/founder':
      case '/leadership':
        return (
          <OwnerPage
            settings={settings}
            onNavigate={navigate}
          />
        );
      case '/contact':
        return <ContactPage settings={settings} />;
      case '/start-project':
        return (
          <StartProjectPage
            settings={settings}
            prefillEstimate={estimatorPrefill}
          />
        );
      case '/faq':
        return <FAQPage onStartProject={() => navigate('/start-project')} />;
      case '/privacy':
        return <LegalPages type="privacy" onNavigateHome={() => navigate('/')} />;
      case '/terms':
        return <LegalPages type="terms" onNavigateHome={() => navigate('/')} />;
      case '/admin':
        return (
          <AdminPage
            projects={projects}
            services={services}
            settings={settings}
            onRefreshData={reloadData}
            onNavigateHome={() => navigate('/')}
          />
        );
      case '/':
      default:
        return (
          <HomePage
            projects={projects}
            services={services}
            settings={settings}
            onNavigate={navigate}
            onOpenCaseStudy={handleOpenCaseStudy}
            onRequestProposalWithEstimate={handleProposalWithEstimate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050608] text-[#E2E6EB] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#FFF9E6]">
      {/* Dynamic SEO Head Manager */}
      <SEOHead currentPath={currentPath} />

      {/* Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Top Bar Navigation */}
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      {/* Main Page Viewport */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Authoritative Luxury Footer */}
      <Footer settings={settings} onNavigate={navigate} />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onStartSimilar={handleStartSimilarProject}
      />

      {/* Floating BK AI Assistant */}
      <BKChatbot
        settings={settings}
        onNavigateStartProject={() => navigate('/start-project')}
      />

      {/* Floating Contextual WhatsApp Lead Button */}
      <WhatsAppButton
        whatsappNumber={settings.whatsappNumber}
        context={getWhatsAppContext()}
      />
    </div>
  );
}
