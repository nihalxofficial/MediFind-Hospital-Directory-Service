'use client';

import Link from 'next/link';
import { 
  HeartPulse, 
  Building2, 
  Stethoscope, 
  Activity, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Globe, 
  Award,
  Lock,
  ChevronRight,
  Send
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Pre-Footer Bar: Newsletter & Emergency Hotline */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            
            <div className="space-y-1.5 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Healthcare Network</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Stay Updated with Health Tips & Hospital News
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-normal">
                Subscribe to receive verified medical advisories, wellness screenings, and partner clinic updates.
              </p>
            </div>

            {/* Newsletter Subscription Box */}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-stretch gap-2.5 w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-800/90 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-inner"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all duration-300 shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Mission (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 border border-white/20 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  Medi<span className="text-blue-500">Find</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Healthcare System
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              MediFind connects patients with accredited hospital networks, certified specialist doctors, 24/7 emergency response, and verified diagnostic laboratory testing nationwide.
            </p>

            {/* Compliance & Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>ISO 9001 Certified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>HIPAA Compliant</span>
              </span>
            </div>

            {/* Emergency Hotline Box */}
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-rose-300 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-rose-400">24/7 Emergency Dispatch</p>
                <p className="text-base font-black text-white">+1 (800) 911-CARE</p>
              </div>
            </div>

          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'Find Hospitals', href: '#hospitals' },
                { name: 'Medical Services', href: '#services' },
                { name: 'Diagnostic Tests', href: '#tests' },
                { name: 'Hospital Facilities', href: '#facilities' },
                { name: 'Emergency ER Ward', href: '#emergency' },
                { name: 'Contact & Support', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medical Specialties (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Specialized Departments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'Cardiology & Heart Institute', href: '#services' },
                { name: 'Neurology & Spine Surgery', href: '#services' },
                { name: 'Pediatrics & Level-III NICU', href: '#services' },
                { name: '3T MRI & High-Speed CT Scans', href: '#tests' },
                { name: 'Robotic Surgery Suites', href: '#facilities' },
                { name: 'Level-1 Trauma & Helipad ER', href: '#emergency' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Central Clinical Desk
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-snug">742 Evergreen Healthcare Ave, Downtown Medical District, NY 10001</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>General: +1 (800) 247-CARE</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>support@medifind-health.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-emerald-400 font-medium">Outpatient: 8:00 AM – 9:00 PM</span>
              </div>
            </div>

            {/* Quick Consultation Trigger */}
            <div className="pt-2">
              <a
                href="#book"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-800 hover:border-slate-700 transition-all shadow-xs"
              >
                <Stethoscope className="w-3.5 h-3.5 text-blue-400" />
                <span>Book Doctor Appointment</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-black/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational (99.99% Uptime)</span>
            </div>

            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} MediFind Healthcare Technologies Inc. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">HIPAA Notice</Link>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
