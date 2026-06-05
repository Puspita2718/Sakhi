import React, { useState } from 'react';
import { 
  Apple, Droplet, Flame, Trophy, PlayCircle, ShoppingCart, 
  Target, Wallet, Brain, Activity, Heart, TrendingUp, Download, CheckCircle2, ChevronDown
} from 'lucide-react';

export default function DietFitness({ language = 'en' }) {
  const [goal, setGoal] = useState('Weight Management');
  const [lifestyle, setLifestyle] = useState('Working Professional');
  const [budget, setBudget] = useState('₹3000');
  const [waterCount, setWaterCount] = useState(3);
  
  const goals = ['Weight Loss', 'Weight Gain', 'PCOS Management', 'Period Pain Relief', 'Hormonal Balance', 'Glowing Skin', 'Energy Boost', 'Stress Reduction'];
  const lifestyles = ['Hostel Student', 'College Student', 'Working Professional', 'Homemaker', 'Athlete'];
  const budgets = ['₹1000', '₹2000', '₹3000', '₹5000+'];

  // Dynamic Content based on State
  const getMeals = () => {
    if (goal === 'PCOS Management' || goal === 'Weight Loss') {
      return [
        { type: 'Breakfast', name: 'Oats Pilla with Spinach', cals: 320, macros: '12g Protein • 8g Fiber', why: 'Low glycemic index prevents insulin spikes.' },
        { type: 'Lunch', name: 'Quinoa & Moong Dal Salad', cals: 450, macros: '18g Protein • 10g Fiber', why: 'Rich in iron and fiber for hormonal balance.' },
        { type: 'Evening Snack', name: 'Roasted Makhana', cals: 120, macros: '4g Protein', why: 'Anti-inflammatory and curbs cravings.' },
        { type: 'Dinner', name: 'Grilled Paneer & Veggies', cals: 380, macros: '22g Protein • 6g Fiber', why: 'High protein for muscle repair during sleep.' }
      ];
    }
    if (lifestyle === 'Hostel Student') {
      return [
        { type: 'Breakfast', name: 'Overnight Oats & Banana', cals: 350, macros: '10g Protein', why: 'Requires no cooking, easy to meal-prep.' },
        { type: 'Lunch', name: 'Dal Chawal & Cucumber', cals: 500, macros: '15g Protein', why: 'Mess-friendly and provides complete protein.' },
        { type: 'Evening Snack', name: 'Peanuts & Jaggery', cals: 200, macros: '7g Protein', why: 'Cheap iron-boosting snack.' },
        { type: 'Dinner', name: 'Roti & Mix Sabzi', cals: 400, macros: '12g Protein', why: 'Standard balanced hostel dinner.' }
      ];
    }
    // Default
    return [
      { type: 'Breakfast', name: 'Besan Chilla & Mint Chutney', cals: 380, macros: '16g Protein', why: 'High protein to start the day.' },
      { type: 'Lunch', name: 'Brown Rice, Rajma & Curd', cals: 550, macros: '20g Protein', why: 'Complex carbs and probiotics.' },
      { type: 'Evening Snack', name: 'Fruit Bowl & Walnuts', cals: 180, macros: '5g Protein', why: 'Antioxidants and omega-3s.' },
      { type: 'Dinner', name: 'Vegetable Dalia', cals: 320, macros: '10g Protein', why: 'Light on the stomach, aids digestion.' }
    ];
  };

  const getGroceries = () => {
    if (lifestyle === 'Hostel Student') return ['Oats', 'Bananas', 'Peanuts', 'Jaggery', 'Milk', 'Mixed Seeds'];
    if (goal === 'PCOS Management') return ['Quinoa', 'Makhana', 'Spinach', 'Paneer', 'Spearmint Tea', 'Chia Seeds'];
    return ['Oats', 'Milk', 'Spinach', 'Lentils', 'Beetroot', 'Bananas'];
  };

  const meals = getMeals();
  const groceries = getGroceries();

  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in pb-12">
      
      {/* SECTION 1: Today's Wellness Plan (Hero) */}
      <div className="glass-panel p-6 rounded-3xl border border-pink-100/50 dark:border-zinc-800 bg-gradient-to-r from-pink-50 to-white dark:from-zinc-900 dark:to-zinc-950 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="z-10 flex-1 w-full">
           <h1 className="font-display text-xl md:text-2xl font-extrabold text-[var(--text-primary)] mb-4 flex items-center gap-2">
             🌸 Today's Wellness Plan
           </h1>
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
             <div>
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-0.5">Current Cycle Phase</span>
               <p className="text-sm font-black text-pink-600 dark:text-pink-400">Ovulation</p>
             </div>
             <div>
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-0.5">Health Goal</span>
               <p className="text-sm font-black text-[var(--text-primary)]">{goal}</p>
             </div>
             <div>
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-0.5">Mood</span>
               <p className="text-sm font-black text-[var(--text-primary)]">Happy 😊</p>
             </div>
           </div>
           
           <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
              <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider mb-2 block">Today's Focus</span>
              <div className="flex flex-wrap gap-4">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><CheckCircle2 size={14} /> Protein Intake</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5"><CheckCircle2 size={14} /> Hydration</span>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5"><CheckCircle2 size={14} /> Physical Activity</span>
              </div>
           </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-xl shadow-pink-100/50 dark:shadow-none border border-pink-50 dark:border-zinc-800 z-10 w-full md:w-auto shrink-0">
          <p className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2 text-center">Wellness Score</p>
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

      {/* SETTINGS BAR (Sections 2, 3, 4) */}
      <div className="glass-panel p-4 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* SECTION 2: Goal Selection */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-1"><Target size={12} /> Select Your Goal</span>
          <div className="relative">
            <select 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-950 text-xs font-bold text-[var(--text-primary)] appearance-none cursor-pointer outline-none focus:border-pink-300"
            >
              {goals.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
          </div>
        </div>

        {/* SECTION 3: Lifestyle */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-1"><Activity size={12} /> Lifestyle</span>
          <div className="relative">
            <select 
              value={lifestyle}
              onChange={(e) => setLifestyle(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-950 text-xs font-bold text-[var(--text-primary)] appearance-none cursor-pointer outline-none focus:border-pink-300"
            >
              {lifestyles.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
          </div>
        </div>

        {/* SECTION 4: Budget */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-1"><Wallet size={12} /> Monthly Food Budget</span>
          <div className="relative">
            <select 
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-950 text-xs font-bold text-[var(--text-primary)] appearance-none cursor-pointer outline-none focus:border-pink-300"
            >
              {budgets.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3-COLUMN DASHBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Tracking & Progress */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* SECTION 8: Water Tracker */}
          <div className="glass-panel p-5 rounded-3xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/10 text-center">
            <h3 className="font-display font-extrabold text-sm flex justify-center items-center gap-1.5 mb-1 text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Droplet size={14} /> Daily Hydration Goal
            </h3>
            <p className="text-xs font-bold text-[var(--text-secondary)] mb-4">Tap to add a glass</p>
            
            <button 
              onClick={() => setWaterCount(Math.min(8, waterCount + 1))}
              className="relative w-32 h-40 mx-auto rounded-b-2xl rounded-t-lg border-4 border-white dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 overflow-hidden cursor-pointer shadow-inner transform transition-transform active:scale-95"
            >
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-blue-400 transition-all duration-500 ease-in-out"
                style={{ height: `${(waterCount / 8) * 100}%` }}
              >
                {/* Water Waves animation could go here */}
              </div>
              <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
                <span className="font-display font-black text-2xl text-white">{waterCount} / 8</span>
              </div>
            </button>
            <div className="mt-3 text-[10px] font-extrabold text-blue-800/60 dark:text-blue-300/60 uppercase tracking-wider">
              {Math.round((waterCount / 8) * 100)}% Completed
            </div>
          </div>

          {/* SECTION 7: Nutrition Dashboard */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
              <Apple className="w-4 h-4 text-emerald-500" /> Nutrition Dashboard
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Protein Intake', val: 80, color: 'bg-rose-500' },
                { label: 'Iron Intake', val: 90, color: 'bg-orange-500' },
                { label: 'Fiber Intake', val: 85, color: 'bg-emerald-500' },
                { label: 'Water Intake', val: (waterCount/8)*100, color: 'bg-blue-500' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="flex justify-between text-[10px] font-extrabold uppercase mb-1">
                    <span className="text-[var(--text-secondary)]">{stat.label}</span>
                    <span className="text-[var(--text-primary)]">{stat.val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full ${stat.color} rounded-full transition-all duration-1000`} style={{ width: `${stat.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 13: Wellness Streaks */}
          <div className="glass-panel p-5 rounded-3xl border border-orange-100 dark:border-orange-900/30 bg-orange-50/50 dark:bg-orange-950/10">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-1.5 mb-4 text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              <Flame size={14} /> Wellness Streak
            </h3>
            <div className="flex flex-col gap-3">
               <div className="flex items-center justify-between bg-white/60 dark:bg-zinc-900/60 p-2 rounded-xl">
                 <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-2"><Apple size={14} className="text-emerald-500"/> Diet Logged</span>
                 <span className="text-xs font-black text-orange-600">7 Days</span>
               </div>
               <div className="flex items-center justify-between bg-white/60 dark:bg-zinc-900/60 p-2 rounded-xl">
                 <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-2"><Droplet size={14} className="text-blue-500"/> Water Goal</span>
                 <span className="text-xs font-black text-orange-600">5 Days</span>
               </div>
               <div className="flex items-center justify-between bg-white/60 dark:bg-zinc-900/60 p-2 rounded-xl">
                 <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-2"><Activity size={14} className="text-purple-500"/> Yoga Sessions</span>
                 <span className="text-xs font-black text-orange-600">4 Days</span>
               </div>
            </div>
          </div>

          {/* SECTION 15: Weekly Progress Report */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-pink-500" /> This Week's Progress
            </h3>
            <div className="flex flex-col items-center justify-center mb-4">
              <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase">Overall Wellness Progress</p>
              <p className="text-2xl font-black text-pink-500">88/100</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-bold text-[var(--text-primary)]"><span>Diet Score:</span> <span className="text-emerald-500">85%</span></div>
              <div className="flex justify-between text-xs font-bold text-[var(--text-primary)]"><span>Yoga Completion:</span> <span className="text-purple-500">75%</span></div>
              <div className="flex justify-between text-xs font-bold text-[var(--text-primary)]"><span>Hydration:</span> <span className="text-blue-500">90%</span></div>
            </div>
          </div>

        </div>

        {/* CENTER COLUMN: The AI Plan */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* SECTION 14: AI Recommendations */}
          <div className="glass-panel p-5 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/50 dark:bg-indigo-950/20 shadow-sm">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-1.5 mb-3 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              🤖 Sakhi Recommendation
            </h3>
            <p className="text-xs font-semibold text-[var(--text-primary)] mb-3">Based on your recent logs and {goal} goals:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-start gap-2 bg-white/60 dark:bg-zinc-900/60 p-2 rounded-lg">
                <CheckCircle2 size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-[11px] font-bold text-[var(--text-primary)]">Increase iron-rich foods</span>
              </div>
              <div className="flex items-start gap-2 bg-white/60 dark:bg-zinc-900/60 p-2 rounded-lg">
                <CheckCircle2 size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-[11px] font-bold text-[var(--text-primary)]">Add pomegranate daily</span>
              </div>
              <div className="flex items-start gap-2 bg-white/60 dark:bg-zinc-900/60 p-2 rounded-lg">
                <CheckCircle2 size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-[11px] font-bold text-[var(--text-primary)]">Sleep before 11 PM</span>
              </div>
              <div className="flex items-start gap-2 bg-white/60 dark:bg-zinc-900/60 p-2 rounded-lg">
                <CheckCircle2 size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-[11px] font-bold text-[var(--text-primary)]">15-minute morning yoga</span>
              </div>
            </div>
          </div>

          {/* SECTION 9: Cycle-Based Nutrition */}
          <div className="glass-panel p-5 rounded-3xl border border-pink-100 dark:border-pink-900/30 bg-white dark:bg-zinc-900">
             <div className="flex justify-between items-center mb-3">
               <h3 className="font-display font-extrabold text-sm text-[var(--text-primary)] uppercase tracking-wider">Cycle-Based Nutrition</h3>
               <span className="text-[10px] font-bold bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-2 py-1 rounded-md">Ovulation Phase</span>
             </div>
             <p className="text-xs font-semibold text-[var(--text-secondary)] mb-3">Estrogen is peaking. Support your body with:</p>
             <div className="flex flex-wrap gap-2 mb-3">
               <span className="text-xs font-bold text-[var(--text-primary)] bg-gray-50 dark:bg-zinc-800 px-3 py-1.5 rounded-full border border-gray-100 dark:border-zinc-700">✓ Lean Protein</span>
               <span className="text-xs font-bold text-[var(--text-primary)] bg-gray-50 dark:bg-zinc-800 px-3 py-1.5 rounded-full border border-gray-100 dark:border-zinc-700">✓ Healthy Fats</span>
               <span className="text-xs font-bold text-[var(--text-primary)] bg-gray-50 dark:bg-zinc-800 px-3 py-1.5 rounded-full border border-gray-100 dark:border-zinc-700">✓ Fresh Fruits</span>
             </div>
             <p className="text-[11px] font-medium text-[var(--text-secondary)] bg-gray-50 dark:bg-zinc-950 p-3 rounded-xl">
               <strong className="text-[var(--text-primary)]">Why?</strong> These foods help metabolize excess estrogen, preventing hormonal acne and mood swings while keeping your energy levels stable.
             </p>
          </div>

          {/* SECTION 5: AI Meal Planner */}
          <div className="glass-panel flex-1 p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-extrabold text-sm flex items-center gap-2 text-[var(--text-primary)] uppercase tracking-wider">
                <Apple className="w-4 h-4 text-emerald-500" /> AI Meal Planner
              </h3>
              <span className="text-[10px] font-bold text-[var(--text-secondary)]">Optimized for {lifestyle}</span>
            </div>
            
            <div className="flex flex-col gap-4">
              {meals.map((meal, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-zinc-950/50 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">{meal.type}</span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mt-0.5">{meal.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">{meal.cals} kcal</span>
                      <p className="text-[9px] font-bold text-[var(--text-secondary)] mt-0.5">{meal.macros}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-zinc-800">
                    <p className="text-[11px] font-medium text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Why this meal?</strong> {meal.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Fitness & Shopping */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* SECTION 6: Smart Grocery List & SECTION 4 (Budget Info) */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-sm flex justify-between items-center mb-4 text-[var(--text-primary)] uppercase tracking-wider">
              <span className="flex items-center gap-2"><ShoppingCart className="w-4 h-4 text-blue-500" /> Grocery List</span>
            </h3>
            
            {/* Budget Info injected here */}
            <div className="flex justify-between items-center bg-blue-50 dark:bg-blue-950/20 p-2.5 rounded-xl mb-4 border border-blue-100 dark:border-blue-900/30">
              <div>
                <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block">Est. Weekly Cost</span>
                <span className="text-xs font-black text-[var(--text-primary)]">₹850</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase block">Remaining Budget</span>
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">{budget}</span>
              </div>
            </div>

            <ul className="flex flex-col gap-2 mb-4">
              {groceries.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] bg-gray-50 dark:bg-zinc-950/50 p-2 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-zinc-700">
                  <CheckCircle2 size={14} className="text-blue-400" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white dark:bg-zinc-900 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 py-2.5 rounded-xl text-xs font-bold flex justify-center items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors shadow-sm cursor-pointer group">
              <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" /> Download List
            </button>
          </div>

          {/* SECTION 11: Workout Intensity Guide */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-3 text-[var(--text-primary)] uppercase tracking-wider">
               <Activity className="w-4 h-4 text-purple-500" /> Workout Intensity
             </h3>
             <div className="mb-3">
               <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase block mb-1">Recommended for Ovulation:</span>
               <span className="text-xs font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-md">🟢 Moderate to High</span>
             </div>
             <div className="flex flex-wrap gap-1.5">
               <span className="text-[10px] font-bold bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md">✓ Walking</span>
               <span className="text-[10px] font-bold bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md">✓ Power Yoga</span>
               <span className="text-[10px] font-bold bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md">✓ Strength Training</span>
             </div>
          </div>

          {/* SECTION 10: Yoga Recommendation Center */}
          <div className="glass-panel p-5 rounded-3xl border border-purple-100 dark:border-purple-900/30 bg-purple-50/30 dark:bg-purple-950/10">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-3 text-purple-700 dark:text-purple-400 uppercase tracking-wider">
               🧘 Recommended Yoga
             </h3>
             <p className="text-[10px] font-semibold text-[var(--text-secondary)] mb-3">Based on Cycle Phase & Goal</p>
             <ul className="flex flex-col gap-2">
               <li className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]"><CheckCircle2 size={14} className="text-purple-500" /> Child Pose</li>
               <li className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]"><CheckCircle2 size={14} className="text-purple-500" /> Butterfly Pose</li>
               <li className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]"><CheckCircle2 size={14} className="text-purple-500" /> Cat-Cow Stretch</li>
               <li className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]"><CheckCircle2 size={14} className="text-purple-500" /> Cobra Pose</li>
             </ul>
          </div>

          {/* SECTION 12: Video Learning Section */}
          <div className="glass-panel p-5 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
             <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-[var(--text-primary)] uppercase tracking-wider">
               🎥 Video Sessions
             </h3>
             <div className="flex flex-col gap-3">
               <div className="relative rounded-xl overflow-hidden group cursor-pointer border border-gray-200 dark:border-zinc-700">
                 <div className="h-20 bg-gray-200 dark:bg-zinc-800 w-full flex items-center justify-center">
                   <PlayCircle className="text-white opacity-80 w-8 h-8 group-hover:scale-110 transition-transform" />
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2">
                   <p className="text-[10px] font-bold text-white">Morning Stretch</p>
                 </div>
               </div>
               <div className="relative rounded-xl overflow-hidden group cursor-pointer border border-gray-200 dark:border-zinc-700">
                 <div className="h-20 bg-gray-200 dark:bg-zinc-800 w-full flex items-center justify-center">
                   <PlayCircle className="text-white opacity-80 w-8 h-8 group-hover:scale-110 transition-transform" />
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2">
                   <p className="text-[10px] font-bold text-white">Period Pain Relief Yoga</p>
                 </div>
               </div>
             </div>
          </div>

          {/* SECTION 16: Wellness Challenges */}
          <div className="glass-panel p-5 rounded-3xl border border-yellow-100 dark:border-yellow-900/30 bg-yellow-50/50 dark:bg-yellow-950/10">
            <h3 className="font-display font-extrabold text-sm flex items-center gap-1.5 mb-3 text-yellow-700 dark:text-yellow-500 uppercase tracking-wider">
              🏆 Active Challenges
            </h3>
            <div className="flex flex-col gap-2">
              <div className="bg-white/60 dark:bg-zinc-900/60 p-2 rounded-lg border border-yellow-200/50 dark:border-yellow-900/30">
                <p className="text-[11px] font-bold text-[var(--text-primary)]">7-Day Hydration Challenge</p>
                <div className="h-1 w-full bg-gray-200 dark:bg-zinc-800 rounded-full mt-2"><div className="h-full bg-yellow-500 rounded-full w-[70%]"></div></div>
              </div>
              <div className="bg-white/60 dark:bg-zinc-900/60 p-2 rounded-lg border border-yellow-200/50 dark:border-yellow-900/30">
                <p className="text-[11px] font-bold text-[var(--text-primary)]">30-Day Yoga Challenge</p>
                <div className="h-1 w-full bg-gray-200 dark:bg-zinc-800 rounded-full mt-2"><div className="h-full bg-yellow-500 rounded-full w-[15%]"></div></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
