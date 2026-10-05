'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  CalendarDays, 
  Clock, 
  Building2, 
  UserCheck, 
  Phone, 
  Mail, 
  User, 
  CheckCircle2, 
  ShieldCheck,
  Stethoscope,
  HeartPulse
} from 'lucide-react';

export interface AppointmentHospitalOption {
  id: string;
  name: string;
}

export interface AppointmentDoctorOption {
  id: string;
  name: string;
  specialty: string;
}

interface AppointmentClientProps {
  hospitals: AppointmentHospitalOption[];
  departments: string[];
  doctors: AppointmentDoctorOption[];
}

function AppointmentFormContent({ hospitals, departments, doctors }: AppointmentClientProps) {
  const searchParams = useSearchParams();
  const prefilledDoctor = searchParams.get('doctor') || '';
  const prefilledHospital = searchParams.get('hospital') || '';
  const prefilledDepartment = searchParams.get('department') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hospital: prefilledHospital || hospitals[0]?.name || 'MediFind Central Hospital',
    department: prefilledDepartment || departments[0] || 'Cardiology',
    doctor: prefilledDoctor || doctors[0]?.name || 'Dr. Sarah Mitchell, MD',
    appointmentDate: '',
    appointmentTime: '09:30 AM',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/90 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <CalendarDays className="w-4 h-4 text-blue-600" />
            <span>Fast & Guaranteed Doctor Consultations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Book an <span className="text-blue-600">Appointment</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Schedule an in-person or telehealth medical consultation with verified specialist doctors across our hospital network.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Appointment Requested Successfully!
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. We have sent a confirmation email to <span className="font-bold text-blue-600">{formData.email}</span> with your appointment details.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 max-w-md mx-auto text-left space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Doctor:</span>
                <span className="font-bold text-slate-900">{formData.doctor}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Hospital:</span>
                <span className="font-bold text-slate-900">{formData.hospital}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Date & Time:</span>
                <span className="font-bold text-slate-900">{formData.appointmentDate || 'Upcoming Date'} at {formData.appointmentTime}</span>
              </div>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-md transition-all cursor-pointer"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>Patient Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Hospital Selection */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span>Hospital / Medical Center</span>
                  </label>
                  <select
                    value={formData.hospital}
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  >
                    {hospitals.map((hosp) => (
                      <option key={hosp.id} value={hosp.name}>
                        {hosp.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-blue-600" />
                    <span>Specialty Department</span>
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  >
                    {departments.map((dept, idx) => (
                      <option key={idx} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor Selection */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span>Preferred Doctor</span>
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  >
                    {doctors.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.specialty})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4 text-blue-600" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.appointmentDate}
                    onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Preferred Time Slot */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={formData.appointmentTime}
                    onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Additional Symptoms & Notes */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-700">
                  Symptoms or Medical Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe any symptoms or reasons for visit..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-[0_10px_25px_rgba(37,99,235,0.28)] hover:shadow-[0_14px_28px_rgba(37,99,235,0.38)] transition-all cursor-pointer"
              >
                Confirm & Request Appointment
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

export default function AppointmentClient(props: AppointmentClientProps) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-600 font-semibold">Loading Appointment Form...</div>}>
      <AppointmentFormContent {...props} />
    </Suspense>
  );
}
