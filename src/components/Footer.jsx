import React, { useState } from 'react';
import { Heart, Send, ShieldCheck, FileText, HelpCircle } from 'lucide-react';

export default function Footer({ setPage, language }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const t = {
    en: {
      desc: 'Your secure clinical health companion. Track cycles, manage diets, check wellness, and consult experts in total privacy.',
      healthServices: 'Health Services',
      trustSecurity: 'Trust & Privacy',
      newsletterTitle: 'Stay Updated',
      newsletterDesc: 'Subscribe for curated medical insights, hygiene tips, and wellness newsletters.',
      emailPlaceholder: 'Enter your email address',
      submitting: 'Subscribing...',
      subscribedMsg: 'Thank you for subscribing!',
      copyright: 'All rights reserved. HIPAA & GDPR Certified.',
      links: {
        dashboard: 'Dashboard',
        tracker: 'Cycle Tracker',
        diet: 'Diet & Yoga',
        zen: 'Zen Room',
        community: 'Community',
        about: 'About Us',
        standards: 'Clinical Standards',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    },
    hi: {
      desc: 'आपकी सुरक्षित नैदानिक स्वास्थ्य सखी। पूर्ण गोपनीयता में चक्रों को ट्रैक करें, आहार प्रबंधित करें, कल्याण की जांच करें और विशेषज्ञों से परामर्श करें।',
      healthServices: 'स्वास्थ्य सेवाएं',
      trustSecurity: 'विश्वास और गोपनीयता',
      newsletterTitle: 'अपडेट रहें',
      newsletterDesc: 'क्यूरेट किए गए चिकित्सा अंतर्दृष्टि, स्वच्छता सुझावों और कल्याण समाचार पत्रों के लिए सदस्यता लें।',
      emailPlaceholder: 'अपना ईमेल पता दर्ज करें',
      submitting: 'सदस्यता ली जा रही है...',
      subscribedMsg: 'सदस्यता लेने के लिए धन्यवाद!',
      copyright: 'सर्वाधिकार सुरक्षित। HIPAA और GDPR प्रमाणित।',
      links: {
        dashboard: 'डैशबोर्ड',
        tracker: 'चक्र ट्रैकर',
        diet: 'आहार और योग',
        zen: 'ध्यान कक्ष',
        community: 'समुदाय',
        about: 'हमारे बारे में',
        standards: 'नैदानिक मानक',
        privacy: 'गोपनीयता नीति',
        terms: 'सेवा की शर्तें'
      }
    },
    bn: {
      desc: 'আপনার নিরাপদ ক্লিনিকাল স্বাস্থ্য সঙ্গী। সম্পূর্ণ গোপনীয়তায় পিরিয়ড ট্র্যাক করুন, ডায়েট পরিচালনা করুন, সুস্থতা পরীক্ষা করুন এবং বিশেষজ্ঞদের সাথে পরামর্শ করুন।',
      healthServices: 'স্বাস্থ্য সেবা',
      trustSecurity: 'বিশ্বাস ও গোপনীয়তা',
      newsletterTitle: 'আপডেট থাকুন',
      newsletterDesc: 'নির্বাচিত চিকিৎসা তথ্য, স্বাস্থ্যবিধি টিपস এবং সুস্থতা নিউজলেটারের জন্য সাবস্ক্রাইব করুন।',
      emailPlaceholder: 'আপনার ইমেল ঠিকানা লিখুন',
      submitting: 'সাবস্ক্রাইব করা হচ্ছে...',
      subscribedMsg: 'সাবস্ক্রাইব করার জন্য ধন্যবাদ!',
      copyright: 'সর্বস্বত্ব সংরক্ষিত। HIPAA এবং GDPR প্রত্যয়িত।',
      links: {
        dashboard: 'ড্যাশবোর্ড',
        tracker: 'পিরিয়ড ট্র্যাকার',
        diet: 'ডায়েট ও যোগব্যায়াম',
        zen: 'ধ্যান কক্ষ',
        community: 'কমিউনিটি',
        about: 'আমাদের সম্পর্কে',
        standards: 'ক্লিনিকাল স্ট্যান্ডার্ড',
        privacy: 'গোপনীয়তা নীতি',
        terms: 'পরিষেবার শর্তাবলী'
      }
    },
    ta: {
      desc: 'உங்களின் பாதுகாப்பான மருத்துவ சுகாதாரத் தோழி. சுழற்சிகளைக் கண்காணிக்கவும், உணவுகளை நிர்வகிக்கவும், ஆரோக்கியத்தை சரிபார்க்கவும் மற்றும் முற்றிலும் தனிப்பட்ட முறையில் நிபுணர்களை அணுகவும்.',
      healthServices: 'சுகாதார சேவைகள்',
      trustSecurity: 'நம்பிக்கை & தனியுரிமை',
      newsletterTitle: 'புதுப்பித்த நிலையில் இருங்கள்',
      newsletterDesc: 'தொகுக்கப்பட்ட மருத்துவ நுண்ணறிவு, சுகாதார குறிப்புகள் மற்றும் ஆரோக்கிய செய்திமடல்களுக்கு குழுசேரவும்.',
      emailPlaceholder: 'மின்னஞ்சல் முகவரியை உள்ளிடவும்',
      submitting: 'பதிவு செய்கிறது...',
      subscribedMsg: 'குழுசேர்ந்ததற்கு நன்றி!',
      copyright: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. HIPAA & GDPR சான்றிதழ் பெற்றது.',
      links: {
        dashboard: 'டாஷ்போர்டு',
        tracker: 'மாதவிடாய் காட்டி',
        diet: 'உணவு & யோகா',
        zen: 'தியான அறை',
        community: 'சமூகம்',
        about: 'எங்களைப் பற்றி',
        standards: 'மருத்துவ தரநிலைகள்',
        privacy: 'தனியுரிமைக் கொள்கை',
        terms: 'சேவை விதிமுறைகள்'
      }
    },
    te: {
      desc: 'మీ సురక్షిత క్లినికల్ ఆరోగ్య సహచరుడు. చక్రాలను ట్రాక్ చేయండి, ఆహారాన్ని నిర్వహించండి, ఆరోగ్యాన్ని తనిఖీ చేయండి మరియు పూర్తి గోప్యతతో నిపుణులను సంప్రదించండి.',
      healthServices: 'ఆరోగ్య సేవలు',
      trustSecurity: 'విశ్వాసం & గోప్యత',
      newsletterTitle: 'నవీకరించబడి ఉండండి',
      newsletterDesc: 'క్యూరేటెడ్ వైద్య అంతర్దృష్టులు, పరిశుభ్రత చిట్కాలు మరియు వెల్‌నెస్ వార్తాలేఖల కోసం సభ్యత్వాన్ని పొందండి.',
      emailPlaceholder: 'మీ ఇమెయిల్ చిరునామాను నమోదు చేయండి',
      submitting: 'సభ్యత్వాన్ని పొందుతోంది...',
      subscribedMsg: 'సభ్యత్వం పొందినందుకు ధన్యవాదాలు!',
      copyright: 'సర్వ హక్కులు ప్రత్యేకించబడ్డాయి. HIPAA & GDPR సర్టిఫైడ్.',
      links: {
        dashboard: 'డ్యాష్‌బోర్డ్',
        tracker: 'రుతు చక్రం',
        diet: 'డైట్ & యోగా',
        zen: 'ధ్యాన గది',
        community: 'సహోదరి సంఘం',
        about: 'మా గురించి',
        standards: 'క్లినికల్ ప్రమాణాలు',
        privacy: 'గోప‍याతా విధానం',
        terms: 'సేవా నిబంధనలు'
      }
    },
    mr: {
      desc: 'तुमची सुरक्षित क्लिनिकल आरोग्य सखी. सायकल ट्रॅक करा, आहार व्यवस्थापित करा, कल्याण तपासा आणि संपूर्ण गोपनीयतेत तज्ञांचा सल्ला घ्या.',
      healthServices: 'आरोग्य सेवा',
      trustSecurity: 'विश्वास आणि गोपनीयता',
      newsletterTitle: 'अपडेट रहा',
      newsletterDesc: 'क्यूरेट केलेल्या वैद्यकीय अंतर्दृष्टी, स्वच्छता टिप्स आणि कल्याण वृत्तपत्रांसाठी सदस्यता घ्या.',
      emailPlaceholder: 'तुमचा ईमेल पत्ता प्रविष्ट करा',
      submitting: 'सदस्यता घेत आहे...',
      subscribedMsg: 'सदस्यता घेतल्याबद्दल धन्यवाद!',
      copyright: 'सर्व हक्क राखीव. HIPAA आणि GDPR प्रमाणित.',
      links: {
        dashboard: 'डॅशबोर्ड',
        tracker: 'सायकल ट्रॅकर',
        diet: 'आहार आणि योग',
        zen: 'ध्यान कक्ष',
        community: 'समुदाय',
        about: 'आमच्याबद्दल',
        standards: 'क्लिनिकल मानके',
        privacy: 'गोपनीयता धोरण',
        terms: 'सेवा शर्ती'
      }
    }
  };

  const currentT = t[language] || t['en'];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="border-t border-pink-100/30 dark:border-zinc-900/60 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md transition-all duration-300 w-full pt-16 pb-10 mt-auto">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-150/40 dark:border-zinc-900/50">
          
          {/* Brand Column (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-left">
            <div 
              className="flex items-center gap-2 cursor-pointer group w-fit"
              onClick={() => setPage('home')}
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white flex items-center justify-center font-black text-sm shadow-sm transition-transform group-hover:scale-105">
                S
              </div>
              <span className="font-display font-extrabold tracking-tight text-gray-800 dark:text-zinc-100 text-lg transition-colors group-hover:text-feminine-pink">
                SAKHI
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium pr-4">
              {currentT.desc}
            </p>
            
            {/* Social Icons using Inline SVGs for compatibility */}
            <div className="flex gap-3 mt-1.5 text-gray-500 dark:text-zinc-400">
              {[
                { 
                  url: 'https://twitter.com',
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )
                },
                { 
                  url: 'https://instagram.com',
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  )
                },
                { 
                  url: 'https://linkedin.com',
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c-0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )
                },
                { 
                  url: 'https://github.com',
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                    </svg>
                  )
                }
              ].map(({ icon, url }, i) => (
                <a 
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900 hover:bg-pink-50 dark:hover:bg-pink-955/40 hover:text-feminine-pink hover:border-pink-200 dark:hover:border-pink-900 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Health Services (Col Span 2.5) */}
          <div className="lg:col-span-2.5 flex flex-col gap-4 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-feminine-purple dark:text-pink-400/80">
              {currentT.healthServices}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-[var(--text-secondary)]">
              {[
                { id: 'dashboard', label: currentT.links.dashboard },
                { id: 'calendar', label: currentT.links.tracker },
                { id: 'diet-fitness', label: currentT.links.diet },
                { id: 'zen', label: currentT.links.zen },
                { id: 'community', label: currentT.links.community }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => setPage(link.id)}
                  className="w-fit hover:text-feminine-pink transition-colors text-left cursor-pointer hover:translate-x-0.5 transform duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Trust & Privacy (Col Span 2.5) */}
          <div className="lg:col-span-2.5 flex flex-col gap-4 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-feminine-purple dark:text-pink-400/80">
              {currentT.trustSecurity}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-[var(--text-secondary)]">
              {[
                { id: 'about', label: currentT.links.about },
                { id: 'standards', label: currentT.links.standards },
                { id: 'privacy', label: currentT.links.privacy },
                { id: 'terms', label: currentT.links.terms }
              ].map((link, i) => (
                <button
                  key={i}
                  onClick={() => setPage(link.id === 'about' ? 'about' : 'home')}
                  className="w-fit hover:text-feminine-pink transition-colors text-left cursor-pointer hover:translate-x-0.5 transform duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter (Col Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-feminine-purple dark:text-pink-400/80">
              {currentT.newsletterTitle}
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium">
              {currentT.newsletterDesc}
            </p>
            
            {subscribed ? (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 rounded-xl text-[11px] text-emerald-650 dark:text-emerald-400 font-bold animate-fade-in flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                {currentT.subscribedMsg}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={currentT.emailPlaceholder}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-800 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-medium shadow-inner"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-feminine-pink to-feminine-purple text-white py-2.5 text-xs font-bold shadow-md shadow-pink-500/10 hover:shadow-pink-500/20 active:scale-98 transition-all flex justify-center items-center gap-2 cursor-pointer"
                >
                  <Send size={12} />
                  <span>{currentT.links.dashboard === 'Dashboard' ? 'Subscribe' : currentT.subscribedMsg.replace('Thank you for ', '')}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 dark:text-zinc-400 font-bold">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-emerald-500" /> HIPAA Compliant</span>
            <span className="flex items-center gap-1"><FileText size={12} className="text-feminine-pink" /> GDPR Certified</span>
            <span className="flex items-center gap-1"><HelpCircle size={12} className="text-feminine-purple" /> 24/7 Care</span>
          </div>
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} SAKHI Inc. {currentT.copyright}</span>
            <Heart size={10} className="text-feminine-pink fill-feminine-pink animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
