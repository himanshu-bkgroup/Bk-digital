import React from 'react';
import { ArrowUpRight, Mail, Phone, MessageSquare } from 'lucide-react';
import { SiteSettings } from '../../types';
import { openWhatsApp } from '../../lib/whatsapp';

interface FooterProps {
  settings: SiteSettings;
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ settings, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const text = 'Hello BK-DIGITAL, I would like to discuss a digital technology project for my business.';
    openWhatsApp(settings.whatsappNumber, text);
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-[#040507] text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Slogan */}
          <div className="space-y-4 lg:col-span-5">
            <button
              onClick={() => onNavigate('/')}
              className="text-left font-display text-2xl font-black tracking-wider text-white hover:text-[#D4AF37] transition-colors"
            >
              BHAVKAN<span className="text-[#D4AF37]">-</span>DIGITAL
            </button>
            <p className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase -mt-2">
              BK-DIGITAL ENGINEERING STUDIO
            </p>
            <p className="font-display text-sm tracking-wide text-[#C5CAD2]">
              Digital Experiences. Intelligent Systems. Automated Growth.
            </p>
            <p className="max-w-md text-xs leading-relaxed text-neutral-400">
              Bhavkan Digital (BK-DIGITAL) designs and engineers high-performance web applications, bespoke business software, and intelligent automation systems that turn digital touchpoints into automated operations.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-neutral-500 block mb-1">
                Global Operations
              </span>
              <p className="text-xs text-neutral-300">
                Available for remote projects internationally: India, USA, UK, Canada, Australia, UAE.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                Systems & Services
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <button onClick={() => onNavigate('/services/web-development')} className="hover:text-white transition-colors">
                    Website Development
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/services/web-applications')} className="hover:text-white transition-colors">
                    Web Applications
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/services/ai-automation')} className="hover:text-white transition-colors">
                    AI Automation
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/services/business-automation')} className="hover:text-white transition-colors">
                    Business Automation
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/services/software-development')} className="hover:text-white transition-colors">
                    Custom Software
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/services/ecommerce')} className="hover:text-white transition-colors">
                    E-Commerce Solutions
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <button onClick={() => onNavigate('/projects')} className="hover:text-white transition-colors">
                    Selected Work
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/case-studies')} className="hover:text-white transition-colors">
                    Case Studies
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/start-project')} className="hover:text-white transition-colors">
                    Project Estimator
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/owner')} className="hover:text-white transition-colors text-[#D4AF37]">
                    Founder & CEO
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">
                    About Studio
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/faq')} className="hover:text-white transition-colors">
                    Architecture FAQ
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/admin')} className="hover:text-white transition-colors text-neutral-500">
                    Admin Portal
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                Direct Channels
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <a href={`mailto:${settings.contactEmail}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Mail className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>{settings.contactEmail}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${settings.whatsappNumber}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Phone className="h-3.5 w-3.5 text-neutral-400" />
                    <span>{settings.whatsappDisplay}</span>
                  </a>
                </li>
                <li>
                  <button onClick={handleWhatsAppClick} className="flex items-center gap-1.5 text-[#25D366] hover:underline transition-colors">
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp Official</span>
                  </button>
                </li>
                <li className="pt-2 text-neutral-400 leading-tight">
                  <span className="text-neutral-500 block">Engineering Studio:</span>
                  {settings.officeCity}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-neutral-800/80 pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>© {currentYear} Bhavkan Digital (BK-DIGITAL)</span>
            <span aria-hidden="true">·</span>
            <span>All rights reserved</span>
            <span aria-hidden="true">·</span>
            <span>Engineered for performance</span>
          </div>

          <div className="mt-4 flex items-center gap-6 text-xs text-neutral-400 sm:mt-0">
            <button onClick={() => onNavigate('/privacy')} className="hover:text-neutral-200 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('/terms')} className="hover:text-neutral-200 transition-colors">
              Terms of Engagement
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
