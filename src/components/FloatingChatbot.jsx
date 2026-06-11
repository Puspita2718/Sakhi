import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ShieldCheck, Globe, Moon, Sun, ArrowRight } from 'lucide-react';

export default function FloatingChatbot({ language }) {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const strings = {
    title: { en: 'ArogyaNari AI Assistant', hi: 'सखी एआई सहायक', bn: 'সাখী এআই সহকারী', ta: 'சகி ஏஐ உதவியாளர்', te: 'సఖి ఏఐ అసిస్టెంట్', mr: 'सखी एआय सहाय्यक' },
    online: { en: 'Online & Secure', hi: 'ऑनलाइन और सुरक्षित', bn: 'অনলাইন এবং নিরাপদ', ta: 'ஆன்லைன் மற்றும் பாதுகாப்பானது', te: 'ఆన్‌లైన్ మరియు సురక్షితం', mr: 'ऑनलाइन आणि सुरक्षित' },
    hipaa: { en: 'HIPAA Compliant. AI provides educational guidance only and does not replace professional medical advice.', hi: 'HIPAA अनुपालन। एआई केवल शैक्षिक मार्गदर्शन प्रदान करता है और पेशेवर चिकित्सा सलाह को प्रतिस्थापित नहीं करता है।', bn: 'HIPAA অনুগত। এআই শুধুমাত্র শিক্ষাগত নির্দেশিকা প্রদান করে এবং পেশাদার চিকিৎসা পরামর্শ প্রতিস্থাপন করে না।', ta: 'HIPAA இணக்கமானது. ஏஐ கல்வி வழிகாட்டுதலை மட்டுமே வழங்குகிறது மற்றும் தொழில்முறை மருத்துவ ஆலோசனையை மாற்றாது.', te: 'HIPAA కంప్లైంట్. ఏఐ విద్యా మార్గదర్శకత్వాన్ని మాత్రమే అందిస్తుంది మరియు వృత్తిపరమైన వైద్య సలహాను భర్తీ చేయదు.', mr: 'HIPAA सुसंगत. एआय केवळ शैक्षणिक मार्गदर्शन देते आणि व्यावसायिक वैद्यकीय सल्ल्याची जागा घेत नाही.' },
    placeholder: { en: 'Describe symptoms or ask questions...', hi: 'लक्षणों का वर्णन करें या प्रश्न पूछें...', bn: 'লক্ষণ বর্ণনা করুন বা প্রশ্ন জিজ্ঞাসা করুন...', ta: 'அறிகுறிகளை விவரிக்கவும் அல்லது கேள்விகளைக் கேட்கவும்...', te: 'లక్షణాలను వివరించండి లేదా ప్రశ్నలు అడగండి...', mr: 'लक्षणांचे वर्णन करा किंवा प्रश्न विचारा...' },
    possibleCauses: { en: 'Possible Causes', hi: 'संभावित कारण', bn: 'সম্ভাব্য কারণ', ta: 'சாத்தியமான காரணங்கள்', te: 'సాధ్యమైన కారణాలు', mr: 'संभाव्य कारणे' },
    riskAssess: { en: 'Risk Assessment:', hi: 'जोखिम मूल्यांकन:', bn: 'ঝুঁকি মূল্যায়ন:', ta: 'ஆபத்து மதிப்பீடு:', te: 'ప్రమాద అంచనా:', mr: 'जोखीम मूल्यांकन:' },
    level: { en: ' Level', hi: ' स्तर', bn: ' স্তর', ta: ' நிலை', te: ' స్థాయి', mr: ' पातळी' },
    actions: { en: '🥗 Support Actions', hi: '🥗 समर्थन कार्रवाई', bn: '🥗 সাপোর্ট অ্যাকশন', ta: '🥗 ஆதரவு நடவடிக்கைகள்', te: '🥗 మద్దతు చర్యలు', mr: '🥗 समर्थन कृती' },
    clinicalSug: { en: 'Clinical Suggestion:', hi: 'नैदानिक सुझाव:', bn: 'ক্লিনিকাল পরামর্শ:', ta: 'மருத்துவ பரிந்துரை:', te: 'క్లినికల్ సూచన:', mr: 'क्लिनिकल सूचना:' },
    chips: [
      { label: { en: 'PMS Cramp Relief', hi: 'पीएमएस ऐंठन राहत', bn: 'পিএমএস ক্র্যাম্প উপশম', ta: 'பிஎம்எஸ் தசைப்பிடிப்பு நிவாரணம்', te: 'పిఎంఎస్ క్రాంప్ రిలీఫ్', mr: 'पीएमएस क्रॅम्प रिलीफ' }, query: 'PMS Cramp Relief tips' },
      { label: { en: 'PCOS Diet Guide', hi: 'पीसीओएस आहार गाइड', bn: 'পিসিওএস ডায়েট গাইড', ta: 'பிசிஓஎஸ் டயட் கையேடு', te: 'పిసిఓఎస్ డైట్ గైడ్', mr: 'पीसीओएस आहार मार्गदर्शक' }, query: 'PCOS anti-inflammatory diet' },
      { label: { en: 'Symptom Checklist', hi: 'लक्षण चेकलिस्ट', bn: 'লক্ষণ চেকলিস্ট', ta: 'அறிகுறி சரிபார்ப்பு பட்டியல்', te: 'సింప్టమ్ చెక్‌లిస్ట్', mr: 'लक्षण चेकलिस्ट' } }
    ]
  };

  const initialMsg = {
    en: "Hi! I am ArogyaNari, your AI women's health companion. Describe your symptoms, ask cycle questions, or query health guides securely.",
    hi: "नमस्ते! मैं सखी हूं, आपकी एआई महिला स्वास्थ्य साथी। अपने लक्षणों का वर्णन करें, चक्र के प्रश्न पूछें, या सुरक्षित रूप से स्वास्थ्य गाइड क्वेरी करें।",
    bn: "হাই! আমি সাখী, আপনার এআই মহিলাদের স্বাস্থ্য সঙ্গী। আপনার লক্ষণ বর্ণনা করুন, চক্রের প্রশ্ন জিজ্ঞাসা করুন বা নিরাপদে স্বাস্থ্য গাইড জিজ্ঞাসা করুন।",
    ta: "வணக்கம்! நான் சகி, உங்கள் ஏஐ பெண்கள் ஆரோக்கிய தோழி. உங்கள் அறிகுறிகளை விவரிக்கவும், சுழற்சி கேள்விகளைக் கேட்கவும் அல்லது சுகாதார வழிகாட்டிகளை பாதுகாப்பாக வினவவும்.",
    te: "నమస్తే! నేను సఖి, మీ ఏఐ మహిళా ఆరోగ్య సహచరురాలు. మీ లక్షణాలను వివరించండి, చక్రం ప్రశ్నలు అడగండి లేదా ఆరోగ్య మార్గదర్శకాలను సురక్షితంగా ప్రశ్నించండి.",
    mr: "नमस्कार! मी सखी, तुमची एआय महिला आरोग्य साथीदार आहे. तुमची लक्षणे वर्णन करा, सायकलचे प्रश्न विचारा किंवा आरोग्य मार्गदर्शक सुरक्षितपणे विचारा."
  };

  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: initialMsg[language] || initialMsg['en'],
      id: 'init'
    }
  ]);
  
  // Re-run this effect if language changes so initial message language updates, though typically we don't translate history.
  useEffect(() => {
    setMessages(prev => {
      const newMsgs = [...prev];
      if (newMsgs[0] && newMsgs[0].id === 'init') {
        newMsgs[0].text = initialMsg[language] || initialMsg['en'];
      }
      return newMsgs;
    });
  }, [language]);

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
    const text = typeof textToSend === 'string' ? textToSend : inputVal;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

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
          text: 'Hello! I am ArogyaNari, your AI intimate health companion. Describe your symptoms or ask health guidelines securely. How can I support you today?'
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

  return (
    <div className="fixed bottom-6 right-6 z-55 flex flex-col items-end">
      
      {isOpen && (
        <div className="relative mb-4 w-[calc(100vw-2rem)] sm:w-96 h-[480px] bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-in transition-all duration-300">
          
          <div className="bg-gradient-to-r from-feminine-pink to-feminine-purple text-white px-5 py-4 flex justify-between items-center shadow-sm select-none">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Sparkles size={14} className="animate-pulse" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-extrabold text-sm tracking-tight leading-none">{strings.title[language] || strings.title['en']}</h4>
                <div className="flex items-center gap-1 mt-1 leading-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[9px] font-bold text-white/80 uppercase tracking-wider">{strings.online[language] || strings.online['en']}</span>
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

          <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4 bg-[var(--bg-primary)]/20">
            
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/40 dark:border-emerald-800/30 rounded-xl p-3 text-[10px] text-emerald-600 dark:text-emerald-400 flex items-start gap-2 text-left">
              <ShieldCheck size={14} className="shrink-0 mt-0.5" />
              <span>{strings.hipaa[language] || strings.hipaa['en']}</span>
            </div>

            {messages.map((msg, idx) => {
              if (msg.isClinical) {
                return (
                  <div 
                    key={idx} 
                    className="glass-panel p-4 rounded-xl max-w-[90%] align-self-start text-left flex flex-col gap-3 border-l-4"
                    style={{ borderColor: msg.severityLevel === 'High' ? 'var(--danger)' : msg.severityLevel === 'Medium' ? 'var(--warning)' : 'var(--success)', alignSelf: 'flex-start' }}
                  >
                    <div>
                      <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-wider block">{strings.possibleCauses[language] || strings.possibleCauses['en']}</span>
                      <ul className="list-disc pl-4 text-[11px] text-[var(--text-primary)] mt-1 font-semibold flex flex-col gap-0.5">
                        {msg.possibleExplanations.map((exp, eIdx) => <li key={eIdx}>{exp}</li>)}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-2 text-[10px]">
                      <span className="font-bold">{strings.riskAssess[language] || strings.riskAssess['en']}</span>
                      <span className="font-extrabold" style={{ color: msg.severityLevel === 'High' ? 'var(--danger)' : msg.severityLevel === 'Medium' ? 'var(--warning)' : 'var(--success)' }}>
                        {msg.severityLevel} {strings.level[language] || strings.level['en']}
                      </span>
                    </div>

                    <div className="border-t border-[var(--border-color)] pt-2.5">
                      <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-wider block">{strings.actions[language] || strings.actions['en']}</span>
                      <ul className="list-decimal pl-4 text-[10px] text-[var(--text-primary)] mt-1 font-semibold flex flex-col gap-0.5">
                        {msg.lifestyleSuggestions.map((sug, sIdx) => <li key={sIdx}>{sug}</li>)}
                      </ul>
                    </div>

                    <div className="bg-[var(--bg-secondary)] border-l-2 border-feminine-purple p-2.5 rounded text-[10px] leading-relaxed text-[var(--text-secondary)] font-semibold">
                      <span className="font-extrabold text-feminine-pink block">{strings.clinicalSug[language] || strings.clinicalSug['en']}</span>
                      {msg.expertRecommendation}
                    </div>
                  </div>
                );
              }

              const isUser = msg.sender === 'user';
              return (
                <div 
                  key={idx}
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs text-left leading-relaxed font-semibold transition-all shadow-2xs ${isUser ? 'bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white rounded-br-none self-end' : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-bl-none self-start'}`}
                >
                  {msg.text}
                </div>
              );
            })}

            {isTyping && (
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-2xl rounded-bl-none px-4 py-3 self-start shadow-2xs flex items-center gap-1 w-16">
                <span className="h-1.5 w-1.5 rounded-full bg-feminine-pink animate-bounce delay-100"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-feminine-pink animate-bounce delay-200"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-feminine-pink animate-bounce delay-300"></span>
              </div>
            )}
            
            <div ref={chatEndRef}></div>
          </div>

          {messages.length === 1 && !isTyping && (
            <div className="px-4 py-2 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              {strings.chips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip.query)}
                  className="bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[10px] font-extrabold text-[var(--text-secondary)] hover:text-feminine-pink rounded-full px-3 py-1.5 transition-all duration-200 shrink-0 cursor-pointer shadow-2xs"
                >
                  {chip.label[language] || chip.label['en']}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] flex gap-2 items-center">
            <input 
              type="text"
              placeholder={strings.placeholder[language] || strings.placeholder['en']}
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

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-14 w-14 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white shadow-xl hover:shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
        title="Chat with ArogyaNari"
      >
        {isOpen ? (
          <X size={24} className="animate-fade-in" />
        ) : (
          <MessageSquare size={24} className="animate-fade-in group-hover:rotate-6 duration-200" />
        )}

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
