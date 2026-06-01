import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Heart, Trash2, Droplet, Star, ShoppingBag } from 'lucide-react';

export default function HygieneHub({ language }) {
  const [subTab, setSubTab] = useState('hub'); // 'hub' or 'product'
  
  // Cost Calculator states
  const [padsUsedPerCycle, setPadsUsedPerCycle] = useState('15');
  const [costPerPad, setCostPerPad] = useState('10');

  const hygieneGuides = [
    { title: 'Menstrual Hygiene Guide', items: ['Change sanitary pads every 4-6 hours to prevent bacterial accumulation.', 'Wash your hands thoroughly before and after handling any menstrual products.', 'Dispose of used pads/tampons in designated waste bags; never flush them down toilets.'] },
    { title: 'Vaginal Hygiene Guide', items: ['Wash the vulva daily using plain, warm water only. Avoid chemical washes or soaps.', 'Wipe strictly from front to back after urinating or bowel movements.', 'Conduct a clinical inspection if experiencing grey or foul-smelling discharge.'] },
    { title: 'Underwear Care Guide', items: ['Prefer 100% breathable organic cotton fabrics rather than synthetics.', 'Wash period garments separately in warm, mild detergent and sun dry.', 'Replace all daily intimate garments once every six to nine months.'] }
  ];

  const products = [
    {
      name: 'Sanitary Pads',
      usage: 'Standard adhesive placement inside underwear.',
      pros: 'Widely accessible, simple application, no insertion required.',
      cons: 'Generates non-biodegradable waste, risk of moisture rashes.',
      sustainability: '1 / 5 (Poor)',
      rating: 1
    },
    {
      name: 'Tampons',
      usage: 'Internal vaginal placement using plastic or cardboard applicator.',
      pros: 'Discrete, perfect for physical movement and swimming.',
      cons: 'Single-use plastic disposal, strict 4-8h replacement to avoid TSS.',
      sustainability: '2 / 5 (Moderate)',
      rating: 2
    },
    {
      name: 'Menstrual Cups',
      usage: 'Internal folding placement. Emptied every 8-12 hours.',
      pros: 'Extremely cost-effective, reusable for 5-10 years, zero chemical bleach.',
      cons: 'Requires minor insertion learning curve, rinsing access needed.',
      sustainability: '5 / 5 (Excellent)',
      rating: 5
    },
    {
      name: 'Period Panties',
      usage: 'Worn directly as standard underwear containing absorbent layers.',
      pros: 'Reusable, zero insertion, highly comfortable for sleep.',
      cons: 'Requires laundry washing, higher initial individual purchase cost.',
      sustainability: '4.5 / 5 (Great)',
      rating: 4.5
    }
  ];

  // Annual Cost Calculator Logic
  const padInt = parseInt(padsUsedPerCycle) || 15;
  const costInt = parseInt(costPerPad) || 10;
  
  const annualPadsCost = padInt * costInt * 12;
  const annualCupsCost = 350; // A cup costs ₹350 once and lasts 5 years (annualized = ₹70)
  const annualPantiesCost = 800; // 2 pairs of panties cost ₹800 and last 2 years (annualized = ₹400)

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Sub tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', gap: '20px' }}>
        <button 
          onClick={() => setSubTab('hub')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: subTab === 'hub' ? '3px solid var(--primary)' : 'none',
            padding: '10px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '700',
            color: subTab === 'hub' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: pointerStyle
          }}
        >
          📖 Hygiene Education Hub
        </button>
        <button 
          onClick={() => setSubTab('product')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: subTab === 'product' ? '3px solid var(--primary)' : 'none',
            padding: '10px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '700',
            color: subTab === 'product' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: pointerStyle
          }}
        >
          🛍️ Menstrual Product System
        </button>
      </div>

      {subTab === 'hub' ? (
        /* =================== HYGIENE EDUCATION =================== */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          <div className="grid-3">
            {hygieneGuides.map((guide, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                  <ShieldCheck size={18} /> {guide.title}
                </h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '16px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                  {guide.items.map((item, iIdx) => <li key={iIdx}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Checklist Card */}
          <div className="glass-panel" style={{ padding: '30px', background: 'linear-gradient(135deg, rgba(230, 50, 120, 0.05), rgba(130, 50, 230, 0.05))' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', textAlign: 'center' }}>📝 Daily Vaginal Hygiene Checklist</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {[
                'Washed with warm water',
                'Worn dry organic cotton garments',
                'Drank at least 2.5L fluids',
                'Logged flow parameters',
                'Completed gentle movement stretch'
              ].map((item, idx) => (
                <label key={idx} style={{ background: 'var(--bg-secondary)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '10px', cursor: pointerStyle, fontSize: '13px' }}>
                  <input type="checkbox" style={{ accentColor: 'var(--primary)' }} />
                  {item}
                </label>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* =================== PRODUCT RECOMMENDER & CALCULATOR =================== */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* Cost Calculator Section */}
          <div className="glass-panel" style={{ padding: '30px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }} className="grid-2">
            <div>
              <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px' }}>💰 Lifetime Menstrual Expense Calculator</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>Enter your current single-use pad usage and costs to discover how much you can save annually by transitioning to reusable products.</p>
              
              <div className="grid-2">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Pads Used per cycle</span>
                  <input 
                    type="number" 
                    value={padsUsedPerCycle}
                    onChange={(e) => setPadsUsedPerCycle(e.target.value)}
                    style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Average Cost per pad (INR)</span>
                  <input 
                    type="number" 
                    value={costPerPad}
                    onChange={(e) => setCostPerPad(e.target.value)}
                    style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>
            </div>

            {/* Calculations display */}
            <div style={{ background: 'var(--bg-primary)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span>Annual Disposable Pads Cost:</span>
                <strong style={{ color: 'var(--danger)' }}>₹{annualPadsCost}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span>Annual Menstrual Cup cost (Amortized):</span>
                <strong style={{ color: 'var(--success)' }}>₹{annualCupsCost}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                <span>Annual Period Panties cost (Amortized):</span>
                <strong style={{ color: 'var(--success)' }}>₹{annualPantiesCost}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '700' }}>
                <span style={{ color: 'var(--secondary)' }}>Potential Annual Cup Savings:</span>
                <strong style={{ color: 'var(--success)', fontSize: '18px' }}>₹{annualPadsCost - annualCupsCost > 0 ? annualPadsCost - annualCupsCost : 0}</strong>
              </div>
            </div>
          </div>

          {/* Product matrix */}
          <div className="grid-2">
            {products.map((prod, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                  <h4 style={{ fontSize: '16px', color: 'var(--text-primary)' }}>✨ {prod.name}</h4>
                  <span style={{ fontSize: '11px', background: 'var(--secondary-light)', color: 'var(--secondary)', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>
                    Sustainability: {prod.sustainability}
                  </span>
                </div>
                
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div><strong>Application:</strong> {prod.usage}</div>
                  <div><strong>Advantages:</strong> {prod.pros}</div>
                  <div><strong>Disadvantages:</strong> {prod.cons}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}

const pointerStyle = 'pointer';
