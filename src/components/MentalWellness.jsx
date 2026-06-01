import React, { useState, useEffect } from 'react';
import { Smile, Sparkles, Compass, Heart, Plus, ChevronRight, HelpCircle } from 'lucide-react';

export default function MentalWellness({ language }) {
  // Breathing bubble states
  const [breatheState, setBreatheState] = useState('Inhale');
  const [breathCount, setBreathCount] = useState(4);
  const [breathingActive, setBreathingActive] = useState(false);

  // Mood Journal states
  const [journalInput, setJournalInput] = useState('');
  const [journals, setJournals] = useState([
    { date: '2026-10-22', text: 'Felt a bit bloated in the morning but meditation helped clear my head.' },
    { date: '2026-10-21', text: 'Tired after workout. Ensured I drank enough fluids and had general rest.' }
  ]);

  // Anxiety Quiz states
  const [quizAnswers, setQuizAnswers] = useState({ q1: 1, q2: 1, q3: 1 });
  const [quizScore, setQuizScore] = useState(null);

  // Affirmations list
  const affirmations = [
    "My body is beautiful, healthy, and completely resilient.",
    "I trust the natural wisdom and rhythm of my biological cycles.",
    "I deserve to dedicate restorative rest and care to my mind and body.",
    "Every cycle brings clean renewal, balance, and health."
  ];
  const [activeAffIndex, setActiveAffIndex] = useState(0);

  // Guided breathing loop
  useEffect(() => {
    let interval = null;
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathCount(prev => {
          if (prev <= 1) {
            // Swap state
            setBreatheState(curr => {
              if (curr === 'Inhale') {
                setBreathCount(4); // Hold for 4
                return 'Hold';
              } else if (curr === 'Hold') {
                setBreathCount(4); // Exhale for 4
                return 'Exhale';
              } else {
                setBreathCount(4); // Inhale for 4
                return 'Inhale';
              }
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setBreatheState('Ready');
      setBreathCount(4);
    }
    return () => clearInterval(interval);
  }, [breathingActive]);

  const handleAddJournal = () => {
    if (!journalInput.trim()) return;
    setJournals(prev => [
      { date: new Date().toISOString().split('T')[0], text: journalInput },
      ...prev
    ]);
    setJournalInput('');
  };

  const handleCalculateQuiz = () => {
    const total = Object.values(quizAnswers).reduce((a, b) => a + b, 0);
    let rating = 'Minimal Anxiety';
    let desc = 'Your scores reflect standard healthy wellness levels.';

    if (total >= 7) {
      rating = 'Moderate Stress / PMS Tension';
      desc = 'Consider introducing regular gentle breathing exercises, low-intensity walks, or consulting a wellness advisor.';
    } else if (total >= 4) {
      rating = 'Mild Anxious Tension';
      desc = 'Take regular short breaks throughout work, stay fully hydrated, and log mood variables daily.';
    }

    setQuizScore({ total, rating, desc });
  };

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* 1. HERO BREATHING & AFFIRMATION IN TWO COLUMNS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px' }} className="grid-2">
        
        {/* Breathing Guided Sphere */}
        <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
          <h3 style={{ fontSize: '18px', color: 'var(--primary)' }}>🧘‍♀️ Zen guided Breathing Sphere</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Synchronize your breathing with our expanding sphere to instantly calm neural pathways and reduce PMS tension.</p>

          <div 
            style={{ 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, var(--primary-light), var(--secondary-light))', 
              border: '2px solid var(--primary)', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              boxShadow: breathingActive ? '0 0 30px rgba(230, 50, 120, 0.4)' : '0 4px 10px rgba(0,0,0,0.05)',
              transform: breathingActive && breatheState === 'Inhale' ? 'scale(1.15)' : breathingActive && breatheState === 'Exhale' ? 'scale(0.95)' : 'scale(1)',
              transition: 'all 4s ease-in-out' // Smooth slow expansion
            }}
          >
            {breathingActive && (
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: '-10px', 
                  borderRadius: '50%', 
                  border: '1px dashed var(--primary)',
                  animation: 'pulse 2s infinite' 
                }}
              ></div>
            )}
            <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>{breatheState}</span>
            {breathingActive && <span style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>{breathCount}s</span>}
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => setBreathingActive(!breathingActive)}
          >
            {breathingActive ? 'Pause Sphere' : 'Start Zen Sphere'}
          </button>
        </div>

        {/* Positive Affirmations & Mood log */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Affirmation Card */}
          <div className="glass-panel" style={{ padding: '30px', background: 'linear-gradient(135deg, var(--secondary), var(--primary))', color: 'white', border: 'none', minHeight: '160px', display: 'flex', flexDirection: 'column', justifySelf: 'center', justifyContent: 'center', textAlign: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', opacity: '0.8' }}>✨ Daily Positive Affirmation</span>
            <p style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.4', fontStyle: 'italic' }}>
              "{affirmations[activeAffIndex]}"
            </p>
            <button 
              className="btn btn-secondary" 
              style={{ alignSelf: 'center', fontSize: '11px', padding: '4px 12px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white' }}
              onClick={() => setActiveAffIndex(prev => (prev + 1) % affirmations.length)}
            >
              Next Affirmation
            </button>
          </div>

          {/* Mood Journal Logger */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '17px', marginBottom: '12px' }}>📝 Intimate Mood Journal</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                placeholder="Log thoughts, feelings, or stress variables..."
                value={journalInput}
                onChange={(e) => setJournalInput(e.target.value)}
                style={{ flexGrow: '1', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none', fontSize: '13px' }}
              />
              <button className="btn btn-primary" onClick={handleAddJournal} style={{ padding: '10px 16px' }}>
                Log <Plus size={14} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px', maxHeight: '120px', overflowY: 'auto' }}>
              {journals.map((j, idx) => (
                <div key={idx} style={{ background: 'var(--bg-primary)', padding: '10px', borderRadius: '6px', fontSize: '12px', border: '1px solid var(--border-color)' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '10px', display: 'block', marginBottom: '2px' }}>{j.date}</span>
                  <p style={{ color: 'var(--text-primary)' }}>{j.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 2. ANXIETY SELF-ASSESSMENT SURVEY */}
      <div className="glass-panel" style={{ padding: '40px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '8px', textAlign: 'center' }}>🔬 GAD Intimate Anxiety Assessment</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '24px' }}>Provide answers based on your feelings during this cycle phase to receive generalized AI suggestions.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px' }} className="grid-2">
          
          {/* Survey inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[
              { id: 'q1', text: 'Feeling nervous, anxious, or on edge?' },
              { id: 'q2', text: 'Trouble relaxing or calming down musculature?' },
              { id: 'q3', text: 'Worrying too much about different matters?' }
            ].map(item => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600' }}>{item.text}</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {['Not at all', 'Several days', 'Over half days', 'Nearly daily'].map((lbl, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setQuizAnswers(prev => ({ ...prev, [item.id]: sIdx }))}
                      style={{
                        padding: '6px',
                        fontSize: '11px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: quizAnswers[item.id] === sIdx ? 'var(--primary)' : 'var(--border-color)',
                        background: quizAnswers[item.id] === sIdx ? 'var(--primary-light)' : 'var(--bg-secondary)',
                        color: quizAnswers[item.id] === sIdx ? 'var(--primary)' : 'var(--text-primary)',
                        cursor: pointerStyle
                      }}
                    >
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }} onClick={handleCalculateQuiz}>
              Compile Assessment Report
            </button>
          </div>

          {/* Survey output */}
          <div style={{ background: 'var(--bg-primary)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', minHeight: '200px' }}>
            {!quizScore ? (
              <div style={{ color: 'var(--text-secondary)' }}>
                <HelpCircle size={32} style={{ color: 'var(--secondary)', marginBottom: '8px', display: 'block', margin: '0 auto 8px auto' }} />
                <span>Complete all survey inputs and generate to view clinical suggestions.</span>
              </div>
            ) : (
              <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase' }}>Your Anxiety Rating</span>
                <h4 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--primary)' }}>{quizScore.rating}</h4>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '800', margin: '8px auto' }}>
                  {quizScore.total}/9
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4', padding: '0 20px' }}>
                  {quizScore.desc}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

const pointerStyle = 'pointer';
