'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Star, 
  Bed, 
  Users, 
  ArrowRight, 
  Phone, 
  Stethoscope, 
  ChevronRight
} from 'lucide-react';
import { HospitalItem } from '@/data/healthcareData';

interface HospitalCardProps {
  hospital: HospitalItem;
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  const [showDoctors, setShowDoctors] = useState(false);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Image & Badges */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={hospital.image}
            alt={hospital.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold backdrop-blur-md shadow-xs">
              {hospital.categoryLabel}
            </span>
            {hospital.emergency24_7 && (
              <span className="px-3 py-1 rounded-full bg-rose-600/90 text-white text-xs font-bold backdrop-blur-md shadow-xs flex items-center gap-1.5 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                24/7 ER
              </span>
            )}
          </div>

          {/* Bottom Rating on Image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold">{hospital.rating}</span>
              <span className="text-slate-300">({hospital.reviewsCount} reviews)</span>
            </div>

            <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 font-semibold text-[11px]">
              Est. {hospital.establishedYear}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
              {hospital.name}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {hospital.tagline}
            </p>
          </div>

          <div className="flex items-start gap-2 text-xs text-slate-600">
            <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>{hospital.location.address}, {hospital.location.city} {hospital.location.distance ? `• ${hospital.location.distance}` : ''}</span>
          </div>

          {/* Bed and Doctor Stats */}
          <div className="grid grid-cols-2 gap-2.5 py-2.5 px-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-blue-600" />
              <div>
                <p className="font-bold text-slate-900">{hospital.bedCount}+</p>
                <p className="text-[10px] text-slate-500">Hospital Beds</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              <div>
                <p className="font-bold text-slate-900">{hospital.doctorsCount}+</p>
                <p className="text-[10px] text-slate-500">Specialist MDs</p>
              </div>
            </div>
          </div>

          {/* Services Tags */}
          <div className="space-y-1.5">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Services</p>
            <div className="flex flex-wrap gap-1.5">
              {hospital.services.slice(0, 3).map((service, idx) => (
                <span key={idx} className="text-[11px] font-medium bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-lg border border-blue-100">
                  {service}
                </span>
              ))}
              {hospital.services.length > 3 && (
                <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-lg">
                  +{hospital.services.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Featured Doctors Roster Toggle */}
          <div className="pt-2">
            <button
              onClick={() => setShowDoctors(!showDoctors)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:text-blue-600 py-2 px-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-200/60 cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
                <span>Featured Doctors ({hospital.featuredDoctors.length})</span>
              </span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showDoctors ? 'rotate-90' : ''}`} />
            </button>

            {showDoctors && (
              <div className="mt-2.5 space-y-2 p-3 bg-slate-50/90 rounded-xl border border-slate-200/60 text-xs">
                {hospital.featuredDoctors.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2 py-1 border-b border-slate-200/40 last:border-none">
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-slate-200">
                        <Image src={doc.avatar} alt={doc.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 leading-tight">{doc.name}</p>
                        <p className="text-[10px] text-slate-500">{doc.specialty}</p>
                      </div>
                    </div>
                    <Link
                      href={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                      className="text-[10px] font-bold text-blue-600 hover:underline shrink-0"
                    >
                      Book
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 pt-0 flex items-center gap-3">
        <a
          href={`tel:${hospital.phone}`}
          className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          aria-label={`Call ${hospital.name}`}
        >
          <Phone className="w-4 h-4" />
        </a>

        <Link
          href={`/appointment?hospital=${encodeURIComponent(hospital.name)}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all"
        >
          <span>Book Appointment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
