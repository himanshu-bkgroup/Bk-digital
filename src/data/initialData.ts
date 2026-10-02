import { Project, Service, SiteSettings } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'shakil-bag-store',
    slug: 'shakil-bag-store',
    name: 'SHAKIL BAG STORE',
    client: 'Shakil Bags & Leather Works',
    type: 'Business Website & Enquiry Engine',
    industry: 'Retail & Manufacturing',
    year: '2025',
    featured: true,
    image: '/src/assets/images/project_shakil_bags_1790473414714.jpg',
    summary: 'High-conversion business platform with local SEO optimization, catalog showcase, and automated WhatsApp enquiry capture.',
    challenge: 'A growing leather goods manufacturer needed to transition from fragmented offline phone inquiries to an organized digital catalog that captured qualified trade and retail buyers in their target geographic zone.',
    strategy: 'Architected a mobile-first digital showroom structured around high-intent local search keywords, instant WhatsApp enquiry pre-fills with specific product context, and a Supabase backend to log every lead record.',
    solution: 'Designed and deployed a responsive web catalog backed by Supabase PostgreSQL, featuring dedicated category pages, dynamic inquiry routing, and an internal admin dashboard for tracking inbound interest.',
    features: [
      'Responsive product and service showcase catalog',
      'Location-targeted SEO architecture for regional search capture',
      'Instant contextual WhatsApp enquiry trigger with item pre-fill',
      'Supabase database integration for enquiry logging',
      'Owner admin dashboard for lead and product management',
      'Fast CDN delivery with sub-second page loads'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'WhatsApp API'],
    resultsNote: 'Project delivered with the implemented features shown above.',
    liveUrl: 'https://shakilbagstore.example.com',
    displayOrder: 1,
  },
  {
    id: 'hm-gym',
    slug: 'hm-gym',
    name: 'HM GYM',
    client: 'HM Fitness & Athletic Club',
    type: 'Gym SaaS & Membership Platform',
    industry: 'Fitness & Health',
    year: '2025',
    featured: true,
    image: '/src/assets/images/project_hm_gym_1790473428032.jpg',
    summary: 'All-in-one gym management SaaS platform featuring owner control console, active member tracking, and personalized workout assignments.',
    challenge: 'The fitness club was managing member subscriptions and trainer routines across paper logbooks and messaging apps, leading to expired memberships and disjointed member communication.',
    strategy: 'Engineered a centralized web application providing segregated views for the gym owner, trainers, and members with role-based authentication and real-time subscription status.',
    solution: 'Built a full-featured management web application with biometric/profile status indicators, automated membership expiration flags, workout routine builders, and attendance tracking.',
    features: [
      'Gym owner centralized command dashboard',
      'Member profiles with membership duration and renewal status',
      'Custom workout creation and exercise routine assignment',
      'Secure multi-role authentication (Admin / Trainer / Member)',
      'Operational analytics on peak hours and active memberships',
      'Mobile-optimized trainer interface for floor updates'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'],
    resultsNote: 'Project delivered with the implemented features shown above.',
    liveUrl: 'https://hmgym.example.com',
    displayOrder: 2,
  },
  {
    id: 'surya-hospital',
    slug: 'surya-hospital',
    name: 'SURYA HOSPITAL',
    client: 'Surya Multispeciality Healthcare',
    type: 'Healthcare Portal & Lead Engine',
    industry: 'Healthcare & Clinical',
    year: '2025',
    featured: true,
    image: '/src/assets/images/project_surya_hospital_1790473439892.jpg',
    summary: 'Modern multispeciality hospital website designed for patient trust, department exploration, and appointment booking triage.',
    challenge: 'Patients struggled to locate specific specialists, understand outpatient timings, and book urgent consultations through traditional busy hospital telephone switchboards.',
    strategy: 'Structured an accessible, high-contrast healthcare interface prioritizing medical departments, doctor credentials, and dual-channel lead collection (online appointment form + emergency WhatsApp link).',
    solution: 'Engineered a comprehensive healthcare web presence with specialized clinical department profiles, doctor rosters, intelligent triage lead routing, and direct hospital reception integration.',
    features: [
      'Clinical department directories with doctor schedules',
      'Structured outpatient appointment booking system',
      'Emergency one-tap WhatsApp and phone triage links',
      'Accessibility-focused WCAG-compliant design layout',
      'Hospital announcements and health advisory portal',
      'Secure database logging for patient inquiry follow-up'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST APIs'],
    resultsNote: 'Project delivered with the implemented features shown above.',
    liveUrl: 'https://suryahospital.example.com',
    displayOrder: 3,
  },
  {
    id: 'lab-test-noida',
    slug: 'lab-test-noida',
    name: 'LAB TEST NOIDA',
    client: 'Noida Clinical Diagnostics',
    type: 'Diagnostic Lead Generation System',
    industry: 'Medical Diagnostics',
    year: '2024',
    featured: true,
    image: '/src/assets/images/project_surya_hospital_1790473439892.jpg',
    summary: 'Localized diagnostic package portal capturing home sample collection inquiries with automated WhatsApp lead notifications.',
    challenge: 'A pathology laboratory required a fast digital acquisition funnel to compete against aggregator apps for preventive health checkups and blood test bookings in Noida.',
    strategy: 'Developed focused landing pages for top health packages with transparent pricing, home collection time-slot selectors, and instant notification dispatch to collection phlebotomists.',
    solution: 'Built an optimized lead capture engine highlighting test parameters, turnaround times, and verified lab accreditations with dual automated notification channels.',
    features: [
      'Comprehensive test directory and health package comparison',
      'Location-targeted landing experience for Noida sectors',
      'Home collection time-slot booking form',
      'Direct WhatsApp order confirmation dispatch',
      'Admin enquiry pipeline with customer status flags',
      'High-speed mobile performance with instant page rendering'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API', 'Supabase'],
    resultsNote: 'Project delivered with the implemented features shown above.',
    liveUrl: 'https://labtestnoida.example.com',
    displayOrder: 4,
  },
  {
    id: 'aura-luxury',
    slug: 'aura-luxury',
    name: 'AURA LUXURY',
    client: 'Aura Luxury Wellness & Aesthetic Salon',
    type: 'Premium Beauty & Aesthetic Portal',
    industry: 'Luxury Beauty & Wellness',
    year: '2024',
    featured: true,
    image: '/src/assets/images/project_aura_luxury_1790473450626.jpg',
    summary: 'Editorial-grade visual brand experience and VIP appointment reservation platform for an upscale wellness atelier.',
    challenge: 'The brand needed an online presence that matched the tactile opulence of their physical aesthetic lounge and positioned them as an elite luxury destination.',
    strategy: 'Crafted an atmospheric, dark-mode visual interface with subtle champagne metallic accents, editorial photography grids, and an intuitive concierge booking journey.',
    solution: 'Delivered an immersive brand experience featuring treatment rituals, specialist profiles, curated lookbooks, and VIP consultation scheduling.',
    features: [
      'Haute-couture dark aesthetic with champagne gold accents',
      'Interactive beauty treatment ritual directory with duration & details',
      'Concierge booking request flow with VIP preferences',
      'Smooth micro-animations and editorial typography',
      'Mobile-first appointment scheduling experience',
      'Private client inquiries linked directly to studio concierge'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    resultsNote: 'Project delivered with the implemented features shown above.',
    liveUrl: 'https://auraluxury.example.com',
    displayOrder: 5,
  }
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Website Development',
    tagline: 'High-performance digital flagships engineered for conversion and authority.',
    description: 'We build bespoke, conversion-architected business websites that elevate your brand reputation, achieve rapid search rankings, and convert casual visitors into qualified inquiries.',
    deliverables: [
      'Custom visual architecture and UI/UX design',
      'Mobile-first responsive development for all screen viewports',
      'Local & international technical SEO optimization',
      'Contextual WhatsApp and CRM inquiry integration',
      'Lightning-fast page speeds (95+ Google Lighthouse target)',
      'Content management system (CMS) setup and training'
    ],
    ctaLabel: 'Build My Website',
    ctaActionType: 'website',
    category: 'core',
    iconName: 'Globe',
  },
  {
    id: 'web-applications',
    slug: 'web-applications',
    title: 'Web Applications',
    tagline: 'Cloud applications tailored to unique enterprise business workflows.',
    description: 'Transform complex business logic into secure, intuitive web applications. From customer portals to internal operational systems, we build software that scales reliably.',
    deliverables: [
      'Role-based access control (RBAC) and user management',
      'Custom dashboards, data tables, and analytics reports',
      'Real-time data synchronization and live status feeds',
      'Cloud backend APIs and relational database architecture',
      'Third-party software and payment integrations',
      'Automated data validation and export systems'
    ],
    ctaLabel: 'Build My Application',
    ctaActionType: 'webapp',
    category: 'software',
    iconName: 'Layers',
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Intelligent automation systems that work 24/7 without manual intervention.',
    description: 'Eliminate repetitive manual busywork by integrating state-of-the-art AI into your operational pipeline. From 24/7 lead qualification to automated proposal generation.',
    deliverables: [
      'Conversational AI assistants grounded strictly in your business data',
      'Automated lead qualification and inquiry scoring',
      'AI-powered proposal, quotation, and contract drafting',
      'Intelligent document extraction and invoice parsing',
      'Internal knowledge base chatbots for team productivity',
      'Continuous workflow telemetry and response logging'
    ],
    ctaLabel: 'Automate My Business',
    ctaActionType: 'ai',
    category: 'automation',
    iconName: 'Cpu',
  },
  {
    id: 'business-automation',
    slug: 'business-automation',
    title: 'Business Automation',
    tagline: 'Connect your tools, unify your data, and automate daily tasks.',
    description: 'Bridge the gap between your website, WhatsApp, email, CRM, and accounting. We orchestrate reliable automated workflows that save hundreds of hours each month.',
    deliverables: [
      'End-to-end multi-channel lead capture pipelines',
      'Automated WhatsApp notifications for team and customers',
      'CRM synchronization across HubSpot, Zoho, or custom databases',
      'Automated appointment reminders and scheduling synchronization',
      'Invoice generation and payment confirmation dispatch',
      'Zapier, Make, and custom webhook pipeline engineering'
    ],
    ctaLabel: 'Automate My Workflow',
    ctaActionType: 'automation',
    category: 'automation',
    iconName: 'GitBranch',
  },
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Custom Software Development',
    tagline: 'Purpose-built software when off-the-shelf tools fail your operations.',
    description: 'When standard commercial software cannot handle your proprietary business process, we design, build, and maintain software engineered specifically for your business.',
    deliverables: [
      'Comprehensive system architecture and domain modeling',
      'Scalable backend engines with PostgreSQL or Supabase',
      'Custom ERP, inventory, and order management software',
      'Internal administrative tools and staff activity portals',
      'High-security data encryption and backup protocols',
      'Production deployment and ongoing technical SLA'
    ],
    ctaLabel: 'Build Custom Software',
    ctaActionType: 'software',
    category: 'software',
    iconName: 'Code',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-Commerce Solutions',
    tagline: 'Modern digital storefronts engineered for high average order values.',
    description: 'Deliver smooth purchasing experiences with fast mobile checkouts, automated inventory sync, abandoned cart recovery, and WhatsApp order tracking.',
    deliverables: [
      'Custom storefront UI with intuitive product discovery',
      'Seamless multi-gateway payment integration (Razorpay, Stripe, UPI)',
      'Automated abandoned-cart recovery on WhatsApp and email',
      'Real-time inventory and shipping carrier synchronization',
      'Customer accounts, order history, and re-order triggers',
      'Administrative sales dashboard with conversion metrics'
    ],
    ctaLabel: 'Build My Store',
    ctaActionType: 'ecommerce',
    category: 'core',
    iconName: 'ShoppingBag',
  },
  {
    id: 'crm-development',
    slug: 'crm-development',
    title: 'CRM & Admin Dashboards',
    tagline: 'Command centers that give leadership complete visibility and control.',
    description: 'Take control of every lead, client account, deal stage, and team metric with tailor-made CRM consoles designed for your exact sales and operational process.',
    deliverables: [
      'Custom lead pipeline stages tailored to your sales funnel',
      'Activity timelines, call notes, and follow-up reminders',
      'Visual performance dashboards and conversion analytics',
      'Direct WhatsApp and email outreach from the dashboard',
      'Granular team permissions and territory assignment',
      'One-click data export to Excel, CSV, and financial software'
    ],
    ctaLabel: 'Build My CRM',
    ctaActionType: 'crm',
    category: 'software',
    iconName: 'LayoutDashboard',
  }
];

export const INITIAL_SETTINGS: SiteSettings = {
  companyName: 'Bhavkan Digital (BK-DIGITAL)',
  tagline: 'Digital Experiences. Intelligent Systems. Automated Growth.',
  whatsappNumber: '917217876220',
  whatsappDisplay: '+91 72178 76220',
  contactEmail: 'himanshu.bkgroup@gmail.com',
  contactPhone: '+91 72178 76220',
  officeCity: 'Noida / Delhi NCR, India',
  internationalCoverage: ['India', 'USA', 'UK', 'Canada', 'Australia', 'UAE'],
  adminPin: '2026',
};

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'DISCOVER',
    title: 'Understand the Business',
    description: 'We dissect your business model, customer touchpoints, commercial objectives, and current operational bottlenecks before writing a line of code.'
  },
  {
    number: '02',
    name: 'STRATEGY',
    title: 'Plan the System Architecture',
    description: 'We blueprint the technical stack, database schema, user flows, integration endpoints, and conversion paths for long-term scalability.'
  },
  {
    number: '03',
    name: 'DESIGN',
    title: 'Create the Visual Experience',
    description: 'We construct high-fidelity interactive interfaces featuring refined typography, dark cinematic aesthetics, and intuitive ergonomic interactions.'
  },
  {
    number: '04',
    name: 'DEVELOP',
    title: 'Build the Actual System',
    description: 'Clean, type-safe, modular code written with React, TypeScript, and modern backend architectures adhering to strict enterprise standards.'
  },
  {
    number: '05',
    name: 'CONNECT',
    title: 'Integrate APIs & Automations',
    description: 'We link your database, WhatsApp triggers, CRM workflows, payment processors, and AI agents into a synchronized business pipeline.'
  },
  {
    number: '06',
    name: 'TEST',
    title: 'Performance & Security Audits',
    description: 'Rigorous cross-device testing, latency benchmarking, load testing, security review, and edge-case validation across viewports.'
  },
  {
    number: '07',
    name: 'LAUNCH',
    title: 'Deploy to Production',
    description: 'Zero-downtime deployment, DNS configuration, SSL provisioning, Google Search Console indexing, and analytics initialization.'
  },
  {
    number: '08',
    name: 'SCALE',
    title: 'Add Automation & Intelligence',
    description: 'Continuous performance optimization, feature additions, automated reporting, and proactive maintenance to support your ongoing growth.'
  }
];

