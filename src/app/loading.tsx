import { HeartPulse, Sparkles, Activity, ShieldCheck } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-slate-50/50 px-4">
      
      {/* Ambient Glowing Background Orbs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Main Glass Loader Card */}
      <div className="relative z-10 max-w-sm w-full bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(37,99,235,0.08)] flex flex-col items-center text-center space-y-6">
        
        {/* Animated Heartbeat Logo Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Pulsating Ring 1 */}
          <span className="absolute w-24 h-24 rounded-full bg-blue-500/15 animate-ping duration-1000" />
          
          {/* Pulsating Ring 2 */}
          <span className="absolute w-20 h-20 rounded-full bg-blue-500/25 animate-pulse" />
          
          {/* Brand Icon Box */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 border-2 border-white">
            <HeartPulse className="w-8 h-8 stroke-[2.2] animate-bounce" />
          </div>

          {/* Tiny Status Indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        </div>

        {/* Brand & Loading Text */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-blue-600 animate-spin" />
            <span>MediFind Healthcare</span>
          </div>

          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            Preparing Clinical Data...
          </h3>

          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Connecting to verified hospital networks & doctor schedules.
          </p>
        </div>

        {/* Animated Progress / ECG Bar */}
        <div className="w-full space-y-2">
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden relative">
            <div className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-full w-1/2 animate-[shimmer_1.5s_infinite_linear] -translate-x-full" 
                 style={{
                   animation: 'progress 1.6s ease-in-out infinite'
                 }}
            />
          </div>
          
          <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-blue-600 animate-pulse" />
              <span>Real-time Sync</span>
            </span>
            <span>256-bit Encrypted</span>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="pt-2 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>HIPAA Compliant & Secure</span>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(20%); }
          100% { transform: translateX(200%); }
        }
      `}} />

    </div>
  );
}
