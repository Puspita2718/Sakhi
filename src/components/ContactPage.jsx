import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
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
    <div className="slide-in flex flex-col gap-12 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact details */}
        <div className="flex flex-col gap-8 text-left">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-feminine-pink bg-feminine-pink/10 px-3 py-1 rounded-full w-fit mb-3 block">Connect</span>
            <h1 className="font-display text-3xl font-extrabold text-[var(--text-primary)] mb-2">Speak to our Intimate Support Team</h1>
            <p className="text-xs text-[var(--text-secondary)] font-extrabold">Our customer care representatives are certified medical schedulers.</p>
          </div>

          <div className="flex flex-col gap-6 text-sm">
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-feminine-pink/10 text-feminine-pink flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <strong className="block text-[var(--text-primary)] font-extrabold">Email Address</strong>
                <span className="text-xs text-[var(--text-secondary)] font-bold">support@sakhi.ai</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-feminine-purple/10 text-feminine-purple flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <strong className="block text-[var(--text-primary)] font-extrabold">Help Desk Line</strong>
                <span className="text-xs text-[var(--text-secondary)] font-bold">1800-419-1020</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <strong className="block text-[var(--text-primary)] font-extrabold">Headquarters</strong>
                <span className="text-xs text-[var(--text-secondary)] font-bold">Hormonal Valley Area, Suite 400, New Delhi, IN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="glass-panel p-8 rounded-3xl flex flex-col gap-6 text-left">
          <h3 className="font-display font-extrabold text-lg text-[var(--text-primary)]">Send an Electronic Query</h3>
          
          {success ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-250 text-center flex flex-col items-center gap-3">
              <CheckCircle2 size={32} className="text-emerald-500 animate-bounce" />
              <h4 className="font-bold text-emerald-600">Query Transmitted</h4>
              <p className="text-[11px] text-[var(--text-secondary)] font-bold">Your secure ticket has been registered in AWS queues. We will respond within 4 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[var(--text-secondary)]">Name</span>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" 
                  required 
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[var(--text-secondary)]">Email</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" 
                  required 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[var(--text-secondary)]">Message</span>
                <textarea 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 min-h-[100px] resize-none font-semibold" 
                  required 
                />
              </div>

              <button type="submit" className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple py-3.5 text-xs font-bold text-white shadow-lg cursor-pointer hover:opacity-95 active:scale-98 transition-all">
                Transmit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
