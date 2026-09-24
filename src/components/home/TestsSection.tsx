'use client';

import { useState } from 'react';
import { 
  FlaskConical, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Home, 
  Star, 
  Search, 
  FileText, 
  Activity, 
  Zap,
  MapPin,
  CalendarDays,
  HeartPulse,
  Scan,
  Droplet,
  Microscope
} from 'lucide-react';

// Hospital entity interface for tests
export interface TestLabHospital {
  id: string;
  name: string;
  city: string;
}

// Full Test Item Interface for future API / Database integration
export interface MedicalTestItem {
  id: string;
  name: string;
  category: 'all' | 'checkup' | 'blood' | 'imaging' | 'cardiac' | 'diabetes';
  categoryLabel: string;
  description: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  parametersCount: number; // e.g. 72 Biomarkers
  sampleType: string; // e.g. Blood, Scan, Urine
  fastingRequired: string; // e.g. 10-12 hrs fasting
  reportTime: string; // e.g. Within 6 hours
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  homeCollection: boolean;
  hospitals: TestLabHospital[];
}

export default function TestsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Tests' },
    { id: 'checkup', label: 'Full Body Checkups' },
    { id: 'blood', label: 'Blood & Pathology' },
    { id: 'imaging', label: 'Imaging & MRI Scans' },
    { id: 'cardiac', label: 'Heart & Lipid' },
    { id: 'diabetes', label: 'Diabetes & Thyroid' },
  ];

  // Dummy Diagnostic Tests Dataset with custom icons
  const tests: MedicalTestItem[] = [
    {
      id: 'full-body-advanced',
      name: 'Comprehensive Full Body Executive Checkup',
      category: 'checkup',
      categoryLabel: 'Full Body Package',
      description: 'Complete systemic screening covering liver, kidney, lipid profile, thyroid, CBC, and vital vitamin biomarkers.',
      icon: Activity,
      iconBg: 'bg-emerald-50 border-emerald-100',
      iconColor: 'text-emerald-600',
      parametersCount: 84,
      sampleType: 'Blood & Urine',
      fastingRequired: '10-12 Hrs Fasting',
      reportTime: 'Same Day (6-8 Hrs)',
      price: 89,
      originalPrice: 140,
      discountPercent: 36,
      rating: 4.9,
      reviewsCount: 520,
      homeCollection: true,
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Diagnostic Lab', city: 'Downtown' },
        { id: 'hosp-stjude', name: 'St. Jude Health Hub', city: 'Westside' },
        { id: 'hosp-metro', name: 'Metro Advanced Labs', city: 'North Hub' }
      ]
    },
    {
      id: 'mri-brain-spine',
      name: '3T High-Definition Brain & Spine MRI Scan',
      category: 'imaging',
      categoryLabel: 'Radiology / MRI',
      description: 'Ultra high-resolution multi-planar magnetic resonance imaging with digital contrast for neurological diagnosis.',
      icon: Scan,
      iconBg: 'bg-indigo-50 border-indigo-100',
      iconColor: 'text-indigo-600',
      parametersCount: 1,
      sampleType: '3T MRI Imaging',
      fastingRequired: 'No Fasting Needed',
      reportTime: 'Within 24 Hours',
      price: 240,
      originalPrice: 320,
      discountPercent: 25,
      rating: 4.9,
      reviewsCount: 310,
      homeCollection: false,
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-apex', name: 'Apex Imaging Center', city: 'East Wing' }
      ]
    },
    {
      id: 'complete-blood-count',
      name: 'Complete Blood Count (CBC) + ESR Panel',
      category: 'blood',
      categoryLabel: 'Blood Pathology',
      description: 'Detailed analysis of red blood cells, white blood cell differentials, platelets, hemoglobin, and infection markers.',
      icon: FlaskConical,
      iconBg: 'bg-rose-50 border-rose-100',
      iconColor: 'text-rose-600',
      parametersCount: 24,
      sampleType: 'Blood Sample',
      fastingRequired: 'No Fasting Required',
      reportTime: 'Within 4 Hours',
      price: 25,
      originalPrice: 35,
      discountPercent: 28,
      rating: 4.8,
      reviewsCount: 680,
      homeCollection: true,
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Lab', city: 'Downtown' },
        { id: 'hosp-stjude', name: 'St. Jude Lab', city: 'Westside' },
        { id: 'hosp-childrens', name: 'Children & Family Care Center', city: 'Green Valley' }
      ]
    },
    {
      id: 'advanced-cardiac-risk',
      name: 'Advanced Cardiac Risk & Lipid Profile Plus',
      category: 'cardiac',
      categoryLabel: 'Cardiac Health',
      description: 'Measures total cholesterol, HDL, LDL, triglycerides, hs-CRP, and Apolipoprotein for coronary heart risk evaluation.',
      icon: HeartPulse,
      iconBg: 'bg-red-50 border-red-100',
      iconColor: 'text-red-600',
      parametersCount: 16,
      sampleType: 'Blood Sample',
      fastingRequired: '12 Hrs Fasting',
      reportTime: 'Within 6 Hours',
      price: 55,
      originalPrice: 85,
      discountPercent: 35,
      rating: 4.9,
      reviewsCount: 410,
      homeCollection: true,
      hospitals: [
        { id: 'hosp-stjude', name: 'St. Jude Heart Institute', city: 'Westside' },
        { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' }
      ]
    },
    {
      id: 'diabetes-hba1c-care',
      name: 'Diabetes Care Panel (HbA1c + Fasting Glucose)',
      category: 'diabetes',
      categoryLabel: 'Diabetes Care',
      description: 'Comprehensive 3-month blood sugar average (HbA1c), fasting plasma glucose, and urine microalbumin screening.',
      icon: Droplet,
      iconBg: 'bg-amber-50 border-amber-100',
      iconColor: 'text-amber-600',
      parametersCount: 12,
      sampleType: 'Blood & Urine',
      fastingRequired: '8-10 Hrs Fasting',
      reportTime: 'Within 5 Hours',
      price: 39,
      originalPrice: 60,
      discountPercent: 35,
      rating: 4.9,
      reviewsCount: 490,
      homeCollection: true,
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Lab', city: 'Downtown' },
        { id: 'hosp-metro', name: 'Metro Clinical Labs', city: 'North Hub' }
      ]
    },
    {
      id: 'thyroid-profile-total',
      name: 'Comprehensive Thyroid Profile (T3, T4, TSH Ultra)',
      category: 'diabetes',
      categoryLabel: 'Endocrinology',
      description: 'Precision automated chemiluminescence immunoassay measuring active thyroid hormones and pituitary function.',
      icon: Microscope,
      iconBg: 'bg-teal-50 border-teal-100',
      iconColor: 'text-teal-600',
      parametersCount: 6,
      sampleType: 'Blood Sample',
      fastingRequired: 'Overnight Fasting',
      reportTime: 'Within 6 Hours',
      price: 32,
      originalPrice: 48,
      discountPercent: 33,
      rating: 4.8,
      reviewsCount: 350,
      homeCollection: true,
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-stjude', name: 'St. Jude Lab', city: 'Westside' },
        { id: 'hosp-apex', name: 'Apex Pathology Center', city: 'East Wing' }
      ]
    },
  ];

  const filteredTests = tests.filter((test) => {
    const matchesCategory = activeCategory === 'all' || test.category === activeCategory;
    const matchesSearch = 
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tests" className="relative bg-slate-50/70 py-20 sm:py-28 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-28 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
              <FlaskConical className="w-4 h-4 text-blue-600" />
              <span className="tracking-wide uppercase text-[11px] sm:text-xs">Certified Diagnostic Labs</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Book Diagnostic & <br className="hidden sm:block" />
              <span className="text-blue-600">Lab Medical Tests</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Accredited hospital labs with same-day digital reports, precision medical equipment, and optional doorstep home sample collection.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tests, biomarkers, scans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200/80 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100/80 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Horizontal Test Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {filteredTests.map((test) => {
            const Icon = test.icon;
            return (
              <div
                key={test.id}
                className="group bg-white rounded-3xl border border-slate-200/80 hover:border-blue-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between"
              >
                {/* Horizontal Top Row: Left Icon + Main Info */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  
                  {/* Left Column: Icon */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 border shadow-xs group-hover:scale-105 transition-transform duration-300 ${test.iconBg} ${test.iconColor}`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  {/* Middle / Info Body */}
                  <div className="flex-1 min-w-0 space-y-2.5">
                    
                    {/* Top Meta Chips */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
                          {test.categoryLabel}
                        </span>

                        {test.homeCollection && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                            <Home className="w-3 h-3" />
                            Home Pickup
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-slate-900 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{test.rating}</span>
                        <span className="text-[10px] text-slate-400 font-normal">({test.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Test Title & Biomarker count */}
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                        {test.name}
                      </h3>
                      
                      {test.parametersCount > 1 && (
                        <p className="inline-flex items-center gap-1 mt-1 text-[11px] font-bold text-blue-600 bg-blue-50/70 px-2 py-0.5 rounded-md">
                          <Zap className="w-3 h-3" />
                          <span>Includes {test.parametersCount} Biomarkers</span>
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {test.description}
                    </p>

                    {/* Fasting & Report Specs */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-600 font-medium">
                      <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                        <Clock className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{test.reportTime}</span>
                      </div>

                      <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                        <FileText className="w-3 h-3 text-indigo-600 shrink-0" />
                        <span>{test.fastingRequired}</span>
                      </div>
                    </div>

                    {/* Available Hospitals */}
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-blue-600" />
                          <span>Available at {test.hospitals.length} {test.hospitals.length === 1 ? 'Hospital' : 'Hospitals'}:</span>
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {test.hospitals.slice(0, 2).map((hosp) => (
                          <span 
                            key={hosp.id}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 text-[11px] font-medium border border-slate-200/60 truncate max-w-[170px]"
                            title={`${hosp.name} (${hosp.city})`}
                          >
                            <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                            <span className="truncate">{hosp.name}</span>
                          </span>
                        ))}
                        {test.hospitals.length > 2 && (
                          <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold">
                            +{test.hospitals.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                  </div>

                </div>

                {/* Bottom Card Footer: Price & Booking Action */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl sm:text-2xl font-black text-slate-900">${test.price}</span>
                      {test.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">${test.originalPrice}</span>
                      )}
                    </div>
                    {test.discountPercent && (
                      <span className="text-[10px] font-bold text-emerald-600">
                        Save {test.discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  <a
                    href="#book-test"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                  >
                    <span>Book Test</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Free Home Sample Collection Guarantee Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold tracking-tight">
                Safe & Hygienic Home Sample Pickup Available
              </h4>
              <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                Certified phlebotomists arrive at your doorstep. Digital reports sent securely via SMS & Email.
              </p>
            </div>
          </div>

          <a
            href="#tests"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-sm transition-all duration-300 shrink-0 hover:-translate-y-0.5"
          >
            <CalendarDays className="w-4 h-4 text-blue-600" />
            <span>Book Home Collection</span>
          </a>
        </div>

      </div>

    </section>
  );
}
