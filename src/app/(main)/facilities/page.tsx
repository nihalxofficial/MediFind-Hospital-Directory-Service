import React from 'react';
import { Metadata } from 'next';
import FacilitiesClient, { FacilityItem, FacilityCategory } from './FacilitiesClient';

export const metadata: Metadata = {
  title: 'Hospital Facilities & Medical Tech | MediFind',
  description: 'Explore advanced hospital infrastructure, robotic operating rooms, MRI units, ICUs, and emergency helipads.',
};

// Server-side Dummy Data
const dummyCategories: FacilityCategory[] = [
  { id: 'all', label: 'All Facilities' },
  { id: 'surgical', label: 'Robotic & Surgical' },
  { id: 'emergency', label: 'Emergency & Helipad' },
  { id: 'imaging', label: 'Diagnostic Imaging' },
  { id: 'critical', label: 'Intensive Care (ICU)' },
  { id: 'comfort', label: 'VIP Rooms & Care' },
];

const dummyFacilities: FacilityItem[] = [
  {
    id: 'robotic-surgery',
    title: 'Robotic & Hybrid Surgical Suites',
    tagline: 'Da Vinci Xi Robotic Assisted Precision Surgery',
    category: 'surgical',
    categoryLabel: 'Robotic Surgery',
    description: 'Ultra-modern laminar air flow modular operating theaters equipped with 4K 3D robotic visualization for minimally invasive procedures.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop',
    badge: 'Next-Gen Robotics',
    features: [
      'Da Vinci Xi 4-Arm Robotic System',
      'Laminar Flow 99.99% Sterile HEPA Cleanrooms',
      'Intraoperative 3D Imaging Navigation'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-stjude', name: 'St. Jude Heart Institute', city: 'Westside' }
    ]
  },
  {
    id: 'emergency-helipad',
    title: '24/7 Trauma Center & Rooftop Helipad',
    tagline: 'Instant Air Ambulance Evacuation & Level-1 Trauma Triage',
    category: 'emergency',
    categoryLabel: 'Trauma & Air Evac',
    description: 'Dedicated rooftop helipad with direct high-speed elevator access to trauma resuscitation bays, blood bank, and emergency surgical suites.',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=800&auto=format&fit=crop',
    badge: 'Zero-Delay Response',
    features: [
      'Direct Helipad-to-OT High Speed Elevators',
      'Level-1 Multi-Bed Resuscitation Bays',
      'Dedicated Emergency Ultrasound & CT Suite'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-metro', name: 'Metro City Trauma Center', city: 'North Hub' }
    ],
    available24_7: true
  },
  {
    id: '3t-mri-imaging',
    title: '3T Silent MRI & 256-Slice Dual Energy CT',
    tagline: 'Ultra-High Definition Diagnostic Imaging Lab',
    category: 'imaging',
    categoryLabel: 'Advanced Imaging',
    description: 'Wide-bore acoustic reduction MRI providing crystal clear neural, cardiovascular, and musculoskeletal scans in half the standard exam time.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    badge: 'Low-Radiation Imaging',
    features: [
      '3.0 Tesla Full Body High-Field MRI',
      '256-Slice Fast Cardiac CT Angiogram',
      'Instant AI-Aided Radiologist Reporting'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-stjude', name: 'St. Jude Heart Institute', city: 'Westside' }
    ],
    available24_7: true
  },
  {
    id: 'hybrid-icu-ward',
    title: 'Smart Tele-ICU & Critical Care Units',
    tagline: 'Continuous AI Hemodynamic Monitoring & Isolation Pods',
    category: 'critical',
    categoryLabel: 'Critical Care ICU',
    description: 'Negative-pressure isolation rooms, bedside ECMO life support, continuous multi-parameter telemetry, and 1:1 dedicated nursing ratios.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    badge: '1:1 Critical Nursing',
    features: [
      'Negative Pressure Biocontainment Suites',
      'Integrated High-Flow Oxygen & Ventilators',
      'Centralized 24/7 Intensivist Oversight'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-metro', name: 'Metro City Trauma Center', city: 'North Hub' }
    ],
    available24_7: true
  },
  {
    id: 'vip-recovery-suites',
    title: 'VIP Private Suites & Healing Gardens',
    tagline: 'Luxury Patient Suites with Family Living Quarters',
    category: 'comfort',
    categoryLabel: 'VIP Suites',
    description: 'Spacious patient suites with smart room automation, private attendant bedrooms, customized chef-prepared nutrition, and serene rooftop gardens.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop',
    badge: 'Premium Comfort',
    features: [
      'En-Suite Family Bedroom & Kitchenette',
      'High-Speed Wi-Fi & Smart Entertainment',
      'Personalized Concierge & Dietary Care'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-children', name: 'Children Hope Regional Center', city: 'Uptown' }
    ]
  },
  {
    id: 'blood-bank-path',
    title: 'Automated 24/7 Blood Bank & Cryo-Storage',
    tagline: 'Rapid Component Separation & Rare Group Reserve',
    category: 'emergency',
    categoryLabel: 'Blood Bank',
    description: 'State-of-the-art blood bank with automated cross-matching, platelet apheresis units, and rare blood group rapid dispatch supply.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    badge: 'Rapid Cross-Match',
    features: [
      'Automated Gel-Card Cross Matching',
      'Ultra-Low Cryo-Plasma Storage Units',
      'Mobile Blood Donation Express Fleet'
    ],
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' }
    ],
    available24_7: true
  }
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <FacilitiesClient 
        initialFacilities={dummyFacilities} 
        categories={dummyCategories} 
      />
    </main>
  );
}
