'use client';

import { useState } from 'react';
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
  PhoneCall, 
  CalendarDays,
  ShieldCheck,
  Star,
  Building2,
  MapPin
} from 'lucide-react';

// Hospital entity model
export interface HospitalInfo {
  id: string;
  name: string;
  city: string;
  branch?: string;
}

// Data model interface for future API / Database integration
export interface ServiceItem {
  id: string;
  title: string;
  category: 'all' | 'cardio' | 'neuro' | 'pediatric' | 'diag' | 'ortho';
  categoryLabel: string;
  description: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  features: string[];
  hospitals: HospitalInfo[]; // One or many hospitals providing this service
  specialistsCount: number;
  rating: number;
  available24_7?: boolean;
}

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cardio', label: 'Cardiology' },
    { id: 'neuro', label: 'Neurology' },
    { id: 'pediatric', label: 'Pediatrics' },
    { id: 'diag', label: 'Diagnostics & Labs' },
    { id: 'ortho', label: 'Orthopedics' },
  ];

  // Structured dummy data - easily replaceable with dynamic API / CMS data
  const services: ServiceItem[] = [
    {
      id: 'cardio-care',
      title: 'Cardiology & Heart Care',
      category: 'cardio',
      categoryLabel: 'Heart Center',
      description: 'Comprehensive cardiac assessments, ECG, angioplasty, and 24/7 rapid response for acute coronary conditions.',
      icon: HeartPulse,
      iconBg: 'bg-rose-50 border-rose-100',
      iconColor: 'text-rose-600',
      features: ['Coronary Angiography', '4D Echocardiography', 'Cardiac Rehabilitation'],
      hospitals: [
        { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown', branch: 'Main Campus' },
        { id: 'hosp-2', name: 'St. Jude Heart Institute', city: 'Westside' },
        { id: 'hosp-3', name: 'Metro Health Care', city: 'North Hub' }
      ],
      specialistsCount: 12,
      rating: 4.9,
      available24_7: true,
    },
    {
      id: 'neuro-care',
      title: 'Neurology & Brain Health',
      category: 'neuro',
      categoryLabel: 'Neuro Sciences',
      description: 'Expert diagnostics and surgical interventions for stroke, epilepsy, neuro-muscular disorders, and spine rehabilitation.',
      icon: Brain,
      iconBg: 'bg-indigo-50 border-indigo-100',
      iconColor: 'text-indigo-600',
      features: ['Digital Brain EEG', 'Spine & Trauma Surgery', 'Stroke Intervention'],
      hospitals: [
        { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-4', name: 'NeuroCare Specialist Hospital', city: 'East Wing' }
      ],
      specialistsCount: 8,
      rating: 4.8,
    },
    {
      id: 'pediatric-care',
      title: 'Pediatrics & Neonatal Care',
      category: 'pediatric',
      categoryLabel: 'Child Health',
      description: 'Gentle, specialized care for infants, children, and teenagers, featuring state-of-the-art NICU and routine vaccination programs.',
      icon: Baby,
      iconBg: 'bg-amber-50 border-amber-100',
      iconColor: 'text-amber-600',
      features: ['Neonatal ICU (NICU)', 'Growth & Nutrition Clinic', 'Childhood Vaccines'],
      hospitals: [
        { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-5', name: 'Children & Family Care Center', city: 'South Branch' },
        { id: 'hosp-2', name: 'St. Jude Health', city: 'Westside' }
      ],
      specialistsCount: 10,
      rating: 5.0,
      available24_7: true,
    },
    {
      id: 'diag-labs',
      title: 'Diagnostics & Pathology',
      category: 'diag',
      categoryLabel: 'Laboratory',
      description: 'High-precision 3T MRI, 128-slice CT scans, digital ultrasound, and automated robotic laboratory analysis with same-day reports.',
      icon: Microscope,
      iconBg: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-600',
      features: ['3T High-Res MRI', 'Low-Dose CT Scan', 'Same-Day Blood Reports'],
      hospitals: [
        { id: 'hosp-1', name: 'MediFind Central Diagnostic Lab', city: 'Downtown' },
        { id: 'hosp-3', name: 'Metro Advanced Labs', city: 'North Hub' },
        { id: 'hosp-6', name: 'Apex Digital Pathology', city: 'Central Park' }
      ],
      specialistsCount: 15,
      rating: 4.9,
    },
    {
      id: 'ortho-care',
      title: 'Orthopedics & Joint Care',
      category: 'ortho',
      categoryLabel: 'Bone & Joints',
      description: 'Minimally invasive joint replacements, arthroscopy, sports injury recovery, and complete physiotherapy rehabilitation.',
      icon: Bone,
      iconBg: 'bg-teal-50 border-teal-100',
      iconColor: 'text-teal-600',
      features: ['Robotic Joint Replacement', 'Sports Injury Rehab', 'Spine Care Clinic'],
      hospitals: [
        { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-7', name: 'Orthopedic Bone & Joint Clinic', city: 'Midtown' }
      ],
      specialistsCount: 9,
      rating: 4.8,
    },
    {
      id: 'ophthalmology-care',
      title: 'Ophthalmology & Eye Care',
      category: 'all',
      categoryLabel: 'Vision Health',
      description: 'Advanced bladeless LASIK, cataract surgery, glaucoma management, and comprehensive pediatric eye examinations.',
      icon: Eye,
      iconBg: 'bg-emerald-50 border-emerald-100',
      iconColor: 'text-emerald-600',
      features: ['Bladeless LASIK Laser', 'Micro-Incision Cataract', 'Glaucoma Therapy'],
      hospitals: [
        { id: 'hosp-8', name: 'MediFind Vision & Eye Care', city: 'Downtown' }
      ],
      specialistsCount: 7,
      rating: 4.9,
    },
    {
      id: 'general-consult',
      title: 'General & Internal Medicine',
      category: 'all',
      categoryLabel: 'Primary Care',
      description: 'Holistic preventive health checkups, chronic disease management, lifestyle medicine, and prompt specialist referrals.',
      icon: Stethoscope,
      iconBg: 'bg-sky-50 border-sky-100',
      iconColor: 'text-sky-600',
      features: ['Executive Health Check', 'Diabetes Management', 'Immunology & Allergy'],
      hospitals: [
        { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-2', name: 'St. Jude Medical', city: 'Westside' },
        { id: 'hosp-3', name: 'Metro Health Care', city: 'North Hub' },
        { id: 'hosp-5', name: 'Family Health Hub', city: 'South Branch' }
      ],
      specialistsCount: 16,
      rating: 4.9,
      available24_7: true,
    },
    {
      id: 'emergency-trauma',
      title: 'Emergency & Trauma Care',
      category: 'all',
      categoryLabel: '24/7 Critical',
      description: 'Level 1 emergency trauma center equipped with modern life-support ambulances, rapid triage, and instant surgical readiness.',
      icon: Activity,
      iconBg: 'bg-rose-50 border-rose-100',
      iconColor: 'text-rose-600',
      features: ['Rapid Ambulance Dispatch', 'Advanced Trauma Beds', 'Immediate Resuscitation'],
      hospitals: [
        { id: 'hosp-1', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-3', name: 'Metro Emergency Center', city: 'North Hub' }
      ],
      specialistsCount: 20,
      rating: 5.0,
      available24_7: true,
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="relative bg-slate-50/70 py-20 sm:py-28 overflow-hidden">
      
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-28 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="tracking-wide uppercase text-[11px] sm:text-xs">Comprehensive Healthcare</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Our Specialized <br className="hidden sm:block" />
              <span className="text-blue-600">Medical Services</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore medical specialties offered across our verified partner hospital network. Find certified specialists and book care at your preferred branch.
            </p>
          </div>

          {/* Emergency Contact Quick Card */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow shrink-0">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
              <PhoneCall className="w-5 h-5 text-blue-600 animate-pulse" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">24/7 Medical Hotline</p>
              <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight">+1 (800) 247-CARE</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
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

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 hover:border-blue-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`p-3.5 rounded-2xl border shadow-xs transition-transform duration-300 group-hover:scale-105 ${service.iconBg} ${service.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      {service.available24_7 && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          24/7
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold border border-slate-200/60">
                        {service.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Available Hospitals Section */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <Building2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Available at {service.hospitals.length} {service.hospitals.length === 1 ? 'Hospital' : 'Hospitals'}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        Verified Network
                      </span>
                    </div>

                    {/* Hospital Badges / List */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.hospitals.slice(0, 2).map((hosp) => (
                        <span 
                          key={hosp.id}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-[11px] font-medium border border-slate-200/70 transition-colors"
                          title={`${hosp.name} (${hosp.city})`}
                        >
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate max-w-[140px] sm:max-w-[170px]">{hosp.name}</span>
                        </span>
                      ))}

                      {service.hospitals.length > 2 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-semibold">
                          +{service.hospitals.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="mt-3 pt-3 border-t border-slate-100/80 space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Info & Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-slate-900">{service.rating}</span>
                    <span className="text-[11px] text-slate-400">({service.specialistsCount} Specialists)</span>
                  </div>

                  <a
                    href="#book"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 group/btn transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          {/* Subtle Banner Background Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
              <span>Network Wide Healthcare Consultations</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Need Help Choosing a Hospital or Specialist?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
              Our central clinical advisory desk is here to connect you with the right medical branch and schedule your consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full sm:w-auto">
            <a
              href="#book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <CalendarDays className="w-4 h-4 text-blue-600" />
              <span>Make an Appointment</span>
            </a>
            <a
              href="tel:+18002472273"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Helpline</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
