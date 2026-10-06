import React from 'react';
import { Metadata } from 'next';
import DoctorsClient from './DoctorsClient';
import { dummyDoctors, doctorSpecialties } from '@/data/healthcareData';

export const metadata: Metadata = {
  title: 'Specialist Doctors Directory | MediFind',
  description: 'Book certified specialist doctors, surgeons, cardiologists, and pediatricians across leading hospitals.',
};

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <DoctorsClient 
        initialDoctors={dummyDoctors} 
        specialties={doctorSpecialties} 
      />
    </main>
  );
}
