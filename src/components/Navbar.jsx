import React from 'react';
import { Heart, Sun, Moon, Globe, LogIn, UserCheck, Shield, BookOpen } from 'lucide-react';

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform duration-300">
            <Heart size={20} fill="white" className="animate-pulse-slow" />
          </div>
          <div>
            <span className="font-display text-xl font-extrabold tracking-tight bg-gradient-to-r from-feminine-pink to-feminine-purple bg-clip-text text-transparent">
              HerCare AI
            </span>
            <span className="hidden sm:block text-[10px] text-gray-500 font-semibold uppercase tracking-wider -mt-1 dark:text-zinc-400">
              Swasthya Mitra
            </span>
          </div>
        </div>

        {/* Desktop Public Navigation Links */}
        {!user && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600 dark:text-zinc-300">
            <button 
              onClick={() => setPage('home')} 
              className={`hover:text-feminine-pink transition-colors ${page === 'home' ? 'text-feminine-pink' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setPage('about')} 
              className={`hover:text-feminine-pink transition-colors ${page === 'about' ? 'text-feminine-pink' : ''}`}
            >
              About Us
            </button>
            <button 
              onClick={() => setPage('blog')} 
              className={`hover:text-feminine-pink transition-colors ${page === 'blog' ? 'text-feminine-pink' : ''}`}
            >
              Health Blog
            </button>
            <button 
              onClick={() => setPage('contact')} 
              className={`hover:text-feminine-pink transition-colors ${page === 'contact' ? 'text-feminine-pink' : ''}`}
            >
              Contact
            </button>
            <button 
              onClick={() => setPage('server-blueprints')} 
              className={`hover:text-feminine-pink transition-colors flex items-center gap-1.5 ${page === 'server-blueprints' ? 'text-feminine-pink' : ''}`}
            >
              <BookOpen size={14} /> Backend Blueprint
            </button>
          </nav>
        )}

        {/* Global Controls & Auth actions */}
        <div className="flex items-center gap-4">
          
          {/* Language Selector */}
          <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-zinc-800 rounded-full px-2.5 py-1">
            <Globe size={13} className="text-gray-400" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-[11px] font-bold text-gray-600 dark:text-zinc-300 outline-none cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="dark:bg-zinc-900">
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-gray-500" />}
          </button>

          {/* Auth buttons */}
          {user ? (
            <div className="flex items-center gap-3">
              {/* If Admin, enable toggling admin view */}
              {user.isAdmin && (
                <button
                  onClick={() => setPage(page === 'admin' ? 'dashboard' : 'admin')}
                  className="hidden sm:flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-3.5 py-1.5 text-xs font-semibold hover:opacity-90 transition-all border border-indigo-100 dark:border-indigo-900/50"
                >
                  <Shield size={13} /> {page === 'admin' ? 'User Dashboard' : 'Admin Panel'}
                </button>
              )}
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setPage('dashboard')}
              >
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white font-extrabold flex items-center justify-center text-sm shadow-md border border-white">
                  {user.firstName[0]}
                </div>
                <span className="hidden md:block text-sm font-semibold text-gray-700 dark:text-zinc-200">
                  {user.firstName}
                </span>
              </div>
              <button
                onClick={() => {
                  setUser(null);
                  setPage('home');
                }}
                className="text-xs font-bold text-gray-500 dark:text-zinc-400 hover:text-feminine-pink transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage('login')}
                className="hidden sm:flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-zinc-200 transition-colors"
              >
                <LogIn size={13} /> Login
              </button>
              <button
                onClick={() => setPage('signup')}
                className="rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple px-4 py-2 text-xs font-semibold text-white shadow-md shadow-pink-500/10 hover:opacity-95 hover:shadow-lg hover:shadow-pink-500/20 active:scale-95 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
