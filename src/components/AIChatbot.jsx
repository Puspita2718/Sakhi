import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, Send, ShieldCheck, MessageSquare, Plus, Activity, Heart, TrendingUp, AlertTriangle, 
  Droplet, Brain, Clock, Mic, User, CheckCircle2, ChevronRight, Apple, HeartPulse
} from 'lucide-react';

export default function AIChatbot({ language, setTab }) {
  const [activeSessionId, setActiveSessionId] = useState('session-1');
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const symptomsList = ['Cramps', 'Fatigue', 'Headache', 'Bloating', 'Acne', 'Mood Swings', 'Anxiety', 'Back Pain', 'Nausea', 'Irregular Period'];

  const quickQuestions = [
    'Why is my period late?',
    'Why am I feeling tired?',
    'Is my blood color normal?',
    'How can I reduce cramps?',
    'What should I eat during my period?'
  ];

  const [chats, setChats] = useState([
    {
      id: 'session-1',
      title: 'Fatigue Analysis',
      messages: [
        {
          sender: 'ai',
          text: 'Hello! I am ArogyaNari, your AI Health Assistant. How are you feeling today?',
          timestamp: new Date(Date.now() - 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]
    },
    { id: 'session-2', title: 'Period Delay', messages: [] },
    { id: 'session-3', title: 'Diet Advice', messages: [] },
    { id: 'session-4', title: 'Mood Changes', messages: [] }
  ]);

  const [emergencyAlert, setEmergencyAlert] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats, isTyping]);

  const currentSession = chats.find(s => s.id === activeSessionId) || chats[0];

  const toggleSymptom = (sym) => {
    setSelectedSymptoms(prev => {
      const newSymptoms = prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym];
      // Auto-fill input
      if (newSymptoms.length > 0) {
        setInputVal(`I am experiencing: ${newSymptoms.join(', ')}`);
      } else {
        setInputVal('');
      }
      return newSymptoms;
    });
  };

  const handleSendPrompt = (prompt) => {
    setInputVal(prompt);
    setTimeout(() => {
      processMessage(prompt);
    }, 100);
  };

  const processMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = { 
      sender: 'user', 
      text: text, 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };

    setChats(prev => prev.map(s => {
      if (s.id === activeSessionId) return { ...s, messages: [...s.messages, userMsg] };
      return s;
    }));
    
    setInputVal('');
    setIsTyping(true);
    setEmergencyAlert(false);

    setTimeout(() => {
      const textQuery = text.toLowerCase();
      let aiResponse = {};

      if (textQuery.includes('fainting') || textQuery.includes('severe bleeding') || textQuery.includes('heavy bleeding')) {
        setEmergencyAlert(true);
        aiResponse = {
          sender: 'ai',
          text: 'I detected severe symptoms in your message. Please do not ignore this.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          analysis: {
            causes: ['High Risk Menstrual Complication', 'Potential Acute Pelvic Infection'],
            confidence: '95%',
            severity: 'High'
          },
          followUps: ['Should I consult a doctor immediately?', 'What are emergency symptoms?']
        };
      } else if (textQuery.includes('cramps') || textQuery.includes('tired') || textQuery.includes('fatigue')) {
        aiResponse = {
          sender: 'ai',
          text: 'It sounds like you are experiencing common physiological symptoms related to hormonal fluctuations. Rest is important right now.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          analysis: {
            causes: ['Hormonal fluctuations', 'Stress', 'Iron deficiency'],
            confidence: '85%',
            severity: 'Low'
          },
          followUps: ['What foods should I avoid?', 'How can I reduce cramps?']
        };
      } else {
        aiResponse = {
          sender: 'ai',
          text: 'Thank you for sharing. Based on your cycle data, this is relatively common for the Ovulation phase.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          analysis: {
            causes: ['Follicular Phase Transition', 'Hydration Levels'],
            confidence: '78%',
            severity: 'Low'
          },
          followUps: ['Is this symptom normal?', 'How can I improve my cycle health?']
        };
      }

      setChats(prev => prev.map(s => {
        if (s.id === activeSessionId) return { ...s, messages: [...s.messages, aiResponse] };
        return s;
      }));
      setIsTyping(false);
      setSelectedSymptoms([]); // clear symptoms after sending
    }, 2000);
  };

  const handleSendMessage = () => {
    processMessage(inputVal);
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in pb-12">
      
      {/* SECTION 1: Health Snapshot (Hero) */}
      <div className="glass-panel p-6 rounded-3xl border border-pink-100/50 dark:border-zinc-800 bg-gradient-to-r from-pink-50 to-white dark:from-zinc-900 dark:to-zinc-950 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="z-10 flex-1 w-full">
           <h1 className="font-display text-xl md:text-2xl font-extrabold text-[var(--text-primary)] mb-6 flex items-center gap-2">
             🌸 Today's Health Snapshot
           </h1>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Current Phase</span>
               <p className="text-sm font-black text-pink-600 dark:text-pink-400 mt-1">Ovulation</p>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Mood</span>
               <p className="text-sm font-black text-[var(--text-primary)] mt-1">Happy 😊</p>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Energy & Stress</span>
               <p className="text-sm font-black text-[var(--text-primary)] mt-1 text-emerald-600">8/10 • Low</p>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Hydration</span>
               <p className="text-sm font-black text-blue-500 mt-1">6/8 Glasses</p>
             </div>
           </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-xl shadow-pink-100/50 dark:shadow-none border border-pink-50 dark:border-zinc-800 z-10 w-full md:w-auto shrink-0">
          <p className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2 text-center">Health Score</p>
          <div className="relative w-24 h-24 flex items-center justify-center">
             <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0">
               <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-zinc-800" />
               <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 88) / 100} className="text-emerald-500 transition-all duration-1000 ease-out" />
             </svg>
             <div className="flex flex-col items-center z-10">
               <span className="font-display font-black text-xl text-[var(--text-primary)]">88<span className="text-xs text-[var(--text-secondary)]">/100</span></span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: History, Trends, Wellness Score */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* SECTION 8: Health History */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
              <Clock className="w-4 h-4 text-pink-500" /> Recent Conversations
            </h3>
            <div className="flex flex-col gap-2">
              {chats.map(session => (
                <button
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all cursor-pointer ${activeSessionId === session.id ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400' : 'border-transparent text-[var(--text-secondary)] hover:bg-gray-50 dark:hover:bg-zinc-800'}`}
                >
                  <MessageSquare size={14} className={activeSessionId === session.id ? 'text-pink-500' : 'text-gray-400'} />
                  <span className="text-xs font-bold overflow-hidden text-ellipsis whitespace-nowrap">{session.title}</span>
                </button>
              ))}
              <button 
                className="mt-2 text-xs font-bold text-pink-500 flex items-center justify-center gap-2 p-2 border border-dashed border-pink-200 dark:border-pink-900/50 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors"
                onClick={() => {
                  const newId = `session-${chats.length + 1}`;
                  setChats(prev => [...prev, { id: newId, title: 'New Consultation', messages: [] }]);
                  setActiveSessionId(newId);
                }}
              >
                <Plus size={14} /> New Chat
              </button>
            </div>
          </div>

          {/* SECTION 12: AI Wellness Score */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
              <Activity className="w-4 h-4 text-purple-500" /> Wellness Score
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Sleep', val: 80, color: 'bg-indigo-500' },
                { label: 'Nutrition', val: 85, color: 'bg-emerald-500' },
                { label: 'Hydration', val: 75, color: 'bg-blue-500' },
                { label: 'Mood', val: 90, color: 'bg-pink-500' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="flex justify-between text-[10px] font-extrabold uppercase mb-1">
                    <span className="text-[var(--text-secondary)]">{stat.label}</span>
                    <span className="text-[var(--text-primary)]">{stat.val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full ${stat.color} rounded-full`} style={{ width: `${stat.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 9: Health Trends */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-orange-500" /> This Month's Trends
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-semibold text-[var(--text-secondary)] leading-tight">Most Common Symptoms</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-xs font-bold text-[var(--text-primary)] flex-1">Fatigue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span className="text-xs font-bold text-[var(--text-primary)] flex-1">Mood Swings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                  <span className="text-xs font-bold text-[var(--text-primary)] flex-1">Headache</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CENTER COLUMN: Chat Interface, Quick Actions */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          
          {/* SECTION 2: Quick Symptom Selection */}
          <div className="glass-panel p-4 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider mb-2 block">Select Your Symptoms</span>
             <div className="flex flex-wrap gap-1.5">
               {symptomsList.map(sym => {
                 const active = selectedSymptoms.includes(sym);
                 return (
                   <button
                     key={sym}
                     onClick={() => toggleSymptom(sym)}
                     className={`px-3 py-1 rounded-full border text-[11px] font-bold cursor-pointer transition-all ${active ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400' : 'border-gray-200 dark:border-zinc-700 bg-transparent text-[var(--text-primary)] hover:border-pink-300'}`}
                   >
                     {sym}
                   </button>
                 );
               })}
             </div>
          </div>

          {/* SECTION 4: AI Health Assistant CHAT VIEWPORT */}
          <div className="glass-panel flex-1 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden flex flex-col h-[600px] shadow-sm">
            
            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
              
              {currentSession.messages.length === 0 && (
                <div className="flex flex-col gap-4 my-auto">
                   {/* SECTION 3: Quick Health Questions */}
                   <div className="text-center mb-2">
                     <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-2 opacity-50" />
                     <p className="text-sm font-bold text-[var(--text-secondary)]">Ask ArogyaNari anything about your health...</p>
                   </div>
                   <div className="flex flex-wrap justify-center gap-2 p-2">
                     {quickQuestions.map((q, idx) => (
                       <button
                         key={idx}
                         onClick={() => handleSendPrompt(q)}
                         className="px-4 py-2 rounded-2xl border border-gray-200 dark:border-zinc-700 text-xs font-bold text-[var(--text-primary)] hover:border-pink-300 hover:bg-pink-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-left shadow-sm"
                       >
                         💬 {q}
                       </button>
                     ))}
                   </div>
                </div>
              )}

              {currentSession.messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-fade-in`}>
                  <div className="flex items-end gap-2 max-w-[85%]">
                    {msg.sender === 'ai' && (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center shrink-0 shadow-sm mb-4">
                        <Sparkles size={12} className="text-white" />
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-1 w-full">
                      <div className={`p-3.5 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                        msg.sender === 'user' 
                          ? 'bg-pink-500 text-white rounded-br-sm' 
                          : 'bg-gray-50 dark:bg-zinc-800 text-[var(--text-primary)] rounded-bl-sm border border-gray-100 dark:border-zinc-700'
                      }`}>
                        {msg.text}
                      </div>
                      <span className={`text-[9px] font-bold text-[var(--text-secondary)] ${msg.sender === 'user' ? 'text-right pr-1' : 'pl-1'}`}>
                        {msg.timestamp}
                      </span>
                    </div>

                    {msg.sender === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center shrink-0 shadow-sm mb-4">
                        <User size={12} className="text-gray-500 dark:text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* SECTION 5: AI Health Analysis Inline */}
                  {msg.analysis && (
                    <div className="ml-8 mt-2 max-w-[85%] bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-4 w-full">
                      <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mb-2">
                        🤖 ArogyaNari Analysis
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-bold text-[var(--text-secondary)] block mb-1">Possible Causes:</span>
                          <ul className="text-xs font-semibold text-[var(--text-primary)] flex flex-col gap-1">
                            {msg.analysis.causes.map((c, i) => <li key={i} className="flex gap-1.5"><span className="text-indigo-400">•</span>{c}</li>)}
                          </ul>
                        </div>
                        <div>
                           <span className="text-[9px] font-bold text-[var(--text-secondary)] block mb-1">Confidence Level:</span>
                           <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{msg.analysis.confidence}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SECTION 14: Suggested Follow-Up Questions */}
                  {msg.followUps && (
                    <div className="ml-8 mt-3 flex flex-col gap-2 w-full max-w-[85%]">
                      <span className="text-[10px] font-bold text-[var(--text-secondary)]">You may also ask:</span>
                      <div className="flex flex-wrap gap-2">
                        {msg.followUps.map((q, i) => (
                          <button
                            key={i}
                            onClick={() => handleSendPrompt(q)}
                            className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-zinc-700 text-[10px] font-bold text-[var(--text-primary)] hover:border-pink-300 hover:bg-pink-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-left"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2 max-w-[85%] animate-fade-in">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center shrink-0 shadow-sm mb-4">
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 rounded-bl-sm border border-gray-100 dark:border-zinc-700 mb-4 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              
              <div ref={chatEndRef}></div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Ask ArogyaNari anything about your health..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="w-full pl-4 pr-10 py-3 rounded-2xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-950 text-sm font-medium text-[var(--text-primary)] outline-none focus:border-pink-300 transition-colors shadow-inner"
                />
                {/* SECTION 13: Voice Assistant */}
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors cursor-pointer">
                  <Mic size={18} />
                </button>
              </div>
              <button 
                className="bg-pink-500 hover:bg-pink-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                onClick={handleSendMessage}
                disabled={!inputVal.trim() || isTyping}
              >
                <Send size={18} className="ml-1" />
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Context, Risks, Recommendations */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* SECTION 11: Emergency Detection */}
          {emergencyAlert && (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-3xl p-5 flex flex-col gap-3 animate-fade-in shadow-sm">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="font-display font-extrabold text-sm uppercase tracking-wider">Important Health Alert</h3>
              </div>
              <p className="text-xs font-semibold text-red-800/80 dark:text-red-300/80">
                Please consult a healthcare professional immediately based on your symptoms.
              </p>
              <div className="flex flex-col gap-2 mt-1">
                <button className="bg-red-500 text-white py-2 rounded-xl text-[11px] font-bold hover:bg-red-600 transition-colors cursor-pointer">
                  Book Consultation
                </button>
                <button className="bg-transparent border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 py-2 rounded-xl text-[11px] font-bold hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors cursor-pointer">
                  Emergency SOS
                </button>
              </div>
            </div>
          )}

          {/* SECTION 7: Related Health Data */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
              <HeartPulse className="w-4 h-4 text-rose-500" /> Ecosystem Data
            </h3>
            <div className="flex flex-col gap-3">
               <div>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-0.5">Current Cycle Phase</span>
                 <p className="text-xs font-bold text-[var(--text-primary)]">Ovulation</p>
               </div>
               <div>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-0.5">Recent Mood</span>
                 <p className="text-xs font-bold text-[var(--text-primary)]">Happy 😊</p>
               </div>
               <div>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-0.5">Last Blood Analysis</span>
                 <p className="text-xs font-bold text-[var(--text-primary)]">Bright Red (Normal)</p>
               </div>
               <div>
                 <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-0.5">Recent Symptoms</span>
                 <p className="text-xs font-bold text-[var(--text-primary)]">Fatigue, Mild Cramps</p>
               </div>
            </div>
          </div>

          {/* SECTION 10: Risk Monitoring */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Health Monitoring
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                 <span className="text-xs font-bold text-[var(--text-primary)]">Iron Deficiency Risk</span>
                 <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 dark:bg-yellow-950/30 px-2 py-0.5 rounded-md flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Moderate
                 </span>
              </div>
              <div className="flex items-center justify-between">
                 <span className="text-xs font-bold text-[var(--text-primary)]">Stress Risk</span>
                 <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Low
                 </span>
              </div>
              <div className="flex items-center justify-between">
                 <span className="text-xs font-bold text-[var(--text-primary)]">Cycle Irregularity Risk</span>
                 <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Low
                 </span>
              </div>
            </div>
          </div>

          {/* SECTION 6: Personalized Recommendations */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex-1">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               <Brain className="w-4 h-4 text-purple-500" /> Recommendations
             </h3>
             <div className="flex flex-col gap-4">
               <div>
                 <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 block mb-1.5 flex items-center gap-1">🍎 Diet Suggestions</span>
                 <div className="flex flex-wrap gap-1.5">
                   <span className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2 py-1 rounded-md text-[var(--text-primary)]">✓ Spinach</span>
                   <span className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2 py-1 rounded-md text-[var(--text-primary)]">✓ Beetroot</span>
                   <span className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2 py-1 rounded-md text-[var(--text-primary)]">✓ Lentils</span>
                 </div>
               </div>
               <div>
                 <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 block mb-1.5 flex items-center gap-1">🧘 Wellness Suggestions</span>
                 <div className="flex flex-wrap gap-1.5">
                   <span className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2 py-1 rounded-md text-[var(--text-primary)]">✓ Child Pose</span>
                   <span className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2 py-1 rounded-md text-[var(--text-primary)]">✓ Deep Breathing</span>
                   <span className="text-[10px] font-bold bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 px-2 py-1 rounded-md text-[var(--text-primary)]">✓ Meditation</span>
                 </div>
               </div>
               <div>
                 <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 block mb-1.5 flex items-center gap-1">💧 Hydration Goal</span>
                 <span className="text-[11px] font-black text-[var(--text-primary)] block pl-1">2.5 Liters</span>
               </div>
             </div>
          </div>

        </div>

      </div>

    </div>
  );
}
