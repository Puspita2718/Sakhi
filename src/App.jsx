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
import BloodAnalysis from './components/BloodAnalysis';
import AIChatbot from './components/AIChatbot';
import DietGenerator from './components/DietGenerator';
import MentalWellness from './components/MentalWellness';
import CommunityPlatform from './components/CommunityPlatform';
import EmergencySystem from './components/EmergencySystem';
import AdminPanel from './components/AdminPanel';
import ServerBlueprints from './components/ServerBlueprints';

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
              <span>© 2026 SAKHI Inc. All rights reserved. HIPAA & GDPR Certified.</span>
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
          <div className="lg:hidden fixed top-0 left-0 w-full h-14 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-200/50 dark:border-zinc-800/80 flex items-center justify-between px-6 z-50 transition-colors duration-300">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-800 dark:text-zinc-200 cursor-pointer"
              >
                <Menu size={22} />
              </button>
              <h2 className="font-display font-extrabold text-lg bg-gradient-to-r from-feminine-pink to-feminine-purple bg-clip-text text-transparent">
                SAKHI
              </h2>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-gray-100/90 dark:bg-zinc-900/90 rounded-full px-2 py-0.5 border border-gray-200 dark:border-zinc-800">
                <Globe size={11} className="text-feminine-pink" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-[9px] font-extrabold text-gray-850 dark:text-zinc-200 outline-none cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="dark:bg-zinc-950">
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                title="Toggle Theme"
              >
                {darkMode ? <Sun size={12} className="text-amber-400" /> : <Moon size={12} className="text-gray-700 dark:text-zinc-350" />}
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
            <div className="hidden lg:flex h-16 border-b border-gray-200 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/50 items-center justify-between px-10 backdrop-blur-md transition-colors duration-300">
              <div className="flex items-center gap-2">
                <Info size={14} className="text-feminine-pink animate-bounce" />
                <span className="text-xs text-gray-800 dark:text-zinc-200 font-bold">
                  Intimate Health tracking is online. JWT Verification Session: active.
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                {user.isAdmin && (
                  <button
                    onClick={() => setPage(page === 'admin' ? 'dashboard' : 'admin')}
                    className="flex items-center gap-1 bg-indigo-100 dark:bg-indigo-950/30 border border-indigo-200/50 text-indigo-700 dark:text-indigo-400 rounded-full px-3 py-1 text-xs font-extrabold hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-colors"
                  >
                    {page === 'admin' ? 'View Dashboard' : 'Admin Panel'}
                  </button>
                )}

                {/* Global Controls: Language & Theme */}
                <div className="flex items-center gap-3 mr-1.5 border-r border-gray-200 dark:border-zinc-800 pr-3">
                  {/* Language Selector */}
                  <div className="flex items-center gap-1.5 bg-gray-100/90 dark:bg-zinc-900/95 rounded-full px-2.5 py-1 border border-gray-200 dark:border-zinc-800/80 shadow-xs hover:border-feminine-pink/30 transition-all duration-300">
                    <Globe size={13} className="text-feminine-pink" />
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="bg-transparent text-[11px] font-extrabold text-gray-850 dark:text-zinc-200 outline-none cursor-pointer"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code} className="dark:bg-zinc-950 font-semibold">
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Theme Toggle */}
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all duration-300 cursor-pointer shadow-xs"
                    title="Toggle Theme"
                  >
                    {darkMode ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-gray-700 dark:text-zinc-300" />}
                  </button>
                </div>
                
                <div 
                  className="flex items-center gap-2.5 cursor-pointer group"
                  onClick={() => setPage('profile')}
                  title="View Profile Settings"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white flex items-center justify-center font-bold text-xs shadow-md border border-white group-hover:scale-105 transition-transform duration-300">
                    {user.firstName[0]}
                  </div>
                  <span className="text-xs font-extrabold text-gray-850 dark:text-zinc-200">{user.firstName}</span>
                </div>
                
                <button 
                  onClick={() => {
                    setUser(null);
                    setPage('home');
                  }}
                  className="text-xs font-extrabold text-gray-500 hover:text-feminine-pink transition-colors ml-2 cursor-pointer"
                >
                  Logout
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
                  {(page === 'dashboard' || page === 'calendar') && (
                    <Dashboard 
                      language={language}
                      cycleLogs={cycleLogs}
                      setCycleLogs={setCycleLogs}
                      setTab={setPage}
                      waterIntake={waterIntake}
                      setWaterIntake={setWaterIntake}
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
