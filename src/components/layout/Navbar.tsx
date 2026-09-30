import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Selected Work', path: '/projects' },
    { label: 'Process', path: '/#process' },
    { label: 'Estimator', path: '/start-project' },
    { label: 'Founder', path: '/owner' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-[#050608]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single Brand Wordmark */}
        <button
          onClick={() => handleLinkClick('/')}
          className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
          aria-label="BK-DIGITAL Home"
        >
          <span className="font-display text-xl font-extrabold tracking-wider text-white transition-colors group-hover:text-[#D4AF37]">
            BK<span className="text-[#D4AF37]">-</span>DIGITAL
          </span>
        </button>

        {/* Zone 2: Clean Typography Navigation (Desktop) */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.path)}
                className={`relative whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#D4AF37]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('/admin')}
            title="Admin Console"
            className="hidden p-2 text-neutral-500 transition-colors hover:text-neutral-300 sm:flex"
            aria-label="Admin Access"
          >
            <ShieldCheck className="h-4 w-4" />
          </button>

          <button
            onClick={() => handleLinkClick('/start-project')}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-[#D4AF37]/40 bg-gradient-to-r from-[#17140B] to-[#241F10] px-4 py-2 text-xs font-semibold tracking-wide text-[#F3E5AB] shadow-sm transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_16px_rgba(212,175,55,0.25)] focus:outline-none"
          >
            <span className="relative z-10 whitespace-nowrap">Start Project</span>
            <ArrowUpRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 text-neutral-400 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-800 bg-[#090B10] px-4 py-6 md:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.path)}
                className={`text-left text-base font-medium transition-colors ${
                  currentPath === link.path ? 'text-[#D4AF37]' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
              <button
                onClick={() => handleLinkClick('/admin')}
                className="text-xs text-neutral-500 hover:text-neutral-300 flex items-center gap-1.5"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Admin Login</span>
              </button>
              <button
                onClick={() => handleLinkClick('/faq')}
                className="text-xs text-neutral-400 hover:text-white"
              >
                FAQs
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
