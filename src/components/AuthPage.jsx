import React, { useState } from 'react';
import { Mail, Lock, User, Globe } from 'lucide-react';

export default function AuthPage({ view, setPage, setUser }) {
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
    <div className="slide-in flex items-center justify-center min-h-[600px] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden glass-panel border border-gray-150/30 bg-white/70 dark:bg-zinc-955/20 shadow-xs animate-fade-in">
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
                <span className="font-semibold text-[var(--text-secondary)]">Email Address</span>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-800 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" 
                    required 
                  />
                </div>
              </div>
              <button type="submit" className="rounded-full bg-feminine-pink hover:bg-feminine-pink/90 text-white py-3.5 font-bold shadow-lg shadow-pink-500/20 transition-all duration-300 cursor-pointer">
                Send Reset Link
              </button>
              <button type="button" onClick={() => setPage('login')} className="text-center font-bold text-feminine-purple hover:underline mt-2 cursor-pointer">
                Back to Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="flex flex-col gap-4 text-xs">
              
              {view === 'signup' && (
                <div className="flex flex-col gap-1.5 animate-fade-in">
                  <span className="font-semibold text-[var(--text-secondary)]">First Name</span>
                  <div className="relative">
                    <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-800 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" 
                      required 
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[var(--text-secondary)]">Email Address</span>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-850 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" 
                    required 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[var(--text-secondary)]">Password</span>
                  {view === 'login' && (
                    <button type="button" onClick={() => setPage('forgot')} className="font-bold text-[10px] text-feminine-purple hover:underline cursor-pointer">
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
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-800 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" 
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
                <span className="flex-shrink mx-4 text-[9px] text-[var(--text-secondary)] font-extrabold uppercase tracking-wider">or authenticate with</span>
                <div className="flex-grow border-t border-gray-200/60 dark:border-zinc-800"></div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setUser({ firstName: 'Ananya', lastName: 'Sharma', email: 'ananya@example.com', subscriptionPlan: 'standard' });
                  setPage('dashboard');
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full border border-gray-250 bg-white dark:bg-zinc-900 py-3 font-bold text-xs text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-850/50 transition-colors cursor-pointer shadow-xs"
              >
                <Globe size={14} className="text-feminine-pink animate-pulse" /> Google Authentication
              </button>

              <span className="text-center text-[11px] text-[var(--text-secondary)] font-bold mt-1">
                {view === 'login' ? 'Need an account? ' : 'Have an account already? '}
                <button 
                  type="button"
                  onClick={() => setPage(view === 'login' ? 'signup' : 'login')}
                  className="font-bold text-feminine-purple hover:underline cursor-pointer"
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
