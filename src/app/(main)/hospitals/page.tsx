import React from 'react';
import HospitalsSection from '@/components/home/HospitalsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitals Directory | MediFind',
  description: 'Browse verified premier hospitals, clinics, and medical centers with real-time bed availability and specialist doctors.',
};

export default function HospitalsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-6">
      <HospitalsSection />
    </main>
  );
}
