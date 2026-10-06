import React from 'react';
import { Metadata } from 'next';
import HospitalsClient from './HospitalsClient';
import { dummyHospitals, hospitalCategories } from '@/data/healthcareData';

export const metadata: Metadata = {
  title: 'Hospitals Directory | MediFind',
  description: 'Browse verified premier hospitals, clinics, and medical centers with real-time bed availability and specialist doctors.',
};

export default function HospitalsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HospitalsClient 
        initialHospitals={dummyHospitals} 
        categories={hospitalCategories} 
      />
    </main>
  );
}
