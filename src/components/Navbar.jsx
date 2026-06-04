import React, { useState } from 'react';
import { 
  Heart, Sun, Moon, Globe, LogIn, UserCheck, Shield, BookOpen, Bell, 
  Menu, X, Activity, Calendar, Droplet, Sparkles, Utensils, Smile, Users 
} from 'lucide-react';

export default function Navbar({ 
  page, 
  setPage, 
  user, 
  setUser, 
  darkMode, 
  setDarkMode, 
  language, 
  setLanguage,
  triggerEmergency
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'hi', name: 'HI' },
    { code: 'bn', name: 'BN' },
    { code: 'ta', name: 'TA' },
    { code: 'te', name: 'TE' },
    { code: 'mr', name: 'MR' }
  ];

  const menuItems = [
    { id: 'dashboard', label: { en: 'Dashboard', hi: 'डैशबोर्ड', bn: 'ড্যাশবোর্ড', ta: 'டாஷ்போர்டு', te: 'డాష్‌బోర్డ్', mr: 'डॅशबोर्ड' }, icon: Activity },
    { id: 'calendar', label: { en: 'Cycle Tracker', hi: 'चक्र ट्रैकर', bn: 'পিরিয়ড ট্র্যাকার', ta: 'மாதவிடாய் காட்டி', te: 'ఋతు చక్రం', mr: 'सायकल ट्रॅकर' }, icon: Calendar },
    { id: 'blood-analysis', label: { en: 'Blood Analysis', hi: 'रक्त विश्लेषण', bn: 'রক্ত विश्लेषण', ta: 'இரத்த பகுப்பாய்வு', te: 'రక్త విశ్లేషణ', mr: 'रक्त विश्लेषण' }, icon: Droplet },
    { id: 'ai-chat', label: { en: 'My Health Chat', hi: 'स्वास्थ्य चैट', bn: 'হেলথ চ্যাট', ta: 'சுகாதார அரட்டை', te: 'ఆరోగ్య చాట్', mr: 'आरोग्य चॅट' }, icon: Sparkles },
    { id: 'diet-fitness', label: { en: 'Diet & Yoga', hi: 'आहार और योग', bn: 'ডায়েট ও যোগব্যায়াম', ta: 'உணவு & யோகா', te: 'డైట్ & యోగా', mr: 'आहार आणि योग' }, icon: Utensils },
    { id: 'zen', label: { en: 'Zen Room', hi: 'ध्यान कक्ष', bn: 'ধ্যান कक्ष', ta: 'தியான அறை', te: 'ధ్యాన గది', mr: 'ध्यान कक्ष' }, icon: Smile },
    { id: 'community', label: { en: 'Community', hi: 'समुदाय', bn: 'কমিউনিটি', ta: 'சமூகம்', te: 'కమ్యూనిటీ', mr: 'समुदाय' }, icon: Users }
  ];

  const sosStrings = {
    en: 'SOS Emergency',
    hi: 'आपातकालीन SOS',
    bn: 'জরুরী SOS',
    ta: 'அவசர SOS',
    te: 'అత్యవసర SOS',
    mr: 'आपत्कालीन SOS'
  };

  const strings = {
    dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड', bn: 'ড্যাশবোর্ড', ta: 'டாஷ்போர்டு', te: 'డాష్‌బోర్డ్', mr: 'डॅशबोर्ड' },
    logout: { en: 'Logout', hi: 'लॉग आउट', bn: 'লগআউট', ta: 'வெளியேறு', te: 'లాగ్అవుట్', mr: 'लॉगआउट' },
    signIn: { en: 'Sign In', hi: 'साइन इन करें', bn: 'সাইন ইন', ta: 'உள்நுழைய', te: 'సైన్ ఇన్', mr: 'साइन इन करा' },
    getStarted: { en: 'Get Started', hi: 'शुरू करें', bn: 'शुरू करें', ta: 'தொடங்குங்கள்', te: 'ప్రారంభించండి', mr: 'सुरुवात करा' }
  };

  const isPublicPage = ['home', 'about', 'blog', 'contact', 'login', 'signup', 'forgot', 'verification', 'server-blueprints'].includes(page);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100/20 dark:border-zinc-900/50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6">
        
        {/* Left: Brand Logo & Hamburger for Mobile (Natural sizing) */}
        <div className="flex items-center justify-start gap-4 shrink-0">
          {user && !isPublicPage && (
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[var(--text-primary)] hover:text-pink-500 transition-colors cursor-pointer p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-900"
              title="Toggle Menu"
            >
              <Menu size={22} />
            </button>
          )}
          
          <div 
            className="flex items-center cursor-pointer group shrink-0"
            onClick={() => {
              setUser(null);
              setPage('home');
            }}
          >
            <img 
              src="/logo.png" 
              alt="SAKHI Logo" 
              className="h-12 w-12 rounded-xl object-contain border border-gray-200 dark:border-zinc-800 bg-white p-1.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-pink-200/50" 
            />
          </div>
        </div>

        {/* Center: Horizontal menu items centered mathematically using flexbox (Desktop private workspace) */}
        {user && !isPublicPage && (
          <div className="hidden lg:flex items-center flex-shrink-0 justify-center px-4">
            <div className="flex items-center gap-0.5 p-1 bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-zinc-800/60 rounded-full">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = page === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setPage(item.id)}
                    className={`flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive 
                        ? 'bg-white dark:bg-zinc-800 text-pink-650 dark:text-pink-400 border border-gray-200/10 dark:border-zinc-700/50 shadow-sm' 
                        : 'text-gray-600 dark:text-zinc-400 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-white/40 dark:hover:bg-zinc-850/30'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-pink-500' : 'text-gray-450 dark:text-zinc-500'} />
                    <span className={`${isActive ? 'inline' : 'hidden xl:inline'} whitespace-nowrap`}>
                      {item.label[language] || item.label['en']}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Right: Actions (Natural sizing) */}
        <div className="flex items-center justify-end gap-3.5 shrink-0">
          


          {/* Language Selector */}
          {(!user || isPublicPage || true) && (
            <div className="hidden sm:flex shrink-0 items-center gap-1 bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100/80 dark:hover:bg-zinc-850 rounded-full px-3 py-1.5 border border-gray-200 dark:border-zinc-800 shadow-sm transition-colors duration-200">
              <Globe size={13} className="text-pink-500" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-[11px] font-bold text-gray-700 dark:text-zinc-300 outline-none cursor-pointer pr-1"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="dark:bg-zinc-950 text-xs font-semibold text-gray-800 dark:text-zinc-200">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-850 transition-all duration-200 cursor-pointer shadow-sm text-gray-600 dark:text-zinc-400"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} />}
          </button>

          {/* User Section / Auth State */}
          {user ? (
            <div className="flex items-center gap-2 animate-fade-in">
              {/* Notification Bell */}
              <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-50/60 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-850 text-gray-600 dark:text-zinc-400 hover:text-pink-500 relative cursor-pointer transition-all shadow-sm">
                <Bell size={15} />
                <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 bg-pink-500 rounded-full ring-2 ring-white dark:ring-zinc-950"></span>
              </button>

              {/* User Avatar */}
              <div 
                className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
                onClick={() => setPage('profile')}
                title="View Profile Settings"
              >
                <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-[1.5px] shadow-sm hover:shadow-pink-500/10 transition-all duration-300 group-hover:scale-105">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-zinc-950">
                    <span className="font-extrabold text-[11px] bg-gradient-to-tr from-pink-500 to-purple-600 bg-clip-text text-transparent dark:text-white">
                      {user.firstName[0]}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Desktop Logout */}
              <button
                onClick={() => {
                  setUser(null);
                  setPage('home');
                }}
                className="hidden md:flex shrink-0 items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-200 dark:border-zinc-800 text-[11px] font-bold text-gray-500 hover:text-red-500 dark:hover:text-red-400 hover:border-red-200/50 dark:hover:border-red-955/50 bg-gray-50 dark:bg-zinc-900 cursor-pointer transition-all h-9"
              >
                <span>{strings.logout[language] || strings.logout['en']}</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setPage('login')}
                className="text-xs font-bold text-gray-650 dark:text-zinc-400 hover:text-pink-500 transition-colors cursor-pointer"
              >
                {strings.signIn[language] || strings.signIn['en']}
              </button>
              <button
                onClick={() => setPage('signup')}
                className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-4 py-2 text-xs font-extrabold text-white shadow-sm shadow-pink-500/10 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                {strings.getStarted[language] || strings.getStarted['en']}
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Mobile Drawer Navigation (Logged in, Private workspace only) */}
      {mobileMenuOpen && user && !isPublicPage && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="relative w-72 bg-white dark:bg-zinc-955 h-full shadow-2xl flex flex-col p-6 z-50 animate-slide-in justify-between">
            <div>
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-zinc-900">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 text-white flex items-center justify-center font-black text-xs">
                    S
                  </div>
                  <span className="font-display font-extrabold tracking-tight dark:text-white text-base">SAKHI</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-zinc-900 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Profile Overview */}
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-zinc-900/40 p-3.5 rounded-2xl border border-gray-100 dark:border-zinc-900 mb-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-[1.5px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-zinc-950">
                    <span className="font-extrabold text-sm bg-gradient-to-tr from-pink-500 to-purple-600 bg-clip-text text-transparent dark:text-white">
                      {user.firstName[0]}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-black text-[var(--text-primary)]">Hello, {user.firstName}</h4>
                  <span className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">{user.subscriptionPlan} Member</span>
                </div>
              </div>

              {/* Vertical Menu Links */}
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = page === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setPage(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer text-left ${
                        isActive 
                          ? 'bg-pink-50 dark:bg-pink-955/40 text-pink-650 dark:text-pink-400 border-l-2 border-pink-500' 
                          : 'text-[var(--text-primary)] hover:bg-gray-55 dark:hover:bg-zinc-900/50'
                      }`}
                    >
                      <Icon size={16} className={isActive ? 'text-pink-500' : 'text-gray-450'} />
                      <span className="whitespace-nowrap">{item.label[language] || item.label['en']}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-100 dark:border-zinc-900">
              
              {/* Language Selector inside Drawer */}
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-extrabold text-[var(--text-secondary)] flex items-center gap-1.5"><Globe size={14}/> Language</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-gray-50 dark:bg-zinc-900 text-xs font-extrabold text-[var(--text-primary)] border border-gray-200 dark:border-zinc-800 rounded-lg px-2.5 py-1 cursor-pointer outline-none"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="dark:bg-zinc-950">
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* SOS Emergency button inside Drawer */}
              <button
                onClick={() => {
                  triggerEmergency();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span>{sosStrings[language] || sosStrings['en']}</span>
              </button>

              {/* Logout inside Drawer */}
              <button
                onClick={() => {
                  setUser(null);
                  setPage('home');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2 text-xs font-bold text-gray-500 hover:text-pink-505 transition-colors cursor-pointer"
              >
                {strings.logout[language] || strings.logout['en']}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
