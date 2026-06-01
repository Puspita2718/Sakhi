import React from 'react';
import { 
  Heart, 
  Calendar, 
  Sparkles, 
  Droplet, 
  Utensils, 
  Smile, 
  Users, 
  Activity, 
  PhoneCall, 
  Globe,
  Sun,
  Moon
} from 'lucide-react';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  darkMode, 
  toggleDarkMode, 
  language, 
  setLanguage,
  triggerEmergency
}) {
  const menuItems = [
    { id: 'dashboard', label: { en: 'Dashboard', hi: 'डैशबोर्ड', bn: 'ড্যাশবোর্ড', ta: 'டாஷ்போர்டு', te: 'డాష్‌బోర్డ్', mr: 'डॅशबोर्ड' }, icon: Activity },
    { id: 'calendar', label: { en: 'Cycle Tracker', hi: 'चक्र ट्रैकर', bn: 'পিরিয়ড ট্র্যাকার', ta: 'மாதவிடாய் காட்டி', te: 'ఋతు చక్రం', mr: 'सायकल ट्रॅकर' }, icon: Calendar },
    { id: 'blood-analysis', label: { en: 'Blood Analysis', hi: 'रक्त विश्लेषण', bn: 'রক্ত বিশ্লেষণ', ta: 'இரத்த பகுப்பாய்வு', te: 'రక్త విశ్లేషణ', mr: 'रक्त विश्लेषण' }, icon: Droplet },
    { id: 'ai-chat', label: { en: 'My Health Chat', hi: 'स्वास्थ्य चैट', bn: 'হেলথ চ্যাট', ta: 'சுகாதார அரட்டை', te: 'ఆరోగ్య చాట్', mr: 'आरोग्य चॅट' }, icon: Sparkles },
    { id: 'diet-fitness', label: { en: 'Diet & Yoga', hi: 'आहार और योग', bn: 'ডায়েট ও যোগব্যায়াম', ta: 'உணவு & யோகா', te: 'డైట్ & యోగా', mr: 'आहार आणि योग' }, icon: Utensils },
    { id: 'zen', label: { en: 'Zen Room', hi: 'ध्यान कक्ष', bn: 'ধ্যান কক্ষ', ta: 'தியான அறை', te: 'ధ్యాన గది', mr: 'ध्यान कक्ष' }, icon: Smile },
    { id: 'community', label: { en: 'Community', hi: 'समुदाय', bn: 'কমিউনিটি', ta: 'சமூகம்', te: 'కమ్యూనిటీ', mr: 'समुदाय' }, icon: Users }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'mr', name: 'मराठी' }
  ];

  return (
    <nav className="sidebar-nav glass-panel" style={{ borderRadius: '0', borderLeft: 'none', borderTop: 'none', borderBottom: 'none' }}>
      <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border-color)' }} className="sidebar-header-desktop">
        <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
          S
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '800', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            SAKHI
          </h2>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '500' }}>SAKHI Engine</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px 12px', flexGrow: '1', overflowY: 'auto' }} className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px 16px',
                border: 'none',
                background: isActive ? 'var(--primary-light)' : 'transparent',
                color: isActive ? 'var(--primary)' : 'var(--text-primary)',
                borderRadius: 'var(--radius-md)',
                cursor: pointerStyle,
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: isActive ? '600' : '500',
                transition: 'var(--transition)',
                textAlign: 'left'
              }}
              className="sidebar-menu-btn"
            >
              <Icon size={18} style={{ color: isActive ? 'var(--primary)' : 'var(--text-secondary)' }} />
              <span className="sidebar-btn-text">{item.label[language]}</span>
            </button>
          );
        })}

        {/* Emergency Trigger inside Sidebar */}
        <button
          onClick={triggerEmergency}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            padding: '12px 16px',
            border: 'none',
            background: 'var(--danger-light)',
            color: 'var(--danger)',
            borderRadius: 'var(--radius-md)',
            cursor: pointerStyle,
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            fontWeight: '600',
            marginTop: 'auto',
            transition: 'var(--transition)'
          }}
          className="sidebar-emergency-btn"
        >
          <PhoneCall size={18} />
          <span className="sidebar-btn-text">
            {language === 'en' ? 'SOS Emergency' : language === 'hi' ? 'आपातकालीन SOS' : 'SOS'}
          </span>
        </button>
      </div>

    </nav>
  );
}

const pointerStyle = 'pointer';
const varColorTextPrimary = 'var(--text-primary)';
