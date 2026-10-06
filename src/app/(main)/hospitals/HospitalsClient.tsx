'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Search 
} from 'lucide-react';
import { HospitalCard } from '@/components/shared/cards';
import { HospitalItem, CategoryOption } from '@/data/healthcareData';

interface HospitalsClientProps {
  initialHospitals: HospitalItem[];
  categories: CategoryOption[];
}

export default function HospitalsClient({ initialHospitals, categories }: HospitalsClientProps) {
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
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/90 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>Accredited Healthcare Network</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Discover Verified <span className="text-blue-600">Hospitals & Clinics</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Compare top-rated healthcare institutions, real-time bed capacity, specialist medical departments, and doctor teams near you.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md space-y-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search hospitals by name, city, address, or medical service..."
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

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>

      </div>
    </div>
  );
}
