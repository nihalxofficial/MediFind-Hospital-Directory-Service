'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  UserCheck, 
  Search, 
  Star, 
  MapPin, 
  CalendarDays, 
  Clock, 
  Stethoscope, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  Phone
} from 'lucide-react';

export interface DoctorItem {
  id: string;
  name: string;
  title: string;
  specialty: string;
  specialtyCategory: string;
  experience: string;
  hospital: string;
  location: string;
  rating: number;
  reviewsCount: number;
  availableDays: string;
  avatar: string;
  consultationFee: string;
  verified: boolean;
}

export interface DoctorSpecialty {
  id: string;
  label: string;
}

interface DoctorsClientProps {
  initialDoctors: DoctorItem[];
  specialties: DoctorSpecialty[];
}

export default function DoctorsClient({ initialDoctors, specialties }: DoctorsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const filteredDoctors = initialDoctors.filter(doc => {
    const matchesCategory = selectedSpecialty === 'all' || doc.specialtyCategory === selectedSpecialty;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/90 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <UserCheck className="w-4 h-4 text-blue-600" />
            <span>Verified Medical Specialists</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Find & Book Top <span className="text-blue-600">Specialist Doctors</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Connect with board-certified physicians, senior surgeons, and clinical professors across top-rated hospitals. Book your consultation today.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md space-y-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search doctor by name, specialty, or hospital..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {specialties.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecialty(spec.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedSpecialty === spec.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {spec.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 space-y-5">
                {/* Doctor Avatar & Status */}
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-xs">
                    <Image
                      src={doc.avatar}
                      alt={doc.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        Verified Doctor
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600">{doc.title}</p>
                  </div>
                </div>

                {/* Badges & Meta */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium text-slate-700">
                      <Stethoscope className="w-4 h-4 text-blue-500" />
                      {doc.specialty}
                    </span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-amber-400" />
                      {doc.rating} ({doc.reviewsCount})
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate">{doc.hospital}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate">{doc.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="truncate">{doc.availableDays}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Consultation</p>
                  <p className="text-base font-black text-slate-900">{doc.consultationFee}</p>
                </div>

                <Link
                  href={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
