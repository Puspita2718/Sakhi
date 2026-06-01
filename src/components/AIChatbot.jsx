import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  ShieldCheck, 
  MessageSquare, 
  Plus, 
  Activity, 
  Heart,
  TrendingUp,
  AlertTriangle,
  FolderHeart
} from 'lucide-react';

export default function AIChatbot({ language, setTab }) {
  const [activeChatTab, setActiveChatTab] = useState('chat'); // 'chat' or 'predictor'
  const [chats, setChats] = useState([
    {
      id: 'session-1',
      title: 'Migraine & Fatigue',
      messages: [
        {
          sender: 'user',
          text: 'I\'ve been feeling unusually tired for the past three days, and I\'m having mild cramps even though my period isn\'t due for another week. What could this be?'
        },
        {
          sender: 'ai',
          isClinicalOverview: true,
          possibleExplanations: [
            'Ovulation pain (Mittelschmerz)',
            'Hormonal fluctuations (Progesterone peak)',
            'Early signs of nutritional deficiency (Iron/B12)'
          ],
          severityLevel: 'Low',
          severityDesc: 'Symptoms appear physiological. Monitor for changes in intensity.',
          lifestyleSuggestions: [
            'Increase consumption of magnesium-rich foods.',
            'Ensure hydration stays above 2.5 Liters daily.',
            'Secure 7-8 hours of restorative, continuous sleep.'
          ],
          expertRecommendation: 'If fatigue persists for more than 7 days or cramps become sharp, we recommend a CBC and Thyroid panel.',
          ctaActions: [
            { action: 'book_test', label: 'Book a blood test' },
            { action: 'chat_doctor', label: 'Chat with Doctor' }
          ]
        }
      ]
    },
    { id: 'session-2', title: 'Regular Check-up Inquiry', messages: [] },
    { id: 'session-3', title: 'Cycle Irregularity', messages: [] }
  ]);

  const [activeSessionId, setActiveSessionId] = useState('session-1');
  const [inputVal, setInputVal] = useState('');
  const chatEndRef = useRef(null);

  // Predictor Form States
  const [formAge, setFormAge] = useState('25');
  const [formCycleDays, setFormCycleDays] = useState('28');
  const [formSymptomInput, setFormSymptomInput] = useState('cramps');
  const [formHistory, setFormHistory] = useState('none');
  const [predictionResult, setPredictionResult] = useState(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  const currentSession = chats.find(s => s.id === activeSessionId) || chats[0];

  const handleSendMessage = () => {
    if (!inputVal.trim()) return;

    const userMsg = { sender: 'user', text: inputVal };
    
    // Core AI processing simulation logic
    let aiResponse = {};
    const textQuery = inputVal.toLowerCase();

    // Check emergency red-flags first
    if (
      textQuery.includes('fainting') || 
      textQuery.includes('passed out') || 
      textQuery.includes('severe bleeding') || 
      textQuery.includes('heavy bleeding') ||
      textQuery.includes('severe pelvic pain') ||
      textQuery.includes('high fever')
    ) {
      aiResponse = {
        sender: 'ai',
        isClinicalOverview: true,
        possibleExplanations: [
          'High Risk Menstrual Complication',
          'Potential Acute Pelvic Infection or Hemorrhage'
        ],
        severityLevel: 'High',
        severityDesc: 'EMERGENCY RED-FLAG INDICATORS DETECTED. Immediate evaluation is highly critical.',
        lifestyleSuggestions: [
          'Lie down with your legs elevated.',
          'Avoid taking any heavy self-medicated pain relievers immediately.',
          'Secure an immediate escort to the nearest Emergency Clinic.'
        ],
        expertRecommendation: 'Proceed immediately to your nearest emergency hospital care or dial our local emergency hotlines immediately.',
        ctaActions: [
          { action: 'sos', label: 'Trigger SOS Alert' },
          { action: 'chat_doctor', label: 'Call Gynecologist Now' }
        ]
      };
    } else if (textQuery.includes('pcos') || textQuery.includes('ovary') || textQuery.includes('irregular')) {
      aiResponse = {
        sender: 'ai',
        isClinicalOverview: true,
        possibleExplanations: [
          'Polycystic Ovary Syndrome (PCOS)',
          'Anovulatory Cycles',
          'Luteal Phase Deficiency'
        ],
        severityLevel: 'Medium',
        severityDesc: 'Hormonal parameters warrant a diagnostic profile test.',
        lifestyleSuggestions: [
          'Adopt a low-glycemic, anti-inflammatory whole food diet.',
          'Introduce moderate aerobic activity (30m daily).',
          'Log your BBT (Basal Body Temperature) daily.'
        ],
        expertRecommendation: 'We highly recommend requesting a pelvic ultrasound scan and fasting insulin + LH/FSH blood work.',
        ctaActions: [
          { action: 'diet', label: 'Generate PCOS Diet' },
          { action: 'chat_doctor', label: 'Consult Specialist' }
        ]
      };
    } else {
      // Default standard response
      aiResponse = {
        sender: 'ai',
        isClinicalOverview: true,
        possibleExplanations: [
          'Hormonal Cycle Fluctuations',
          'General Dehydration or Fatigue',
          'Follicular Phase Transition'
        ],
        severityLevel: 'Low',
        severityDesc: 'Symptoms align with standard physiological phase transitions.',
        lifestyleSuggestions: [
          'Increase fluid intake above 2.5 Liters.',
          'Conduct 10-15 minutes of gentle yoga or stretches.',
          'Consume a well-balanced low-glycemic meal.'
        ],
        expertRecommendation: 'Log symptoms in your HerCare Tracker. If issues persist past 5 consecutive days, seek physician review.',
        ctaActions: [
          { action: 'track', label: 'Log in Tracker' }
        ]
      };
    }

    setChats(prev => prev.map(s => {
      if (s.id === activeSessionId) {
        return {
          ...s,
          messages: [...s.messages, userMsg, aiResponse]
        };
      }
      return s;
    }));
    setInputVal('');
  };

  const handlePredict = () => {
    // Generate Disease Prediction Report
    let conditions = [];
    let severity = 'Low';
    let recovery = [];
    const sym = formSymptomInput.toLowerCase();

    if (sym.includes('cramps') && sym.includes('pelvic')) {
      conditions = ['Endometriosis', 'Hormonal Imbalance'];
      severity = 'Medium';
      recovery = ['Warm compresses', 'Omega-3 fatty acids', 'Hormonal balancing therapy'];
    } else if (sym.includes('period') || sym.includes('weight') || sym.includes('hair')) {
      conditions = ['Polycystic Ovary Syndrome (PCOS)', 'Hormonal Imbalance'];
      severity = 'Medium';
      recovery = ['Spearmint tea', 'Strength training', 'Inositol supplementation'];
    } else if (sym.includes('burning') || sym.includes('urine') || sym.includes('pain')) {
      conditions = ['Urinary Tract Infection (UTI)', 'Vaginal Infection'];
      severity = 'High';
      recovery = ['Increased cranberry concentrates', 'Antibiotic consultation', 'Probiotics support'];
    } else {
      conditions = ['Anemia', 'General Micronutrient Deficiency'];
      severity = 'Low';
      recovery = ['Iron-rich leafy vegetables', 'Vitamin C absorption boosters'];
    }

    setPredictionResult({
      age: formAge,
      symptoms: formSymptomInput,
      conditions,
      severity,
      recovery,
      measures: ['Avoid artificial sweeteners', 'Log flow colors daily', 'Get 8h sleep']
    });
  };

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Tab select: Chat vs Predictor */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', gap: '20px' }}>
        <button 
          onClick={() => setActiveChatTab('chat')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeChatTab === 'chat' ? '3px solid var(--primary)' : 'none',
            padding: '10px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '700',
            color: activeChatTab === 'chat' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          💬 AI Health Assistant
        </button>
        <button 
          onClick={() => setActiveChatTab('predictor')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeChatTab === 'predictor' ? '3px solid var(--primary)' : 'none',
            padding: '10px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '700',
            color: activeChatTab === 'predictor' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          🔬 AI Disease Predictor
        </button>
      </div>

      {activeChatTab === 'chat' ? (
        /* =================== CHAT SYSTEM =================== */
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px' }} className="grid-2">
          
          {/* Left sessions column */}
          <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', height: '560px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Consultation Sessions
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', flexGrow: '1' }}>
              {chats.map(session => (
                <button
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '10px 12px',
                    border: 'none',
                    borderRadius: '8px',
                    background: activeSessionId === session.id ? 'var(--primary-light)' : 'transparent',
                    color: activeSessionId === session.id ? 'var(--primary)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: activeSessionId === session.id ? '600' : '500',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <MessageSquare size={14} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{session.title}</span>
                </button>
              ))}
            </div>

            <button 
              className="btn btn-secondary" 
              style={{ padding: '8px', width: '100%', justifyContent: 'center', fontSize: '12px' }}
              onClick={() => {
                const newId = `session-${chats.length + 1}`;
                setChats(prev => [...prev, { id: newId, title: `New Inquiry ${chats.length}`, messages: [] }]);
                setActiveSessionId(newId);
              }}
            >
              <Plus size={14} /> New Consult
            </button>
          </div>

          {/* Right chat screen */}
          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '560px' }}>
            
            {/* Disclaimer Banner */}
            <div style={{ background: 'var(--primary-light)', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--accent-pink)', marginBottom: '16px', fontSize: '11px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} />
              <span>AI provides educational guidance only and does not replace professional medical advice.</span>
            </div>

            {/* Message Viewport */}
            <div style={{ flexGrow: '1', overflowY: 'auto', paddingRight: '6px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {currentSession.messages.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
                  <Sparkles size={32} style={{ color: 'var(--primary)', marginBottom: '12px', animation: 'pulse 2s infinite' }} />
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Ask HerCare AI Assistant</h4>
                  <p style={{ fontSize: '13px' }}>Describe symptoms, upload reports, or ask cycle health questions.</p>
                </div>
              ) : (
                currentSession.messages.map((msg, idx) => {
                  if (msg.isClinicalOverview) {
                    // Render premium clinical overview box
                    return (
                      <div key={idx} className="glass-panel slide-in" style={{ padding: '24px', maxWidth: '85%', alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: `6px solid ${msg.severityLevel === 'High' ? 'var(--danger)' : msg.severityLevel === 'Medium' ? 'var(--warning)' : 'var(--success)'}` }}>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
                          <div>
                            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Possible Explanations</span>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '16px', fontSize: '13px', color: 'var(--text-primary)', marginTop: '4px' }}>
                              {msg.possibleExplanations.map((exp, eIdx) => <li key={eIdx}>{exp}</li>)}
                            </ul>
                          </div>

                          <div style={{ background: msg.severityLevel === 'High' ? 'var(--danger-light)' : msg.severityLevel === 'Medium' ? 'var(--warning-light)' : 'var(--success-light)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block' }}>Severity Level</span>
                            <span style={{ fontSize: '20px', fontWeight: '800', color: msg.severityLevel === 'High' ? 'var(--danger)' : msg.severityLevel === 'Medium' ? 'var(--warning)' : 'var(--success)', display: 'block', marginTop: '2px' }}>
                              {msg.severityLevel}
                            </span>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', display: 'block', lineHeight: '1.2', marginTop: '4px' }}>{msg.severityDesc}</span>
                          </div>
                        </div>

                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                          <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>🥗 Lifestyle Suggestions</span>
                          <ul style={{ listStyleType: 'decimal', paddingLeft: '16px', fontSize: '13px', color: 'var(--text-primary)' }}>
                            {msg.lifestyleSuggestions.map((sug, sIdx) => <li key={sIdx}>{sug}</li>)}
                          </ul>
                        </div>

                        <div style={{ background: 'var(--bg-primary)', padding: '12px', borderRadius: '8px', borderLeft: '4px solid var(--secondary)', fontSize: '12px' }}>
                          <span style={{ fontWeight: '700', color: 'var(--secondary)' }}>🩺 Expert Recommendation: </span>
                          {msg.expertRecommendation}
                        </div>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          {msg.ctaActions?.map((cta, cIdx) => (
                            <button
                              key={cIdx}
                              className="btn btn-secondary"
                              style={{ padding: '6px 12px', fontSize: '11px' }}
                              onClick={() => {
                                if (cta.action === 'sos') setTab('sos');
                                else if (cta.action === 'diet') setTab('diet-fitness');
                                else alert(`Simulating consultation call setup for: "${cta.label}"...`);
                              }}
                            >
                              {cta.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <div key={idx} className={`chat-bubble ${msg.sender}`}>
                      {msg.text}
                    </div>
                  );
                })
              )}
              <div ref={chatEndRef}></div>
            </div>

            {/* Input Bar */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <input
                type="text"
                placeholder={language === 'en' ? 'Describe symptoms in detail...' : 'अपने लक्षणों का विस्तार से वर्णन करें...'}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                style={{
                  flexGrow: '1',
                  padding: '12px 18px',
                  borderRadius: '30px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)'
                }}
              />
              <button className="btn btn-primary" style={{ padding: '12px', borderRadius: '50%' }} onClick={handleSendMessage}>
                <Send size={18} />
              </button>
            </div>

          </div>
        </div>
      ) : (
        /* =================== DISEASE PREDICTOR =================== */
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }} className="grid-2">
          
          {/* Prediction input form */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
              🔬 Symptom Profile Assessment
            </h3>

            <div className="grid-2">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Your Age</span>
                <input 
                  type="number" 
                  value={formAge} 
                  onChange={(e) => setFormAge(e.target.value)}
                  style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Average Cycle length (Days)</span>
                <input 
                  type="number" 
                  value={formCycleDays} 
                  onChange={(e) => setFormCycleDays(e.target.value)}
                  style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Enter Symptoms (comma separated)</span>
              <textarea
                placeholder="e.g. Irregular periods, sudden weight gain, facial hair, heavy fatigue..."
                value={formSymptomInput}
                onChange={(e) => setFormSymptomInput(e.target.value)}
                style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '80px', resize: 'none', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Existing Medical History</span>
              <select
                value={formHistory}
                onChange={(e) => setFormHistory(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
              >
                <option value="none">No major conditions</option>
                <option value="PCOS">Diagnosed PCOS</option>
                <option value="anemia">Anemia</option>
                <option value="thyroid">Thyroid Irregularity</option>
              </select>
            </div>

            <button className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={handlePredict}>
              Generate AI Risk Report <TrendingUp size={16} />
            </button>
          </div>

          {/* Prediction report results */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: predictionResult ? 'flex-start' : 'center', minHeight: '400px' }}>
            {!predictionResult ? (
              <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                <Activity size={40} style={{ color: 'var(--secondary)', marginBottom: '12px' }} />
                <h4>Prediction Report Pending</h4>
                <p style={{ fontSize: '12px', padding: '0 40px' }}>Complete the health profile assessment details and run analysis to compile your risk summary report.</p>
              </div>
            ) : (
              <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '18px' }}>🔍 AI Diagnostic Prediction</h4>
                  <span style={{ fontSize: '11px', background: 'var(--primary-light)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>Age {predictionResult.age}</span>
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase' }}>Identified Potential Conditions</span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                    {predictionResult.conditions.map((cond, cIdx) => (
                      <span key={cIdx} style={{ background: 'var(--secondary-light)', color: 'var(--secondary)', padding: '4px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: '600' }}>
                        🏥 {cond}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--bg-primary)', padding: '12px 16px', borderRadius: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700' }}>Aggregated Risk Level:</span>
                  <span style={{ fontSize: '16px', fontWeight: '800', color: predictionResult.severity === 'High' ? 'var(--danger)' : predictionResult.severity === 'Medium' ? 'var(--warning)' : 'var(--success)' }}>
                    {predictionResult.severity}
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>🛡️ Preventive Action Steps</span>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {predictionResult.measures.map((m, idx) => <li key={idx}>{m}</li>)}
                  </ul>
                </div>

                <div style={{ background: 'var(--success-light)', borderLeft: '4px solid var(--success)', padding: '12px', borderRadius: '6px', fontSize: '12px' }}>
                  <span style={{ fontWeight: '700', color: 'var(--success)' }}>🌱 Daily Recovery Recommendations: </span>
                  {predictionResult.recovery.join(', ')}
                </div>

                <button className="btn btn-secondary" style={{ justifyContent: 'center' }} onClick={() => alert('Compiling doctor-ready clinical PDF... Download ready.')}>
                  📥 Download Report Summary (PDF)
                </button>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
