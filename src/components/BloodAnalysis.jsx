import React, { useState } from 'react';
import { Sparkles, Heart, AlertTriangle, HelpCircle } from 'lucide-react';

export default function BloodAnalysis({ language }) {
  const [filterType, setFilterType] = useState('all');

  const bloodColors = [
    {
      name: { en: 'Bright Red Blood', hi: 'चमकदार लाल रक्त' },
      hex: 'hsl(355, 90%, 45%)',
      meaning: {
        en: 'Indicates fresh blood flowing quickly from the uterus.',
        hi: 'गर्भाशय से तेजी से बहने वाले ताजे रक्त को दर्शाता है।'
      },
      causes: {
        en: 'Common during the start or heavy days of a period when shedding is active.',
        hi: 'मासिक धर्म की शुरुआत या भारी दिनों में आम है जब शेडिंग सक्रिय होती है।'
      },
      normal: {
        en: 'Standard period flow in almost all cycles.',
        hi: 'लगभग सभी चक्रों में मानक प्रवाह।'
      },
      warning: {
        en: 'If bleeding is extremely heavy (soaking >1 pad/hour) or accompanied by severe pain.',
        hi: 'यदि रक्तस्राव अत्यधिक भारी है (>1 पैड/घंटा) या गंभीर दर्द के साथ है।'
      },
      severity: 'low'
    },
    {
      name: { en: 'Dark Red / Purple Blood', hi: 'गहरा लाल / बैंगनी रक्त' },
      hex: 'hsl(340, 85%, 30%)',
      meaning: {
        en: 'Older blood that has stayed in the uterus longer and oxidized slightly.',
        hi: 'पुराना रक्त जो गर्भाशय में अधिक समय तक रहा और थोड़ा ऑक्सीकृत हुआ।'
      },
      causes: {
        en: 'Common after waking up, or at the middle/end of the flow cycle.',
        hi: 'सोने के बाद जागने पर, या प्रवाह चक्र के मध्य/अंत में आम है।'
      },
      normal: {
        en: 'Shedding older lining is a completely physiological, healthy cleaning process.',
        hi: 'पुरानी परत को हटाना पूरी तरह से शारीरिक, स्वस्थ सफाई प्रक्रिया है।'
      },
      warning: {
        en: 'Standard; no warning unless clots are larger than a quarter.',
        hi: 'मानक; कोई चेतावनी नहीं जब तक कि थक्के एक सिक्के से बड़े न हों।'
      },
      severity: 'low'
    },
    {
      name: { en: 'Brown / Black Blood', hi: 'भूरा / काला रक्त' },
      hex: 'hsl(20, 60%, 20%)',
      meaning: {
        en: 'Highly oxidized old blood that took a long time to exit the body.',
        hi: 'अत्यधिक ऑक्सीकृत पुराना रक्त जिसे शरीर से बाहर निकलने में लंबा समय लगा।'
      },
      causes: {
        en: 'Usually seen in the very first spotting days or last tail-end period days.',
        hi: 'आमतौर पर पहले स्पॉटिंग के दिनों या अंतिम टेल-एंड दिनों में देखा जाता है।'
      },
      normal: {
        en: 'Completely normal. It represents late discharge or leftover uterine clean-up.',
        hi: 'पूरी तरह से सामान्य। यह देर से डिस्चार्ज या बचे हुए गर्भाशय की सफाई का प्रतिनिधित्व करता है।'
      },
      warning: {
        en: 'No medical concern unless foul-smelling or paired with continuous pelvic pain.',
        hi: 'कोई चिकित्सीय चिंता नहीं जब तक कि दुर्गंधयुक्त न हो या निरंतर पेल्विक दर्द न हो।'
      },
      severity: 'low'
    },
    {
      name: { en: 'Pink Blood', hi: 'गुलाबी रक्त' },
      hex: 'hsl(340, 75%, 70%)',
      meaning: {
        en: 'Blood diluted or mixed with fertile cervical fluid or vaginal discharge.',
        hi: 'रक्त जो उपजाऊ ग्रीवा द्रव या योनि स्राव के साथ मिश्रित हो गया है।'
      },
      causes: {
        en: 'Low estrogen levels, ovulation spotting, light flow days, or early pregnancy implantation.',
        hi: 'कम एस्ट्रोजन स्तर, ओव्यूलेशन स्पॉटिंग, हल्के प्रवाह के दिन, या प्रारंभिक गर्भावस्था।'
      },
      normal: {
        en: 'During ovulation windows (spotting) or start of light cycles.',
        hi: 'ओव्यूलेशन स्पॉटिंग या हल्के चक्र की शुरुआत के दौरान।'
      },
      warning: {
        en: 'If continuous, it might indicate low estrogen, hormonal imbalances, or vitamin deficiencies.',
        hi: 'यदि निरंतर है, तो यह कम एस्ट्रोजन या हार्मोनल असंतुलन का संकेत दे सकता है।'
      },
      severity: 'medium'
    },
    {
      name: { en: 'Orange Blood', hi: 'नारंगी रक्त' },
      hex: 'hsl(25, 85%, 55%)',
      meaning: {
        en: 'Blood mixed with cervical secretions, which can sometimes indicate a bacterial infection.',
        hi: 'रक्त ग्रीवा स्राव के साथ मिश्रित होता है, जो कभी-कभी संक्रमण का संकेत दे सकता है।'
      },
      causes: {
        en: 'Can be spotting, or associated with vaginitis/cervical infections.',
        hi: 'स्पॉटिंग हो सकती है, या वेजिनाइटिस/सर्वाइकल संक्रमण से जुड़ी हो सकती है।'
      },
      normal: {
        en: 'Rarely normal; usually warrants verification.',
        hi: 'शायद ही कभी सामान्य; आमतौर पर सत्यापन की आवश्यकता होती है।'
      },
      warning: {
        en: 'Highly recommended to check if paired with itching, burning during urination, or unusual odor.',
        hi: 'यदि खुजली, पेशाब के दौरान जलन या असामान्य गंध के साथ हो तो जांच करने की अत्यधिक सिफारिश की जाती है।'
      },
      severity: 'high'
    },
    {
      name: { en: 'Gray Blood', hi: 'धूसर / ग्रे रक्त' },
      hex: 'hsl(0, 10%, 60%)',
      meaning: {
        en: 'A strong indicator of vaginal infections or potential pregnancy tissue passage.',
        hi: 'योनि संक्रमण या संभावित गर्भावस्था ऊतक मार्ग का एक मजबूत संकेतक।'
      },
      causes: {
        en: 'Bacterial Vaginosis (BV), or potential miscarriage tissue.',
        hi: 'बैक्टीरियल वेजिनाइटिस (BV), या संभावित गर्भपात।'
      },
      normal: {
        en: 'Never normal. Warrants clinical checking.',
        hi: 'कभी भी सामान्य नहीं। चिकित्सीय जांच की आवश्यकता है।'
      },
      warning: {
        en: 'Seek immediate gynecological evaluation, especially if pregnant or experiencing severe cramping.',
        hi: 'तुरंत स्त्री रोग संबंधी मूल्यांकन की तलाश करें, खासकर यदि गर्भवती हैं या गंभीर ऐंठन है।'
      },
      severity: 'high'
    }
  ];

  const filteredColors = bloodColors.filter(color => {
    if (filterType === 'all') return true;
    return color.severity === filterType;
  });

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* 1. HEADER DESCRIPTION */}
      <div className="glass-panel" style={{ padding: '30px', textAlign: 'center', background: 'linear-gradient(to right, rgba(255, 240, 240, 0.4), rgba(255, 255, 255, 0.8))' }}>
        <h1 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '10px' }}>
          {language === 'en' ? 'Menstrual Blood Color Analyzer' : 'मासिक धर्म के रक्त रंग का विश्लेषण'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '14px' }}>
          {language === 'en' 
            ? 'The color of your menstrual blood provides critical biological insights into your hormones, cycle speed, and potential infections. Understand what is healthy and when to consult a doctor.' 
            : 'आपके मासिक धर्म के रक्त का रंग आपके हार्मोन, चक्र की गति और संभावित संक्रमणों में महत्वपूर्ण जैविक अंतर्दृष्टि प्रदान करता है।'}
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          {['all', 'low', 'medium', 'high'].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: filterType === type ? 'var(--primary)' : 'var(--border-color)',
                background: filterType === type ? 'var(--primary)' : 'var(--bg-secondary)',
                color: filterType === type ? 'white' : 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              {type === 'all' && (language === 'en' ? 'All Colors' : 'सभी रंग')}
              {type === 'low' && (language === 'en' ? 'Normal / Healthy' : 'सामान्य / स्वस्थ')}
              {type === 'medium' && (language === 'en' ? 'Hormonal Check' : 'हार्मोनल जांच')}
              {type === 'high' && (language === 'en' ? 'Medical Evaluation' : 'चिकित्सीय मूल्यांकन')}
            </button>
          ))}
        </div>
      </div>

      {/* 2. GRID OF COLOR CARDS */}
      <div className="grid-2">
        {filteredColors.map((color, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Top Drop & Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50% 50% 10% 50%', 
                  background: color.hex, 
                  transform: 'rotate(-45deg)', 
                  boxShadow: `0 4px 15px ${color.hex}40`,
                  border: '3px solid white'
                }}
              ></div>
              <div>
                <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>{color.name[language] || color.name['en']}</h3>
                <span 
                  style={{ 
                    fontSize: '11px', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    color: color.severity === 'low' ? 'var(--success)' : color.severity === 'medium' ? 'var(--warning)' : 'var(--danger)',
                    background: color.severity === 'low' ? 'var(--success-light)' : color.severity === 'medium' ? 'var(--warning-light)' : 'var(--danger-light)',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    display: 'inline-block',
                    marginTop: '4px'
                  }}
                >
                  {color.severity === 'low' ? 'Normal Clinical Status' : color.severity === 'medium' ? 'Hormonal Variations' : 'Urgent Evaluation Recommended'}
                </span>
              </div>
            </div>

            {/* Description details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px', fontSize: '13px' }}>
              <div>
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>📖 Meaning & Biology</span>
                <p style={{ color: 'var(--text-secondary)' }}>{color.meaning[language] || color.meaning['en']}</p>
              </div>

              <div>
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>💡 Common Causes</span>
                <p style={{ color: 'var(--text-secondary)' }}>{color.causes[language] || color.causes['en']}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '4px' }}>
                <div style={{ background: 'var(--success-light)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(0, 200, 100, 0.1)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--success)', display: 'block', fontSize: '11px', textTransform: 'uppercase', marginBottom: '2px' }}>✅ Normal Indicator</span>
                  <p style={{ color: 'var(--text-primary)', fontSize: '12px', lineHeight: '1.4' }}>{color.normal[language] || color.normal['en']}</p>
                </div>

                <div style={{ background: 'var(--danger-light)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(250, 50, 50, 0.1)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--danger)', display: 'block', fontSize: '11px', textTransform: 'uppercase', marginBottom: '2px' }}>⚠️ Seek Checking If</span>
                  <p style={{ color: 'var(--text-primary)', fontSize: '12px', lineHeight: '1.4' }}>{color.warning[language] || color.warning['en']}</p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
