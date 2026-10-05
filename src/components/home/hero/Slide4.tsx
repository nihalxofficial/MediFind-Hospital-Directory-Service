'use client';

import React from 'react';
import Image from 'next/image';
import { Building2, ArrowRight, Users, CheckCircle2, Star } from 'lucide-react';
import slide4Bg from '@/assets/hero-slide-4.jpg';

export default function Slide4() {
  return (
    <div className="relative w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex items-center pt-10 pb-16 lg:pb-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src={slide4Bg}
        alt="Regional Hospital Network Campus Exterior"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Smooth gradient transition overlay for mobile/tablets */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/60 lg:via-transparent pointer-events-none" />

      {/* Ambient glow highlights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* Left-Aligned Slide Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-5 sm:space-y-7 text-left">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/90 border border-emerald-200/90 text-emerald-700 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-md">
            <Star className="w-4 h-4 text-emerald-600 fill-emerald-500" />
            <span>50+ Top-Rated Partner Hospitals</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Find Top-Rated <span className="text-emerald-600">Hospitals</span> & Book <span className="text-blue-600">Instantly</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
            Discover premier medical centers near you with verified patient reviews, specialist availability, and transparent healthcare services.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-700 font-medium pt-1">
            <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Verified Hospital Accreditation
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              Instant Doctor Appointments
            </span>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 pt-2">
            <a
              href="/hospitals"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(5,150,105,0.28)] hover:shadow-[0_14px_28px_rgba(5,150,105,0.38)] transition-all duration-300 hover:-translate-y-0.5 group border border-emerald-400/30"
            >
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Browse Hospitals</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/doctors"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-slate-800 font-bold text-sm sm:text-base border border-slate-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              <span>Find Specialists</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
