'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  Search 
} from 'lucide-react';
import { HospitalCard } from '@/components/shared/cards';
import { dummyHospitals, hospitalCategories, HospitalItem } from '@/data/healthcareData';

interface HospitalsSectionProps {
  initialHospitals?: HospitalItem[];
  categories?: typeof hospitalCategories;
}

export default function HospitalsSection({
  initialHospitals = dummyHospitals,
  categories = hospitalCategories
}: HospitalsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredHospitals = initialHospitals.filter(hosp => {
    const matchesCategory = activeCategory === 'all' || hosp.category === activeCategory;
    const matchesSearch = hosp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hosp.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hosp.location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hosp.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="hospitals" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background soft glow orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>Partner Medical Facilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Find Top Verified <br className="hidden sm:block" />
              <span className="text-blue-600">Hospitals Near You</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Compare accredited multi-specialty hospitals, emergency bed availability, specialized departments, and doctor teams.
            </p>
          </div>

          <Link
            href="/hospitals"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group self-start md:self-end"
          >
            <span>View All Hospitals</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md space-y-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search hospital by name, location, or specialized treatment..."
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

        {/* Hospitals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>

      </div>
    </section>
  );
}
