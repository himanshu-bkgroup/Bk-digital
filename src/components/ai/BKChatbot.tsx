import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, ArrowRight, MessageSquare, CheckCircle2, UserPlus } from 'lucide-react';
import { askBKAI } from '../../lib/gemini';
import { Storage } from '../../lib/storage';
import { SiteSettings } from '../../types';
import { openWhatsApp } from '../../lib/whatsapp';

interface BKChatbotProps {
  settings: SiteSettings;
  onNavigateStartProject: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export const BKChatbot: React.FC<BKChatbotProps> = ({ settings, onNavigateStartProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: "Hello! I am **BK AI**, the architectural assistant for BK-DIGITAL. How can I assist you with your website, custom software, CRM, or AI automation goals today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Quick Lead Capture in chatbot drawer
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    projectType: 'General Inquiry'
  });
  const [leadSaved, setLeadSaved] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (customQuery?: string) => {
    const query = customQuery || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = { id: 'u-' + Date.now(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    Storage.trackEvent('chat_interaction', `User asked: ${query.slice(0, 50)}`);

    try {
      const response = await askBKAI(query);
      const aiMsg: Message = { id: 'a-' + Date.now(), sender: 'ai', text: response };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const aiMsg: Message = {
        id: 'a-' + Date.now(),
        sender: 'ai',
        text: "Please contact BK-DIGITAL directly for confirmation on this specific requirement."
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;

    Storage.addLead({
      name: leadForm.name,
      company: leadForm.business || 'Via BK AI Chat',
      email: leadForm.email || 'chat-inquiry@client.com',
      phone: leadForm.phone,
      country: 'International / India',
      businessType: leadForm.business || 'Inquiry',
      projectType: leadForm.projectType,
      budgetRange: 'To be discussed',
      timeline: 'Standard',
      features: ['Captured via BK AI Assistant'],
      notes: `Inquiry captured during chat session: ${leadForm.projectType}`,
      source: 'chatbot',
    });

    setLeadSaved(true);
    setTimeout(() => {
      setShowLeadModal(false);
      setLeadSaved(false);
      setMessages((prev) => [
        ...prev,
        {
          id: 'l-' + Date.now(),
          sender: 'ai',
          text: `Thank you, ${leadForm.name}. Your details have been delivered to our engineering lead. We will reach out on ${leadForm.phone} shortly.`
        }
      ]);
    }, 1500);
  };

  const handleWhatsAppHandoff = () => {
    const text = 'Hello BK-DIGITAL, I was chatting with BK AI and would like to continue our discussion with an engineer.';
    openWhatsApp(settings.whatsappNumber, text);
  };

  const sampleQuestions = [
    'Can you build a custom CRM?',
    'How do you automate WhatsApp?',
    'Can you work with international clients?',
    'How long does development take?'
  ];

  return (
    <>
      {/* Discreet floating trigger next to WhatsApp */}
      <div className="fixed bottom-24 right-6 z-30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 rounded-full border border-neutral-700/80 bg-[#0B0E16]/95 px-3.5 py-2 text-xs font-semibold text-neutral-200 shadow-xl backdrop-blur-md hover:border-[#D4AF37] hover:text-[#FFF2C2] transition-all"
          aria-label="Open BK AI Assistant"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
            <Bot className="h-3.5 w-3.5" />
          </div>
          <span>BK AI</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#3DD68C]" />
        </button>
      </div>

      {/* Chat Window Drawer */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 z-40 w-full max-w-sm sm:max-w-md rounded-2xl border border-neutral-700/80 bg-[#090C14] shadow-2xl overflow-hidden flex flex-col h-[520px] transition-all">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-800 bg-[#06080E] px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#17140B] text-[#D4AF37]">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <span className="font-display text-xs font-bold text-white block">
                  BK AI Assistant
                </span>
                <span className="font-mono text-[9px] text-[#A6ADB8] block">
                  Grounded Knowledge Engine
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowLeadModal(true)}
                title="Leave Contact Details"
                className="rounded p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <UserPlus className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Lead Capture Modal Overlay */}
          {showLeadModal && (
            <div className="absolute inset-0 z-20 bg-[#090C14]/95 backdrop-blur-sm p-6 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display text-sm font-bold text-white">
                  Schedule Direct Engineering Call
                </h4>
                <button
                  onClick={() => setShowLeadModal(false)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {leadSaved ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-10 w-10 text-[#3DD68C] mx-auto mb-2" />
                  <p className="text-xs text-white font-medium">Details received. We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number *"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="email"
                    placeholder="Corporate Email"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="text"
                    placeholder="Company / Business Name"
                    value={leadForm.business}
                    onChange={(e) => setLeadForm({ ...leadForm, business: e.target.value })}
                    className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#D4AF37] py-2.5 text-xs font-bold text-black hover:bg-[#E5C158] transition-colors"
                  >
                    Submit Details
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#1E2536] text-white border border-neutral-700'
                      : 'bg-[#0E121B] text-neutral-200 border border-neutral-800'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-xl bg-[#0E121B] border border-neutral-800 p-3 text-neutral-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="p-2 border-t border-neutral-800/80 bg-[#07090F] overflow-x-auto flex gap-1.5 scrollbar-none">
            {sampleQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap rounded-md border border-neutral-800 bg-[#0B0E16] px-2.5 py-1 text-[10px] text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box & Action Handoffs */}
          <div className="p-3 border-t border-neutral-800 bg-[#06080E] space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about websites, software, AI..."
                className="flex-1 rounded-lg border border-neutral-800 bg-[#0A0D15] px-3 py-2 text-xs text-white placeholder-neutral-500 focus:border-[#D4AF37] focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37] text-black hover:bg-[#E5C158] transition-colors disabled:opacity-40 shrink-0"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Direct Handoff Quick Buttons */}
            <div className="flex items-center justify-between text-[11px] pt-1">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigateStartProject();
                }}
                className="text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-3 w-3" />
              </button>

              <button
                onClick={handleWhatsAppHandoff}
                className="text-[#25D366] hover:underline flex items-center gap-1 font-semibold"
              >
                <MessageSquare className="h-3 w-3" />
                <span>Talk on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
