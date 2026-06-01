import React from 'react';
import { AlertTriangle, Phone, MapPin, ShieldAlert, Award } from 'lucide-react';

export default function EmergencySystem({ language, closeEmergency }) {
  const redFlags = [
    { title: 'Excessive Flow Bleeding', desc: 'Soaking through one or more sanitary pads/tampons completely every hour for two or more consecutive hours.' },
    { title: 'Acute Pelvic Pain', desc: 'Severe, sharp pain inside the lower abdomen that is sudden and restricts you from standing or breathing normally.' },
    { title: 'Fainting & Dizziness', desc: 'Losing consciousness, extreme lightheadedness, or persistent severe vomiting during your period.' },
    { title: 'High Infection Fever', desc: 'Temperature above 101°F (38.3°C) accompanied by foul-smelling vaginal discharge.' }
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(20, 5, 10, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '9999', padding: '20px' }}>
      <div className="glass-panel slide-in" style={{ maxWidth: '650px', background: 'var(--bg-secondary)', padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px', border: '2px solid var(--danger)', boxShadow: '0 0 40px rgba(250, 50, 50, 0.4)' }}>
        
        {/* Header Warning */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '2px solid var(--danger)', paddingBottom: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--danger-light)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
            <AlertTriangle size={24} style={{ animation: 'pulse 1.5s infinite' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '22px', color: 'var(--danger)', fontWeight: '800' }}>⚠️ SOS Clinical Emergency Alert</h2>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Potential High-Risk Menstrual Symptoms Identified</span>
          </div>
        </div>

        {/* Clinical Red-Flags List */}
        <div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            Immediate ER Action Triggers:
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-2">
            {redFlags.map((flag, idx) => (
              <div key={idx} style={{ background: 'var(--danger-light)', padding: '12px 14px', borderRadius: '8px', borderLeft: '4px solid var(--danger)' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>{flag.title}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4', display: 'block' }}>{flag.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Local Emergency Hotlines */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="grid-2">
          
          {/* Contacts */}
          <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} style={{ color: 'var(--secondary)' }} /> National Care Hotlines
            </span>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              <div>📞 Ambulance: <strong>102</strong></div>
              <div>📞 Intimate Care Line: <strong>1800-419-1020</strong></div>
            </div>
          </div>

          {/* Local Clinic Helper */}
          <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} style={{ color: 'var(--secondary)' }} /> Local Gynecological Emergency
            </span>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              <div>📍 Nearest: <strong>Max Speciality Hospital ER</strong></div>
              <div>🚗 Estimated Travel: <strong>8 Mins Away</strong></div>
            </div>
          </div>

        </div>

        {/* Disclaimers & Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
          <span style={{ fontSize: '11px', color: 'var(--danger)', fontWeight: '600', display: 'block', textAlign: 'center', fontStyle: 'italic' }}>
            "Do not delay professional clinical care based on system predictions. Call ambulance immediately."
          </span>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button className="btn btn-secondary" onClick={closeEmergency} style={{ padding: '8px 16px' }}>
              Dismiss Warning
            </button>
            <button 
              className="btn btn-primary" 
              style={{ background: 'var(--danger)', border: 'none', color: 'white', padding: '8px 16px' }}
              onClick={() => alert('Dialing ambulance... Simulating direct VoIP dial.')}
            >
              Call Ambulance Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
