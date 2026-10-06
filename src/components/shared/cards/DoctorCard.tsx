'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  UserCheck, 
  Star, 
  MapPin, 
  CalendarDays, 
  Clock, 
  Stethoscope, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';
import { DoctorItem } from '@/data/healthcareData';

interface DoctorCardProps {
  doctor: DoctorItem;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between">
      <div className="p-6 space-y-5">
        {/* Doctor Avatar & Status */}
        <div className="flex items-start gap-4">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-xs">
            <Image
              src={doctor.avatar}
              alt={doctor.name}
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
              {doctor.name}
            </h3>
            <p className="text-xs font-semibold text-blue-600">{doctor.title}</p>
          </div>
        </div>

        {/* Badges & Meta */}
        <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Stethoscope className="w-4 h-4 text-blue-500" />
              {doctor.specialty}
            </span>
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              {doctor.rating} ({doctor.reviewsCount})
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-600">
            <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">{doctor.hospital}</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">{doctor.location}</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="truncate">{doctor.availableDays}</span>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400">Consultation</p>
          <p className="text-base font-black text-slate-900">{doctor.consultationFee}</p>
        </div>

        <Link
          href={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
        >
          <CalendarDays className="w-4 h-4" />
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
}
