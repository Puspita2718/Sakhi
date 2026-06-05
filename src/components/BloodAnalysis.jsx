import React, { useState } from 'react';
import { 
  Droplet, Upload, Camera, Activity, AlertTriangle, 
  HelpCircle, Heart, Download, CheckCircle2, ChevronDown, ChevronRight, Apple, TrendingUp, Info
} from 'lucide-react';

export default function BloodAnalysis({ language = 'en' }) {
  const [isUploading, setIsUploading] = useState(false);
  const [hasUploaded, setHasUploaded] = useState(false);
  
  const [selectedFlow, setSelectedFlow] = useState('Moderate');
  const [selectedClot, setSelectedClot] = useState('None');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Original Blood Colors (Redesigned for Section 4)
  const bloodColors = [
    { name: 'Bright Red', hex: '#E11D48', meaning: 'Fresh blood flowing quickly from the uterus.', causes: 'Common during the start or heavy days of a period.', normal: 'Standard period flow in almost all cycles.', warning: 'If bleeding is extremely heavy or accompanied by severe pain.', severity: 'low' },
    { name: 'Dark Red / Purple', hex: '#881337', meaning: 'Older blood that has stayed in the uterus longer and oxidized slightly.', causes: 'Common after waking up, or at the middle/end of the flow cycle.', normal: 'Shedding older lining is a completely physiological cleaning process.', warning: 'Standard; no warning unless clots are larger than a quarter.', severity: 'low' },
    { name: 'Brown / Black', hex: '#451A03', meaning: 'Highly oxidized old blood that took a long time to exit the body.', causes: 'Usually seen in the very first spotting days or last tail-end period days.', normal: 'Completely normal. Represents late discharge.', warning: 'No medical concern unless foul-smelling or paired with continuous pelvic pain.', severity: 'low' },
    { name: 'Pink', hex: '#F472B6', meaning: 'Blood diluted with fertile cervical fluid or vaginal discharge.', causes: 'Low estrogen levels, ovulation spotting, or early pregnancy implantation.', normal: 'During ovulation windows or start of light cycles.', warning: 'If continuous, it might indicate low estrogen or hormonal imbalances.', severity: 'medium' },
    { name: 'Orange', hex: '#F97316', meaning: 'Blood mixed with cervical secretions, potentially indicating bacterial infection.', causes: 'Associated with vaginitis/cervical infections.', normal: 'Rarely normal; warrants verification.', warning: 'Seek checkup if paired with itching, burning during urination, or odor.', severity: 'high' },
    { name: 'Gray', hex: '#9CA3AF', meaning: 'A strong indicator of vaginal infections or potential pregnancy tissue passage.', causes: 'Bacterial Vaginosis (BV), or potential miscarriage tissue.', normal: 'Never normal. Warrants clinical checking.', warning: 'Seek immediate gynecological evaluation.', severity: 'high' }
  ];

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setHasUploaded(true);
    }, 2500);
  };

  const toggleSymptom = (sym) => {
    setSelectedSymptoms(prev => 
      prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]
    );
  };

  const symptomsList = ['Severe Cramps', 'Fatigue', 'Dizziness', 'Headache', 'Nausea', 'Heavy Bleeding'];
  const flows = ['Light', 'Moderate', 'Heavy', 'Very Heavy'];
  const clots = ['None', 'Small', 'Medium', 'Large'];

  // Conditional Logic for Doctor Alert
  const requiresDoctor = 
    selectedClot === 'Large' || 
    selectedSymptoms.includes('Severe Cramps') || 
    selectedSymptoms.includes('Heavy Bleeding') ||
    selectedSymptoms.includes('Dizziness');

  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in pb-12">
      
      {/* SECTION 1: Blood Health Summary */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-pink-100/50 dark:border-zinc-800 bg-gradient-to-r from-pink-50 to-white dark:from-zinc-900 dark:to-zinc-950 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/10 blur-3xl rounded-full"></div>
        <div className="z-10 flex-1 w-full">
           <h1 className="font-display text-2xl font-extrabold text-[var(--text-primary)] mb-6 flex items-center gap-2">
             <Droplet className="w-6 h-6 text-red-500 fill-red-500" /> Blood Health Summary
           </h1>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Last Analysis</span>
               <p className="text-xl font-black text-red-600 dark:text-red-400 mt-1">Bright Red</p>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Health Status</span>
               <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1">Normal</p>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Risk Level</span>
               <p className="text-xl font-black text-[var(--text-primary)] mt-1 flex items-center gap-2">
                 🟢 Low
               </p>
             </div>
             <div className="bg-white/60 dark:bg-zinc-800/60 p-4 rounded-2xl border border-white/40 dark:border-zinc-700/40">
               <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Last Updated</span>
               <p className="text-xl font-black text-[var(--text-primary)] mt-1 text-sm pt-1.5">Today, 09:41 AM</p>
             </div>
           </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-xl shadow-pink-100/50 dark:shadow-none border border-pink-50 dark:border-zinc-800 z-10 w-full md:w-auto">
          <p className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4 text-center">Blood Health Score</p>
          <div className="relative w-32 h-32 flex items-center justify-center">
             <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0">
               <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100 dark:text-zinc-800" />
               <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="339.29" strokeDashoffset={339.29 - (339.29 * 90) / 100} className="text-red-500 transition-all duration-1000 ease-out" />
             </svg>
             <div className="flex flex-col items-center z-10">
               <span className="font-display font-black text-3xl text-[var(--text-primary)]">90<span className="text-lg text-[var(--text-secondary)]">%</span></span>
             </div>
          </div>
        </div>
      </div>

      {/* CONDITIONAL DOCTOR ALERT (SECTION 13) */}
      {requiresDoctor && (
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-2xl p-6 flex items-start gap-4 animate-fade-in">
          <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-display font-extrabold text-red-600 dark:text-red-400 text-lg mb-1">⚠ Professional Consultation Recommended</h3>
            <p className="text-sm font-semibold text-red-800/80 dark:text-red-300/80 mb-4">
              Based on your selected symptoms and clot analysis, we recommend speaking with a healthcare provider. Heavy bleeding or large clots could indicate an underlying condition.
            </p>
            <div className="flex gap-3">
              <button className="bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-red-600 transition-colors shadow-sm cursor-pointer">
                Consult Doctor Now
              </button>
              <button className="bg-white dark:bg-zinc-900 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-xs font-bold hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors cursor-pointer">
                Emergency Support
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Upload, Flow, Clot, Symptoms, Diet */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* SECTION 2 & 3: Upload & AI Results */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 relative overflow-hidden bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-4">
              📸 Upload Period Blood Image
            </h3>
            
            {!hasUploaded && !isUploading && (
              <div 
                className="border-2 border-dashed border-gray-200 dark:border-zinc-700 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-pink-300 dark:hover:border-pink-800 transition-colors bg-gray-50 dark:bg-zinc-950/50 cursor-pointer group"
                onClick={handleUpload}
              >
                <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-pink-500" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-[var(--text-primary)]">Drag and drop your image here</p>
                  <p className="text-xs font-medium text-[var(--text-secondary)] mt-1">or click to browse from your device</p>
                </div>
                <div className="flex gap-3 mt-2">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-pink-600 transition-colors cursor-pointer">
                    <Upload size={14} /> Upload Image
                  </button>
                  <button className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-[var(--text-primary)] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors cursor-pointer">
                    <Camera size={14} /> Take Photo
                  </button>
                </div>
              </div>
            )}

            {isUploading && (
              <div className="border-2 border-dashed border-pink-200 dark:border-pink-900/50 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 bg-pink-50/50 dark:bg-pink-950/20">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-4 border-pink-200 dark:border-pink-900/50 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-pink-500 rounded-full border-t-transparent animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-pink-500 animate-pulse" />
                  </div>
                </div>
                <p className="font-bold text-[var(--text-primary)] animate-pulse text-sm">Analyzing blood pattern and color...</p>
              </div>
            )}

            {/* SECTION 3: Results */}
            {hasUploaded && !isUploading && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display font-extrabold text-sm text-[var(--text-primary)] text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 size={16} /> Analysis Complete
                  </h4>
                  <button onClick={() => setHasUploaded(false)} className="text-xs font-bold text-pink-500 hover:underline cursor-pointer">
                    Analyze Another
                  </button>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="bg-gray-50 dark:bg-zinc-950/50 p-3 rounded-xl border border-gray-100 dark:border-zinc-800">
                    <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Detected Color</span>
                    <p className="text-sm font-black text-red-600 mt-1">Bright Red</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-zinc-950/50 p-3 rounded-xl border border-gray-100 dark:border-zinc-800">
                    <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Confidence</span>
                    <p className="text-sm font-black text-[var(--text-primary)] mt-1">94%</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-zinc-950/50 p-3 rounded-xl border border-gray-100 dark:border-zinc-800">
                    <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Flow Type</span>
                    <p className="text-sm font-black text-[var(--text-primary)] mt-1">Moderate</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-zinc-950/50 p-3 rounded-xl border border-gray-100 dark:border-zinc-800">
                    <span className="text-[9px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">Clot Detection</span>
                    <p className="text-sm font-black text-[var(--text-primary)] mt-1">None</p>
                  </div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-emerald-800/60 dark:text-emerald-400/60 uppercase tracking-wider">Overall Assessment</span>
                    <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">Healthy Menstrual Flow</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* SECTION 7: Flow Tracking */}
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
              <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-4">
                Flow Level
              </h3>
              <div className="flex flex-col gap-2">
                {flows.map(f => (
                  <button 
                    key={f}
                    onClick={() => setSelectedFlow(f)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${selectedFlow === f ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400' : 'border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[var(--text-primary)] hover:border-pink-200'}`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedFlow === f ? 'border-pink-500' : 'border-gray-300 dark:border-zinc-600'}`}>
                      {selectedFlow === f && <div className="w-2 h-2 rounded-full bg-pink-500"></div>}
                    </div>
                    <span className="text-xs font-bold">{f}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider mb-2 block">Trend</span>
                <div className="h-10 w-full flex items-end gap-1">
                  {/* Mock Trend Chart */}
                  <div className="w-1/6 bg-pink-200 dark:bg-pink-900/40 h-1/4 rounded-t-sm"></div>
                  <div className="w-1/6 bg-pink-300 dark:bg-pink-900/60 h-2/4 rounded-t-sm"></div>
                  <div className="w-1/6 bg-pink-400 h-3/4 rounded-t-sm"></div>
                  <div className="w-1/6 bg-pink-500 h-full rounded-t-sm shadow-[0_0_8px_rgba(236,72,153,0.5)]"></div>
                  <div className="w-1/6 bg-pink-300 dark:bg-pink-900/60 h-2/4 rounded-t-sm"></div>
                  <div className="w-1/6 bg-pink-200 dark:bg-pink-900/40 h-1/4 rounded-t-sm"></div>
                </div>
              </div>
            </div>

            {/* SECTION 8: Clot Analysis */}
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
              <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-4">
                Blood Clots
              </h3>
              <div className="flex flex-col gap-2">
                {clots.map(c => (
                  <button 
                    key={c}
                    onClick={() => setSelectedClot(c)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${selectedClot === c ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400' : 'border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[var(--text-primary)] hover:border-purple-200'}`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedClot === c ? 'border-purple-500' : 'border-gray-300 dark:border-zinc-600'}`}>
                      {selectedClot === c && <div className="w-2 h-2 rounded-full bg-purple-500"></div>}
                    </div>
                    <span className="text-xs font-bold">{c}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider mb-2 block">Information</span>
                <p className="text-xs font-semibold text-[var(--text-secondary)] italic leading-relaxed h-10">
                  {selectedClot === 'None' && 'A smooth flow without clots is perfectly healthy.'}
                  {selectedClot === 'Small' && 'Small clots are usually normal during heavy flow days.'}
                  {selectedClot === 'Medium' && 'Medium clots can occur, monitor if accompanied by severe pain.'}
                  {selectedClot === 'Large' && 'Large frequent clots may require medical consultation.'}
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 9: Symptom Association */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-4">
              Select Today's Symptoms
            </h3>
            <div className="flex flex-wrap gap-2">
              {symptomsList.map(sym => {
                const active = selectedSymptoms.includes(sym);
                return (
                  <button
                    key={sym}
                    onClick={() => toggleSymptom(sym)}
                    className={`px-3 py-1.5 rounded-full border text-[11px] font-bold cursor-pointer transition-all hover:-translate-y-0.5 ${active ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 shadow-sm' : 'border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-950/50 text-[var(--text-primary)] hover:border-pink-300'}`}
                  >
                    {active && <span className="mr-1">✓</span>}
                    {sym}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 10 & 11: Diet & Wellness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
               <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400">
                  <Apple className="w-4 h-4" /> Recommended Foods
               </h3>
               <div className="flex flex-col gap-3">
                 {[
                   { name: 'Spinach', reason: 'High in iron to replenish blood loss.' },
                   { name: 'Beetroot', reason: 'Improves blood circulation and energy.' },
                   { name: 'Lentils', reason: 'Protein-rich, helps combat fatigue.' },
                   { name: 'Pomegranate', reason: 'Antioxidants and blood volume.' },
                   { name: 'Dates', reason: 'Natural sugar for energy and iron.' }
                 ].map(food => (
                   <div key={food.name} className="flex gap-3 items-start group">
                     <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                     <div>
                       <p className="text-xs font-bold text-[var(--text-primary)] group-hover:text-emerald-600 transition-colors">{food.name}</p>
                       <p className="text-[10px] font-semibold text-[var(--text-secondary)]">{food.reason}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
               <h3 className="font-display font-extrabold text-sm flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400">
                  🧘 Wellness Activities
               </h3>
               <div className="flex flex-col gap-3">
                 {[
                   { name: 'Child Pose', reason: 'Relieves lower back pain and cramps.' },
                   { name: 'Butterfly Pose', reason: 'Opens hips and reduces pelvic tension.' },
                   { name: 'Deep Breathing', reason: 'Calms the nervous system and reduces nausea.' }
                 ].map(pose => (
                   <div key={pose.name} className="flex gap-3 items-start group">
                     <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                     <div>
                       <p className="text-xs font-bold text-[var(--text-primary)] group-hover:text-indigo-600 transition-colors">{pose.name}</p>
                       <p className="text-[10px] font-semibold text-[var(--text-secondary)]">{pose.reason}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: AI Insights, Timeline, Risk, Reference, Report */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* SECTION 6: AI Health Insights */}
          <div className="glass-panel p-6 rounded-3xl border border-purple-100 dark:border-purple-900/30 bg-purple-50/50 dark:bg-purple-950/20 shadow-lg shadow-purple-100/30 dark:shadow-none">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-4 text-purple-700 dark:text-purple-400">
                🤖 Sakhi Blood Insights
             </h3>
             <ul className="flex flex-col gap-3">
               <li className="flex gap-3 text-xs font-semibold text-[var(--text-primary)] leading-relaxed bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white/40 dark:border-zinc-700/40 hover:-translate-y-1 transition-transform">
                 <span className="text-purple-500 mt-0.5">•</span>
                 Your blood color has remained consistent over the last 3 cycles.
               </li>
               <li className="flex gap-3 text-xs font-semibold text-[var(--text-primary)] leading-relaxed bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white/40 dark:border-zinc-700/40 hover:-translate-y-1 transition-transform">
                 <span className="text-purple-500 mt-0.5">•</span>
                 No unusual color variations detected.
               </li>
               <li className="flex gap-3 text-xs font-semibold text-[var(--text-primary)] leading-relaxed bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-white/40 dark:border-zinc-700/40 hover:-translate-y-1 transition-transform">
                 <span className="text-purple-500 mt-0.5">•</span>
                 Flow patterns appear normal and match your expected cycle length.
               </li>
             </ul>
          </div>

          {/* SECTION 12: Risk Monitoring */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-5">
                Health Monitoring
             </h3>
             <div className="flex flex-col gap-4">
               <div className="flex items-center justify-between bg-gray-50 dark:bg-zinc-950/50 p-2.5 rounded-xl border border-gray-100 dark:border-zinc-800">
                 <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                   <span className="text-xs font-bold text-[var(--text-primary)]">Iron Deficiency Risk</span>
                 </div>
                 <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">Low</span>
               </div>
               <div className="flex items-center justify-between bg-gray-50 dark:bg-zinc-950/50 p-2.5 rounded-xl border border-gray-100 dark:border-zinc-800">
                 <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                   <span className="text-xs font-bold text-[var(--text-primary)]">Hydration Status</span>
                 </div>
                 <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">Good</span>
               </div>
               <div className="flex items-center justify-between bg-gray-50 dark:bg-zinc-950/50 p-2.5 rounded-xl border border-gray-100 dark:border-zinc-800">
                 <div className="flex items-center gap-3">
                   <div className={`w-2.5 h-2.5 rounded-full ${selectedFlow === 'Very Heavy' ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'}`}></div>
                   <span className="text-xs font-bold text-[var(--text-primary)]">Flow Pattern</span>
                 </div>
                 <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${selectedFlow === 'Very Heavy' ? 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/30' : 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30'}`}>
                   {selectedFlow === 'Very Heavy' ? 'Monitor' : 'Normal'}
                 </span>
               </div>
             </div>
          </div>

          {/* SECTION 5: Blood Color History */}
          <div className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
             <h3 className="font-display font-extrabold text-base flex items-center gap-2 mb-5">
                <TrendingUp className="w-4 h-4 text-pink-500" /> Previous Analyses
             </h3>
             <div className="relative border-l-2 border-gray-200 dark:border-zinc-700 ml-3 flex flex-col gap-6">
                <div className="relative pl-5">
                  <div className="absolute w-3 h-3 bg-[#E11D48] rounded-full -left-[7px] top-1 ring-4 ring-white dark:ring-zinc-900 shadow-sm"></div>
                  <p className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">May</p>
                  <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">Bright Red</p>
                </div>
                <div className="relative pl-5">
                  <div className="absolute w-3 h-3 bg-[#881337] rounded-full -left-[7px] top-1"></div>
                  <p className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">April</p>
                  <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">Dark Red</p>
                </div>
                <div className="relative pl-5 pb-2">
                  <div className="absolute w-3 h-3 bg-[#451A03] rounded-full -left-[7px] top-1"></div>
                  <p className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">March</p>
                  <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">Brown</p>
                </div>
             </div>
          </div>

          {/* SECTION 15: Monthly Report */}
          <div className="glass-panel p-6 rounded-3xl border border-pink-200 dark:border-pink-900/50 bg-pink-50/30 dark:bg-pink-950/10">
             <h3 className="font-display font-extrabold text-base mb-2 text-[var(--text-primary)]">
                Monthly Blood Health Report
             </h3>
             <p className="text-xs font-medium text-[var(--text-secondary)] mb-4">
                Contains Blood Health Score, Flow Patterns, Color Trends, and Symptoms Logged.
             </p>
             <button className="w-full bg-white dark:bg-zinc-900 border border-pink-200 dark:border-pink-900/50 text-pink-600 dark:text-pink-400 py-3 rounded-xl text-xs font-bold flex justify-center items-center gap-2 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors shadow-sm cursor-pointer group">
               <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" /> Download Report
             </button>
          </div>

        </div>
      </div>

      {/* SECTION 4: Blood Color Reference Guide */}
      <div className="mt-4">
        <h2 className="font-display font-extrabold text-xl text-[var(--text-primary)] mb-6 flex items-center gap-2">
          Blood Color Reference Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bloodColors.map((color, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 flex flex-col gap-4 hover:-translate-y-1 transition-transform group">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full shadow-lg border-4 border-white dark:border-zinc-800 shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: color.hex, boxShadow: `0 4px 15px ${color.hex}40` }}
                ></div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm">{color.name}</h3>
                  <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1 inline-block ${color.severity === 'low' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400' : color.severity === 'medium' ? 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950/30 dark:text-yellow-400' : 'bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400'}`}>
                    {color.severity === 'low' ? 'Normal Clinical Status' : color.severity === 'medium' ? 'Hormonal Variations' : 'Evaluation Recommended'}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-2 border-t border-gray-100 dark:border-zinc-800 pt-4">
                <div>
                  <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-1">Meaning</span>
                  <p className="text-xs font-medium text-[var(--text-primary)] leading-relaxed">{color.meaning}</p>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider block mb-1">Common Causes</span>
                  <p className="text-xs font-medium text-[var(--text-primary)] leading-relaxed">{color.causes}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-2 h-full">
                  <div className="bg-emerald-50/50 dark:bg-emerald-950/10 p-2.5 rounded-xl border border-emerald-100/50 dark:border-emerald-900/20 flex flex-col h-full">
                    <span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider block mb-1">When Normal</span>
                    <p className="text-[10px] font-medium text-[var(--text-primary)]">{color.normal}</p>
                  </div>
                  <div className="bg-red-50/50 dark:bg-red-950/10 p-2.5 rounded-xl border border-red-100/50 dark:border-red-900/20 flex flex-col h-full">
                    <span className="text-[9px] font-extrabold text-red-600 uppercase tracking-wider block mb-1">When to Consult</span>
                    <p className="text-[10px] font-medium text-[var(--text-primary)]">{color.warning}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 14: Educational Center (FAQs) */}
      <div className="mt-4">
        <h2 className="font-display font-extrabold text-xl text-[var(--text-primary)] mb-6 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-500" /> Understanding Blood Colors
        </h2>
        <div className="flex flex-col gap-3">
          {bloodColors.slice(0, 4).map((color, idx) => (
            <div key={idx} className="glass-panel border border-gray-100 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900">
              <button 
                className="w-full p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <span className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color.hex }}></div>
                  What does {color.name} blood mean?
                </span>
                <ChevronDown className={`w-4 h-4 text-[var(--text-secondary)] transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {expandedFaq === idx && (
                <div className="p-4 pt-0 border-t border-gray-50 dark:border-zinc-800/50 bg-gray-50/50 dark:bg-zinc-950/30 text-xs font-medium text-[var(--text-primary)] leading-relaxed animate-fade-in">
                  <p className="mb-2"><strong className="text-[var(--text-secondary)] font-bold">Overview:</strong> {color.meaning}</p>
                  <p className="mb-2"><strong className="text-[var(--text-secondary)] font-bold">Why it happens:</strong> {color.causes}</p>
                  <p><strong className="text-[var(--text-secondary)] font-bold">Is it normal?</strong> {color.normal} However, {color.warning.toLowerCase()}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
