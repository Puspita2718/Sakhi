import React from 'react';

export default function AboutPage({ language }) {
  const strings = {
    title: { en: 'Our Intimate Vision', hi: 'हमारी अंतरंग दृष्टि', bn: 'আমাদের অন্তরঙ্গ দৃষ্টি', ta: 'எங்கள் நெருக்கமான பார்வை', te: 'మా సన్నిహిత దృష్టి', mr: 'आमची जिव्हाळ्याची दृष्टी' },
    desc: { en: 'SAKHI operates to digitize intimate biological tracking variables and clinical access, enabling comprehensive healthcare awareness for girls and women globally.', hi: 'सखी अंतरंग जैविक ट्रैकिंग चर और नैदानिक पहुंच को डिजिटल करने के लिए काम करती है, जिससे विश्व स्तर पर लड़कियों और महिलाओं के लिए व्यापक स्वास्थ्य जागरूकता सक्षम होती है।', bn: 'সখী বিশ্বব্যাপী মেয়েদের এবং মহিলাদের জন্য ব্যাপক স্বাস্থ্যসেবা সচেতনতা সক্ষম করে, অন্তরঙ্গ জৈবিক ট্র্যাকিং ভেরিয়েবল এবং ক্লিনিকাল অ্যাক্সেস ডিজিটাইজ করার জন্য কাজ করে।', ta: 'உலகெங்கிலும் உள்ள பெண்கள் மற்றும் பெண்களுக்கான விரிவான சுகாதார விழிப்புணர்வை செயல்படுத்தும் வகையில், நெருக்கமான உயிரியல் கண்காணிப்பு மாறிகள் மற்றும் மருத்துவ அணுகலை டிஜிட்டல் மயமாக்குவதற்கு சகி செயல்படுகிறது.', te: 'ప్రపంచవ్యాప్తంగా ఉన్న బాలికలు మరియు మహిళల కోసం సమగ్ర ఆరోగ్య సంరక్షణ అవగాహనను ప్రారంభించడం ద్వారా సన్నిహిత జీవ ట్రాకింగ్ వేరియబుల్స్ మరియు క్లినికల్ యాక్సెస్‌ను డిజిటలైజ్ చేయడానికి సఖి పనిచేస్తుంది.', mr: 'सखी जिव्हाळ्याच्या जैविक ट्रॅकिंग व्हेरिएबल्स आणि क्लिनिकल ऍक्सेसचे डिजिटायझेशन करण्यासाठी कार्य करते, ज्यामुळे जागतिक स्तरावर मुली आणि महिलांसाठी सर्वसमावेशक आरोग्यसेवा जागरूकता सक्षम होते.' },
    storyTag: { en: 'Company Story', hi: 'कंपनी की कहानी', bn: 'কোম্পানির গল্প', ta: 'நிறுவனத்தின் கதை', te: 'కంపెనీ కథ', mr: 'कंपनीची कथा' },
    storyTitle: { en: 'How SAKHI Began', hi: 'सखी कैसे शुरू हुई', bn: 'সখী কিভাবে শুরু হয়েছিল', ta: 'சகி எப்படி தொடங்கியது', te: 'సఖి ఎలా ప్రారంభమైంది', mr: 'सखीची सुरुवात कशी झाली' },
    storyDesc: { en: 'Founded in 2026, SAKHI emerged from a shared biological vision: clinical period cycle logging and customized nutritional programs should be easily accessible to everyone. We compiled modern OpenAI prompt diagnostics with HIPAA security blueprints to construct a comprehensive wellness ecosystem.', hi: '2026 में स्थापित, सखी एक साझा जैविक दृष्टिकोण से उभरी: नैदानिक अवधि चक्र लॉगिंग और अनुकूलित पोषण कार्यक्रम हर किसी के लिए आसानी से सुलभ होने चाहिए। हमने एक व्यापक कल्याण पारिस्थितिकी तंत्र के निर्माण के लिए HIPAA सुरक्षा ब्लूप्रिंट के साथ आधुनिक OpenAI प्रॉम्प्ट डायग्नोस्टिक्स को संकलित किया।', bn: '2026 সালে প্রতিষ্ঠিত, সখী একটি ভাগ করা জৈবিক দৃষ্টিভঙ্গি থেকে আবির্ভূত হয়েছে: ক্লিনিকাল পিরিয়ড সাইকেল লগিং এবং কাস্টমাইজড পুষ্টিকর প্রোগ্রামগুলি সবার কাছে সহজে অ্যাক্সেসযোগ্য হওয়া উচিত। আমরা একটি বিস্তৃত সুস্থতা ইকোসিস্টেম তৈরি করতে HIPAA নিরাপত্তা ব্লুপ্রিন্টের সাথে আধুনিক OpenAI প্রম্পট ডায়াগনস্টিকস সংকলন করেছি।', ta: '2026 இல் நிறுவப்பட்டது, சகி பகிரப்பட்ட உயிரியல் பார்வையிலிருந்து உருவானது: மருத்துவ கால சுழற்சி பதிவு மற்றும் தனிப்பயனாக்கப்பட்ட ஊட்டச்சத்து திட்டங்கள் அனைவருக்கும் எளிதாக அணுகக்கூடியதாக இருக்க வேண்டும். விரிவான ஆரோக்கிய சுற்றுச்சூழல் அமைப்பை உருவாக்க HIPAA பாதுகாப்பு வரைபடங்களுடன் நவீன OpenAI வரியில் கண்டறிதல்களை தொகுத்துள்ளோம்.', te: '2026లో స్థాపించబడిన సఖి భాగస్వామ్య జీవసంబంధమైన దృష్టి నుండి ఉద్భవించింది: క్లినికల్ పీరియడ్ సైకిల్ లాగింగ్ మరియు అనుకూలీకరించిన పోషకాహార కార్యక్రమాలు అందరికీ సులభంగా అందుబాటులో ఉండాలి. మేము సమగ్ర వెల్నెస్ పర్యావరణ వ్యవస్థను నిర్మించడానికి HIPAA భద్రతా బ్లూప్రింట్‌లతో ఆధునిక OpenAI ప్రాంప్ట్ డయాగ్నస్టిక్స్‌ను సంకలనం చేసాము.', mr: '2026 मध्ये स्थापित, सखी एका सामायिक जैविक दृष्टीकोनातून उदयास आली: क्लिनिकल पीरियड सायकल लॉगिंग आणि सानुकूलित पोषण कार्यक्रम प्रत्येकासाठी सहज उपलब्ध असावेत. आम्ही सर्वसमावेशक वेलनेस इकोसिस्टम तयार करण्यासाठी HIPAA सुरक्षा ब्लूप्रिंटसह आधुनिक OpenAI प्रॉम्प्ट डायग्नोस्टिक्स संकलित केले.' },
    missionTitle: { en: 'Our Mission', hi: 'हमारा मिशन', bn: 'আমাদের মিশন', ta: 'எங்கள் நோக்கம்', te: 'మా లక్ష్యం', mr: 'आमचे ध्येय' },
    missionDesc: { en: 'Democratize clinical biological insight analysis via cognitive computing checks.', hi: 'संज्ञानात्मक कंप्यूटिंग जांच के माध्यम से नैदानिक जैविक अंतर्दृष्टि विश्लेषण का लोकतंत्रीकरण करें।', bn: 'জ্ঞানীয় কম্পিউটিং চেকের মাধ্যমে ক্লিনিকাল জৈবিক অন্তর্দৃষ্টি বিশ্লেষণের গণতন্ত্রীকরণ।', ta: 'காக்னிட்டிவ் கம்ப்யூட்டிங் சோதனைகள் மூலம் மருத்துவ உயிரியல் நுண்ணறிவு பகுப்பாய்வை ஜனநாயகப்படுத்துதல்.', te: 'కాగ్నిటివ్ కంప్యూటింగ్ తనిఖీల ద్వారా క్లినికల్ బయోలాజికల్ ఇన్‌సైట్ విశ్లేషణను ప్రజాస్వామ్యం చేయండి.', mr: 'कॉग्निटिव्ह कॉम्प्युटिंग तपासणीद्वारे क्लिनिकल बायोलॉजिकल इनसाइट विश्लेषणाचे लोकशाहीकरण करा.' },
    visionTitle: { en: 'Our Vision', hi: 'हमारी दृष्टि', bn: 'আমাদের দৃষ্টি', ta: 'எங்கள் பார்வை', te: 'మా విజన్', mr: 'आमची दृष्टी' },
    visionDesc: { en: 'Secure end-to-end Signal double-ratchet encryption consultations for every patient worldwide.', hi: 'दुनिया भर में हर मरीज के लिए सुरक्षित एंड-टू-एंड सिग्नल डबल-रैचेट एन्क्रिप्शन परामर्श।', bn: 'বিশ্বব্যাপী প্রতিটি রোগীর জন্য নিরাপদ এন্ড-টু-এন্ড সিগন্যাল ডাবল-র্যাচেট এনক্রিপশন পরামর্শ।', ta: 'உலகெங்கிலும் உள்ள ஒவ்வொரு நோயாளிக்கும் பாதுகாப்பான எண்ட்-டு-எண்ட் சிக்னல் டபுள்-ராட்செட் என்க்ரிப்ஷன் ஆலோசனைகள்.', te: 'ప్రపంచవ్యాప్తంగా ఉన్న ప్రతి రోగికి సురక్షితమైన ఎండ్-టు-ఎండ్ సిగ్నల్ డబుల్-రాట్‌చెట్ ఎన్‌క్రిప్షన్ సంప్రదింపులు.', mr: 'जगभरातील प्रत्येक रुग्णासाठी सुरक्षित एंड-टू-एंड सिग्नल डबल-रॅचेट एन्क्रिप्शन सल्लामसलत.' }
  };

  return (
    <div className="slide-in flex flex-col gap-16 animate-fade-in">
      <div className="glass-panel p-12 rounded-3xl bg-gradient-to-tr from-purple-50/50 to-pink-50/50 dark:from-zinc-900/40 dark:to-zinc-950/40 text-center flex flex-col items-center gap-4">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">{strings.title[language] || strings.title['en']}</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed text-sm font-semibold">
          {strings.desc[language] || strings.desc['en']}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-left">
          <span className="text-[10px] uppercase font-bold text-feminine-pink tracking-widest bg-feminine-pink/10 px-3 py-1 rounded-full w-fit">{strings.storyTag[language] || strings.storyTag['en']}</span>
          <h2 className="font-display text-2xl font-extrabold text-[var(--text-primary)]">{strings.storyTitle[language] || strings.storyTitle['en']}</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-semibold">
            {strings.storyDesc[language] || strings.storyDesc['en']}
          </p>
        </div>
        <div className="glass-panel p-8 rounded-2xl flex flex-col gap-6 bg-feminine-lavender/30 dark:bg-zinc-900/30 text-left">
          <div className="flex gap-4">
            <div className="h-10 w-10 shrink-0 rounded-full bg-feminine-pink/15 text-feminine-pink flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-display font-extrabold text-[var(--text-primary)] mb-1">{strings.missionTitle[language] || strings.missionTitle['en']}</h4>
              <p className="text-xs text-[var(--text-secondary)] font-semibold">{strings.missionDesc[language] || strings.missionDesc['en']}</p>
            </div>
          </div>
          <div className="flex gap-4 border-t border-gray-200/50 dark:border-zinc-800/50 pt-6">
            <div className="h-10 w-10 shrink-0 rounded-full bg-feminine-purple/15 text-feminine-purple flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-display font-extrabold text-[var(--text-primary)] mb-1">{strings.visionTitle[language] || strings.visionTitle['en']}</h4>
              <p className="text-xs text-[var(--text-secondary)] font-semibold">{strings.visionDesc[language] || strings.visionDesc['en']}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
