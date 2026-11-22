import type { SiteRecord } from '../types/site';

export const mockSites: Record<string, SiteRecord> = {
  'demo-clinic': {
    id: 'mock-1',
    slug: 'demo-clinic',
    template_id: 'modern',
    is_published: true,
    content: {
      businessName: 'Arogya Dental & Skin Care',
      tagline: 'Gentle, Pain-Free Dental & Aesthetic Treatments in Kalyan West',
      category: 'MedicalClinic',
      about:
        'Led by experienced specialists with over 12 years of clinical practice, Arogya Dental & Skin Care combines modern digital diagnostics with personalized patient care.',
      themeColor: '#0f766e',
      phone: '+91 98200 12345',
      whatsappNumber: '919820012345',
      email: 'care@arogyaclinic.in',
      address: '204, Emerald Plaza, Near Station Road, Kalyan West',
      city: 'Kalyan, Maharashtra',
      googleMapsUrl: 'https://maps.google.com/?q=Kalyan+West',
      services: [
        {
          title: 'Root Canal & Crown Restoration',
          description: 'Single-sitting painless rotary endodontics with ceramic crowns.',
          price: 'From ₹3,500',
        },
        {
          title: 'Teeth Whitening & Smile Design',
          description: 'Laser teeth whitening and invisible aligner consultations.',
          price: 'From ₹2,500',
        },
        {
          title: 'Skin Rejuvenation & Laser Care',
          description: 'Dermatologist-supervised acne, pigmentation, and anti-aging therapy.',
          price: 'From ₹1,500',
        },
      ],
    },
  },
  'demo-ca': {
    id: 'mock-2',
    slug: 'demo-ca',
    template_id: 'classic',
    is_published: true,
    content: {
      businessName: 'Sahoo & Associates Chartered Accountants',
      tagline: 'Fast GST Compliance, Company Incorporation & Tax Advisory for Indian SMBs',
      category: 'AccountingService',
      about:
        'We help startups, traders, and MSMEs stay 100% compliant with GST, Income Tax, ROC filings, and virtual CFO advisory across India.',
      themeColor: '#1e3a8a',
      phone: '+91 98330 54321',
      whatsappNumber: '919833054321',
      email: 'office@sahooca.in',
      address: 'Office 12, Business Square, Thane West',
      city: 'Thane, Maharashtra',
      googleMapsUrl: 'https://maps.google.com/?q=Thane+West',
      services: [
        {
          title: 'Pvt Ltd & LLP Registration',
          description: 'End-to-end MCA incorporation, DSC, DIN, PAN, and TAN within 7 days.',
          price: '₹6,999',
        },
        {
          title: 'Monthly GST Filing & Reconciliation',
          description: 'GSTR-1, GSTR-3B, ITC matching, and notice handling.',
          price: '₹1,499/mo',
        },
        {
          title: 'Income Tax & Audit Advisory',
          description: 'ITR filing for businesses, professionals, and statutory tax audits.',
          price: 'From ₹2,499',
        },
      ],
    },
  },
};