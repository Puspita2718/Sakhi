import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Activity, 
  Droplet, 
  ChevronLeft, 
  ChevronRight,
  Info,
  Smile,
  AlertCircle,
  TrendingUp,
  Heart,
  BookOpen,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function CycleTracker({ language = 'en', cycleLogs, setCycleLogs, setTab }) {
  const [selectedDate, setSelectedDate] = useState('2024-10-23');
  
  // States for logging
  const [formIsPeriod, setFormIsPeriod] = useState(false);
  const [formFlow, setFormFlow] = useState('none');
  const [formSymptoms, setFormSymptoms] = useState([]);
  const [formMood, setFormMood] = useState('');

  const calendarDays = [];
  const daysInOctober = 31;
  const startOffset = 1;

  for (let i = 1; i <= startOffset; i++) {
    calendarDays.push({ day: null, dateStr: null, type: 'empty' });
  }
  for (let d = 1; d <= daysInOctober; d++) {
    const dateStr = `2024-10-${d < 10 ? '0' + d : d}`;
    let type = 'normal';
    // Dummy active days
    if (d >= 7 && d <= 11) type = 'period';
    else if (d === 23) type = 'active'; // today
    
    // Check cycle logs
    if (cycleLogs && cycleLogs[dateStr] && cycleLogs[dateStr].isPeriodDay) {
        type = 'period';
    }
    
    calendarDays.push({ day: d, dateStr, type });
  }

  const handleDayClick = (cell) => {
    if (!cell.day) return;
    setSelectedDate(cell.dateStr);
    const existingLog = (cycleLogs && cycleLogs[cell.dateStr]) || {};
    setFormIsPeriod(existingLog.isPeriodDay || cell.type === 'period');
    setFormFlow(existingLog.flowIntensity || (cell.type === 'period' ? 'medium' : 'none'));
    setFormSymptoms(existingLog.symptoms || []);
    setFormMood(existingLog.mood || '');
  };

  const toggleSymptom = (sym) => {
    setFormSymptoms(prev => prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]);
  };
  
  const handleSaveLog = () => {
    if (setCycleLogs) {
      setCycleLogs(prev => ({
        ...prev,
        [selectedDate]: {
          isPeriodDay: formIsPeriod,
          flowIntensity: formFlow,
          symptoms: formSymptoms,
          mood: formMood
        }
      }));
    }
  };

  const availableSymptoms = ['Cramps', 'Fatigue', 'Bloating', 'Headache', 'Acne', 'Mood Swings', 'Back Pain', 'Breast Tenderness'];
  const availableMoods = [
    { label: 'Happy', emoji: '😊' },
    { label: 'Calm', emoji: '😌' },
    { label: 'Tired', emoji: '😴' },
    { label: 'Sad', emoji: '😢' },
    { label: 'Irritated', emoji: '😡' },
    { label: 'Anxious', emoji: '😰' }
  ];

  return (
    <div className="flex flex-col gap-6 text-left animate-fade-in w-full pb-12">
      
      {/* SECTION 1: Current Cycle Status (Hero Card) */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-pink-100/50 dark:border-zinc-800 bg-gradient-to-r from-pink-50 to-white dark:from-zinc-900 dark:to-zinc-950 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/10 blur-3xl rounded-full"></div>
        <div className="z-10 flex-1 w-full">
           <h1 className="font-display text-2xl font-extrabold text-[var(--text-primary)] mb-6 flex items-center gap-2">
             🌸 Current Cycle Status
           </h1>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Cycle Day</span>
               <p className="text-xl font-black text-pink-600 dark:text-pink-400 mt-1">14</p>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Current Phase</span>
               <p className="text-xl font-black text-purple-600 dark:text-purple-400 mt-1">Ovulation</p>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Days Until Next Period</span>
               <p className="text-xl font-black text-[var(--text-primary)] mt-1">14</p>
             </div>
             <div className="bg-pink-50/80 dark:bg-pink-900/20 p-4 rounded-2xl border border-pink-100/50 dark:border-pink-800/30">
               <span className="text-[10px] font-extrabold text-pink-600 dark:text-pink-400 uppercase tracking-wider">Ovulation Window</span>
               <p className="text-xl font-black text-pink-600 dark:text-pink-400 mt-1 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span> Active
               </p>
             </div>
           </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-xl shadow-pink-100/50 dark:shadow-none border border-pink-50 dark:border-zinc-800 z-10 w-full md:w-auto">
          <p className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4 text-center">Cycle Regularity Score</p>
          <div className="relative w-32 h-32 flex items-center justify-center">
             <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0">
               <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100 dark:text-zinc-800" />
               <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="339.29" strokeDashoffset={339.29 - (339.29 * 92) / 100} className="text-emerald-500 transition-all duration-1000 ease-out" />
             </svg>
             <div className="flex flex-col items-center z-10">
               <span className="font-display font-black text-3xl text-[var(--text-primary)]">92<span className="text-lg text-[var(--text-secondary)]">%</span></span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SECTION 2: Current Phase Explanation */}
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 flex flex-col bg-purple-50/30 dark:bg-purple-950/10">
              <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-purple-500" /> What is happening in your body?
              </h3>
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-purple-100 dark:border-purple-900/30 h-full">
                 <h4 className="text-sm font-black text-[var(--text-primary)] mb-3 text-purple-600 dark:text-purple-400">Ovulation Phase</h4>
                 <ul className="flex flex-col gap-2">
                   <li className="flex items-start gap-2 text-xs font-semibold text-[var(--text-secondary)]">
                     <span className="text-purple-400 mt-0.5">•</span> Estrogen levels are high
                   </li>
                   <li className="flex items-start gap-2 text-xs font-semibold text-[var(--text-secondary)]">
                     <span className="text-purple-400 mt-0.5">•</span> Energy levels may increase
                   </li>
                   <li className="flex items-start gap-2 text-xs font-semibold text-[var(--text-secondary)]">
                     <span className="text-purple-400 mt-0.5">•</span> Fertility is highest
                   </li>
                   <li className="flex items-start gap-2 text-xs font-semibold text-[var(--text-secondary)]">
                     <span className="text-purple-400 mt-0.5">•</span> Mood is generally more stable
                   </li>
                 </ul>
              </div>
            </div>

            {/* SECTION 5: What To Expect Next */}
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 flex flex-col bg-blue-50/30 dark:bg-blue-950/10">
              <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-500" /> What To Expect Next
              </h3>
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-blue-100 dark:border-blue-900/30 h-full">
                 <h4 className="text-sm font-black text-[var(--text-primary)] mb-3 text-blue-600 dark:text-blue-400">Next 3 Days Forecast</h4>
                 <div className="flex flex-col gap-3">
                   <div className="flex items-center justify-between text-xs font-semibold">
                     <span className="text-[var(--text-secondary)] flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Energy Level:</span>
                     <span className="text-[var(--text-primary)] font-bold">High</span>
                   </div>
                   <div className="flex items-center justify-between text-xs font-semibold">
                     <span className="text-[var(--text-secondary)] flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Mood Stability:</span>
                     <span className="text-[var(--text-primary)] font-bold">Good</span>
                   </div>
                   <div className="flex items-center justify-between text-xs font-semibold">
                     <span className="text-[var(--text-secondary)] flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Fertility:</span>
                     <span className="text-[var(--text-primary)] font-bold">Peak Tomorrow</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* THE CALENDAR (Restored) & LOGGING COMBINED */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Calendar UI */}
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] flex items-center gap-2">
                   <CalendarIcon className="w-5 h-5 text-pink-500" /> Calendar
                 </h3>
                 <div className="flex items-center gap-3 text-xs font-extrabold text-[var(--text-secondary)] bg-gray-50 dark:bg-zinc-900 rounded-full px-3 py-1">
                   <button className="hover:text-pink-500 cursor-pointer"><ChevronLeft size={16} /></button>
                   <span>October 2024</span>
                   <button className="hover:text-pink-500 cursor-pointer"><ChevronRight size={16} /></button>
                 </div>
               </div>
               
               <div className="grid grid-cols-7 gap-1.5 mb-2 text-center text-[10px] font-extrabold text-[var(--text-secondary)] uppercase">
                 <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
               </div>
               
               <div className="grid grid-cols-7 gap-1.5 justify-items-center">
                 {calendarDays.map((cell, idx) => {
                   if (cell.type === 'empty') return <div key={idx} className="w-8 h-8"></div>;
                   
                   let dayClass = "w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold cursor-pointer transition-all duration-300 relative ";
                   
                   if (cell.dateStr === selectedDate) {
                     dayClass += "ring-2 ring-pink-500 ring-offset-2 dark:ring-offset-zinc-950 bg-gray-100 dark:bg-zinc-800 ";
                   } else if (cell.type === 'period') {
                     dayClass += "bg-pink-100 dark:bg-pink-900/30 text-pink-600 hover:bg-pink-200 dark:hover:bg-pink-900/50 ";
                   } else if (cell.type === 'active') {
                     dayClass += "bg-pink-500 text-white shadow-md shadow-pink-500/30 hover:bg-pink-600 ";
                   } else {
                     dayClass += "hover:bg-gray-100 dark:hover:bg-zinc-800 text-[var(--text-primary)]";
                   }
                   
                   return (
                     <div key={idx} className={dayClass} onClick={() => handleDayClick(cell)}>
                       {cell.day}
                       {cell.type === 'period' && (<span className="absolute bottom-0.5 w-1 h-1 bg-pink-500 rounded-full"></span>)}
                     </div>
                   );
                 })}
               </div>
            </div>

            {/* Logging UI (Sections 3 & 4) */}
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 flex flex-col">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100 dark:border-zinc-800">
                <h3 className="font-display font-extrabold text-base text-[var(--text-primary)]">Log for {selectedDate}</h3>
                <button onClick={handleSaveLog} className="text-xs font-bold bg-pink-500 text-white px-3 py-1.5 rounded-full hover:bg-pink-600 transition-colors shadow-sm cursor-pointer">Save Log</button>
              </div>

              {/* SECTION 4: Mood Check-In */}
              <div className="mb-6">
                <span className="text-xs font-bold text-[var(--text-secondary)] block mb-3">Mood Check-In</span>
                <div className="grid grid-cols-3 gap-2">
                  {availableMoods.map((mood) => {
                    const isSelected = formMood === mood.label;
                    return (
                      <button 
                        key={mood.label}
                        onClick={() => setFormMood(mood.label)}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl border transition-all cursor-pointer hover:-translate-y-1 ${isSelected ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20' : 'border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-pink-200 dark:hover:border-pink-900/50'}`}
                      >
                        <span className="text-xl">{mood.emoji}</span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isSelected ? 'text-pink-600 dark:text-pink-400' : 'text-[var(--text-secondary)]'}`}>{mood.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* SECTION 3: How Are You Feeling Today? */}
              <div>
                <span className="text-xs font-bold text-[var(--text-secondary)] block mb-3">Select Today's Symptoms</span>
                <div className="flex flex-wrap gap-2">
                  {availableSymptoms.map(sym => {
                    const active = formSymptoms.includes(sym);
                    return (
                      <button
                        key={sym}
                        onClick={() => toggleSymptom(sym)}
                        className={`px-3 py-1.5 rounded-full border text-[11px] font-bold cursor-pointer transition-all hover:-translate-y-0.5 ${active ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400' : 'border-gray-200 dark:border-zinc-700 bg-transparent text-[var(--text-primary)] hover:border-pink-300 dark:hover:border-pink-800'}`}
                      >
                        {active && <span className="mr-1">✓</span>}
                        {sym}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 7: Cycle History Overview */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-6">
                <Activity className="w-5 h-5 text-emerald-500" /> Cycle History Overview
             </h3>
             <p className="text-xs font-bold text-[var(--text-secondary)] mb-4">Last 6 Cycles</p>
             
             <div className="w-full overflow-x-auto pb-4">
               <div className="min-w-[500px] h-32 relative mt-4">
                 <svg viewBox="0 0 600 100" width="100%" height="100%" className="overflow-visible">
                   {/* Grid lines */}
                   <line x1="0" y1="20" x2="600" y2="20" stroke="currentColor" className="text-gray-100 dark:text-zinc-800" strokeWidth="1" strokeDasharray="4 4" />
                   <line x1="0" y1="50" x2="600" y2="50" stroke="currentColor" className="text-gray-100 dark:text-zinc-800" strokeWidth="1" strokeDasharray="4 4" />
                   <line x1="0" y1="80" x2="600" y2="80" stroke="currentColor" className="text-gray-100 dark:text-zinc-800" strokeWidth="1" strokeDasharray="4 4" />
                   
                   {/* Data Path */}
                   <path 
                     d="M 50 50 L 150 20 L 250 80 L 350 50 L 450 20 L 550 50" 
                     fill="none" 
                     stroke="url(#gradient)" 
                     strokeWidth="4" 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                   />
                   
                   {/* Defs for gradient */}
                   <defs>
                     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="#ec4899" />
                       <stop offset="100%" stopColor="#8b5cf6" />
                     </linearGradient>
                   </defs>

                   {/* Data Points */}
                   {[
                     { x: 50, y: 50, val: 29, label: 'Cycle 1' },
                     { x: 150, y: 20, val: 30, label: 'Cycle 2' },
                     { x: 250, y: 80, val: 28, label: 'Cycle 3' },
                     { x: 350, y: 50, val: 29, label: 'Cycle 4' },
                     { x: 450, y: 20, val: 30, label: 'Cycle 5' },
                     { x: 550, y: 50, val: 29, label: 'Cycle 6' }
                   ].map((pt, i) => (
                     <g key={i}>
                       <circle cx={pt.x} cy={pt.y} r="5" fill="white" stroke="#ec4899" strokeWidth="2" className="dark:fill-zinc-900" />
                       <text x={pt.x} y={pt.y - 12} fontSize="10" fontWeight="bold" fill="currentColor" className="text-[var(--text-primary)]" textAnchor="middle">{pt.val} Days</text>
                       <text x={pt.x} y={115} fontSize="9" fontWeight="bold" fill="currentColor" className="text-[var(--text-secondary)] uppercase tracking-wider" textAnchor="middle">{pt.label}</text>
                     </g>
                   ))}
                 </svg>
               </div>
             </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* SECTION 8: Fertility & Ovulation Tracker */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-5">
                🌸 Fertility Status
             </h3>
             <div className="flex flex-col gap-4">
               <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-2xl border border-pink-100 dark:border-pink-900/30 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
                 <p className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Current Status</p>
                 <p className="text-sm font-black text-pink-600 dark:text-pink-400">High Fertility Window</p>
               </div>
               
               <div className="flex justify-between items-center text-xs font-bold text-[var(--text-secondary)] px-2 mt-2">
                 <span>Low</span>
                 <span>Medium</span>
                 <span className="text-pink-600">High</span>
               </div>
               <div className="h-3 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden flex">
                 <div className="h-full bg-gray-300 dark:bg-zinc-600 w-1/3 border-r border-white dark:border-zinc-900"></div>
                 <div className="h-full bg-pink-300 dark:bg-pink-700 w-1/3 border-r border-white dark:border-zinc-900"></div>
                 <div className="h-full bg-pink-500 w-1/3 shadow-[0_0_8px_rgba(236,72,153,0.5)]"></div>
               </div>
             </div>
          </div>

          {/* SECTION 6: AI Cycle Insights */}
          <div className="glass-panel p-6 rounded-3xl border border-purple-100 dark:border-purple-900/30 bg-purple-50/50 dark:bg-purple-950/20 shadow-lg shadow-purple-100/30 dark:shadow-none">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-4">
                🤖 ArogyaNari Insights
             </h3>
             <p className="text-xs font-bold text-[var(--text-secondary)] mb-3">Based on your previous cycles:</p>
             <ul className="flex flex-col gap-3">
               <li className="flex gap-3 text-xs font-semibold text-[var(--text-primary)] leading-relaxed bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white/40 dark:border-zinc-700/40 hover:-translate-y-1 transition-transform">
                 <span className="text-purple-500 mt-0.5">•</span>
                 Mild fatigue usually occurs 2 days before your period.
               </li>
               <li className="flex gap-3 text-xs font-semibold text-[var(--text-primary)] leading-relaxed bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white/40 dark:border-zinc-700/40 hover:-translate-y-1 transition-transform">
                 <span className="text-purple-500 mt-0.5">•</span>
                 Mood changes often begin during the luteal phase.
               </li>
               <li className="flex gap-3 text-xs font-semibold text-[var(--text-primary)] leading-relaxed bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white/40 dark:border-zinc-700/40 hover:-translate-y-1 transition-transform">
                 <span className="text-purple-500 mt-0.5">•</span>
                 Your cycle has remained consistent for the last 4 months.
               </li>
             </ul>
          </div>

          {/* SECTION 9: Health Recommendations */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-red-500" /> Recommendations
             </h3>
             <p className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider mb-3">Current Phase: <span className="text-purple-600">Ovulation</span></p>
             
             <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="text-xs font-bold text-[var(--text-primary)]">Protein-rich foods</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="text-xs font-bold text-[var(--text-primary)]">Strength training</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="text-xs font-bold text-[var(--text-primary)]">Hydration focus</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="text-xs font-bold text-[var(--text-primary)]">7–8 hours sleep</span>
                </div>
             </div>
          </div>

          {/* SECTION 10: Wellness Timeline */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-5">
                <Clock className="w-5 h-5 text-indigo-500" /> Cycle Timeline
             </h3>
             <div className="relative border-l-2 border-gray-200 dark:border-zinc-700 ml-3 flex flex-col gap-6">
                <div className="relative pl-5">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[7px] top-1"></div>
                  <p className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Day 1</p>
                  <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">Period Started</p>
                </div>
                <div className="relative pl-5">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[7px] top-1"></div>
                  <p className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Day 5</p>
                  <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">Flow Ended</p>
                </div>
                <div className="relative pl-5">
                  <div className="absolute w-3 h-3 bg-pink-400 rounded-full -left-[7px] top-1 shadow-[0_0_8px_rgba(244,114,182,0.5)]"></div>
                  <p className="text-[10px] font-extrabold text-pink-600 uppercase tracking-wider">Day 12</p>
                  <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">Fertility Increased</p>
                </div>
                <div className="relative pl-5 pb-2">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1 ring-4 ring-white dark:ring-zinc-900 shadow-sm"></div>
                  <p className="text-[10px] font-extrabold text-purple-600 uppercase tracking-wider">Day 14 (Today)</p>
                  <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">Ovulation</p>
                </div>
             </div>
          </div>

          {/* SECTION 11: Educational Section */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-gradient-to-br from-indigo-50/50 to-white dark:from-zinc-900 dark:to-zinc-950">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-indigo-500" /> Learn About Your Phase
             </h3>
             <div className="bg-white/80 dark:bg-zinc-800/80 p-4 rounded-2xl border border-white dark:border-zinc-700/50 hover:shadow-lg transition-shadow">
               <p className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Ovulation Phase</p>
               <p className="text-xs font-semibold text-[var(--text-primary)] leading-relaxed italic text-[var(--text-secondary)]">
                 "During ovulation, estrogen peaks and fertility is highest. Many women experience increased energy and confidence."
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
