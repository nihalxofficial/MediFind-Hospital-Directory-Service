import React from 'react';
import { Metadata } from 'next';
import ServicesClient from './ServicesClient';
import { dummyServices, serviceCategories } from '@/data/healthcareData';

export const metadata: Metadata = {
  title: 'Medical Services & Specialties | MediFind',
  description: 'Explore comprehensive clinical departments, surgical procedures, and healthcare services available across our medical network.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ServicesClient 
        initialServices={dummyServices} 
        categories={serviceCategories} 
      />
    </main>
  );
}
