'use client';

import Image from 'next/image';
import { 
  Sparkles, 
  Clock, 
  UserCheck, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  PhoneCall
} from 'lucide-react';
import aboutBg from "@/assets/about-bg.png";

export default function AboutSection() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Rapid Care",
      desc: "Emergency triage & round-the-clock intensive care",
      bgLight: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: UserCheck,
      title: "Certified Specialists",
      desc: "Over 50+ board-certified surgeons & physicians",
      bgLight: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      icon: ShieldCheck,
      title: "Modern Diagnostics",
      desc: "Next-gen MRI, digital CT scan & automated labs",
      bgLight: "bg-teal-50 text-teal-600 border-teal-100",
    },
    {
      icon: HeartHandshake,
      title: "Patient-First Ethos",
      desc: "Compassionate bedside care with 98% satisfaction",
      bgLight: "bg-rose-50 text-rose-600 border-rose-100",
    },
  ];

  const keyPoints = [
    "State-of-the-art diagnostic imaging & robotic surgical suites",
    "Direct digital access to test results & specialist consultation",
    "Internationally recognized patient safety & hygienic protocols",
  ];

  return (
    <section className="relative bg-white pt-16 sm:pt-24 md:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      
      {/* Background Hospital Visual (User's custom asset with built-in layout) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutBg}
          alt="MediFind Hospital Facility"
          fill
          priority
          className="object-cover object-left lg:object-center"
        />
      </div>

      {/* Main Content Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Spacer - leaves hospital building on left clear */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 h-[380px] sm:h-[480px]" />

          {/* Right Column Content - perfectly positioned inside the right white zone */}
          <div className="lg:col-span-7 xl:col-span-7 lg:pl-6 xl:pl-12">
            <div className="bg-white/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 sm:p-10 lg:p-0 rounded-3xl border border-slate-200/80 lg:border-none shadow-xl lg:shadow-none space-y-6 sm:space-y-7">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="tracking-wide uppercase text-[11px] sm:text-xs">About MediFind Healthcare</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  MediFind Hospital <br className="hidden sm:block" />
                  <span className="text-blue-600">
                    For a Healthier Life
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                  MediFind is committed to delivering world-class healthcare services powered by advanced medical technology, experienced specialists, and a compassionate, patient-centered environment.
                </p>
              </div>

              {/* Key Highlights Checklist */}
              <div className="space-y-2.5 pt-1">
                {keyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 rounded-full bg-blue-100 text-blue-600 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* 4 Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                {features.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.title} 
                      className="group p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/70 hover:border-blue-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3.5"
                    >
                      <div className={`p-3 rounded-xl border shadow-2xs shrink-0 group-hover:scale-110 transition-transform duration-300 ${item.bgLight}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Actions & Trust Banner */}
              <div className="pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      DR
                    </div>
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      MD
                    </div>
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-teal-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      RN
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-slate-900 font-bold text-xs">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>ISO 9001 Certified</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">50+ Top Doctors On Duty</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <span>Our Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/70 transition-colors"
                    title="Emergency Call"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}