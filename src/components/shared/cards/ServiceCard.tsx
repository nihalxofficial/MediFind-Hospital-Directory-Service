'use client';

import React from 'react';
import Link from 'next/link';
import { 
  HeartPulse, 
  Activity, 
  Brain, 
  Baby, 
  Microscope, 
  Bone, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Building2
} from 'lucide-react';
import { ServiceItem } from '@/data/healthcareData';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartPulse': return HeartPulse;
      case 'Brain': return Brain;
      case 'Baby': return Baby;
      case 'Microscope': return Microscope;
      case 'Bone': return Bone;
      case 'Eye': return Eye;
      default: return Activity;
    }
  };

  const Icon = getIcon(service.iconName);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between p-6 sm:p-8 group">
      <div className="space-y-5">
        {/* Top Bar with Icon, Category & Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className={`p-3.5 rounded-2xl border shadow-xs ${service.iconBg} ${service.iconColor} group-hover:scale-105 transition-transform`}>
            <Icon className="w-7 h-7" />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
              {service.categoryLabel}
            </span>
            {service.available24_7 && (
              <span className="text-[10px] font-bold text-rose-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                24/7 Service
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {service.description}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Clinical Highlights</p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Offering Hospitals Roster */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Available At</p>
          <div className="flex flex-wrap gap-1.5">
            {service.hospitals.map((hosp) => (
              <span key={hosp.id} className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-lg text-slate-700">
                <Building2 className="w-3 h-3 text-blue-500" />
                <span>{hosp.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 text-xs font-semibold text-slate-600">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span>{service.rating}</span>
          <span className="text-slate-400 font-normal">({service.specialistsCount} MDs)</span>
        </div>

        <Link
          href={`/appointment?department=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>Book Service</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
