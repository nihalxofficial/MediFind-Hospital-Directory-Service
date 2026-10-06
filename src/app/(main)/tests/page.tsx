import React from 'react';
import { Metadata } from 'next';
import TestsClient from './TestsClient';
import { dummyTests, testCategories } from '@/data/healthcareData';

export const metadata: Metadata = {
  title: 'Diagnostic Tests & Health Packages | MediFind',
  description: 'Book pathology, digital imaging, MRIs, CT scans, blood tests, and health checkup packages with fast turnaround.',
};

export default function TestsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TestsClient 
        initialTests={dummyTests} 
        categories={testCategories} 
      />
    </main>
  );
}
