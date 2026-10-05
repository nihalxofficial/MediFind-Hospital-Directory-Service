import React from 'react';
import { Metadata } from 'next';
import DoctorsClient, { DoctorItem, DoctorSpecialty } from './DoctorsClient';

export const metadata: Metadata = {
  title: 'Specialist Doctors Directory | MediFind',
  description: 'Book certified specialist doctors, surgeons, cardiologists, and pediatricians across leading hospitals.',
};

// Server-side Dummy Data
const dummySpecialties: DoctorSpecialty[] = [
  { id: 'all', label: 'All Specialties' },
  { id: 'cardiology', label: 'Cardiology' },
  { id: 'neurology', label: 'Neurology' },
  { id: 'orthopedics', label: 'Orthopedics' },
  { id: 'pediatrics', label: 'Pediatrics' },
  { id: 'oncology', label: 'Oncology' },
  { id: 'dermatology', label: 'Dermatology' },
];

const dummyDoctors: DoctorItem[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sarah Mitchell, MD, FACC',
    title: 'Chief Interventional Cardiologist',
    specialty: 'Cardiology',
    specialtyCategory: 'cardiology',
    experience: '16+ Years Experience',
    hospital: 'MediFind Central Hospital',
    location: 'Downtown, Medical District',
    rating: 4.9,
    reviewsCount: 312,
    availableDays: 'Mon - Fri • 9:00 AM - 4:00 PM',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$120',
    verified: true
  },
  {
    id: 'doc-2',
    name: 'Dr. Michael Chang, MD, PhD',
    title: 'Senior Neurosurgeon & Spine Specialist',
    specialty: 'Neurology',
    specialtyCategory: 'neurology',
    experience: '14+ Years Experience',
    hospital: 'St. Jude Neurological Institute',
    location: 'Westside Healthcare Plaza',
    rating: 4.95,
    reviewsCount: 284,
    availableDays: 'Tue, Thu, Sat • 10:00 AM - 3:00 PM',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$150',
    verified: true
  },
  {
    id: 'doc-3',
    name: 'Dr. Elena Rostova, MD',
    title: 'Chief of Pediatric Care',
    specialty: 'Pediatrics',
    specialtyCategory: 'pediatrics',
    experience: '12+ Years Experience',
    hospital: 'Children Hope Regional Center',
    location: 'Uptown Pediatric Wing',
    rating: 4.88,
    reviewsCount: 410,
    availableDays: 'Mon - Sat • 8:30 AM - 2:30 PM',
    avatar: 'https://images.unsplash.com/photo-1594824813576-2415175949d0?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$95',
    verified: true
  },
  {
    id: 'doc-4',
    name: 'Dr. David Rodriguez, MD, FAAOS',
    title: 'Consultant Orthopedic & Joint Surgeon',
    specialty: 'Orthopedics',
    specialtyCategory: 'orthopedics',
    experience: '18+ Years Experience',
    hospital: 'Metro City Trauma & Orthopedic Hub',
    location: 'North Medical Complex',
    rating: 4.92,
    reviewsCount: 360,
    availableDays: 'Mon, Wed, Fri • 9:00 AM - 5:00 PM',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$130',
    verified: true
  },
  {
    id: 'doc-5',
    name: 'Dr. Jennifer Hayes, MD',
    title: 'Surgical & Medical Oncologist',
    specialty: 'Oncology',
    specialtyCategory: 'oncology',
    experience: '15+ Years Experience',
    hospital: 'MediFind Comprehensive Cancer Center',
    location: 'Downtown Cancer Wing',
    rating: 4.96,
    reviewsCount: 220,
    availableDays: 'Mon - Thu • 9:30 AM - 3:30 PM',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$160',
    verified: true
  },
  {
    id: 'doc-6',
    name: 'Dr. Alexander Bennett, MD',
    title: 'Clinical Dermatologist & Laser Specialist',
    specialty: 'Dermatology',
    specialtyCategory: 'dermatology',
    experience: '10+ Years Experience',
    hospital: 'St. Jude Skin & Aesthetics Clinic',
    location: 'Westside Aesthetics Wing',
    rating: 4.87,
    reviewsCount: 195,
    availableDays: 'Tue - Sat • 11:00 AM - 6:00 PM',
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop',
    consultationFee: '$110',
    verified: true
  }
];

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <DoctorsClient 
        initialDoctors={dummyDoctors} 
        specialties={dummySpecialties} 
      />
    </main>
  );
}
