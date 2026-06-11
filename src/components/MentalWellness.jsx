import React, { useState, useEffect } from 'react';
import { 
  Heart, CloudRain, PlayCircle, Wind, BookOpen, Sparkles, AlertTriangle, 
  CheckCircle2, Clock, Music, Headphones, Flame, Droplet, Moon, Sun, ShieldAlert
} from 'lucide-react';

export default function MentalWellness({ language = 'en' }) {
  const [mood, setMood] = useState('Calm 😌');
  const [breatheState, setBreatheState] = useState('Idle'); // Idle, Inhale, Hold, Exhale
  const [breatheTimer, setBreatheTimer] = useState(0);
  const [isEmergency, setIsEmergency] = useState(false);
  
  const [journalInput, setJournalInput] = useState('');
  const [journalAnalysis, setJournalAnalysis] = useState(null);

  const [affirmationIdx, setAffirmationIdx] = useState(0);
  const affirmations = [
    "You are stronger than your worries.",
    "Be kind to yourself today.",
    "You are capable, resilient, and growing every day.",
    "Breathe in peace, breathe out tension.",
    "Your feelings are valid and you are allowed to rest."
  ];

  const moods = [
    { label: 'Happy 😊', effect: 'Productivity suggestions' },
    { label: 'Calm 😌', effect: 'Maintenance routines' },
    { label: 'Tired 😴', effect: 'Rest and sleep recommendations' },
    { label: 'Sad 😢', effect: 'Self-compassion and journaling' },
    { label: 'Irritated 😡', effect: 'Grounding techniques' },
    { label: 'Anxious 😰', effect: 'Breathing exercises' }
  ];

  // Breathing Sphere Logic
  useEffect(() => {
    let interval;
    if (breatheTimer > 0) {
      interval = setInterval(() => {
        setBreatheState(prev => {
          if (prev === 'Idle' || prev === 'Exhale') return 'Inhale';
          if (prev === 'Inhale') return 'Hold';
          if (prev === 'Hold') return 'Exhale';
          return 'Inhale';
        });
      }, 3000); // 3s per phase
    } else {
      setBreatheState('Idle');
    }
    return () => clearInterval(interval);
  }, [breatheTimer]);

  const handleJournalSubmit = () => {
    if (!journalInput.trim()) return;
    setJournalAnalysis({
      detected: 'Anxious',
      stress: 'Medium',
      actions: ['Meditation', 'Deep Breathing', 'Early Sleep']
    });
  };

  const selectedMoodObj = moods.find(m => m.label === mood) || moods[1];

  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in pb-12 relative">

      {/* SECTION 14: Emergency Calm Button (FAB) */}
      <button 
        onClick={() => setIsEmergency(true)}
        className="fixed bottom-6 right-6 z-50 bg-rose-500 hover:bg-rose-600 text-white px-5 py-4 rounded-full shadow-2xl flex items-center gap-3 transform transition-transform hover:scale-105 animate-pulse cursor-pointer border-4 border-rose-200 dark:border-rose-900"
      >
        <ShieldAlert size={20} />
        <span className="font-bold text-sm">I Need Immediate Calm</span>
      </button>

      {/* Emergency Overlay */}
      {isEmergency && (
        <div className="fixed inset-0 z-[100] bg-zinc-900/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 w-full max-w-lg flex flex-col items-center text-center shadow-2xl border border-rose-100 dark:border-zinc-800">
            <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-rose-500 animate-pulse" />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-[var(--text-primary)] mb-2">Breathe with me.</h2>
            <p className="text-sm font-medium text-[var(--text-secondary)] mb-8">You are safe. Focus on the circle below.</p>
            
            <div className="relative w-48 h-48 flex items-center justify-center mb-8">
               <div className="absolute inset-0 bg-rose-200 dark:bg-rose-900/50 rounded-full animate-ping opacity-75"></div>
               <div className="relative z-10 w-32 h-32 bg-gradient-to-tr from-rose-400 to-pink-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg animate-pulse">
                 Inhale
               </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl w-full text-left mb-6">
              <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-2">Grounding Technique (5-4-3-2-1)</span>
              <ul className="text-xs font-bold text-[var(--text-primary)] flex flex-col gap-2">
                <li>👀 5 things you can see</li>
                <li>✋ 4 things you can feel</li>
                <li>👂 3 things you can hear</li>
                <li>👃 2 things you can smell</li>
                <li>👅 1 thing you can taste</li>
              </ul>
            </div>

            <button 
              onClick={() => setIsEmergency(false)}
              className="w-full bg-gray-100 dark:bg-zinc-800 text-[var(--text-primary)] py-3 rounded-xl text-sm font-bold hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
            >
              I feel better now, close
            </button>
          </div>
        </div>
      )}

      {/* SECTION 1: Daily Mood Check-In (Hero) */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-indigo-100/50 dark:border-zinc-800 bg-gradient-to-r from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-zinc-900 dark:to-zinc-950 flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-300/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="z-10 w-full">
           <h1 className="font-display text-2xl font-extrabold text-[var(--text-primary)] mb-6 flex items-center gap-2">
             🌸 How are you feeling today?
           </h1>
           <div className="flex flex-wrap gap-3 mb-6">
             {moods.map(m => (
               <button
                 key={m.label}
                 onClick={() => setMood(m.label)}
                 className={`px-4 py-3 rounded-2xl border transition-all cursor-pointer shadow-sm transform hover:-translate-y-1 ${mood === m.label ? 'border-indigo-500 bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 scale-105' : 'border-white/40 dark:border-zinc-700/40 bg-white/40 dark:bg-zinc-800/40 text-[var(--text-primary)]'}`}
               >
                 <span className="font-bold text-sm">{m.label}</span>
               </button>
             ))}
           </div>

           <div className="bg-white/80 dark:bg-zinc-900/80 p-4 rounded-2xl border border-white dark:border-zinc-800 flex items-center gap-4 shadow-sm backdrop-blur-sm">
             <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
               <Sparkles className="w-5 h-5 text-indigo-500" />
             </div>
             <div>
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-0.5">Recommendation based on your mood</span>
               <p className="text-sm font-bold text-[var(--text-primary)]">{selectedMoodObj.effect}</p>
             </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Insights, Plans, Body Connection */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* SECTION 2: Emotional Snapshot */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-center flex flex-col items-center">
            <h3 className="font-display font-extrabold text-sm mb-4 text-[var(--text-primary)] uppercase tracking-wider w-full text-left">
              Emotional Snapshot
            </h3>
            <div className="relative w-28 h-28 flex items-center justify-center mb-4">
               <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0">
                 <circle cx="56" cy="56" r="46" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-zinc-800" />
                 <circle cx="56" cy="56" r="46" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="289.02" strokeDashoffset={289.02 - (289.02 * 82) / 100} className="text-pink-500 transition-all duration-1000 ease-out" />
               </svg>
               <div className="flex flex-col items-center z-10">
                 <span className="font-display font-black text-2xl text-[var(--text-primary)]">82<span className="text-xs text-[var(--text-secondary)]">/100</span></span>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full text-left mt-2">
               <div className="bg-gray-50 dark:bg-zinc-950 p-2 rounded-lg">
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase">Mood</span>
                 <p className="text-xs font-bold">{mood.split(' ')[0]}</p>
               </div>
               <div className="bg-gray-50 dark:bg-zinc-950 p-2 rounded-lg">
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase">Stress</span>
                 <p className="text-xs font-bold text-emerald-500">Low 🟢</p>
               </div>
               <div className="bg-gray-50 dark:bg-zinc-950 p-2 rounded-lg">
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase">Energy</span>
                 <p className="text-xs font-bold text-blue-500">7/10</p>
               </div>
               <div className="bg-gray-50 dark:bg-zinc-950 p-2 rounded-lg">
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase">Sleep</span>
                 <p className="text-xs font-bold text-indigo-500">Good</p>
               </div>
            </div>
          </div>

          {/* SECTION 3: Self-Care Plan */}
          <div className="glass-panel p-5 rounded-3xl border border-pink-100 dark:border-pink-900/30 bg-pink-50/30 dark:bg-pink-950/10">
            <h3 className="font-display font-extrabold text-sm mb-4 text-pink-600 dark:text-pink-400 uppercase tracking-wider flex items-center gap-2">
              🌸 Today's Self-Care Plan
            </h3>
            <div className="flex flex-col gap-2.5">
              {[
                'Drink 8 glasses of water',
                'Take a 15-minute walk',
                'Complete breathing exercise',
                'Journal your thoughts',
                'Sleep before 11 PM'
              ].map((task, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-xl border border-white dark:border-zinc-800">
                  <CheckCircle2 size={14} className="text-pink-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] font-bold text-[var(--text-primary)]">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 12: Mind-Body Connection */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-sm mb-3 text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
              <Sun className="w-4 h-4 text-orange-500" /> Mind-Body Connection
            </h3>
            <div className="mb-3">
              <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase">Current Cycle Phase</span>
              <p className="text-xs font-black text-orange-600">Luteal Phase</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase block mb-1">Possible Effects</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 px-2 py-1 rounded-md">✓ Mood Changes</span>
                  <span className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 px-2 py-1 rounded-md">✓ Fatigue</span>
                  <span className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 px-2 py-1 rounded-md">✓ Cravings</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase block mb-1">Recommended</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-bold bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-md">✓ Meditation</span>
                  <span className="text-[10px] font-bold bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-md">✓ Gentle Yoga</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 13: Wellness Streaks */}
          <div className="glass-panel p-5 rounded-3xl border border-orange-100 dark:border-orange-900/30 bg-orange-50/50 dark:bg-orange-950/10">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-1.5 mb-3 text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              <Flame size={14} /> Wellness Streaks
            </h3>
            <div className="flex flex-col gap-2">
               <div className="flex items-center justify-between bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-xl">
                 <span className="text-xs font-bold text-[var(--text-primary)]">Meditation</span>
                 <span className="text-xs font-black text-orange-600">5 Days</span>
               </div>
               <div className="flex items-center justify-between bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-xl">
                 <span className="text-xs font-bold text-[var(--text-primary)]">Journaling</span>
                 <span className="text-xs font-black text-orange-600">7 Days</span>
               </div>
               <div className="flex items-center justify-between bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-xl">
                 <span className="text-xs font-bold text-[var(--text-primary)]">Self-Care</span>
                 <span className="text-xs font-black text-orange-600">6 Days</span>
               </div>
            </div>
          </div>

        </div>

        {/* CENTER COLUMN: Active Mental Exercises */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* SECTION 4: Guided Breathing Center */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]">
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-indigo-50/30 to-transparent dark:from-indigo-900/10 pointer-events-none"></div>
             
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-6 text-[var(--text-primary)] z-10">
               <Wind className="w-5 h-5 text-indigo-500" /> Guided Breathing
             </h3>

             {/* Breathing Sphere */}
             <div className="relative w-48 h-48 flex items-center justify-center mb-8 z-10">
                <div className={`absolute inset-0 rounded-full border border-indigo-200 dark:border-indigo-900/50 transition-transform duration-3000 ease-in-out ${breatheState === 'Inhale' || breatheState === 'Hold' ? 'scale-[1.8] opacity-0' : 'scale-100 opacity-50'}`}></div>
                <div className={`absolute inset-0 rounded-full border border-indigo-300 dark:border-indigo-800/50 transition-transform duration-3000 ease-in-out delay-700 ${breatheState === 'Inhale' || breatheState === 'Hold' ? 'scale-[1.5] opacity-0' : 'scale-100 opacity-50'}`}></div>
                <div className={`relative w-24 h-24 rounded-full flex items-center justify-center shadow-lg shadow-indigo-200/50 dark:shadow-none transition-all duration-3000 ease-in-out ${breatheState === 'Inhale' || breatheState === 'Hold' ? 'scale-[1.5] bg-indigo-400' : 'scale-100 bg-indigo-500'}`}>
                  <span className="font-bold text-white text-sm tracking-wider uppercase">{breatheState}</span>
                </div>
             </div>

             <div className="flex flex-wrap justify-center gap-2 mb-6 z-10">
               {['Relaxation', 'Sleep', 'Anxiety Relief', 'Focus'].map(t => (
                 <span key={t} className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-3 py-1.5 rounded-full cursor-pointer hover:border-indigo-300 transition-colors">
                   {t}
                 </span>
               ))}
             </div>

             <div className="flex gap-3 z-10">
               <button onClick={() => setBreatheTimer(60)} className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors shadow-sm">1 Min</button>
               <button onClick={() => setBreatheTimer(300)} className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors shadow-sm">5 Min</button>
               <button onClick={() => setBreatheTimer(0)} className="px-4 py-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-[var(--text-primary)] text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors shadow-sm">Stop</button>
             </div>
          </div>

          {/* SECTION 5: AI Journal Analysis */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               <BookOpen className="w-4 h-4 text-purple-500" /> Daily Journal
             </h3>
             <textarea 
               value={journalInput}
               onChange={(e) => setJournalInput(e.target.value)}
               placeholder="Write your thoughts, feelings, or concerns here..."
               className="w-full h-32 p-4 rounded-2xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-950 text-sm font-medium text-[var(--text-primary)] outline-none focus:border-purple-300 resize-none transition-colors mb-4"
             />
             <div className="flex justify-end">
               <button 
                 onClick={handleJournalSubmit}
                 className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
               >
                 Save & Analyze
               </button>
             </div>

             {journalAnalysis && (
               <div className="mt-4 p-4 bg-purple-50/50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30 rounded-2xl animate-fade-in">
                 <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5 mb-3">
                   🤖 ArogyaNari Insights
                 </h4>
                 <div className="grid grid-cols-2 gap-4 mb-3">
                   <div>
                     <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase block mb-1">Detected Mood</span>
                     <p className="text-xs font-black text-[var(--text-primary)]">{journalAnalysis.detected} 😰</p>
                   </div>
                   <div>
                     <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase block mb-1">Stress Level</span>
                     <p className="text-xs font-black text-yellow-500">{journalAnalysis.stress}</p>
                   </div>
                 </div>
                 <div>
                   <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase block mb-2">Suggested Actions</span>
                   <div className="flex flex-wrap gap-2">
                     {journalAnalysis.actions.map(act => (
                       <span key={act} className="text-[10px] font-bold bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2 py-1 rounded-md shadow-sm">✓ {act}</span>
                     ))}
                   </div>
                 </div>
               </div>
             )}
          </div>

          {/* SECTION 11: Gratitude Journal */}
          <div className="glass-panel p-6 rounded-3xl border border-pink-100 dark:border-pink-900/30 bg-pink-50/30 dark:bg-pink-950/10">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-pink-600 dark:text-pink-400 uppercase tracking-wider">
               💖 Three Things I'm Grateful For
             </h3>
             <div className="flex flex-col gap-3">
               <input type="text" placeholder="1." className="w-full p-3 rounded-xl border border-white dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-xs font-semibold outline-none focus:border-pink-300 transition-colors" />
               <input type="text" placeholder="2." className="w-full p-3 rounded-xl border border-white dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-xs font-semibold outline-none focus:border-pink-300 transition-colors" />
               <input type="text" placeholder="3." className="w-full p-3 rounded-xl border border-white dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-xs font-semibold outline-none focus:border-pink-300 transition-colors" />
             </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Libraries, Affirmations, Sleep */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* SECTION 7: Daily Affirmation Center */}
          <div className="glass-panel p-6 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-zinc-900 text-center relative overflow-hidden group">
             <Sparkles className="absolute -top-2 -left-2 w-12 h-12 text-emerald-200 dark:text-emerald-900/50 opacity-50 group-hover:rotate-12 transition-transform" />
             <h3 className="font-display font-extrabold text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4 relative z-10">
               Daily Affirmation
             </h3>
             <p className="font-display font-bold text-lg text-[var(--text-primary)] leading-tight italic relative z-10 mb-6">
               "{affirmations[affirmationIdx]}"
             </p>
             <button 
               onClick={() => setAffirmationIdx((affirmationIdx + 1) % affirmations.length)}
               className="mx-auto text-[10px] font-extrabold text-emerald-600 bg-emerald-100/50 dark:bg-emerald-900/30 px-3 py-1.5 rounded-full hover:bg-emerald-200/50 transition-colors relative z-10 cursor-pointer"
             >
               Refresh
             </button>
          </div>

          {/* SECTION 6: Mood History Tracker */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               <Clock className="w-4 h-4 text-orange-500" /> Mood History
             </h3>
             <div className="flex justify-between items-end h-8 mb-4">
                <div className="text-xl transform hover:-translate-y-1 transition-transform cursor-pointer">😊</div>
                <div className="text-xl transform hover:-translate-y-1 transition-transform cursor-pointer">😌</div>
                <div className="text-xl transform hover:-translate-y-1 transition-transform cursor-pointer">😌</div>
                <div className="text-xl transform hover:-translate-y-1 transition-transform cursor-pointer opacity-50">😰</div>
                <div className="text-xl transform hover:-translate-y-1 transition-transform cursor-pointer opacity-50">😢</div>
                <div className="text-xl transform hover:-translate-y-1 transition-transform cursor-pointer">😌</div>
                <div className="text-xl transform hover:-translate-y-1 transition-transform cursor-pointer">😊</div>
             </div>
             <p className="text-[10px] font-semibold text-[var(--text-secondary)] leading-relaxed bg-gray-50 dark:bg-zinc-950 p-3 rounded-xl">
               <strong className="text-[var(--text-primary)]">Trend:</strong> Your mood tends to decline 2–3 days before your period. 
             </p>
          </div>

          {/* SECTION 8: Meditation Library */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               <Headphones className="w-4 h-4 text-purple-500" /> Meditations
             </h3>
             <div className="flex flex-col gap-3">
               {[
                 { name: 'Stress Relief', time: '5 min' },
                 { name: 'Better Sleep', time: '15 min' },
                 { name: 'Self Love', time: '10 min' },
                 { name: 'PMS Support', time: '10 min' }
               ].map(med => (
                 <div key={med.name} className="flex justify-between items-center p-3 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-purple-300 hover:bg-purple-50/50 dark:hover:border-purple-900/50 transition-colors cursor-pointer group">
                   <div className="flex items-center gap-3">
                     <PlayCircle className="w-6 h-6 text-purple-400 group-hover:text-purple-600 transition-colors" />
                     <span className="text-xs font-bold text-[var(--text-primary)]">{med.name}</span>
                   </div>
                   <span className="text-[10px] font-extrabold text-[var(--text-secondary)]">{med.time}</span>
                 </div>
               ))}
             </div>
          </div>

          {/* SECTION 9: Relaxing Soundscapes */}
          <div className="glass-panel p-5 rounded-3xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/30 dark:bg-blue-950/10">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wider">
               <Music className="w-4 h-4" /> Soundscapes
             </h3>
             <div className="grid grid-cols-2 gap-2">
               {['🌧 Rain', '🌊 Ocean', '🍃 Forest', '🔥 Fireplace'].map(sound => (
                 <button key={sound} className="bg-white/60 dark:bg-zinc-900/60 p-2 rounded-lg text-xs font-bold text-[var(--text-primary)] hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-left truncate border border-transparent hover:border-blue-200">
                   {sound}
                 </button>
               ))}
             </div>
          </div>

          {/* SECTION 10: Sleep Wellness */}
          <div className="glass-panel p-5 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/30 dark:bg-indigo-950/10">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
               <Moon className="w-4 h-4" /> Sleep Tracker
             </h3>
             <div className="flex justify-between items-center mb-3">
               <div>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block mb-0.5">Last Night</span>
                 <p className="text-sm font-black text-[var(--text-primary)]">7h 30m</p>
               </div>
               <div className="text-right">
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block mb-0.5">Score</span>
                 <p className="text-sm font-black text-emerald-500">85/100</p>
               </div>
             </div>
             <div className="bg-white/60 dark:bg-zinc-900/60 p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
               <span className="text-[9px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase block mb-1">ArogyaNari Suggests</span>
               <p className="text-[11px] font-bold text-[var(--text-primary)] leading-tight">Maintain your current sleep schedule. Quality is optimal.</p>
             </div>
          </div>

        </div>

      </div>

      {/* SECTION 15: AI Wellness Coach Footer */}
      <div className="glass-panel p-6 rounded-3xl border border-emerald-200 dark:border-emerald-900/50 bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-900/20 dark:to-zinc-950 mt-4 shadow-sm relative overflow-hidden">
        <Sparkles className="absolute top-0 right-10 w-32 h-32 text-emerald-200 dark:text-emerald-900/30 opacity-50 pointer-events-none" />
        <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
          🤖 ArogyaNari Wellness Coach
        </h3>
        <p className="text-xs font-semibold text-[var(--text-secondary)] mb-4">Based on your mood, sleep, journal entries, and cycle phase:</p>
        <div className="flex flex-wrap gap-4">
          <span className="text-xs font-bold text-[var(--text-primary)] bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/30">✓ Take a short walk today</span>
          <span className="text-xs font-bold text-[var(--text-primary)] bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/30">✓ Complete a 5-minute meditation</span>
          <span className="text-xs font-bold text-[var(--text-primary)] bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/30">✓ Reduce screen time before sleep</span>
        </div>
      </div>

    </div>
  );
}
