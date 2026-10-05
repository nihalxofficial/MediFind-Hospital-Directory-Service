'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  HeartHandshake, 
  Search,
  MapPin,
  CalendarDays
} from 'lucide-react';

export interface FacilityHospital {
  id: string;
  name: string;
  city: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  hospitals: FacilityHospital[];
  available24_7?: boolean;
}

export interface FacilityCategory {
  id: string;
  label: string;
}

interface FacilitiesClientProps {
  initialFacilities: FacilityItem[];
  categories: FacilityCategory[];
}

export default function FacilitiesClient({ initialFacilities, categories }: FacilitiesClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFacilities = initialFacilities.filter(fac => {
    const matchesCategory = activeCategory === 'all' || fac.category === activeCategory;
    const matchesSearch = fac.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fac.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fac.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fac.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/90 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>World-Class Infrastructure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Cutting-Edge <span className="text-blue-600">Hospital Facilities</span> & Tech
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover advanced medical equipment, robotic surgery suites, 3T MRI units, and high-dependency ICUs engineered for patient safety.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md space-y-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search facilities, equipment, or surgical tech..."
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

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Facility Image with Badge */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold backdrop-blur-md shadow-xs">
                      {facility.badge}
                    </span>
                    {facility.available24_7 && (
                      <span className="px-3 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-bold backdrop-blur-md shadow-xs">
                        Active 24/7
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white text-xs font-semibold bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      {facility.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold mt-1">
                      {facility.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {facility.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Infrastructure Specs</p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hospitals */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Equipped Center</p>
                    <div className="flex flex-wrap gap-1.5">
                      {facility.hospitals.map((hosp) => (
                        <span key={hosp.id} className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-lg text-slate-700">
                          <Building2 className="w-3 h-3 text-blue-500" />
                          <span>{hosp.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <Link
                  href="/appointment"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Inquire / Book Facility</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
