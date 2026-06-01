import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ShieldCheck, Globe, Moon, Sun, ArrowRight } from 'lucide-react';

export default function FloatingChatbot({ language }) {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hi! I am SAKHI, your AI women\'s health companion. Describe your symptoms, ask cycle questions, or query health guides securely.'
    }
  ]);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setUnread(false);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      let aiMsg = {};
      const query = text.toLowerCase();

      if (
        query.includes('faint') || 
        query.includes('passed out') || 
        query.includes('severe bleeding') || 
        query.includes('heavy bleeding') ||
        query.includes('severe pelvic pain') ||
        query.includes('high fever')
      ) {
        aiMsg = {
          sender: 'ai',
          isClinical: true,
          possibleExplanations: ['High Risk Menstrual Complication', 'Potential Acute Pelvic Infection or Hemorrhage'],
          severityLevel: 'High',
          severityDesc: 'EMERGENCY RED-FLAG INDICATORS DETECTED.',
          lifestyleSuggestions: [
            'Lie down immediately with your legs elevated.',
            'Avoid taking self-medicated heavy pain relievers immediately.',
            'Secure an immediate escort to the nearest Emergency Clinic.'
          ],
          expertRecommendation: 'Proceed immediately to your nearest emergency hospital care or dial local emergency hotlines immediately.'
        };
      } else if (query.includes('pcos') || query.includes('ovary') || query.includes('irregular')) {
        aiMsg = {
          sender: 'ai',
          isClinical: true,
          possibleExplanations: ['Polycystic Ovary Syndrome (PCOS)', 'Anovulatory Cycles', 'Luteal Phase Deficiency'],
          severityLevel: 'Medium',
          severityDesc: 'Hormonal parameters warrant a diagnostic profile test.',
          lifestyleSuggestions: [
            'Adopt a low-glycemic, anti-inflammatory whole food diet.',
            'Introduce moderate aerobic activity (30m daily).',
            'Log your BBT (Basal Body Temperature) daily.'
          ],
          expertRecommendation: 'We highly recommend requesting a pelvic ultrasound scan and fasting insulin + LH/FSH blood work.'
        };
      } else if (query.includes('cramp') || query.includes('pain') || query.includes('backache')) {
        aiMsg = {
          sender: 'ai',
          text: 'Period cramps (dysmenorrhea) are caused by uterine contractions. To ease discomfort: try a hot water bag, drink warm chamomile/ginger tea, and perform gentle yoga stretches like Child\'s Pose. If pain is sharp and persistent, seek specialist care.'
        };
      } else if (query.includes('diet') || query.includes('food') || query.includes('eat')) {
        aiMsg = {
          sender: 'ai',
          text: 'A hormone-balancing diet focuses on anti-inflammatory and low-GI foods. Try loading up on leafy greens, lean proteins, berries, and healthy fats (walnuts, flax seeds). Limit processed sugar and highly processed snacks.'
        };
      } else if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
        aiMsg = {
          sender: 'ai',
          text: 'Hello! I am SAKHI, your AI intimate health companion. Describe your symptoms or ask health guidelines securely. How can I support you today?'
        };
      } else {
        aiMsg = {
          sender: 'ai',
          text: 'I have logged your symptom description to help track cycle trends. To ease general PMS fatigue, prioritize hydration (2.5L+), perform light stretching, and get 7-8 hours of continuous, restorative sleep.'
        };
      }

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1100);
  };

  const suggestionChips = [
    { label: 'PMS Cramp Relief', query: 'PMS Cramp Relief tips' },
    { label: 'PCOS Diet Guide', query: 'PCOS anti-inflammatory diet' },
    { label: 'Symptom Checklist', query: 'Irregular period symptoms list' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-55 flex flex-col items-end">
      
      {/* 1. COMPACT GLOBAL CHAT WINDOW */}
      {isOpen && (
        <div className="relative mb-4 w-[calc(100vw-2rem)] sm:w-96 h-[480px] bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-in transition-all duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-feminine-pink to-feminine-purple text-white px-5 py-4 flex justify-between items-center shadow-sm select-none">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Sparkles size={14} className="animate-pulse" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-extrabold text-sm tracking-tight leading-none">SAKHI AI Assistant</h4>
                <div className="flex items-center gap-1 mt-1 leading-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[9px] font-bold text-white/80 uppercase tracking-wider">Online & Secure</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer text-white"
            >
              <X size={14} />
            </button>
          </div>

          {/* Messages Viewport */}
          <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4 bg-[var(--bg-primary)]/20">
            
            {/* Security Notice */}
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/40 dark:border-emerald-800/30 rounded-xl p-3 text-[10px] text-emerald-600 dark:text-emerald-400 flex items-start gap-2 text-left">
              <ShieldCheck size={14} className="shrink-0 mt-0.5" />
              <span>HIPAA Compliant. AI provides educational guidance only and does not replace professional medical advice.</span>
            </div>

            {/* Render Message Thread */}
            {messages.map((msg, idx) => {
              if (msg.isClinical) {
                return (
                  <div 
                    key={idx} 
                    className="glass-panel p-4 rounded-xl max-w-[90%] align-self-start text-left flex flex-col gap-3 border-l-4"
                    style={{ 
                      borderColor: msg.severityLevel === 'High' ? 'var(--danger)' : msg.severityLevel === 'Medium' ? 'var(--warning)' : 'var(--success)',
                      alignSelf: 'flex-start'
                    }}
                  >
                    <div>
                      <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-wider block">Possible Causes</span>
                      <ul className="list-disc pl-4 text-[11px] text-[var(--text-primary)] mt-1 font-semibold flex flex-col gap-0.5">
                        {msg.possibleExplanations.map((exp, eIdx) => <li key={eIdx}>{exp}</li>)}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-2 text-[10px]">
                      <span className="font-bold">Risk Assessment:</span>
                      <span 
                        className="font-extrabold"
                        style={{ color: msg.severityLevel === 'High' ? 'var(--danger)' : msg.severityLevel === 'Medium' ? 'var(--warning)' : 'var(--success)' }}
                      >
                        {msg.severityLevel} Level
                      </span>
                    </div>

                    <div className="border-t border-[var(--border-color)] pt-2.5">
                      <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-wider block">🥗 Support Actions</span>
                      <ul className="list-decimal pl-4 text-[10px] text-[var(--text-primary)] mt-1 font-semibold flex flex-col gap-0.5">
                        {msg.lifestyleSuggestions.map((sug, sIdx) => <li key={sIdx}>{sug}</li>)}
                      </ul>
                    </div>

                    <div className="bg-[var(--bg-secondary)] border-l-2 border-feminine-purple p-2.5 rounded text-[10px] leading-relaxed text-[var(--text-secondary)] font-semibold">
                      <span className="font-extrabold text-feminine-pink block">Clinical Suggestion:</span>
                      {msg.expertRecommendation}
                    </div>
                  </div>
                );
              }

              const isUser = msg.sender === 'user';
              return (
                <div 
                  key={idx}
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs text-left leading-relaxed font-semibold transition-all shadow-2xs ${
                    isUser 
                      ? 'bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white rounded-br-none self-end' 
                      : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-bl-none self-start'
                  }`}
                >
                  {msg.text}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-2xl rounded-bl-none px-4 py-3 self-start shadow-2xs flex items-center gap-1 w-16">
                <span className="h-1.5 w-1.5 rounded-full bg-feminine-pink animate-bounce delay-100"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-feminine-pink animate-bounce delay-200"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-feminine-pink animate-bounce delay-300"></span>
              </div>
            )}
            
            <div ref={chatEndRef}></div>
          </div>

          {/* Quick chips selector at bottom */}
          {messages.length === 1 && !isTyping && (
            <div className="px-4 py-2 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip.query)}
                  className="bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[10px] font-extrabold text-[var(--text-secondary)] hover:text-feminine-pink rounded-full px-3 py-1.5 transition-all duration-200 shrink-0 cursor-pointer shadow-2xs"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          {/* Message Input Box */}
          <div className="p-3 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] flex gap-2 items-center">
            <input 
              type="text"
              placeholder="Describe symptoms or ask questions..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-grow px-4 py-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs text-[var(--text-primary)] outline-none focus:border-feminine-pink transition-colors font-semibold"
            />
            <button 
              onClick={() => handleSendMessage()}
              className="h-8.5 w-8.5 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer shrink-0"
            >
              <Send size={14} />
            </button>
          </div>

        </div>
      )}

      {/* 2. DYNAMIC FLOATING TOGGLE BUBBLE */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-14 w-14 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white shadow-xl hover:shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
        title="Chat with SAKHI"
      >
        {isOpen ? (
          <X size={24} className="animate-fade-in" />
        ) : (
          <MessageSquare size={24} className="animate-fade-in group-hover:rotate-6 duration-200" />
        )}

        {/* Pulse unread dot */}
        {unread && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 text-[8px] font-bold text-white items-center justify-center">1</span>
          </span>
        )}
      </button>

    </div>
  );
}
