import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are "Bhavkan AI", the official intelligent assistant for Bhavkan Digital (BK-DIGITAL) (Digital Experiences. Intelligent Systems. Automated Growth).

COMPANY INFORMATION & GROUND RULES:
- Bhavkan Digital (BK-DIGITAL) is a modern digital technology and software development company.
- We do not simply "make websites". We build: Websites + Software + Automation + AI Systems that help businesses operate digitally.
- Leadership:
  - Founder & CEO: Himanshu Mishra. Leads strategy, software architecture, technical direction, and enterprise solutions delivery. Direct email: himanshu.bkgroup@gmail.com.
- Core Services:
  1. Website Development: High-performance, conversion-first, local & international SEO, WhatsApp integration.
  2. Web Applications: Role-based access, custom SaaS, internal portals, client management.
  3. AI Automation: 24/7 lead qualification, intelligent quotation/document generation, custom company chatbots.
  4. Business Automation: Connecting forms, CRM, WhatsApp, email, payment systems into unified pipelines.
  5. Custom Software Development: Built around exact business workflows (Gym management, Hospital/Clinic portals, ERP, inventory).
  6. E-Commerce Solutions: Fast checkouts, inventory synchronization, abandoned-cart WhatsApp recovery.
  7. CRM & Admin Dashboards: Pipeline management, follow-up tracking, lead scoring, export tools.
- Real Verified Projects:
  - Shakil Bag Store (Business catalog & local SEO enquiry engine with Supabase backend)
  - HM Gym (Gym SaaS, member management, trainer routine assignment)
  - Surya Hospital (Healthcare multispeciality portal, appointment booking triage)
  - Lab Test Noida (Pathology & diagnostic home collection lead generation)
  - Aura Luxury (Luxury wellness & aesthetic salon editorial reservation portal)
- Target Clients & Geography:
  - Small businesses, startups, established enterprises, healthcare clinics, gyms, salons, real estate, manufacturing, agencies.
  - Available for remote projects internationally (India, USA, UK, Canada, Australia, UAE).
- Development Timeline:
  - Standard bespoke websites: 2-3 weeks.
  - Custom web applications & CRM: 4-8 weeks.
- STRICT NEGATIVE CONSTRAINTS:
  - Never fabricate prices, clients, reviews, revenue numbers, or guarantees.
  - If asked about exact cost: explain that pricing depends on scope, offer to use the interactive Project Estimator or request a discovery consultation.
  - If unsure or asked about unrelated matters: "Please contact Bhavkan Digital (BK-DIGITAL) directly for confirmation."
  - Always stay professional, concise, technologically sophisticated, and helpful. Suggest "Start a Project" or "Talk on WhatsApp" when relevant.`;

// Grounded fallback response generator for offline or missing API key
function getLocalSmartResponse(userQuery: string): string {
  const q = userQuery.toLowerCase();

  if (q.includes('himanshu') || q.includes('founder') || q.includes('ceo') || q.includes('owner') || q.includes('who runs') || q.includes('leadership')) {
    return "**Himanshu Mishra** is the **Founder & CEO** of Bhavkan Digital (BK-DIGITAL). He leads the company's technical architecture, system design, and digital engineering vision. You can explore his full profile, technical philosophy, and direct communication channel on our **Founder / Leadership** page (/owner) or email him directly at himanshu.bkgroup@gmail.com.";
  }

  if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('rate')) {
    return "Our project investments are tailored to the exact requirements, technical integrations, and scope of your business. We don't believe in rigid one-size-fits-all packages. You can explore our interactive **Project Estimator** on the site to get an indicative range, or click **Start Your Project** to receive a detailed technical proposal.";
  }

  if (q.includes('crm') || q.includes('dashboard')) {
    return "Yes! Bhavkan Digital (BK-DIGITAL) specializes in custom CRM systems and admin dashboards. Rather than forcing your business to adapt to bloated generic platforms, we build lean, role-based command centers featuring lead pipelines, automated WhatsApp alerts, activity logs, and export tools tailored to your operational workflow.";
  }

  if (q.includes('whatsapp') || q.includes('automate whatsapp')) {
    return "Yes, WhatsApp automation is one of our flagship capabilities. We integrate official WhatsApp Business APIs to capture inbound website inquiries instantly, send automated confirmations to customers, notify your sales team in real-time, and trigger follow-ups.";
  }

  if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('bot')) {
    return "Bhavkan Digital (BK-DIGITAL) builds practical, value-driven AI automation systems. This includes 24/7 grounded conversational assistants, automated lead qualification, intelligent invoice & document extraction, and automatic proposal generators designed to save hundreds of manual hours.";
  }

  if (q.includes('how long') || q.includes('timeline') || q.includes('duration') || q.includes('time')) {
    return "Typical delivery timelines:\n• Bespoke business websites: 2 to 3 weeks.\n• Custom web applications and CRM systems: 4 to 8 weeks depending on feature scope and third-party API integrations.\n\nWe provide a clear milestone roadmap during our discovery and strategy phase.";
  }

  if (q.includes('international') || q.includes('usa') || q.includes('uk') || q.includes('dubai') || q.includes('uae') || q.includes('australia')) {
    return "Yes! Bhavkan Digital (BK-DIGITAL) operates globally and is structured specifically for remote collaboration with clients in the USA, UK, Canada, Australia, UAE, India, and other international markets. We ensure transparent milestone tracking and communication across time zones.";
  }

  if (q.includes('redesign') || q.includes('existing website') || q.includes('old website')) {
    return "Yes, we regularly perform complete website redesigns. We modernize outdated visual aesthetics, fix mobile usability issues, accelerate page load times to sub-second speeds, and re-engineer the conversion architecture so your website generates qualified inquiries.";
  }

  if (q.includes('project') || q.includes('portfolio') || q.includes('client') || q.includes('work')) {
    return "Our selected projects include:\n1. **SHAKIL BAG STORE** — Local SEO & catalog enquiry system.\n2. **HM GYM** — Gym management SaaS with member & workout tracking.\n3. **SURYA HOSPITAL** — Multispeciality clinical appointment portal.\n4. **LAB TEST NOIDA** — Pathology diagnostics acquisition system.\n5. **AURA LUXURY** — Luxury aesthetic salon VIP reservation experience.\n\nYou can explore deep-dive case studies in our **Selected Work** section.";
  }

  return "Bhavkan Digital (BK-DIGITAL) designs and engineers premium digital experiences, custom software, CRM dashboards, and AI automation systems. Would you like to **Start a Project**, try our **Project Estimator**, or **Talk on WhatsApp** with our team?";
}

export async function askBKAI(
  prompt: string,
  history: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = []
): Promise<string> {
  // Check if API key is present in environment
  const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || 
                 (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GEMINI_API_KEY);

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    // Graceful intelligent fallback grounded in verified company facts
    return getLocalSmartResponse(prompt);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUser Question: ${prompt}` }]
        }
      ],
    });

    const reply = response.text?.trim();
    if (reply) return reply;
    return getLocalSmartResponse(prompt);
  } catch (error) {
    console.warn('Gemini API call fallback:', error);
    return getLocalSmartResponse(prompt);
  }
}
