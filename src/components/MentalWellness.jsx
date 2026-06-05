import React, { useState, useEffect } from 'react';
import { Smile, Sparkles, Compass, Heart, Plus, ChevronRight, HelpCircle } from 'lucide-react';

export default function MentalWellness({ language }) {
  const [breatheState, setBreatheState] = useState('Inhale');
  const [breathCount, setBreathCount] = useState(4);
  const [breathingActive, setBreathingActive] = useState(false);

  const [journalInput, setJournalInput] = useState('');
  const [journals, setJournals] = useState([
    { date: '2026-10-22', text: 'Felt a bit bloated in the morning but meditation helped clear my head.' },
    { date: '2026-10-21', text: 'Tired after workout. Ensured I drank enough fluids and had general rest.' }
  ]);

  const [quizAnswers, setQuizAnswers] = useState({ q1: 1, q2: 1, q3: 1 });
  const [quizScore, setQuizScore] = useState(null);

  const affirmations = [
    { en: "My body is beautiful, healthy, and completely resilient.", hi: "मेरा शरीर सुंदर, स्वस्थ और पूरी तरह से लचीला है।", bn: "আমার শরীর সুন্দর, স্বাস্থ্যকর এবং সম্পূর্ণ স্থিতিস্থাপক।", ta: "என் உடல் அழகானது, ஆரோக்கியமானது மற்றும் நெகிழ்ச்சியானது.", te: "నా శరీరం అందంగా, ఆరోగ్యంగా మరియు పూర్తిగా స్థితిస్థాపకంగా ఉంది.", mr: "माझे शरीर सुंदर, निरोगी आणि पूर्णपणे लवचिक आहे." },
    { en: "I trust the natural wisdom and rhythm of my biological cycles.", hi: "मैं अपने जैविक चक्रों के प्राकृतिक ज्ञान और लय पर भरोसा करता हूं।", bn: "আমি আমার জৈবিক চক্রের প্রাকৃতিক জ্ঞান এবং ছন্দের উপর আস্থা রাখি।", ta: "எனது உயிரியல் சுழற்சிகளின் இயற்கையான ஞானத்தையும் தாளத்தையும் நான் நம்புகிறேன்.", te: "నా జీవ చక్రాల సహజ జ్ఞానం మరియు లయను నేను విశ్వసిస్తున్నాను.", mr: "माझ्या जैविक चक्रांच्या नैसर्गिक शहाणपणावर आणि लयीवर माझा विश्वास आहे." },
    { en: "I deserve to dedicate restorative rest and care to my mind and body.", hi: "मैं अपने दिमाग और शरीर को आराम और देखभाल समर्पित करने का हकदार हूं।", bn: "আমি আমার মন এবং শরীরের জন্য বিশ্রাম এবং যত্ন উৎসর্গ করার যোগ্য।", ta: "என் மனதிற்கும் உடலுக்கும் ஓய்வு மற்றும் அக்கறை செலுத்த நான் தகுதியானவன்.", te: "నా మనస్సుకు మరియు శరీరానికి విశ్రాంతి మరియు సంరక్షణ అంకితం చేయడానికి నేను అర్హుడను.", mr: "माझे मन आणि शरीर यांना विश्रांती आणि काळजी देण्यास मी पात्र आहे." },
    { en: "Every cycle brings clean renewal, balance, and health.", hi: "प्रत्येक चक्र स्वच्छ नवीनीकरण, संतुलन और स्वास्थ्य लाता है।", bn: "প্রতিটি চক্র পরিষ্কার পুনর্নবীকরণ, ভারসাম্য এবং স্বাস্থ্য নিয়ে আসে।", ta: "ஒவ்வொரு சுழற்சியும் தூய்மையான புதுப்பித்தல், சமநிலை மற்றும் ஆரோக்கியத்தைக் கொண்டுவருகிறது.", te: "ప్రతి చక్రం శుభ్రమైన పునరుద్ధరణ, సమతుల్యత మరియు ఆరోగ్యాన్ని తెస్తుంది.", mr: "प्रत्येक चक्र स्वच्छ नूतनीकरण, संतुलन आणि आरोग्य आणते." }
  ];
  const [activeAffIndex, setActiveAffIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathCount(prev => {
          if (prev <= 1) {
            setBreatheState(curr => {
              if (curr === 'Inhale') { setBreathCount(4); return 'Hold'; } 
              else if (curr === 'Hold') { setBreathCount(4); return 'Exhale'; } 
              else { setBreathCount(4); return 'Inhale'; }
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setBreatheState('Ready');
      setBreathCount(4);
    }
    return () => clearInterval(interval);
  }, [breathingActive]);

  const handleAddJournal = () => {
    if (!journalInput.trim()) return;
    setJournals(prev => [
      { date: new Date().toISOString().split('T')[0], text: journalInput },
      ...prev
    ]);
    setJournalInput('');
  };

  const strings = {
    states: {
      Inhale: { en: 'Inhale', hi: 'सांस लें', bn: 'শ্বাস নিন', ta: 'மூச்சை உள்ளிழுக்கவும்', te: 'గాలి పీల్చు', mr: 'श्वास आत घ्या' },
      Hold: { en: 'Hold', hi: 'रोकें', bn: 'ধরে রাখুন', ta: 'பிடி', te: 'పట్టుకో', mr: 'रोखून धरा' },
      Exhale: { en: 'Exhale', hi: 'सांस छोड़ें', bn: 'শ্বাস ছাড়ুন', ta: 'மூச்சை வெளியே விடவும்', te: 'గాలి వదులు', mr: 'श्वास बाहेर सोडा' },
      Ready: { en: 'Ready', hi: 'तैयार', bn: 'প্রস্তুত', ta: 'தயார்', te: 'సిద్ధం', mr: 'तयार' }
    },
    zenTitle: { en: '🧘‍♀️ Zen guided Breathing Sphere', hi: '🧘‍♀️ ज़ेन निर्देशित श्वास क्षेत्र', bn: '🧘‍♀️ জেন গাইডেড শ্বাস গোলক', ta: '🧘‍♀️ ஜென் வழிகாட்டப்பட்ட சுவாச கோளம்', te: '🧘‍♀️ జెన్ గైడెడ్ బ్రీతింగ్ స్పియర్', mr: '🧘‍♀️ झेन मार्गदर्शित श्वासोच्छ्वास क्षेत्र' },
    zenDesc: { en: 'Synchronize your breathing with our expanding sphere to instantly calm neural pathways and reduce PMS tension.', hi: 'पीएमएस तनाव को कम करने और तंत्रिका मार्ग को शांत करने के लिए हमारे विस्तार क्षेत्र के साथ अपनी श्वास को सिंक्रनाइज़ करें।', bn: 'পিএমএস উত্তেজনা কমাতে এবং স্নায়বিক পথ শান্ত করতে আমাদের প্রসারিত গোলকের সাথে আপনার শ্বাস সিঙ্ক্রোনাইজ করুন।', ta: 'பிஎம்எஸ் பதட்டத்தைக் குறைக்கவும் நரம்பு வழிகளை அமைதிப்படுத்தவும் விரிவடையும் கோளத்துடன் உங்கள் சுவாசத்தை ஒத்திசைக்கவும்.', te: 'పిఎంఎస్ ఉద్రిక్తతను తగ్గించడానికి మరియు నాడీ మార్గాలను శాంతపరచడానికి విస్తరిస్తున్న గోళంతో మీ శ్వాసను సమకాలీకరించండి.', mr: 'पीएमएस ताण कमी करण्यासाठी आणि मज्जासंस्थेचे मार्ग शांत करण्यासाठी आमच्या विस्तारणाऱ्या क्षेत्रासह आपला श्वास समक्रमित करा.' },
    startBtn: { en: 'Start Zen Sphere', hi: 'ज़ेन क्षेत्र शुरू करें', bn: 'জেন গোলক শুরু করুন', ta: 'ஜென் கோளத்தை தொடங்கு', te: 'జెన్ స్పియర్ ప్రారంభించండి', mr: 'झेन क्षेत्र सुरू करा' },
    pauseBtn: { en: 'Pause Sphere', hi: 'क्षेत्र रोकें', bn: 'গোলক পজ করুন', ta: 'கோளத்தை இடைநிறுத்து', te: 'స్పియర్ పాజ్ చేయండి', mr: 'क्षेत्र थांबवा' },
    affTitle: { en: '✨ Daily Positive Affirmation', hi: '✨ दैनिक सकारात्मक पुष्टि', bn: '✨ দৈনিক ইতিবাচক নিশ্চিতকরণ', ta: '✨ தினசரி நேர்மறை உறுதிமொழி', te: '✨ రోజువారీ సానుకూల ధృవీకరణ', mr: '✨ दैनिक सकारात्मक पुष्टीकरण' },
    nextAff: { en: 'Next Affirmation', hi: 'अगली पुष्टि', bn: 'পরবর্তী নিশ্চিতকরণ', ta: 'அடுத்த உறுதிமொழி', te: 'తదుపరి ధృవీకరణ', mr: 'पुढील पुष्टीकरण' },
    journalTitle: { en: '📝 Intimate Mood Journal', hi: '📝 अंतरंग मनोदशा पत्रिका', bn: '📝 অন্তরঙ্গ মুড জার্নাল', ta: '📝 நெருக்கமான மனநிலை இதழ்', te: '📝 ఇంటిమేట్ మూడ్ జర్నల్', mr: '📝 इंटिमेट मूड जर्नल' },
    logPlaceholder: { en: 'Log thoughts, feelings, or stress variables...', hi: 'विचारों, भावनाओं, या तनाव चर को लॉग करें...', bn: 'চিন্তাভাবনা, অনুভূতি বা চাপের পরিবর্তনগুলি লগ করুন...', ta: 'எண்ணங்கள், உணர்வுகள் அல்லது மன அழுத்த மாறிகளைப் பதிவு செய்யுங்கள்...', te: 'ఆలోచనలు, భావాలు లేదా ఒత్తిడి వేరియబుల్స్ లాగ్ చేయండి...', mr: 'विचार, भावना किंवा तणाव चल नोंदवा...' },
    logBtn: { en: 'Log', hi: 'लॉग', bn: 'লগ', ta: 'பதிவு', te: 'లాగ్', mr: 'नोंदवा' },
    quizTitle: { en: '🔬 GAD Intimate Anxiety Assessment', hi: '🔬 GAD अंतरंग चिंता मूल्यांकन', bn: '🔬 GAD অন্তরঙ্গ উদ্বেগ মূল্যায়ন', ta: '🔬 GAD நெருக்கமான கவலை மதிப்பீடு', te: '🔬 GAD ఇంటిమేట్ ఆందోళన అంచనా', mr: '🔬 GAD इंटिमेट चिंता मूल्यांकन' },
    quizDesc: { en: 'Provide answers based on your feelings during this cycle phase to receive generalized AI suggestions.', hi: 'सामान्यीकृत AI सुझाव प्राप्त करने के लिए इस चक्र चरण के दौरान अपनी भावनाओं के आधार पर उत्तर प्रदान करें।', bn: 'সাধারণকৃত এআই পরামর্শ পেতে এই চক্রের সময় আপনার অনুভূতির উপর ভিত্তি করে উত্তর প্রদান করুন।', ta: 'பொதுவான ஏஐ பரிந்துரைகளைப் பெற இந்த சுழற்சி கட்டத்தில் உங்கள் உணர்வுகளின் அடிப்படையில் பதில்களை வழங்கவும்.', te: 'సాధారణ ఏఐ సూచనలను స్వీకరించడానికి ఈ సైకిల్ దశలో మీ భావాల ఆధారంగా సమాధానాలు అందించండి.', mr: 'सामान्यीकृत एआय सूचना प्राप्त करण्यासाठी या सायकल टप्प्यात आपल्या भावनांवर आधारित उत्तरे द्या.' },
    q1: { en: 'Feeling nervous, anxious, or on edge?', hi: 'घबराहट, चिंता, या किनारे पर महसूस कर रहे हैं?', bn: 'স্নায়বিক, উদ্বিগ্ন বা কিনারায় অনুভব করছেন?', ta: 'பதட்டமாக, கவலையாக அல்லது விளிம்பில் உணர்கிறீர்களா?', te: 'భయంగా, ఆందోళనగా లేదా అంచున ఉన్నట్లు అనిపిస్తుందా?', mr: 'अस्वस्थ, चिंताग्रस्त किंवा कडेवर वाटत आहे?' },
    q2: { en: 'Trouble relaxing or calming down musculature?', hi: 'मांसपेशियों को आराम देने या शांत होने में परेशानी?', bn: 'পেশী শিথিল বা শান্ত করতে সমস্যা?', ta: 'தசையை தளர்த்துவதில் அல்லது அமைதிப்படுத்துவதில் சிக்கலா?', te: 'కండరాలను సడలించడం లేదా శాంతపరచడంలో ఇబ్బంది ఉందా?', mr: 'स्नायूंना आराम देण्यास किंवा शांत करण्यात अडचण येत आहे?' },
    q3: { en: 'Worrying too much about different matters?', hi: 'विभिन्न मामलों के बारे में बहुत अधिक चिंता करना?', bn: 'বিভিন্ন বিষয় নিয়ে খুব বেশি চিন্তা করছেন?', ta: 'பல்வேறு விஷயங்களைப் பற்றி அதிகம் கவலைப்படுகிறீர்களா?', te: 'వివిధ విషయాల గురించి ఎక్కువగా చింతిస్తున్నారా?', mr: 'वेगवेगळ्या विषयांबद्दल खूप चिंता करत आहात?' },
    options: [
      { en: 'Not at all', hi: 'बिल्कुल नहीं', bn: 'একদমই না', ta: 'இல்லவே இல்லை', te: 'అస్సలు లేదు', mr: 'अजिबात नाही' },
      { en: 'Several days', hi: 'कई दिन', bn: 'বেশ কয়েকদিন', ta: 'பல நாட்கள்', te: 'చాలా రోజులు', mr: 'काही दिवस' },
      { en: 'Over half days', hi: 'आधे से अधिक दिन', bn: 'অর্ধেকের বেশি দিন', ta: 'பாதி நாட்களுக்கு மேல்', te: 'సగం రోజులకు పైగా', mr: 'अर्ध्याहून अधिक दिवस' },
      { en: 'Nearly daily', hi: 'लगभग रोज़', bn: 'প্রায় প্রতিদিন', ta: 'கிட்டத்தட்ட தினமும்', te: 'దాదాపు ప్రతిరోజూ', mr: 'जवळपास दररोज' }
    ],
    compileBtn: { en: 'Compile Assessment Report', hi: 'मूल्यांकन रिपोर्ट संकलित करें', bn: 'মূল্যায়ন প্রতিবেদন কম্পাইল করুন', ta: 'மதிப்பீட்டு அறிக்கையைத் தொகுக்கவும்', te: 'అంచనా నివేదికను రూపొందించండి', mr: 'मूल्यांकन अहवाल संकलित करा' },
    waiting: { en: 'Complete all survey inputs and generate to view clinical suggestions.', hi: 'सभी सर्वेक्षण इनपुट पूरे करें और नैदानिक सुझाव देखने के लिए उत्पन्न करें।', bn: 'সমস্ত সমীক্ষা ইনপুট সম্পূর্ণ করুন এবং ক্লিনিকাল পরামর্শ দেখতে তৈরি করুন।', ta: 'அனைத்து கணக்கெடுப்பு உள்ளீடுகளையும் முடித்து, மருத்துவ பரிந்துரைகளைக் காண உருவாக்கவும்.', te: 'అన్ని సర్వే ఇన్‌పుట్‌లను పూర్తి చేయండి మరియు క్లినికల్ సూచనలను వీక్షించడానికి రూపొందించండి.', mr: 'सर्व सर्वेक्षण इनपुट पूर्ण करा आणि क्लिनिकल सूचना पाहण्यासाठी तयार करा.' },
    ratingTitle: { en: 'Your Anxiety Rating', hi: 'आपकी चिंता रेटिंग', bn: 'আপনার উদ্বেগ রেটিং', ta: 'உங்கள் கவலை மதிப்பீடு', te: 'మీ ఆందోళన రేటింగ్', mr: 'तुमचे चिंता रेटिंग' },
    ratings: {
      min: { en: 'Minimal Anxiety', hi: 'न्यूनतम चिंता', bn: 'ন্যূনতম উদ্বেগ', ta: 'குறைந்தபட்ச கவலை', te: 'కనిష్ట ఆందోళన', mr: 'किमान चिंता' },
      mod: { en: 'Moderate Stress / PMS Tension', hi: 'मध्यम तनाव / पीएमएस तनाव', bn: 'মাঝারি মানসিক চাপ / পিএমএস টান', ta: 'மிதமான மன அழுத்தம் / பிஎம்எஸ் பதற்றம்', te: 'మితమైన ఒత్తిడి / పిఎంఎస్ ఉద్రిక్తత', mr: 'मध्यम तणाव / पीएमएस ताण' },
      mild: { en: 'Mild Anxious Tension', hi: 'हल्का चिंताग्रस्त तनाव', bn: 'মৃদু উদ্বিগ্ন উত্তেজনা', ta: 'லேசான கவலை பதற்றம்', te: 'తేలికపాటి ఆందోళన ఉద్రిక్తత', mr: 'सौम्य चिंताग्रस्त ताण' }
    },
    descs: {
      minDesc: { en: 'Your scores reflect standard healthy wellness levels.', hi: 'आपके स्कोर मानक स्वस्थ कल्याण स्तर को दर्शाते हैं।', bn: 'আপনার স্কোর স্ট্যান্ডার্ড সুস্থ সুস্থতার মাত্রা প্রতিফলিত করে।', ta: 'உங்கள் மதிப்பெண்கள் நிலையான ஆரோக்கியமான ஆரோக்கிய நிலைகளை பிரதிபலிக்கின்றன.', te: 'మీ స్కోర్‌లు ప్రామాణిక ఆరోగ్యకరమైన వెల్‌నెస్ స్థాయిలను ప్రతిబింబిస్తాయి.', mr: 'तुमचे स्कोअर मानक निरोगी कल्याण पातळी दर्शवतात.' },
      modDesc: { en: 'Consider introducing regular gentle breathing exercises, low-intensity walks, or consulting a wellness advisor.', hi: 'नियमित सौम्य श्वास व्यायाम, कम तीव्रता वाली सैर, या कल्याण सलाहकार से परामर्श करने पर विचार करें।', bn: 'নিয়মিত মৃদু শ্বাস-প্রশ্বাসের ব্যায়াম, কম-তীব্রতার হাঁটা, বা একজন সুস্থতা উপদেষ্টার সাথে পরামর্শ করার কথা বিবেচনা করুন।', ta: 'வழக்கமான மென்மையான சுவாசப் பயிற்சிகள், குறைந்த தீவிர நடைப்பயிற்சி அல்லது ஆரோக்கிய ஆலோசகரை அணுகுவது ஆகியவற்றைக் கருத்தில் கொள்ளுங்கள்.', te: 'క్రమం తప్పకుండా సున్నితమైన శ్వాస వ్యాయామాలు, తక్కువ-తీవ్రత నడకలు లేదా వెల్‌నెస్ సలహాదారుని సంప్రదించడాన్ని పరిగణించండి.', mr: 'नियमित सौम्य श्वासोच्छवासाचे व्यायाम, कमी-तीव्रतेचे चालणे किंवा वेलनेस सल्लागाराचा सल्ला घेण्याचा विचार करा.' },
      mildDesc: { en: 'Take regular short breaks throughout work, stay fully hydrated, and log mood variables daily.', hi: 'पूरे काम के दौरान नियमित रूप से छोटे ब्रेक लें, पूरी तरह से हाइड्रेटेड रहें, और रोजाना मूड चर लॉग करें।', bn: 'কাজের সময় নিয়মিত ছোট বিরতি নিন, পুরোপুরি হাইড্রেটেড থাকুন এবং প্রতিদিন মেজাজের পরিবর্তনগুলি লগ করুন।', ta: 'வேலையில் வழக்கமான குறுகிய இடைவெளிகளை எடுத்துக் கொள்ளுங்கள், முழுமையாக நீரேற்றமாக இருங்கள் மற்றும் தினமும் மனநிலை மாறிகளை பதிவு செய்யுங்கள்.', te: 'పనిలో క్రమం తప్పకుండా చిన్న విరామాలు తీసుకోండి, పూర్తిగా హైడ్రేటెడ్ గా ఉండండి మరియు ప్రతిరోజూ మూడ్ వేరియబుల్స్ లాగ్ చేయండి.', mr: 'कामादरम्यान नियमित लहान ब्रेक घ्या, पूर्णपणे हायड्रेटेड रहा आणि दररोज मूड व्हेरिएबल्स नोंदवा.' }
    }
  };

  const handleCalculateQuiz = () => {
    const total = Object.values(quizAnswers).reduce((a, b) => a + b, 0);
    let rating = strings.ratings.min;
    let desc = strings.descs.minDesc;

    if (total >= 7) {
      rating = strings.ratings.mod;
      desc = strings.descs.modDesc;
    } else if (total >= 4) {
      rating = strings.ratings.mild;
      desc = strings.descs.mildDesc;
    }

    setQuizScore({ total, rating, desc });
  };

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* 1. HERO BREATHING & AFFIRMATION IN TWO COLUMNS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px' }} className="grid-2">
        
        {/* Breathing Guided Sphere */}
        <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
          <h3 style={{ fontSize: '18px', color: 'var(--primary)' }}>{strings.zenTitle[language] || strings.zenTitle['en']}</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{strings.zenDesc[language] || strings.zenDesc['en']}</p>

          <div 
            style={{ 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, var(--primary-light), var(--secondary-light))', 
              border: '2px solid var(--primary)', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              boxShadow: breathingActive ? '0 0 30px rgba(230, 50, 120, 0.4)' : '0 4px 10px rgba(0,0,0,0.05)',
              transform: breathingActive && breatheState === 'Inhale' ? 'scale(1.15)' : breathingActive && breatheState === 'Exhale' ? 'scale(0.95)' : 'scale(1)',
              transition: 'all 4s ease-in-out'
            }}
          >
            {breathingActive && (
              <div style={{ position: 'absolute', inset: '-10px', borderRadius: '50%', border: '1px dashed var(--primary)', animation: 'pulse 2s infinite' }}></div>
            )}
            <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>{strings.states[breatheState]?.[language] || strings.states[breatheState]?.['en'] || breatheState}</span>
            {breathingActive && <span style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>{breathCount}s</span>}
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => setBreathingActive(!breathingActive)}
          >
            {breathingActive ? (strings.pauseBtn[language] || strings.pauseBtn['en']) : (strings.startBtn[language] || strings.startBtn['en'])}
          </button>
        </div>

        {/* Positive Affirmations & Mood log */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Affirmation Card */}
          <div className="glass-panel" style={{ padding: '30px', background: 'linear-gradient(135deg, var(--secondary), var(--primary))', color: 'white', border: 'none', minHeight: '160px', display: 'flex', flexDirection: 'column', justifySelf: 'center', justifyContent: 'center', textAlign: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', opacity: '0.8' }}>{strings.affTitle[language] || strings.affTitle['en']}</span>
            <p style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.4', fontStyle: 'italic' }}>
              "{affirmations[activeAffIndex][language] || affirmations[activeAffIndex]['en']}"
            </p>
            <button 
              className="btn btn-secondary" 
              style={{ alignSelf: 'center', fontSize: '11px', padding: '4px 12px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white' }}
              onClick={() => setActiveAffIndex(prev => (prev + 1) % affirmations.length)}
            >
              {strings.nextAff[language] || strings.nextAff['en']}
            </button>
          </div>

          {/* Mood Journal Logger */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '17px', marginBottom: '12px' }}>{strings.journalTitle[language] || strings.journalTitle['en']}</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                placeholder={strings.logPlaceholder[language] || strings.logPlaceholder['en']}
                value={journalInput}
                onChange={(e) => setJournalInput(e.target.value)}
                style={{ flexGrow: '1', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none', fontSize: '13px' }}
              />
              <button className="btn btn-primary" onClick={handleAddJournal} style={{ padding: '10px 16px' }}>
                {strings.logBtn[language] || strings.logBtn['en']} <Plus size={14} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px', maxHeight: '120px', overflowY: 'auto' }}>
              {journals.map((j, idx) => (
                <div key={idx} style={{ background: 'var(--bg-primary)', padding: '10px', borderRadius: '6px', fontSize: '12px', border: '1px solid var(--border-color)' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '10px', display: 'block', marginBottom: '2px' }}>{j.date}</span>
                  <p style={{ color: 'var(--text-primary)' }}>{j.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 2. ANXIETY SELF-ASSESSMENT SURVEY */}
      <div className="glass-panel" style={{ padding: '40px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '8px', textAlign: 'center' }}>{strings.quizTitle[language] || strings.quizTitle['en']}</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '24px' }}>{strings.quizDesc[language] || strings.quizDesc['en']}</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px' }} className="grid-2">
          
          {/* Survey inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[
              { id: 'q1', text: strings.q1 },
              { id: 'q2', text: strings.q2 },
              { id: 'q3', text: strings.q3 }
            ].map(item => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600' }}>{item.text[language] || item.text['en']}</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {strings.options.map((opt, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setQuizAnswers(prev => ({ ...prev, [item.id]: sIdx }))}
                      style={{
                        padding: '6px',
                        fontSize: '11px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: quizAnswers[item.id] === sIdx ? 'var(--primary)' : 'var(--border-color)',
                        background: quizAnswers[item.id] === sIdx ? 'var(--primary-light)' : 'var(--bg-secondary)',
                        color: quizAnswers[item.id] === sIdx ? 'var(--primary)' : 'var(--text-primary)',
                        cursor: pointerStyle
                      }}
                    >
                      {opt[language] || opt['en']}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }} onClick={handleCalculateQuiz}>
              {strings.compileBtn[language] || strings.compileBtn['en']}
            </button>
          </div>

          {/* Survey output */}
          <div style={{ background: 'var(--bg-primary)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', minHeight: '200px' }}>
            {!quizScore ? (
              <div style={{ color: 'var(--text-secondary)' }}>
                <HelpCircle size={32} style={{ color: 'var(--secondary)', marginBottom: '8px', display: 'block', margin: '0 auto 8px auto' }} />
                <span>{strings.waiting[language] || strings.waiting['en']}</span>
              </div>
            ) : (
              <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase' }}>{strings.ratingTitle[language] || strings.ratingTitle['en']}</span>
                <h4 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--primary)' }}>{quizScore.rating[language] || quizScore.rating['en']}</h4>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '800', margin: '8px auto' }}>
                  {quizScore.total}/9
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4', padding: '0 20px' }}>
                  {quizScore.desc[language] || quizScore.desc['en']}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

const pointerStyle = 'pointer';
