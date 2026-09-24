'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  User, 
  Phone, 
  MessageSquare,
  AlertCircle,
  FileCheck2,
  CalendarDays,
  Activity
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: 'general',
    hospital: 'all',
    message: '',
    urgent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTicketId(`MF-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      department: 'general',
      hospital: 'all',
      message: '',
      urgent: false,
    });
    setIsSubmitted(false);
  };

  const contactCards = [
    {
      icon: PhoneCall,
      title: '24/7 Emergency Line',
      desc: 'Immediate trauma, cardiac, & ambulance dispatch',
      detail: '+1 (800) 911-CARE',
      actionText: 'Call Now',
      actionHref: 'tel:911',
      bgLight: 'bg-rose-50 text-rose-600 border-rose-100',
      badge: 'Immediate Response',
      badgeColor: 'bg-rose-100/80 text-rose-700',
    },
    {
      icon: MessageSquare,
      title: 'General Patient Desk',
      desc: 'Appointments, doctor schedules & consultations',
      detail: '+1 (800) 247-CARE',
      actionText: 'Call Helpline',
      actionHref: 'tel:+18002472273',
      bgLight: 'bg-blue-50 text-blue-600 border-blue-100',
      badge: '8 AM – 9 PM Daily',
      badgeColor: 'bg-blue-100/80 text-blue-700',
    },
    {
      icon: Mail,
      title: 'Support & Inquiries',
      desc: 'Test reports, insurance claims & digital records',
      detail: 'support@medifind-health.com',
      actionText: 'Email Us',
      actionHref: 'mailto:support@medifind-health.com',
      bgLight: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      badge: 'Avg. 30 Min Reply',
      badgeColor: 'bg-indigo-100/80 text-indigo-700',
    },
    {
      icon: MapPin,
      title: 'Central Medical HQ',
      desc: 'Downtown Medical Campus & Diagnostic Hub',
      detail: '742 Evergreen Healthcare Ave, NY',
      actionText: 'Get Directions',
      actionHref: '#map',
      bgLight: 'bg-teal-50 text-teal-600 border-teal-100',
      badge: 'Visitor Parking Available',
      badgeColor: 'bg-teal-100/80 text-teal-700',
    },
  ];

  const faqs = [
    {
      q: 'How fast will someone respond to my contact inquiry?',
      a: 'For urgent inquiries, our clinical triage desk responds within 15–30 minutes. General inquiries regarding doctor schedules or test reports are typically answered within 2–4 business hours.'
    },
    {
      q: 'How do I dispatch an emergency ambulance?',
      a: 'For life-threatening emergencies, call our dedicated 24/7 line at +1 (800) 911-CARE or 911 immediately. Our GPS-tracked Advanced Life Support (ALS) ambulances are dispatched in under 2 minutes.'
    },
    {
      q: 'Can I reschedule or cancel a hospital appointment through this form?',
      a: 'Yes! Select "Doctor Appointment" in the department dropdown and provide your patient name and reference number. Our patient care team will update your booking.'
    },
    {
      q: 'Do partner hospitals accept my health insurance provider?',
      a: 'All MediFind partner hospitals work with major private and public insurance networks. You can mention your insurance provider in your message to get pre-authorization assistance.'
    },
  ];

  return (
    <div className="bg-slate-50/60 min-h-screen py-12 sm:py-20 relative overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="tracking-wide uppercase text-[11px] sm:text-xs">24/7 Dedicated Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            We Are Here to <br className="hidden sm:block" />
            <span className="text-blue-600">Help & Support You</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Have questions regarding hospital admissions, specialist doctors, diagnostic tests, or emergency services? Reach out to our central care team anytime.
          </p>
        </div>

        {/* 4 Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl border shadow-xs group-hover:scale-105 transition-transform ${card.bgLight}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <p className="text-sm font-bold text-slate-800 break-words pt-1">
                    {card.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href={card.actionHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/btn"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Section: Contact Form & HQ Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form / Success State (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Fill out the form below and our medical coordinators will contact you shortly.
                  </p>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-blue-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Department Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Department / Inquiry Type</span>
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all cursor-pointer"
                    >
                      <option value="general">General Patient Inquiry</option>
                      <option value="doctor-appointment">Doctor Consultation & Appointment</option>
                      <option value="lab-tests">Diagnostic & Lab Tests Inquiry</option>
                      <option value="hospital-admission">Hospital Admission & Surgery</option>
                      <option value="billing-insurance">Billing, Claims & Insurance</option>
                      <option value="feedback">Patient Feedback & Assistance</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Hospital (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Select Specific Hospital (Optional)
                  </label>
                  <select
                    value={formData.hospital}
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all cursor-pointer"
                  >
                    <option value="all">Any Nearest Hospital Branch</option>
                    <option value="hosp-central">MediFind Central Hospital (Downtown)</option>
                    <option value="hosp-stjude">St. Jude Heart & Vascular Institute (Westside)</option>
                    <option value="hosp-childrens">Children & Maternal Hope Center (Green Valley)</option>
                    <option value="hosp-metro">Metro City Trauma & Acute Care (North Hub)</option>
                    <option value="hosp-apex">Apex Neuro & Spine Institute (East Wing)</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Your Message / Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your health inquiry, symptoms, preferred doctor, or appointment requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                {/* Urgent Priority Checkbox */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={formData.urgent}
                    onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="urgent" className="text-xs font-semibold text-slate-700 cursor-pointer">
                    <span className="text-rose-600 font-bold">Urgent:</span> Mark this inquiry for immediate priority review by on-duty medical staff.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-black text-sm sm:text-base shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending to Medical Desk...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            ) : (
              /* Beautiful Success Submission Screen */
              <div className="py-8 sm:py-12 text-center space-y-7 animate-in fade-in zoom-in-95 duration-500">
                
                {/* Glowing Success Badge Icon */}
                <div className="relative inline-flex">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30 border-4 border-white">
                    <FileCheck2 className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 text-white text-xs items-center justify-center font-bold">✓</span>
                  </span>
                </div>

                {/* Headline & Confirmation */}
                <div className="space-y-2 max-w-md mx-auto">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                    Inquiry Received Successfully
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Thank You, {formData.fullName}!
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Your medical inquiry has been routed to our central patient care team. A coordinator will call or email you shortly.
                  </p>
                </div>

                {/* Ticket Details Box */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 max-w-md mx-auto text-left space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-medium text-slate-500">Support Ticket ID:</span>
                    <span className="text-sm font-black text-blue-600 font-mono tracking-wider">{ticketId}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-slate-400">Target Department</p>
                      <p className="font-bold text-slate-800 capitalize">{formData.department.replace('-', ' ')}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Response ETA</p>
                      <p className="font-bold text-emerald-600">Within 15–30 Mins</p>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Confirmation notification sent to <strong className="text-slate-700">{formData.email}</strong></span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>

                  <Link
                    href="/"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold border border-blue-200 transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Return to Home</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            )}

          </div>

          {/* Right Column: Campus Details, Certifications & Hours (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.04)] space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-tight">Main Campus & Laboratories</h3>
                  <p className="text-xs text-slate-500">MediFind Central Medical Complex</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>742 Evergreen Healthcare Ave, Downtown Medical Center, New York, NY 10001</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Outpatient Clinics: Mon – Sun (8:00 AM – 9:00 PM)</span>
                </div>

                <div className="flex items-center gap-3 text-rose-600 font-bold">
                  <Activity className="w-4 h-4 shrink-0" />
                  <span>Emergency Trauma & Ambulance: 24 Hours / 7 Days</span>
                </div>
              </div>

              {/* Direct Appointment CTA */}
              <div className="pt-2">
                <a
                  href="tel:+18002472273"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs sm:text-sm border border-blue-200/80 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Direct Booking: +1 (800) 247-CARE</span>
                </a>
              </div>
            </div>

            {/* Quality Standards Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Patient Rights & Security</span>
              </div>

              <h4 className="text-lg font-black tracking-tight">
                Confidential & Certified Care
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                All patient health information submitted through MediFind is strictly protected under HIPAA privacy protocols and 256-bit SSL encryption.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                  <p className="font-bold text-white">100% Confidential</p>
                  <p className="text-[10px] text-slate-400">HIPAA Compliant</p>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                  <p className="font-bold text-white">ISO 9001:2015</p>
                  <p className="text-[10px] text-slate-400">Quality Verified</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Quick answers regarding appointments, ambulance response, and medical support.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
