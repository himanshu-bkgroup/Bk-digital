export interface Project {
  id: string;
  slug: string;
  name: string;
  client: string;
  type: string;
  industry: string;
  year: string;
  featured: boolean;
  image: string;
  summary: string;
  challenge: string;
  strategy: string;
  solution: string;
  features: string[];
  technologies: string[];
  resultsNote: string;
  liveUrl?: string;
  displayOrder: number;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  ctaLabel: string;
  ctaActionType: string;
  category: 'core' | 'automation' | 'software';
  iconName: string;
}

export interface Lead {
  id: string;
  createdAt: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  businessType: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  features: string[];
  currentWebsite?: string;
  referenceWebsites?: string;
  notes?: string;
  status: 'new' | 'contacted' | 'in_review' | 'closed';
  source: 'project_form' | 'estimator' | 'chatbot' | 'whatsapp';
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  whatsappNumber: string; // international format without spaces e.g. 919876543210
  whatsappDisplay: string;
  contactEmail: string;
  contactPhone: string;
  officeCity: string;
  internationalCoverage: string[];
  adminPin: string;
}

export interface AnalyticsEvent {
  id: string;
  timestamp: string;
  type: 'page_view' | 'whatsapp_click' | 'project_view' | 'form_submission' | 'estimator_used' | 'chat_interaction';
  details?: string;
}
