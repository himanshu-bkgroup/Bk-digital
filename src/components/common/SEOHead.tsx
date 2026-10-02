import React, { useEffect } from 'react';

interface SEOHeadProps {
  currentPath: string;
}

interface RouteSEO {
  title: string;
  description: string;
  keywords?: string;
}

const ROUTE_SEO_MAP: Record<string, RouteSEO> = {
  '/': {
    title: 'Bhavkan Digital (BK-DIGITAL) | Top Website Development & Custom Software India',
    description: "Bhavkan Digital (BK-DIGITAL) is India's leading website development and custom software engineering studio. Led by Founder & CEO Himanshu Mishra, we build bespoke web apps, ERP systems, and AI automation.",
    keywords: 'Bhavkan Digital, BK-DIGITAL, website development, custom software, website development company in india, custom software development india, bespoke web applications',
  },
  '/services': {
    title: 'Website Development & Custom Software Services | Bhavkan Digital',
    description: 'Explore our full spectrum of digital engineering services: high-performance business websites, bespoke custom software, web applications, CRM systems, and AI automation by Bhavkan Digital.',
  },
  '/services/web-development': {
    title: 'Website Development Company in India | Bhavkan Digital (BK-DIGITAL)',
    description: 'High-converting, bespoke website development in India. Sub-second speed, technical SEO, mobile-first UX, and WhatsApp lead engines built by Bhavkan Digital.',
    keywords: 'Bhavkan Digital, website development company in india, best web development agency india, responsive website design, business website developer noida delhi ncr',
  },
  '/services/software-development': {
    title: 'Custom Software Development Company in India | Bhavkan Digital Engineering',
    description: 'Purpose-built custom software, ERPs, inventory portals, and operational management systems engineered strictly for your business workflows by Bhavkan Digital. Zero user seat fees.',
    keywords: 'Bhavkan Digital custom software, custom software development india, bespoke business software, enterprise application development, internal erp portal india',
  },
  '/services/web-applications': {
    title: 'Web Application Development Services India | Bhavkan Digital',
    description: 'Enterprise-grade web application engineering with role-based access control, PostgreSQL databases, and interactive leadership dashboards by Bhavkan Digital.',
  },
  '/services/ai-automation': {
    title: 'AI Automation & Intelligent Systems India | Bhavkan Digital',
    description: '24/7 autonomous AI agents, WhatsApp business automations, and operational workflows that eliminate manual work and scale revenue.',
  },
  '/services/crm-development': {
    title: 'Custom CRM & Dashboard Development India | Bhavkan Digital',
    description: 'Tailored CRM consoles, lead tracking pipelines, and operational control centers built specifically for your sales and management workflow.',
  },
  '/services/business-automation': {
    title: 'Business Automation & Workflow Integration | Bhavkan Digital',
    description: 'Connect your website, WhatsApp, CRM, and accounting into a seamless 24/7 automated business machine.',
  },
  '/services/ecommerce': {
    title: 'E-Commerce Store & Web Shop Development India | Bhavkan Digital',
    description: 'High-converting digital storefronts with instant UPI/Razorpay payments, automated inventory, and WhatsApp order dispatch.',
  },
  '/projects': {
    title: 'Software & Website Engineering Portfolio | Bhavkan Digital Case Studies',
    description: 'Review our portfolio of enterprise web applications, localized e-commerce, healthcare portals, and custom SaaS platforms across India.',
  },
  '/case-studies': {
    title: 'Case Studies & Client Results | Bhavkan Digital Software Studio',
    description: 'Detailed technical case studies showcasing how Bhavkan Digital delivers measurable commercial velocity, operational automation, and software architecture.',
  },
  '/about': {
    title: 'About Bhavkan Digital | Engineering Philosophy & Studio Values',
    description: 'Bhavkan Digital (BK-DIGITAL) is an elite digital engineering studio. We reject generic templates and disposable agencies to engineer enduring business software systems.',
  },
  '/owner': {
    title: 'Himanshu Mishra – Founder & CEO | Bhavkan Digital Leadership',
    description: 'Executive profile of Himanshu Mishra, Founder & Chief Executive Officer of Bhavkan Digital (BK-DIGITAL). Engineering high-performance websites and custom software architectures.',
  },
  '/founder': {
    title: 'Himanshu Mishra – Founder & CEO | Bhavkan Digital Leadership',
    description: 'Executive profile of Himanshu Mishra, Founder & Chief Executive Officer of Bhavkan Digital (BK-DIGITAL). Engineering high-performance websites and custom software architectures.',
  },
  '/leadership': {
    title: 'Himanshu Mishra – Founder & CEO | Bhavkan Digital Leadership',
    description: 'Executive profile of Himanshu Mishra, Founder & Chief Executive Officer of Bhavkan Digital (BK-DIGITAL). Engineering high-performance websites and custom software architectures.',
  },
  '/contact': {
    title: 'Contact Bhavkan Digital | Website Development & Software Consultations India',
    description: 'Connect directly with Himanshu Mishra and the Bhavkan Digital engineering team via WhatsApp (+91 72178 76220) or schedule a discovery session.',
  },
  '/start-project': {
    title: 'Start Your Software Project & Instant Estimator | Bhavkan Digital',
    description: 'Calculate your project scope, timeline, and architectural requirements with our interactive software estimator, and request a detailed proposal.',
  },
  '/faq': {
    title: 'Frequently Asked Questions | Bhavkan Digital Software Engineering',
    description: 'Answers to common questions regarding website development timelines, custom software costs, IP ownership, and WhatsApp integrations.',
  },
  '/admin': {
    title: 'Admin Command Console | Bhavkan Digital',
    description: 'Management console for Bhavkan Digital operations, inquiries, and site configuration.',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPath }) => {
  useEffect(() => {
    // Find matching SEO config
    let seo = ROUTE_SEO_MAP[currentPath];
    if (!seo && currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').trim();
      seo = {
        title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Services India | BK-DIGITAL`,
        description: `Bespoke digital engineering and software services for ${slug} across India and internationally. Built by BK-DIGITAL.`,
      };
    }

    if (!seo) {
      seo = ROUTE_SEO_MAP['/'];
    }

    // 1. Update Document Title
    document.title = seo.title;

    // 2. Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', seo.description);

    // 3. Update OG Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', window.location.href);
    }

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seo.description);

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + currentPath);
    }

    // 5. Sync Schema.org URL dynamically for Netlify domain
    try {
      const schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (schemaScript && schemaScript.textContent && window.location.origin) {
        const origin = window.location.origin;
        if (!schemaScript.textContent.includes(origin) && !origin.includes('localhost')) {
          schemaScript.textContent = schemaScript.textContent.replaceAll('https://bk-digital.com', origin);
        }
      }
    } catch {
      // Ignore if schema script is read-only
    }
  }, [currentPath]);

  return null;
};
