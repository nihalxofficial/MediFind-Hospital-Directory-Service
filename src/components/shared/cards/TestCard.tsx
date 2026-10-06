'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FlaskConical, 
  Clock, 
  Building2, 
  Home, 
  Star, 
  FileText, 
  Activity, 
  Scan, 
  Droplet, 
  Microscope, 
  CalendarDays,
  Sparkles,
  Flame,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { MedicalTestItem } from '@/data/healthcareData';

interface TestCardProps {
  test: MedicalTestItem;
}

export default function TestCard({ test }: TestCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return Activity;
      case 'Scan': return Scan;
      case 'Droplet': return Droplet;
      case 'Microscope': return Microscope;
      default: return FlaskConical;
    }
  };

  const Icon = getIcon(test.iconName);
  const hasDiscount = Boolean(test.discountPercent && test.discountPercent > 0 && test.originalPrice);
  const savingsAmount = test.originalPrice ? test.originalPrice - test.price : 0;

  return (
    <div className={`relative bg-white rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between p-6 sm:p-7 overflow-hidden group ${
      hasDiscount 
        ? 'border-slate-200 hover:border-blue-400 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)]' 
        : 'border-slate-200/80 hover:border-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.06)]'
    }`}>
      
      {/* Decorative Discount Ribbon on Top Right */}
      {hasDiscount && (
        <div className="absolute -top-1 -right-1 z-10">
          <div className="bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 text-white font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded-bl-2xl rounded-tr-3xl shadow-md flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-white animate-pulse" />
            <span>{test.discountPercent}% OFF</span>
          </div>
        </div>
      )}

      <div className="space-y-5">
        
        {/* Top Header: Icon & Category Tag */}
        <div className="flex items-start justify-between gap-3 pt-1">
          <div className={`p-3.5 rounded-2xl border shadow-xs ${test.iconBg} ${test.iconColor} group-hover:scale-105 transition-transform duration-300`}>
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
              {test.categoryLabel}
            </span>
            {test.homeCollection && (
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Home className="w-3 h-3 text-emerald-600" />
                Free Home Collection
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
            {test.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
            {test.description}
          </p>
        </div>

        {/* Beautiful Price & Discount Presentation Box */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 p-3.5 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              Test Package Fee
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                ${test.price}
              </span>
              {test.originalPrice && (
                <span className="text-xs sm:text-sm text-slate-400 line-through font-semibold">
                  ${test.originalPrice}
                </span>
              )}
            </div>
          </div>

          {hasDiscount && savingsAmount > 0 ? (
            <div className="text-right">
              <div className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-xl text-xs font-black shadow-2xs">
                <Tag className="w-3 h-3 text-emerald-700" />
                <span>Save ${savingsAmount}</span>
              </div>
              <p className="text-[10px] font-semibold text-rose-600 mt-0.5">Limited Time Deal</p>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-600">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span className="font-bold text-slate-900">{test.rating}</span>
              <span className="text-slate-400">({test.reviewsCount})</span>
            </div>
          )}
        </div>

        {/* Specs Highlights Matrix */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
          <div className="flex items-center gap-2 p-2 bg-slate-50/80 rounded-xl border border-slate-100">
            <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="truncate font-medium">{test.parametersCount} Parameters</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-slate-50/80 rounded-xl border border-slate-100">
            <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate font-medium">{test.reportTime}</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-slate-50/80 rounded-xl border border-slate-100">
            <Droplet className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span className="truncate font-medium">{test.sampleType}</span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-slate-50/80 rounded-xl border border-slate-100">
            <Building2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="truncate font-medium">{test.fastingRequired}</span>
          </div>
        </div>

        {/* Labs Affiliations */}
        <div className="space-y-1 text-xs">
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Certified Partner Labs</p>
          <p className="truncate text-slate-600 font-medium">
            {test.hospitals.map(h => h.name).join(' • ')}
          </p>
        </div>

      </div>

      {/* Bottom CTA & Rating */}
      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span className="font-bold text-slate-900">{test.rating}</span>
          <span className="text-slate-400">({test.reviewsCount} reviews)</span>
        </div>

        <Link
          href={`/appointment?test=${encodeURIComponent(test.name)}`}
          className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all ${
            hasDiscount
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/25 hover:shadow-blue-500/35'
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 hover:shadow-blue-500/30'
          }`}
        >
          <CalendarDays className="w-4 h-4" />
          <span>Book Test</span>
        </Link>
      </div>

    </div>
  );
}
