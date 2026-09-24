'use client';

import { 
  HeartPulse, 
  ArrowRight, 
  CalendarDays, 
  Users, 
  Building2, 
  Star, 
  HeartHandshake 
} from 'lucide-react';
import heroBg from "@/assets/hero-bg.png"

export default function Hero() {
  // Replace with your background image path (e.g., "/hero-bg.jpg")
  const bgImageUrl = heroBg.src;

  const stats = [
    { 
      icon: Users, 
      value: "15+", 
      label: "Specialist Doctors", 
      iconBg: "bg-blue-50 text-blue-600 border-blue-100" 
    },
    { 
      icon: HeartHandshake, 
      value: "25,000+", 
      label: "Satisfied Patients", 
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100" 
    },
    { 
      icon: Building2, 
      value: "120+", 
      label: "Modern Rooms", 
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100" 
    },
    { 
      icon: Star, 
      value: "98%", 
      label: "Patient Satisfaction", 
      iconBg: "bg-amber-50 text-amber-500 border-amber-100" 
    },
  ];

  return (
    <section className="relative bg-slate-50">
      
      {/* Hero Wrapper with Full Background Image */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center pt-12 pb-32 overflow-hidden">
        
        {/* Full-bleed Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />

        {/* Gradient Overlay: Solid white/ice blue fade on the left, fading out on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-transparent lg:via-white/80" />

        {/* Subtle Glow Spheres */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

        {/* Left-Aligned Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl space-y-6 sm:space-y-8 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-sm font-semibold shadow-xs backdrop-blur-md">
              <HeartPulse className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>Your Health, Our Priority</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Best Service for Your <span className="text-blue-600"> Health</span> and <span className="text-blue-600">  Family </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              We are here with quality medical services, experienced doctors, and modern facilities to provide the best care for you and your loved ones.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-[0_10px_25px_rgba(37,99,235,0.3)] hover:shadow-[0_14px_28px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5 group border border-blue-400/30"
              >
                <span>See Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-slate-800 font-bold text-base border border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md"
              >
                <CalendarDays className="w-5 h-5 text-blue-600" />
                <span>Make Appointment</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Overlapping Stats Bar (Half in Hero, Half in Next Section) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_20px_45px_rgba(0,0,0,0.07)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className={`flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 text-center sm:text-left ${
                    idx !== 0 ? 'pt-6 md:pt-0 md:pl-6' : ''
                  }`}
                >
                  <div className={`p-3.5 rounded-2xl border shadow-xs ${stat.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}