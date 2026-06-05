import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import AuthPage from './components/AuthPage';
import ProfilePage from './components/ProfilePage';
import Dashboard from './components/Dashboard';
import CycleTracker from './components/CycleTracker';
import BloodAnalysis from './components/BloodAnalysis';
import AIChatbot from './components/AIChatbot';
import DietGenerator from './components/DietGenerator';
import MentalWellness from './components/MentalWellness';
import CommunityPlatform from './components/CommunityPlatform';
import EmergencySystem from './components/EmergencySystem';
import AdminPanel from './components/AdminPanel';
import ServerBlueprints from './components/ServerBlueprints';
import FloatingChatbot from './components/FloatingChatbot';

import { Menu, ShieldAlert, Heart, Info, ArrowRight, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'hi', name: 'HI' },
    { code: 'bn', name: 'BN' },
    { code: 'ta', name: 'TA' },
    { code: 'te', name: 'TE' },
    { code: 'mr', name: 'MR' }
  ];

  const pageTitles = {
    dashboard: {
      en: 'Health Dashboard',
      hi: 'स्वास्थ्य डैशबोर्ड',
      bn: 'স্বাস্থ্য ড্যাশবোর্ড',
      ta: 'ஆரோக்கிய டாஷ்போர்டு',
      te: 'ఆరోగ్య చాట్ డ్యాష్‌బోర్డ్',
      mr: 'आरोग्य डॅशबोर्ड'
    },
    calendar: {
      en: 'Cycle Tracker',
      hi: 'चक्र ट्रैकर',
      bn: 'পিরিয়ড ট্র্যাকার',
      ta: 'மாதவிடாய் காட்டி',
      te: 'ఋతు చక్రం',
      mr: 'सायकल ट्रॅकर'
    },
    'blood-analysis': {
      en: 'AI Blood Analysis',
      hi: 'एआई रक्त विश्लेषण',
      bn: 'এআই রক্ত বিশ্লেষণ',
      ta: 'இரத்த பகுப்பாய்வு',
      te: 'రక్త విశ్లేషణ',
      mr: 'एआय रक्त विश्लेषण'
    },
    'ai-chat': {
      en: 'Sakhi AI Companion',
      hi: 'सखी एआई साथी',
      bn: 'সখী এআই সঙ্গী',
      ta: 'சகி ஏஐ தோழி',
      te: 'సఖి ఏఐ స్నేహితురాలు',
      mr: 'सखी एआय साथी'
    },
    'diet-fitness': {
      en: 'Diet & Yoga Planner',
      hi: 'आहार और योग योजनाकार',
      bn: 'ডায়েট ও যোগব্যায়াম',
      ta: 'உணவு & யோகா',
      te: 'డైట్ & యోగా',
      mr: 'आहार आणि योग'
    },
    zen: {
      en: 'Zen Mind Sanctuary',
      hi: 'ध्यान कक्ष',
      bn: 'ধ্যান কক্ষ',
      ta: 'தியான அறை',
      te: 'ధ్యాన గది',
      mr: 'ध्यान कक्ष'
    },
    community: {
      en: 'Sisterhood Community',
      hi: 'सखी समुदाय',
      bn: 'বোনদের কমিউনিটি',
      ta: 'சகோதரிகள் சமூகம்',
      te: 'సహోదరి సంఘం',
      mr: 'भगिनी समुदाय'
    },
    profile: {
      en: 'My Profile & Settings',
      hi: 'मेरी प्रोफाइल',
      bn: 'আমার প্রোফাইল',
      ta: 'என் சுயவிவரம்',
      te: 'నా ప్రొఫైల్',
      mr: 'माझी प्रोफाइल'
    },
    admin: {
      en: 'Administrator Controls',
      hi: 'प्रशासक नियंत्रण',
      bn: 'অ্যাডমিন প্যানেল',
      ta: 'நிர்வாக கட்டுப்பாடுகள்',
      te: 'అడ్మినిస్ట్రేటర్ నియంత్రణలు',
      mr: 'प्रशासक नियंत्रण'
    }
  };

  // Navigation & Page State
  // Public pages: 'home', 'about', 'blog', 'contact', 'login', 'signup', 'forgot', 'verification', 'server-blueprints'
  // Private dashboard: 'dashboard', 'calendar', 'blood-analysis', 'ai-chat', 'diet-fitness', 'zen', 'community', 'admin'
  const [page, setPage] = useState('home'); 
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // User Authentication State
  // Simulated Logged-In User Profile
  const [user, setUser] = useState(null); 

  // Global cycle state
  const [cycleLogs, setCycleLogs] = useState({
    '2026-10-07': { isPeriodDay: true, flowIntensity: 'medium', symptoms: ['cramps'], mood: 'irritable' },
    '2026-10-08': { isPeriodDay: true, flowIntensity: 'heavy', symptoms: ['cramps', 'fatigue'], mood: 'sad' },
    '2026-10-09': { isPeriodDay: true, flowIntensity: 'medium', symptoms: ['backache'], mood: 'calm' },
    '2026-10-10': { isPeriodDay: true, flowIntensity: 'light', symptoms: ['bloating'], mood: 'happy' },
    '2026-10-11': { isPeriodDay: true, flowIntensity: 'spotting', symptoms: [], mood: 'happy' }
  });

  const [waterIntake, setWaterIntake] = useState(1500);

  // Toggle Dark Mode root class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle active dashboard tab shifts
  const handleSidebarTabShift = (tab) => {
    setPage(tab);
    setMobileMenuOpen(false);
  };

  const isPublicPage = ['home', 'about', 'blog', 'contact', 'login', 'signup', 'forgot', 'verification', 'server-blueprints'].includes(page);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* 1. PUBLIC PAGES CONTAINER (Header + Footer + Page viewport) */}
      {!user || isPublicPage ? (
        <div className="flex flex-col min-h-screen">
          <Navbar 
            page={page}
            setPage={setPage}
            user={user}
            setUser={setUser}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            language={language}
            setLanguage={setLanguage}
          />
          
          <main className="flex-grow mx-auto max-w-7xl w-full px-6 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {page === 'home' && (
                  <HomePage setPage={setPage} language={language} setUser={setUser} />
                )}
                {page === 'about' && (
                  <AboutPage />
                )}
                {page === 'blog' && (
                  <BlogPage />
                )}
                {page === 'contact' && (
                  <ContactPage />
                )}
                {['login', 'signup', 'forgot'].includes(page) && (
                  <AuthPage view={page} setPage={setPage} setUser={setUser} />
                )}
                {page === 'server-blueprints' && (
                  <ServerBlueprints />
                )}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Elegant Footer */}
          <footer className="border-t border-gray-200/50 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/60 backdrop-blur-md py-12 text-center text-xs text-gray-500 dark:text-zinc-400">
            <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white flex items-center justify-center font-bold text-xs">
                  S
                </div>
                <span className="font-display font-extrabold tracking-tight dark:text-white text-sm">SAKHI</span>
              </div>
              <span>
                {language === 'hi' ? '© 2026 SAKHI इंक. सर्वाधिकार सुरक्षित। HIPAA और GDPR प्रमाणित।' : 
                 language === 'bn' ? '© 2026 SAKHI Inc. সর্বস্বত্ব সংরক্ষিত। HIPAA এবং GDPR প্রত্যয়িত।' : 
                 language === 'ta' ? '© 2026 SAKHI Inc. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. HIPAA & GDPR சான்றிதழ் பெற்றது.' : 
                 language === 'te' ? '© 2026 SAKHI Inc. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి. HIPAA & GDPR సర్టిఫైడ్.' : 
                 language === 'mr' ? '© 2026 SAKHI Inc. सर्व हक्क राखीव. HIPAA आणि GDPR प्रमाणित.' : 
                 '© 2026 SAKHI Inc. All rights reserved. HIPAA & GDPR Certified.'}
              </span>
            </div>
          </footer>
        </div>
      ) : (
        /* =================== 2. PRIVATE LOGGED-IN SYSTEM =================== */
        <div className="flex min-h-screen">
          
          {/* Sidebar Drawer Container */}
          <div className={`hidden lg:block`}>
            <Sidebar 
              activeTab={page} 
              setActiveTab={handleSidebarTabShift}
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
              language={language}
              setLanguage={setLanguage}
              triggerEmergency={() => setEmergencyActive(true)}
            />
          </div>

          {/* Mobile Top Header */}
          <div className="lg:hidden fixed top-0 left-0 w-full h-14 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] flex items-center justify-between px-6 z-50 transition-colors duration-300 shadow-xs">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[var(--text-primary)] hover:text-feminine-pink transition-colors cursor-pointer"
              >
                <Menu size={22} />
              </button>
              <h2 className="font-display font-extrabold text-lg bg-gradient-to-r from-feminine-pink to-feminine-purple bg-clip-text text-transparent">
                SAKHI
              </h2>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <div className="flex items-center gap-1.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full px-2 py-0.5 shadow-2xs hover:border-feminine-pink/30 transition-all duration-300">
                <Globe size={11} className="text-feminine-pink" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-[9px] font-extrabold text-[var(--text-primary)] outline-none cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold">
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex h-7.5 w-7.5 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-2xs"
                title="Toggle Theme"
              >
                {darkMode ? <Sun size={12} className="text-amber-400" /> : <Moon size={12} className="text-[var(--text-primary)]" />}
              </button>

              {/* SOS Emergency Button */}
              <button 
                onClick={() => setEmergencyActive(true)}
                className="h-8 w-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center cursor-pointer hover:bg-red-500/20 active:scale-95 transition-all"
                title="SOS Emergency"
              >
                <ShieldAlert size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Drawer Overlay */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-40 flex">
              <div 
                className="fixed inset-0 bg-black/40 backdrop-blur-xs" 
                onClick={() => setMobileMenuOpen(false)}
              ></div>
              <div className="relative w-64 bg-white dark:bg-zinc-950 h-full shadow-2xl flex flex-col pt-14 animate-slide-in">
                <Sidebar 
                  activeTab={page} 
                  setActiveTab={handleSidebarTabShift}
                  darkMode={darkMode}
                  toggleDarkMode={() => setDarkMode(!darkMode)}
                  language={language}
                  setLanguage={setLanguage}
                  triggerEmergency={() => setEmergencyActive(true)}
                />
              </div>
            </div>
          )}

          {/* Active Private page rendering */}
          <div className="flex-grow flex flex-col lg:pl-0 pt-14 lg:pt-0">
            
            {/* Top Private header */}
            <div className="hidden lg:flex h-16 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] items-center justify-between px-10 transition-colors duration-300 shadow-sm">
              <div className="flex items-center gap-4 animate-fade-in">
                <h1 className="font-display font-extrabold text-lg text-[var(--text-primary)] tracking-tight">
                  {pageTitles[page] ? pageTitles[page][language] || pageTitles[page]['en'] : (
                    language === 'hi' ? 'SAKHI कार्यक्षेत्र' : 
                    language === 'bn' ? 'SAKHI ওয়ার্কস্পেস' : 
                    language === 'ta' ? 'SAKHI பணியிடம்' : 
                    language === 'te' ? 'SAKHI వర్క్‌స్పేస్' : 
                    language === 'mr' ? 'SAKHI वर्कस्पेस' : 
                    'SAKHI Workspace'
                  )}
                </h1>
                
                {/* HIPAA Secure Pill Badge */}
                <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 shadow-2xs select-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="uppercase tracking-wider">
                    {language === 'hi' ? 'HIPAA सुरक्षित' : 
                     language === 'bn' ? 'HIPAA সুরক্ষিত' : 
                     language === 'ta' ? 'HIPAA பாதுகாப்பானது' : 
                     language === 'te' ? 'HIPAA సురక్షితం' : 
                     language === 'mr' ? 'HIPAA सुरक्षित' : 
                     'HIPAA SECURE'}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                {user.isAdmin && (
                  <button
                    onClick={() => setPage(page === 'admin' ? 'dashboard' : 'admin')}
                    className="flex items-center gap-1 bg-indigo-100 dark:bg-indigo-950/30 border border-indigo-200/50 text-indigo-700 dark:text-indigo-400 rounded-full px-3 py-1.5 text-xs font-extrabold hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors cursor-pointer shadow-2xs"
                  >
                    {page === 'admin' ? (
                      language === 'hi' ? 'डैशबोर्ड देखें' : 
                      language === 'bn' ? 'ড্যাশবোর্ড দেখুন' : 
                      language === 'ta' ? 'டாஷ்போர்டை காண்க' : 
                      language === 'te' ? 'డాష్‌బోర్డ్‌ను వీక్షించండి' : 
                      language === 'mr' ? 'डॅशबोर्ड पहा' : 
                      'View Dashboard'
                    ) : (
                      language === 'hi' ? 'प्रशासक पैनल' : 
                      language === 'bn' ? 'অ্যাডমিন প্যানেল' : 
                      language === 'ta' ? 'நிர்வாக குழு' : 
                      language === 'te' ? 'అడ్మిన్ ప్యానెల్' : 
                      language === 'mr' ? 'अ‍ॅडमिन पॅनेल' : 
                      'Admin Panel'
                    )}
                  </button>
                )}

                {/* Global Controls: Language & Theme */}
                <div className="flex items-center gap-3 mr-1 border-r border-[var(--border-color)] pr-3.5">
                  {/* Language Selector */}
                  <div className="flex items-center gap-1.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full px-2.5 py-1 shadow-2xs hover:border-feminine-pink/30 transition-all duration-300">
                    <Globe size={13} className="text-feminine-pink" />
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="bg-transparent text-[11px] font-extrabold text-[var(--text-primary)] outline-none cursor-pointer"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code} className="bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold">
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Theme Toggle */}
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:border-feminine-pink/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-2xs"
                    title="Toggle Theme"
                  >
                    {darkMode ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-[var(--text-primary)]" />}
                  </button>
                </div>
                
                <div 
                  className="flex items-center gap-2.5 cursor-pointer group"
                  onClick={() => setPage('profile')}
                  title="View Profile Settings"
                >
                  <div className="h-8.5 w-8.5 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white flex items-center justify-center font-bold text-xs shadow-sm border border-white dark:border-zinc-800 group-hover:scale-105 transition-transform duration-300">
                    {user.firstName[0]}
                  </div>
                  <span className="text-xs font-extrabold text-[var(--text-primary)] group-hover:text-feminine-pink transition-colors">{user.firstName}</span>
                </div>
                
                <button 
                  onClick={() => {
                    setUser(null);
                    setPage('home');
                  }}
                  className="text-xs font-extrabold text-[var(--text-secondary)] hover:text-feminine-pink transition-colors ml-2.5 cursor-pointer"
                >
                  {language === 'hi' ? 'लॉग आउट' : 
                   language === 'bn' ? 'লগ আউট' : 
                   language === 'ta' ? 'வெளியேறு' : 
                   language === 'te' ? 'లాగ్అవుట్' : 
                   language === 'mr' ? 'लॉगआउट' : 
                   'Logout'}
                </button>
              </div>
            </div>

            {/* Dashboard viewport */}
            <main className="flex-grow p-6 sm:p-10 max-w-7xl w-full mx-auto overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {page === 'admin' && user.isAdmin && (
                    <AdminPanel language={language} />
                  )}
                  {page === 'landing' && (
                    <HomePage setPage={setPage} language={language} setUser={setUser} />
                  )}
                  {page === 'profile' && (
                    <ProfilePage user={user} setUser={setUser} />
                  )}
                  {page === 'dashboard' && (
                    <Dashboard 
                      language={language}
                      cycleLogs={cycleLogs}
                      setCycleLogs={setCycleLogs}
                      setTab={setPage}
                      waterIntake={waterIntake}
                      setWaterIntake={setWaterIntake}
                    />
                  )}
                  {page === 'calendar' && (
                    <CycleTracker 
                      language={language}
                      cycleLogs={cycleLogs}
                      setCycleLogs={setCycleLogs}
                      setTab={setPage}
                    />
                  )}
                  {page === 'blood-analysis' && (
                    <BloodAnalysis language={language} />
                  )}
                  {page === 'ai-chat' && (
                    <AIChatbot language={language} setTab={setPage} />
                  )}
                  {page === 'diet-fitness' && (
                    <DietGenerator language={language} />
                  )}
                  {page === 'zen' && (
                    <MentalWellness language={language} />
                  )}
                  {page === 'community' && (
                    <CommunityPlatform language={language} />
                  )}
                </motion.div>
              </AnimatePresence>
            </main>

          </div>
        </div>
      )}

      {/* 3. GLOBAL FLOATING AI HEALTH ASSISTANT */}
      <FloatingChatbot language={language} />

      {/* 4. EMERGENCY SOS ALERTS POPUP */}
      {emergencyActive && (
        <EmergencySystem 
          language={language} 
          closeEmergency={() => setEmergencyActive(false)} 
        />
      )}

    </div>
  );
}
