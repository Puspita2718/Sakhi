import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage({ language }) {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const strings = {
    connect: { en: 'Connect', hi: 'जुड़ें', bn: 'সংযোগ করুন', ta: 'இணைக்க', te: 'కనెక్ట్', mr: 'कनेक्ट करा' },
    title: { en: 'Speak to our Intimate Support Team', hi: 'हमारी अंतरंग सहायता टीम से बात करें', bn: 'আমাদের অন্তরঙ্গ সাপোর্ট টিমের সাথে কথা বলুন', ta: 'எங்கள் நெருக்கமான ஆதரவுக் குழுவிடம் பேசுங்கள்', te: 'మా ఇంటిమేట్ సపోర్ట్ టీమ్‌తో మాట్లాడండి', mr: 'आमच्या इंटिमेट सपोर्ट टीमशी बोला' },
    desc: { en: 'Our customer care representatives are certified medical schedulers.', hi: 'हमारे ग्राहक सेवा प्रतिनिधि प्रमाणित चिकित्सा अनुसूचक हैं।', bn: 'আমাদের কাস্টমার কেয়ার প্রতিনিধিরা সার্টিফাইড মেডিকেল শিডিউলার।', ta: 'எங்கள் வாடிக்கையாளர் பராமரிப்பு பிரதிநிதிகள் சான்றளிக்கப்பட்ட மருத்துவ திட்டமிடுபவர்கள்.', te: 'మా కస్టమర్ కేర్ ప్రతినిధులు ధృవీకరించబడిన మెడికల్ షెడ్యూలర్లు.', mr: 'आमचे कस्टमर केअर प्रतिनिधी प्रमाणित वैद्यकीय शेड्युलर आहेत.' },
    emailTitle: { en: 'Email Address', hi: 'ईमेल पता', bn: 'ইমেল ঠিকানা', ta: 'மின்னஞ்சல் முகவரி', te: 'ఇమెయిల్ చిరునామా', mr: 'ईमेल पत्ता' },
    phoneTitle: { en: 'Help Desk Line', hi: 'हेल्प डेस्क लाइन', bn: 'হেল্প ডেস্ক লাইন', ta: 'உதவி மைய வரி', te: 'హెల్ప్ డెస్క్ లైన్', mr: 'हेल्प डेस्क लाइन' },
    hqTitle: { en: 'Headquarters', hi: 'मुख्यालय', bn: 'সদর দপ্তর', ta: 'தலைமையகம்', te: 'ప్రధాన కార్యాలయం', mr: 'मुख्यालय' },
    hqAddress: { en: 'Hormonal Valley Area, Suite 400, New Delhi, IN', hi: 'हार्मोनल वैली एरिया, सुइट 400, नई दिल्ली, IN', bn: 'হরমোনাল ভ্যালি এরিয়া, স্যুট ৪০০, নয়াদিল্লি, IN', ta: 'ஹார்மோன் வேலி ஏரியா, சூட் 400, புது தில்லி, IN', te: 'హార్మోనల్ వ్యాలీ ఏరియా, సూట్ 400, న్యూఢిల్లీ, IN', mr: 'हार्मोनल व्हॅली एरिया, सूट ४००, नवी दिल्ली, IN' },
    formTitle: { en: 'Send an Electronic Query', hi: 'एक इलेक्ट्रॉनिक क्वेरी भेजें', bn: 'একটি ইলেকট্রনিক ক্যোয়ারী পাঠান', ta: 'மின்னணு வினவலை அனுப்பவும்', te: 'ఎలక్ట్రానిక్ విచారణను పంపండి', mr: 'इलेक्ट्रॉनिक क्वेरी पाठवा' },
    querySent: { en: 'Query Transmitted', hi: 'क्वेरी प्रेषित', bn: 'ক্যোয়ারী প্রেরণ করা হয়েছে', ta: 'வினவல் அனுப்பப்பட்டது', te: 'విచారణ ప్రసారం చేయబడింది', mr: 'क्वेरी पाठवली' },
    queryDesc: { en: 'Your secure ticket has been registered in AWS queues. We will respond within 4 hours.', hi: 'आपका सुरक्षित टिकट AWS कतारों में पंजीकृत हो गया है। हम 4 घंटे के भीतर जवाब देंगे।', bn: 'আপনার নিরাপদ টিকিট AWS সারিতে নিবন্ধিত হয়েছে। আমরা ৪ ঘণ্টার মধ্যে সাড়া দেব।', ta: 'உங்கள் பாதுகாப்பான டிக்கெட் AWS வரிசைகளில் பதிவு செய்யப்பட்டுள்ளது. 4 மணி நேரத்திற்குள் பதிலளிப்போம்.', te: 'మీ సురక్షిత టిక్కెట్ AWS క్యూలలో నమోదు చేయబడింది. మేము 4 గంటల్లో స్పందిస్తాము.', mr: 'तुमचे सुरक्षित तिकीट AWS रांगेत नोंदवले गेले आहे. आम्ही ४ तासांच्या आत प्रतिसाद देऊ.' },
    nameLabel: { en: 'Name', hi: 'नाम', bn: 'নাম', ta: 'பெயர்', te: 'పేరు', mr: 'नाव' },
    emailLabel: { en: 'Email', hi: 'ईमेल', bn: 'ইমেইল', ta: 'மின்னஞ்சல்', te: 'ఇమెయిల్', mr: 'ईमेल' },
    msgLabel: { en: 'Message', hi: 'संदेश', bn: 'বার্তা', ta: 'செய்தி', te: 'సందేశం', mr: 'संदेश' },
    submitBtn: { en: 'Transmit Message', hi: 'संदेश प्रेषित करें', bn: 'বার্তা প্রেরণ করুন', ta: 'செய்தியை அனுப்பவும்', te: 'సందేశాన్ని ప్రసారం చేయండి', mr: 'संदेश पाठवा' }
  };

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
        <div className="flex flex-col gap-8 text-left">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-feminine-pink bg-feminine-pink/10 px-3 py-1 rounded-full w-fit mb-3 block">{strings.connect[language] || strings.connect['en']}</span>
            <h1 className="font-display text-3xl font-extrabold text-[var(--text-primary)] mb-2">{strings.title[language] || strings.title['en']}</h1>
            <p className="text-xs text-[var(--text-secondary)] font-extrabold">{strings.desc[language] || strings.desc['en']}</p>
          </div>

          <div className="flex flex-col gap-6 text-sm">
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-feminine-pink/10 text-feminine-pink flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <strong className="block text-[var(--text-primary)] font-extrabold">{strings.emailTitle[language] || strings.emailTitle['en']}</strong>
                <span className="text-xs text-[var(--text-secondary)] font-bold">support@arogyanari.ai</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-feminine-purple/10 text-feminine-purple flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <strong className="block text-[var(--text-primary)] font-extrabold">{strings.phoneTitle[language] || strings.phoneTitle['en']}</strong>
                <span className="text-xs text-[var(--text-secondary)] font-bold">1800-419-1020</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <strong className="block text-[var(--text-primary)] font-extrabold">{strings.hqTitle[language] || strings.hqTitle['en']}</strong>
                <span className="text-xs text-[var(--text-secondary)] font-bold">{strings.hqAddress[language] || strings.hqAddress['en']}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl flex flex-col gap-6 text-left">
          <h3 className="font-display font-extrabold text-lg text-[var(--text-primary)]">{strings.formTitle[language] || strings.formTitle['en']}</h3>
          
          {success ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-250 text-center flex flex-col items-center gap-3">
              <CheckCircle2 size={32} className="text-emerald-500 animate-bounce" />
              <h4 className="font-bold text-emerald-600">{strings.querySent[language] || strings.querySent['en']}</h4>
              <p className="text-[11px] text-[var(--text-secondary)] font-bold">{strings.queryDesc[language] || strings.queryDesc['en']}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[var(--text-secondary)]">{strings.nameLabel[language] || strings.nameLabel['en']}</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" required />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[var(--text-secondary)]">{strings.emailLabel[language] || strings.emailLabel['en']}</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" required />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[var(--text-secondary)]">{strings.msgLabel[language] || strings.msgLabel['en']}</span>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 min-h-[100px] resize-none font-semibold" required />
              </div>

              <button type="submit" className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple py-3.5 text-xs font-bold text-white shadow-lg cursor-pointer hover:opacity-95 active:scale-98 transition-all">
                {strings.submitBtn[language] || strings.submitBtn['en']}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
