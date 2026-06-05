import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

export default function BlogPage({ language }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const strings = {
    title: { en: 'Health & Educational Library', hi: 'स्वास्थ्य एवं शैक्षिक पुस्तकालय', bn: 'স্বাস্থ্য ও শিক্ষামূলক গ্রন্থাগার', ta: 'சுகாதார மற்றும் கல்வி நூலகம்', te: 'ఆరోగ్యం & విద్యా గ్రంథాలయం', mr: 'आरोग्य आणि शैक्षणिक ग्रंथालय' },
    desc: { en: 'Validated research articles written by certified gynecologists.', hi: 'प्रमाणित स्त्री रोग विशेषज्ञों द्वारा लिखे गए मान्य शोध लेख।', bn: 'প্রত্যয়িত গাইনোকোলজিস্টদের লেখা বৈধ গবেষণা নিবন্ধ।', ta: 'சான்றளிக்கப்பட்ட மகளிர் மருத்துவ நிபுணர்களால் எழுதப்பட்ட சரிபார்க்கப்பட்ட ஆராய்ச்சி கட்டுரைகள்.', te: 'ధృవీకరించబడిన గైనకాలజిస్ట్‌లు రాసిన పరిశోధనా వ్యాసాలు.', mr: 'प्रमाणित स्त्रीरोगतज्ज्ञांनी लिहिलेले प्रमाणित संशोधन लेख.' },
    placeholder: { en: 'Search symptoms, PCOS, etc...', hi: 'लक्षण खोजें, पीसीओएस, आदि...', bn: 'লক্ষণ অনুসন্ধান করুন, পিসিওএস ইত্যাদি...', ta: 'அறிகுறிகளைத் தேடுங்கள், பிசிஓஎஸ், முதலியன...', te: 'లక్షణాలను శోధించండి, పిసిఓఎస్, మొదలైనవి...', mr: 'लक्षणे शोधा, पीसीओएस इ...' },
    noMatch: { en: 'No articles match your parameters.', hi: 'कोई भी लेख आपके मापदंडों से मेल नहीं खाता।', bn: 'কোনো নিবন্ধ আপনার প্যারামিটারের সাথে মেলে না।', ta: 'உங்கள் அளவுருக்களுடன் எந்தக் கட்டுரையும் பொருந்தவில்லை.', te: 'మీ పారామితులకు ఏ కథనాలు సరిపోలలేదు.', mr: 'कोणतेही लेख तुमच्या पॅरामीटर्सशी जुळत नाहीत.' },
    readArticle: { en: 'Read Article', hi: 'लेख पढ़ें', bn: 'নিবন্ধটি পড়ুন', ta: 'கட்டுரையைப் படிக்கவும்', te: 'వ్యాసం చదవండి', mr: 'लेख वाचा' },
    cats: {
      all: { en: 'all', hi: 'सभी', bn: 'সব', ta: 'அனைத்து', te: 'అన్ని', mr: 'सर्व' },
      period_health: { en: 'period health', hi: 'अवधि स्वास्थ्य', bn: 'পিরিয়ড স্বাস্থ্য', ta: 'மாதவிடாய் ஆரோக்கியம்', te: 'పీరియడ్ ఆరోగ్యం', mr: 'मासिक पाळी आरोग्य' },
      pcos: { en: 'pcos', hi: 'पीसीओएस', bn: 'পিসিওএস', ta: 'பிசிஓஎஸ்', te: 'పిసిఓఎస్', mr: 'पीसीओएस' },
      hygiene: { en: 'hygiene', hi: 'स्वच्छता', bn: 'স্বাস্থ্যবিধি', ta: 'சுகாதாரம்', te: 'పరిశుభ్రత', mr: 'स्वच्छता' },
      nutrition: { en: 'nutrition', hi: 'पोषण', bn: 'পুষ্টি', ta: 'ஊட்டச்சத்து', te: 'పోషకాహారం', mr: 'पोषण' },
      mental_health: { en: 'mental health', hi: 'मानसिक स्वास्थ्य', bn: 'মানসিক স্বাস্থ্য', ta: 'மன ஆரோக்கியம்', te: 'మానసిక ఆరోగ్యం', mr: 'मानसिक आरोग्य' },
      pregnancy: { en: 'pregnancy', hi: 'गर्भावस्था', bn: 'গর্ভাবস্থা', ta: 'கர்ப்பம்', te: 'గర్భం', mr: 'गर्भधारणा' }
    }
  };

  const categories = ['all', 'period_health', 'pcos', 'hygiene', 'nutrition', 'mental_health', 'pregnancy'];

  const articles = [
    { 
      title: { en: 'Understanding Spearmint Tea and PCOS Hirsutism', hi: 'स्पीयरमिंट चाय और पीसीओएस हिर्सुटिज़्म को समझना', bn: 'স্পিয়ারমিন্ট চা এবং পিসিওএস হিরসুটিজম বোঝা', ta: 'ஸ்பியர்மின்ட் தேநீர் மற்றும் பிசிஓஎஸ் ஹிர்சுட்டிசத்தைப் புரிந்துகொள்வது', te: 'స్పియర్‌మింట్ టీ మరియు పిసిఓఎస్ హిర్సుటిజంను అర్థం చేసుకోవడం', mr: 'स्पीअरमिंट चहा आणि पीसीओएस हिरसुटीझम समजून घेणे' }, 
      desc: { en: 'Clinical bio-analysis shows Spearmint acts as an organic anti-androgen, reducing androgen levels significantly...', hi: 'क्लिनिकल बायो-एनालिसिस से पता चलता है कि स्पीयरमिंट एक जैविक एंटी-एंड्रोजन के रूप में कार्य करता है, जिससे एण्ड्रोजन का स्तर काफी कम हो जाता है...', bn: 'ক্লিনিকাল বায়ো-বিশ্লেষণ দেখায় স্পিয়ারমিন্ট জৈব অ্যান্টি-এন্ড্রোজেন হিসাবে কাজ করে, এন্ড্রোজেনের মাত্রা উল্লেখযোগ্যভাবে হ্রাস করে...', ta: 'கிளினிக்கல் பயோ-பகுப்பாய்வு ஸ்பியர்மின்ட் ஆர்கானிக் ஆன்டி-ஆண்ட்ரோஜனாகச் செயல்படுவதைக் காட்டுகிறது, இது ஆண்ட்ரோஜன் அளவைக் கணிசமாகக் குறைக்கிறது...', te: 'స్పియర్‌మింట్ ఒక సేంద్రీయ యాంటీ-ఆండ్రోజెన్‌గా పనిచేస్తుందని క్లినికల్ బయో-ఎనాలిసిస్ చూపిస్తుంది, ఆండ్రోజెన్ స్థాయిలను గణనీయంగా తగ్గిస్తుంది...', mr: 'क्लिनिकल बायो-ॲनालिसिस दर्शविते की स्पीअरमिंट सेंद्रिय अँटी-अँड्रोजन म्हणून कार्य करते, अँड्रोजनची पातळी लक्षणीयरीत्या कमी करते...' },
      category: 'pcos', 
      date: 'Oct 20, 2026' 
    },
    { 
      title: { en: 'The Estrogen-Progesterone Ratio in Mood Swings', hi: 'मूड स्विंग्स में एस्ट्रोजेन-प्रोजेस्टेरोन अनुपात', bn: 'মেজাজ সুইংয়ে ইস্ট্রোজেন-প্রজেস্টেরন অনুপাত', ta: 'மனநிலை மாற்றங்களில் ஈஸ்ட்ரோஜன்-புரோஜெஸ்ட்டிரோன் விகிதம்', te: 'మూడ్ స్వింగ్స్‌లో ఈస్ట్రోజెన్-ప్రొజెస్టెరాన్ నిష్పత్తి', mr: 'मूड स्विंग्समध्ये इस्ट्रोजेन-प्रोजेस्टेरॉन प्रमाण' }, 
      desc: { en: 'Why menstrual phases affect neurological variables and serotonin levels, and how light exercise balances mood scores.', hi: 'मासिक धर्म के चरण न्यूरोलॉजिकल चर और सेरोटोनिन के स्तर को क्यों प्रभावित करते हैं, और हल्का व्यायाम मूड स्कोर को कैसे संतुलित करता है।', bn: 'কেন মাসিক পর্যায়গুলি স্নায়বিক পরিবর্তনশীল এবং সেরোটোনিনের মাত্রাকে প্রভাবিত করে এবং কীভাবে হালকা ব্যায়াম মেজাজের স্কোরের ভারসাম্য বজায় রাখে।', ta: 'மாதவிடாய் கட்டங்கள் ஏன் நரம்பியல் மாறிகள் மற்றும் செரோடோனின் அளவை பாதிக்கின்றன, மற்றும் எப்படி லேசான உடற்பயிற்சி மனநிலை மதிப்பெண்களை சமநிலைப்படுத்துகிறது.', te: 'రుతుక్రమ దశలు నాడీ సంబంధిత వేరియబుల్స్ మరియు సెరోటోనిన్ స్థాయిలను ఎందుకు ప్రభావితం చేస్తాయి మరియు తేలికపాటి వ్యాయామం మూడ్ స్కోర్‌లను ఎలా సమతుల్యం చేస్తుంది.', mr: 'मासिक पाळीचे टप्पे न्यूरोलॉजिकल व्हेरिएबल्स आणि सेरोटोनिनच्या पातळीवर का परिणाम करतात आणि हलका व्यायाम मूड स्कोअर कसा संतुलित करतो.' },
      category: 'mental_health', 
      date: 'Oct 15, 2026' 
    },
    { 
      title: { en: 'Organic Menstrual Cups vs Bleached Cotton Tampons', hi: 'ऑर्गेनिक मेंस्ट्रुअल कप बनाम ब्लीचड कॉटन टैम्पोन', bn: 'জৈব মাসিক কাপ বনাম ব্লিচড কটন ট্যাম্পন', ta: 'ஆர்கானிக் மாதவிடாய் கோப்பைகள் vs ப்ளீச் செய்யப்பட்ட காட்டன் டம்பான்கள்', te: 'ఆర్గానిక్ మెన్‌స్ట్రువల్ కప్‌లు వర్సెస్ బ్లీచ్డ్ కాటన్ టాంపాన్స్', mr: 'सेंद्रिय मासिक पाळीचे कप वि ब्लीच केलेले कॉटन टॅम्पॉन्स' }, 
      desc: { en: 'A full comparative guide evaluating safety ratings, dynamic chemical bleach risks, and sustainability factors.', hi: 'सुरक्षा रेटिंग, गतिशील रासायनिक ब्लीच जोखिमों और स्थिरता कारकों का मूल्यांकन करने वाली एक पूर्ण तुलनात्मक मार्गदर्शिका।', bn: 'নিরাপত্তা রেটিং, গতিশীল রাসায়নিক ব্লিচ ঝুঁকি এবং স্থায়িত্বের কারণগুলির মূল্যায়ন করার একটি সম্পূর্ণ তুলনামূলক নির্দেশিকা।', ta: 'பாதுகாப்பு மதிப்பீடுகள், மாறும் ரசாயன ப்ளீச் அபாயங்கள் மற்றும் நிலைத்தன்மை காரணிகளை மதிப்பிடும் முழுமையான ஒப்பீட்டு வழிகாட்டி.', te: 'భద్రతా రేటింగ్‌లు, డైనమిక్ కెమికల్ బ్లీచ్ ప్రమాదాలు మరియు స్థిరత్వ కారకాలను మూల్యాంకనం చేసే పూర్తి తులనాత్మక గైడ్.', mr: 'सुरक्षा रेटिंग, डायनॅमिक केमिकल ब्लीच जोखीम आणि टिकाव घटकांचे मूल्यमापन करणारे संपूर्ण तुलनात्मक मार्गदर्शक.' },
      category: 'hygiene', 
      date: 'Oct 11, 2026' 
    },
    { 
      title: { en: 'Iron Absorption: Vitamin C Enhancers for Anemia', hi: 'आयरन अवशोषण: एनीमिया के लिए विटामिन सी एन्हांसर्स', bn: 'আয়রন শোষণ: অ্যানিমিয়ার জন্য ভিটামিন সি বর্ধক', ta: 'இரும்பு உறிஞ்சுதல்: இரத்த சோகைக்கு வைட்டமின் சி மேம்படுத்திகள்', te: 'ఐరన్ శోషణ: అనీమియా కోసం విటమిన్ సి పెంచేవి', mr: 'लोह शोषण: अशक्तपणासाठी व्हिटॅमिन सी एन्हांसर' }, 
      desc: { en: 'Logging low energy? Combine plant-based iron dishes with citrus fruits to boost cellular iron capacity.', hi: 'कम ऊर्जा लॉग कर रहे हैं? सेलुलर आयरन क्षमता को बढ़ावा देने के लिए खट्टे फलों के साथ पौधे-आधारित लोहे के व्यंजनों को मिलाएं।', bn: 'কম শক্তি লগিং? সেলুলার আয়রন ক্ষমতা বাড়ানোর জন্য সাইট্রাস ফলের সাথে উদ্ভিদ-ভিত্তিক আয়রনের খাবার একত্রিত করুন।', ta: 'குறைந்த ஆற்றல் உள்நுழைகிறதா? செல்லுலார் இரும்புத் திறனை அதிகரிக்க, தாவர அடிப்படையிலான இரும்பு உணவுகளை சிட்ரஸ் பழங்களுடன் இணைக்கவும்.', te: 'తక్కువ శక్తిని లాగింగ్ చేస్తున్నారా? సెల్యులార్ ఐరన్ సామర్థ్యాన్ని పెంచడానికి మొక్కల ఆధారిత ఐరన్ వంటకాలను సిట్రస్ పండ్లతో కలపండి.', mr: 'कमी उर्जा जाणवते? सेल्युलर लोह क्षमता वाढवण्यासाठी वनस्पती-आधारित लोखंडी पदार्थांना लिंबूवर्गीय फळांसह एकत्र करा.' },
      category: 'nutrition', 
      date: 'Oct 05, 2026' 
    }
  ];

  const filtered = articles.filter(art => {
    const artTitle = art.title[language] || art.title['en'];
    const artDesc = art.desc[language] || art.desc['en'];
    const matchesSearch = artTitle.toLowerCase().includes(searchTerm.toLowerCase()) || artDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'all' || art.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="slide-in flex flex-col gap-12 animate-fade-in">
      
      <div className="glass-panel p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-[var(--text-primary)] mb-1">{strings.title[language] || strings.title['en']}</h1>
          <p className="text-xs text-[var(--text-secondary)] font-extrabold">{strings.desc[language] || strings.desc['en']}</p>
        </div>
        
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-feminine-pink/80" />
          <input 
            type="text"
            placeholder={strings.placeholder[language] || strings.placeholder['en']}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 text-xs outline-none focus:border-feminine-pink transition-colors dark:text-zinc-200 font-semibold"
          />
        </div>
      </div>

      <div className="flex gap-2.5 overflow-x-auto pb-2 scroll-smooth">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`rounded-full px-5 py-2 text-xs font-bold border transition-all shrink-0 capitalize cursor-pointer ${selectedCat === cat ? 'bg-feminine-pink text-white border-feminine-pink shadow-md' : 'bg-white dark:bg-zinc-900 text-[var(--text-secondary)] border-gray-200/50 dark:border-zinc-800 hover:border-feminine-pink'}`}
          >
            {strings.cats[cat][language] || strings.cats[cat]['en']}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {filtered.length === 0 ? (
          <div className="col-span-2 text-center py-16 text-[var(--text-secondary)] font-bold">
            {strings.noMatch[language] || strings.noMatch['en']}
          </div>
        ) : (
          filtered.map((art, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-gray-150/40 dark:border-zinc-800/40 flex flex-col gap-4">
              <span className="text-[10px] font-extrabold text-feminine-purple uppercase tracking-wider">{strings.cats[art.category][language] || strings.cats[art.category]['en']}</span>
              <div>
                <h3 className="font-display font-extrabold text-lg text-[var(--text-primary)] mb-2 leading-snug">{art.title[language] || art.title['en']}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-normal font-semibold">{art.desc[language] || art.desc['en']}</p>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 dark:border-zinc-850 pt-4 mt-auto text-xs text-[var(--text-secondary)] font-bold">
                <span>📅 {art.date}</span>
                <span className="text-feminine-pink font-extrabold flex items-center gap-1 cursor-pointer hover:underline">
                  {strings.readArticle[language] || strings.readArticle['en']} <ChevronRight size={14} />
                </span>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
