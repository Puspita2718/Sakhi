import React from 'react';

export default function AboutPage() {
  return (
    <div className="slide-in flex flex-col gap-16 animate-fade-in">
      <div className="glass-panel p-12 rounded-3xl bg-gradient-to-tr from-purple-50/50 to-pink-50/50 dark:from-zinc-900/40 dark:to-zinc-950/40 text-center flex flex-col items-center gap-4">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">Our Intimate Vision</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed text-sm font-semibold">
          SAKHI operates to digitize intimate biological tracking variables and clinical access, enabling comprehensive healthcare awareness for girls and women globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-left">
          <span className="text-[10px] uppercase font-bold text-feminine-pink tracking-widest bg-feminine-pink/10 px-3 py-1 rounded-full w-fit">Company Story</span>
          <h2 className="font-display text-2xl font-extrabold text-[var(--text-primary)]">How SAKHI Began</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-semibold">
            Founded in 2026, SAKHI emerged from a shared biological vision: clinical period cycle logging and customized nutritional programs should be easily accessible to everyone. We compiled modern OpenAI prompt diagnostics with HIPAA security blueprints to construct a comprehensive wellness ecosystem.
          </p>
        </div>
        <div className="glass-panel p-8 rounded-2xl flex flex-col gap-6 bg-feminine-lavender/30 dark:bg-zinc-900/30 text-left">
          <div className="flex gap-4">
            <div className="h-10 w-10 shrink-0 rounded-full bg-feminine-pink/15 text-feminine-pink flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-display font-extrabold text-[var(--text-primary)] mb-1">Our Mission</h4>
              <p className="text-xs text-[var(--text-secondary)] font-semibold">Democratize clinical biological insight analysis via cognitive computing checks.</p>
            </div>
          </div>
          <div className="flex gap-4 border-t border-gray-200/50 dark:border-zinc-800/50 pt-6">
            <div className="h-10 w-10 shrink-0 rounded-full bg-feminine-purple/15 text-feminine-purple flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-display font-extrabold text-[var(--text-primary)] mb-1">Our Vision</h4>
              <p className="text-xs text-[var(--text-secondary)] font-semibold">Secure end-to-end Signal double-ratchet encryption consultations for every patient worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
