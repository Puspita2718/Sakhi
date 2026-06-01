import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Droplet, 
  ShieldCheck, 
  Activity, 
  Utensils, 
  Smile, 
  Users, 
  MessageSquare, 
  ChevronRight, 
  HelpCircle, 
  ArrowRight,
  Search,
  Mail,
  Phone,
  MapPin,
  Lock,
  User,
  Key,
  CheckCircle2,
  Calendar,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

// =================== 1. HOME VIEW ===================
export function HomePage({ setPage, setTab, language, setUser }) {
  const handleAutoLogin = () => {
    setUser({
      firstName: 'Ananya',
      lastName: 'Sharma',
      email: 'ananya@example.com',
      isAdmin: true,
      subscriptionPlan: 'standard'
    });
    setPage('dashboard');
  };

  const conditions = [
    { title: 'PCOS Management', image: '/pcos_flowers.png' },
    { title: 'Endometriosis Care', image: '/endometriosis_vases.png' },
    { title: 'UTI & Pelvic Health', image: '/pelvic_spiral.png' },
    { title: 'Pregnancy Journey', image: '/pregnancy_belly.png' }
  ];

  const appFeatures = [
    {
      title: 'Cycle Tracker & Loggers',
      desc: 'Predict ovulation, track menstrual phases, and log biological symptoms daily for full timeline awareness.',
      icon: '📅',
      badge: 'Interactive',
      color: 'hsl(340, 75%, 45%)',
      bg: 'var(--primary-light)'
    },
    {
      title: 'Blood Color Analyzer',
      desc: 'Analyze menstrual flow colors to understand oxygen levels, hormonal balances, and get immediate clinical alerts.',
      icon: '🩸',
      badge: 'Clinical Tool',
      color: 'hsl(355, 90%, 45%)',
      bg: 'rgba(230, 50, 120, 0.08)'
    },
    {
      title: 'My Health Chat (AI Assistant)',
      desc: 'Get immediate clinical symptom insights and lifestyle guidelines using our secure conversational AI doctor.',
      icon: '✨',
      badge: 'AI Powered',
      color: 'hsl(285, 20%, 30%)',
      bg: 'var(--secondary-light)'
    },
    {
      title: 'Custom Diet & Yoga Planners',
      desc: 'Generate low-GI PCOS diets, cost-saving local ingredient swaps, and guided yoga routines to ease period cramps.',
      icon: '🥗',
      badge: 'Personalized',
      color: 'hsl(150, 60%, 45%)',
      bg: 'var(--success-light)'
    },
    {
      title: 'Zen Breathing Sphere',
      desc: 'Lower cortisol and PMS stress using our animated deep breathing helper, anxiety assessments, and positive logs.',
      icon: '🧘‍♀️',
      badge: 'Mindfulness',
      color: 'hsl(275, 65%, 92%)',
      bg: 'var(--accent-lavender)'
    },
    {
      title: 'Safe-Space Community',
      desc: 'Share stories, join peer groups, and consult qualified healthcare specialists anonymously in moderated forums.',
      icon: '👥',
      badge: 'Moderated',
      color: 'hsl(200, 75%, 45%)',
      bg: 'rgba(200, 30, 86, 0.04)'
    }
  ];

  const masterclasses = [
    {
      title: 'Decoding Your Hormonal Cycle',
      desc: 'Understand the four phases of your cycle and how to sync your lifestyle for peak wellness.',
      author: 'Dr. Kavita Iyer',
      role: 'Senior Endocrinologist',
      duration: '18:24',
      bgGradient: 'from-pink-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800'
    },
    {
      title: 'The Future of Fertility Tracking',
      desc: 'How predictive data and AI are revolutionizing the conception plan for their future families.',
      author: 'Dr. Sameer Verma',
      role: 'Reproductive Specialist',
      duration: '12:15',
      bgGradient: 'from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800'
    },
    {
      title: 'Nutritional Therapy: Anti-Inflammatory Diet',
      desc: 'Customizing your food intake to manage endometriosis symptoms and reduce stress.',
      author: 'Dr. Hana Patel',
      role: 'Nutrition & Behavioral Lead',
      duration: '22:10',
      bgGradient: 'from-amber-50 to-rose-50 dark:from-zinc-900 dark:to-zinc-800'
    }
  ];

  return (
    <div className="flex flex-col gap-20">
      
      {/* 1. HERO SECTION (Photo 1 Banner) */}
      <section className="relative overflow-hidden rounded-3xl bg-zinc-950 text-white min-h-[500px] flex items-center">
        {/* Background Image of Dr. Ananya Sharma */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
          style={{ backgroundImage: `url('/hero_doctor.png')` }}
        ></div>
        
        {/* Soft dark-gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl px-8 py-16 sm:px-12 flex flex-col gap-6 items-start text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-feminine-pink/20 border border-feminine-pink/40 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-pink-300">
            ★ Featured Topic
          </span>
          
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Understanding PCOS: A 360° Precision Care Guide
          </h1>
          
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
            Deep dive into the science of hormone regulation with Dr. Ananya Sharma. Learn about tailored nutrition, lifestyle pivots, and clinical management.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
            <button 
              onClick={handleAutoLogin}
              className="rounded-full bg-feminine-pink hover:bg-feminine-pink/90 px-6 py-3 text-xs font-bold text-white shadow-lg active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              ▶ Start Reading
            </button>
            <button 
              onClick={handleAutoLogin}
              className="rounded-full border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 text-xs font-bold text-white active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              ↺ More Topics
            </button>
          </div>
        </div>
      </section>

      {/* 2. YOUR HEALTH CONDITIONS SECTION */}
      <section className="flex flex-col gap-6 animate-fade-in">
        <div className="flex justify-between items-end border-b border-gray-100 dark:border-zinc-900 pb-4">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
            Your Health Conditions
          </h2>
          <button 
            onClick={handleAutoLogin}
            className="text-xs font-bold text-feminine-pink hover:underline flex items-center gap-1 cursor-pointer"
          >
            Explore all &gt;
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((cond, index) => (
            <div 
              key={index}
              onClick={handleAutoLogin}
              className="group cursor-pointer flex flex-col gap-3"
            >
              {/* Photo Area */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 dark:border-zinc-900 dark:bg-zinc-900 shadow-sm relative">
                <img 
                  src={cond.image} 
                  alt={cond.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              {/* Title Area */}
              <h3 className="font-display font-extrabold text-sm text-[var(--text-primary)] text-left px-1 group-hover:text-feminine-pink transition-colors">
                {cond.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 CORE PLATFORM FEATURES SHOWCASE */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 text-left border-b border-gray-100 dark:border-zinc-900 pb-4">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
            Core Interactive Offerings
          </h2>
          <p className="text-xs text-[var(--text-secondary)] font-extrabold">
            Democratizing clinical women's healthcare through personalized analytics, security, and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appFeatures.map((feat, idx) => (
            <div 
              key={idx} 
              onClick={handleAutoLogin}
              className="glass-panel p-6 rounded-2xl flex flex-col items-start text-left gap-4 group cursor-pointer hover:-translate-y-1 transition-all border border-gray-100 dark:border-zinc-900"
            >
              {/* Feature Icon Container */}
              <div 
                className="h-12 w-12 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: feat.bg, color: feat.color }}
              >
                {feat.icon}
              </div>

              {/* Header Title & Pill */}
              <div className="flex flex-col gap-1.5 w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-display font-extrabold text-sm text-[var(--text-primary)] group-hover:text-feminine-pink transition-colors">
                    {feat.title}
                  </h3>
                  <span 
                    className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: feat.bg, color: feat.color }}
                  >
                    {feat.badge}
                  </span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] leading-normal">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERT MASTERCLASSES SECTION */}
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-gray-100 dark:border-zinc-900 pb-4">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
              Expert Masterclasses
            </h2>
            <p className="text-xs text-[var(--text-secondary)] font-extrabold mt-1">
              Premium video series from India's leading gynecologists.
            </p>
          </div>
          <button 
            onClick={handleAutoLogin}
            className="rounded-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-[10px] font-extrabold tracking-wider text-[var(--text-primary)] px-5 py-2.5 shadow-xs cursor-pointer uppercase"
          >
            View All Series
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masterclasses.map((cls, index) => (
            <div 
              key={index}
              onClick={handleAutoLogin}
              className="glass-panel rounded-2xl border border-gray-100 dark:border-zinc-900 overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1"
            >
              {/* Video Preview Mockup with duration badge */}
              <div className={`w-full aspect-[16/10] bg-gradient-to-tr ${cls.bgGradient} relative flex items-center justify-center p-4`}>
                {/* Abstract graphic represent diagram/data */}
                <div className="h-full w-full rounded-xl border border-white/40 dark:border-zinc-800/40 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xs flex items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="h-8 w-8 rounded-full bg-feminine-pink text-white flex items-center justify-center shadow-md">
                    ▶
                  </div>
                </div>
                {/* Duration Badge at Bottom Right */}
                <span className="absolute bottom-2.5 right-2.5 bg-black/75 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                  {cls.duration}
                </span>
              </div>
              
              {/* Masterclass details */}
              <div className="p-5 flex flex-col gap-3 text-left">
                {/* Doctor Avatar / Author Profile Row */}
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-feminine-pink/10 flex items-center justify-center text-[10px] font-extrabold text-feminine-pink border border-feminine-pink/20 shadow-xs">
                    {cls.author[4]}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-[var(--text-primary)] leading-none">{cls.author}</h4>
                    <span className="text-[9px] text-[var(--text-secondary)]">{cls.role}</span>
                  </div>
                </div>
                
                {/* Class Title and Description */}
                <div>
                  <h3 className="font-display font-extrabold text-sm text-[var(--text-primary)] group-hover:text-feminine-pink transition-colors leading-snug mb-1.5">
                    {cls.title}
                  </h3>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-normal line-clamp-2">
                    {cls.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DEEP DIVES & RESEARCH SECTION (Two Column Layout) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        
        {/* Left Column - Reading Hub Filters */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-extrabold tracking-widest text-[var(--text-secondary)] uppercase">
              Reading Hub
            </span>
            <ul className="flex flex-col gap-3 text-xs font-bold">
              <li className="flex items-center gap-2 text-feminine-pink font-extrabold cursor-pointer">
                <span className="h-1.5 w-1.5 rounded-full bg-feminine-pink"></span>
                Recent Publications
              </li>
              <li onClick={handleAutoLogin} className="text-[var(--text-secondary)] hover:text-feminine-pink transition-colors cursor-pointer pl-3.5">
                Trending Research
              </li>
              <li onClick={handleAutoLogin} className="text-[var(--text-secondary)] hover:text-feminine-pink transition-colors cursor-pointer pl-3.5">
                Expert Opinions
              </li>
              <li onClick={handleAutoLogin} className="text-[var(--text-secondary)] hover:text-feminine-pink transition-colors cursor-pointer pl-3.5">
                Community Stories
              </li>
              <li onClick={handleAutoLogin} className="text-[var(--text-secondary)] hover:text-feminine-pink transition-colors cursor-pointer pl-3.5">
                Clinical Guidelines
              </li>
            </ul>
          </div>

          {/* Recommendations Card */}
          <div className="bg-pink-50/50 dark:bg-zinc-900/40 border border-pink-100 dark:border-zinc-900 rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-start gap-2.5">
              <div className="h-5 w-5 rounded-full bg-feminine-pink/15 text-feminine-pink flex items-center justify-center text-xs shrink-0 mt-0.5">
                ✦
              </div>
              <div>
                <h4 className="text-xs font-bold text-[var(--text-primary)]">Personalized for you</h4>
                <p className="text-[10px] text-[var(--text-secondary)] leading-normal mt-1">
                  Based on your reading, we recommend these insights.
                </p>
              </div>
            </div>
            <button 
              onClick={handleAutoLogin}
              className="w-full rounded-full bg-feminine-pink hover:bg-feminine-pink/90 text-[10px] font-bold text-white py-2.5 shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              View Recommendations
            </button>
          </div>
        </div>

        {/* Right Column - Deep Dives Content (Two article rows) */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] border-b border-gray-100 dark:border-zinc-900 pb-3">
            Deep Dives & Research
          </h2>

          <div className="flex flex-col gap-6">
            {/* Article 1 - Towels Image */}
            <div 
              onClick={handleAutoLogin}
              className="glass-panel rounded-2xl border border-gray-100 dark:border-zinc-900 p-5 flex flex-col sm:flex-row gap-5 items-center cursor-pointer group hover:border-feminine-pink/30"
            >
              {/* Image */}
              <div className="w-full sm:w-44 aspect-video sm:aspect-square rounded-xl overflow-hidden shrink-0 bg-gray-50 dark:bg-zinc-900 border border-gray-50 dark:border-zinc-900 shadow-xs relative">
                <img 
                  src="/rolled_towels.png" 
                  alt="Towel research" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                />
              </div>
              
              {/* Body */}
              <div className="flex-grow flex flex-col gap-2 items-start">
                {/* Meta details */}
                <div className="flex flex-wrap gap-2 items-center text-[9px] font-extrabold tracking-wider uppercase text-feminine-pink">
                  <span className="bg-feminine-pink/10 border border-feminine-pink/15 rounded-md px-2 py-0.5">Research</span>
                  <span className="text-[var(--text-secondary)]">•</span>
                  <span className="text-[var(--text-secondary)]">8 Min Read</span>
                  <span className="text-[var(--text-secondary)]">•</span>
                  <span className="text-[var(--text-secondary)]">Oct 28, 2024</span>
                </div>
                
                {/* Title */}
                <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] group-hover:text-feminine-pink transition-colors leading-snug">
                  The Impact of Gut Health on Hormonal Equilibrium
                </h3>
                
                {/* Desc */}
                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  Recent clinical trials suggest a profound link between the gut microbiome and estrogen metabolism. We explore how dietary interventions can mitigate symptoms of hormonal imbalance...
                </p>
                
                {/* Footer stats */}
                <div className="w-full flex justify-between items-center border-t border-gray-100 dark:border-zinc-900 pt-3 mt-1.5 text-[10px] text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1">
                    <span>❤️</span>
                    <span className="font-semibold text-[var(--text-primary)]">1.2k</span>
                  </div>
                  <span>🔗 Share</span>
                </div>
              </div>
            </div>

            {/* Article 2 - Smartwatch Image */}
            <div 
              onClick={handleAutoLogin}
              className="glass-panel rounded-2xl border border-gray-100 dark:border-zinc-900 p-5 flex flex-col sm:flex-row gap-5 items-center cursor-pointer group hover:border-feminine-pink/30"
            >
              {/* Image */}
              <div className="w-full sm:w-44 aspect-video sm:aspect-square rounded-xl overflow-hidden shrink-0 bg-gray-50 dark:bg-zinc-900 border border-gray-50 dark:border-zinc-900 shadow-xs relative">
                <img 
                  src="/smartwatch_health.png" 
                  alt="Fertility data tracking" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                />
              </div>
              
              {/* Body */}
              <div className="flex-grow flex flex-col gap-2 items-start">
                {/* Meta details */}
                <div className="flex flex-wrap gap-2 items-center text-[9px] font-extrabold tracking-wider uppercase text-feminine-pink">
                  <span className="bg-feminine-pink/10 border border-feminine-pink/15 rounded-md px-2 py-0.5">Guide</span>
                  <span className="text-[var(--text-secondary)]">•</span>
                  <span className="text-[var(--text-secondary)]">12 Min Read</span>
                  <span className="text-[var(--text-secondary)]">•</span>
                  <span className="text-[var(--text-secondary)]">Oct 23, 2024</span>
                </div>
                
                {/* Title */}
                <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] group-hover:text-feminine-pink transition-colors leading-snug">
                  Beyond Tracking: Interpreting Your Fertility Data
                </h3>
                
                {/* Desc */}
                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  Data is only as good as the insights you draw from it. This guide breaks down basal body temperature and cervical mucus patterns for precision health monitoring...
                </p>
                
                {/* Footer stats */}
                <div className="w-full flex justify-between items-center border-t border-gray-100 dark:border-zinc-900 pt-3 mt-1.5 text-[10px] text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1">
                    <span>❤️</span>
                    <span className="font-semibold text-gray-600 dark:text-zinc-300">850</span>
                  </div>
                  <span>🔗 Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BRAND NEWSLETTER FOOTER */}
      <footer className="border-t border-gray-150/40 dark:border-zinc-900 pt-16 pb-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="font-display text-xl font-extrabold text-feminine-pink">
              SAKHI
            </span>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              Empowering women with precision care, clinically-backed insights, and a community of experts dedicated to your holistic well-being.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 text-gray-400">
              <span className="h-7 w-7 rounded-full bg-gray-50 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800 flex items-center justify-center text-xs hover:text-feminine-pink cursor-pointer">
                🔗
              </span>
              <span className="h-7 w-7 rounded-full bg-gray-50 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800 flex items-center justify-center text-xs hover:text-feminine-pink cursor-pointer">
                ✉️
              </span>
              <span className="h-7 w-7 rounded-full bg-gray-50 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800 flex items-center justify-center text-xs hover:text-feminine-pink cursor-pointer">
                🌐
              </span>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-[10px] font-extrabold tracking-widest text-gray-400 dark:text-zinc-500 uppercase">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-bold text-gray-550 dark:text-zinc-400">
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">Privacy Policy</li>
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">Terms of Service</li>
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">Clinical Standards</li>
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
          
          {/* Newsletter Input Box */}
          <div className="md:col-span-4 flex flex-col gap-3.5">
            <h4 className="text-[10px] font-extrabold tracking-widest text-gray-400 dark:text-zinc-500 uppercase">
              Newsletter
            </h4>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-normal max-w-xs">
              Stay updated with the latest clinical research.
            </p>
            <div className="flex gap-2 w-full max-w-sm mt-1">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-grow pl-4 pr-3 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 text-xs outline-none focus:border-feminine-pink transition-colors"
              />
              <button 
                onClick={handleAutoLogin}
                className="rounded-full bg-feminine-pink hover:bg-feminine-pink/90 text-xs font-bold text-white px-5 py-2.5 shadow-sm active:scale-95 transition-all cursor-pointer shrink-0"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-gray-100 dark:border-zinc-900 pt-6 flex justify-between items-center text-[10px] text-gray-400">
          <span>© 2024 SAKHI. Precision in Care.</span>
        </div>
      </footer>

    </div>
  );
}

// =================== 2. ABOUT US VIEW ===================
export function AboutPage() {
  return (
    <div className="slide-in flex flex-col gap-16">
      <div className="glass-panel p-12 rounded-3xl bg-gradient-to-tr from-purple-50/50 to-pink-50/50 dark:from-zinc-900/40 dark:to-zinc-950/40 text-center flex flex-col items-center gap-4">
        <h1 className="font-display text-4xl font-extrabold tracking-tight dark:text-white">Our Intimate Vision</h1>
        <p className="text-gray-500 dark:text-zinc-400 max-w-2xl leading-relaxed text-sm">
          SAKHI operates to digitize intimate biological tracking variables and clinical access, enabling comprehensive healthcare awareness for girls and women globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-[10px] uppercase font-bold text-feminine-pink tracking-widest bg-feminine-pink/10 px-3 py-1 rounded-full w-fit">Company Story</span>
          <h2 className="font-display text-2xl font-bold dark:text-white">How SAKHI Began</h2>
          <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">
            Founded in 2026, SAKHI emerged from a shared biological vision: clinical period cycle logging and customized nutritional programs should be easily accessible to everyone. We compiled modern OpenAI prompt diagnostics with HIPAA security blueprints to construct a comprehensive wellness ecosystem.
          </p>
        </div>
        <div className="glass-panel p-8 rounded-2xl flex flex-col gap-6 bg-feminine-lavender/30 dark:bg-zinc-900/30">
          <div className="flex gap-4">
            <div className="h-10 w-10 shrink-0 rounded-full bg-feminine-pink/15 text-feminine-pink flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-display font-bold dark:text-white mb-1">Our Mission</h4>
              <p className="text-xs text-gray-500 dark:text-zinc-400">Democratize clinical biological insight analysis via cognitive computing checks.</p>
            </div>
          </div>
          <div className="flex gap-4 border-t border-gray-200/50 dark:border-zinc-800/50 pt-6">
            <div className="h-10 w-10 shrink-0 rounded-full bg-feminine-purple/15 text-feminine-purple flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-display font-bold dark:text-white mb-1">Our Vision</h4>
              <p className="text-xs text-gray-500 dark:text-zinc-400">Secure end-to-end Signal double-ratchet encryption consultations for every patient worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =================== 3. HEALTH BLOG VIEW ===================
export function BlogPage() {
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
    <div className="slide-in flex flex-col gap-12">
      
      {/* Search Header */}
      <div className="glass-panel p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="font-display text-2xl font-bold dark:text-white mb-1">Health & Educational Library</h1>
          <p className="text-xs text-gray-500 dark:text-zinc-400">Validated research articles written by certified gynecologists.</p>
        </div>
        
        {/* Interactive Search Box */}
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text"
            placeholder="Search symptoms, PCOS, etc..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 text-xs outline-none focus:border-feminine-pink transition-colors"
          />
        </div>
      </div>

      {/* Category selection */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 scroll-smooth">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`rounded-full px-5 py-2 text-xs font-semibold border transition-all shrink-0 capitalize ${selectedCat === cat ? 'bg-feminine-pink text-white border-feminine-pink shadow-md' : 'bg-white dark:bg-zinc-900 text-gray-600 dark:text-zinc-300 border-gray-200/50 dark:border-zinc-800 hover:border-feminine-pink'}`}
          >
            {cat.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-2 text-center py-16 text-gray-400">
            No articles match your parameters.
          </div>
        ) : (
          filtered.map((art, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-gray-150/40 dark:border-zinc-800/40 flex flex-col gap-4">
              <span className="text-[10px] font-bold text-feminine-purple uppercase tracking-wider">{art.category.replace('_', ' ')}</span>
              <div>
                <h3 className="font-display font-bold text-lg dark:text-white mb-2 leading-snug">{art.title}</h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-normal">{art.desc}</p>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 dark:border-zinc-850 pt-4 mt-auto text-xs text-gray-400">
                <span>📅 {art.date}</span>
                <span className="text-feminine-pink font-semibold flex items-center gap-1 cursor-pointer">
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

// =================== 4. CONTACT VIEW ===================
export function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) return;
    setSuccess(true);
    setName('');
    setEmail('');
    setMsg('');
  };

  return (
    <div className="slide-in flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact details */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-feminine-pink bg-feminine-pink/10 px-3 py-1 rounded-full w-fit mb-3 block">Connect</span>
            <h1 className="font-display text-3xl font-bold dark:text-white mb-2">Speak to our Intimate Support Team</h1>
            <p className="text-xs text-gray-500 dark:text-zinc-400">Our customer care representatives are certified medical schedulers.</p>
          </div>

          <div className="flex flex-col gap-6 text-sm">
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-feminine-pink/10 text-feminine-pink flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <strong className="block dark:text-white">Email Address</strong>
                <span className="text-xs text-gray-500 dark:text-zinc-400">support@sakhi.ai</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-feminine-purple/10 text-feminine-purple flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <strong className="block dark:text-white">Help Desk Line</strong>
                <span className="text-xs text-gray-500 dark:text-zinc-400">1800-419-1020</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <strong className="block dark:text-white">Headquarters</strong>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Hormonal Valley Area, Suite 400, New Delhi, IN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="glass-panel p-8 rounded-3xl flex flex-col gap-6">
          <h3 className="font-display font-bold text-lg dark:text-white">Send an Electronic Query</h3>
          
          {success ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-200 text-center flex flex-col items-center gap-3">
              <CheckCircle2 size={32} className="text-emerald-500 animate-bounce" />
              <h4 className="font-bold text-emerald-600">Query Transmitted</h4>
              <p className="text-[11px] text-gray-500">Your secure ticket has been registered in AWS queues. We will respond within 4 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-gray-600 dark:text-zinc-400">Name</span>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200" 
                  required 
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-gray-600 dark:text-zinc-400">Email</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200" 
                  required 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-gray-600 dark:text-zinc-400">Message</span>
                <textarea 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200 min-height-[100px] resize-none" 
                  required 
                />
              </div>

              <button type="submit" className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple py-3.5 text-xs font-bold text-white shadow-lg">
                Transmit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// =================== 5. AUTH PAGES ===================
export function AuthPage({ view, setPage, setUser }) {
  const [email, setEmail] = useState('ananya@example.com');
  const [password, setPassword] = useState('password123');
  const [firstName, setFirstName] = useState('Ananya');

  const handleLogin = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!email || !password) return;
    
    // Simulate JWT authentication callback
    setUser({
      firstName: firstName || 'Ananya',
      lastName: 'Sharma',
      email: email,
      isAdmin: email === 'admin@sakhi.ai' || email === 'ananya@example.com',
      subscriptionPlan: 'standard'
    });
    setPage('dashboard');
  };

  return (
    <div className="slide-in flex items-center justify-center min-h-[600px] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden glass-panel border border-gray-150/30 bg-white/70 dark:bg-zinc-950/20 shadow-xs">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full min-h-[600px]">
        
        {/* Left Side: Gradient Promo Block */}
        <div className="hidden md:flex md:col-span-5 bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white p-10 flex-col justify-between text-left relative overflow-hidden">
          {/* Abstract circles */}
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-2xl"></div>

          <div className="flex flex-col gap-2 relative z-10">
            <span className="font-display font-extrabold tracking-tight text-2xl">SAKHI</span>
            <span className="text-[10px] uppercase font-bold tracking-widest bg-white/25 px-2.5 py-0.5 rounded-full w-fit">Care & Precision</span>
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            <h3 className="font-display text-2xl font-extrabold leading-tight">
              Empowering your wellness with scientific clinical logs.
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Join thousands of women who securely track period cycles, consult top gynecologists, analyze biological variables, and access AI-driven nutritional strategies daily.
            </p>
          </div>

          <div className="flex flex-col gap-1 relative z-10">
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Clinical Standards</span>
            <span className="text-xs font-semibold">100% HIPAA & GDPR Compliant</span>
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="col-span-1 md:col-span-7 p-8 sm:p-12 flex flex-col justify-center gap-6 bg-white/40 dark:bg-zinc-900/10 text-left animate-fade-in">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-display font-extrabold text-2xl text-[var(--text-primary)]">
              {view === 'login' ? 'Welcome Back' : view === 'signup' ? 'Create Account' : 'Reset Password'}
            </h2>
            <span className="text-xs text-[var(--text-secondary)] font-extrabold">
              {view === 'login' ? 'Sign in to access your private health dashboard.' : 'Initialize your secure, personalized care logs.'}
            </span>
          </div>

          {/* Forms */}
          {view === 'forgot' ? (
            <form onSubmit={() => alert('Verification reset link queued. Check your inbox.')} className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-gray-600 dark:text-zinc-405">Email Address</span>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-700 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" 
                    required 
                  />
                </div>
              </div>
              <button type="submit" className="rounded-full bg-feminine-pink hover:bg-feminine-pink/90 text-white py-3.5 font-bold shadow-lg shadow-pink-500/20 transition-all duration-300">
                Send Reset Link
              </button>
              <button type="button" onClick={() => setPage('login')} className="text-center font-bold text-feminine-purple hover:underline mt-2">
                Back to Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="flex flex-col gap-4 text-xs">
              
              {view === 'signup' && (
                <div className="flex flex-col gap-1.5 animate-fade-in">
                  <span className="font-semibold text-gray-600 dark:text-zinc-405">First Name</span>
                  <div className="relative">
                    <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-700 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" 
                      required 
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-gray-600 dark:text-zinc-405">Email Address</span>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-750 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" 
                    required 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-600 dark:text-zinc-405">Password</span>
                  {view === 'login' && (
                    <button type="button" onClick={() => setPage('forgot')} className="font-bold text-[10px] text-feminine-purple hover:underline">
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-700 dark:text-zinc-200 focus:border-feminine-pink transition-colors" 
                    required 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                onClick={handleLogin}
                className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple py-3.5 font-bold text-white shadow-xl shadow-pink-500/20 active:scale-98 transition-all duration-300 cursor-pointer"
              >
                {view === 'login' ? 'Authenticate Sign In' : 'Register Account'}
              </button>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-gray-200/60 dark:border-zinc-800"></div>
                <span className="flex-shrink mx-4 text-[9px] text-gray-400 font-bold uppercase tracking-wider">or authenticate with</span>
                <div className="flex-grow border-t border-gray-200/60 dark:border-zinc-800"></div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setUser({ firstName: 'Ananya', lastName: 'Sharma', email: 'ananya@example.com', subscriptionPlan: 'standard' });
                  setPage('dashboard');
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white dark:bg-zinc-900 py-3 font-bold text-xs text-gray-700 dark:text-zinc-205 hover:bg-gray-50/50 transition-colors"
              >
                <Globe size={14} className="text-red-500 animate-pulse" /> Google Authentication
              </button>

              <span className="text-center text-[11px] text-gray-450 mt-1">
                {view === 'login' ? 'Need an account? ' : 'Have an account already? '}
                <button 
                  type="button"
                  onClick={() => setPage(view === 'login' ? 'signup' : 'login')}
                  className="font-bold text-feminine-purple hover:underline"
                >
                  {view === 'login' ? 'Register here' : 'Login here'}
                </button>
              </span>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

// =================== 6. USER PROFILE VIEW ===================
export function ProfilePage({ user, setUser }) {
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
              <div className="flex flex-col gap-1.5 text-xs">
                <span className="font-semibold text-gray-650 dark:text-zinc-400">First Name</span>
                <input 
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200 font-semibold"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 text-xs">
                <span className="font-semibold text-gray-650 dark:text-zinc-400">Last Name</span>
                <input 
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200 font-semibold"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-xs">
              <span className="font-semibold text-gray-650 dark:text-zinc-400">Email Address</span>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200 font-semibold"
                required
              />
            </div>

            <h3 className="font-display font-extrabold text-lg border-b border-gray-100 dark:border-zinc-800 pt-2 pb-3 dark:text-white">
              Biological & Health Parameters
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-xs">
                <span className="font-semibold text-gray-650 dark:text-zinc-400">Biological Age</span>
                <input 
                  type="number" 
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 text-xs">
                <span className="font-semibold text-gray-650 dark:text-zinc-400">Cycle Duration (Days)</span>
                <input 
                  type="number" 
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-xs">
                <span className="font-semibold text-gray-650 dark:text-zinc-400">Daily Sleep Target (Hours)</span>
                <input 
                  type="number" 
                  value={sleepTarget}
                  onChange={(e) => setSleepTarget(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 text-xs">
                <span className="font-semibold text-gray-650 dark:text-zinc-400">Hydration Target (Liters)</span>
                <input 
                  type="number" 
                  step="0.1"
                  value={waterTarget}
                  onChange={(e) => setWaterTarget(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200"
                  required
                />
              </div>
            </div>

            <button type="submit" className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple py-3.5 text-xs font-bold text-white shadow-lg active:scale-95 transition-all">
              Save Parameters
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
