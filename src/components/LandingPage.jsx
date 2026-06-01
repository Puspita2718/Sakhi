import React, { useState } from 'react';
import { 
  ArrowRight, 
  Smartphone, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ChevronRight, 
  HelpCircle, 
  Plus, 
  Minus,
  Check
} from 'lucide-react';

export default function LandingPage({ language, setTab }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const t = {
    en: {
      heroTitle: 'AI-Powered Precision Women\'s Health Platform',
      heroSub: 'HerCare AI serves as your clinical Swasthya Mitra. Predict cycles, analyze symptoms, consult top doctors, and manage holistic wellness through end-to-end secure technology.',
      explore: 'Explore Dashboard',
      download: 'Mobile App Mockup',
      daysCountdown: 'Next Period in',
      daysValue: '12 Days',
      ovulationText: 'Ovulation: 14 Oct',
      fertilityChance: 'High Fertility Chance',
      featuresTitle: 'Complete FemTech Offerings',
      featuresSub: 'Integrated medical, nutritional, and analytical support tailored for every stage of your life.',
      meetExperts: 'Meet our Care Experts',
      meetExpertsSub: 'Instant access to certified gynecologists, nutritionists, and mental wellness practitioners.',
      pricingTitle: 'Choose Your Health Pass',
      pricingSub: 'Flexible subscription programs supporting chat consults, video assessments, and AI tools.',
      faqTitle: 'Frequently Asked Questions',
      basic: 'Basic Plan',
      standard: 'Standard Plan',
      premium: 'Premium Plan'
    },
    hi: {
      heroTitle: 'एआई-संचालित सटीक महिला स्वास्थ्य मंच',
      heroSub: 'HerCare AI आपकी क्लिनिकल स्वास्थ्य मित्र के रूप में कार्य करता है। चक्रों की भविष्यवाणी करें, लक्षणों का विश्लेषण करें, शीर्ष डॉक्टरों से परामर्श करें और समग्र कल्याण का प्रबंधन करें।',
      explore: 'डैशबोर्ड देखें',
      download: 'मोबाइल ऐप मॉकअप',
      daysCountdown: 'अगली अवधि',
      daysValue: '12 दिन बाद',
      ovulationText: 'अंडोत्सर्ग: 14 अक्टूबर',
      fertilityChance: 'उच्च प्रजनन क्षमता',
      featuresTitle: 'संपूर्ण फेमटेक सेवाएं',
      featuresSub: 'आपके जीवन के हर चरण के लिए तैयार की गई एकीकृत चिकित्सा, पोषण और विश्लेषणात्मक सहायता।',
      meetExperts: 'हमारे स्वास्थ्य विशेषज्ञों से मिलें',
      meetExpertsSub: 'प्रमाणित स्त्री रोग विशेषज्ञों, पोषण विशेषज्ञों और मानसिक स्वास्थ्य चिकित्सकों तक त्वरित पहुँच।',
      pricingTitle: 'अपना हेल्थ पास चुनें',
      pricingSub: 'चैट परामर्श, वीडियो मूल्यांकन और एआई टूल का समर्थन करने वाले लचीले सदस्यता कार्यक्रम।',
      faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
      basic: 'बेसिक प्लान',
      standard: 'स्टैंडर्ड प्लान',
      premium: 'प्रीमियम प्लान'
    }
  };

  const currentLang = t[language] || t['en'];

  const solutions = [
    { name: 'PCOS Management', color: 'hsl(330, 80%, 95%)', border: 'hsl(330, 70%, 48%)' },
    { name: 'Endometriosis Care', color: 'hsl(265, 80%, 95%)', border: 'hsl(265, 60%, 55%)' },
    { name: 'UTI & Pelvis Health', color: 'hsl(180, 80%, 94%)', border: 'hsl(180, 70%, 40%)' },
    { name: 'Pregnancy Journey', color: 'hsl(15, 80%, 94%)', border: 'hsl(15, 75%, 50%)' }
  ];

  const experts = [
    { name: 'Dr. Shalini Iyer', role: 'Gynecologist & Obstetrician', exp: '12+ Years Exp', clinic: 'Apollo Health', price: '₹499' },
    { name: 'Dr. Rohan Sharma', role: 'Reproductive Endocrinologist', exp: '8+ Years Exp', clinic: 'Max Care', price: '₹599' },
    { name: 'Dr. Priya Sen', role: 'Clinical Dietitian & Nutritionist', exp: '10+ Years Exp', clinic: 'Fortis Clinic', price: '₹399' }
  ];

  const plans = [
    {
      name: currentLang.basic,
      price: '₹499',
      period: '/ 7 Days',
      features: ['24/7 Chat consultations', 'AI Symptom checker', 'Cycle logs and calendar tracking'],
      highlight: false,
      color: 'hsl(285, 20%, 96%)'
    },
    {
      name: currentLang.standard,
      price: '₹1,499',
      period: '/ 30 Days',
      features: ['Video + Chat doctor slots', 'Dynamic PCOS & Weight plans', 'Advanced analytics and trends', 'Priority booking support'],
      highlight: true,
      color: 'linear-gradient(135deg, hsl(330, 70%, 48%), hsl(265, 60%, 55%))'
    },
    {
      name: currentLang.premium,
      price: '₹3,499',
      period: '/ 90 Days',
      features: ['Unlimited video consultations', 'Customized nutrition program', 'Mental wellness coach access', 'Downloadable doctor-ready reports'],
      highlight: false,
      color: 'hsl(285, 20%, 96%)'
    }
  ];

  const faqs = [
    { q: 'How secure is my health logging details?', a: 'All logged menstrual data and chat logs are fully encrypted using end-to-end protocols (HIPAA-inspired standard). We never sell or share clinical details.' },
    { q: 'How does the AI blood color analyzer operate?', a: 'It provides key educational references for Bright Red, Dark Red, Gray, Brown, Orange, and Pink blood, outlining normal conditions and critical emergency red-flags.' },
    { q: 'Can I speak directly to certified gynecologists?', a: 'Yes! Our Standard and Premium subscription passes allow you to instantly book secure video appointments with validated board-certified gynecologists.' }
  ];

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
      
      {/* 1. HERO BANNER */}
      <div className="glass-panel" style={{ padding: '60px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap', background: 'linear-gradient(to right, rgba(255, 240, 248, 0.6), rgba(240, 240, 255, 0.6))', border: '1px solid rgba(255, 255, 255, 0.8)' }}>
        <div style={{ flex: '1', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', color: 'var(--primary)', background: 'var(--primary-light)', padding: '6px 12px', borderRadius: '20px', width: 'fit-content' }}>
            🏥 Women's Health & AI Technology
          </span>
          <h1 style={{ fontSize: '42px', lineHeight: '1.2', fontWeight: '800', color: 'var(--text-primary)' }}>
            {currentLang.heroTitle}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
            {currentLang.heroSub}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '10px' }}>
            <button className="btn btn-primary" onClick={() => setTab('dashboard')}>
              {currentLang.explore} <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary" onClick={() => setTab('ai-chat')}>
              {currentLang.download}
            </button>
          </div>
        </div>

        {/* Dynamic Mockup Card */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel float-animation" style={{ width: '320px', padding: '30px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)' }}>📅 Cycle Outlook</span>
              <span style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '3px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '700' }}>Day 16</span>
            </div>

            {/* Pulsing countdown circle */}
            <div style={{ width: '160px', height: '160px', borderRadius: '50%', border: '4px solid var(--border-color)', margin: '0 auto 24px auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div className="breathe-animation" style={{ position: 'absolute', width: '130px', height: '130px', borderRadius: '50%', background: 'var(--primary-light)', zIndex: '0' }}></div>
              <div style={{ zIndex: '1', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block' }}>{currentLang.daysCountdown}</span>
                <span style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary)' }}>{currentLang.daysValue}</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--secondary)', display: 'block', marginBottom: '4px' }}>
                ✨ {currentLang.fertilityChance}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                {currentLang.ovulationText}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CURATED SOLUTIONS CATEGORIES */}
      <div>
        <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '10px' }}>Specialized Care Portals</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '40px' }}>Targeted insights and plans developed for common women's health parameters.</p>
        
        <div className="grid-4">
          {solutions.map((sol, index) => (
            <div 
              key={index} 
              className="glass-panel" 
              style={{ 
                padding: '24px', 
                textAlign: 'center', 
                borderLeft: `5px solid ${sol.border}`,
                cursor: 'pointer'
              }}
              onClick={() => setTab('diet-fitness')}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: sol.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: sol.border }}>
                <Sparkles size={20} />
              </div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>{sol.name}</h3>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                Access Guide <ChevronRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. EXPERT DOCTORS SECTION */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>{currentLang.meetExperts}</h2>
            <p style={{ color: 'var(--text-secondary)' }}>{currentLang.meetExpertsSub}</p>
          </div>
          <button className="btn btn-secondary" onClick={() => setTab('ai-chat')}>
            View All Doctors
          </button>
        </div>

        <div className="grid-3">
          {experts.map((exp, index) => (
            <div key={index} className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                {/* Doctor Portrait Mock */}
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary)', fontSize: '20px' }}>
                  {exp.name.split(' ')[1][0]}
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--text-primary)' }}>{exp.name}</h3>
                  <span style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: '600', display: 'block' }}>{exp.role}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{exp.clinic}</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '12px 0', fontSize: '13px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>🎖️ {exp.exp}</span>
                <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Consult: {exp.price}</span>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setTab('ai-chat')}>
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SUBSCRIPTION PLANS */}
      <div>
        <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '8px' }}>{currentLang.pricingTitle}</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '40px' }}>{currentLang.pricingSub}</p>

        <div className="grid-3">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="glass-panel" 
              style={{ 
                padding: '40px 30px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '24px',
                border: plan.highlight ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                position: 'relative',
                transform: plan.highlight ? 'scale(1.03)' : 'scale(1)'
              }}
            >
              {plan.highlight && (
                <span style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '4px 14px', borderRadius: '15px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Best Value
                </span>
              )}
              
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '12px', color: plan.highlight ? 'var(--primary)' : 'var(--text-primary)' }}>{plan.name}</h3>
                <div style={{ display: 'flex', justifySelf: 'center', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '800', color: 'var(--text-primary)' }}>{plan.price}</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{plan.period}</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: '1' }}>
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--success-light)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check size={12} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => alert(`${plan.name} simulation initialized. Directing to Razorpay checkout...`)}
              >
                Activate Health Pass
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 5. COLLAPSIBLE FAQ MODULE */}
      <div className="glass-panel" style={{ padding: '40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '24px', textAlign: 'center' }}>{currentLang.faqTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 0',
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpCircle size={18} style={{ color: 'var(--primary)' }} />
                    {faq.q}
                  </span>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                {isOpen && (
                  <p className="slide-in" style={{ padding: '12px 10px 0 28px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