export const TECH_STACK = [
  { name: 'React', category: 'Frontend', note: 'Component-driven UI architecture' },
  { name: 'TypeScript', category: 'Language', note: 'Strict compile-time type safety' },
  { name: 'Next.js', category: 'Fullstack', note: 'Server rendering & modern routing' },
  { name: 'Node.js', category: 'Backend', note: 'Scalable runtime environment' },
  { name: 'Python', category: 'AI & Data', note: 'Automation scripts & AI pipelines' },
  { name: 'FastAPI', category: 'Backend', note: 'High-throughput microservices' },
  { name: 'Supabase', category: 'Database', note: 'Managed PostgreSQL & Auth' },
  { name: 'PostgreSQL', category: 'Database', note: 'Relational enterprise storage' },
  { name: 'MongoDB', category: 'Database', note: 'Flexible document stores' },
  { name: 'Gemini', category: 'AI Engine', note: 'Multi-modal reasoning & processing' },
  { name: 'WhatsApp APIs', category: 'Automation', note: 'Official Business messaging' },
  { name: 'Stripe', category: 'Payments', note: 'Global card & recurring billing' },
  { name: 'Razorpay', category: 'Payments', note: 'India UPI & net banking stack' },
  { name: 'Cloudflare', category: 'Edge CDN', note: 'Global edge security & speed' }
];

