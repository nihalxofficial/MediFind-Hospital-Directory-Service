'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, Activity, CheckCircle2 } from 'lucide-react';
import slide3Bg from '@/assets/hero-slide-3.jpg';

export default function Slide3() {
  return (
    <div className="relative w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex items-center pt-10 pb-16 lg:pb-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src={slide3Bg}
        alt="Advanced Medical Research Center Hospital Exterior"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Smooth gradient transition overlay for mobile/tablets */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/60 lg:via-transparent pointer-events-none" />

      {/* Ambient glow highlights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* Left-Aligned Slide Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-5 sm:space-y-7 text-left">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/90 border border-indigo-200/90 text-indigo-700 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-indigo-600 animate-spin" />
            <span>Clinical Excellence & Innovation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Precision <span className="text-indigo-600">Diagnostics</span> & Modern <span className="text-blue-600">Surgery</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
            Experience state-of-the-art diagnostic imaging, high-precision robotic surgery, and accredited pathology laboratories delivering fast, reliable results.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-700 font-medium pt-1">
            <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              Advanced 3T MRI & CT Scans
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              Robotic Surgical Suites
            </span>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 pt-2">
            <a
              href="#facilities"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(79,70,229,0.28)] hover:shadow-[0_14px_28px_rgba(79,70,229,0.38)] transition-all duration-300 hover:-translate-y-0.5 group border border-indigo-400/30"
            >
              <span>Explore Facilities</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#tests"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-slate-800 font-bold text-sm sm:text-base border border-slate-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md"
            >
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
              <span>Diagnostic Tests</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
