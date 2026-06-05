import React from 'react';

export default function HomePage({ setPage, setTab, language, setUser }) {
  const handleAutoLogin = () => {
    setUser({
      firstName: 'Ananya',
      lastName: 'Sharma',
      email: 'ananya@example.com',
      isAdmin: true,
      subscriptionPlan: 'standard'
    });
    setPage('dashboard');
  };

  const strings = {
    healthConditions: { en: 'Your Health Conditions', hi: 'आपकी स्वास्थ्य स्थितियां', bn: 'আপনার স্বাস্থ্যের অবস্থা', ta: 'உங்கள் சுகாதார நிலைமைகள்', te: 'మీ ఆరోగ్య పరిస్థితులు', mr: 'तुमची आरोग्य स्थिती' },
    exploreAll: { en: 'Explore all >', hi: 'सभी देखें >', bn: 'সব দেখুন >', ta: 'அனைத்தையும் ஆராய்க >', te: 'అన్నింటినీ అన్వేషించండి >', mr: 'सर्व एक्सप्लोर करा >' },
    coreOfferings: { en: 'Core Interactive Offerings', hi: 'मुख्य इंटरैक्टिव पेशकश', bn: 'মূল ইন্টারেক্টিভ অফার', ta: 'முக்கிய ஊடாடும் சலுகைகள்', te: 'కోర్ ఇంటరాక్టివ్ ఆఫరింగ్స్', mr: 'मुख्य परस्परसंवादी ऑफर' },
    coreDesc: { en: "Democratizing clinical women's healthcare through personalized analytics, security, and guidance.", hi: 'व्यक्तिगत एनालिटिक्स, सुरक्षा और मार्गदर्शन के माध्यम से महिलाओं के स्वास्थ्य देखभाल का लोकतंत्रीकरण।', bn: 'ব্যক্তিগতকৃত বিশ্লেষণ, নিরাপত্তা এবং নির্দেশনার মাধ্যমে মহিলাদের স্বাস্থ্যসেবাকে গণতান্ত্রিক করা।', ta: 'தனிப்பயனாக்கப்பட்ட பகுப்பாய்வு, பாதுகாப்பு மற்றும் வழிகாட்டுதல் மூலம் பெண்களின் மருத்துவ பராமரிப்பை ஜனநாயகப்படுத்துதல்.', te: 'వ్యక్తిగతీకరించిన విశ్లేషణలు, భద్రత మరియు మార్గదర్శకత్వం ద్వారా మహిళల ఆరోగ్య సంరక్షణను ప్రజాస్వామ్యీకరించడం.', mr: 'वैयक्तिकृत विश्लेषण, सुरक्षितता आणि मार्गदर्शनाद्वारे महिलांच्या आरोग्यसेवेचे लोकशाहीकरण करणे.' },
    expertMasterclasses: { en: 'Expert Masterclasses', hi: 'विशेषज्ञ मास्टरक्लास', bn: 'বিশেষজ্ঞ মাস্টারক্লাস', ta: 'நிபுணர் மாஸ்டர்கிளாஸ்கள்', te: 'నిపుణుల మాస్టర్‌క్లాస్‌లు', mr: 'तज्ञ मास्टरक्लास' },
    expertDesc: { en: "Premium video series from India's leading gynecologists.", hi: 'भारत के प्रमुख स्त्री रोग विशेषज्ञों की प्रीमियम वीडियो श्रृंखला।', bn: 'ভারতের শীর্ষস্থানীয় স্ত্রীরোগ বিশেষজ্ঞদের প্রিমিয়াম ভিডিও সিরিজ।', ta: 'இந்தியாவின் முன்னணி மகளிர் நல மருத்துவர்களின் பிரீமியம் வீடியோ தொடர்.', te: 'భారతదేశ అగ్రశ్రేణి గైనకాలజిస్ట్‌ల నుండి ప్రీమియం వీడియో సిరీస్.', mr: "भारतातील आघाडीच्या स्त्रीरोगतज्ञांची प्रीमियम व्हिडिओ मालिका." },
    viewAllSeries: { en: 'View All Series', hi: 'सभी श्रृंखला देखें', bn: 'সব সিরিজ দেখুন', ta: 'அனைத்து தொடர்களையும் காண்க', te: 'అన్ని సిరీస్‌లను వీక్షించండి', mr: 'सर्व मालिका पहा' },
    footerDesc: { en: "Empowering women with precision care, clinically-backed insights, and a community of experts dedicated to your holistic well-being.", hi: 'सटीक देखभाल, चिकित्सकीय रूप से समर्थित अंतर्दृष्टि और आपकी समग्र भलाई के लिए समर्पित विशेषज्ञों के समुदाय के साथ महिलाओं को सशक्त बनाना।', bn: 'নির্ভুল যত্ন, ক্লিনিক্যালি-সমর্থিত অন্তর্দৃষ্টি এবং আপনার সামগ্রিক সুস্থতার জন্য নিবেদিত বিশেষজ্ঞদের একটি সম্প্রদায়ের সাথে মহিলাদের ক্ষমতায়ন।', ta: 'துல்லியமான பராமரிப்பு, மருத்துவ ரீதியாக ஆதரிக்கப்படும் நுண்ணறிவுகள் மற்றும் நிபுணர்களின் சமூகம் மூலம் பெண்களுக்கு அதிகாரமளித்தல்.', te: 'ఖచ్చితమైన సంరక్షణ, వైద్యపరంగా మద్దతు ఉన్న అంతర్దృష్టులు మరియు నిపుణుల సంఘంతో మహిళలకు సాధికారత.', mr: 'अचूक काळजी, वैद्यकीयदृष्ट्या-समर्थित अंतर्दृष्टी आणि आपल्या सर्वांगीण कल्याणासाठी समर्पित तज्ञांच्या समुदायासह महिलांना सक्षम करणे.' },
    resources: { en: 'Resources', hi: 'संसाधन', bn: 'সম্পদ', ta: 'வளங்கள்', te: 'వనరులు', mr: 'संसाधने' },
    newsletter: { en: 'Newsletter', hi: 'न्यूज़लेटर', bn: 'নিউজলেটার', ta: 'செய்திமடல்', te: 'వార్తాలేఖ', mr: 'वृत्तपत्र' },
    newsletterDesc: { en: "Stay updated with the latest clinical research.", hi: 'नवीनतम नैदानिक ​​अनुसंधान से अपडेट रहें।', bn: 'সর্বশেষ ক্লিনিকাল গবেষণার সাথে আপডেট থাকুন।', ta: 'சமீபத்திய மருத்துவ ஆராய்ச்சியோடு புதுப்பித்திருங்கள்.', te: 'తాజా క్లినికల్ పరిశోధనతో నవీకరించబడండి.', mr: 'नवीनतम क्लिनिकल संशोधनासह अद्ययावित रहा.' },
    emailPlaceholder: { en: 'Email address', hi: 'ईमेल पता', bn: 'ইমেল ঠিকানা', ta: 'மின்னஞ்சல் முகவரி', te: 'ఇమెయిల్ చిరునామా', mr: 'ईमेल पत्ता' },
    join: { en: 'Join', hi: 'शामिल हों', bn: 'যোগ দিন', ta: 'சேரவும்', te: 'చేరండి', mr: 'सामील व्हा' },
    privacyPolicy: { en: 'Privacy Policy', hi: 'गोपनीयता नीति', bn: 'গোপনীয়তা নীতি', ta: 'தனியுரிமைக் கொள்கை', te: 'గోప్యతా విధానం', mr: 'गोपनीयता धोरण' },
    terms: { en: 'Terms of Service', hi: 'सेवा की शर्तें', bn: 'পরিষেবার শর্তাবলী', ta: 'சேவை விதிமுறைகள்', te: 'సేవా నిబంధనలు', mr: 'सेवा अटी' },
    clinicalStandards: { en: 'Clinical Standards', hi: 'नैदानिक ​​मानक', bn: 'ক্লিনিকাল স্ট্যান্ডার্ড', ta: 'மருத்துவ தரநிலைகள்', te: 'క్లినికల్ ప్రమాణాలు', mr: 'क्लिनिकल मानके' },
    contactUs: { en: 'Contact Us', hi: 'संपर्क करें', bn: 'যোগাযোগ করুন', ta: 'எங்களை தொடர்பு கொள்ளவும்', te: 'మమ్మల్ని సంప్రదించండి', mr: 'आमच्याशी संपर्क साधा' },
    copyright: { en: '© 2026 SAKHI. Precision in Care.', hi: '© 2026 सखी। देखभाल में सटीकता।', bn: '© 2026 সখী। যত্নে নির্ভুলতা।', ta: '© 2026 சகி. பராமரிப்பில் துல்லியம்.', te: '© 2026 సఖి. సంరక్షణలో ఖచ్చితత్వం.', mr: '© 2026 सखी. काळजी मध्ये अचूकता.' }
  };

  const conditions = [
    { title: { en: 'PCOS Management', hi: 'पीसीओएस प्रबंधन', bn: 'পিসিওএস ব্যবস্থাপনা', ta: 'பிசிஓஎஸ் மேலாண்மை', te: 'పీసీఓఎస్ నిర్వహణ', mr: 'पीसीओएस व्यवस्थापन' }, image: '/PCOS.png' },
    { title: { en: 'Endometriosis Care', hi: 'एंडोमेट्रियोसिस देखभाल', bn: 'এন্ডোমেট্রিওসিস যত্ন', ta: 'எண்டோமெட்ரியோசிஸ் பராமரிப்பு', te: 'ఎండోమెట్రియోసిస్ కేర్', mr: 'एंडोमेट्रिओसिस केअर' }, image: '/Endom.png' },
    { title: { en: 'UTI & Pelvic Health', hi: 'यूटीआई और पेल्विक स्वास्थ्य', bn: 'ইউটিআই এবং পেলভিক স্বাস্থ্য', ta: 'யூடிஐ மற்றும் இடுப்பு ஆரோக்கியம்', te: 'యూటీఐ మరియు పెల్విక్ ఆరోగ్యం', mr: 'यूटीआय आणि पेल्विक आरोग्य' }, image: '/pelvic.png' },
    { title: { en: 'Pregnancy Journey', hi: 'गर्भावस्था यात्रा', bn: 'গর্ভাবস্থার যাত্রা', ta: 'கர்ப்ப பயணம்', te: 'గర్భధారణ ప్రయాణం', mr: 'गर्भधारणा प्रवास' }, image: '/pregnancy.png' }
  ];

  const appFeatures = [
    {
      title: { en: 'Cycle Tracker & Loggers', hi: 'चक्र ट्रैकर और लॉगर्स', bn: 'পিরিয়ড ট্র্যাকার', ta: 'மாதவிடாய் காட்டி', te: 'ఋతు చక్రం ట్రాకర్', mr: 'सायकल ट्रॅकर' },
      desc: { en: 'Predict ovulation, track menstrual phases, and log biological symptoms daily for full timeline awareness.', hi: 'ओव्यूलेशन की भविष्यवाणी करें, मासिक धर्म के चरणों को ट्रैक करें, और जैविक लक्षणों को लॉग करें।', bn: 'ওভুলেশনের পূর্বাভাস দিন, পিরিয়ড ট্র্যাক করুন এবং প্রতিদিন জৈবিক লক্ষণগুলি লগ করুন।', ta: 'அண்டவிடுப்பைக் கணிக்கவும், மாதவிடாய் கட்டங்களைக் கண்காணிக்கவும்.', te: 'అండోత్సర్గము అంచనా వేయండి, ఋతు దశలను ట్రాక్ చేయండి.', mr: 'ओव्हुलेशनचा अंदाज लावा, मासिक पाळीचा मागोवा घ्या आणि जैविक लक्षणांची नोंद घ्या.' },
      icon: '📅',
      badge: { en: 'Interactive', hi: 'इंटरैक्टिव', bn: 'ইন্টারেক্টিভ', ta: 'ஊடாடும்', te: 'ఇంటరాక్టివ్', mr: 'परस्परसंवादी' },
      color: 'hsl(340, 75%, 45%)',
      bg: 'var(--primary-light)'
    },
    {
      title: { en: 'Blood Color Analyzer', hi: 'रक्त रंग विश्लेषक', bn: 'রক্তের রঙ বিশ্লেষক', ta: 'இரத்த நிற பகுப்பாய்வு', te: 'రక్త రంగు విశ్లేషణ', mr: 'रक्त रंग विश्लेषक' },
      desc: { en: 'Analyze menstrual flow colors to understand oxygen levels, hormonal balances, and get immediate clinical alerts.', hi: 'ऑक्सीजन के स्तर और हार्मोनल संतुलन को समझने के लिए मासिक धर्म के रक्त का विश्लेषण करें।', bn: 'অক্সিজেনের মাত্রা এবং হরমোনের ভারসাম্য বুঝতে রক্তের বিশ্লেষণ করুন।', ta: 'ஆக்ஸிஜன் அளவுகள் மற்றும் ஹார்மோன் சமநிலைகளை புரிந்து கொள்ள இரத்த நிறங்களை பகுப்பாய்வு செய்யவும்.', te: 'ఆక్సిజన్ స్థాయిలు మరియు హార్మోన్ల సమతుల్యతను అర్థం చేసుకోవడానికి రక్త రంగులను విశ్లేషించండి.', mr: 'ऑक्सिजनची पातळी आणि हार्मोनल संतुलन समजून घेण्यासाठी रक्ताचे विश्लेषण करा.' },
      icon: '🩸',
      badge: { en: 'Clinical Tool', hi: 'क्लिनिकल टूल', bn: 'ক্লিনিকাল টুল', ta: 'மருத்துவ கருவி', te: 'క్లినికల్ టూల్', mr: 'क्लिनिकल टूल' },
      color: 'hsl(355, 90%, 45%)',
      bg: 'rgba(230, 50, 120, 0.08)'
    },
    {
      title: { en: 'My Health Chat (AI)', hi: 'स्वास्थ्य चैट (एआई)', bn: 'হেলথ চ্যাট (এআই)', ta: 'சுகாதார அரட்டை (ஏஐ)', te: 'హెల్త్ చాట్ (ఏఐ)', mr: 'आरोग्य चॅट (एआय)' },
      desc: { en: 'Get immediate clinical symptom insights and lifestyle guidelines using our secure conversational AI doctor.', hi: 'सुरक्षित एआई डॉक्टर का उपयोग करके तत्काल नैदानिक ​​लक्षण अंतर्दृष्टि प्राप्त करें।', bn: 'আমাদের এআই ডাক্তারের সাহায্যে তাৎক্ষণিক ক্লিনিকাল লক্ষণগুলির অন্তর্দৃষ্টি পান।', ta: 'எங்கள் பாதுகாப்பான ஏஐ மருத்துவர் மூலம் உடனடி மருத்துவ நுண்ணறிவுகளைப் பெறுங்கள்.', te: 'మా సురక్షిత ఏఐ డాక్టర్ ద్వారా తక్షణ క్లినికల్ అంతర్దృష్టులను పొందండి.', mr: 'आमच्या सुरक्षित एआय डॉक्टरचा वापर करून त्वरित क्लिनिकल अंतर्दृष्टी मिळवा.' },
      icon: '✨',
      badge: { en: 'AI Powered', hi: 'एआई संचालित', bn: 'এআই চালিত', ta: 'ஏஐ-இயங்கும்', te: 'ఏఐ ఆధారిత', mr: 'एआय समर्थित' },
      color: 'hsl(285, 20%, 30%)',
      bg: 'var(--secondary-light)'
    },
    {
      title: { en: 'Custom Diet & Yoga', hi: 'कस्टम आहार और योग', bn: 'কাস্টম ডায়েট এবং যোগব্যায়াম', ta: 'தனிப்பயன் உணவு & யோகா', te: 'కస్టమ్ డైట్ & యోగా', mr: 'सानुकूल आहार आणि योग' },
      desc: { en: 'Generate low-GI PCOS diets, cost-saving local ingredient swaps, and guided yoga routines to ease period cramps.', hi: 'कम-जीआई पीसीओएस आहार और निर्देशित योग दिनचर्या उत्पन्न करें।', bn: 'কম-জিআই পিসিওএস ডায়েট এবং যোগব্যায়াম তৈরি করুন।', ta: 'குறைந்த-ஜிஐ பிசிஓஎஸ் உணவுகள் மற்றும் யோகா நடைமுறைகளை உருவாக்கவும்.', te: 'తక్కువ-జీఐ పీసీఓఎస్ ఆహారాలు మరియు యోగా విధానాలను రూపొందించండి.', mr: 'कमी-जीआय पीसीओएस आहार आणि मार्गदर्शित योग दिनचर्या तयार करा.' },
      icon: '🥗',
      badge: { en: 'Personalized', hi: 'वैयक्तिकृत', bn: 'ব্যক্তিগতকৃত', ta: 'தனிப்பயனாக்கப்பட்டது', te: 'వ్యక్తిగతీకరించబడింది', mr: 'वैयक्तिकृत' },
      color: 'hsl(150, 60%, 45%)',
      bg: 'var(--success-light)'
    },
    {
      title: { en: 'Zen Breathing Sphere', hi: 'ज़ेन श्वास क्षेत्र', bn: 'জেন শ্বাস প্রশ্বাস', ta: 'ஜென் மூச்சு பயிற்சி', te: 'జెన్ బ్రీతింగ్', mr: 'झेन श्वासोच्छ्वास' },
      desc: { en: 'Lower cortisol and PMS stress using our animated deep breathing helper, anxiety assessments, and positive logs.', hi: 'एनिमेटेड डीप ब्रीदिंग हेल्पर का उपयोग करके कोर्टिसोल और तनाव कम करें।', bn: 'অ্যানিমেটেড ডিপ ব্রিদিং হেল্পার ব্যবহার করে মানসিক চাপ কমান।', ta: 'ஆழமான சுவாச உதவியாளர் மூலம் மன அழுத்தத்தைக் குறைக்கவும்.', te: 'డీప్ బ్రీతింగ్ హెల్పర్ ద్వారా ఒత్తిడిని తగ్గించండి.', mr: 'अ‍ॅनिमेटेड डीप ब्रीदिंग हेल्पर वापरून ताण कमी करा.' },
      icon: '🧘‍♀️',
      badge: { en: 'Mindfulness', hi: 'माइंडफुलनेस', bn: 'মাইন্ডফুলনেস', ta: 'கவனக்குவிப்பு', te: 'మైండ్‌ఫుల్‌నెస్', mr: 'माइंडफुलनेस' },
      color: 'hsl(275, 65%, 92%)',
      bg: 'var(--accent-lavender)'
    },
    {
      title: { en: 'Safe-Space Community', hi: 'सुरक्षित-स्थान समुदाय', bn: 'নিরাপদ কমিউনিটি', ta: 'பாதுகாப்பான சமூகம்', te: 'సురక్షిత కమ్యూనిటీ', mr: 'सुरक्षित समुदाय' },
      desc: { en: 'Share stories, join peer groups, and consult qualified healthcare specialists anonymously in moderated forums.', hi: 'कहानियां साझा करें, और मंचों में विशेषज्ञों से परामर्श लें।', bn: 'গল্প শেয়ার করুন, এবং ফোরামে বিশেষজ্ঞদের সাথে পরামর্শ করুন।', ta: 'கதைகளைப் பகிரவும், நிபுணர்களுடன் ஆலோசிக்கவும்.', te: 'కథలను పంచుకోండి మరియు నిపుణులను సంప్రదించండి.', mr: 'कथा सामायिक करा आणि तज्ञांचा सल्ला घ्या.' },
      icon: '👥',
      badge: { en: 'Moderated', hi: 'संचालित', bn: 'নিয়ন্ত্রিত', ta: 'கண்காணிக்கப்படும்', te: 'నియంత్రించబడింది', mr: 'नियंत्रित' },
      color: 'hsl(200, 75%, 45%)',
      bg: 'rgba(200, 30, 86, 0.04)'
    }
  ];

  const masterclasses = [
    {
      title: { en: 'Decoding Your Hormonal Cycle', hi: 'अपने हार्मोनल चक्र को डिकोड करना', bn: 'আপনার হরমোন চক্র ডিকোডিং', ta: 'உங்கள் ஹார்மோன் சுழற்சியை டிகோடிங் செய்தல்', te: 'మీ హార్మోన్ల చక్రాన్ని డీకోడ్ చేయడం', mr: 'तुमचे हार्मोनल सायकल डीकोड करणे' },
      desc: { en: 'Understand the four phases of your cycle and how to sync your lifestyle for peak wellness.', hi: 'अपने चक्र के चार चरणों को समझें और कल्याण के लिए अपनी जीवन शैली को कैसे सिंक करें।', bn: 'আপনার চক্রের চারটি পর্যায় বুঝুন এবং সুস্থতার জন্য কীভাবে আপনার জীবনধারা সিঙ্ক করবেন।', ta: 'உங்கள் சுழற்சியின் நான்கு கட்டங்களைப் புரிந்து கொள்ளுங்கள்.', te: 'మీ చక్రం యొక్క నాలుగు దశలను అర్థం చేసుకోండి.', mr: 'तुमच्या सायकलचे चार टप्पे समजून घ्या.' },
      author: { en: 'Dr. Kavita Iyer', hi: 'डॉ. कविता अय्यर', bn: 'ড. কবিতা আইয়ার', ta: 'டாக்டர். கவிதா ஐயர்', te: 'డా. కవితా అయ్యర్', mr: 'डॉ. कविता अय्यर' },
      role: { en: 'Senior Endocrinologist', hi: 'वरिष्ठ एंडोक्रिनोलॉजिस्ट', bn: 'সিনিয়র এন্ডোক্রিনোলজিস্ট', ta: 'மூத்த உட்சுரப்பியல் நிபுணர்', te: 'సీనియర్ ఎండోక్రినాలజిస్ట్', mr: 'वरिष्ठ एंडोक्रिनोलॉजिस्ट' },
      duration: '18:24',
      bgGradient: 'from-pink-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800'
    },
    {
      title: { en: 'The Future of Fertility Tracking', hi: 'प्रजनन ट्रैकिंग का भविष्य', bn: 'উর্বরতা ট্র্যাকিংয়ের ভবিষ্যত', ta: 'கருவுறுதல் கண்காணிப்பின் எதிர்காலம்', te: 'సంతానోత్పత్తి ట్రాకింగ్ యొక్క భవిష్యత్తు', mr: 'प्रजनन ट्रॅकिंगचे भविष्य' },
      desc: { en: 'How predictive data and AI are revolutionizing the conception plan for their future families.', hi: 'भविष्य कहनेवाला डेटा और एआई गर्भाधान योजना में कैसे क्रांति ला रहे हैं।', bn: 'কীভাবে ভবিষ্যদ্বাণীমূলক ডেটা এবং এআই গর্ভধারণ পরিকল্পনায় বিপ্লব ঘটাচ্ছে।', ta: 'முன்கணிப்பு தரவு மற்றும் ஏஐ எவ்வாறு கருத்தரித்தல் திட்டத்தில் புரட்சியை ஏற்படுத்துகின்றன.', te: 'ప్రిడిక్టివ్ డేటా మరియు ఏఐ గర్భధారణ ప్రణాళికను ఎలా విప్లవాత్మకంగా మారుస్తున్నాయి.', mr: 'अंदाज लावणारा डेटा आणि एआय गर्भधारणा योजनेत कशी क्रांती घडवत आहेत.' },
      author: { en: 'Dr. Sameer Verma', hi: 'डॉ. समीर वर्मा', bn: 'ড. সমীর বর্মা', ta: 'டாக்டர். சமீர் வர்மா', te: 'డా. సమీర్ వర్మ', mr: 'डॉ. समीर वर्मा' },
      role: { en: 'Reproductive Specialist', hi: 'प्रजनन विशेषज्ञ', bn: 'প্রজনন বিশেষজ্ঞ', ta: 'இனப்பெருக்க நிபுணர்', te: 'పునరుత్పత్తి నిపుణుడు', mr: 'प्रजनन तज्ञ' },
      duration: '12:15',
      bgGradient: 'from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800'
    },
    {
      title: { en: 'Nutritional Therapy: Anti-Inflammatory Diet', hi: 'पोषण थेरेपी: सूजन-रोधी आहार', bn: 'পুষ্টি থেরাপি: অ্যান্টি-ইনফ্লেমেটরি ডায়েট', ta: 'ஊட்டச்சத்து சிகிச்சை: அழற்சி எதிர்ப்பு உணவு', te: 'పోషకాహార చికిత్స: శోథ నిరోధక ఆహారం', mr: 'पोषण थेरपी: दाहक-विरोधी आहार' },
      desc: { en: 'Customizing your food intake to manage endometriosis symptoms and reduce stress.', hi: 'एंडोमेट्रियोसिस के लक्षणों को प्रबंधित करने और तनाव को कम करने के लिए अपने भोजन का सेवन अनुकूलित करना।', bn: 'এন্ডোমেট্রিওসিসের লক্ষণগুলি পরিচালনা করতে এবং চাপ কমাতে আপনার খাদ্য গ্রহণ কাস্টমাইজ করা।', ta: 'எண்டோமெட்ரியோசிஸ் அறிகுறிகளை நிர்வகிக்க உங்கள் உணவை தனிப்பயனாக்குதல்.', te: 'ఎండోమెట్రియోసిస్ లక్షణాలను నిర్వహించడానికి మరియు ఒత్తిడిని తగ్గించడానికి ఆహారాన్ని అనుకూలీకరించడం.', mr: 'एंडोमेट्रिओसिसची लक्षणे व्यवस्थापित करण्यासाठी आणि ताण कमी करण्यासाठी तुमचे अन्न सेवन सानुकूल करणे.' },
      author: { en: 'Dr. Hana Patel', hi: 'डॉ. हाना पटेल', bn: 'ড. হানা প্যাটেল', ta: 'டாக்டர். ஹனா படேல்', te: 'డా. హనా పటేల్', mr: 'डॉ. हाना पटेल' },
      role: { en: 'Nutrition & Behavioral Lead', hi: 'पोषण और व्यवहार लीड', bn: 'পুষ্টি ও আচরণগত লিড', ta: 'ஊட்டச்சத்து நிபுணர்', te: 'పోషకాహార నిపుణుడు', mr: 'पोषण आणि वर्तणूक लीड' },
      duration: '22:10',
      bgGradient: 'from-amber-50 to-rose-50 dark:from-zinc-900 dark:to-zinc-800'
    }
  ];

  const heroContent = {
    badge: {
      en: "★ SAKHI Platform",
      hi: "★ सखी प्लेटफॉर्म",
      bn: "★ সখী প্ল্যাটফর্ম",
      ta: "★ சகி தளம்",
      te: "★ సఖి ప్లాట్‌ఫారమ్",
      mr: "★ सखी प्लॅटफॉर्म"
    },
    title: {
      en: "SAKHI: Your AI-Powered Women's Health Companion",
      hi: "सखी: आपका एआई-संचालित महिला स्वास्थ्य साथी",
      bn: "সখী: আপনার এআই-চালিত নারী স্বাস্থ্য সঙ্গী",
      ta: "சகி: உங்கள் ஏஐ-இயங்கும் பெண்கள் சுகாதார தோழி",
      te: "సఖి: మీ ఏఐ-ఆధారిత మహిళా ఆరోగ్య స్నేహితురాలు",
      mr: "सखी: आपले एआई-संचलित महिला आरोग्य सहकारी"
    },
    desc: {
      en: "Empowering your wellness with scientific clinical logs. Securely track period cycles, consult top gynecologists, analyze biological variables, and access AI-driven nutritional strategies daily.",
      hi: "वैज्ञानिक नैदानिक ​​लॉग के साथ आपकी भलाई को सशक्त बनाना। सुरक्षित रूप से चक्रों को ट्रैक करें, शीर्ष स्त्री रोग विशेषज्ञों से परामर्श करें, जैविक चरों का विश्लेषण करें और दैनिक एआई-संचालित पोषण रणनीतियों तक पहुंचें।",
      bn: "বিজ্ঞানসম্মত ক্লিনিকাল লগের মাধ্যমে আপনার সুস্থতাকে ক্ষমতায়ন করা। নিরাপদে পিরিয়ড চক্র ট্র্যাক করুন, শীর্ষ স্ত্রীরোগ বিশেষজ্ঞদের সাথে পরামর্শ করুন, জৈবিক ভেরিয়েবল বিশ্লেষণ করুন এবং প্রতিদিন এআই-চালিত পুষ্টি কৌশলগুলি অ্যাক্সেস করুন।",
      ta: "அறிவியல் மருத்துவப் பதிவுகள் மூலம் உங்கள் ஆரோக்கியத்தை மேம்படுத்துதல். பாதுகாப்பாக மாதவிடாய் சுழற்சிகளை கண்காணிக்கவும், சிறந்த மகளிர் நல மருத்துவரை அணுகவும், உயிரியல் மாறிகளை பகுப்பாய்வு செய்யவும், தினசரி ஏஐ ஊட்டச்சத்து உத்திகளைப் பெறவும்.",
      te: "శాస్త్రీయ క్లినికల్ లాగ్‌లతో మీ ఆరోగ్యాన్ని పెంపొందించడం. సురక్షితంగా చక్రాలను ట్రాక్ చేయండి, అగ్రశ్రేణి గైనకాలజిస్ట్‌లను సంప్రదించండి, జీవసంబంధ వేరియబుల్స్ విశ్లేషించండి మరియు రోజువారీ ఏఐ-ఆధారిత పోషకాహార వ్యూహాలను పొందండి.",
      mr: "वैज्ञानिक क्लिनिकल लॉगसह तुमच्या आरोग्याला सक्षम करणे. सुरक्षितपणे सायकलचा मागोवा घ्या, तज्ज्ञ स्त्रीरोगतज्ञांचा सल्ला घ्या, जैविक चलांचे विश्लेषण करा आणि दररोज एआय-चालित पोषण धोरणे मिळवा।"
    },
    btnStart: {
      en: "Launch Dashboard",
      hi: "डैशबोर्ड लॉन्च करें",
      bn: "ড্যাশবোর্ড শুরু করুন",
      ta: "டாஷ்போர்டு தொடங்கு",
      te: "డ్యాష్‌బోర్డ్ ప్రారంభించండి",
      mr: "डॅशबोर्ड लाँच करा"
    },
    btnLearn: {
      en: "Explore Features",
      hi: "विशेषताएं देखें",
      bn: "ফিচারগুলি জানুন",
      ta: "அம்சங்களை ஆராய்க",
      te: "ఫీచర్లు అన్వేషించండి",
      mr: "वैशिष्ट्ये एक्सप्लोर करा"
    }
  };

  return (
    <div className="flex flex-col gap-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-zinc-950 text-white min-h-[520px] flex items-center shadow-lg">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 animate-fade-in" style={{ backgroundImage: `url('/hero_doctor.png')` }}></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 animate-fade-in transition-opacity duration-1000" poster="/hero_doctor.png">
          <source src="/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10"></div>
        <div className="relative z-10 max-w-2xl px-8 py-16 sm:px-12 flex flex-col gap-6 items-start text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-feminine-pink/20 border border-feminine-pink/40 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-pink-300">
            {heroContent.badge[language] || heroContent.badge['en']}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {heroContent.title[language] || heroContent.title['en']}
          </h1>
          <p className="text-sm sm:text-base text-zinc-350 leading-relaxed max-w-xl">
            {heroContent.desc[language] || heroContent.desc['en']}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <button onClick={handleAutoLogin} className="rounded-full bg-feminine-pink hover:bg-feminine-pink/90 px-6 py-3 text-xs font-bold text-white shadow-lg active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer">
              ▶ {heroContent.btnStart[language] || heroContent.btnStart['en']}
            </button>
            <button onClick={handleAutoLogin} className="rounded-full border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 text-xs font-bold text-white active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer">
              ↺ {heroContent.btnLearn[language] || heroContent.btnLearn['en']}
            </button>
          </div>
        </div>
      </section>

      {/* 2. YOUR HEALTH CONDITIONS SECTION */}
      <section className="flex flex-col gap-6 animate-fade-in">
        <div className="flex justify-between items-end border-b border-gray-100 dark:border-zinc-900 pb-4">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
            {strings.healthConditions[language] || strings.healthConditions['en']}
          </h2>
          <button onClick={handleAutoLogin} className="text-xs font-bold text-feminine-pink hover:underline flex items-center gap-1 cursor-pointer">
            {strings.exploreAll[language] || strings.exploreAll['en']}
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((cond, index) => (
            <div key={index} onClick={handleAutoLogin} className="group cursor-pointer flex flex-col gap-3">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 dark:border-zinc-900 dark:bg-zinc-900 shadow-sm relative">
                <img src={cond.image} alt={cond.title[language] || cond.title['en']} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-display font-extrabold text-sm text-[var(--text-primary)] text-left px-1 group-hover:text-feminine-pink transition-colors">
                {cond.title[language] || cond.title['en']}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 CORE PLATFORM FEATURES SHOWCASE */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 text-left border-b border-gray-100 dark:border-zinc-900 pb-4">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
            {strings.coreOfferings[language] || strings.coreOfferings['en']}
          </h2>
          <p className="text-xs text-[var(--text-secondary)] font-extrabold">
            {strings.coreDesc[language] || strings.coreDesc['en']}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appFeatures.map((feat, idx) => (
            <div key={idx} onClick={handleAutoLogin} className="glass-panel p-6 rounded-2xl flex flex-col items-start text-left gap-4 group cursor-pointer hover:-translate-y-1 transition-all border border-gray-100 dark:border-zinc-900">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: feat.bg, color: feat.color }}>
                {feat.icon}
              </div>
              <div className="flex flex-col gap-1.5 w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-display font-extrabold text-sm text-[var(--text-primary)] group-hover:text-feminine-pink transition-colors">
                    {feat.title[language] || feat.title['en']}
                  </h3>
                  <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full" style={{ backgroundColor: feat.bg, color: feat.color }}>
                    {feat.badge[language] || feat.badge['en']}
                  </span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] leading-normal">
                  {feat.desc[language] || feat.desc['en']}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERT MASTERCLASSES SECTION */}
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-gray-100 dark:border-zinc-900 pb-4">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
              {strings.expertMasterclasses[language] || strings.expertMasterclasses['en']}
            </h2>
            <p className="text-xs text-[var(--text-secondary)] font-extrabold mt-1">
              {strings.expertDesc[language] || strings.expertDesc['en']}
            </p>
          </div>
          <button onClick={handleAutoLogin} className="rounded-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-[10px] font-extrabold tracking-wider text-[var(--text-primary)] px-5 py-2.5 shadow-xs cursor-pointer uppercase">
            {strings.viewAllSeries[language] || strings.viewAllSeries['en']}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masterclasses.map((cls, index) => (
            <div key={index} onClick={handleAutoLogin} className="glass-panel rounded-2xl border border-gray-100 dark:border-zinc-900 overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1">
              <div className={`w-full aspect-[16/10] bg-gradient-to-tr ${cls.bgGradient} relative flex items-center justify-center p-4`}>
                <div className="h-full w-full rounded-xl border border-white/40 dark:border-zinc-800/40 bg-white/40 dark:bg-zinc-955/40 backdrop-blur-xs flex items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="h-8 w-8 rounded-full bg-feminine-pink text-white flex items-center justify-center shadow-md">
                    ▶
                  </div>
                </div>
                <span className="absolute bottom-2.5 right-2.5 bg-black/75 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                  {cls.duration}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3 text-left">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-feminine-pink/10 flex items-center justify-center text-[10px] font-extrabold text-feminine-pink border border-feminine-pink/20 shadow-xs">
                    {(cls.author[language] || cls.author['en'])[4]}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-[var(--text-primary)] leading-none">{cls.author[language] || cls.author['en']}</h4>
                    <span className="text-[9px] text-[var(--text-secondary)]">{cls.role[language] || cls.role['en']}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm text-[var(--text-primary)] group-hover:text-feminine-pink transition-colors leading-snug mb-1.5">
                    {cls.title[language] || cls.title['en']}
                  </h3>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-normal line-clamp-2">
                    {cls.desc[language] || cls.desc['en']}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BRAND NEWSLETTER FOOTER */}
      <footer className="border-t border-gray-150/40 dark:border-zinc-900 pt-16 pb-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="font-display text-xl font-extrabold text-feminine-pink bg-gradient-to-r from-feminine-pink to-feminine-purple bg-clip-text text-transparent">
              SAKHI
            </span>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-sm font-semibold">
              {strings.footerDesc[language] || strings.footerDesc['en']}
            </p>
            <div className="flex gap-3 text-gray-400">
              <span className="h-7 w-7 rounded-full bg-gray-55 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800 flex items-center justify-center text-xs hover:text-feminine-pink cursor-pointer">🔗</span>
              <span className="h-7 w-7 rounded-full bg-gray-55 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800 flex items-center justify-center text-xs hover:text-feminine-pink cursor-pointer">✉️</span>
              <span className="h-7 w-7 rounded-full bg-gray-55 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800 flex items-center justify-center text-xs hover:text-feminine-pink cursor-pointer">🌐</span>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-[10px] font-extrabold tracking-widest text-[var(--text-secondary)] uppercase">
              {strings.resources[language] || strings.resources['en']}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-extrabold text-[var(--text-secondary)]">
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">{strings.privacyPolicy[language] || strings.privacyPolicy['en']}</li>
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">{strings.terms[language] || strings.terms['en']}</li>
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">{strings.clinicalStandards[language] || strings.clinicalStandards['en']}</li>
              <li onClick={handleAutoLogin} className="hover:text-feminine-pink cursor-pointer transition-colors">{strings.contactUs[language] || strings.contactUs['en']}</li>
            </ul>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3.5">
            <h4 className="text-[10px] font-extrabold tracking-widest text-[var(--text-secondary)] uppercase">
              {strings.newsletter[language] || strings.newsletter['en']}
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-normal max-w-xs font-semibold">
              {strings.newsletterDesc[language] || strings.newsletterDesc['en']}
            </p>
            <div className="flex gap-2 w-full max-w-sm mt-1">
              <input 
                type="email" 
                placeholder={strings.emailPlaceholder[language] || strings.emailPlaceholder['en']}
                className="flex-grow pl-4 pr-3 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 text-xs outline-none focus:border-feminine-pink transition-colors dark:text-zinc-200"
              />
              <button 
                onClick={handleAutoLogin}
                className="rounded-full bg-feminine-pink hover:bg-feminine-pink/90 text-xs font-bold text-white px-5 py-2.5 shadow-sm active:scale-95 transition-all cursor-pointer shrink-0"
              >
                {strings.join[language] || strings.join['en']}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-150/40 dark:border-zinc-900 pt-6 flex justify-between items-center text-[10px] text-[var(--text-secondary)] font-bold">
          <span>{strings.copyright[language] || strings.copyright['en']}</span>
        </div>
      </footer>
    </div>
  );
}
