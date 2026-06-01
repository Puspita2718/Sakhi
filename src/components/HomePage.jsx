import React from 'react';

export default function HomePage({ setPage, setTab, language, setUser }) {
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
      
      {/* 1. HERO SECTION (Premium Video Background Banner) */}
      <section className="relative overflow-hidden rounded-3xl bg-zinc-950 text-white min-h-[520px] flex items-center shadow-lg">
        {/* Fallback Background Image of Dr. Ananya Sharma */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 animate-fade-in"
          style={{ backgroundImage: `url('/hero_doctor.png')` }}
        ></div>
        
        {/* Dynamic Premium Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-fade-in transition-opacity duration-1000"
          poster="/hero_doctor.png"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Soft dark-gradient overlay to guarantee high-contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10"></div>
        
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
                <div className="h-full w-full rounded-xl border border-white/40 dark:border-zinc-800/40 bg-white/40 dark:bg-zinc-955/40 backdrop-blur-xs flex items-center justify-center relative overflow-hidden shadow-inner">
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

      {/* 5. BRAND NEWSLETTER FOOTER */}
      <footer className="border-t border-gray-150/40 dark:border-zinc-900 pt-16 pb-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="font-display text-xl font-extrabold text-feminine-pink bg-gradient-to-r from-feminine-pink to-feminine-purple bg-clip-text text-transparent">
              SAKHI
            </span>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-sm font-semibold">
              Empowering women with precision care, clinically-backed insights, and a community of experts dedicated to your holistic well-being.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 text-gray-400">
              <span className="h-7 w-7 rounded-full bg-gray-55 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800 flex items-center justify-center text-xs hover:text-feminine-pink cursor-pointer">
                🔗
              </span>
              <span className="h-7 w-7 rounded-full bg-gray-55 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800 flex items-center justify-center text-xs hover:text-feminine-pink cursor-pointer">
                ✉️
              </span>
              <span className="h-7 w-7 rounded-full bg-gray-55 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800 flex items-center justify-center text-xs hover:text-feminine-pink cursor-pointer">
                🌐
              </span>
            </div>
          </div>
          
          {/* Link lists */}
          <div className="md:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-[10px] font-extrabold tracking-widest text-[var(--text-secondary)] uppercase">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-extrabold text-[var(--text-secondary)]">
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">Privacy Policy</li>
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">Terms of Service</li>
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">Clinical Standards</li>
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
          
          {/* Newsletter Input Box */}
          <div className="md:col-span-4 flex flex-col gap-3.5">
            <h4 className="text-[10px] font-extrabold tracking-widest text-[var(--text-secondary)] uppercase">
              Newsletter
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-normal max-w-xs font-semibold">
              Stay updated with the latest clinical research.
            </p>
            <div className="flex gap-2 w-full max-w-sm mt-1">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-grow pl-4 pr-3 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 text-xs outline-none focus:border-feminine-pink transition-colors dark:text-zinc-200"
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
        <div className="border-t border-gray-150/40 dark:border-zinc-900 pt-6 flex justify-between items-center text-[10px] text-[var(--text-secondary)] font-bold">
          <span>© 2026 SAKHI. Precision in Care.</span>
        </div>
      </footer>

    </div>
  );
}
