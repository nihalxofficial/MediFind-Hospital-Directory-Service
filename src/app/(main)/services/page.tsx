import React from 'react';
import { Metadata } from 'next';
import ServicesClient, { ServiceData, ServiceCategory } from './ServicesClient';

export const metadata: Metadata = {
  title: 'Medical Services & Specialties | MediFind',
  description: 'Explore comprehensive clinical departments, surgical procedures, and healthcare services available across our medical network.',
};

// Server-side Dummy Data
const dummyCategories: ServiceCategory[] = [
  { id: 'all', label: 'All Services' },
  { id: 'cardio', label: 'Cardiology' },
  { id: 'neuro', label: 'Neurology' },
  { id: 'pediatric', label: 'Pediatrics' },
  { id: 'diag', label: 'Diagnostics & Labs' },
  { id: 'ortho', label: 'Orthopedics' },
];

const dummyServices: ServiceData[] = [
  {
    id: 'cardio-care',
    title: 'Cardiology & Heart Care',
    category: 'cardio',
    categoryLabel: 'Heart Center',
    description: 'Comprehensive cardiac assessments, ECG, angioplasty, and 24/7 rapid response for acute coronary conditions.',
    iconName: 'HeartPulse',
    iconBg: 'bg-rose-50 border-rose-100',
    iconColor: 'text-rose-600',
    features: ['Coronary Angiography', '4D Echocardiography', 'Cardiac Rehabilitation'],
    hospitals: [
      { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-2', name: 'St. Jude Heart Institute', city: 'Westside' }
    ],
    specialistsCount: 12,
    rating: 4.9,
    available24_7: true,
  },
  {
    id: 'neuro-care',
    title: 'Neurology & Brain Health',
    category: 'neuro',
    categoryLabel: 'Neuro Sciences',
    description: 'Expert diagnostics and surgical interventions for stroke, epilepsy, neuro-muscular disorders, and spine rehabilitation.',
    iconName: 'Brain',
    iconBg: 'bg-indigo-50 border-indigo-100',
    iconColor: 'text-indigo-600',
    features: ['Digital Brain EEG', 'Spine & Trauma Surgery', 'Stroke Intervention'],
    hospitals: [
      { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-3', name: 'St. Jude Neurological Institute', city: 'Westside' }
    ],
    specialistsCount: 8,
    rating: 4.8,
  },
  {
    id: 'pediatric-care',
    title: 'Pediatrics & Child Care',
    category: 'pediatric',
    categoryLabel: 'Child Health',
    description: 'Dedicated neonatal intensive care, pediatric surgery, developmental assessments, and child wellness immunization clinics.',
    iconName: 'Baby',
    iconBg: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-600',
    features: ['Level-IV NICU Incubators', 'Pediatric Surgery', 'Child Immunization'],
    hospitals: [
      { id: 'hosp-4', name: 'Children Hope Regional Center', city: 'Uptown' }
    ],
    specialistsCount: 15,
    rating: 4.95,
  },
  {
    id: 'diagnostic-labs',
    title: 'Diagnostics & Pathology Labs',
    category: 'diag',
    categoryLabel: 'Laboratory',
    description: 'High-speed automated pathology tests, genomic sequencing, infectious disease panels, and certified rapid reporting.',
    iconName: 'Microscope',
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-600',
    features: ['Full Blood & Metabolic Panels', 'Molecular PCR Testing', 'Digital Pathology Reports'],
    hospitals: [
      { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-5', name: 'Metro City Trauma Hospital', city: 'North Hub' }
    ],
    specialistsCount: 20,
    rating: 4.85,
    available24_7: true,
  },
  {
    id: 'ortho-care',
    title: 'Orthopedic & Joint Surgery',
    category: 'ortho',
    categoryLabel: 'Bone & Joints',
    description: 'Minimally invasive arthroscopic surgery, robotic total knee replacement, fracture care, and personalized sports physiotherapy.',
    iconName: 'Bone',
    iconBg: 'bg-sky-50 border-sky-100',
    iconColor: 'text-sky-600',
    features: ['Robotic Joint Replacement', 'Arthroscopic Repair', 'Sports Injury Rehab'],
    hospitals: [
      { id: 'hosp-6', name: 'Apex Orthopedic & Spine Hospital', city: 'East Hills' }
    ],
    specialistsCount: 10,
    rating: 4.9,
  },
  {
    id: 'ophthalmology-care',
    title: 'Ophthalmology & Eye Surgery',
    category: 'diag',
    categoryLabel: 'Vision Center',
    description: 'Femtosecond laser cataract surgery, refractive LASIK vision correction, retinal detachment surgery, and glaucoma therapy.',
    iconName: 'Eye',
    iconBg: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600',
    features: ['Blade-free LASIK', 'Retinal Micro-Surgery', 'Glaucoma Laser Therapy'],
    hospitals: [
      { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' }
    ],
    specialistsCount: 6,
    rating: 4.75,
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ServicesClient 
        initialServices={dummyServices} 
        categories={dummyCategories} 
      />
    </main>
  );
}
