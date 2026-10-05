'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FlaskConical, 
  Clock, 
  ArrowRight, 
  Building2, 
  Home, 
  Star, 
  Search, 
  FileText, 
  Activity, 
  Scan,
  Droplet,
  Microscope,
  CheckCircle2,
  CalendarDays
} from 'lucide-react';

export interface TestLabHospital {
  id: string;
  name: string;
  city: string;
}

export interface MedicalTestData {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
  parametersCount: number;
  sampleType: string;
  fastingRequired: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  homeCollection: boolean;
  hospitals: TestLabHospital[];
}

export interface TestCategory {
  id: string;
  label: string;
}

interface TestsClientProps {
  initialTests: MedicalTestData[];
  categories: TestCategory[];
}

export default function TestsClient({ initialTests, categories }: TestsClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return Activity;
      case 'Scan': return Scan;
      case 'Droplet': return Droplet;
      case 'Microscope': return Microscope;
      default: return FlaskConical;
    }
  };

  const filteredTests = initialTests.filter(test => {
    const matchesCategory = activeCategory === 'all' || test.category === activeCategory;
    const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          test.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/90 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <FlaskConical className="w-4 h-4 text-blue-600" />
            <span>Certified Diagnostic Laboratories</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Book <span className="text-blue-600">Diagnostic Tests</span> & Health Packages
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fast, accurate pathology tests, 3T MRIs, full-body health screenings with free home sample collection and same-day digital reports.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md space-y-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search diagnostic tests, MRI scans, blood profiles, or health checkups..."
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

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTests.map((test) => {
            const Icon = getIcon(test.iconName);
            return (
              <div
                key={test.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between p-6 sm:p-8 group"
              >
                <div className="space-y-5">
                  {/* Top Badges & Pricing */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`p-3.5 rounded-2xl border shadow-xs ${test.iconBg} ${test.iconColor} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="text-2xl font-black text-slate-900">${test.price}</span>
                        {test.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">${test.originalPrice}</span>
                        )}
                      </div>
                      {test.discountPercent && (
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          Save {test.discountPercent}%
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {test.categoryLabel}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                      {test.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {test.description}
                    </p>
                  </div>

                  {/* Specs & Highlights */}
                  <div className="grid grid-cols-2 gap-2 py-2.5 px-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{test.parametersCount} Parameters</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{test.reportTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Droplet className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{test.sampleType}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {test.homeCollection ? (
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <Home className="w-3.5 h-3.5 text-emerald-600" />
                          Home Pickup
                        </span>
                      ) : (
                        <span className="text-slate-500 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          In-Lab Only
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Labs */}
                  <div className="space-y-1.5 pt-1 text-xs text-slate-500">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Accredited Labs</p>
                    <p className="truncate font-medium text-slate-700">
                      {test.hospitals.map(h => h.name).join(' • ')}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-600">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    <span>{test.rating}</span>
                    <span className="text-slate-400 font-normal">({test.reviewsCount})</span>
                  </div>

                  <Link
                    href={`/appointment?test=${encodeURIComponent(test.name)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>Book Test</span>
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
