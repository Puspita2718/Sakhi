import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar as CalendarIcon, 
  Activity, 
  Smile, 
  Droplet, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Check,
  TrendingUp
} from 'lucide-react';

export default function Dashboard({ 
  language, 
  cycleLogs, 
  setCycleLogs, 
  setTab, 
  waterIntake, 
  setWaterIntake 
}) {
  const [selectedDate, setSelectedDate] = useState('2024-10-23');
  const [showLogModal, setShowLogModal] = useState(false);
  
  // Local Log State Form
  const [formIsPeriod, setFormIsPeriod] = useState(false);
  const [formFlow, setFormFlow] = useState('none');
  const [formSymptoms, setFormSymptoms] = useState([]);
  const [formMood, setFormMood] = useState('calm');

  // October 2024 calendar configuration to match Photo 2
  const calendarDays = [];
  const daysInOctober = 31;
  const startOffset = 1; // October 2024 starts on Tuesday (offset 1 day for Monday)

  // Empty cells for padding
  for (let i = 1; i <= startOffset; i++) {
    calendarDays.push({ day: null, dateStr: null, type: 'empty' });
  }

  // Days in October
  for (let d = 1; d <= daysInOctober; d++) {
    const dateStr = `2024-10-${d < 10 ? '0' + d : d}`;
    let type = 'normal';
    
    if (d >= 7 && d <= 11) {
      type = 'period'; // Days 7-11 shaded pink
    } else if (d === 23) {
      type = 'active'; // Current active day October 23
    }

    calendarDays.push({ day: d, dateStr, type });
  }

  const handleDayClick = (cell) => {
    if (!cell.day) return;
    setSelectedDate(cell.dateStr);
    
    const existingLog = cycleLogs[cell.dateStr] || {};
    setFormIsPeriod(existingLog.isPeriodDay || cell.type === 'period');
    setFormFlow(existingLog.flowIntensity || (cell.type === 'period' ? 'medium' : 'none'));
    setFormSymptoms(existingLog.symptoms || []);
    setFormMood(existingLog.mood || 'calm');
    
    setShowLogModal(true);
  };

  const toggleSymptom = (sym) => {
    setFormSymptoms(prev => 
      prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]
    );
  };

  const handleSaveLog = () => {
    setCycleLogs(prev => ({
      ...prev,
      [selectedDate]: {
        isPeriodDay: formIsPeriod,
        flowIntensity: formFlow,
        symptoms: formSymptoms,
        mood: formMood
      }
    }));
    setShowLogModal(false);
  };

  return (
    <div className="slide-in flex flex-col gap-8 text-left animate-fade-in">
      
      {/* 1. GREETING HEADER */}
      <div className="flex flex-col gap-1.5 pb-2">
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
          Good morning, Ananya
        </h1>
        <p className="text-xs text-[var(--text-secondary)] font-extrabold uppercase tracking-wider">
          Here's your health landscape for Wednesday, October 23.
        </p>
      </div>

      {/* 2. THREE METRICS CARDS ROW (Grid-3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Ovulation Window */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900 flex flex-col gap-4 relative">
          <span className="absolute top-4 right-4 bg-pink-50 dark:bg-pink-950/20 text-feminine-pink font-display text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Day 14
          </span>
          <div className="flex justify-between items-start">
            <div className="h-9 w-9 rounded-full bg-pink-100/60 dark:bg-pink-950/30 text-feminine-pink flex items-center justify-center">
              📅
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] leading-snug mb-1">
              Ovulation Window
            </h3>
            <p className="text-[11px] text-[var(--text-secondary)] leading-normal mb-3">
              High chance of conception. Flow predicted in 12 days.
            </p>
            {/* Pink Progress Bar */}
            <div className="w-full h-1.5 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-feminine-pink rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* Mild Fatigue */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900 flex flex-col gap-4 relative">
          <span className="absolute top-4 right-4 bg-pink-50 dark:bg-pink-950/20 text-feminine-pink font-display text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Updated 2h ago
          </span>
          <div className="flex justify-between items-start">
            <div className="h-9 w-9 rounded-full bg-pink-100/60 dark:bg-pink-950/30 text-feminine-pink flex items-center justify-center">
              🔴
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] leading-snug mb-1">
              Mild Fatigue
            </h3>
            <p className="text-[11px] text-[var(--text-secondary)] leading-normal mb-3">
              Logged today: Bloating, Breast tenderness. Trends stable.
            </p>
            {/* Three bars */}
            <div className="flex gap-1.5">
              <div className="h-1 flex-grow bg-feminine-pink rounded-full"></div>
              <div className="h-1 flex-grow bg-feminine-pink rounded-full"></div>
              <div className="h-1 flex-grow bg-pink-100 dark:bg-zinc-800 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Balanced Mood */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900 flex flex-col gap-4 relative">
          <span className="absolute top-4 right-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 font-display text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Calm
          </span>
          <div className="flex justify-between items-start">
            <div className="h-9 w-9 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 flex items-center justify-center">
              🟢
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] leading-snug mb-1">
              Balanced Mood
            </h3>
            <p className="text-[11px] text-[var(--text-secondary)] leading-normal mb-3">
              Your mood scores are 12% higher than last cycle's follicular phase.
            </p>
            {/* Log emotion link */}
            <button 
              onClick={() => handleDayClick({ day: 23, dateStr: '2024-10-23', type: 'active' })}
              className="text-[11px] font-bold text-feminine-pink hover:underline cursor-pointer flex items-center gap-1"
            >
              Log Emotion &gt;
            </button>
          </div>
        </div>

      </div>

      {/* 3. MAIN DASHBOARD CONTENT GRID (CALENDAR & AI INSIGHTS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (Wider, Calendar & Graphs) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
           {/* Calendar Widget */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-extrabold text-base text-[var(--text-primary)]">
                Cycle Calendar
              </h3>
              <div className="flex items-center gap-4 text-xs font-extrabold text-[var(--text-secondary)]">
                <button className="h-6 w-6 border border-gray-200 dark:border-zinc-800 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-900 cursor-pointer">
                  &lt;
                </button>
                <span>October 2024</span>
                <button className="h-6 w-6 border border-gray-200 dark:border-zinc-800 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-900 cursor-pointer">
                  &gt;
                </button>
              </div>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-2.5 text-center text-[10px] font-extrabold text-[var(--text-secondary)] tracking-wider mb-3">
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-2.5 justify-items-center">
              {calendarDays.map((cell, idx) => {
                if (cell.type === 'empty') {
                  return <div key={idx} className="w-9 h-9"></div>;
                }

                // Render day styling matching Photo 2
                let dayClass = "w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-display cursor-pointer transition-all duration-300 relative ";
                
                if (cell.type === 'period') {
                  // Period Flow days (7-11)
                  dayClass += "bg-pink-100/60 dark:bg-pink-950/20 text-feminine-pink border border-pink-200/50 dark:border-pink-950/30";
                } else if (cell.type === 'active') {
                  // Current active day (23)
                  dayClass += "bg-feminine-pink text-white shadow-lg shadow-pink-500/20 ring-4 ring-pink-100 dark:ring-pink-950/50 scale-105";
                } else {
                  // Normal day
                  dayClass += "hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-700 dark:text-zinc-250";
                }

                return (
                  <div 
                    key={idx} 
                    className={dayClass}
                    onClick={() => handleDayClick(cell)}
                  >
                    {cell.day}
                    {/* Flow dots for period days */}
                    {cell.type === 'period' && (
                      <span className="absolute bottom-1 h-1 w-1 bg-feminine-pink rounded-full"></span>
                    )}
                    {/* Active day dot at top right */}
                    {cell.type === 'active' && (
                      <span className="absolute top-0 right-0 h-1.5 w-1.5 bg-white border border-feminine-pink rounded-full"></span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Symptom Trends */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900">
            <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
              <div>
                <h3 className="font-display font-extrabold text-base text-[var(--text-primary)]">
                  Symptom Trends
                </h3>
                <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 font-bold">
                  Tracking intensity over the last 6 months
                </p>
              </div>
              <div className="flex gap-4 text-[10px] font-extrabold">
                <span className="flex items-center gap-1.5 text-feminine-pink">
                  <span className="h-2 w-2 rounded-full bg-feminine-pink"></span>
                  Cramps
                </span>
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--text-secondary)]"></span>
                  Energy
                </span>
              </div>
            </div>

            {/* Custom Line Chart */}
            <div className="w-full h-44 relative">
              <svg viewBox="0 0 500 150" width="100%" height="100%" style={{ overflow: 'visible' }}>
                {/* Horizontal Guide Lines */}
                <line x1="0" y1="25" x2="500" y2="25" stroke="rgba(220, 220, 220, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(220, 220, 220, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="125" x2="500" y2="125" stroke="rgba(220, 220, 220, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Cramps Curve (Pink) */}
                <path 
                  d="M 10 115 Q 100 130 190 90 T 370 120 T 490 85" 
                  fill="none" 
                  stroke="var(--color-feminine-pink)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
                
                {/* Energy Curve (Grey) */}
                <path 
                  d="M 10 70 Q 100 45 190 85 T 370 50 T 490 95" 
                  fill="none" 
                  stroke="var(--color-feminine-purple)" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  opacity="0.8"
                />

                {/* Interactive chart points */}
                <circle cx="190" cy="90" r="5" fill="var(--color-feminine-pink)" stroke="white" strokeWidth="1.5" />
                <circle cx="190" cy="85" r="5" fill="var(--color-feminine-purple)" stroke="white" strokeWidth="1.5" />
                
                <circle cx="430" cy="95" r="5" fill="var(--color-feminine-pink)" stroke="white" strokeWidth="1.5" />
                <circle cx="430" cy="65" r="5" fill="var(--color-feminine-purple)" stroke="white" strokeWidth="1.5" />
              </svg>
              
              {/* X Axis Labels */}
              <div className="flex justify-between mt-3 text-[9px] font-extrabold text-[var(--text-secondary)] px-1">
                <span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Narrower, AI & Meal Plans) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          {/* AI Insights (Glowing Solid Pink) */}
          <div className="bg-feminine-pink text-white rounded-2xl p-6 shadow-xl shadow-pink-500/20 flex flex-col gap-5 border border-pink-400/20">
            <div className="flex items-center gap-2">
              <span className="text-lg">✦</span>
              <h3 className="font-display font-extrabold text-base">
                AI Insights
              </h3>
            </div>
            
            <div className="flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1 border-b border-white/20 pb-3">
                <p className="text-[11px] font-semibold opacity-95 leading-normal">
                  "Your iron levels might be lower than usual this week based on your logged fatigue and cycle stage."
                </p>
                <span className="text-[9px] font-extrabold uppercase tracking-wide opacity-80 mt-1">
                  📍 Recommendation: Add spinach and lentils to dinner.
                </span>
              </div>

              <div className="flex flex-col gap-1 pb-1">
                <p className="text-[11px] font-semibold opacity-95 leading-normal">
                  "Sync your workout: Today is perfect for high-intensity training (HIIT) due to your peak estrogen levels."
                </p>
                <span className="text-[9px] font-extrabold uppercase tracking-wide opacity-80 mt-1">
                  🏃‍♀️ 45 min session suggested.
                </span>
              </div>

              <button 
                onClick={() => setTab('diet-fitness')}
                className="w-full rounded-full bg-white text-feminine-pink hover:bg-zinc-50 text-xs font-extrabold py-3 shadow-md active:scale-98 transition-all cursor-pointer text-center"
              >
                View Full Analysis
              </button>
            </div>
          </div>

          {/* Today's Meal Plan */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] flex items-center gap-1.5">
                🍽️ Today's Meal Plan
              </h3>
            </div>

            <div className="flex flex-col gap-4 text-left">
              {/* Meal Item 1 */}
              <div className="flex items-center justify-between border-b border-gray-50 dark:border-zinc-900 pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-50 dark:bg-green-950/20 flex items-center justify-center text-sm shrink-0">
                    🥗
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[var(--text-primary)]">Avocado & Egg Greens</h4>
                    <span className="text-[9px] text-[var(--text-secondary)] font-bold">Breakfast • 420 kcal</span>
                  </div>
                </div>
                <span className="h-5 w-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
              </div>

              {/* Meal Item 2 */}
              <div className="flex items-center justify-between border-b border-gray-50 dark:border-zinc-900 pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-amber-50 dark:bg-amber-950/20 flex items-center justify-center text-sm shrink-0">
                    🍲
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[var(--text-primary)]">Quinoa Power Bowl</h4>
                    <span className="text-[9px] text-[var(--text-secondary)] font-bold">Lunch • 580 kcal</span>
                  </div>
                </div>
                <button className="h-5 w-5 border border-gray-200 dark:border-zinc-800 hover:border-feminine-pink rounded-full flex items-center justify-center text-xs font-bold cursor-pointer text-[var(--text-secondary)] hover:text-feminine-pink">
                  +
                </button>
              </div>

              {/* Meal Item 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-pink-50 dark:bg-pink-950/20 flex items-center justify-center text-sm shrink-0">
                    🥣
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[var(--text-primary)]">Lentil & Spinach Dal</h4>
                    <span className="text-[9px] text-[var(--text-secondary)] font-bold">Dinner • 340 kcal</span>
                  </div>
                </div>
                <button className="h-5 w-5 border border-gray-200 dark:border-zinc-800 hover:border-feminine-pink rounded-full flex items-center justify-center text-xs font-bold cursor-pointer text-[var(--text-secondary)] hover:text-feminine-pink">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Friends Active Widget */}
          <div className="border border-dashed border-gray-250 dark:border-zinc-850 p-5 rounded-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Stacked avatars */}
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full bg-pink-100 border border-white flex items-center justify-center text-[10px] font-bold text-pink-700">R</div>
                <div className="h-7 w-7 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[10px] font-bold text-blue-700">P</div>
                <div className="h-7 w-7 rounded-full bg-purple-100 border border-white flex items-center justify-center text-[10px] font-bold text-purple-700">S</div>
              </div>
              <div className="text-left">
                <p className="text-[11px] font-extrabold text-[var(--text-primary)] leading-none mb-1">
                  12 friends are active now
                </p>
                <button 
                  onClick={() => setTab('community')}
                  className="text-[10px] font-extrabold uppercase text-feminine-pink hover:underline cursor-pointer"
                >
                  Join the Hub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. HEALTH DIARY LOG MODAL */}
      {showLogModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '999' }}>
          <div className="glass-panel slide-in" style={{ width: '450px', background: 'var(--bg-secondary)', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              📝 Health Log: {selectedDate}
            </h3>

            {/* Period Flow Switch */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '600' }}>Is Period Day?</span>
              <button 
                onClick={() => setFormIsPeriod(!formIsPeriod)}
                style={{
                  width: '50px',
                  height: '26px',
                  borderRadius: '13px',
                  background: formIsPeriod ? 'var(--primary)' : 'var(--border-color)',
                  border: 'none',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'white', position: 'absolute', top: '3px', left: formIsPeriod ? '27px' : '3px', transition: 'var(--transition)' }}></div>
              </button>
            </div>

            {/* Flow intensity select */}
            {formIsPeriod && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Flow Intensity</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {['spotting', 'light', 'medium', 'heavy'].map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setFormFlow(lvl)}
                      style={{
                        padding: '6px',
                        fontSize: '11px',
                        fontWeight: '700',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: formFlow === lvl ? 'var(--primary)' : 'var(--border-color)',
                        background: formFlow === lvl ? 'var(--primary-light)' : 'transparent',
                        color: formFlow === lvl ? 'var(--primary)' : 'var(--text-primary)',
                        cursor: 'pointer'
                      }}
                    >
                      {lvl.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Symptoms Logging */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Symptoms Experienced</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['cramps', 'fatigue', 'backache', 'bloating', 'headache'].map(sym => {
                  const active = formSymptoms.includes(sym);
                  return (
                    <button
                      key={sym}
                      onClick={() => toggleSymptom(sym)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: '1px solid',
                        borderColor: active ? 'var(--secondary)' : 'var(--border-color)',
                        background: active ? 'var(--secondary-light)' : 'transparent',
                        color: active ? 'var(--secondary)' : 'var(--text-primary)',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      {sym.toUpperCase()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mood selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Mood State</span>
              <select
                value={formMood}
                onChange={(e) => setFormMood(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontSize: '13px'
                }}
              >
                <option value="calm">Calm & Balanced</option>
                <option value="happy">Happy & Energetic</option>
                <option value="sad">Sad & Low</option>
                <option value="irritable">Irritable / PMS</option>
                <option value="anxious">Anxious / Stressed</option>
              </select>
            </div>

            {/* Save Buttons */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '10px' }}>
              <button className="btn btn-secondary" onClick={() => setShowLogModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSaveLog}>Save Logs</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