export const FAQS = [
  {
    question: 'How is Bhavkan Digital (BK-DIGITAL) different from a generic web agency?',
    answer: 'Traditional agencies treat websites as isolated brochures that sit stagnant online. Bhavkan Digital (BK-DIGITAL) approaches your business from an engineering perspective: we connect your website directly to your sales pipeline, WhatsApp triggers, CRM database, and AI automation. Your website becomes the active operational front door of an automated business machine.'
  },
  {
    question: 'Can you work with international clients outside India?',
    answer: 'Yes. We are structured specifically for seamless remote collaboration with clients across the USA, UK, Canada, Australia, UAE, India, and other international markets. We handle project management, milestone reviews, and communication across time zones with transparent progress demos.'
  },
  {
    question: 'How long does a typical project take to develop and launch?',
    answer: 'Standard bespoke business websites are typically delivered within 2 to 3 weeks. Custom web applications, CRM platforms, and full automation pipelines range from 4 to 8 weeks depending on the complexity of the feature set and third-party integrations.'
  },
  {
    question: 'Can you redesign and modernize our existing website?',
    answer: 'Absolutely. We frequently redesign legacy websites that suffer from outdated visual design, slow mobile load times, weak conversion rates, or broken backend systems. We preserve your existing domain equity while completely re-engineering the UX, speed, and backend integration.'
  },
  {
    question: 'Do you provide custom software if off-the-shelf SaaS doesn\'t fit our workflow?',
    answer: 'Yes. Building bespoke software around unique operational workflows is one of our primary core disciplines. We build gym management systems, clinical triage portals, internal ERPs, quotation generators, and inventory systems tailored to the exact way your company runs.'
  },
  {
    question: 'How do you integrate WhatsApp into our website and business process?',
    answer: 'We configure both direct contextual click-to-chat links with pre-filled product/service details as well as automated WhatsApp Business API webhooks. When an inquiry comes in, your team receives an instant notification, and the customer receives an immediate confirmation with next steps.'
  }
];
