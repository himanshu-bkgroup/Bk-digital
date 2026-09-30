import React, { useState } from 'react';
import {
  FileText, Bot, Compass, Database, MessageSquare, Mail, Bell,
  Calendar, CreditCard, UserCheck, Play, Plus, Trash2, CheckCircle2,
  Zap, ArrowRight
} from 'lucide-react';

const WORKFLOW_NODES = [
  { id: '1', title: 'Customer Submits Form', icon: FileText, category: 'Trigger', detail: 'Inbound lead submits project requirement or quote request via website' },
  { id: '2', title: 'AI Reads Requirement', icon: Bot, category: 'AI Intelligence', detail: 'Gemini model parses budget, urgency, industry, and project scope' },
  { id: '3', title: 'Lead Classified', icon: Compass, category: 'Logic', detail: 'Lead categorized into High Intent, Mid Market, or Custom Enterprise' },
  { id: '4', title: 'CRM Record Created', icon: Database, category: 'Database', detail: 'Contact created in Supabase PostgreSQL with tags & timestamps' },
  { id: '5', title: 'WhatsApp Notification', icon: MessageSquare, category: 'Communication', detail: 'Instant WhatsApp message sent to customer acknowledging inquiry' },
  { id: '6', title: 'Sales Team Notified', icon: Bell, category: 'Internal Alert', detail: 'Instant Slack / WhatsApp alert dispatched to senior project engineer' },
  { id: '7', title: 'Follow-up Scheduled', icon: Calendar, category: 'Scheduler', detail: 'Automated 24h follow-up calendar event created in scheduling queue' },
  { id: '8', title: 'Proposal Generated', icon: FileText, category: 'AI Automation', detail: 'Dynamic PDF proposal with scope and cost estimates rendered automatically' },
  { id: '9', title: 'Payment Received', icon: CreditCard, category: 'Billing', detail: 'Stripe or Razorpay invoice paid and recorded in ledger' },
  { id: '10', title: 'Onboarding Started', icon: UserCheck, category: 'Completion', detail: 'Client portal access created and engineering repository initialized' },
];

