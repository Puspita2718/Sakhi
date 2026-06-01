import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = ['all', 'period_health', 'pcos', 'hygiene', 'nutrition', 'mental_health', 'pregnancy'];

  const articles = [
    { title: 'Understanding Spearmint Tea and PCOS Hirsutism', desc: 'Clinical bio-analysis shows Spearmint acts as an organic anti-androgen, reducing androgen levels significantly...', category: 'pcos', date: 'Oct 20, 2026' },
    { title: 'The Estrogen-Progesterone Ratio in Mood Swings', desc: 'Why menstrual phases affect neurological variables and serotonin levels, and how light exercise balances mood scores.', category: 'mental_health', date: 'Oct 15, 2026' },
    { title: 'Organic Menstrual Cups vs Bleached Cotton Tampons', desc: 'A full comparative guide evaluating safety ratings, dynamic chemical bleach risks, and sustainability factors.', category: 'hygiene', date: 'Oct 11, 2026' },
    { title: 'Iron Absorption: Vitamin C Enhancers for Anemia', desc: 'Logging low energy? Combine plant-based iron dishes with citrus fruits to boost cellular iron capacity.', category: 'nutrition', date: 'Oct 05, 2026' }
  ];

  const filtered = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || art.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'all' || art.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="slide-in flex flex-col gap-12 animate-fade-in">
      
      {/* Search Header */}
      <div className="glass-panel p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-[var(--text-primary)] mb-1">Health & Educational Library</h1>
          <p className="text-xs text-[var(--text-secondary)] font-extrabold">Validated research articles written by certified gynecologists.</p>
        </div>
        
        {/* Interactive Search Box */}
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-feminine-pink/80" />
          <input 
            type="text"
            placeholder="Search symptoms, PCOS, etc..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 text-xs outline-none focus:border-feminine-pink transition-colors dark:text-zinc-200 font-semibold"
          />
        </div>
      </div>

      {/* Category selection */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 scroll-smooth">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`rounded-full px-5 py-2 text-xs font-bold border transition-all shrink-0 capitalize cursor-pointer ${selectedCat === cat ? 'bg-feminine-pink text-white border-feminine-pink shadow-md' : 'bg-white dark:bg-zinc-900 text-[var(--text-secondary)] border-gray-200/50 dark:border-zinc-800 hover:border-feminine-pink'}`}
          >
            {cat.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {filtered.length === 0 ? (
          <div className="col-span-2 text-center py-16 text-[var(--text-secondary)] font-bold">
            No articles match your parameters.
          </div>
        ) : (
          filtered.map((art, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-gray-150/40 dark:border-zinc-800/40 flex flex-col gap-4">
              <span className="text-[10px] font-extrabold text-feminine-purple uppercase tracking-wider">{art.category.replace('_', ' ')}</span>
              <div>
                <h3 className="font-display font-extrabold text-lg text-[var(--text-primary)] mb-2 leading-snug">{art.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-normal font-semibold">{art.desc}</p>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 dark:border-zinc-850 pt-4 mt-auto text-xs text-[var(--text-secondary)] font-bold">
                <span>📅 {art.date}</span>
                <span className="text-feminine-pink font-extrabold flex items-center gap-1 cursor-pointer hover:underline">
                  Read Article <ChevronRight size={14} />
                </span>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
