import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
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
import Footer from './components/Footer';
import { supabase } from './supabaseClient';

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
  const [user, setUser] = useState(null); 

  const handleSetUser = (value) => {
    if (value === null) {
      supabase.auth.signOut().catch((err) => console.error('Error signing out:', err));
    }
    setUser(value);
  };

  // Subscribe to Supabase auth state changes
  useEffect(() => {
    const checkInitialSession = async () => {
      if (supabase.auth.getSession) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user) {
            const u = session.user;
            setUser({
              firstName: u.user_metadata?.firstName || 'Ananya',
              lastName: 'Sharma',
              email: u.email,
              isAdmin: u.email === 'admin@sakhi.ai' || u.email === 'ananya@example.com',
              subscriptionPlan: 'standard'
            });
          }
        } catch (error) {
          console.error('Error checking initial session:', error);
        }
      }
    };

    checkInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(`[Supabase Auth Event] ${event}`);
      if (session?.user) {
        const u = session.user;
        setUser({
          firstName: u.user_metadata?.firstName || 'Ananya',
          lastName: 'Sharma',
          email: u.email,
          isAdmin: u.email === 'admin@sakhi.ai' || u.email === 'ananya@example.com',
          subscriptionPlan: 'standard'
        });
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    return () => {
      if (subscription && subscription.unsubscribe) {
        subscription.unsubscribe();
      }
    };
  }, []); 

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

  const isPublicPage = ['home', 'about', 'blog', 'contact', 'login', 'signup', 'forgot', 'verification', 'server-blueprints'].includes(page);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Unified Navigation Bar */}
      <Navbar 
        page={page}
        setPage={setPage}
        user={user}
        setUser={handleSetUser}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        triggerEmergency={() => setEmergencyActive(true)}
      />
      
      {/* Unified Main Content Viewport */}
      <main className="flex-grow mx-auto max-w-7xl w-full px-6 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Public Pages */}
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

            {/* Private Workspace Pages */}
            {user && (
              <>
                {page === 'admin' && user.isAdmin && (
                  <AdminPanel language={language} />
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
                    triggerEmergency={() => setEmergencyActive(true)}
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
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Elegant Premium Footer for all pages */}
      <Footer setPage={setPage} language={language} />

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
