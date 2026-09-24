'use client';

import { useState } from 'react';
import { 
  PhoneCall, 
  Siren, 
  Activity, 
  Clock, 
  ShieldAlert, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  HeartPulse, 
  Ambulance, 
  Navigation, 
  Zap, 
  Building2, 
  CheckCircle2,
  Radio
} from 'lucide-react';

// Emergency facility unit model
export interface EmergencyServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  desc: string;
  stat: string;
  statLabel: string;
}

// Active ER Hospital Model
export interface ERHospital {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  erBedsAvailable: number;
  ambulanceTime: string;
  distance: string;
}

export default function EmergencySection() {
  const [selectedHospital, setSelectedHospital] = useState<string>('hosp-central');

  const emergencyServices: EmergencyServiceItem[] = [
    {
      id: 'ambulance-dispatch',
      title: 'GPS Rapid Ambulance Fleet',
      subtitle: 'Advanced Life Support (ALS)',
      icon: Ambulance,
      iconBg: 'bg-rose-50 border-rose-100',
      iconColor: 'text-rose-600',
      desc: 'Mobile ICU ambulances equipped with ventilators, defibrillators, oxygen, and trained paramedics dispatched in under 2 minutes.',
      stat: '< 8 Mins',
      statLabel: 'Avg Response Time',
    },
    {
      id: 'cardiac-stroke',
      title: 'Cardiac & Stroke Code Blue',
      subtitle: 'Door-to-Balloon in < 30 Min',
      icon: HeartPulse,
      iconBg: 'bg-red-50 border-red-100',
      iconColor: 'text-red-600',
      desc: 'Immediate catheterization lab activation for heart attacks, plus intravenous thrombolysis protocols for ischemic stroke.',
      stat: '15 Mins',
      statLabel: 'Cath Lab Ready',
    },
    {
      id: 'trauma-surgery',
      title: 'Level-1 Trauma & Surgical Triage',
      subtitle: '24/7 On-Duty Trauma Team',
      icon: Activity,
      iconBg: 'bg-indigo-50 border-indigo-100',
      iconColor: 'text-indigo-600',
      desc: 'Round-the-clock emergency surgeons, anesthesiologists, digital trauma X-ray, and instant blood bank cross-matching.',
      stat: '100%',
      statLabel: 'Surgeon Readiness',
    },
    {
      id: 'pediatric-poison',
      title: 'Pediatric ER & Toxicology',
      subtitle: 'Specialized Child Critical Care',
      icon: ShieldAlert,
      iconBg: 'bg-amber-50 border-amber-100',
      iconColor: 'text-amber-600',
      desc: 'Specialized pediatric trauma bays, neonatal emergency triage, anti-venom reserves, and toxicological antidote handling.',
      stat: '24/7',
      statLabel: 'Pediatric ER Staff',
    },
  ];

  const erHospitals: ERHospital[] = [
    {
      id: 'hosp-central',
      name: 'MediFind Central Hospital ER',
      city: 'Downtown',
      address: '742 Evergreen Healthcare Ave',
      phone: '+1 (800) 911-CARE',
      erBedsAvailable: 14,
      ambulanceTime: '5-7 Mins',
      distance: '1.2 km'
    },
    {
      id: 'hosp-metro',
      name: 'Metro City Trauma & Acute ER',
      city: 'North Hub',
      address: '55 North Highway Medical Complex',
      phone: '+1 (800) 911-8899',
      erBedsAvailable: 9,
      ambulanceTime: '6-9 Mins',
      distance: '2.1 km'
    },
    {
      id: 'hosp-stjude',
      name: 'St. Jude Heart Emergency Center',
      city: 'Westside',
      address: '108 Palm Medical Plaza',
      phone: '+1 (800) 911-3344',
      erBedsAvailable: 11,
      ambulanceTime: '7-10 Mins',
      distance: '3.4 km'
    },
  ];

  return (
    <section id="emergency" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-20 sm:py-28 overflow-hidden text-white">
      
      {/* Background Emergency Red & Blue Ambient Light Orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Urgent Emergency Top Banner Card */}
        <div className="bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(225,29,72,0.3)] border border-rose-500/40 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          {/* Subtle Banner Visual Pattern */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-5 text-center sm:text-left relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white text-rose-600 flex items-center justify-center shrink-0 shadow-lg animate-pulse">
              <PhoneCall className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>24/7 Immediate Trauma & Ambulance Dispatch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Emergency Medical Helpline
              </h2>
              <p className="text-xs sm:text-sm text-rose-100 font-medium max-w-xl">
                Immediate clinical triage, life-support ambulance dispatch, and instant ER reservation.
              </p>
            </div>
          </div>

          {/* Quick Action Dial Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full lg:w-auto shrink-0">
            <a
              href="tel:911"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-rose-600 hover:bg-rose-50 font-black text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <PhoneCall className="w-5 h-5 text-rose-600 animate-bounce" />
              <span>CALL 911 / (800) 911-CARE</span>
            </a>

            <a
              href="#er-locator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-rose-950/40 hover:bg-rose-950/60 text-white font-bold text-sm border border-white/30 backdrop-blur-md transition-all duration-300"
            >
              <Navigation className="w-4 h-4 text-rose-300" />
              <span>Dispatch Ambulance</span>
            </a>
          </div>

        </div>

        {/* Section Header & Benchmarks */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-800/80">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-semibold shadow-xs">
              <Siren className="w-4 h-4 text-rose-500 animate-pulse" />
              <span className="tracking-wide uppercase text-[11px] sm:text-xs">Rapid Response Protocols</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.15]">
              Critical Care & <br className="hidden sm:block" />
              <span className="text-rose-500">Trauma Response Units</span>
            </h3>

            <p className="text-base text-slate-400 leading-relaxed font-normal">
              When seconds count, our coordinated network of emergency medical centers, air ambulance helipads, and specialized trauma surgeons respond instantly.
            </p>
          </div>

          {/* Real-time Status Badge */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/70 backdrop-blur-md shrink-0">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">All 8 Hospital ERs Active</p>
              <p className="text-[11px] text-slate-400 font-medium">34 Trauma Beds Ready Now</p>
            </div>
          </div>
        </div>

        {/* 4 Emergency Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 hover:border-rose-500/50 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-xl shadow-lg"
              >
                <div className="space-y-4">
                  
                  {/* Top Icon & Stat */}
                  <div className="flex items-center justify-between gap-3">
                    <div className={`p-3 rounded-2xl border shadow-xs ${service.iconBg} ${service.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-black text-white tracking-tight leading-tight">{service.stat}</p>
                      <p className="text-[10px] font-medium text-rose-400 uppercase">{service.statLabel}</p>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {service.subtitle}
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-white tracking-tight group-hover:text-rose-400 transition-colors">
                      {service.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>

                </div>

                <div className="pt-4 mt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>24/7 On Duty</span>
                  </span>
                  
                  <span className="text-rose-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Priority Care</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Live ER Hospital Locator & Bed Availability Card */}
        <div id="er-locator" className="bg-slate-800/60 border border-slate-700/70 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Live Emergency Ward Tracker</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Nearby Partner Emergency Rooms & Bed Availability
              </h4>
            </div>

            <p className="text-xs text-slate-400 max-w-sm sm:text-right">
              Real-time synchronization with municipal emergency medical dispatch systems.
            </p>
          </div>

          {/* Hospital ER Rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {erHospitals.map((hosp) => (
              <div
                key={hosp.id}
                className="bg-slate-900/80 border border-slate-700/60 hover:border-rose-500/40 rounded-2xl p-5 space-y-4 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Open & Ready
                    </span>

                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      <span>{hosp.distance}</span>
                    </span>
                  </div>

                  <h5 className="text-base font-bold text-white tracking-tight">
                    {hosp.name}
                  </h5>

                  <p className="text-xs text-slate-400">
                    {hosp.address}, {hosp.city}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-center text-xs">
                    <div className="bg-slate-800/80 p-2 rounded-xl border border-slate-700/50">
                      <p className="text-base font-black text-rose-400">{hosp.erBedsAvailable}</p>
                      <p className="text-[10px] text-slate-400">ER Beds Open</p>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded-xl border border-slate-700/50">
                      <p className="text-base font-black text-emerald-400">{hosp.ambulanceTime}</p>
                      <p className="text-[10px] text-slate-400">Ambulance ETA</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${hosp.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call ER: {hosp.phone}</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
