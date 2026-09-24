'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  HeartPulse, 
  Home, 
  Building2, 
  Stethoscope, 
  UserCheck, 
  Activity, 
  Phone, 
  Search, 
  CalendarDays, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'Hospitals', href: '#hospitals', icon: Building2 },
    { name: 'Services', href: '#services', icon: Activity },
    { name: 'Doctors', href: '#doctors', icon: UserCheck },
    { name: 'Facilities', href: '#facilities', icon: Stethoscope },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Soft Shadow Box */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-[0_10px_20px_rgba(37,99,235,0.25)] group-hover:scale-105 group-hover:shadow-[0_12px_24px_rgba(37,99,235,0.35)] transition-all duration-300 border border-white/20">
                <HeartPulse className="w-6 h-6 stroke-[2.2] group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow-xs"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                  Medi<span className="text-blue-600">Find</span>
                </span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block shadow-[0_2px_8px_rgba(16,185,129,0.12)]">
                  Live 24/7
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-wider uppercase -mt-0.5 hidden sm:block">
                Health Care Directory
              </p>
            </div>
          </Link>

          {/* Nav Links Container with Soft Inset & Floating Shadow */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/90 p-1.5 rounded-2xl border border-slate-200/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-[0_6px_16px_rgba(37,99,235,0.3)]'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Section CTA with Soft Elevation */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Book Appointment Soft UI Button */}
            <a
              href="#book"
              className="relative group inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white text-sm font-bold px-5 py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.3)] hover:shadow-[0_14px_28px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5 border border-blue-400/30"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-xl bg-white/15 text-white group-hover:bg-white/25 transition-colors shadow-inner">
                <CalendarDays className="w-4 h-4 text-blue-100 group-hover:scale-110 transition-transform" />
              </div>
              <span className="tracking-wide">Book Appointment</span>
              {/* <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" /> */}
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#book"
              className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-[0_6px_16px_rgba(37,99,235,0.3)] active:scale-95 transition-transform"
              aria-label="Book Appointment"
            >
              <CalendarDays className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200/80 shadow-xs focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with Soft Shadows */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border border-blue-100 shadow-[0_4px_12px_rgba(37,99,235,0.08)]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-600 text-white shadow-[0_4px_10px_rgba(37,99,235,0.3)]' : 'bg-slate-100 text-slate-500'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <a
              href="#book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-[0_10px_25px_rgba(37,99,235,0.3)] active:scale-98 transition-all"
            >
              <CalendarDays className="w-5 h-5 text-blue-100" />
              <span>Book Appointment Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}