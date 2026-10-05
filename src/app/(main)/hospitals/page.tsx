import React from 'react';
import { Metadata } from 'next';
import HospitalsClient, { HospitalItem, HospitalCategory } from './HospitalsClient';

export const metadata: Metadata = {
  title: 'Hospitals Directory | MediFind',
  description: 'Browse verified premier hospitals, clinics, and medical centers with real-time bed availability and specialist doctors.',
};

// Server-side Dummy Data
const dummyCategories: HospitalCategory[] = [
  { id: 'all', label: 'All Hospitals' },
  { id: 'multispecialty', label: 'Multi-Specialty' },
  { id: 'cardiac', label: 'Cardiac Centers' },
  { id: 'children', label: 'Children Hospitals' },
  { id: 'trauma', label: 'Emergency & Trauma' },
  { id: 'ortho', label: 'Orthopedic & Spine' },
];

const dummyHospitals: HospitalItem[] = [
  {
    id: 'hosp-central',
    name: 'MediFind Central Hospital',
    tagline: 'Premier Multi-Disciplinary Tertiary Care & Research Center',
    category: 'multispecialty',
    categoryLabel: 'Multi-Specialty',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviewsCount: 428,
    location: {
      address: '742 Evergreen Ave',
      city: 'Downtown',
      distance: '1.2 km'
    },
    emergency24_7: true,
    bedCount: 450,
    doctorsCount: 120,
    establishedYear: 2005,
    services: ['Cardiology', 'Neurology', 'Robotic Surgery', 'Oncology', 'Organ Transplant'],
    facilities: ['Helipad Access', '3T MRI Lab', 'Hybrid ICU', '24/7 Pharmacy'],
    featuredDoctors: [
      {
        name: 'Dr. Sarah Mitchell',
        specialty: 'Chief Cardiologist',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
        experience: '16 Yrs'
      },
      {
        name: 'Dr. Robert Taylor',
        specialty: 'Lead Neurosurgeon',
        avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop',
        experience: '19 Yrs'
      }
    ],
    phone: '+1 (800) 247-0001',
    verified: true
  },
  {
    id: 'hosp-metro',
    name: 'Metro City Trauma & Acute ER',
    tagline: 'Level-1 Verified Regional Emergency & Critical Care Hospital',
    category: 'trauma',
    categoryLabel: 'Trauma & Emergency',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviewsCount: 380,
    location: {
      address: '55 North Highway Medical Complex',
      city: 'North Hub',
      distance: '2.1 km'
    },
    emergency24_7: true,
    bedCount: 320,
    doctorsCount: 95,
    establishedYear: 2010,
    services: ['Trauma Surgery', 'Acute Resuscitation', 'Orthopedics', 'Burn ICU', 'Toxicology'],
    facilities: ['Dedicated Trauma Bays', 'Rapid CT Suite', 'Blood Bank', 'Ambulance Helipad'],
    featuredDoctors: [
      {
        name: 'Dr. Marcus Vance',
        specialty: 'Trauma Director',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
        experience: '14 Yrs'
      },
      {
        name: 'Dr. Lisa Wong',
        specialty: 'Critical Care Anesthesia',
        avatar: 'https://images.unsplash.com/photo-1594824813576-2415175949d0?q=80&w=200&auto=format&fit=crop',
        experience: '11 Yrs'
      }
    ],
    phone: '+1 (800) 247-0002',
    verified: true
  },
  {
    id: 'hosp-stjude',
    name: 'St. Jude Heart & Vascular Institute',
    tagline: 'Specialized Center of Excellence in Cardiovascular Surgery',
    category: 'cardiac',
    categoryLabel: 'Cardiac Center',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    rating: 4.95,
    reviewsCount: 512,
    location: {
      address: '108 Palm Medical Plaza',
      city: 'Westside',
      distance: '3.4 km'
    },
    emergency24_7: true,
    bedCount: 280,
    doctorsCount: 75,
    establishedYear: 2012,
    services: ['Interventional Cardiology', 'Electrophysiology', 'Valve Repair', 'Pediatric Heart Care'],
    facilities: ['3 Biplane Cath Labs', 'Cardiac Rehab Gym', 'ECMO Unit', 'Tele-Monitoring ICU'],
    featuredDoctors: [
      {
        name: 'Dr. Anthony Fauci-Lee',
        specialty: 'Cardiovascular Surgeon',
        avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=200&auto=format&fit=crop',
        experience: '22 Yrs'
      },
      {
        name: 'Dr. Clara Oswald',
        specialty: 'Echocardiologist',
        avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop',
        experience: '15 Yrs'
      }
    ],
    phone: '+1 (800) 247-0003',
    verified: true
  },
  {
    id: 'hosp-children',
    name: 'Children Hope Regional Center',
    tagline: 'Compassionate Pediatric Healthcare & Neonatal Specialty Care',
    category: 'children',
    categoryLabel: 'Children Hospital',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    rating: 4.92,
    reviewsCount: 395,
    location: {
      address: '22 Blossom Way',
      city: 'Uptown',
      distance: '4.2 km'
    },
    emergency24_7: true,
    bedCount: 220,
    doctorsCount: 65,
    establishedYear: 2015,
    services: ['Pediatric Surgery', 'Neonatal Level-IV NICU', 'Adolescent Medicine', 'Pediatric Oncology'],
    facilities: ['Child-Friendly Playrooms', 'Parent Stay Suites', 'Sensory Therapy Lab', 'Pediatric ER'],
    featuredDoctors: [
      {
        name: 'Dr. Elena Rostova',
        specialty: 'Neonatologist',
        avatar: 'https://images.unsplash.com/photo-1594824813576-2415175949d0?q=80&w=200&auto=format&fit=crop',
        experience: '12 Yrs'
      }
    ],
    phone: '+1 (800) 247-0004',
    verified: true
  },
  {
    id: 'hosp-spine',
    name: 'Apex Orthopedic & Spine Hospital',
    tagline: 'Advanced Joint Reconstruction, Sports Medicine & Neurosurgery',
    category: 'ortho',
    categoryLabel: 'Orthopedic & Spine',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop',
    rating: 4.87,
    reviewsCount: 290,
    location: {
      address: '900 Summit Ridge Blvd',
      city: 'East Hills',
      distance: '5.6 km'
    },
    emergency24_7: false,
    bedCount: 180,
    doctorsCount: 50,
    establishedYear: 2017,
    services: ['Robotic Knee Replacement', 'Endoscopic Spine Surgery', 'Sports Injury Clinic', 'Physiotherapy'],
    facilities: ['Motion Analysis Lab', 'Hydrotherapy Pool', 'Computer-Navigated ORs', 'Private Recovery Suites'],
    featuredDoctors: [
      {
        name: 'Dr. David Rodriguez',
        specialty: 'Spine Surgeon',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
        experience: '18 Yrs'
      }
    ],
    phone: '+1 (800) 247-0005',
    verified: true
  },
  {
    id: 'hosp-beacon',
    name: 'Beacon Cancer Care & Research Wing',
    tagline: 'Comprehensive Oncology, Immunotherapy & Precision Gene Therapy',
    category: 'multispecialty',
    categoryLabel: 'Multi-Specialty',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    rating: 4.96,
    reviewsCount: 340,
    location: {
      address: '304 Innovation Park Dr',
      city: 'Biotech Corridor',
      distance: '6.8 km'
    },
    emergency24_7: true,
    bedCount: 260,
    doctorsCount: 80,
    establishedYear: 2019,
    services: ['Medical Oncology', 'Proton Radiation Therapy', 'Bone Marrow Transplant', 'Clinical Trials'],
    facilities: ['Linear Accelerators', 'Infusion Center', 'Genomic Sequencing Lab', 'Palliative Suites'],
    featuredDoctors: [
      {
        name: 'Dr. Jennifer Hayes',
        specialty: 'Medical Oncologist',
        avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop',
        experience: '15 Yrs'
      }
    ],
    phone: '+1 (800) 247-0006',
    verified: true
  }
];

export default function HospitalsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HospitalsClient 
        initialHospitals={dummyHospitals} 
        categories={dummyCategories} 
      />
    </main>
  );
}
