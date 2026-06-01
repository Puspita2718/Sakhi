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
  const [selectedDate, setSelectedDate] = useState('2026-10-23');
  const [showLogModal, setShowLogModal] = useState(false);
  
  // Local Log State Form
  const [formIsPeriod, setFormIsPeriod] = useState(false);
  const [formFlow, setFormFlow] = useState('none');
  const [formSymptoms, setFormSymptoms] = useState([]);
  const [formMood, setFormMood] = useState('calm');

  const t = {
    en: {
      greet: 'Good morning, Ananya',
      sub: 'Here\'s your health landscape for Wednesday, October 23.',
      ovulation: 'Ovulation Window',
      ovulationDesc: 'High chance of conception. Flow predicted in 12 days.',
      fatigue: 'Mild Fatigue',
      fatigueDesc: 'Logged today: Bloating, mild cramps. Fitness suggestion: Stretch.',
      mood: 'Balanced Mood',
      moodDesc: 'Your mood scores are 12% higher than last cycle\'s follicular phase.',
      calendarTitle: 'Cycle Calendar',
      aiInsights: 'AI Insights',
      mealTitle: 'Today\'s Meal Plan',
      trendsTitle: 'Symptom Trends',
      crampsLabel: 'Cramps Intensity',
      energyLabel: 'Energy Levels',
      logBtn: 'Log Daily Health Metrics'
    },
    hi: {
      greet: 'शुभ प्रभात, अनन्या',
      sub: 'बुधवार, 23 अक्टूबर के लिए आपका स्वास्थ्य परिदृश्य यहां है।',
      ovulation: 'अंडोत्सर्ग विंडो',
      ovulationDesc: 'गर्भधारण की उच्च संभावना। 12 दिनों में मासिक धर्म की भविष्यवाणी।',
      fatigue: 'हल्की थकान',
      fatigueDesc: 'आज लॉग किया गया: सूजन, हल्की ऐंठन। फिटनेस सुझाव: स्ट्रेच।',
      mood: 'संतुलित मूड',
      moodDesc: ' follicular चरण की तुलना में आपके मूड स्कोर 12% अधिक हैं।',
      calendarTitle: 'मासिक चक्र कैलेंडर',
      aiInsights: 'एआई अंतर्दृष्टि',
      mealTitle: 'आज का आहार योजना',
      trendsTitle: 'लक्षण प्रवृत्तियां',
      crampsLabel: 'ऐंठन की तीव्रता',
      energyLabel: 'ऊर्जा स्तर',
      logBtn: 'दैनिक स्वास्थ्य लॉग दर्ज करें'
    }
  };

  const currentLang = t[language] || t['en'];

  // Handle calendar cells logic
  // Period dates: Oct 7-11
  // Ovulation date: Oct 23
  // Fertile window: Oct 18-24
  const calendarDays = [];
  const daysInOctober = 31;
  const startOffset = 3; // October 2026 starts on Thursday (offset 3 days for Mon-Wed empty cells)

  for (let i = 1; i <= startOffset; i++) {
    calendarDays.push({ day: null, dateStr: null, type: 'empty' });
  }

  for (let d = 1; d <= daysInOctober; d++) {
    const dateStr = `2026-10-${d < 10 ? '0' + d : d}`;
    let type = 'normal';
    
    // Hardcoded initial design matching the screenshots
    if (d >= 7 && d <= 11) {
      type = 'period';
    } else if (d === 23) {
      type = 'ovulation';
    } else if (d >= 18 && d <= 24) {
      type = 'fertile';
    }

    // Check if custom user logs exist for this date
    const customLog = cycleLogs[dateStr];
    if (customLog) {
      if (customLog.isPeriodDay) type = 'period';
      else if (customLog.flowIntensity !== 'none') type = 'period';
    }

    calendarDays.push({ day: d, dateStr, type, logged: !!customLog });
  }

  const handleDayClick = (dayObj) => {
    if (!dayObj.day) return;
    setSelectedDate(dayObj.dateStr);
    
    // Pre-populate modal form
    const existingLog = cycleLogs[dayObj.dateStr] || {};
    setFormIsPeriod(existingLog.isPeriodDay || dayObj.type === 'period');
    setFormFlow(existingLog.flowIntensity || (dayObj.type === 'period' ? 'medium' : 'none'));
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
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* 1. GREETING HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', background: 'linear-gradient(135deg, var(--text-primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {currentLang.greet}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{currentLang.sub}</p>
        </div>
        <button className="btn btn-primary" onClick={() => handleDayClick({ day: 23, dateStr: '2026-10-23', type: 'ovulation' })}>
          <Plus size={16} /> {currentLang.logBtn}
        </button>
      </div>

      {/* 2. THREE METRICS CARDS ROW */}
      <div className="grid-3">
        {/* Ovulation card */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', color: 'var(--secondary)' }}>
              {currentLang.ovulation}
            </span>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CalendarIcon size={16} />
            </div>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--secondary)' }}>Day 16</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            {currentLang.ovulationDesc}
          </p>
          <div style={{ width: '100%', height: '4px', background: 'var(--border-color)', borderRadius: '2px', marginTop: '6px' }}>
            <div style={{ width: '65%', height: '100%', background: 'var(--secondary)', borderRadius: '2px' }}></div>
          </div>
        </div>

        {/* Fatigue card */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', color: 'var(--primary)' }}>
              {currentLang.fatigue}
            </span>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={16} />
            </div>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>Mild Status</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            {currentLang.fatigueDesc}
          </p>
          <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
            <span style={{ background: 'var(--accent-pink)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '600' }}>Cramps: Mild</span>
            <span style={{ background: 'var(--accent-lavender)', color: 'var(--secondary)', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '600' }}>Energy: 70%</span>
          </div>
        </div>

        {/* Mood card */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', color: 'var(--success)' }}>
              {currentLang.mood}
            </span>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--success-light)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smile size={16} />
            </div>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--success)' }}>Calm & Balanced</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            {currentLang.moodDesc}
          </p>
          <div style={{ width: '100%', height: '4px', background: 'var(--border-color)', borderRadius: '2px', marginTop: '6px' }}>
            <div style={{ width: '85%', height: '100%', background: 'var(--success)', borderRadius: '2px' }}></div>
          </div>
        </div>
      </div>

      {/* 3. MAIN DASHBOARD CONTENT GRID (CALENDAR & AI INSIGHTS) */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', flexWrap: 'wrap' }} className="grid-2">
        
        {/* Left Side: Calendar Log & Graphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Calendar Widget */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px' }}>{currentLang.calendarTitle}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button className="btn-icon"><ChevronLeft size={16} /></button>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600' }}>October 2026</span>
                <button className="btn-icon"><ChevronRight size={16} /></button>
              </div>
            </div>

            {/* Weekday labels */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', marginBottom: '10px', fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)' }}>
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>

            {/* Days grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', justifyItems: 'center' }}>
              {calendarDays.map((cell, idx) => {
                if (cell.type === 'empty') return <div key={idx} style={{ width: '42px', height: '42px' }}></div>;
                return (
                  <div 
                    key={idx} 
                    className={`day-dot ${cell.type} ${cell.logged ? 'logged' : ''}`}
                    onClick={() => handleDayClick(cell)}
                    title={cell.dateStr}
                    style={{
                      border: selectedDate === cell.dateStr ? '2px solid var(--text-primary)' : ''
                    }}
                  >
                    {cell.day}
                  </div>
                );
              })}
            </div>

            {/* Calendar Legend */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px', fontSize: '12px', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)' }}></span> Period Flow
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--secondary)' }}></span> Ovulation Day
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-pink)', border: '1px dashed var(--primary)' }}></span> Fertile Window
              </span>
            </div>
          </div>

          {/* Symptom Trends Graph */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{currentLang.trendsTitle}</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Intensity patterns over the last 6 months</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: '600' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></span> {currentLang.crampsLabel}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--secondary)', fontWeight: '600' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--secondary)' }}></span> {currentLang.energyLabel}
                </span>
              </div>
            </div>

            {/* Custom SVG line chart plotting trends */}
            <div style={{ width: '100%', height: '200px', position: 'relative' }}>
              <svg viewBox="0 0 500 180" width="100%" height="100%" style={{ overflow: 'visible' }}>
                {/* Grid Lines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="0" y1="80" x2="500" y2="80" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="0" y1="130" x2="500" y2="130" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="4 4" />
                
                {/* Cramps line (Pink) */}
                <path 
                  d="M 10 130 Q 100 60 200 110 T 350 40 T 490 140" 
                  fill="none" 
                  stroke="var(--primary)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
                {/* Energy line (Lavender) */}
                <path 
                  d="M 10 60 Q 100 130 200 50 T 350 120 T 490 30" 
                  fill="none" 
                  stroke="var(--secondary)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />

                {/* Hotspot Dots */}
                <circle cx="200" cy="110" r="6" fill="var(--primary)" stroke="white" strokeWidth="2" cursor="pointer" title="Cramps: Mod" />
                <circle cx="200" cy="50" r="6" fill="var(--secondary)" stroke="white" strokeWidth="2" cursor="pointer" title="Energy: High" />
                <circle cx="350" cy="40" r="6" fill="var(--primary)" stroke="white" strokeWidth="2" />
                <circle cx="350" cy="120" r="6" fill="var(--secondary)" stroke="white" strokeWidth="2" />
              </svg>
              
              {/* X-Axis labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                <span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: AI Insights & Meal Plans */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* AI Insights Card */}
          <div className="glass-panel" style={{ padding: '30px', background: 'linear-gradient(135deg, hsl(330, 70%, 48%), hsl(265, 60%, 55%))', color: 'white', border: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Sparkles size={20} />
              <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{currentLang.aiInsights}</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '4px' }}>🩸 Nutritional Alert</span>
                <p style={{ fontSize: '12px', opacity: '0.9', lineHeight: '1.4' }}>
                  Your logged fatigue matches the start of your luteal cycle phase. Increase spinach, lentils, or iron supplements to counter lower iron capacity.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '4px' }}>🏃‍♀️ Workout Recommendation</span>
                <p style={{ fontSize: '12px', opacity: '0.9', lineHeight: '1.4' }}>
                  Today is perfect for low-impact yoga or walking rather than high-intensity cardiovascular training due to mild muscle soreness.
                </p>
              </div>

              <button className="btn btn-secondary" style={{ width: '100%', color: 'var(--primary)', fontWeight: '700', justifyContent: 'center' }} onClick={() => setTab('diet-fitness')}>
                Open Zen Yoga Poses
              </button>
            </div>
          </div>

          {/* Today's Meal Plan Card */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>{currentLang.mealTitle}</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { meal: 'Avocado & Egg Greens', type: 'Breakfast', cal: '320 kcal', checked: true },
                { meal: 'Quinoa Power Bowl', type: 'Lunch', cal: '480 kcal', checked: false },
                { meal: 'Lentil & Spinach Dal', type: 'Dinner', cal: '380 kcal', checked: false }
              ].map((m, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div 
                      style={{ 
                        width: '20px', 
                        height: '20px', 
                        borderRadius: '50%', 
                        border: '2px solid var(--border-color)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        background: m.checked ? 'var(--success)' : 'transparent',
                        borderColor: m.checked ? 'var(--success)' : 'var(--border-color)',
                        cursor: 'pointer'
                      }}
                    >
                      {m.checked && <Check size={12} style={{ color: 'white' }} />}
                    </div>
                    <div>
                      <span style={{ fontSize: '13px', fontWeight: '600', display: 'block', color: 'var(--text-primary)' }}>{m.meal}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{m.type}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '600' }}>{m.cal}</span>
                </div>
              ))}
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
