'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HeartPulse, 
  Activity, 
  Brain, 
  Baby, 
  Microscope, 
  Bone, 
  Eye, 
  Stethoscope, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  CalendarDays,
  ShieldCheck,
  Star,
  Building2,
  MapPin,
  Search
} from 'lucide-react';

export interface HospitalInfo {
  id: string;
  name: string;
  city: string;
  branch?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
  features: string[];
  hospitals: HospitalInfo[];
  specialistsCount: number;
  rating: number;
  available24_7?: boolean;
}

export interface ServiceCategory {
  id: string;
  label: string;
}

interface ServicesClientProps {
  initialServices: ServiceData[];
  categories: ServiceCategory[];
}

export default function ServicesClient({ initialServices, categories }: ServicesClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  const filteredServices = initialServices.filter(srv => {
    const matchesCategory = activeCategory === 'all' || srv.category === activeCategory;
    const matchesSearch = srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          srv.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/90 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <Activity className="w-4 h-4 text-blue-600" />
            <span>Comprehensive Healthcare Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Specialized <span className="text-blue-600">Medical Departments</span> & Care
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From routine diagnostics to high-complexity surgeries, explore clinical specialties delivered by top medical practitioners.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md space-y-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search clinical service, surgery, or medical procedure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between p-6 sm:p-8 group"
              >
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
          })}
        </div>

      </div>
    </div>
  );
}
