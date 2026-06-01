import React, { useState } from 'react';
import { 
  Utensils, 
  Dumbbell, 
  Sparkles, 
  Check, 
  HelpCircle, 
  Play, 
  Compass, 
  ChevronRight,
  TrendingDown
} from 'lucide-react';

export default function DietGenerator({ language }) {
  const [subTab, setSubTab] = useState('diet'); // 'diet' or 'fitness'

  // Diet form states
  const [dietCondition, setDietCondition] = useState('PCOS');
  const [dietGoal, setDietGoal] = useState('weight_loss');
  const [dietPreference, setDietPreference] = useState('veg');
  const [dietBudget, setDietBudget] = useState('3000');
  const [generatedDiet, setGeneratedDiet] = useState(null);

  // Fitness states
  const [activeYogaCategory, setActiveYogaCategory] = useState('cramps');

  const handleGenerateDiet = () => {
    // Compile Custom Diet program based on inputs
    let meals = {};
    let swaps = [];
    let shopping = [];

    if (dietCondition === 'PCOS') {
      meals = {
        monday: { b: 'Avocado & Spinach Omelet', l: 'Quinoa Broccoli Bowl', d: 'Tofu stir-fry with brown rice', s: 'Flax seed yogurt' },
        tuesday: { b: 'Chia Seed Pudding', l: 'Lentil soup with spinach salad', d: 'Roasted vegetables with chicken/paneer', s: 'Almonds & green tea' },
        wednesday: { b: 'Oatmeal with almonds', l: 'Quinoa Broccoli Bowl', d: 'Tofu stir-fry with brown rice', s: 'Spearmint herbal tea' }
      };
      swaps = [
        { original: 'Avocado', swap: 'Local Spinaches / Eggs', saving: '₹150' },
        { original: 'Chia Seeds', swap: 'Flax Seeds (Alsi)', saving: '₹120' }
      ];
      shopping = ['Quinoa', 'Tofu', 'Spinach', 'Broccoli', 'Paneer', 'Flax Seeds', 'Spearmint Tea'];
    } else if (dietCondition === 'anemia') {
      meals = {
        monday: { b: 'Iron-fortified oats with strawberries', l: 'Beetroot & lentil salad', d: 'Spinach chicken / Paneer curry', s: 'Pumpkin seeds' },
        tuesday: { b: 'Scrambled eggs with pomegranate juice', l: 'Red kidney beans (Rajma) with brown rice', d: 'Broccoli and tofu bowl', s: 'Dates and cashews' },
        wednesday: { b: 'Iron-fortified oats with strawberries', l: 'Beetroot & lentil salad', d: 'Spinach chicken / Paneer curry', s: 'Pumpkin seeds' }
      };
      swaps = [
        { original: 'Pomegranate', swap: 'Amla / Citrus Guavas', saving: '₹100' },
        { original: 'Pumpkin Seeds', swap: 'Sesame Seeds (Til)', saving: '₹80' }
      ];
      shopping = ['Beetroot', 'Lentils', 'Spinach', 'Dates', 'Eggs', 'Rajma', 'Broccoli'];
    } else {
      meals = {
        monday: { b: 'Boiled egg and whole-wheat toast', l: 'Mixed vegetable brown rice', d: 'Grilled paneer with sautéed beans', s: 'Walnuts' },
        tuesday: { b: 'Sprouted Moong salad', l: 'Whole-wheat roti with chickpea curry', d: 'Vegetable vegetable soup with paneer', s: 'Apple slice' },
        wednesday: { b: 'Boiled egg and whole-wheat toast', l: 'Mixed vegetable brown rice', d: 'Grilled paneer with sautéed beans', s: 'Walnuts' }
      };
      swaps = [
        { original: 'Walnuts', swap: 'Peanuts (Sengdana)', saving: '₹200' }
      ];
      shopping = ['Brown Rice', 'Moong Sprouts', 'Paneer', 'Whole-wheat bread', 'Chickpeas'];
    }

    setGeneratedDiet({
      condition: dietCondition,
      goal: dietGoal,
      preference: dietPreference,
      budget: dietBudget,
      meals,
      swaps,
      shopping
    });
  };

  const yogaExercises = {
    cramps: [
      { name: 'Child\'s Pose (Balasana)', desc: 'Gently stretches the lower back muscles, relieving severe uterine cramping pressure.', duration: '5 Mins' },
      { name: 'Cat-Cow Stretch (Marjaryasana)', desc: 'Increases pelvic mobility and coordinates breathing to reduce spasm intensity.', duration: '3 Mins' },
      { name: 'Bound Angle Pose (Baddha Konasana)', desc: 'Stimulates ovaries, improves circulation throughout the pelvis, and relieves lower backache.', duration: '4 Mins' }
    ],
    pcos: [
      { name: 'Bridge Pose (Setu Bandhasana)', desc: 'Regulates thyroid function, stimulates endocrine organs, and tones pelvic muscles.', duration: '6 Mins' },
      { name: 'Cobra Pose (Bhujangasana)', desc: 'Tones ovaries, stretches abdominal cavities, and aids digestion parameters.', duration: '4 Mins' }
    ],
    stress: [
      { name: 'Corpse Pose (Savasana)', desc: 'Induces deep neurological rest, lowers cortisol levels, and reduces heart rates.', duration: '10 Mins' },
      { name: 'Legs-Up-The-Wall (Viparita Karani)', desc: 'Boosts lymphatic drainage, returns pooling blood, and relieves anxious muscle tension.', duration: '8 Mins' }
    ]
  };

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Tab select: Diet vs Fitness */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', gap: '20px' }}>
        <button 
          onClick={() => setSubTab('diet')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: subTab === 'diet' ? '3px solid var(--primary)' : 'none',
            padding: '10px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '700',
            color: subTab === 'diet' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: pointerStyle
          }}
        >
          🍎 AI Diet Planner
        </button>
        <button 
          onClick={() => setSubTab('fitness')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: subTab === 'fitness' ? '3px solid var(--primary)' : 'none',
            padding: '10px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '700',
            color: subTab === 'fitness' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: pointerStyle
          }}
        >
          🧘‍♀️ Yoga & Fitness Hub
        </button>
      </div>

      {subTab === 'diet' ? (
        /* =================== DIET MODULE =================== */
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px' }} className="grid-2">
          
          {/* Query parameters form */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
              🍽️ Nutrition Personalization
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Target Health Parameter</span>
              <select
                value={dietCondition}
                onChange={(e) => setDietCondition(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
              >
                <option value="PCOS">PCOS Regulation</option>
                <option value="anemia">Anemia Management</option>
                <option value="general">General Wellness</option>
                <option value="pregnancy">Pregnancy Support</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Weight Goal</span>
              <select
                value={dietGoal}
                onChange={(e) => setDietGoal(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
              >
                <option value="weight_loss">Weight Loss Program</option>
                <option value="maintain">Maintain Current Weight</option>
                <option value="muscle">Strength & Muscle Tone</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Food Preference</span>
              <select
                value={dietPreference}
                onChange={(e) => setDietPreference(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
              >
                <option value="veg">Vegetarian</option>
                <option value="nonveg">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Monthly Food Budget (INR)</span>
              <input 
                type="number" 
                value={dietBudget}
                onChange={(e) => setDietBudget(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
              />
            </div>

            <button className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={handleGenerateDiet}>
              Compile Meal Plan <Sparkles size={16} />
            </button>
          </div>

          {/* Compiled program display */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: generatedDiet ? 'flex-start' : 'center', minHeight: '400px' }}>
            {!generatedDiet ? (
              <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                <Utensils size={40} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                <h4>Weekly Meal Program Pending</h4>
                <p style={{ fontSize: '12px', padding: '0 40px' }}>Set your target parameters and generate to view nutritional meal grids, shopping items, and cost saving swaps.</p>
              </div>
            ) : (
              <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '12px' }}>
                  <h4 style={{ fontSize: '18px', color: 'var(--primary)' }}>
                    🥗 Personalized {generatedDiet.condition.toUpperCase()} Program
                  </h4>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Generated for: Budget ₹{generatedDiet.budget}/Month • Goal: {generatedDiet.goal.replace('_', ' ')}</span>
                </div>

                {/* 3 Days Meal Grid */}
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Weekly Meals Matrix</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {Object.keys(generatedDiet.meals).map(day => (
                      <div key={day} style={{ background: 'var(--bg-primary)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>{day}</span>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', fontSize: '11px' }}>
                          <div><strong style={{ display: 'block' }}>B:</strong> {generatedDiet.meals[day].b}</div>
                          <div><strong style={{ display: 'block' }}>L:</strong> {generatedDiet.meals[day].l}</div>
                          <div><strong style={{ display: 'block' }}>D:</strong> {generatedDiet.meals[day].d}</div>
                          <div><strong style={{ display: 'block' }}>S:</strong> {generatedDiet.meals[day].s}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget-Friendly swaps & Shopping list */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  
                  {/* Shopping List */}
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>🛒 Ingredient Shopping List</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {generatedDiet.shopping.map((item, idx) => (
                        <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-primary)', cursor: pointerStyle }}>
                          <input type="checkbox" style={{ accentColor: 'var(--primary)' }} />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget swaps */}
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>💰 Local Economy Swaps</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {generatedDiet.swaps.map((swp, idx) => (
                        <div key={idx} style={{ background: 'var(--success-light)', border: '1px solid rgba(0, 200, 100, 0.1)', padding: '8px 10px', borderRadius: '8px', fontSize: '11px' }}>
                          <span style={{ fontWeight: '700', color: 'var(--success)', display: 'block' }}>Replace: {swp.original}</span>
                          <span style={{ color: 'var(--text-primary)', display: 'block' }}>Swap with: {swp.swap}</span>
                          <span style={{ fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginTop: '2px' }}>Save {swp.saving} / Item</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}
          </div>

        </div>
      ) : (
        /* =================== FITNESS MODULE =================== */
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px' }} className="grid-2">
          
          {/* Left panel: breathing bubble & Category selectors */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', width: '100%' }}>
              🧘‍♀️ Core Movement Routines
            </h3>

            {/* Category selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Target Exercise Category</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'cramps', label: 'Period Pain Relief' },
                  { id: 'pcos', label: 'PCOS Management' },
                  { id: 'stress', label: 'Stress Management' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveYogaCategory(cat.id)}
                    style={{
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: activeYogaCategory === cat.id ? 'var(--primary)' : 'var(--border-color)',
                      background: activeYogaCategory === cat.id ? 'var(--primary-light)' : 'transparent',
                      color: activeYogaCategory === cat.id ? 'var(--primary)' : 'var(--text-primary)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: pointerStyle,
                      transition: 'var(--transition)',
                      textAlign: 'left'
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Breathing Helper */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', width: '100%', textAlign: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
                💨 Guided Breathing Assistant
              </span>
              <div className="breathe-animation" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', margin: '0 auto 12px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700' }}>
                Breathe
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Follow the expanding ring for matching breathing cycles.</span>
            </div>

          </div>

          {/* Right panel: Poses grid & mock videos */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
              🌸 Recommended Poses List
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {yogaExercises[activeYogaCategory].map((pose, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                  {/* Mock Play Video */}
                  <div style={{ width: '110px', height: '70px', borderRadius: '8px', background: 'hsl(285, 20%, 94%)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: pointerStyle, color: 'var(--primary)', position: 'relative' }}>
                    <Play size={20} />
                    <span style={{ position: 'absolute', bottom: '4px', right: '4px', fontSize: '9px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '1px 4px', borderRadius: '4px' }}>{pose.duration}</span>
                  </div>

                  <div style={{ flexGrow: '1' }}>
                    <h4 style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{pose.name}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4', marginTop: '2px' }}>{pose.desc}</p>
                    <span style={{ fontSize: '11px', color: 'var(--secondary)', fontWeight: '700', display: 'block', marginTop: '4px' }}>🔥 Target Relief Time: {pose.duration}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

const pointerStyle = 'pointer';
