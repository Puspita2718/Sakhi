import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function ProfilePage({ user, setUser }) {
  const [firstName, setFirstName] = useState(user?.firstName || 'Ananya');
  const [lastName, setLastName] = useState(user?.lastName || 'Sharma');
  const [email, setEmail] = useState(user?.email || 'ananya@example.com');
  const [age, setAge] = useState(user?.age || '25');
  const [cycleLength, setCycleLength] = useState(user?.cycleLength || '28');
  const [sleepTarget, setSleepTarget] = useState(user?.sleepTarget || '8');
  const [waterTarget, setWaterTarget] = useState(user?.waterTarget || '2.5');
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setUser(prev => ({
      ...prev,
      firstName,
      lastName,
      email,
      age: parseInt(age) || 25,
      cycleLength: parseInt(cycleLength) || 28,
      sleepTarget: parseInt(sleepTarget) || 8,
      waterTarget: parseFloat(waterTarget) || 2.5
    }));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="slide-in flex flex-col gap-8 text-left max-w-4xl mx-auto animate-fade-in">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
          My Health Profile
        </h1>
        <p className="text-xs text-[var(--text-secondary)] font-extrabold uppercase tracking-wider mt-1">
          Manage your biological details, tracking parameters, and active care plan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Summary Card */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-150/30 flex flex-col items-center text-center gap-4 shadow-xs">
            {/* Circular Avatar */}
            <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white flex items-center justify-center font-extrabold text-3xl shadow-xl border-4 border-white dark:border-zinc-800 relative">
              {firstName[0]}
              <span className="absolute bottom-1 right-1 h-4.5 w-4.5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-800" title="Online Session"></span>
            </div>
            
            <div>
              <h3 className="font-display font-extrabold text-base text-[var(--text-primary)]">
                {firstName} {lastName}
              </h3>
              <span className="text-xs text-[var(--text-secondary)] font-bold block mt-0.5">{email}</span>
            </div>

            {/* Active Subscription badge */}
            <div className="w-full bg-feminine-pink/10 border border-feminine-pink/20 rounded-2xl py-3 px-4 flex flex-col gap-1 mt-2">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-feminine-pink">Care Subscription</span>
              <strong className="text-xs text-[var(--text-primary)]">{user?.subscriptionPlan === 'premium' ? 'Premium Pass' : 'SAKHI Premium Pass'}</strong>
              <span className="text-[10px] text-[var(--text-secondary)]">Renews on Nov 24, 2026</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editing Form */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <form onSubmit={handleSave} className="glass-panel p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-150/30 flex flex-col gap-6">
            <h3 className="font-display font-extrabold text-lg border-b border-gray-100 dark:border-zinc-800 pb-3 dark:text-white">
              Personal Information
            </h3>

            {saved && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-250 text-emerald-600 font-bold text-xs flex items-center gap-2 animate-fade-in">
                ✓ Clinical records updated successfully.
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">First Name</span>
                <input 
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">Last Name</span>
                <input 
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-left">
              <span className="font-bold text-[var(--text-secondary)]">Email Address</span>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold"
                required
              />
            </div>

            <h3 className="font-display font-extrabold text-lg border-b border-gray-100 dark:border-zinc-800 pt-2 pb-3 dark:text-white">
              Biological & Health Parameters
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">Biological Age</span>
                <input 
                  type="number" 
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">Cycle Duration (Days)</span>
                <input 
                  type="number" 
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">Daily Sleep Target (Hours)</span>
                <input 
                  type="number" 
                  value={sleepTarget}
                  onChange={(e) => setSleepTarget(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">Hydration Target (Liters)</span>
                <input 
                  type="number" 
                  step="0.1"
                  value={waterTarget}
                  onChange={(e) => setWaterTarget(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold"
                  required
                />
              </div>
            </div>

            <button type="submit" className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple py-3.5 text-xs font-bold text-white shadow-lg cursor-pointer hover:opacity-95 active:scale-98 transition-all">
              Save Parameters
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
