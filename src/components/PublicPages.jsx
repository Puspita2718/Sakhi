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
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

// =================== 1. HOME VIEW ===================
export function HomePage({ setPage, setTab, language, setUser }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    { title: 'AI Health Assistant', desc: 'ChatGPT-style symptom checker and condition identifier.', icon: Sparkles, color: 'from-pink-500/10 to-pink-500/5', border: 'border-pink-200 dark:border-pink-900/50' },
    { title: 'Period Tracker', desc: 'Symptom logs, mood diaries, and ovulation predictions.', icon: Calendar, color: 'from-purple-500/10 to-purple-500/5', border: 'border-purple-200 dark:border-purple-900/50' },
    { title: 'Blood Color Guide', desc: 'Educational details explaining flow shades and warning parameters.', icon: Droplet, color: 'from-red-500/10 to-red-500/5', border: 'border-red-200 dark:border-red-900/50' },
    { title: 'AI Diet Generator', desc: 'Condition-specific budgets and shopping checklists.', icon: Utensils, color: 'from-amber-500/10 to-amber-500/5', border: 'border-amber-200 dark:border-amber-900/50' },
    { title: 'Female Hygiene Hub', desc: 'Vaginal cleaning guidelines and products compared.', icon: ShieldCheck, color: 'from-emerald-500/10 to-emerald-500/5', border: 'border-emerald-200 dark:border-emerald-900/50' },
    { title: 'Doctor Consultation', desc: 'Calendar bookings, physician reviews, and digital prescriptions.', icon: Activity, color: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-200 dark:border-blue-900/50' },
    { title: 'Yoga & Wellness', desc: 'Period pain exercises and stress relief poses.', icon: Heart, color: 'from-rose-500/10 to-rose-500/5', border: 'border-rose-200 dark:border-rose-900/50' },
    { title: 'Community Support', desc: 'Shared experiences, forums, and anonymous questions.', icon: Users, color: 'from-indigo-500/10 to-indigo-500/5', border: 'border-indigo-200 dark:border-indigo-900/50' }
  ];

  const pricing = [
    { name: 'Basic Plan', price: '₹199', period: 'month', desc: 'Perfect for quick medical checks.', features: ['7-Day Active Pass', '24/7 Chat General Physician', 'AI Symptom Checker (5/month)', 'Cycle logging calendar'] },
    { name: 'Standard Plan', price: '₹499', period: 'month', desc: 'Complete specialized support.', features: ['30-Day Active Pass', 'Video + Chat Gynecologist', 'Unlimited AI symptom reviews', 'Dynamic PCOS & Diet plans'], highlight: true },
    { name: 'Premium Plan', price: '₹999', period: 'month', desc: 'Total health transformation.', features: ['90-Day Active Pass', 'Unlimited Doctor & Dietitian calls', 'Mental wellness coach access', 'Downloadable diagnostic summaries'] }
  ];

  const faqs = [
    { q: 'How does the AI Symptom Analyst work?', a: 'You enter symptoms, cycle details, and historical files. The engine compares metrics to PCOS, Anemia, UTIs, and vaginal infections, returning risk charts and recovery guidelines.' },
    { q: 'Is my intimate health tracking data safe?', a: '100% yes. All database models are encrypted, and doctor chats use end-to-end Signal protocol Double-Ratchet encryption.' },
    { q: 'How do I claim doctor prescriptions?', a: 'After consultations finish, doctors upload prescriptions directly. They are securely encrypted inside private storage and downloadable as authenticated PDFs.' }
  ];

  const testimonials = [
    { text: "HerCare AI completely changed how I manage my PCOS. The AI diet generator provided local budget-friendly alternatives that fit my lifestyle immediately.", author: "Rhea Sen", role: "Active Member" },
    { text: "Having a direct chat with certified gynecologists under standard passes saved me countless stressful clinic commutes. Highly recommend the Swasthya Mitra tools.", author: "Pooja Mehta", role: "Premium Member" }
  ];

  // Auto-login helper to test dashboard
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

  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-pink-50/70 via-purple-50/50 to-indigo-50/70 dark:from-zinc-900/50 dark:via-zinc-950 dark:to-zinc-900/50 border border-white/50 dark:border-white/5 px-8 py-16 sm:px-12 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative mx-auto max-w-4xl text-center flex flex-col items-center gap-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-feminine-pink/10 px-4 py-1.5 text-xs font-bold text-feminine-pink"
          >
            <Sparkles size={12} className="animate-spin" /> Startup level FemTech Platform
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
          >
            Your Personal AI <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-feminine-pink to-feminine-purple bg-clip-text text-transparent">
              Women's Health Companion
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-500 dark:text-zinc-400 max-w-2xl leading-relaxed"
          >
            Track periods, understand biological color indicators, receive budget diet programs, practice recovery yoga, and consult expert board-certified doctors securely.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <button 
              onClick={handleAutoLogin}
              className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple px-8 py-4 text-sm font-bold text-white shadow-xl shadow-pink-500/25 hover:shadow-2xl hover:shadow-pink-500/45 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              Get Started <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => setPage('login')}
              className="rounded-full border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md px-8 py-4 text-sm font-bold text-gray-700 dark:text-zinc-200 hover:bg-gray-50 dark:hover:bg-zinc-800/80 active:scale-95 transition-all duration-300"
            >
              Demo Admin Portal
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="flex flex-col gap-12">
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="font-display text-3xl font-bold dark:text-white">Complete Digital Care Services</h2>
          <p className="text-gray-500 dark:text-zinc-400 max-w-lg">Everything you need to track cycle speeds, analyze symptoms, and align healthy wellness daily.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index}
                className={`glass-panel p-6 rounded-2xl border ${feat.border} bg-gradient-to-tr ${feat.color} flex flex-col gap-4 group cursor-pointer hover:-translate-y-1`}
                onClick={handleAutoLogin}
              >
                <div className="h-12 w-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center text-feminine-pink shadow-md group-hover:scale-105 transition-transform">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1 group-hover:text-feminine-pink transition-colors">{feat.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 leading-normal">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Module */}
      <section className="flex flex-col gap-12">
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="font-display text-3xl font-bold dark:text-white">Choose Your Care Pass</h2>
          <p className="text-gray-500 dark:text-zinc-400 max-w-lg">Flexible startup plans incorporating chat, video consults, and custom diet formulations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
          {pricing.map((plan, idx) => (
            <div 
              key={idx}
              className={`glass-panel p-8 rounded-3xl border flex flex-col gap-6 relative ${plan.highlight ? 'border-feminine-pink scale-105 shadow-pink-500/5' : 'border-gray-200/50 dark:border-zinc-800'}`}
            >
              {plan.highlight && (
                <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-feminine-pink text-white font-display text-[10px] font-extrabold uppercase tracking-widest px-4.5 py-1.5 rounded-full shadow-lg shadow-pink-500/30">
                  Most Popular
                </span>
              )}
              
              <div className="text-center">
                <h3 className="font-display font-bold text-xl mb-1 dark:text-white">{plan.name}</h3>
                <span className="text-xs text-gray-400 dark:text-zinc-500">{plan.desc}</span>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-4xl font-extrabold tracking-tight dark:text-white">{plan.price}</span>
                  <span className="text-sm text-gray-400">/{plan.period}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3.5 border-t border-b border-gray-100 dark:border-zinc-850 py-6 my-2 text-sm text-gray-600 dark:text-zinc-300">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleAutoLogin}
                className={`w-full rounded-full py-3.5 text-xs font-bold transition-all duration-300 ${plan.highlight ? 'bg-gradient-to-r from-feminine-pink to-feminine-purple text-white shadow-lg shadow-pink-500/25' : 'bg-gray-100 dark:bg-zinc-800 hover:bg-feminine-pink hover:text-white dark:hover:bg-feminine-pink'}`}
              >
                Activate Subscription
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/40 dark:bg-zinc-900/30 rounded-3xl p-8 sm:p-12 border border-gray-200/40 dark:border-zinc-800/40 flex flex-col gap-10">
        <h2 className="font-display text-2xl font-bold text-center dark:text-white">Trusted by Women Globally</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="flex flex-col gap-4 p-6 bg-white/60 dark:bg-zinc-950/60 rounded-2xl border border-gray-150/40 dark:border-zinc-800/40 shadow-sm">
              <p className="text-sm italic text-gray-600 dark:text-zinc-300 leading-relaxed">"{test.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-feminine-lavender flex items-center justify-center font-bold text-xs text-feminine-purple">
                  {test.author[0]}
                </div>
                <div>
                  <h4 className="text-xs font-bold dark:text-white">{test.author}</h4>
                  <span className="text-[10px] text-gray-400">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl flex flex-col gap-8">
        <h2 className="font-display text-2xl font-bold text-center dark:text-white">Platform FAQ</h2>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="border-b border-gray-100 dark:border-zinc-800 pb-4">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex justify-between items-center py-2 text-left font-display font-semibold text-gray-900 dark:text-white hover:text-feminine-pink transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle size={18} className="text-feminine-pink shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronRight size={16} className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                </button>
                {isOpen && (
                  <p className="pl-7 mt-2 text-xs text-gray-500 dark:text-zinc-400 leading-relaxed animate-fade-in">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
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
          HerCare AI operates to digitize intimate biological tracking variables and clinical access, enabling comprehensive healthcare awareness for girls and women globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-[10px] uppercase font-bold text-feminine-pink tracking-widest bg-feminine-pink/10 px-3 py-1 rounded-full w-fit">Company Story</span>
          <h2 className="font-display text-2xl font-bold dark:text-white">How HerCare Began</h2>
          <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">
            Founded in 2026, HerCare AI emerged from a shared biological vision: clinical period cycle logging and customized nutritional programs should be easily accessible to everyone. We compiled modern OpenAI prompt diagnostics with HIPAA security blueprints to construct a comprehensive wellness ecosystem.
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
                <span className="text-xs text-gray-500 dark:text-zinc-400">support@hercare.ai</span>
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
    e.preventDefault();
    if (!email || !password) return;
    
    // Simulate JWT authentication callback
    setUser({
      firstName: firstName || 'Ananya',
      lastName: 'Sharma',
      email: email,
      isAdmin: email === 'admin@hercare.ai' || email === 'ananya@example.com',
      subscriptionPlan: 'standard'
    });
    setPage('dashboard');
  };

  return (
    <div className="slide-in flex items-center justify-center min-h-[500px]">
      <div className="glass-panel p-8 sm:p-10 rounded-3xl w-full max-w-[420px] flex flex-col gap-6 border border-gray-200/50 dark:border-zinc-800">
        
        {/* Brand */}
        <div className="text-center flex flex-col items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white flex items-center justify-center font-extrabold text-lg">
            H
          </div>
          <h2 className="font-display font-extrabold text-xl dark:text-white">
            {view === 'login' ? 'Welcome Back' : view === 'signup' ? 'Create Account' : 'Reset Password'}
          </h2>
          <span className="text-xs text-gray-400 dark:text-zinc-500">
            {view === 'login' ? 'Sign in to access your health logs.' : 'Initialize your intimate dashboard.'}
          </span>
        </div>

        {/* Forms */}
        {view === 'forgot' ? (
          <form onSubmit={() => alert('Verification reset link queued. Check your inbox.')} className="flex flex-col gap-4 text-xs">
            <div className="flex flex-col gap-1.5">
              <span className="font-semibold text-gray-650 dark:text-zinc-400">Email Address</span>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200" 
                  required 
                />
              </div>
            </div>
            <button type="submit" className="rounded-full bg-feminine-pink text-white py-3.5 font-bold shadow-lg shadow-pink-500/20">
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
                <span className="font-semibold text-gray-650 dark:text-zinc-400">First Name</span>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200" 
                    required 
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <span className="font-semibold text-gray-650 dark:text-zinc-400">Email Address</span>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200" 
                  required 
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-655 dark:text-zinc-400">Password</span>
                {view === 'login' && (
                  <button type="button" onClick={() => setPage('forgot')} className="font-bold text-[10px] text-feminine-purple hover:underline">
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-700 dark:text-zinc-200" 
                  required 
                />
              </div>
            </div>

            <button type="submit" className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple py-3.5 font-bold text-white shadow-xl shadow-pink-500/25">
              {view === 'login' ? 'Authenticate Login' : 'Register Account'}
            </button>

            {/* Google Sign-In */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200 dark:border-zinc-800"></div>
              <span className="flex-shrink mx-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider">or sign in with</span>
              <div className="flex-grow border-t border-gray-200 dark:border-zinc-800"></div>
            </div>

            <button
              type="button"
              onClick={() => {
                setUser({ firstName: 'Ananya', email: 'ananya@example.com', subscriptionPlan: 'standard' });
                setPage('dashboard');
              }}
              className="w-full flex items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-3 font-semibold text-gray-700 dark:text-zinc-200 hover:bg-gray-50"
            >
              <Globe size={14} className="text-red-500" /> Google Authentication
            </button>

            <span className="text-center text-[11px] text-gray-400 mt-2">
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
  );
}
