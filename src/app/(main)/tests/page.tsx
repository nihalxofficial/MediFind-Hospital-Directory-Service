import React from 'react';
import { Metadata } from 'next';
import TestsClient, { MedicalTestData, TestCategory } from './TestsClient';

export const metadata: Metadata = {
  title: 'Diagnostic Tests & Health Packages | MediFind',
  description: 'Book pathology, digital imaging, MRIs, CT scans, blood tests, and health checkup packages with fast turnaround.',
};

// Server-side Dummy Data
const dummyCategories: TestCategory[] = [
  { id: 'all', label: 'All Tests' },
  { id: 'checkup', label: 'Full Body Checkups' },
  { id: 'blood', label: 'Blood & Pathology' },
  { id: 'imaging', label: 'Imaging & MRI Scans' },
  { id: 'cardiac', label: 'Heart & Lipid' },
  { id: 'diabetes', label: 'Diabetes & Thyroid' },
];

const dummyTests: MedicalTestData[] = [
  {
    id: 'full-body-advanced',
    name: 'Comprehensive Full Body Executive Checkup',
    category: 'checkup',
    categoryLabel: 'Full Body Package',
    description: 'Complete systemic screening covering liver, kidney, lipid profile, thyroid, CBC, and vital vitamin biomarkers.',
    iconName: 'Activity',
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-600',
    parametersCount: 84,
    sampleType: 'Blood & Urine',
    fastingRequired: '10-12 Hrs Fasting',
    reportTime: 'Same Day (6-8 Hrs)',
    price: 89,
    originalPrice: 140,
    discountPercent: 36,
    rating: 4.9,
    reviewsCount: 520,
    homeCollection: true,
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Diagnostic Lab', city: 'Downtown' },
      { id: 'hosp-stjude', name: 'St. Jude Health Hub', city: 'Westside' }
    ]
  },
  {
    id: 'mri-brain-spine',
    name: '3T High-Definition Brain & Spine MRI Scan',
    category: 'imaging',
    categoryLabel: 'Radiology / MRI',
    description: 'Ultra high-resolution multi-planar magnetic resonance imaging with digital contrast for neurological diagnosis.',
    iconName: 'Scan',
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-600',
    parametersCount: 12,
    sampleType: 'Digital Scan',
    fastingRequired: 'No Fasting Needed',
    reportTime: 'Within 4 Hours',
    price: 199,
    originalPrice: 280,
    discountPercent: 29,
    rating: 4.95,
    reviewsCount: 310,
    homeCollection: false,
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
      { id: 'hosp-metro', name: 'Metro City Trauma Center', city: 'North Hub' }
    ]
  },
  {
    id: 'cardiac-risk-panel',
    name: 'Advanced Cardiac Risk & Lipid Profile',
    category: 'cardiac',
    categoryLabel: 'Cardiology Test',
    description: 'In-depth cardiovascular assessment evaluating High-Sensitivity Troponin-I, hs-CRP, Apolipoproteins, and LDL/HDL fractions.',
    iconName: 'Activity',
    iconBg: 'bg-rose-50 border-rose-100',
    iconColor: 'text-rose-600',
    parametersCount: 28,
    sampleType: 'Blood Sample',
    fastingRequired: '12 Hrs Fasting',
    reportTime: 'Within 6 Hours',
    price: 55,
    originalPrice: 85,
    discountPercent: 35,
    rating: 4.88,
    reviewsCount: 420,
    homeCollection: true,
    hospitals: [
      { id: 'hosp-stjude', name: 'St. Jude Heart Institute', city: 'Westside' }
    ]
  },
  {
    id: 'diabetes-thyroid-care',
    name: 'Complete Diabetes & Thyroid Hormone Suite',
    category: 'diabetes',
    categoryLabel: 'Endocrine Panel',
    description: 'Fasting Plasma Glucose, HbA1c 3-Month Average, Free T3, Free T4, and Ultrasensitive TSH for hormonal balance.',
    iconName: 'Droplet',
    iconBg: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-600',
    parametersCount: 16,
    sampleType: 'Blood Sample',
    fastingRequired: '10-12 Hrs Fasting',
    reportTime: 'Within 4 Hours',
    price: 45,
    originalPrice: 70,
    discountPercent: 35,
    rating: 4.82,
    reviewsCount: 290,
    homeCollection: true,
    hospitals: [
      { id: 'hosp-central', name: 'MediFind Central Diagnostic Lab', city: 'Downtown' }
    ]
  },
  {
    id: 'cancer-screening-panel',
    name: 'Early Cancer Tumor Marker Screening',
    category: 'blood',
    categoryLabel: 'Oncology Labs',
    description: 'Specialized blood analysis evaluating CEA, CA-125, PSA, AFP, and CA 19-9 for preventative cancer detection.',
    iconName: 'Microscope',
    iconBg: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600',
    parametersCount: 22,
    sampleType: 'Blood Sample',
    fastingRequired: 'Overnight Fasting',
    reportTime: '24 Hours',
    price: 110,
    originalPrice: 175,
    discountPercent: 37,
    rating: 4.91,
    reviewsCount: 185,
    homeCollection: true,
    hospitals: [
      { id: 'hosp-beacon', name: 'Beacon Cancer Center Lab', city: 'Biotech Corridor' }
    ]
  },
  {
    id: 'ct-chest-abdomen',
    name: '128-Slice High-Speed Chest & Abdominal CT',
    category: 'imaging',
    categoryLabel: 'Radiology / CT',
    description: 'Rapid low-radiation helical volumetric scanning for pulmonary, renal, and gastrointestinal clinical diagnostics.',
    iconName: 'Scan',
    iconBg: 'bg-cyan-50 border-cyan-100',
    iconColor: 'text-cyan-600',
    parametersCount: 18,
    sampleType: 'CT Imaging Scan',
    fastingRequired: '4 Hrs Fasting',
    reportTime: 'Within 3 Hours',
    price: 160,
    originalPrice: 230,
    discountPercent: 30,
    rating: 4.86,
    reviewsCount: 240,
    homeCollection: false,
    hospitals: [
      { id: 'hosp-metro', name: 'Metro City Trauma Hospital', city: 'North Hub' }
    ]
  }
];

export default function TestsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TestsClient 
        initialTests={dummyTests} 
        categories={dummyCategories} 
      />
    </main>
  );
}
