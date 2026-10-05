import React from 'react';
import { Metadata } from 'next';
import AppointmentClient, { AppointmentHospitalOption, AppointmentDoctorOption } from './AppointmentClient';

export const metadata: Metadata = {
  title: 'Book Doctor Appointment | MediFind',
  description: 'Schedule a guaranteed medical consultation with specialist physicians and surgeons across top hospitals.',
};

// Server-side Dummy Data
const dummyHospitals: AppointmentHospitalOption[] = [
  { id: 'hosp-central', name: 'MediFind Central Hospital' },
  { id: 'hosp-metro', name: 'Metro City Trauma & Acute ER' },
  { id: 'hosp-stjude', name: 'St. Jude Heart & Vascular Institute' },
  { id: 'hosp-children', name: 'Children Hope Regional Center' },
  { id: 'hosp-spine', name: 'Apex Orthopedic & Spine Hospital' },
  { id: 'hosp-beacon', name: 'Beacon Cancer Care Center' }
];

const dummyDepartments: string[] = [
  'Cardiology & Heart Care',
  'Neurology & Spine Surgery',
  'Pediatrics & Child Health',
  'Orthopedic & Joint Surgery',
  'Medical & Surgical Oncology',
  'Dermatology & Skin Care',
  'General Internal Medicine',
  'Emergency Trauma Evaluation'
];

const dummyDoctors: AppointmentDoctorOption[] = [
  { id: 'doc-1', name: 'Dr. Sarah Mitchell, MD', specialty: 'Cardiology' },
  { id: 'doc-2', name: 'Dr. Michael Chang, MD', specialty: 'Neurology' },
  { id: 'doc-3', name: 'Dr. Elena Rostova, MD', specialty: 'Pediatrics' },
  { id: 'doc-4', name: 'Dr. David Rodriguez, MD', specialty: 'Orthopedics' },
  { id: 'doc-5', name: 'Dr. Jennifer Hayes, MD', specialty: 'Oncology' },
  { id: 'doc-6', name: 'Dr. Alexander Bennett, MD', specialty: 'Dermatology' }
];

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AppointmentClient 
        hospitals={dummyHospitals} 
        departments={dummyDepartments} 
        doctors={dummyDoctors} 
      />
    </main>
  );
}
