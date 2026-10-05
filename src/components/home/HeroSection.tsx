'use client';

import React from 'react';
import { 
  Users, 
  Building2, 
  Star, 
  HeartHandshake,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Swiper core & module styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Individual Slide Components
import Slide1 from './hero/Slide1';
import Slide2 from './hero/Slide2';
import Slide3 from './hero/Slide3';
import Slide4 from './hero/Slide4';

export default function Hero() {
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
    <section className="relative bg-slate-50 hero-slider-container">
      
      {/* Main Swiper Hero Slider */}
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={900}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: '.hero-custom-pagination',
            bulletClass: 'hero-custom-bullet',
            bulletActiveClass: 'hero-custom-bullet-active',
          }}
          navigation={{
            prevEl: '.hero-prev-btn',
            nextEl: '.hero-next-btn',
          }}
          className="w-full"
        >
          {/* Slide 1 - Left Design & Right Hospital Outside Scenery */}
          <SwiperSlide>
            <Slide1 />
          </SwiperSlide>

          {/* Slide 2 - Left Hospital Emergency Outside & Right Design */}
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>

          {/* Slide 3 - Left Design & Right Advanced Medical Center Scenery */}
          <SwiperSlide>
            <Slide3 />
          </SwiperSlide>

          {/* Slide 4 - Left Regional Hospital Campus & Right Design */}
          <SwiperSlide>
            <Slide4 />
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          type="button"
          aria-label="Previous Slide"
          className="hero-prev-btn absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center backdrop-blur-md border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
        </button>

        <button
          type="button"
          aria-label="Next Slide"
          className="hero-next-btn absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center backdrop-blur-md border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
        </button>

        {/* Custom Bullet Pagination Dots */}
        <div className="hero-custom-pagination absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 pointer-events-auto" />
      </div>

      {/* Floating Overlapping Stats Bar (Half in Hero, Half in Next Section) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 md:-mt-10 -mb-10 sm:-mb-14 md:-mb-16 lg:-mb-20">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 md:p-6 lg:p-7 border border-slate-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.06)] sm:shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8 lg:divide-x lg:divide-slate-100">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className={`flex items-center gap-2.5 sm:gap-3.5 lg:gap-4 ${
                    idx !== 0 ? 'lg:pl-6 xl:pl-8' : ''
                  }`}
                >
                  <div className={`p-2 sm:p-2.5 lg:p-3.5 rounded-xl sm:rounded-2xl border shadow-xs shrink-0 ${stat.iconBg}`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs lg:text-sm font-medium text-slate-500 truncate sm:whitespace-normal">
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