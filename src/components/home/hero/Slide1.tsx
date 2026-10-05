'use client';

import React from 'react';
import Image from 'next/image';
import { HeartPulse, ArrowRight, CalendarDays, CheckCircle2 } from 'lucide-react';
import slide1Bg from '@/assets/hero-slide-1.jpg';

export default function Slide1() {
  return (
    <div className="relative w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex items-center pt-10 pb-16 lg:pb-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src={slide1Bg}
        alt="Modern Hospital Complex Exterior"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Smooth gradient transition overlay for mobile/tablets */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/60 lg:via-transparent pointer-events-none" />

      {/* Ambient glow highlights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* Left-Aligned Slide Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-5 sm:space-y-7 text-left">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/90 border border-blue-200/90 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-md">
            <HeartPulse className="w-4 h-4 text-blue-600 animate-pulse" />
            <span>Your Health, Our Priority</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Best Service for Your <span className="text-blue-600">Health</span> and <span className="text-blue-600">Family</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
            We are here with quality medical services, experienced doctors, and modern hospital facilities to provide the best care for you and your loved ones.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-700 font-medium pt-1">
            <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              24/7 Specialist Support
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              Verified Top Hospitals
            </span>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 pt-2">
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(37,99,235,0.28)] hover:shadow-[0_14px_28px_rgba(37,99,235,0.38)] transition-all duration-300 hover:-translate-y-0.5 group border border-blue-400/30"
            >
              <span>See Services</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/appointment"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-slate-800 font-bold text-sm sm:text-base border border-slate-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md"
            >
              <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span>Make Appointment</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
