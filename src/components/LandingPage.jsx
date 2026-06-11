import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  HelpCircle, 
  Plus, 
  Minus,
  Check
} from 'lucide-react';

export default function LandingPage({ language, setTab }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const t = {
    en: {
      heroTitle: 'AI-Powered Precision Women\'s Health Platform',
      heroSub: 'ArogyaNari serves as your clinical health companion. Predict cycles, analyze symptoms, consult top doctors, and manage holistic wellness through end-to-end secure technology.',
      explore: 'Explore Dashboard',
      download: 'Mobile App Mockup',
      daysCountdown: 'Next Period in',
      daysValue: '12 Days',
      ovulationText: 'Ovulation: 14 Oct',
      fertilityChance: 'High Fertility Chance',
      featuresTitle: 'Complete FemTech Offerings',
      featuresSub: 'Integrated medical, nutritional, and analytical support tailored for every stage of your life.',
      meetExperts: 'Meet our Care Experts',
      meetExpertsSub: 'Instant access to certified gynecologists, nutritionists, and mental wellness practitioners.',
      pricingTitle: 'Choose Your Health Pass',
      pricingSub: 'Flexible subscription programs supporting chat consults, video assessments, and AI tools.',
      faqTitle: 'Frequently Asked Questions',
      basic: 'Basic Plan',
      standard: 'Standard Plan',
      premium: 'Premium Plan'
    },
    hi: {
      heroTitle: 'एआई-संचालित सटीक महिला स्वास्थ्य मंच',
      heroSub: 'ArogyaNari आपकी क्लिनिकल स्वास्थ्य सखी के रूप में कार्य करता है। चक्रों की भविष्यवाणी करें, लक्षणों का विश्लेषण करें, शीर्ष डॉक्टरों से परामर्श करें और समग्र कल्याण का प्रबंधन करें।',
      explore: 'डैशबोर्ड देखें',
      download: 'मोबाइल ऐप मॉकअप',
      daysCountdown: 'अगली अवधि',
      daysValue: '12 दिन बाद',
      ovulationText: 'अंडोत्सर्ग: 14 अक्टूबर',
      fertilityChance: 'उच्च प्रजनन क्षमता',
      featuresTitle: 'संपूर्ण फेमटेक सेवाएं',
      featuresSub: 'आपके जीवन के हर चरण के लिए तैयार की गई एकीकृत चिकित्सा, पोषण और विश्लेषणात्मक सहायता।',
      meetExperts: 'हमारे स्वास्थ्य विशेषज्ञों से मिलें',
      meetExpertsSub: 'प्रमाणित स्त्री रोग विशेषज्ञों, पोषण विशेषज्ञों और मानसिक स्वास्थ्य चिकित्सकों तक त्वरित पहुँच।',
      pricingTitle: 'अपना हेल्थ पास चुनें',
      pricingSub: 'चैट परामर्श, वीडियो मूल्यांकन और एआई टूल का समर्थन करने वाले लचीले सदस्यता कार्यक्रम।',
      faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
      basic: 'बेसिक प्लान',
      standard: 'स्टैंडर्ड प्लान',
      premium: 'प्रीमियम प्लान'
    },
    bn: {
      heroTitle: 'এআই-চালিত নির্ভুল নারী স্বাস্থ্য প্ল্যাটফর্ম',
      heroSub: 'ArogyaNari আপনার ক্লিনিকাল স্বাস্থ্য সঙ্গী হিসেবে কাজ করে। চক্রের ভবিষ্যদ্বাণী করুন, লক্ষণ বিশ্লেষণ করুন, শীর্ষ ডাক্তারদের সাথে পরামর্শ করুন এবং সুরক্ষিত প্রযুক্তির মাধ্যমে সামগ্রিক সুস্থতা পরিচালনা করুন।',
      explore: 'ড্যাশবোর্ড দেখুন',
      download: 'মোবাইল অ্যাপ মকআপ',
      daysCountdown: 'পরবর্তী পিরিয়ড',
      daysValue: '১২ দিন পর',
      ovulationText: 'ওভুলেশন: ১৪ অক্টোবর',
      fertilityChance: 'উচ্চ উর্বরতার সম্ভাবনা',
      featuresTitle: 'সম্পূর্ণ ফেমটেক অফার',
      featuresSub: 'আপনার জীবনের প্রতিটি পর্যায়ের জন্য তৈরি সমন্বিত চিকিৎসা, পুষ্টি এবং বিশ্লেষণাত্মক সহায়তা।',
      meetExperts: 'আমাদের বিশেষজ্ঞদের সাথে দেখা করুন',
      meetExpertsSub: 'প্রত্যয়িত গাইনোকোলজিস্ট, পুষ্টিবিদ এবং মানসিক সুস্থতা অনুশীলনকারীদের তাত্ক্ষণিক অ্যাক্সেস।',
      pricingTitle: 'আপনার স্বাস্থ্য পাস চয়ন করুন',
      pricingSub: 'চ্যাট পরামর্শ, ভিডিও মূল্যায়ন এবং এআই সরঞ্জাম সমর্থনকারী নমনীয় সাবস্ক্রিপশন প্রোগ্রাম।',
      faqTitle: 'সচরাচর জিজ্ঞাস্য',
      basic: 'বেসিক প্ল্যান',
      standard: 'স্ট্যান্ডার্ড প্ল্যান',
      premium: 'প্রিমিয়াম প্ল্যান'
    },
    ta: {
      heroTitle: 'ஏஐ-இயங்கும் துல்லியமான பெண்கள் சுகாதார தளம்',
      heroSub: 'ArogyaNari உங்கள் மருத்துவ சுகாதார தோழியாக செயல்படுகிறது. சுழற்சிகளைக் கணிக்கவும், அறிகுறிகளைப் பகுப்பாய்வு செய்யவும், சிறந்த மருத்துவர்களை அணுகவும் மற்றும் முழுமையான ஆரோக்கியத்தை நிர்வகிக்கவும்.',
      explore: 'டாஷ்போர்டை ஆராய்க',
      download: 'மொபைல் ஆப் மோக்கப்',
      daysCountdown: 'அடுத்த மாதவிடாய்',
      daysValue: '12 நாட்களில்',
      ovulationText: 'அண்டவிடுப்பு: 14 அக்',
      fertilityChance: 'அதிக கருவுறுதல் வாய்ப்பு',
      featuresTitle: 'முழுமையான ஃபெம்டெக் சலுகைகள்',
      featuresSub: 'உங்கள் வாழ்க்கையின் ஒவ்வொரு கட்டத்திற்கும் ஏற்ற ஒருங்கிணைந்த மருத்துவ, ஊட்டச்சத்து மற்றும் பகுப்பாய்வு ஆதரவு.',
      meetExperts: 'எங்கள் பராமரிப்பு நிபுணர்களைச் சந்திக்கவும்',
      meetExpertsSub: 'சான்றளிக்கப்பட்ட மகளிர் மருத்துவ நிபுணர்கள், ஊட்டச்சத்து நிபுணர்கள் மற்றும் மனநல பயிற்சியாளர்களுக்கான உடனடி அணுகல்.',
      pricingTitle: 'உங்கள் ஹெல்த் பாஸைத் தேர்வுசெய்க',
      pricingSub: 'அரட்டை ஆலோசனைகள், வீடியோ மதிப்பீடுகள் மற்றும் ஏஐ கருவிகளை ஆதரிக்கும் நெகிழ்வான சந்தா திட்டங்கள்.',
      faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      basic: 'அடிப்படை திட்டம்',
      standard: 'நிலையான திட்டம்',
      premium: 'பிரீமியம் திட்டம்'
    },
    te: {
      heroTitle: 'ఏఐ-ఆధారిత ప్రెసిషన్ విమెన్స్ హెల్త్ ప్లాట్‌ఫారమ్',
      heroSub: 'ArogyaNari మీ క్లినికల్ హెల్త్ కంానియన్‌గా పనిచేస్తుంది. చక్రాలను అంచనా వేయండి, లక్షణాలను విశ్లేషించండి, అగ్రశ్రేణి వైద్యులను సంప్రదించండి మరియు సంపూర్ణ ఆరోగ్యాన్ని నిర్వహించండి.',
      explore: 'డ్యాష్‌బోర్డ్‌ను అన్వేషించండి',
      download: 'మొబైల్ యాప్ మాక్అప్',
      daysCountdown: 'తదుపరి పీరియడ్',
      daysValue: '12 రోజుల్లో',
      ovulationText: 'అండోత్సర్గము: 14 అక్టోబర్',
      fertilityChance: 'అధిక సంతానోత్పత్తి అవకాశం',
      featuresTitle: 'పూర్తి ఫెమ్‌టెక్ ఆఫర్‌లు',
      featuresSub: 'మీ జీవితంలోని ప్రతి దశకు అనుగుణంగా సమీకృత వైద్య, పోషకాహార మరియు విశ్లేషణాత్మక మద్దతు.',
      meetExperts: 'మా నిపుణులను కలవండి',
      meetExpertsSub: 'ధృవీకరించబడిన గైనకాలజిస్టులు, న్యూట్రిషనిస్ట్‌లు మరియు మానసిక ఆరోగ్య నిపుణులకు తక్షణ ప్రాప్యత.',
      pricingTitle: 'మీ హెల్త్ పాస్‌ను ఎంచుకోండి',
      pricingSub: 'చాట్ సంప్రదింపులు, వీడియో అసెస్‌మెంట్‌లు మరియు ఏఐ సాధనాలకు మద్దతు ఇచ్చే అనువైన సభ్యత్వ కార్యక్రమాలు.',
      faqTitle: 'తరచుగా అడిగే ప్రశ్నలు',
      basic: 'ప్రాథమిక ప్లాన్',
      standard: 'ప్రామాణిక ప్లాన్',
      premium: 'ప్రీమియం ప్లాన్'
    },
    mr: {
      heroTitle: 'एआय-संचालित अचूक महिला आरोग्य प्लॅटफॉर्म',
      heroSub: 'ArogyaNari तुमची क्लिनिकल हेल्थ सखी म्हणून काम करते. सायकल्सचा अंदाज घ्या, लक्षणांचे विश्लेषण करा, शीर्ष डॉक्टरांचा सल्ला घ्या आणि सर्वांगीण कल्याणाचे व्यवस्थापन करा.',
      explore: 'डॅशबोर्ड एक्सप्लोर करा',
      download: 'मोबाईल ॲप मॉकअप',
      daysCountdown: 'पुढची पाळी',
      daysValue: '१२ दिवसांत',
      ovulationText: 'ओव्हुलेशन: १४ ऑक्टोबर',
      fertilityChance: 'उच्च प्रजनन क्षमता',
      featuresTitle: 'संपूर्ण फेमटेक ऑफर',
      featuresSub: 'तुमच्या आयुष्यातील प्रत्येक टप्प्यासाठी तयार केलेले एकात्मिक वैद्यकीय, पौष्टिक आणि विश्लेषणात्मक समर्थन.',
      meetExperts: 'आमच्या काळजी तज्ञांना भेटा',
      meetExpertsSub: 'प्रमाणित स्त्रीरोगतज्ज्ञ, पोषणतज्ञ आणि मानसिक स्वास्थ्य चिकित्सकांपर्यंत त्वरित प्रवेश.',
      pricingTitle: 'तुमचा हेल्थ पास निवडा',
      pricingSub: 'चॅट सल्लामसलत, व्हिडिओ मूल्यांकन आणि एआय साधनांना समर्थन देणारे लवचिक सदस्यता कार्यक्रम.',
      faqTitle: 'वारंवार विचारले जाणारे प्रश्न',
      basic: 'बेसिक प्लॅन',
      standard: 'स्टँडर्ड प्लॅन',
      premium: 'प्रीमियम प्लॅन'
    }
  };

  const currentLang = t[language] || t['en'];

  const solutions = [
    { name: { en: 'PCOS Management', hi: 'पीसीओएस प्रबंधन', bn: 'পিসিওএস ব্যবস্থাপনা', ta: 'பிசிஓஎஸ் மேலாண்மை', te: 'పీసీఓఎస్ నిర్వహణ', mr: 'पीसीओएस व्यवस्थापन' }, color: 'hsl(330, 80%, 95%)', border: 'hsl(330, 70%, 48%)' },
    { name: { en: 'Endometriosis Care', hi: 'एंडोमेट्रियोसिस देखभाल', bn: 'এন্ডোমেট্রিওসিস যত্ন', ta: 'எண்டோமெட்ரியோசிஸ் பராமரிப்பு', te: 'ఎండోమెట్రియోసిస్ కేర్', mr: 'एंडोमेट्रिओसिस केअर' }, color: 'hsl(265, 80%, 95%)', border: 'hsl(265, 60%, 55%)' },
    { name: { en: 'UTI & Pelvis Health', hi: 'यूटीआई और पेल्विस स्वास्थ्य', bn: 'ইউটিআই এবং পেলভিস স্বাস্থ্য', ta: 'யூடிஐ மற்றும் இடுப்பு ஆரோக்கியம்', te: 'యూటీఐ మరియు పెల్విస్ ఆరోగ్యం', mr: 'यूटीआय आणि पेल्विस आरोग्य' }, color: 'hsl(180, 80%, 94%)', border: 'hsl(180, 70%, 40%)' },
    { name: { en: 'Pregnancy Journey', hi: 'गर्भावस्था यात्रा', bn: 'গর্ভাবস্থার যাত্রা', ta: 'கர்ப்ப பயணம்', te: 'గర్భధారణ ప్రయాణం', mr: 'गर्भधारणा प्रवास' }, color: 'hsl(15, 80%, 94%)', border: 'hsl(15, 75%, 50%)' }
  ];

  const experts = [
    { name: 'Dr. Shalini Iyer', role: { en: 'Gynecologist & Obstetrician', hi: 'स्त्री रोग विशेषज्ञ और प्रसूति रोग विशेषज्ञ', bn: 'স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ', ta: 'மகளிர் மற்றும் மகப்பேறு மருத்துவர்', te: 'గైనకాలజిస్ట్ & అబ్‌స్టెట్రిషియన్', mr: 'स्त्रीरोगतज्ज्ञ आणि प्रसूतीशास्त्रज्ञ' }, exp: { en: '12+ Years Exp', hi: '12+ साल का अनुभव', bn: '১২+ বছরের অভিজ্ঞতা', ta: '12+ வருட அனுபவம்', te: '12+ సంవత్సరాల అనుభవం', mr: '१२+ वर्षांचा अनुभव' }, clinic: 'Apollo Health', price: '₹499' },
    { name: 'Dr. Rohan Sharma', role: { en: 'Reproductive Endocrinologist', hi: 'प्रजनन एंडोक्रिनोलॉजिस्ट', bn: 'প্রজনন এন্ডোক্রিনোলজিস্ট', ta: 'இனப்பெருக்க உட்சுரப்பியல் நிபுணர்', te: 'పునరుత్పత్తి ఎండోక్రినాలజిస్ట్', mr: 'प्रजनन एंडोक्रिनोलॉजिस्ट' }, exp: { en: '8+ Years Exp', hi: '8+ साल का अनुभव', bn: '৮+ বছরের অভিজ্ঞতা', ta: '8+ வருட அனுபவம்', te: '8+ సంవత్సరాల అనుభవం', mr: '८+ वर्षांचा अनुभव' }, clinic: 'Max Care', price: '₹599' },
    { name: 'Dr. Priya Sen', role: { en: 'Clinical Dietitian & Nutritionist', hi: 'क्लिनिकल डाइटिशियन और न्यूट्रिशनिस्ट', bn: 'ক্লিনিকাল ডায়েটিশিয়ান ও পুষ্টিবিদ', ta: 'மருத்துவ உணவியல் & ஊட்டச்சத்து நிபுணர்', te: 'క్లినికల్ డైటీషియన్ & న్యూట్రిషనిస్ట్', mr: 'क्लिनिकल आहारतज्ञ आणि पोषणतज्ञ' }, exp: { en: '10+ Years Exp', hi: '10+ साल का अनुभव', bn: '১০+ বছরের অভিজ্ঞতা', ta: '10+ வருட அனுபவம்', te: '10+ సంవత్సరాల అనుభవం', mr: '१०+ वर्षांचा अनुभव' }, clinic: 'Fortis Clinic', price: '₹399' }
  ];

  const plans = [
    {
      name: currentLang.basic,
      price: '₹499',
      period: { en: '/ 7 Days', hi: '/ 7 दिन', bn: '/ ৭ দিন', ta: '/ 7 நாட்கள்', te: '/ 7 రోజులు', mr: '/ ७ दिवस' },
      features: [
        { en: '24/7 Chat consultations', hi: '24/7 चैट परामर्श', bn: '২৪/৭ চ্যাট পরামর্শ', ta: '24/7 அரட்டை ஆலோசனைகள்', te: '24/7 చాట్ సంప్రదింపులు', mr: '२४/७ चॅट सल्लामसलत' },
        { en: 'AI Symptom checker', hi: 'एआई लक्षण चेकर', bn: 'এআই লক্ষণ পরীক্ষক', ta: 'ஏஐ அறிகுறி சரிபார்ப்பு', te: 'ఏఐ లక్షణ చెకర్', mr: 'एआय लक्षण तपासक' },
        { en: 'Cycle logs and calendar tracking', hi: 'चक्र लॉग और कैलेंडर ट्रैकिंग', bn: 'চক্র লগ এবং ক্যালেন্ডার ট্র্যাকিং', ta: 'சுழற்சி பதிவுகள் மற்றும் காலண்டர் கண்காணிப்பு', te: 'సైకిల్ లాగ్‌లు మరియు క్యాలెండర్ ట్రాకింగ్', mr: 'सायकल लॉग आणि कॅलेंडर ट्रॅकिंग' }
      ],
      highlight: false,
      color: 'bg-zinc-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800'
    },
    {
      name: currentLang.standard,
      price: '₹1,499',
      period: { en: '/ 30 Days', hi: '/ 30 दिन', bn: '/ ৩০ দিন', ta: '/ 30 நாட்கள்', te: '/ 30 రోజులు', mr: '/ ३० दिवस' },
      features: [
        { en: 'Video + Chat doctor slots', hi: 'वीडियो + चैट डॉक्टर स्लॉट', bn: 'ভিডিও + চ্যাট ডাক্তার স্লট', ta: 'வீடியோ + அரட்டை மருத்துவர் இடங்கள்', te: 'వీడియో + చాట్ డాక్టర్ స్లాట్‌లు', mr: 'व्हिडिओ + चॅट डॉक्टर स्लॉट' },
        { en: 'Dynamic PCOS & Weight plans', hi: 'डायनेमिक पीसीओएस और वजन योजनाएं', bn: 'ডায়নামিক পিসিওএস এবং ওজন পরিকল্পনা', ta: 'டைனமிக் பிசிஓஎஸ் & எடை திட்டங்கள்', te: 'డైనమిక్ పీసీఓఎస్ & బరువు ప్రణాళికలు', mr: 'डायनॅमिक पीसीओएस आणि वजन योजना' },
        { en: 'Advanced analytics and trends', hi: 'उन्नत विश्लेषण और रुझान', bn: 'উন্নত বিশ্লেষণ এবং প্রবণতা', ta: 'மேம்பட்ட பகுப்பாய்வு மற்றும் போக்குகள்', te: 'అధునాతన విశ్లేషణలు మరియు పోకడలు', mr: 'प्रगत विश्लेषण आणि ट्रेंड' },
        { en: 'Priority booking support', hi: 'प्राथमिकता बुकिंग समर्थन', bn: 'অগ্রাধিকার বুকিং সমর্থন', ta: 'முன்னுரிமை முன்பதிவு ஆதரவு', te: 'ప్రాధాన్యత బుకింగ్ మద్దతు', mr: 'प्राधान्य बुकिंग समर्थन' }
      ],
      highlight: true,
      color: 'bg-white dark:bg-zinc-950 border-2 border-feminine-pink shadow-xl shadow-pink-500/10 transform scale-105 z-10'
    },
    {
      name: currentLang.premium,
      price: '₹3,499',
      period: { en: '/ 90 Days', hi: '/ 90 दिन', bn: '/ ৯০ দিন', ta: '/ 90 நாட்கள்', te: '/ 90 రోజులు', mr: '/ ९० दिवस' },
      features: [
        { en: 'Unlimited video consultations', hi: 'असीमित वीडियो परामर्श', bn: 'সীমাহীন ভিডিও পরামর্শ', ta: 'வரம்பற்ற வீடியோ ஆலோசனைகள்', te: 'అపరిమిత వీడియో సంప్రదింపులు', mr: 'अमर्यादित व्हिडिओ सल्लामसलत' },
        { en: 'Customized nutrition program', hi: 'अनुकूलित पोषण कार्यक्रम', bn: 'কাস্টমাইজড পুষ্টি প্রোগ্রাম', ta: 'தனிப்பயனாக்கப்பட்ட ஊட்டச்சத்து திட்டம்', te: 'అనుకూలీకరించిన పోషకాహార కార్యక్రమం', mr: 'सानुकूलित पोषण कार्यक्रम' },
        { en: 'Mental wellness coach access', hi: 'मानसिक स्वास्थ्य कोच पहुंच', bn: 'মানসিক সুস্থতা কোচের অ্যাক্সেস', ta: 'மன ஆரோக்கிய பயிற்சியாளர் அணுகல்', te: 'మానసిక ఆరోగ్య శిక్షకుల ప్రాప్యత', mr: 'मानसिक स्वास्थ्य प्रशिक्षक प्रवेश' },
        { en: 'Downloadable doctor-ready reports', hi: 'डाउनलोड करने योग्य डॉक्टर-तैयार रिपोर्ट', bn: 'ডাউনলোডযোগ্য ডাক্তার-প্রস্তুত রিপোর্ট', ta: 'பதிவிறக்கம் செய்யக்கூடிய மருத்துவர்-தயார் அறிக்கைகள்', te: 'డౌన్‌లోడ్ చేసుకోదగిన డాక్టర్-రెడీ నివేదికలు', mr: 'डाउनलोड करण्यायोग्य डॉक्टर-तयार अहवाल' }
      ],
      highlight: false,
      color: 'bg-zinc-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800'
    }
  ];

  const faqs = [
    { 
      q: { en: 'How secure is my health logging details?', hi: 'मेरे स्वास्थ्य लॉगिंग विवरण कितने सुरक्षित हैं?', bn: 'আমার স্বাস্থ্য লগিং বিশদ কতটা সুরক্ষিত?', ta: 'எனது சுகாதார பதிவு விவரங்கள் எவ்வளவு பாதுகாப்பானவை?', te: 'నా ఆరోగ్య లాగింగ్ వివరాలు ఎంత సురక్షితం?', mr: 'माझे आरोग्य लॉगिंग तपशील किती सुरक्षित आहेत?' }, 
      a: { en: 'All logged menstrual data and chat logs are fully encrypted using end-to-end protocols (HIPAA-inspired standard). We never sell or share clinical details.', hi: 'सभी लॉग किए गए मासिक धर्म डेटा और चैट लॉग एंड-टू-एंड प्रोटोकॉल (HIPAA-प्रेरित मानक) का उपयोग करके पूरी तरह से एन्क्रिप्ट किए गए हैं। हम कभी भी नैदानिक विवरण नहीं बेचते या साझा नहीं करते हैं।', bn: 'সমস্ত লগ করা মাসিক ডেটা এবং চ্যাট লগগুলি এন্ড-টু-এন্ড প্রোটোকল (HIPAA-অনুপ্রাণিত মান) ব্যবহার করে সম্পূর্ণরূপে এনক্রিপ্ট করা হয়েছে। আমরা কখনই ক্লিনিকাল বিবরণ বিক্রি বা শেয়ার করি না।', ta: 'பதிவுசெய்யப்பட்ட அனைத்து மாதவிடாய் தரவு மற்றும் அரட்டை பதிவுகள் எண்ட்-டு-எண்ட் நெறிமுறைகளை (HIPAA-ஈர்க்கப்பட்ட தரநிலை) பயன்படுத்தி முழுமையாக குறியாக்கம் செய்யப்பட்டுள்ளன. நாங்கள் மருத்துவ விவரங்களை விற்கவோ அல்லது பகிரவோ மாட்டோம்.', te: 'లాగిన్ చేయబడిన అన్ని రుతుక్రమ డేటా మరియు చాట్ లాగ్‌లు ఎండ్-టు-ఎండ్ ప్రోటోకాల్‌లను (HIPAA-ప్రేరేపిత ప్రమాణం) ఉపయోగించి పూర్తిగా గుప్తీకరించబడతాయి. మేము క్లినికల్ వివరాలను ఎప్పుడూ విక్రయించము లేదా పంచుకోము.', mr: 'सर्व लॉग केलेला मासिक पाळीचा डेटा आणि चॅट लॉग एंड-टू-एंड प्रोटोकॉल (HIPAA-प्रेरित मानक) वापरून पूर्णपणे कूटबद्ध केले आहेत. आम्ही क्लिनिकल तपशील कधीही विकत नाही किंवा शेअर करत नाही.' } 
    },
    { 
      q: { en: 'How does the AI blood color analyzer operate?', hi: 'एआई रक्त रंग विश्लेषक कैसे कार्य करता है?', bn: 'এআই রক্তের রঙ বিশ্লেষক কীভাবে কাজ করে?', ta: 'ஏஐ இரத்த நிற பகுப்பாய்வி எவ்வாறு செயல்படுகிறது?', te: 'ఏఐ రక్త రంగు ఎనలైజర్ ఎలా పనిచేస్తుంది?', mr: 'एआय रक्त रंग विश्लेषक कसे चालते?' }, 
      a: { en: 'It provides key educational references for Bright Red, Dark Red, Gray, Brown, Orange, and Pink blood, outlining normal conditions and critical emergency red-flags.', hi: 'यह चमकीले लाल, गहरे लाल, ग्रे, भूरे, नारंगी और गुलाबी रक्त के लिए प्रमुख शैक्षिक संदर्भ प्रदान करता है, सामान्य स्थितियों और महत्वपूर्ण आपातकालीन रेड-फ्लैग को रेखांकित करता है।', bn: 'এটি উজ্জ্বল লাল, গাঢ় লাল, ধূসর, বাদামী, কমলা এবং গোলাপী রক্তের জন্য মূল শিক্ষামূলক রেফারেন্স প্রদান করে, সাধারণ অবস্থা এবং সমালোচনামূলক জরুরি রেড-ফ্ল্যাগগুলির রূপরেখা দেয়।', ta: 'இது பிரகாசமான சிவப்பு, அடர் சிவப்பு, சாம்பல், பழுப்பு, ஆரஞ்சு மற்றும் இளஞ்சிவப்பு இரத்தத்திற்கான முக்கிய கல்வி குறிப்புகளை வழங்குகிறது, சாதாரண நிலைமைகள் மற்றும் முக்கியமான அவசர சிவப்பு கொடிகளை கோடிட்டுக் காட்டுகிறது.', te: 'ఇది బ్రైట్ రెడ్, డార్క్ రెడ్, గ్రే, బ్రౌన్, ఆరెంజ్ మరియు పింక్ రక్తం కోసం కీలకమైన విద్యాపరమైన సూచనలను అందిస్తుంది, సాధారణ పరిస్థితులు మరియు క్లిష్టమైన అత్యవసర రెడ్-ఫ్లాగ్‌లను వివరిస్తుంది.', mr: 'हे चमकदार लाल, गडद लाल, राखाडी, तपकिरी, नारिंगी आणि गुलाबी रक्तासाठी प्रमुख शैक्षणिक संदर्भ प्रदान करते, सामान्य परिस्थिती आणि गंभीर आणीबाणीच्या रेड-फ्लॅगची रूपरेषा देते.' } 
    },
    { 
      q: { en: 'Can I speak directly to certified gynecologists?', hi: 'क्या मैं सीधे प्रमाणित स्त्री रोग विशेषज्ञों से बात कर सकता हूँ?', bn: 'আমি কি সরাসরি সার্টিফাইড গাইনোকোলজিস্টদের সাথে কথা বলতে পারি?', ta: 'சான்றளிக்கப்பட்ட மகளிர் மருத்துவ நிபுணர்களிடம் நான் நேரடியாகப் பேசலாமா?', te: 'నేను ధృవీకరించబడిన గైనకాలజిస్ట్‌లతో నేరుగా మాట్లాడవచ్చా?', mr: 'मी प्रमाणित स्त्रीरोग तज्ञांशी थेट बोलू शकेन का?' }, 
      a: { en: 'Yes! Our Standard and Premium subscription passes allow you to instantly book secure video appointments with validated board-certified gynecologists.', hi: 'हाँ! हमारे स्टैंडर्ड और प्रीमियम सब्सक्रिप्शन पास आपको मान्य बोर्ड-प्रमाणित स्त्री रोग विशेषज्ञों के साथ तुरंत सुरक्षित वीडियो अपॉइंटमेंट बुक करने की अनुमति देते हैं।', bn: 'হ্যাঁ! আমাদের স্ট্যান্ডার্ড এবং প্রিমিয়াম সাবস্ক্রিপশন পাসগুলি আপনাকে অবিলম্বে বৈধ বোর্ড-প্রত্যয়িত গাইনোকোলজিস্টদের সাথে নিরাপদ ভিডিও অ্যাপয়েন্টমেন্ট বুক করতে দেয়।', ta: 'ஆம்! எங்களின் ஸ்டாண்டர்ட் மற்றும் பிரீமியம் சந்தா பாஸ்கள், சரிபார்க்கப்பட்ட போர்டு-சான்றளிக்கப்பட்ட மகளிர் மருத்துவ நிபுணர்களுடன் பாதுகாப்பான வீடியோ சந்திப்புகளை உடனடியாக முன்பதிவு செய்ய உங்களை அனுமதிக்கின்றன.', te: 'అవును! మా ప్రామాణిక మరియు ప్రీమియం సబ్‌స్క్రిప్షన్ పాస్‌లు ధృవీకరించబడిన బోర్డ్-సర్టిఫైడ్ గైనకాలజిస్ట్‌లతో తక్షణమే సురక్షిత వీడియో అపాయింట్‌మెంట్‌లను బుక్ చేసుకోవడానికి మిమ్మల్ని అనుమతిస్తాయి.', mr: 'होय! आमचे स्टँडर्ड आणि प्रीमियम सबस्क्रिप्शन पास तुम्हाला प्रमाणित बोर्ड-प्रमाणित स्त्रीरोग तज्ञांसोबत सुरक्षित व्हिडिओ भेटी त्वरित बुक करण्याची परवानगी देतात.' } 
    }
  ];

  const categoryTitles = { en: 'Specialized Care Portals', hi: 'विशेष देखभाल पोर्टल', bn: 'বিশেষায়িত কেয়ার পোর্টাল', ta: 'சிறப்பு பராமரிப்பு இணையதளங்கள்', te: 'ప్రత్యేక సంరక్షణ పోర్టల్స్', mr: 'विशेष काळजी पोर्टल' };
  const categoryDesc = { en: 'Targeted insights and plans developed for common women\'s health parameters.', hi: 'सामान्य महिलाओं के स्वास्थ्य मापदंडों के लिए लक्षित अंतर्दृष्टि और योजनाएं विकसित की गईं।', bn: 'সাধারণ মহিলাদের স্বাস্থ্য পরামিতিগুলির জন্য লক্ষ্যযুক্ত অন্তর্দৃষ্টি এবং পরিকল্পনা তৈরি করা হয়েছে।', ta: 'பொதுவான பெண்களின் ஆரோக்கிய அளவுருக்களுக்காக உருவாக்கப்பட்ட இலக்கு நுண்ணறிவு மற்றும் திட்டங்கள்.', te: 'సాధారణ మహిళల ఆరోగ్య పారామితుల కోసం లక్ష్య అంతర్దృష్టులు మరియు ప్రణాళికలు అభివృద్ధి చేయబడ్డాయి.', mr: 'सामान्य महिलांच्या आरोग्य पॅरामीटर्ससाठी विकसित केलेले लक्ष्यित अंतर्दृष्टी आणि योजना.' };
  const accessGuide = { en: 'Access Guide', hi: 'एक्सेस गाइड', bn: 'অ্যাক্সেস গাইড', ta: 'அணுகல் வழிகாட்டி', te: 'యాక్సెస్ గైడ్', mr: 'प्रवेश मार्गदर्शक' };
  const viewAllDocs = { en: 'View All Doctors', hi: 'सभी डॉक्टर देखें', bn: 'সব ডাক্তার দেখুন', ta: 'அனைத்து மருத்துவர்களையும் காண்க', te: 'అందరు వైద్యులను వీక్షించండి', mr: 'सर्व डॉक्टर पहा' };
  const consultPrefix = { en: 'Consult:', hi: 'परामर्श:', bn: 'পরামর্শ:', ta: 'ஆலோசனை:', te: 'సంప్రదింపులు:', mr: 'सल्लामसलत:' };
  const bookSession = { en: 'Book Session', hi: 'सत्र बुक करें', bn: 'সেশন বুক করুন', ta: 'அமர்வு முன்பதிவு', te: 'సెషన్ బుక్ చేయండి', mr: 'सत्र बुक करा' };
  const activatePass = { en: 'Activate Health Pass', hi: 'हेल्थ पास सक्रिय करें', bn: 'হেলথ পাস সক্রিয় করুন', ta: 'ஹெல்த் பாஸை செயல்படுத்து', te: 'హెల్త్ పాస్‌ను యాక్టివేట్ చేయండి', mr: 'हेल्थ पास सक्रिय करा' };
  const bestValue = { en: 'Best Value', hi: 'सर्वोत्तम मूल्य', bn: 'সেরা মূল্য', ta: 'சிறந்த மதிப்பு', te: 'ఉత్తమ విలువ', mr: 'सर्वोत्तम मूल्य' };

  return (
    <div className="slide-in flex flex-col gap-20 max-w-6xl mx-auto text-left">
      
      {/* 1. HERO BANNER */}
      <div className="glass-panel p-10 md:p-14 rounded-3xl bg-gradient-to-r from-pink-50/60 to-purple-50/60 dark:from-zinc-900/60 dark:to-zinc-900/60 border border-white/80 dark:border-zinc-800 flex flex-wrap lg:flex-nowrap items-center justify-between gap-10">
        <div className="flex-1 min-w-[320px] flex flex-col gap-6">
          <span className="text-[10px] font-extrabold tracking-widest text-feminine-purple bg-feminine-purple/10 px-3.5 py-1.5 rounded-full w-fit uppercase">
            🏥 Women's Health & AI Technology
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight">
            {currentLang.heroTitle}
          </h1>
          <p className="text-base text-[var(--text-secondary)] font-semibold leading-relaxed">
            {currentLang.heroSub}
          </p>
          <div className="flex gap-4 flex-wrap mt-2">
            <button className="bg-feminine-pink hover:bg-feminine-pink/90 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 shadow-lg shadow-pink-500/20 active:scale-95 transition-all cursor-pointer text-sm" onClick={() => setTab('dashboard')}>
              {currentLang.explore} <ArrowRight size={16} />
            </button>
            <button className="bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-[var(--text-primary)] font-bold py-3 px-6 rounded-full border border-gray-200 dark:border-zinc-800 shadow-xs active:scale-95 transition-all cursor-pointer text-sm" onClick={() => setTab('ai-chat')}>
              {currentLang.download}
            </button>
          </div>
        </div>

        {/* Dynamic Mockup Card */}
        <div className="flex-1 min-w-[300px] flex justify-center">
          <div className="glass-panel float-animation w-[320px] p-8 relative overflow-hidden rounded-3xl border border-gray-150/40 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-extrabold text-[var(--text-secondary)]">📅 Cycle Outlook</span>
              <span className="bg-feminine-pink/10 text-feminine-pink px-2.5 py-1 rounded-full text-[10px] font-extrabold">Day 16</span>
            </div>

            {/* Pulsing countdown circle */}
            <div className="w-[160px] h-[160px] rounded-full border-4 border-gray-100 dark:border-zinc-800 mx-auto mb-6 flex flex-col items-center justify-center relative bg-white dark:bg-zinc-900 shadow-inner">
              <div className="breathe-animation absolute w-[130px] h-[130px] rounded-full bg-feminine-pink/10 z-0"></div>
              <div className="z-10 text-center">
                <span className="text-[10px] font-extrabold text-[var(--text-secondary)] block uppercase tracking-wider mb-1">{currentLang.daysCountdown}</span>
                <span className="text-3xl font-extrabold text-feminine-pink tracking-tighter">{currentLang.daysValue}</span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl text-center border border-gray-100 dark:border-zinc-800">
              <span className="text-sm font-bold text-feminine-purple block mb-1">
                ✨ {currentLang.fertilityChance}
              </span>
              <span className="text-xs font-semibold text-[var(--text-secondary)]">
                {currentLang.ovulationText}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CURATED SOLUTIONS CATEGORIES */}
      <div className="flex flex-col items-center">
        <h2 className="font-display text-2xl font-extrabold mb-2 text-[var(--text-primary)] text-center">{categoryTitles[language] || categoryTitles['en']}</h2>
        <p className="text-sm font-semibold text-[var(--text-secondary)] mb-10 text-center">{categoryDesc[language] || categoryDesc['en']}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {solutions.map((sol, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 text-center rounded-2xl cursor-pointer hover:-translate-y-1 transition-transform border border-gray-100 dark:border-zinc-800" 
              style={{ borderTop: `4px solid ${sol.border}` }}
              onClick={() => setTab('diet-fitness')}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: sol.color, color: sol.border }}>
                <Sparkles size={20} />
              </div>
              <h3 className="font-display text-base font-extrabold mb-2 text-[var(--text-primary)]">{sol.name[language] || sol.name['en']}</h3>
              <span className="text-xs font-bold text-[var(--text-secondary)] flex items-center justify-center gap-1 group-hover:text-feminine-pink transition-colors">
                {accessGuide[language] || accessGuide['en']} <ChevronRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. EXPERT DOCTORS SECTION */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-end flex-wrap gap-4 border-b border-gray-150/40 dark:border-zinc-800 pb-4">
          <div>
            <h2 className="font-display text-2xl font-extrabold mb-2 text-[var(--text-primary)]">{currentLang.meetExperts}</h2>
            <p className="text-sm font-semibold text-[var(--text-secondary)]">{currentLang.meetExpertsSub}</p>
          </div>
          <button className="bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 text-[10px] font-extrabold text-[var(--text-primary)] py-2.5 px-5 rounded-full border border-gray-200 dark:border-zinc-800 cursor-pointer uppercase tracking-wider" onClick={() => setTab('ai-chat')}>
            {viewAllDocs[language] || viewAllDocs['en']}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experts.map((exp, index) => (
            <div key={index} className="glass-panel p-8 rounded-3xl flex flex-col gap-5 border border-gray-100 dark:border-zinc-800">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-feminine-pink to-feminine-purple border-2 border-white dark:border-zinc-800 flex items-center justify-center font-extrabold text-white text-2xl shadow-lg shrink-0">
                  {exp.name.split(' ')[1][0]}
                </div>
                <div>
                  <h3 className="font-display text-base font-extrabold text-[var(--text-primary)] leading-snug">{exp.name}</h3>
                  <span className="text-[11px] font-bold text-feminine-purple block mt-0.5">{exp.role[language] || exp.role['en']}</span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-semibold mt-1 block">{exp.clinic}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-y border-gray-150/40 dark:border-zinc-800 py-3 text-xs font-bold">
                <span className="text-[var(--text-secondary)]">🎖️ {exp.exp[language] || exp.exp['en']}</span>
                <span className="text-[var(--text-primary)]">{consultPrefix[language] || consultPrefix['en']} {exp.price}</span>
              </div>

              <button className="w-full bg-feminine-pink/10 hover:bg-feminine-pink/20 text-feminine-pink font-bold py-3 rounded-xl transition-colors cursor-pointer text-xs" onClick={() => setTab('ai-chat')}>
                {bookSession[language] || bookSession['en']}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SUBSCRIPTION PLANS */}
      <div className="flex flex-col items-center">
        <h2 className="font-display text-2xl font-extrabold mb-2 text-center text-[var(--text-primary)]">{currentLang.pricingTitle}</h2>
        <p className="text-sm font-semibold text-[var(--text-secondary)] text-center mb-10">{currentLang.pricingSub}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-panel p-8 rounded-3xl flex flex-col gap-6 relative ${plan.color}`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-feminine-pink to-feminine-purple text-white px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  {bestValue[language] || bestValue['en']}
                </span>
              )}
              
              <div className="text-center">
                <h3 className={`font-display text-xl font-extrabold mb-3 ${plan.highlight ? 'text-feminine-pink' : 'text-[var(--text-primary)]'}`}>{plan.name}</h3>
                <div className="flex justify-center items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-[var(--text-primary)] tracking-tighter">{plan.price}</span>
                  <span className="text-xs font-bold text-[var(--text-secondary)]">{plan.period[language] || plan.period['en']}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3.5 flex-grow mt-4">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="text-xs font-bold flex items-center gap-3 text-[var(--text-primary)] leading-snug">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feat[language] || feat['en']}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all cursor-pointer mt-4 ${plan.highlight ? 'bg-gradient-to-r from-feminine-pink to-feminine-purple text-white shadow-lg' : 'bg-white/50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 text-[var(--text-primary)] border border-gray-200 dark:border-zinc-700'}`}
                onClick={() => alert(`Redirecting to Razorpay for ${plan.name}...`)}
              >
                {activatePass[language] || activatePass['en']}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 5. COLLAPSIBLE FAQ MODULE */}
      <div className="glass-panel p-10 rounded-3xl border border-gray-150/40 dark:border-zinc-800">
        <h2 className="font-display text-2xl font-extrabold mb-8 text-center text-[var(--text-primary)]">{currentLang.faqTitle}</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="border-b border-gray-150/40 dark:border-zinc-800 last:border-0 pb-4">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full bg-transparent border-none flex justify-between items-center py-2 font-display text-sm font-extrabold text-[var(--text-primary)] cursor-pointer text-left hover:text-feminine-pink transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={16} className="text-feminine-pink shrink-0" />
                    {faq.q[language] || faq.q['en']}
                  </span>
                  {isOpen ? <Minus size={16} className="text-[var(--text-secondary)] shrink-0" /> : <Plus size={16} className="text-[var(--text-secondary)] shrink-0" />}
                </button>
                {isOpen && (
                  <p className="slide-in pl-7 pr-4 pt-3 text-xs font-semibold text-[var(--text-secondary)] leading-relaxed">
                    {faq.a[language] || faq.a['en']}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
