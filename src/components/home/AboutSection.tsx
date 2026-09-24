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
  Activity,
  Award,
  PhoneCall
} from 'lucide-react';
import aboutBg from "@/assets/about-bg.png";

export default function AboutSection() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Rapid Care",
      desc: "Instant emergency triage & round-the-clock intensive care units",
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: UserCheck,
      title: "Certified Specialists",
      desc: "Over 50+ board-certified surgeons, physicians & consultants",
      color: "from-indigo-500 to-purple-500",
      bgLight: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      icon: ShieldCheck,
      title: "Modern Diagnostics",
      desc: "Next-gen MRI, digital CT scan, and automated robotic labs",
      color: "from-teal-500 to-emerald-500",
      bgLight: "bg-teal-50 text-teal-600 border-teal-100",
    },
    {
      icon: HeartHandshake,
      title: "Patient-First Ethos",
      desc: "Compassionate bedside treatment with 98% satisfaction rating",
      color: "from-rose-500 to-pink-500",
      bgLight: "bg-rose-50 text-rose-600 border-rose-100",
    },
  ];

  const keyPoints = [
    "State-of-the-art diagnostic imaging & robotic surgical suites",
    "Direct digital access to test results & specialist consultation",
    "Internationally recognized patient safety & hygienic protocols",
  ];

  return (
    <section className="relative bg-slate-50/50 py-20 sm:py-28 overflow-hidden">
      
      {/* Background Hospital Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutBg}
          alt="MediFind Modern Hospital Facility"
          fill
          priority
          className="object-cover object-left lg:object-center opacity-90"
        />
        {/* Sleek Gradient Overlay: preserves left photography while ensuring crystal clear text on the right */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 via-50% to-white sm:via-white/85 lg:via-white/95 lg:to-white" /> */}
        {/* <div className="absolute inset-0 bg-radial-at-t from-blue-50/30 via-transparent to-transparent pointer-events-none" /> */}
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 -right-24 w-[450px] h-[450px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Spacer & Floating Glass Card (over the hospital photo) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 flex-col justify-end h-[520px] pb-4 pointer-events-none">
            {/* Interactive Floating Status Card on Left */}
            <div className="pointer-events-auto self-start bg-white/90 backdrop-blur-xl border border-white/80 rounded-2xl p-4 shadow-[0_15px_35px_rgba(15,23,42,0.12)] max-w-xs transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Emergency 24/7</p>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Ready for immediate response</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 xl:col-span-7 lg:ml-auto lg:pl-4 xl:pl-8">
            <div className="bg-white/90 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none p-6 sm:p-10 lg:p-0 rounded-3xl border border-slate-200/80 lg:border-none shadow-xl lg:shadow-none space-y-7">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="tracking-wide uppercase text-[11px] sm:text-xs">About MediFind Healthcare</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Dedicated to Exceptional <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                    Healthcare & Compassion
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                  At MediFind, we fuse cutting-edge clinical innovation with deep human empathy. Our world-renowned medical professionals work around the clock to ensure you and your loved ones receive prompt, accurate, and comfortable treatment.
                </p>
              </div>

              {/* Key Value Checklist */}
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

              {/* 4 Feature Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                {features.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.title} 
                      className="group p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200/70 hover:border-blue-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3.5"
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
              <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-blue-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      DR
                    </div>
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-indigo-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      MD
                    </div>
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-teal-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      RN
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-slate-900 font-bold text-xs">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>ISO 9001 Certified</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">Over 50+ Top Doctors On Duty</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <span>Explore Department</span>
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