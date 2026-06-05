import React from 'react';
import { Heart, Sun, Moon, Globe, LogIn, UserCheck, Shield, BookOpen, Bell } from 'lucide-react';

export default function Navbar({ 
  page, 
  setPage, 
  user, 
  setUser, 
  darkMode, 
  setDarkMode, 
  language, 
  setLanguage,
  isAdmin,
  setIsAdmin 
}) {
  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'hi', name: 'HI' },
    { code: 'bn', name: 'BN' },
    { code: 'ta', name: 'TA' },
    { code: 'te', name: 'TE' },
    { code: 'mr', name: 'MR' }
  ];

  const strings = {
    features: { en: 'Features', hi: 'विशेषताएं', bn: 'ফিচার', ta: 'அம்சங்கள்', te: 'ఫీచర్లు', mr: 'वैशिष्ट्ये' },
    knowledgeHub: { en: 'Knowledge Hub', hi: 'ज्ञान केंद्र', bn: 'নলেজ হাব', ta: 'அறிவு மையம்', te: 'నాలెడ్జ్ హబ్', mr: 'ज्ञान केंद्र' },
    experts: { en: 'Experts', hi: 'विशेषज्ञ', bn: 'বিশেষজ্ঞ', ta: 'நிபுணர்கள்', te: 'నిపుణులు', mr: 'तज्ञ' },
    community: { en: 'Community', hi: 'समुदाय', bn: 'কমিউনিটি', ta: 'சமூகம்', te: 'కమ్యూనిటీ', mr: 'समुदाय' },
    dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड', bn: 'ড্যাশবোর্ড', ta: 'டாஷ்போர்டு', te: 'డాష్‌బోర్డ్', mr: 'डॅशबोर्ड' },
    logout: { en: 'Logout', hi: 'लॉग आउट', bn: 'লগআউট', ta: 'வெளியேறு', te: 'లాగ్అవుట్', mr: 'लॉगआउट' },
    signIn: { en: 'Sign In', hi: 'साइन इन करें', bn: 'সাইন ইন', ta: 'உள்நுழைய', te: 'సైన్ ఇన్', mr: 'साइन इन करा' },
    getStarted: { en: 'Get Started', hi: 'शुरू करें', bn: 'শুরু করুন', ta: 'தொடங்குங்கள்', te: 'ప్రారంభించండి', mr: 'सुरुवात करा' }
  };

  const handleGetStarted = () => {
    // Automatically log in Ananya to show the dashboard
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
    <header className="sticky top-0 z-50 w-full border-b border-gray-150 dark:border-zinc-900 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6">
        
        {/* Brand Logo - SAKHI */}
        <div 
          className="flex items-center gap-2 cursor-pointer group animate-fade-in"
          onClick={() => {
            setUser(null);
            setPage('home');
          }}
        >
          <img 
            src="/logo.png" 
            alt="SAKHI Logo" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </div>



        {/* Global Controls & Auth actions */}
        <div className="flex items-center gap-4">
          
          {/* Language Selector */}
          <div className="flex items-center gap-1.5 bg-gray-100/80 dark:bg-zinc-900/85 rounded-full px-2.5 py-1 border border-gray-200 dark:border-zinc-800/80 shadow-xs hover:border-feminine-pink/30 transition-all duration-300">
            <Globe size={13} className="text-feminine-pink" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-[11px] font-extrabold text-gray-850 dark:text-zinc-200 outline-none cursor-pointer"
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
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all duration-300 cursor-pointer shadow-xs"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-gray-700 dark:text-zinc-300" />}
          </button>

          {/* Auth buttons / User Profile Info */}
          {user ? (
            <div className="flex items-center gap-4 animate-fade-in">
              {/* Notification Bell */}
              <button className="text-gray-800 dark:text-zinc-200 hover:text-feminine-pink relative cursor-pointer">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-1.5 w-1.5 bg-feminine-pink rounded-full"></span>
              </button>

              {/* Dashboard Button */}
              <button
                onClick={() => setPage('dashboard')}
                className="hidden sm:inline-flex rounded-full border border-feminine-pink/30 hover:bg-feminine-pink/5 text-[11px] font-extrabold text-feminine-pink px-4 py-2 cursor-pointer transition-all duration-300"
              >
                {strings.dashboard[language] || strings.dashboard['en']}
              </button>

              {/* User Avatar & Name */}
              <div 
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => setPage('profile')}
                title="View Profile Settings"
              >
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple overflow-hidden border border-white dark:border-zinc-800 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="font-extrabold text-sm text-white">{user.firstName[0]}</span>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setUser(null);
                  setPage('home');
                }}
                className="text-xs font-bold text-gray-500 hover:text-feminine-pink transition-colors cursor-pointer"
              >
                {strings.logout[language] || strings.logout['en']}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPage('login')}
                className="text-xs font-extrabold text-gray-800 dark:text-zinc-200 hover:text-feminine-pink transition-colors cursor-pointer mr-1"
              >
                {strings.signIn[language] || strings.signIn['en']}
              </button>
              <button
                onClick={() => setPage('signup')}
                className="rounded-full bg-feminine-pink hover:bg-feminine-pink/95 px-5 py-2.5 text-xs font-extrabold text-white shadow-md shadow-pink-500/10 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
              >
                {strings.getStarted[language] || strings.getStarted['en']}
              </button>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
