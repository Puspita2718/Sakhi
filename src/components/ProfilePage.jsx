import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function ProfilePage({ user, setUser, language }) {
  const [firstName, setFirstName] = useState(user?.firstName || 'Ananya');
  const [lastName, setLastName] = useState(user?.lastName || 'Sharma');
  const [email, setEmail] = useState(user?.email || 'ananya@example.com');
  const [age, setAge] = useState(user?.age || '25');
  const [cycleLength, setCycleLength] = useState(user?.cycleLength || '28');
  const [sleepTarget, setSleepTarget] = useState(user?.sleepTarget || '8');
  const [waterTarget, setWaterTarget] = useState(user?.waterTarget || '2.5');
  const [saved, setSaved] = useState(false);

  const strings = {
    title: { en: 'My Health Profile', hi: 'मेरी स्वास्थ्य प्रोफ़ाइल', bn: 'আমার স্বাস্থ্য প্রোফাইল', ta: 'எனது சுகாதார சுயவிவரம்', te: 'నా ఆరోగ్య ప్రొఫైల్', mr: 'माझे आरोग्य प्रोफाइल' },
    desc: { en: 'Manage your biological details, tracking parameters, and active care plan.', hi: 'अपने जैविक विवरण, ट्रैकिंग पैरामीटर और सक्रिय देखभाल योजना का प्रबंधन करें।', bn: 'আপনার জৈবিক বিবরণ, ট্র্যাকিং প্যারামিটার এবং সক্রিয় যত্ন পরিকল্পনা পরিচালনা করুন।', ta: 'உங்கள் உயிரியல் விவரங்கள், கண்காணிப்பு அளவுருக்கள் மற்றும் செயலில் உள்ள பராமரிப்பு திட்டத்தை நிர்வகிக்கவும்.', te: 'మీ జీవ వివరాలు, ట్రాకింగ్ పారామితులు మరియు క్రియాశీల సంరక్షణ ప్రణాళికను నిర్వహించండి.', mr: 'तुमचे जैविक तपशील, ट्रॅकिंग पॅरामीटर्स आणि सक्रिय काळजी योजना व्यवस्थापित करा.' },
    subTitle: { en: 'Care Subscription', hi: 'देखभाल सदस्यता', bn: 'যত্ন সাবস্ক্রিপশন', ta: 'பராமரிப்பு சந்தா', te: 'సంరక్షణ సభ్యత్వం', mr: 'काळजी सदस्यता' },
    prem: { en: 'Premium Pass', hi: 'प्रीमियम पास', bn: 'প্রিমিয়াম পাস', ta: 'பிரீமியம் பாஸ்', te: 'ప్రీమియం పాస్', mr: 'प्रीमियम पास' },
    sakhiPrem: { en: 'SAKHI Premium Pass', hi: 'सखी प्रीमियम पास', bn: 'সখী প্রিমিয়াম পাস', ta: 'சகி பிரீமியம் பாஸ்', te: 'సఖి ప్రీమియం పాస్', mr: 'सखी प्रीमियम पास' },
    renews: { en: 'Renews on Nov 24, 2026', hi: '24 नवंबर, 2026 को नवीनीकृत', bn: '২৪ নভেম্বর, ২০২৬-এ নবায়ন হয়', ta: 'நவம்பர் 24, 2026 அன்று புதுப்பிக்கப்படும்', te: 'నవంబర్ 24, 2026న పునరుద్ధరించబడుతుంది', mr: '२४ नोव्हेंबर २०२६ रोजी नूतनीकरण' },
    persInfo: { en: 'Personal Information', hi: 'व्यक्तिगत जानकारी', bn: 'ব্যক্তিগত তথ্য', ta: 'தனிப்பட்ட தகவல்', te: 'వ్యక్తిగత సమాచారం', mr: 'वैयक्तिक माहिती' },
    success: { en: '✓ Clinical records updated successfully.', hi: '✓ नैदानिक रिकॉर्ड सफलतापूर्वक अद्यतन किए गए।', bn: '✓ ক্লিনিকাল রেকর্ড সফলভাবে আপডেট করা হয়েছে।', ta: '✓ மருத்துவ பதிவுகள் வெற்றிகரமாக புதுப்பிக்கப்பட்டன.', te: '✓ క్లినికల్ రికార్డ్‌లు విజయవంతంగా నవీకరించబడ్డాయి.', mr: '✓ क्लिनिकल रेकॉर्ड यशस्वीरित्या अद्यतनित केले गेले.' },
    fName: { en: 'First Name', hi: 'पहला नाम', bn: 'প্রথম নাম', ta: 'முதல் பெயர்', te: 'మొదటి పేరు', mr: 'पहिले नाव' },
    lName: { en: 'Last Name', hi: 'अंतिम नाम', bn: 'শেষ নাম', ta: 'கடைசி பெயர்', te: 'చివరి పేరు', mr: 'आडनाव' },
    emailLbl: { en: 'Email Address', hi: 'ईमेल पता', bn: 'ইমেইল ঠিকানা', ta: 'மின்னஞ்சல் முகவரி', te: 'ఇమెయిల్ చిరునామా', mr: 'ईमेल पत्ता' },
    bioHealth: { en: 'Biological & Health Parameters', hi: 'जैविक और स्वास्थ्य पैरामीटर', bn: 'জৈবিক ও স্বাস্থ্য পরিমিতি', ta: 'உயிரியல் மற்றும் சுகாதார அளவுருக்கள்', te: 'జీవసంబంధమైన & ఆరోగ్య పారామితులు', mr: 'जैविक आणि आरोग्य पॅरामीटर्स' },
    bioAge: { en: 'Biological Age', hi: 'जैविक आयु', bn: 'জৈবিক বয়স', ta: 'உயிரியல் வயது', te: 'జీవసంబంధమైన వయస్సు', mr: 'जैविक वय' },
    cycleLen: { en: 'Cycle Duration (Days)', hi: 'चक्र अवधि (दिन)', bn: 'চক্রের সময়কাল (দিন)', ta: 'சுழற்சி காலம் (நாட்கள்)', te: 'చక్రం వ్యవధి (రోజులు)', mr: 'सायकल कालावधी (दिवस)' },
    sleepTgt: { en: 'Daily Sleep Target (Hours)', hi: 'दैनिक नींद लक्ष्य (घंटे)', bn: 'দৈনিক ঘুমের লক্ষ্য (ঘন্টা)', ta: 'தினசரி தூக்க இலக்கு (மணிநேரம்)', te: 'రోజువారీ నిద్ర లక్ష్యం (గంటలు)', mr: 'दररोज झोपेचे लक्ष्य (तास)' },
    waterTgt: { en: 'Hydration Target (Liters)', hi: 'जलयोजन लक्ष्य (लीटर)', bn: 'হাইড্রেশন লক্ষ্য (লিটার)', ta: 'நீரேற்றம் இலக்கு (லிட்டர்)', te: 'హైడ్రేషన్ లక్ష్యం (లీటర్లు)', mr: 'हायड्रेशन लक्ष्य (लिटर)' },
    saveBtn: { en: 'Save Parameters', hi: 'पैरामीटर सहेजें', bn: 'প্যারামিটার সংরক্ষণ করুন', ta: 'அளவுருக்களை சேமிக்கவும்', te: 'పారామితులను సేవ్ చేయండి', mr: 'पॅरामीटर्स जतन करा' }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(prev => ({
      ...prev,
      firstName,
      lastName,
      email,
      age: parseInt(age) || 25,
      cycleLength: parseInt(cycleLength) || 28,
      sleepTarget: parseInt(sleepTarget) || 8,
      waterTarget: parseFloat(waterTarget) || 2.5
    }));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="slide-in flex flex-col gap-8 text-left max-w-4xl mx-auto animate-fade-in">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
          {strings.title[language] || strings.title['en']}
        </h1>
        <p className="text-xs text-[var(--text-secondary)] font-extrabold uppercase tracking-wider mt-1">
          {strings.desc[language] || strings.desc['en']}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="md:col-span-1 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-150/30 flex flex-col items-center text-center gap-4 shadow-xs">
            <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white flex items-center justify-center font-extrabold text-3xl shadow-xl border-4 border-white dark:border-zinc-800 relative">
              {firstName[0]}
              <span className="absolute bottom-1 right-1 h-4.5 w-4.5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-800" title="Online Session"></span>
            </div>
            
            <div>
              <h3 className="font-display font-extrabold text-base text-[var(--text-primary)]">
                {firstName} {lastName}
              </h3>
              <span className="text-xs text-[var(--text-secondary)] font-bold block mt-0.5">{email}</span>
            </div>

            <div className="w-full bg-feminine-pink/10 border border-feminine-pink/20 rounded-2xl py-3 px-4 flex flex-col gap-1 mt-2">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-feminine-pink">{strings.subTitle[language] || strings.subTitle['en']}</span>
              <strong className="text-xs text-[var(--text-primary)]">{user?.subscriptionPlan === 'premium' ? (strings.prem[language] || strings.prem['en']) : (strings.sakhiPrem[language] || strings.sakhiPrem['en'])}</strong>
              <span className="text-[10px] text-[var(--text-secondary)]">{strings.renews[language] || strings.renews['en']}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <form onSubmit={handleSave} className="glass-panel p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-150/30 flex flex-col gap-6">
            <h3 className="font-display font-extrabold text-lg border-b border-gray-100 dark:border-zinc-800 pb-3 dark:text-white">
              {strings.persInfo[language] || strings.persInfo['en']}
            </h3>

            {saved && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-250 text-emerald-600 font-bold text-xs flex items-center gap-2 animate-fade-in">
                {strings.success[language] || strings.success['en']}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">{strings.fName[language] || strings.fName['en']}</span>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" required />
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">{strings.lName[language] || strings.lName['en']}</span>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" required />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-left">
              <span className="font-bold text-[var(--text-secondary)]">{strings.emailLbl[language] || strings.emailLbl['en']}</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" required />
            </div>

            <h3 className="font-display font-extrabold text-lg border-b border-gray-100 dark:border-zinc-800 pt-2 pb-3 dark:text-white">
              {strings.bioHealth[language] || strings.bioHealth['en']}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">{strings.bioAge[language] || strings.bioAge['en']}</span>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" required />
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">{strings.cycleLen[language] || strings.cycleLen['en']}</span>
                <input type="number" value={cycleLength} onChange={(e) => setCycleLength(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">{strings.sleepTgt[language] || strings.sleepTgt['en']}</span>
                <input type="number" value={sleepTarget} onChange={(e) => setSleepTarget(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" required />
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-left">
                <span className="font-bold text-[var(--text-secondary)]">{strings.waterTgt[language] || strings.waterTgt['en']}</span>
                <input type="number" step="0.1" value={waterTarget} onChange={(e) => setWaterTarget(e.target.value)} className="p-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 outline-none text-gray-800 dark:text-zinc-200 font-semibold" required />
              </div>
            </div>

            <button type="submit" className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple py-3.5 text-xs font-bold text-white shadow-lg cursor-pointer hover:opacity-95 active:scale-98 transition-all">
              {strings.saveBtn[language] || strings.saveBtn['en']}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
