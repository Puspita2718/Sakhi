import React, { useState } from 'react';
import { 
  AlertTriangle, Phone, MapPin, Ambulance, ShieldAlert, HeartPulse, 
  BellRing, Flashlight, Plus, Edit2, Info, Building2, Map, ShieldCheck, 
  Sparkles, Clock, CheckCircle2, Navigation, MessageSquare, Star, X
} from 'lucide-react';

export default function EmergencySystem({ language = 'en', closeEmergency }) {
  const [isSOSActive, setIsSOSActive] = useState(false);

  const contacts = [
    { name: 'Mother', phone: '+91 98765 43210', relation: 'Primary', initial: 'M' },
    { name: 'Sister', phone: '+91 98765 43211', relation: 'Family', initial: 'S' },
    { name: 'Dr. Sharma', phone: '+91 98765 43212', relation: 'Doctor', initial: 'D' }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm overflow-y-auto pt-10 pb-12 flex justify-center">
      <div className="w-full max-w-5xl px-6 relative">
        
        {/* Close Button */}
        {closeEmergency && (
          <button 
            onClick={closeEmergency}
            className="absolute -top-4 right-6 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-md border border-white/20 transition-all z-50 cursor-pointer"
          >
            <X size={24} />
          </button>
        )}

        <div className="flex flex-col gap-6 w-full animate-fade-in pb-12 mt-8">

          {/* SECTION 1: Emergency Action Center (Hero Section) & SECTION 3: One-Tap Actions */}
          <div className={`p-8 rounded-3xl border transition-colors duration-500 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl relative overflow-hidden ${isSOSActive ? 'bg-red-600 border-red-700 shadow-red-500/30' : 'bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-950 dark:to-black border-zinc-800'}`}>
            
            {/* Background Pulse Effect when Active */}
            {isSOSActive && <div className="absolute inset-0 bg-red-500 animate-pulse opacity-20 pointer-events-none"></div>}

            <div className="z-10 flex-1 w-full text-center md:text-left">
               <h1 className="font-display text-2xl font-extrabold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                 <AlertTriangle className={isSOSActive ? "animate-bounce" : ""} /> 
                 {isSOSActive ? "EMERGENCY MODE ACTIVE" : "Emergency Assistance"}
               </h1>
               <p className="text-sm font-medium text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
                 {isSOSActive ? "Your live location is being shared. Emergency contacts have been notified." : "Need immediate help? Press the SOS button to activate emergency protocols instantly."}
               </p>

               {/* SECTION 3: One-Tap Emergency Actions */}
               <div className="flex flex-wrap justify-center md:justify-start gap-3">
                 <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors border border-white/20 backdrop-blur-sm cursor-pointer">
                   <MapPin size={16} className={isSOSActive ? "text-red-400" : "text-blue-400"} /> Share Live Location
                 </button>
                 <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors border border-white/20 backdrop-blur-sm cursor-pointer">
                   <Phone size={16} className="text-emerald-400" /> Call Contacts
                 </button>
                 <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors border border-white/20 backdrop-blur-sm cursor-pointer">
                   <Ambulance size={16} className="text-rose-400" /> Call Ambulance
                 </button>
                 <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors border border-white/20 backdrop-blur-sm cursor-pointer">
                   <ShieldAlert size={16} className="text-indigo-400" /> Call Police
                 </button>
               </div>
            </div>

            {/* The SOS Button */}
            <div className="z-10 shrink-0">
              <button 
                onClick={() => setIsSOSActive(!isSOSActive)}
                className={`w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border-8 ${isSOSActive ? 'bg-white text-red-600 border-red-200 shadow-red-500/50' : 'bg-red-600 text-white border-red-900/50 hover:bg-red-500 shadow-red-900/50'}`}
              >
                 <div className={!isSOSActive ? 'animate-pulse' : ''}>
                   <ShieldAlert size={48} className="mb-1" />
                 </div>
                 <span className="font-display font-black text-2xl tracking-widest">{isSOSActive ? 'STOP' : 'SOS'}</span>
              </button>
            </div>
          </div>

          {/* SECTION 9: Safety Toolkit */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all cursor-pointer group">
              <BellRing className="w-8 h-8 text-zinc-600 dark:text-zinc-400 group-hover:text-red-500 transition-colors" />
              <span className="text-xs font-bold text-[var(--text-primary)]">Loud Alarm</span>
            </button>
            <button className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/30 transition-all cursor-pointer group">
              <Flashlight className="w-8 h-8 text-zinc-600 dark:text-zinc-400 group-hover:text-yellow-500 transition-colors" />
              <span className="text-xs font-bold text-[var(--text-primary)]">Flashlight</span>
            </button>
            <button className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all cursor-pointer group">
              <MapPin className="w-8 h-8 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors" />
              <span className="text-xs font-bold text-[var(--text-primary)]">Share Location</span>
            </button>
            <button className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all cursor-pointer group">
              <Phone className="w-8 h-8 text-zinc-600 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              <span className="text-xs font-bold text-[var(--text-primary)]">Emergency Call</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT COLUMN: Readiness, Contacts, Medical Info */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              
              {/* SECTION 14: Emergency Readiness Score */}
              <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col items-center text-center">
                 <h3 className="font-display font-extrabold text-sm mb-4 text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2 w-full text-left">
                   <ShieldCheck className="w-4 h-4 text-emerald-500" /> Preparedness
                 </h3>
                 <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                    <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0">
                      <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-zinc-800" />
                      <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 92) / 100} className="text-emerald-500 transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="flex flex-col items-center z-10">
                      <span className="font-display font-black text-xl text-[var(--text-primary)]">92<span className="text-xs text-[var(--text-secondary)]">/100</span></span>
                    </div>
                 </div>
                 <div className="flex flex-col gap-1.5 w-full text-left">
                   <div className="flex items-start gap-2 bg-gray-50 dark:bg-zinc-950 p-2 rounded-lg">
                     <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                     <span className="text-[10px] font-bold text-[var(--text-primary)]">Contacts Added</span>
                   </div>
                   <div className="flex items-start gap-2 bg-gray-50 dark:bg-zinc-950 p-2 rounded-lg">
                     <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                     <span className="text-[10px] font-bold text-[var(--text-primary)]">Medical Info Updated</span>
                   </div>
                   <div className="flex items-start gap-2 bg-gray-50 dark:bg-zinc-950 p-2 rounded-lg">
                     <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                     <span className="text-[10px] font-bold text-[var(--text-primary)]">Location Services On</span>
                   </div>
                 </div>
              </div>

              {/* SECTION 2: Emergency Contacts */}
              <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                 <div className="flex justify-between items-center mb-4">
                   <h3 className="font-display font-extrabold text-sm text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
                     <Phone className="w-4 h-4 text-blue-500" /> Contacts
                   </h3>
                   <button className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 p-1 rounded-md transition-colors cursor-pointer"><Plus size={16}/></button>
                 </div>
                 <div className="flex flex-col gap-3">
                   {contacts.map((c, i) => (
                     <div key={i} className="flex justify-between items-center bg-gray-50 dark:bg-zinc-950 p-2.5 rounded-xl border border-gray-100 dark:border-zinc-800">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center shrink-0">
                           {c.initial}
                         </div>
                         <div>
                           <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                             {c.name} {c.relation === 'Primary' && <Star size={10} className="fill-yellow-400 text-yellow-400" />}
                           </span>
                           <p className="text-[10px] font-medium text-[var(--text-secondary)]">{c.phone}</p>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

              {/* SECTION 6: Medical Information Card */}
              <div className="glass-panel p-5 rounded-3xl border border-rose-100 dark:border-rose-900/30 bg-rose-50/30 dark:bg-rose-950/10">
                 <div className="flex justify-between items-center mb-4">
                   <h3 className="font-display font-extrabold text-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-2">
                     <HeartPulse className="w-4 h-4" /> Medical Info
                   </h3>
                   <button className="text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-900/30 p-1 rounded-md transition-colors cursor-pointer"><Edit2 size={14}/></button>
                 </div>
                 <div className="grid grid-cols-2 gap-3 mb-3">
                   <div className="bg-white/60 dark:bg-zinc-900/60 p-2 rounded-xl border border-rose-100 dark:border-rose-900/30">
                     <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block">Blood Group</span>
                     <p className="text-sm font-black text-rose-600 dark:text-rose-400">O Positive</p>
                   </div>
                   <div className="bg-white/60 dark:bg-zinc-900/60 p-2 rounded-xl border border-rose-100 dark:border-rose-900/30">
                     <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block">Allergies</span>
                     <p className="text-xs font-bold text-[var(--text-primary)]">Penicillin</p>
                   </div>
                 </div>
                 <div className="bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                   <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block mb-1">Current Medications</span>
                   <p className="text-xs font-bold text-[var(--text-primary)]">Iron Supplements, Multivitamins</p>
                 </div>
                 <div className="bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-xl border border-rose-100 dark:border-rose-900/30 flex gap-2">
                   <Info size={14} className="text-rose-500 shrink-0 mt-0.5" />
                   <p className="text-[10px] font-medium text-[var(--text-secondary)] leading-tight">No known chronic conditions. Cleared for general emergency treatments.</p>
                 </div>
              </div>

            </div>

            {/* CENTER COLUMN: Live Location, Messages, Trusted Places */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* SECTION 4: Live Location Sharing */}
              <div className={`glass-panel p-2 rounded-3xl border transition-colors duration-500 ${isSOSActive ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900' : 'bg-white dark:bg-zinc-900 border-gray-100 dark:border-zinc-800'}`}>
                 <div className="p-4 flex justify-between items-center">
                   <h3 className="font-display font-extrabold text-sm flex items-center gap-2 text-[var(--text-primary)] uppercase tracking-wider">
                     <Map className="w-4 h-4 text-indigo-500" /> Current Location
                   </h3>
                   {isSOSActive && (
                     <span className="text-[10px] font-bold bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 px-3 py-1 rounded-full animate-pulse flex items-center gap-1.5">
                       <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Live Sharing Active
                     </span>
                   )}
                 </div>
                 
                 {/* Mock Map Preview */}
                 <div className="relative w-full h-48 bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden flex items-center justify-center">
                   {/* Abstract Map Background */}
                   <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                     <div className="relative">
                       <div className="w-12 h-12 bg-blue-500/20 rounded-full animate-ping absolute -inset-2"></div>
                       <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                       </div>
                     </div>
                   </div>
                   
                   {isSOSActive && (
                     <div className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-red-100 dark:border-red-900/30 flex justify-between items-center">
                       <p className="text-xs font-bold text-[var(--text-primary)] truncate max-w-[70%]">Sector 4, Main Road, City Center</p>
                       <button className="text-[10px] font-extrabold text-red-600 bg-red-100 dark:bg-red-900/30 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-red-200 transition-colors">Stop Sharing</button>
                     </div>
                   )}
                 </div>
              </div>

              {/* SECTION 5: Emergency Message Generator */}
              <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                 <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
                   <MessageSquare className="w-4 h-4 text-emerald-500" /> Send Emergency Alert
                 </h3>
                 <div className="bg-gray-50 dark:bg-zinc-950 p-4 rounded-2xl border border-gray-200 dark:border-zinc-800 mb-4 shadow-inner">
                   <p className="text-sm font-semibold text-[var(--text-primary)] whitespace-pre-line leading-relaxed">
                     🚨 Emergency Alert{'\n\n'}
                     I need immediate assistance.{'\n'}
                     My current location has been shared.{'\n'}
                     Please contact me as soon as possible.
                   </p>
                 </div>
                 <div className="flex gap-3">
                   <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer">
                     Send WhatsApp
                   </button>
                   <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer">
                     Send SMS
                   </button>
                 </div>
              </div>

              {/* SECTION 7: Trusted Places */}
              <div className="glass-panel p-6 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/30 dark:bg-indigo-950/10">
                 <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                   <Building2 className="w-4 h-4" /> Nearby Safe Locations
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <div className="bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white dark:border-zinc-800 flex justify-between items-center group cursor-pointer hover:border-indigo-300 transition-colors">
                     <div>
                       <span className="text-[10px] font-extrabold text-indigo-600 block">Hospital</span>
                       <p className="text-xs font-bold text-[var(--text-primary)]">City Care Hospital</p>
                     </div>
                     <div className="flex flex-col items-end">
                       <span className="text-[10px] font-black text-[var(--text-secondary)]">0.8 km</span>
                       <Navigation size={12} className="text-indigo-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                   </div>
                   <div className="bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white dark:border-zinc-800 flex justify-between items-center group cursor-pointer hover:border-indigo-300 transition-colors">
                     <div>
                       <span className="text-[10px] font-extrabold text-indigo-600 block">Police Station</span>
                       <p className="text-xs font-bold text-[var(--text-primary)]">Central Police Dept.</p>
                     </div>
                     <div className="flex flex-col items-end">
                       <span className="text-[10px] font-black text-[var(--text-secondary)]">1.2 km</span>
                       <Navigation size={12} className="text-indigo-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                   </div>
                   <div className="bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white dark:border-zinc-800 flex justify-between items-center group cursor-pointer hover:border-indigo-300 transition-colors">
                     <div>
                       <span className="text-[10px] font-extrabold text-indigo-600 block">Pharmacy</span>
                       <p className="text-xs font-bold text-[var(--text-primary)]">Apollo Pharmacy</p>
                     </div>
                     <div className="flex flex-col items-end">
                       <span className="text-[10px] font-black text-[var(--text-secondary)]">0.3 km</span>
                       <Navigation size={12} className="text-indigo-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                   </div>
                   <div className="bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white dark:border-zinc-800 flex justify-between items-center group cursor-pointer hover:border-indigo-300 transition-colors">
                     <div>
                       <span className="text-[10px] font-extrabold text-indigo-600 block">Women's Help</span>
                       <p className="text-xs font-bold text-[var(--text-primary)]">ArogyaNari Shelter Center</p>
                     </div>
                     <div className="flex flex-col items-end">
                       <span className="text-[10px] font-black text-[var(--text-secondary)]">2.5 km</span>
                       <Navigation size={12} className="text-indigo-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                   </div>
                 </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Hidden SOS Info, Tips, Assistant */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              
              {/* SECTION 8: Emergency Health Information (CONDITIONAL) */}
              {isSOSActive && (
                <div className="bg-red-600 text-white p-5 rounded-3xl border border-red-500 shadow-xl shadow-red-500/20 animate-fade-in">
                  <h3 className="font-display font-extrabold text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-white" /> Active Health Data
                  </h3>
                  <p className="text-[10px] font-medium text-red-100 mb-3 leading-tight">
                    This information is surfaced for paramedics and emergency contacts:
                  </p>
                  <div className="flex flex-col gap-2">
                     <div className="bg-red-700/50 p-2.5 rounded-xl border border-red-500/50">
                       <span className="text-[9px] font-extrabold text-red-200 uppercase">Cycle Phase</span>
                       <p className="text-xs font-bold">Ovulation</p>
                     </div>
                     <div className="bg-red-700/50 p-2.5 rounded-xl border border-red-500/50">
                       <span className="text-[9px] font-extrabold text-red-200 uppercase">Recent Symptoms</span>
                       <p className="text-xs font-bold">Fatigue, Mild Cramps</p>
                     </div>
                     <div className="bg-red-700/50 p-2.5 rounded-xl border border-red-500/50">
                       <span className="text-[9px] font-extrabold text-red-200 uppercase">Last Blood Analysis</span>
                       <p className="text-xs font-bold">Bright Red (Normal) - 2 days ago</p>
                     </div>
                  </div>
                </div>
              )}

              {/* SECTION 12: Quick Safety Tips */}
              <div className="glass-panel p-5 rounded-3xl border border-orange-100 dark:border-orange-900/30 bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-zinc-900 text-center relative overflow-hidden group">
                 <Sparkles className="absolute -top-2 -left-2 w-12 h-12 text-orange-200 dark:text-orange-900/50 opacity-50 group-hover:rotate-12 transition-transform" />
                 <h3 className="font-display font-extrabold text-[10px] text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-3 relative z-10">
                   🌸 Safety Tip of the Day
                 </h3>
                 <p className="font-display font-bold text-sm text-[var(--text-primary)] leading-snug italic relative z-10 mb-2">
                   "Always share your travel plans and cab details with at least one trusted primary contact."
                 </p>
              </div>

              {/* SECTION 11: Emergency History */}
              <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                 <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
                   <Clock className="w-4 h-4 text-purple-500" /> Recent Activity
                 </h3>
                 <div className="flex flex-col gap-4 relative before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100 dark:before:bg-zinc-800">
                   <div className="flex items-start gap-3 relative z-10">
                     <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-zinc-900 shrink-0 mt-0.5"></div>
                     <div>
                       <p className="text-xs font-bold text-[var(--text-primary)]">Location Shared</p>
                       <span className="text-[9px] font-semibold text-[var(--text-secondary)]">Yesterday, 9:45 PM</span>
                     </div>
                   </div>
                   <div className="flex items-start gap-3 relative z-10">
                     <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white dark:border-zinc-900 shrink-0 mt-0.5"></div>
                     <div>
                       <p className="text-xs font-bold text-[var(--text-primary)]">SOS Activated (Test)</p>
                       <span className="text-[9px] font-semibold text-[var(--text-secondary)]">Oct 12, 4:20 PM</span>
                     </div>
                   </div>
                 </div>
              </div>

              {/* SECTION 13: AI Safety Assistant & SECTION 10: Resources */}
              <div className="glass-panel p-5 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/30 dark:bg-emerald-950/10">
                 <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-3 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                   🤖 ArogyaNari Safety Assistant
                 </h3>
                 <div className="flex flex-col gap-2 mb-4">
                   <button className="text-left text-[11px] font-bold text-[var(--text-primary)] bg-white/60 dark:bg-zinc-900/60 p-2 rounded-lg border border-white dark:border-zinc-800 hover:border-emerald-300 transition-colors">
                     💬 What should I do in an emergency?
                   </button>
                   <button className="text-left text-[11px] font-bold text-[var(--text-primary)] bg-white/60 dark:bg-zinc-900/60 p-2 rounded-lg border border-white dark:border-zinc-800 hover:border-emerald-300 transition-colors">
                     💬 Safety guidance for traveling alone?
                   </button>
                 </div>
                 
                 <div className="pt-4 border-t border-emerald-200 dark:border-emerald-900/50">
                   <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase block mb-2">Women's Safety Resources</span>
                   <div className="flex flex-wrap gap-2">
                     <span className="text-[9px] font-bold bg-white dark:bg-zinc-800 px-2 py-1 rounded shadow-sm cursor-pointer hover:text-emerald-600 transition-colors">Helplines</span>
                     <span className="text-[9px] font-bold bg-white dark:bg-zinc-800 px-2 py-1 rounded shadow-sm cursor-pointer hover:text-emerald-600 transition-colors">Mental Health</span>
                     <span className="text-[9px] font-bold bg-white dark:bg-zinc-800 px-2 py-1 rounded shadow-sm cursor-pointer hover:text-emerald-600 transition-colors">Legal Aid</span>
                   </div>
                 </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
