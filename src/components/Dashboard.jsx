import React from 'react';
import { 
  HeartPulse, TestTube, MessageSquare, Apple, Smile, Phone,
  CheckCircle, Droplet, Activity, Brain, ShieldAlert, Calendar, 
  Users, TrendingUp, ChevronRight, Zap
} from 'lucide-react';

export default function Dashboard({ language = 'en', setTab }) {
  const userName = "Ananya";

  // SECTION 2: Quick Actions Data
  const quickActions = [
    { icon: <HeartPulse className="w-5 h-5" />, label: 'Log Symptoms', color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400', action: () => setTab && setTab('health-log') },
    { icon: <TestTube className="w-5 h-5" />, label: 'Analyze Blood', color: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400', action: () => setTab && setTab('blood-analysis') },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Ask Sakhi AI', color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400', action: () => setTab && setTab('ai-chat') },
    { icon: <Apple className="w-5 h-5" />, label: 'Update Diet', color: 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400', action: () => setTab && setTab('diet-fitness') },
    { icon: <Smile className="w-5 h-5" />, label: 'Start Meditation', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400', action: () => setTab && setTab('mental-wellness') },
    { icon: <Phone className="w-5 h-5" />, label: 'Emergency SOS', color: 'bg-red-500 text-white shadow-md shadow-red-200 dark:shadow-red-900/50', action: () => setTab && setTab('emergency') }
  ];

  return (
    <div className="flex flex-col gap-6 text-left animate-fade-in w-full pb-12">
      
      {/* SECTION 1: Today's Health Overview (Hero Section) */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-pink-100/50 dark:border-zinc-800 bg-gradient-to-br from-pink-50/50 to-white dark:from-zinc-900 dark:to-zinc-950 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-300/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-300/20 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1">
            <h1 className="font-display text-3xl font-extrabold text-[var(--text-primary)] mb-1">
              🌸 Good Morning, {userName}
            </h1>
            <p className="text-sm font-semibold text-[var(--text-secondary)] mb-6 max-w-lg leading-relaxed bg-white/60 dark:bg-zinc-800/60 p-3 rounded-xl border border-white/40 dark:border-zinc-700/40">
              <span className="font-bold text-pink-600 dark:text-pink-400">AI Insight:</span> "Your energy levels are expected to remain high today. This is a good time for exercise and productivity-focused activities."
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              <div className="flex flex-col gap-1 p-3 bg-white/50 dark:bg-zinc-800/50 rounded-2xl border border-pink-50 dark:border-zinc-700/50">
                <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Phase</span>
                <span className="font-bold text-sm text-[var(--text-primary)]">Ovulation</span>
              </div>
              <div className="flex flex-col gap-1 p-3 bg-white/50 dark:bg-zinc-800/50 rounded-2xl border border-pink-50 dark:border-zinc-700/50">
                <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Mood</span>
                <span className="font-bold text-sm text-[var(--text-primary)]">Happy 😊</span>
              </div>
              <div className="flex flex-col gap-1 p-3 bg-white/50 dark:bg-zinc-800/50 rounded-2xl border border-pink-50 dark:border-zinc-700/50">
                <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Hydration</span>
                <span className="font-bold text-sm text-[var(--text-primary)]">6/8 glasses</span>
              </div>
              <div className="flex flex-col gap-1 p-3 bg-white/50 dark:bg-zinc-800/50 rounded-2xl border border-pink-50 dark:border-zinc-700/50">
                <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Sleep</span>
                <span className="font-bold text-sm text-[var(--text-primary)]">7h 30m</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-xl shadow-pink-100/50 dark:shadow-none border border-pink-50 dark:border-zinc-800 shrink-0">
            <div className="relative w-28 h-28 flex items-center justify-center mb-2">
              <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0">
                <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100 dark:text-zinc-800" />
                <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="301.59" strokeDashoffset={301.59 - (301.59 * 88) / 100} className="text-pink-500 transition-all duration-1000 ease-out" />
              </svg>
              <div className="flex flex-col items-center z-10">
                <span className="font-display font-black text-3xl text-pink-600 dark:text-pink-400">88</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">Score</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[var(--text-secondary)] bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-full">
              Excellent
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 2: Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {quickActions.map((action, idx) => (
          <button 
            key={idx} 
            onClick={action.action}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl glass-panel cursor-pointer group active:scale-95 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${idx === 5 ? 'border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20' : ''}`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${action.color}`}>
              {action.icon}
            </div>
            <span className="text-[11px] font-extrabold text-[var(--text-primary)] text-center leading-tight">
              {action.label}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-2">
        {/* LEFT COLUMN: 8 cols */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SECTION 3: Today's Wellness Checklist */}
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-display font-extrabold text-base flex items-center gap-2">
                  <CheckCircle className="text-emerald-500 w-5 h-5" /> Wellness Checklist
                </h3>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full">60%</span>
              </div>
              
              <div className="flex flex-col gap-3">
                {[
                  { label: "Drink 8 glasses of water", checked: true },
                  { label: "Complete 15 min exercise", checked: true },
                  { label: "Log mood", checked: true },
                  { label: "Eat iron-rich meal", checked: false },
                  { label: "Complete meditation session", checked: false }
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${item.checked ? 'bg-emerald-500 text-white' : 'bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 group-hover:border-emerald-400'}`}>
                      {item.checked && <CheckCircle className="w-3.5 h-3.5" />}
                    </div>
                    <span className={`text-sm font-semibold transition-colors ${item.checked ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-[var(--text-primary)]'}`}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
              <div className="mt-5 w-full bg-gray-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full transition-all duration-1000" style={{ width: '60%' }}></div>
              </div>
            </div>

            {/* SECTION 4: Cycle Insights */}
            <div className="glass-panel p-6 rounded-3xl border border-pink-100 dark:border-pink-900/30 bg-gradient-to-b from-pink-50/50 to-transparent dark:from-pink-950/10 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-extrabold text-pink-600 uppercase tracking-wider mb-1 block">Current Phase</span>
                  <h3 className="font-display font-extrabold text-xl text-[var(--text-primary)]">Ovulation</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-pink-600" />
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs font-bold text-[var(--text-secondary)] mb-2">Common Symptoms:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-bold bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2.5 py-1 rounded-full text-[var(--text-primary)] flex items-center gap-1"><span className="text-pink-500">✓</span> Increased energy</span>
                  <span className="text-[11px] font-bold bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2.5 py-1 rounded-full text-[var(--text-primary)] flex items-center gap-1"><span className="text-pink-500">✓</span> Mild cramps</span>
                  <span className="text-[11px] font-bold bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2.5 py-1 rounded-full text-[var(--text-primary)] flex items-center gap-1"><span className="text-pink-500">✓</span> Higher fertility</span>
                </div>
              </div>

              <div className="mt-auto bg-white/60 dark:bg-zinc-800/60 p-3 rounded-2xl border border-white/50 dark:border-zinc-700/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase">Next Milestone</span>
                  <span className="text-[10px] font-extrabold text-pink-600">Tomorrow</span>
                </div>
                <p className="text-sm font-bold text-[var(--text-primary)]">Ovulation Peak</p>
                <div className="w-full bg-gray-200 dark:bg-zinc-700 h-1 rounded-full mt-2 overflow-hidden flex">
                  <div className="bg-pink-300 w-1/4 h-full"></div>
                  <div className="bg-pink-400 w-1/4 h-full"></div>
                  <div className="bg-pink-500 w-1/4 h-full rounded-r-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SECTION 5: Mood & Mental Wellness */}
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 flex flex-col">
               <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-5">
                  <Brain className="text-purple-500 w-5 h-5" /> Mental Wellness
               </h3>
               
               <div className="flex gap-4 mb-6">
                 <div className="flex-1 bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100/50 dark:border-purple-900/30 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                   <span className="text-2xl mb-1">😊</span>
                   <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Today</span>
                   <span className="text-xs font-bold text-[var(--text-primary)]">Happy</span>
                 </div>
                 <div className="flex-1 bg-green-50/50 dark:bg-green-950/20 border border-green-100/50 dark:border-green-900/30 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                   <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 flex items-center justify-center mb-1">
                     <TrendingUp className="w-4 h-4" />
                   </div>
                   <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Stress</span>
                   <span className="text-xs font-bold text-green-700 dark:text-green-400">Low</span>
                 </div>
               </div>

               <div className="mb-4">
                 <div className="flex justify-between text-xs font-bold mb-2">
                   <span className="text-[var(--text-secondary)]">Meditation Streak</span>
                   <span className="text-purple-600">5 Days 🔥</span>
                 </div>
                 <div className="flex justify-between items-end h-12 gap-1.5 px-1">
                    {[30, 40, 20, 60, 50, 80, 70].map((h, i) => (
                      <div key={i} className="flex-1 bg-purple-100 dark:bg-purple-900/30 rounded-t-sm relative group cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors" style={{ height: `${h}%` }}>
                         {i === 6 && <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>}
                      </div>
                    ))}
                 </div>
                 <div className="flex justify-between text-[9px] font-extrabold text-[var(--text-secondary)] mt-1 px-1">
                   <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                 </div>
               </div>
            </div>

            {/* SECTION 6: Nutrition & Fitness Snapshot */}
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 flex flex-col">
              <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-5">
                  <Apple className="text-orange-500 w-5 h-5" /> Nutrition & Fitness
              </h3>

              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-[var(--text-primary)]">Diet Compliance</span>
                    <span className="text-orange-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-400 h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-[var(--text-primary)]">Water Goal</span>
                    <span className="text-blue-600">6/8 Glasses</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden flex gap-0.5">
                     {[1,2,3,4,5,6,7,8].map(i => (
                       <div key={i} className={`flex-1 h-full rounded-full ${i <= 6 ? 'bg-blue-400' : 'bg-transparent'}`}></div>
                     ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-[var(--text-primary)]">Nutrition Score</span>
                    <span className="text-emerald-600">82/100</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div className="bg-orange-50/50 dark:bg-orange-950/20 rounded-xl p-3 border border-orange-100/50 dark:border-orange-900/30 flex items-center justify-between mt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-orange-600">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Yoga Sessions</p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">4 This Week</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 4 cols */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          
          {/* SECTION 7: AI Risk Monitoring */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-5">
                <ShieldAlert className="text-indigo-500 w-5 h-5" /> Risk Monitoring
            </h3>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-700/50 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-xs font-bold text-[var(--text-primary)]">Iron Deficiency</span>
                </div>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full uppercase tracking-wider">Low</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-700/50 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-xs font-bold text-[var(--text-primary)]">Stress Risk</span>
                </div>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full uppercase tracking-wider">Low</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-700/50 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-xs font-bold text-[var(--text-primary)]">Cycle Irregularity</span>
                </div>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full uppercase tracking-wider">Low</span>
              </div>
            </div>
          </div>

          {/* SECTION 8: Upcoming Events */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-5">
                <Calendar className="text-blue-500 w-5 h-5" /> Upcoming Events
            </h3>
            
            <div className="relative border-l-2 border-gray-100 dark:border-zinc-700 ml-3 flex flex-col gap-6 pb-2">
              <div className="relative pl-5">
                <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-[7px] top-1 ring-4 ring-white dark:ring-zinc-900 shadow-sm"></div>
                <p className="text-xs font-bold text-[var(--text-primary)]">Period Expected In</p>
                <p className="text-[11px] font-semibold text-pink-600 mt-0.5">5 Days</p>
              </div>
              
              <div className="relative pl-5">
                <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[7px] top-1 ring-4 ring-white dark:ring-zinc-900 shadow-sm"></div>
                <p className="text-xs font-bold text-[var(--text-primary)]">Ovulation Peak</p>
                <p className="text-[11px] font-semibold text-purple-600 mt-0.5">Tomorrow</p>
              </div>

              <div className="relative pl-5">
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1 ring-4 ring-white dark:ring-zinc-900 shadow-sm"></div>
                <p className="text-xs font-bold text-[var(--text-primary)]">Next Doctor Consultation</p>
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] mt-0.5">12 June</p>
              </div>
            </div>
          </div>

          {/* SECTION 9: Community Activity */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 flex flex-col">
             <div className="flex justify-between items-center mb-4">
               <h3 className="font-display font-extrabold text-base flex items-center gap-2">
                  <Users className="text-teal-500 w-5 h-5" /> Community
               </h3>
               <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-pink-200 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[8px] font-bold">A</div>
                  <div className="w-6 h-6 rounded-full bg-purple-200 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[8px] font-bold">R</div>
                  <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[8px] font-bold">M</div>
               </div>
             </div>
             
             <div className="flex justify-between text-xs mb-2">
               <span className="font-bold text-[var(--text-secondary)]">Active Members Today:</span>
               <span className="font-extrabold text-teal-600">125</span>
             </div>
             <div className="flex justify-between text-xs mb-4">
               <span className="font-bold text-[var(--text-secondary)]">New Replies:</span>
               <span className="font-extrabold text-[var(--text-primary)]">18</span>
             </div>
             
             <div className="bg-teal-50/50 dark:bg-teal-950/20 rounded-xl p-3 mb-4">
               <p className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Trending Topic</p>
               <p className="text-xs font-bold text-[var(--text-primary)]">🔥 PCOS Diet & Nutrition Tips</p>
             </div>

             <button 
               onClick={() => setTab && setTab('community')}
               className="w-full py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-md shadow-gray-900/20 dark:shadow-white/10"
             >
               Visit Community
             </button>
          </div>

        </div>
      </div>

      {/* SECTION 10: Personalized AI Recommendation */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20 border border-pink-100 dark:border-pink-900/30 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/40 dark:from-zinc-900/40 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-md shadow-pink-500/20">
              <span className="text-lg">✨</span>
            </div>
            <h3 className="font-display font-extrabold text-lg text-[var(--text-primary)]">
              Sakhi AI Recommendation
            </h3>
          </div>
          
          <p className="text-sm font-semibold text-[var(--text-secondary)] mb-5 max-w-2xl">
            Based on your cycle phase, mood history, hydration level, and recent symptom logs, I recommend the following for today:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/50 dark:border-zinc-700/50 flex flex-col gap-2 hover:-translate-y-1 transition-transform">
              <span className="text-2xl mb-1">🥩</span>
              <span className="text-sm font-bold text-[var(--text-primary)] leading-tight">Increase protein intake today</span>
            </div>
            <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/50 dark:border-zinc-700/50 flex flex-col gap-2 hover:-translate-y-1 transition-transform">
              <span className="text-2xl mb-1">🏃‍♀️</span>
              <span className="text-sm font-bold text-[var(--text-primary)] leading-tight">Complete a 20-minute workout</span>
            </div>
            <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/50 dark:border-zinc-700/50 flex flex-col gap-2 hover:-translate-y-1 transition-transform">
              <span className="text-2xl mb-1">💧</span>
              <span className="text-sm font-bold text-[var(--text-primary)] leading-tight">Maintain hydration<br/><span className="text-xs text-[var(--text-secondary)]">(2 glasses left)</span></span>
            </div>
            <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/50 dark:border-zinc-700/50 flex flex-col gap-2 hover:-translate-y-1 transition-transform">
              <span className="text-2xl mb-1">🛌</span>
              <span className="text-sm font-bold text-[var(--text-primary)] leading-tight">Prioritize 7-8 hours of sleep</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
