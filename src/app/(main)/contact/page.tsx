import React from 'react';
import { Metadata } from 'next';
import ContactClient, { ContactCardItem, FaqItem } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Support & Inquiries | MediFind',
  description: 'Reach our central healthcare help desk, emergency lines, appointment coordination, and patient support team.',
};

// Server-side Dummy Data
const dummyContactCards: ContactCardItem[] = [
  {
    iconName: 'PhoneCall',
    title: '24/7 Emergency Line',
    desc: 'Immediate trauma, cardiac, & ambulance dispatch',
    detail: '+1 (800) 911-CARE',
    actionText: 'Call Now',
    actionHref: 'tel:911',
    bgLight: 'bg-rose-50 text-rose-600 border-rose-100',
    badge: 'Immediate Response',
    badgeColor: 'bg-rose-100/80 text-rose-700',
  },
  {
    iconName: 'MessageSquare',
    title: 'General Patient Desk',
    desc: 'Appointments, doctor schedules & consultations',
    detail: '+1 (800) 247-CARE',
    actionText: 'Call Helpline',
    actionHref: 'tel:+18002472273',
    bgLight: 'bg-blue-50 text-blue-600 border-blue-100',
    badge: '8 AM – 9 PM Daily',
    badgeColor: 'bg-blue-100/80 text-blue-700',
  },
  {
    iconName: 'Mail',
    title: 'Support & Inquiries',
    desc: 'Test reports, insurance claims & digital records',
    detail: 'support@medifind-health.com',
    actionText: 'Email Us',
    actionHref: 'mailto:support@medifind-health.com',
    bgLight: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    badge: 'Avg. 30 Min Reply',
    badgeColor: 'bg-indigo-100/80 text-indigo-700',
  },
  {
    iconName: 'MapPin',
    title: 'Central Medical HQ',
    desc: 'Downtown Medical Campus & Diagnostic Hub',
    detail: '742 Evergreen Healthcare Ave, NY',
    actionText: 'Get Directions',
    actionHref: '#map',
    bgLight: 'bg-teal-50 text-teal-600 border-teal-100',
    badge: 'Visitor Parking Available',
    badgeColor: 'bg-teal-100/80 text-teal-700',
  },
];

const dummyFaqs: FaqItem[] = [
  {
    q: 'How fast will someone respond to my contact inquiry?',
    a: 'For urgent inquiries, our clinical triage desk responds within 15–30 minutes. General inquiries regarding doctor schedules or test reports are typically answered within 2–4 business hours.'
  },
  {
    q: 'How do I dispatch an emergency ambulance?',
    a: 'For life-threatening emergencies, call our dedicated 24/7 line at +1 (800) 911-CARE or 911 immediately. Our GPS-tracked Advanced Life Support (ALS) ambulances are dispatched in under 2 minutes.'
  },
  {
    q: 'Can I reschedule or cancel a hospital appointment through this form?',
    a: 'Yes! Select "Doctor Appointment" in the department dropdown and provide your patient name and reference number. Our patient care team will update your booking.'
  },
  {
    q: 'Do partner hospitals accept my health insurance provider?',
    a: 'All MediFind partner hospitals work with major private and public insurance networks. You can mention your insurance provider in your message to get pre-authorization assistance.'
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ContactClient 
        contactCards={dummyContactCards} 
        faqs={dummyFaqs} 
      />
    </main>
  );
}
