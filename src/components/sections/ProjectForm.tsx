import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Paperclip } from 'lucide-react';
import { Storage } from '../../lib/storage';
import { SiteSettings } from '../../types';
import { openWhatsApp } from '../../lib/whatsapp';

interface ProjectFormProps {
  settings: SiteSettings;
  prefill?: any;
  onSuccess?: () => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ settings, prefill, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    businessType: prefill?.businessType || 'Growing Business',
    projectType: prefill?.projectType || 'Website & Automation',
    budgetRange: prefill?.estimatedRange || '₹50,000 – ₹1,50,000',
    timeline: prefill?.timeline || 'Standard (3-5 Weeks)',
    features: '',
    currentWebsite: '',
    referenceWebsites: '',
    notes: '',
  });

  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setSubmitting(true);
    setTimeout(() => {
      Storage.addLead({
        name: formData.name,
        company: formData.company || 'Not Specified',
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        businessType: formData.businessType,
        projectType: formData.projectType,
        budgetRange: formData.budgetRange,
        timeline: formData.timeline,
        features: formData.features ? formData.features.split(',').map(s => s.trim()) : ['Core Architecture'],
        currentWebsite: formData.currentWebsite,
        referenceWebsites: formData.referenceWebsites,
        notes: `${formData.notes}${fileName ? ` | Attached Spec: ${fileName}` : ''}`,
        source: 'project_form',
      });

      setSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 400);
  };

  const handleOpenWhatsApp = () => {
    const text = `Hello BK-DIGITAL, I just submitted a project requirement:\nName: ${formData.name}\nProject: ${formData.projectType}\nTimeline: ${formData.timeline}`;
    openWhatsApp(settings.whatsappNumber, text);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-neutral-700/80 bg-[#090C14] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1A160A] border border-[#D4AF37] text-[#D4AF37] mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37]">
          Transmission Verified
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Project Specification Received
        </h3>
        <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
          Thank you, <span className="text-white font-medium">{formData.name}</span>. Your requirements have been cataloged in our engineering intake queue. A senior technology specialist will review your parameters and follow up within 24 business hours.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleOpenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-xs font-bold text-black hover:bg-[#20ba59] transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Connect on WhatsApp Instantly</span>
          </button>

          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto text-xs text-neutral-400 hover:text-white"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-700/80 bg-[#090C14] p-6 sm:p-10 shadow-2xl space-y-6">
      <div className="border-b border-neutral-800/80 pb-4 mb-2">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          Formal Project Intake
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
          Project Specification Document
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          All inquiries are treated under non-disclosure and answered directly by engineering leads.
        </p>
      </div>

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Vikram Malhotra"
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Company / Business Name
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Acme Corporation"
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Corporate Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210 or +1 (555) 000-0000"
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      </div>

      {/* Row 3: Country & Business Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Client Location / Country
          </label>
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="India">India</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="UAE">United Arab Emirates</option>
            <option value="Other">Other International</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Project Archetype
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="Website Development">Premium Website Development</option>
            <option value="Web Applications & SaaS">Web Applications & SaaS</option>
            <option value="AI Automation & Chatbots">AI Automation & Chatbots</option>
            <option value="Business Workflow Automation">Business Workflow Automation</option>
            <option value="Custom Software (ERP/CRM)">Custom Software (ERP/CRM/Portal)</option>
            <option value="E-Commerce Storefront">E-Commerce Storefront</option>
            <option value="Complete Digital System">Complete Digital System (Web + CRM + AI)</option>
          </select>
        </div>
      </div>

      {/* Row 4: Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Target Budget Bracket
          </label>
          <input
            type="text"
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            placeholder="e.g. ₹75,000 – ₹1.5L or $1,500 – $3,000"
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Desired Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="Urgent (2-3 Weeks)">Urgent (2-3 Weeks)</option>
            <option value="Standard (4-6 Weeks)">Standard (4-6 Weeks)</option>
            <option value="Strategic (8+ Weeks)">Strategic (8+ Weeks)</option>
          </select>
        </div>
      </div>

      {/* Existing Web & References */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Current Website (if applicable)
          </label>
          <input
            type="url"
            value={formData.currentWebsite}
            onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
            placeholder="https://mycurrentsite.com"
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
            Reference / Benchmark Websites
          </label>
          <input
            type="text"
            value={formData.referenceWebsites}
            onChange={(e) => setFormData({ ...formData, referenceWebsites: e.target.value })}
            placeholder="e.g. stripe.com, linear.app"
            className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      </div>

      {/* Additional Requirements & File */}
      <div>
        <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
          Specific Operational Requirements & Core Features
        </label>
        <textarea
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Describe your workflows, key features, user roles, integrations (e.g. WhatsApp, Razorpay, Supabase)..."
          className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
        />
      </div>

      {/* File spec upload indicator */}
      <div className="flex items-center justify-between rounded-lg border border-dashed border-neutral-800 bg-[#05060A] p-3 text-xs">
        <div className="flex items-center gap-2 text-neutral-400">
          <Paperclip className="h-4 w-4 text-[#D4AF37]" />
          <span>{fileName ? `Attached: ${fileName}` : 'Attach Wireframe, RFP or Project Brief (Optional)'}</span>
        </div>
        <label className="cursor-pointer rounded border border-neutral-700 bg-neutral-900 px-3 py-1 text-[11px] text-neutral-300 hover:text-white">
          <span>{fileName ? 'Replace File' : 'Browse File'}</span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFileName(e.target.files[0].name);
              }
            }}
          />
        </label>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] py-3.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          <span>{submitting ? 'Transmitting Specification...' : 'Transmit Project Requirements'}</span>
        </button>
      </div>
    </form>
  );
};
