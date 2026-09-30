import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Storage } from '../../lib/storage';
import { openWhatsApp, sanitizeWhatsAppNumber } from '../../lib/whatsapp';

interface WhatsAppButtonProps {
  whatsappNumber: string;
  context?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsappNumber, context }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate contextual message
  const getContextMessage = () => {
    if (context?.includes('website')) {
      return 'Hello BK-DIGITAL, I am interested in building a high-performance website for my business.';
    }
    if (context?.includes('automation')) {
      return 'Hello BK-DIGITAL, I want to automate repetitive processes and integrate AI into my business operations.';
    }
    if (context?.includes('software')) {
      return 'Hello BK-DIGITAL, I need custom software developed around my specific operational workflow.';
    }
    if (context?.startsWith('project:')) {
      const projName = context.replace('project:', '').trim();
      return `Hello BK-DIGITAL, I reviewed the ${projName} case study and want to build a similar system for my business.`;
    }
    return 'Hello BK-DIGITAL, I would like to schedule a technical consultation regarding my digital project.';
  };

  const handleClick = (customText?: string) => {
    const message = customText || getContextMessage();
    Storage.trackEvent('whatsapp_click', `Context: ${context || 'General Floating'}`);
    openWhatsApp(whatsappNumber, message);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick context preview prompt popup */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-xl border border-neutral-700/80 bg-[#0E121B] p-4 text-xs shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2">
            <div>
              <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold block">
                Direct Engineering Line
              </span>
              <span className="font-mono text-[11px] text-white font-medium">
                +91 72178 76220
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white"
              aria-label="Close WhatsApp prompt"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="text-neutral-300 leading-relaxed mb-3">
            Connect directly on WhatsApp with senior systems architects regarding timeline, scope, and technical fit.
          </p>
          <button
            onClick={() => {
              setIsOpen(false);
              handleClick();
            }}
            className="w-full rounded-lg bg-[#25D366] py-2 text-center font-bold text-black hover:bg-[#20ba59] transition-colors shadow-[0_2px_12px_rgba(37,211,102,0.3)]"
          >
            Start WhatsApp Chat
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          } else {
            handleClick();
          }
        }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-105 focus:outline-none"
        aria-label="Contact BK-DIGITAL on WhatsApp"
      >
        <MessageSquare className="h-7 w-7 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-white border border-[#25D366]" />
        </span>
      </button>
    </div>
  );
};
