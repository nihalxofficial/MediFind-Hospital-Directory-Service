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
  Sparkles, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Activity, 
  Stethoscope, 
  Search,
  CheckCircle2,
  Clock,
  ChevronRight
} from 'lucide-react';

export interface HospitalDoctor {
  name: string;
  specialty: string;
  avatar: string;
  experience: string;
}

export interface HospitalItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  categoryLabel: string;
  image: string;
  rating: number;
  reviewsCount: number;
  location: {
    address: string;
    city: string;
    distance?: string;
  };
  emergency24_7: boolean;
  bedCount: number;
  doctorsCount: number;
  establishedYear: number;
  services: string[];
  facilities: string[];
  featuredDoctors: HospitalDoctor[];
  phone: string;
  verified: boolean;
}

export interface HospitalCategory {
  id: string;
  label: string;
}

interface HospitalsClientProps {
  initialHospitals: HospitalItem[];
  categories: HospitalCategory[];
}

export default function HospitalsClient({ initialHospitals, categories }: HospitalsClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedDoctors, setExpandedDoctors] = useState<Record<string, boolean>>({});

  const toggleDoctors = (hospitalId: string) => {
    setExpandedDoctors(prev => ({
      ...prev,
      [hospitalId]: !prev[hospitalId]
    }));
  };

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
          {filteredHospitals.map((hosp) => (
            <div
              key={hosp.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={hosp.image}
                    alt={hosp.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold backdrop-blur-md shadow-xs">
                      {hosp.categoryLabel}
                    </span>
                    {hosp.emergency24_7 && (
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
                      <span className="font-bold">{hosp.rating}</span>
                      <span className="text-slate-300">({hosp.reviewsCount} reviews)</span>
                    </div>

                    <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 font-semibold text-[11px]">
                      Est. {hosp.establishedYear}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                      {hosp.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {hosp.tagline}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{hosp.location.address}, {hosp.location.city} {hosp.location.distance ? `• ${hosp.location.distance}` : ''}</span>
                  </div>

                  {/* Bed and Doctor Stats */}
                  <div className="grid grid-cols-2 gap-2.5 py-2.5 px-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="font-bold text-slate-900">{hosp.bedCount}+</p>
                        <p className="text-[10px] text-slate-500">Hospital Beds</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <div>
                        <p className="font-bold text-slate-900">{hosp.doctorsCount}+</p>
                        <p className="text-[10px] text-slate-500">Specialist MDs</p>
                      </div>
                    </div>
                  </div>

                  {/* Services Tags */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Services</p>
                    <div className="flex flex-wrap gap-1.5">
                      {hosp.services.slice(0, 3).map((service, idx) => (
                        <span key={idx} className="text-[11px] font-medium bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-lg border border-blue-100">
                          {service}
                        </span>
                      ))}
                      {hosp.services.length > 3 && (
                        <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-lg">
                          +{hosp.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Featured Doctors Roster Toggle */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleDoctors(hosp.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:text-blue-600 py-2 px-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-200/60"
                    >
                      <span className="flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
                        <span>Featured Doctors ({hosp.featuredDoctors.length})</span>
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expandedDoctors[hosp.id] ? 'rotate-90' : ''}`} />
                    </button>

                    {expandedDoctors[hosp.id] && (
                      <div className="mt-2.5 space-y-2 p-3 bg-slate-50/90 rounded-xl border border-slate-200/60 text-xs">
                        {hosp.featuredDoctors.map((doc, idx) => (
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
                  href={`tel:${hosp.phone}`}
                  className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label={`Call ${hosp.name}`}
                >
                  <Phone className="w-4 h-4" />
                </a>

                <Link
                  href={`/appointment?hospital=${encodeURIComponent(hosp.name)}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