export const AutomationShowcase: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  const [selectedNode, setSelectedNode] = useState(WORKFLOW_NODES[1]); // default AI
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [activeSimIndex, setActiveSimIndex] = useState<number | null>(null);

  // Interactive Demo Builder State
  const [builderNodes, setBuilderNodes] = useState<string[]>([
    'Website Lead Trigger',
    'AI Qualification Engine',
    'WhatsApp Client Confirmation',
    'CRM Opportunity Created'
  ]);

  const runSimulation = () => {
    if (simulationRunning) return;
    setSimulationRunning(true);
    setActiveSimIndex(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < WORKFLOW_NODES.length) {
        setActiveSimIndex(current);
        setSelectedNode(WORKFLOW_NODES[current]);
      } else {
        clearInterval(interval);
        setSimulationRunning(false);
        setActiveSimIndex(null);
      }
    }, 700);
  };

  const addBuilderBlock = (type: string) => {
    if (builderNodes.length < 7) {
      setBuilderNodes([...builderNodes, type]);
    }
  };

  const removeBuilderBlock = (index: number) => {
    setBuilderNodes(builderNodes.filter((_, idx) => idx !== index));
  };

  return (
    <section id="automation" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#040507] border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
            Autonomous Workflows
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            YOUR BUSINESS SHOULD NOT HAVE TO DO EVERYTHING MANUALLY.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Transform repetitive administrative drag into synchronized automated sequences that run 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* AI Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="rounded-xl border border-neutral-800/80 bg-[#090C13] p-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase">01 · Intelligence</span>
            <h3 className="font-display text-lg font-bold text-white mt-1">AI Lead Qualification</h3>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              AI evaluates incoming inquiries, assesses urgency, budget range, and assigns priority to your sales engineers instantly.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800/80 bg-[#090C13] p-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase">02 · Support</span>
            <h3 className="font-display text-lg font-bold text-white mt-1">24/7 AI Customer Support</h3>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              Domain-grounded conversational assistants answer technical questions, explain capabilities, and schedule consultations around the clock.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800/80 bg-[#090C13] p-6">
            <span className="text-xs font-mono text-[#D4AF37] uppercase">03 · Documents</span>
            <h3 className="font-display text-lg font-bold text-white mt-1">AI Document & Quote Generation</h3>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              Generate structured proposals, service agreements, and invoices from raw project notes in seconds rather than hours.
            </p>
          </div>
        </div>

        {/* Visual Workflow Builder Animation */}
        <div className="rounded-2xl border border-neutral-700/80 bg-[#07090F] p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-neutral-800/80 pb-6">
            <div>
              <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider">
                Interactive Pipeline Architecture
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-0.5">
                Live End-to-End Autonomous Pipeline
              </h3>
            </div>

            <button
              onClick={runSimulation}
              disabled={simulationRunning}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                simulationRunning
                  ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                  : 'bg-[#D4AF37] text-black hover:bg-[#E5C158] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
              }`}
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>{simulationRunning ? 'Simulating Pipeline...' : 'Test Full Workflow'}</span>
            </button>
          </div>

          {/* Workflow Nodes Grid with Connection Lines */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {WORKFLOW_NODES.map((node, index) => {
              const isSelected = selectedNode.id === node.id;
              const isSimulating = activeSimIndex === index;
              const Icon = node.icon;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`relative flex flex-col text-left p-3.5 rounded-xl border transition-all duration-300 ${
                    isSimulating
                      ? 'border-[#3DD68C] bg-[#0E1F16] shadow-[0_0_20px_rgba(61,214,140,0.4)] scale-105 z-20'
                      : isSelected
                      ? 'border-[#D4AF37] bg-[#17140B] shadow-[0_0_15px_rgba(212,175,55,0.25)] z-10'
                      : 'border-neutral-800/80 bg-[#090C14] text-neutral-400 hover:border-neutral-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-neutral-400">
                      #{index + 1}
                    </span>
                    <Icon className={`h-4 w-4 ${isSimulating ? 'text-[#3DD68C]' : isSelected ? 'text-[#D4AF37]' : 'text-neutral-500'}`} />
                  </div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400 truncate">
                    {node.category}
                  </span>
                  <span className={`font-display text-xs font-bold mt-1 line-clamp-2 ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                    {node.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Inspector Panel for Selected Node */}
          <div className="mt-8 rounded-xl border border-neutral-800 bg-[#05060A] p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#14120A] text-[#D4AF37] shrink-0 mt-0.5">
                <selectedNode.icon className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-[#D4AF37] tracking-wider">
                  {selectedNode.category} Node
                </span>
                <h4 className="font-display text-base font-bold text-white">
                  {selectedNode.title}
                </h4>
                <p className="text-xs text-neutral-300 mt-1 max-w-xl">
                  {selectedNode.detail}
                </p>
              </div>
            </div>

            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-500 transition-colors shrink-0"
            >
              <span>Automate This Step</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Interactive Automation Builder Demo */}
          <div className="mt-12 border-t border-neutral-800/80 pt-8">
            <div className="mb-4">
              <span className="font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider block">
                Interactive Automation Builder Demo
              </span>
              <h4 className="font-display text-lg font-bold text-white">
                Assemble Your Custom Operations Blueprint
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Click any tool block below to inject it into your automated pipeline:
              </p>
            </div>

            {/* Block Triggers */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'AI Lead Scorer',
                'WhatsApp Follow-up',
                'CRM Deal Stage Update',
                'Auto Invoice Generation',
                'Calendar Booking Sync',
                'Slack Executive Alert'
              ].map((tool) => (
                <button
                  key={tool}
                  onClick={() => addBuilderBlock(tool)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-[#0E121B] px-3 py-1.5 text-xs text-neutral-300 hover:border-[#D4AF37] hover:text-[#FFF0BD] transition-colors"
                >
                  <Plus className="h-3 w-3 text-[#D4AF37]" />
                  <span>{tool}</span>
                </button>
              ))}
            </div>

            {/* Assembled Pipeline */}
            <div className="rounded-xl border border-neutral-800 bg-[#0A0D15] p-4">
              <div className="flex flex-wrap items-center gap-2">
                {builderNodes.map((bNode, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex items-center gap-2 rounded-lg border border-[#D4AF37]/30 bg-[#16130B] px-3 py-1.5 text-xs font-medium text-[#F3E5AB]">
                      <span>{bNode}</span>
                      <button
                        onClick={() => removeBuilderBlock(idx)}
                        className="text-neutral-500 hover:text-red-400 ml-1"
                        aria-label="Remove node"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                    {idx < builderNodes.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-neutral-600 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
