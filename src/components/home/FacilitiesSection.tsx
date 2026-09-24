'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  HeartHandshake, 
  Tv, 
  Wifi, 
  Layers, 
  Zap,
  MapPin,
  Stethoscope,
  Plane,
  Syringe,
  Microscope,
  Bed,
  PhoneCall
} from 'lucide-react';

// Hospital reference entity
export interface FacilityHospital {
  id: string;
  name: string;
  city: string;
}

// Full Facility Item Interface for future API / Database integration
export interface FacilityItem {
  id: string;
  title: string;
  tagline: string;
  category: 'all' | 'surgical' | 'emergency' | 'imaging' | 'critical' | 'comfort';
  categoryLabel: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  hospitals: FacilityHospital[];
  available24_7?: boolean;
}

export default function FacilitiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Facilities' },
    { id: 'surgical', label: 'Robotic & Surgical' },
    { id: 'emergency', label: 'Emergency & Helipad' },
    { id: 'imaging', label: 'Diagnostic Imaging' },
    { id: 'critical', label: 'Intensive Care (ICU)' },
    { id: 'comfort', label: 'VIP Rooms & Care' },
  ];

  // Dummy Facilities Dataset - easily replaceable with API / CMS data
  const facilities: FacilityItem[] = [
    {
      id: 'robotic-surgery',
      title: 'Robotic & Hybrid Surgical Suites',
      tagline: 'Da Vinci Xi Robotic Assisted Precision Surgery',
      category: 'surgical',
      categoryLabel: 'Robotic Surgery',
      description: 'Ultra-modern laminar air flow modular operating theaters equipped with 4K 3D robotic visualization for minimally invasive procedures.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop',
      badge: 'Next-Gen Robotics',
      features: [
        'Da Vinci Xi 4-Arm Robotic System',
        'Laminar Flow 99.99% Sterile HEPA Cleanrooms',
        'Intraoperative 3D Imaging Navigation'
      ],
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-stjude', name: 'St. Jude Heart Institute', city: 'Westside' }
      ]
    },
    {
      id: 'emergency-helipad',
      title: '24/7 Trauma Center & Rooftop Helipad',
      tagline: 'Instant Air Ambulance Evacuation & Level-1 Trauma Triage',
      category: 'emergency',
      categoryLabel: 'Trauma & Air Evac',
      description: 'Dedicated rooftop helipad with direct high-speed elevator access to trauma resuscitation bays, blood bank, and emergency surgical suites.',
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=800&auto=format&fit=crop',
      badge: 'Zero-Delay Response',
      features: [
        'Direct Helipad-to-OT High Speed Elevators',
        'Level-1 Multi-Bed Resuscitation Bays',
        'Dedicated Emergency Ultrasound & CT Suite'
      ],
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-metro', name: 'Metro City Trauma Center', city: 'North Hub' }
      ],
      available24_7: true
    },
    {
      id: 'diagnostic-imaging-center',
      title: '3T MRI & 128-Slice Low-Dose CT Lab',
      tagline: 'Next-Generation High-Precision Diagnostic Imaging',
      category: 'imaging',
      categoryLabel: 'Diagnostic Scans',
      description: 'Wide-bore 3T MRI machines engineered for maximum patient comfort, reducing claustrophobia while delivering sub-millimeter anatomical detail.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
      badge: 'Sub-Millimeter Precision',
      features: [
        'Silent Scan 70cm Wide Bore 3T MRI',
        '128-Slice Ultra Fast CT Angiography',
        'Digital AI Automated Anomaly Detection'
      ],
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-stjude', name: 'St. Jude Health Hub', city: 'Westside' },
        { id: 'hosp-apex', name: 'Apex Neuro & Spine Institute', city: 'East Wing' }
      ]
    },
    {
      id: 'intensive-care-icu',
      title: 'Advanced Digital ICU & Level-III NICU',
      tagline: 'Continuous Multi-Parameter AI Telemetric Patient Monitoring',
      category: 'critical',
      categoryLabel: 'Critical Care ICU',
      description: 'Dedicated isolated negative-pressure ICU pods with 1:1 specialist nursing, advanced mechanical ventilators, and ECMO life support.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      badge: '1:1 Nursing Ratio',
      features: [
        'Isolated Negative-Pressure Infection Pods',
        'Level-III High-Frequency Neonatal NICU',
        'ECMO (Extra-Corporeal Life Support) Ready'
      ],
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-childrens', name: 'Children & Maternal Hope Center', city: 'Green Valley' }
      ],
      available24_7: true
    },
    {
      id: 'pharmacy-blood-bank',
      title: 'Automated 24/7 Pharmacy & Blood Bank',
      tagline: 'Robotic Dispensing & Temperature-Monitored Blood Storage',
      category: 'emergency',
      categoryLabel: 'Pharmacy & Blood',
      description: 'State-certified component blood separation lab with round-the-clock availability of rare blood types, platelets, and robotic drug dispensing.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop',
      badge: 'Accredited Blood Bank',
      features: [
        'Robotic Prescription Dispensing System',
        'Rare Blood Groups & Platelet Apheresis',
        'Continuous Digital Cold Chain Monitoring'
      ],
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-metro', name: 'Metro City Trauma Center', city: 'North Hub' },
        { id: 'hosp-stjude', name: 'St. Jude Heart Institute', city: 'Westside' }
      ],
      available24_7: true
    },
    {
      id: 'vip-patient-suites',
      title: 'Deluxe VIP Suites & Family Lounges',
      tagline: 'Hospitality-Grade Recovery Comfort with Private Dining',
      category: 'comfort',
      categoryLabel: 'Patient Comfort',
      description: 'Spacious private recovery suites with companion accommodation, smart room automation, ambient daylight views, and dedicated attendant service.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      badge: '5-Star Comfort',
      features: [
        'Smart Bed Automation & Nurse Call Systems',
        'Private Companion Bedroom & Attached Living Area',
        'Chef-Curated Clinical Nutrition Dining'
      ],
      hospitals: [
        { id: 'hosp-central', name: 'MediFind Central Hospital', city: 'Downtown' },
        { id: 'hosp-childrens', name: 'Children & Maternal Hope Center', city: 'Green Valley' }
      ]
    },
  ];

  const filteredFacilities = activeCategory === 'all' 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  return (
    <section id="facilities" className="relative bg-white py-20 sm:py-28 overflow-hidden">
      
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
              <span className="tracking-wide uppercase text-[11px] sm:text-xs">World-Class Infrastructure</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Advanced Medical <br className="hidden sm:block" />
              <span className="text-blue-600">Facilities & Technology</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Equipped with robotic operating suites, Level-1 trauma helipads, and cutting-edge diagnostic technology for superior patient safety and clinical outcomes.
            </p>
          </div>

          {/* Infrastructure Guarantee Chip */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs shrink-0">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">JCI & ISO Certified</p>
              <p className="text-xs text-slate-500 font-medium">100% Sterile Cleanroom Standards</p>
            </div>
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

        {/* Facilities Grid (3 Cards Per Row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-3xl border border-slate-200/80 hover:border-blue-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                
                {/* Facility Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-xs">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                      {facility.badge}
                    </span>

                    {facility.available24_7 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        24/7 Active
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Title */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-blue-300 text-[10px] font-bold tracking-wider uppercase block mb-0.5">
                      {facility.categoryLabel}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black tracking-tight text-white leading-snug line-clamp-1">
                      {facility.title}
                    </h3>
                  </div>

                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* Tagline & Description */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-800">
                      {facility.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {facility.description}
                    </p>
                  </div>

                  {/* Key Feature Bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Key Highlights & Specs
                    </p>
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Available in Hospitals Network */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-blue-600" />
                        <span>Equipped at {facility.hospitals.length} {facility.hospitals.length === 1 ? 'Hospital' : 'Hospitals'}:</span>
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {facility.hospitals.map((hosp) => (
                        <span 
                          key={hosp.id}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 text-[11px] font-medium border border-slate-200/60 truncate max-w-[170px]"
                          title={`${hosp.name} (${hosp.city})`}
                        >
                          <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                          <span className="truncate">{hosp.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Card Footer Action */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-auto bg-slate-50/40">
                <div className="flex items-center justify-between gap-3 pt-4">
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Active & Certified</span>
                  </span>

                  <a
                    href="#book"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                  >
                    <span>Inquire / Visit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Hospital Network Infrastructure CTA Banner */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
              <span>Standardized Clinical Excellence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Need a Hospital with Specific Equipment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Our central patient care desk helps you locate nearby hospitals equipped with robotic OT, 3T MRI, NICU beds, or dedicated trauma units.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full sm:w-auto">
            <a
              href="#hospitals"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Facilities Directory</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+18002472273"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 transition-all duration-300"
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
