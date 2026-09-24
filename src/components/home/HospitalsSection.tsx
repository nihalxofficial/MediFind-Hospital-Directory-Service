'use client';

import { useState } from 'react';
import Image from 'next/image';
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
  Check, 
  Search,
  ChevronRight
} from 'lucide-react';

// Hospital Doctor Interface
export interface HospitalDoctor {
  name: string;
  specialty: string;
  avatar: string;
  experience: string;
}

// Full Hospital Entity Interface for future backend / CMS integration
export interface HospitalItem {
  id: string;
  name: string;
  tagline: string;
  category: 'all' | 'multispecialty' | 'cardiac' | 'children' | 'trauma' | 'ortho';
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

export default function HospitalsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedDoctors, setExpandedDoctors] = useState<Record<string, boolean>>({});

  const toggleDoctors = (hospitalId: string) => {
    setExpandedDoctors(prev => ({
      ...prev,
      [hospitalId]: !prev[hospitalId]
    }));
  };

  const categories = [
    { id: 'all', label: 'All Hospitals' },
    { id: 'multispecialty', label: 'Multi-Specialty' },
    { id: 'cardiac', label: 'Cardiac Centers' },
    { id: 'children', label: 'Children Hospitals' },
    { id: 'trauma', label: 'Emergency & Trauma' },
    { id: 'ortho', label: 'Orthopedic & Spine' },
  ];

  // Dummy Hospital Dataset - 6 complete hospitals (2 rows of 3 on desktop)
  const hospitals: HospitalItem[] = [
    {
      id: 'hosp-central',
      name: 'MediFind Central Hospital',
      tagline: 'Premier Multi-Disciplinary Tertiary Care & Research Center',
      category: 'multispecialty',
      categoryLabel: 'Multi-Specialty',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop',
      rating: 4.9,
      reviewsCount: 428,
      location: {
        address: '742 Evergreen Ave',
        city: 'Downtown',
        distance: '1.2 km'
      },
      emergency24_7: true,
      bedCount: 450,
      doctorsCount: 120,
      establishedYear: 2005,
      services: ['Cardiology', 'Neurology', 'Robotic Surgery', 'Oncology', 'Organ Transplant'],
      facilities: ['Helipad Access', '3T MRI Lab', 'Hybrid ICU', '24/7 Pharmacy'],
      featuredDoctors: [
        {
          name: 'Dr. Marcus Vance',
          specialty: 'Cardiologist',
          avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop',
          experience: '18+ Yrs'
        },
        {
          name: 'Dr. Elena Rostova',
          specialty: 'Neurosurgeon',
          avatar: 'https://images.unsplash.com/photo-1594824813629-9e8c3b94b0f9?q=80&w=200&auto=format&fit=crop',
          experience: '14+ Yrs'
        },
        {
          name: 'Dr. James Chen',
          specialty: 'Orthopedic Lead',
          avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop',
          experience: '12+ Yrs'
        },
        {
          name: 'Dr. Sophia Reed',
          specialty: 'Oncologist',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
          experience: '10+ Yrs'
        }
      ],
      phone: '+1 (800) 555-0199',
      verified: true,
    },
    {
      id: 'hosp-stjude',
      name: 'St. Jude Heart & Vascular Institute',
      tagline: 'Leading Cardiology, Angioplasty & Cardiovascular Surgery',
      category: 'cardiac',
      categoryLabel: 'Cardiac Center',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      rating: 4.9,
      reviewsCount: 310,
      location: {
        address: '108 Palm Medical Plaza',
        city: 'Westside',
        distance: '3.4 km'
      },
      emergency24_7: true,
      bedCount: 280,
      doctorsCount: 65,
      establishedYear: 2011,
      services: ['Cardiac ICU', 'Electrophysiology', 'Bypass Surgery', 'Preventive Heart Care'],
      facilities: ['Cath Labs', 'Cardiac Rehab', 'ECG 4D Suite', 'Angio Team'],
      featuredDoctors: [
        {
          name: 'Dr. Sarah Jenkins',
          specialty: 'Heart Specialist',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
          experience: '16+ Yrs'
        },
        {
          name: 'Dr. Robert Thorne',
          specialty: 'Vascular Surgeon',
          avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
          experience: '15+ Yrs'
        },
        {
          name: 'Dr. David Kim',
          specialty: 'Cardiac Electrophysiologist',
          avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop',
          experience: '11+ Yrs'
        }
      ],
      phone: '+1 (800) 555-0248',
      verified: true,
    },
    {
      id: 'hosp-childrens',
      name: 'Children & Maternal Hope Center',
      tagline: 'Dedicated Pediatric, Neonatal (NICU) & Maternity Care',
      category: 'children',
      categoryLabel: 'Children Center',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
      rating: 4.8,
      reviewsCount: 285,
      location: {
        address: '320 Sunshine Blvd',
        city: 'Green Valley',
        distance: '4.8 km'
      },
      emergency24_7: true,
      bedCount: 220,
      doctorsCount: 50,
      establishedYear: 2016,
      services: ['Level III NICU', 'Pediatric Surgery', 'Child Development', 'Maternity'],
      facilities: ['Play Therapy Zone', 'Family Suites', 'Milk Bank', 'Child Ambulance'],
      featuredDoctors: [
        {
          name: 'Dr. Amara Patel',
          specialty: 'Pediatric Director',
          avatar: 'https://images.unsplash.com/photo-1594824813629-9e8c3b94b0f9?q=80&w=200&auto=format&fit=crop',
          experience: '11+ Yrs'
        },
        {
          name: 'Dr. David Miller',
          specialty: 'Neonatologist',
          avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop',
          experience: '13+ Yrs'
        },
        {
          name: 'Dr. Chloe Anderson',
          specialty: 'Pediatric Surgeon',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
          experience: '9+ Yrs'
        }
      ],
      phone: '+1 (800) 555-0371',
      verified: true,
    },
    {
      id: 'hosp-metro-trauma',
      name: 'Metro City Trauma & Acute Care',
      tagline: 'Level-1 Emergency Center & Surgical Critical Care',
      category: 'trauma',
      categoryLabel: 'Emergency Care',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop',
      rating: 4.8,
      reviewsCount: 395,
      location: {
        address: '55 North Highway',
        city: 'North Hub',
        distance: '2.1 km'
      },
      emergency24_7: true,
      bedCount: 380,
      doctorsCount: 90,
      establishedYear: 2009,
      services: ['Trauma Resuscitation', 'Burn Unit', 'Emergency Radiology', 'Critical Surgery'],
      facilities: ['24/7 Fast Triage', 'Dual Helipad', 'Decontamination Suite', 'Blood Bank'],
      featuredDoctors: [
        {
          name: 'Dr. Kevin Zhao',
          specialty: 'Trauma Chief',
          avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop',
          experience: '17+ Yrs'
        },
        {
          name: 'Dr. Chloe Anderson',
          specialty: 'Critical Care Lead',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
          experience: '10+ Yrs'
        },
        {
          name: 'Dr. Lucas Berg',
          specialty: 'Emergency Anesthesiologist',
          avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
          experience: '12+ Yrs'
        }
      ],
      phone: '+1 (800) 555-0482',
      verified: true,
    },
    {
      id: 'hosp-neuro-spine',
      name: 'Apex Neuro & Spine Institute',
      tagline: 'Advanced Brain, Spine Surgery & Stroke Rehabilitation Center',
      category: 'multispecialty',
      categoryLabel: 'Neuro Center',
      image: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=800&auto=format&fit=crop',
      rating: 4.9,
      reviewsCount: 260,
      location: {
        address: '890 Innovation Park',
        city: 'East Wing',
        distance: '5.6 km'
      },
      emergency24_7: false,
      bedCount: 190,
      doctorsCount: 45,
      establishedYear: 2018,
      services: ['Brain Surgery', 'Spine Endoscopy', 'Stroke Therapy', 'Neuro Navigation'],
      facilities: ['Intraoperative MRI', 'Robotic Spine Suite', 'Neuro Rehab Gym'],
      featuredDoctors: [
        {
          name: 'Dr. Lucas Berg',
          specialty: 'Spine Surgeon',
          avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
          experience: '19+ Yrs'
        },
        {
          name: 'Dr. Nina Kovar',
          specialty: 'Neurologist',
          avatar: 'https://images.unsplash.com/photo-1594824813629-9e8c3b94b0f9?q=80&w=200&auto=format&fit=crop',
          experience: '12+ Yrs'
        }
      ],
      phone: '+1 (800) 555-0599',
      verified: true,
    },
    {
      id: 'hosp-pacific-ortho',
      name: 'Pacific Orthopedic & Sports Clinic',
      tagline: 'Minimally Invasive Joint Replacement & Sports Medicine',
      category: 'ortho',
      categoryLabel: 'Orthopedics',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      rating: 4.8,
      reviewsCount: 225,
      location: {
        address: '410 Coastal Bay Way',
        city: 'Midtown',
        distance: '3.9 km'
      },
      emergency24_7: false,
      bedCount: 160,
      doctorsCount: 38,
      establishedYear: 2014,
      services: ['Robotic Knee Replacement', 'Arthroscopy', 'Sports Injury Care', 'Physical Therapy'],
      facilities: ['Hydrotherapy Pool', 'Gait Analysis Lab', 'Digital X-Ray Center'],
      featuredDoctors: [
        {
          name: 'Dr. James Chen',
          specialty: 'Orthopedic Surgeon',
          avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop',
          experience: '12+ Yrs'
        },
        {
          name: 'Dr. Sophia Reed',
          specialty: 'Sports Medicine Lead',
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
          experience: '9+ Yrs'
        }
      ],
      phone: '+1 (800) 555-0672',
      verified: true,
    },
  ];

  const filteredHospitals = hospitals.filter((hosp) => {
    const matchesCategory = activeCategory === 'all' || hosp.category === activeCategory;
    const matchesSearch = 
      hosp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hosp.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hosp.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="hospitals" className="relative bg-white py-20 sm:py-28 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-teal-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="tracking-wide uppercase text-[11px] sm:text-xs">Partner Hospitals Network</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Top-Rated <br className="hidden sm:block" />
              <span className="text-blue-600">Partner Hospitals</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Find verified medical centers equipped with accredited doctors, emergency services, and modern clinical infrastructure.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-80 relative shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search hospital, city, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all shadow-2xs"
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
                    : 'bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3-Cards Per Row Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredHospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="group bg-white rounded-3xl border border-slate-200/80 hover:border-blue-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                
                {/* Hospital Header Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  {/* Top Floating Chips */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-xs">
                        <ShieldCheck className="w-3 h-3 text-blue-600" />
                        Verified
                      </span>

                      {hospital.emergency24_7 && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] font-bold shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          24/7 ER
                        </span>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/10 shadow-xs">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{hospital.rating}</span>
                      <span className="text-slate-400 text-[10px]">({hospital.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Bottom Text in Image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <div className="flex items-center gap-1 text-blue-200 text-[11px] font-medium mb-0.5">
                      <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                      <span className="truncate">{hospital.location.address}, {hospital.location.city}</span>
                      {hospital.location.distance && (
                        <span className="bg-white/20 px-1.5 py-0.2 rounded text-[10px] ml-1 shrink-0">
                          {hospital.location.distance}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-black tracking-tight text-white leading-snug line-clamp-1">
                      {hospital.name}
                    </h3>
                  </div>

                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* Tagline */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {hospital.tagline}
                  </p>

                  {/* Key Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-slate-50 border border-slate-200/60 text-center">
                    <div>
                      <p className="text-sm font-black text-slate-900">{hospital.bedCount}+</p>
                      <p className="text-[10px] font-medium text-slate-500 flex items-center justify-center gap-0.5 mt-0.5">
                        <Bed className="w-2.5 h-2.5 text-blue-600" />
                        <span>Beds</span>
                      </p>
                    </div>
                    <div className="border-x border-slate-200">
                      <p className="text-sm font-black text-slate-900">{hospital.doctorsCount}+</p>
                      <p className="text-[10px] font-medium text-slate-500 flex items-center justify-center gap-0.5 mt-0.5">
                        <Users className="w-2.5 h-2.5 text-blue-600" />
                        <span>Doctors</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">{hospital.establishedYear}</p>
                      <p className="text-[10px] font-medium text-slate-500 flex items-center justify-center gap-0.5 mt-0.5">
                        <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                        <span>Est.</span>
                      </p>
                    </div>
                  </div>

                  {/* Services & Specialties Offered */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                      <Stethoscope className="w-3 h-3 text-blue-600" />
                      <span>Services</span>
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {hospital.services.slice(0, 3).map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-medium border border-blue-100/80"
                        >
                          {service}
                        </span>
                      ))}
                      {hospital.services.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
                          +{hospital.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Featured Doctors On Duty */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                        <Users className="w-3 h-3 text-indigo-600" />
                        <span>Doctors on Duty</span>
                      </p>
                      
                      {/* Interactive See More Doctors Trigger */}
                      <button
                        type="button"
                        onClick={() => toggleDoctors(hospital.id)}
                        className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 cursor-pointer hover:underline"
                      >
                        <span>
                          {expandedDoctors[hospital.id] 
                            ? 'Show Less' 
                            : `See all (${hospital.featuredDoctors.length || hospital.doctorsCount})`}
                        </span>
                        <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${expandedDoctors[hospital.id] ? 'rotate-90' : ''}`} />
                      </button>
                    </div>

                    {/* Doctors List (Expandable) */}
                    <div className="space-y-1.5 transition-all duration-300">
                      {(expandedDoctors[hospital.id] 
                        ? hospital.featuredDoctors 
                        : hospital.featuredDoctors.slice(0, 2)
                      ).map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-blue-50/50 transition-colors">
                          <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-white shadow-2xs">
                            <Image
                              src={doc.avatar}
                              alt={doc.name}
                              fill
                              sizes="28px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1 flex items-center justify-between">
                            <p className="text-xs font-bold text-slate-900 truncate">{doc.name}</p>
                            <span className="text-[10px] font-medium text-slate-500 shrink-0 ml-1">{doc.specialty} • {doc.experience}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modern Facilities Highlights */}
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                      <Activity className="w-3 h-3 text-teal-600" />
                      <span>Key Facilities</span>
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 pt-0.5">
                      {hospital.facilities.slice(0, 3).map((fac, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-[11px] text-slate-600">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Card Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-auto bg-slate-50/40">
                <div className="flex items-center justify-between gap-2 pt-4">
                  <a
                    href={`tel:${hospital.phone}`}
                    className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition-colors shrink-0"
                    title="Call Hospital"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                  </a>

                  <a
                    href="#book"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Explore Network CTA */}
        <div className="text-center pt-2">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 sm:p-2.5 pr-4 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-600 text-white text-xs font-bold">
              <Building2 className="w-4 h-4" />
              <span>35+ Affiliated Hospitals Nationwide</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600">
              Need a specialized department near you?
            </p>
            <a
              href="#hospitals"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Explore Full Directory</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
