import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SiteSettings } from '../types';
import { Storage } from '../lib/storage';
import { openWhatsApp } from '../lib/whatsapp';

export const ContactPage: React.FC<{ settings: SiteSettings }> = ({ settings }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    Storage.addLead({
      name: form.name,
      company: 'Direct Contact Form',
      email: form.email,
      phone: form.phone || 'Not provided',
      country: 'Direct Inquiry',
      businessType: 'Consultation',
      projectType: 'General Inquiry',
      budgetRange: 'To be discussed',
      timeline: 'Immediate',
      features: ['Contact Page Inquiry'],
      notes: form.message,
      source: 'project_form',
    });

    setSent(true);
  };

  const handleWhatsApp = () => {
    const text = 'Hello Bhavkan Digital (BK-DIGITAL), I would like to schedule an engineering consultation call.';
    openWhatsApp(settings.whatsappNumber, text);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-3xl mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
          Direct Communications
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
          CONTACT BHAVKAN DIGITAL (BK-DIGITAL)
        </h1>
        <p className="mt-4 text-base text-neutral-300 leading-relaxed">
          Connect directly with our solutions engineering team at Bhavkan Digital (BK-DIGITAL). We respond to all qualified inquiries within 24 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Direct Channels Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-neutral-800 bg-[#090C14] p-6 space-y-6">
            <h2 className="font-display text-lg font-bold text-white border-b border-neutral-800 pb-3">
              Official Communication Channels
            </h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block uppercase font-mono text-[10px]">Email Dispatch</span>
                  <a href={`mailto:${settings.contactEmail}`} className="text-white hover:text-[#D4AF37] font-medium text-sm">
                    {settings.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block uppercase font-mono text-[10px]">Direct Phone Line</span>
                  <a href={`tel:${settings.whatsappNumber}`} className="text-white hover:text-[#D4AF37] font-medium text-sm">
                    {settings.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block uppercase font-mono text-[10px]">Instant WhatsApp Line</span>
                  <button onClick={handleWhatsApp} className="text-[#3DD68C] hover:underline font-bold text-sm">
                    {settings.whatsappDisplay} (Live)
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-neutral-800 pt-4">
                <MapPin className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block uppercase font-mono text-[10px]">Studio Location</span>
                  <p className="text-neutral-300 text-xs">
                    {settings.officeCity}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Available for remote projects internationally: India, USA, UK, Canada, Australia, UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-neutral-800 bg-[#090C14] p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h2>
            <p className="text-xs text-neutral-400 mb-6">
              Fill in your inquiry details and an engineer will reply directly via email or WhatsApp.
            </p>

            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-12 w-12 text-[#3DD68C] mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-white">Message Transmitted</h3>
                <p className="text-xs text-neutral-400 mt-1">Our engineering team has received your message and will review it shortly.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs text-[#D4AF37] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-mono uppercase text-neutral-400 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono uppercase text-neutral-400 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@business.com"
                      className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-neutral-400 mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 or +1..."
                      className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-400 mb-1">
                    Inquiry / Project Scope
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you want to build or automate..."
                    className="w-full rounded-lg border border-neutral-800 bg-[#05060A] px-3.5 py-2.5 text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] py-3 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
