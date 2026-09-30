import { Project, Service, Lead, SiteSettings, AnalyticsEvent } from '../types';
import { INITIAL_PROJECTS, INITIAL_SERVICES, INITIAL_SETTINGS } from '../data/initialData';
import { sanitizeWhatsAppNumber } from './whatsapp';

const STORAGE_KEYS = {
  PROJECTS: 'bk_projects_v1',
  SERVICES: 'bk_services_v1',
  LEADS: 'bk_leads_v1',
  SETTINGS: 'bk_settings_v1',
  ANALYTICS: 'bk_analytics_v1',
};

// Safe storage wrapper
function getStored<T>(key: string, fallback: T): T {
  try {
    const val = localStorage.getItem(key);
    if (!val) return fallback;
    return JSON.parse(val) as T;
  } catch {
    return fallback;
  }
}

function setStored<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Storage write error:', e);
  }
}

// Initial sample leads for admin demonstration
const SEED_LEADS: Lead[] = [
  {
    id: 'lead-1',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    name: 'Vikram Malhotra',
    company: 'Malhotra Logistics',
    email: 'vikram@malhotralogistics.in',
    phone: '+91 98112 44556',
    country: 'India',
    businessType: 'Logistics & Supply Chain',
    projectType: 'Web Applications & CRM',
    budgetRange: '₹1.5L - ₹3L',
    timeline: '4-6 weeks',
    features: ['Custom Dispatch Dashboard', 'WhatsApp Driver Notifications', 'Customer Tracking Portal'],
    status: 'new',
    source: 'project_form',
    notes: 'Interested in replacing spreadsheet dispatch with automated web app.'
  },
  {
    id: 'lead-2',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    name: 'David Reynolds',
    company: 'Apex Health Partners',
    email: 'david@apexhealthpartners.co.uk',
    phone: '+44 7700 900123',
    country: 'UK',
    businessType: 'Healthcare Consultancy',
    projectType: 'AI Automation & Web App',
    budgetRange: '£3,000 - £6,000',
    timeline: '2-4 weeks',
    features: ['Client Portal', 'AI Document Extraction', 'Appointment Booking'],
    status: 'contacted',
    source: 'estimator',
    notes: 'Requested consultation call regarding international remote development.'
  }
];

export const Storage = {
  // Projects
  getProjects(): Project[] {
    const projects = getStored<Project[]>(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
    return projects.sort((a, b) => a.displayOrder - b.displayOrder);
  },

  saveProjects(projects: Project[]): void {
    setStored(STORAGE_KEYS.PROJECTS, projects);
  },

  getProjectBySlug(slug: string): Project | undefined {
    return this.getProjects().find(p => p.slug === slug);
  },

  // Services
  getServices(): Service[] {
    return getStored<Service[]>(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
  },

  saveServices(services: Service[]): void {
    setStored(STORAGE_KEYS.SERVICES, services);
  },

  getServiceBySlug(slug: string): Service | undefined {
    return this.getServices().find(s => s.slug === slug);
  },

  // Leads
  getLeads(): Lead[] {
    return getStored<Lead[]>(STORAGE_KEYS.LEADS, SEED_LEADS);
  },

  addLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>): Lead {
    const leads = this.getLeads();
    const newLead: Lead = {
      ...leadData,
      id: 'lead-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    const updated = [newLead, ...leads];
    setStored(STORAGE_KEYS.LEADS, updated);
    this.trackEvent('form_submission', `Lead received: ${leadData.name} (${leadData.projectType})`);
    return newLead;
  },

  updateLeadStatus(id: string, status: Lead['status'], notes?: string): void {
    const leads = this.getLeads().map(l => {
      if (l.id === id) {
        return { ...l, status, notes: notes !== undefined ? notes : l.notes };
      }
      return l;
    });
    setStored(STORAGE_KEYS.LEADS, leads);
  },

  deleteLead(id: string): void {
    const leads = this.getLeads().filter(l => l.id !== id);
    setStored(STORAGE_KEYS.LEADS, leads);
  },

  // Settings
  getSettings(): SiteSettings {
    const s = getStored<SiteSettings>(STORAGE_KEYS.SETTINGS, INITIAL_SETTINGS);
    // Sanitize any malformed, legacy, or outdated numbers
    const cleanNumber = sanitizeWhatsAppNumber(s.whatsappNumber);
    if (
      !s.whatsappNumber ||
      s.whatsappNumber === '919876543210' ||
      s.whatsappNumber !== cleanNumber ||
      s.whatsappDisplay === '+91 98765 43210'
    ) {
      s.whatsappNumber = cleanNumber;
      if (cleanNumber === '917217876220') {
        s.whatsappDisplay = '+91 72178 76220';
        s.contactPhone = '+91 72178 76220';
      }
      setStored(STORAGE_KEYS.SETTINGS, s);
    }
    return s;
  },

  saveSettings(settings: SiteSettings): void {
    const sanitized: SiteSettings = {
      ...settings,
      whatsappNumber: sanitizeWhatsAppNumber(settings.whatsappNumber),
    };
    setStored(STORAGE_KEYS.SETTINGS, sanitized);
  },

  // Analytics Events
  getAnalytics(): AnalyticsEvent[] {
    return getStored<AnalyticsEvent[]>(STORAGE_KEYS.ANALYTICS, [
      { id: 'ev-1', timestamp: new Date(Date.now() - 3600000 * 3).toISOString(), type: 'page_view', details: 'Home flagship' },
      { id: 'ev-2', timestamp: new Date(Date.now() - 3600000 * 2).toISOString(), type: 'project_view', details: 'HM Gym case study' },
      { id: 'ev-3', timestamp: new Date(Date.now() - 3600000 * 1).toISOString(), type: 'whatsapp_click', details: 'Context: Website Development' }
    ]);
  },

  trackEvent(type: AnalyticsEvent['type'], details?: string): void {
    const events = this.getAnalytics();
    const newEvent: AnalyticsEvent = {
      id: 'ev-' + Date.now(),
      timestamp: new Date().toISOString(),
      type,
      details,
    };
    // Keep last 150 events
    const updated = [newEvent, ...events.slice(0, 149)];
    setStored(STORAGE_KEYS.ANALYTICS, updated);
  }
};
