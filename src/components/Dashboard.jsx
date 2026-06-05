import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar as CalendarIcon, 
  Activity, 
  Smile, 
  Droplet, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Check,
  TrendingUp
} from 'lucide-react';

export default function Dashboard({ 
  language, 
  cycleLogs, 
  setCycleLogs, 
  setTab, 
  waterIntake, 
  setWaterIntake 
}) {
  const [selectedDate, setSelectedDate] = useState('2024-10-23');
  const [showLogModal, setShowLogModal] = useState(false);
  
  const [formIsPeriod, setFormIsPeriod] = useState(false);
  const [formFlow, setFormFlow] = useState('none');
  const [formSymptoms, setFormSymptoms] = useState([]);
  const [formMood, setFormMood] = useState('calm');

  const calendarDays = [];
  const daysInOctober = 31;
  const startOffset = 1;

  for (let i = 1; i <= startOffset; i++) {
    calendarDays.push({ day: null, dateStr: null, type: 'empty' });
  }
  for (let d = 1; d <= daysInOctober; d++) {
    const dateStr = `2024-10-${d < 10 ? '0' + d : d}`;
    let type = 'normal';
    if (d >= 7 && d <= 11) type = 'period';
    else if (d === 23) type = 'active';
    calendarDays.push({ day: d, dateStr, type });
  }

  const handleDayClick = (cell) => {
    if (!cell.day) return;
    setSelectedDate(cell.dateStr);
    const existingLog = cycleLogs[cell.dateStr] || {};
    setFormIsPeriod(existingLog.isPeriodDay || cell.type === 'period');
    setFormFlow(existingLog.flowIntensity || (cell.type === 'period' ? 'medium' : 'none'));
    setFormSymptoms(existingLog.symptoms || []);
    setFormMood(existingLog.mood || 'calm');
    setShowLogModal(true);
  };

  const toggleSymptom = (sym) => {
    setFormSymptoms(prev => prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]);
  };

  const handleSaveLog = () => {
    setCycleLogs(prev => ({
      ...prev,
      [selectedDate]: {
        isPeriodDay: formIsPeriod,
        flowIntensity: formFlow,
        symptoms: formSymptoms,
        mood: formMood
      }
    }));
    setShowLogModal(false);
  };

  const strings = {
    greeting: { en: 'Good morning, Ananya', hi: 'सुप्रभात, अनन्या', bn: 'শুভ সকাল, অনন্যা', ta: 'காலை வணக்கம், அனன்யா', te: 'శుభోదయం, అనన్య', mr: 'शुभ प्रभात, अनन्या' },
    landscape: { en: "Here's your health landscape for Wednesday, October 23.", hi: 'बुधवार, 23 अक्टूबर के लिए आपका स्वास्थ्य परिदृश्य यहां दिया गया है।', bn: 'এখানে বুধবার, ২৩ অক্টোবরের জন্য আপনার স্বাস্থ্য পরিস্থিতি দেওয়া হল।', ta: 'புதன்கிழமை, அக்டோபர் 23க்கான உங்கள் சுகாதார நிலவரம் இங்கே.', te: 'బుధవారం, అక్టోబర్ 23 కొరకు మీ ఆరోగ్య వివరాలు ఇక్కడ ఉన్నాయి.', mr: 'बुधवार, २३ ऑक्टोबरसाठी तुमचे आरोग्य दृश्य येथे आहे.' },
    ovulationTitle: { en: 'Ovulation Window', hi: 'ओव्यूलेशन विंडो', bn: 'ওভুলেশন উইন্ডো', ta: 'அண்டவிடுப்பின் சாளரம்', te: 'అండోత్సర్గము విండో', mr: 'ओव्हुलेशन विंडो' },
    ovulationDesc: { en: 'High chance of conception. Flow predicted in 12 days.', hi: 'गर्भधारण की उच्च संभावना। 12 दिनों में प्रवाह की भविष्यवाणी।', bn: 'গর্ভধারণের উচ্চ সম্ভাবনা। 12 দিনের মধ্যে প্রবাহের পূর্বাভাস।', ta: 'கருத்தரிக்கும் வாய்ப்பு அதிகம். 12 நாட்களில் ஓட்டம் கணிக்கப்படுகிறது.', te: 'గర్భధారణ అవకాశం ఎక్కువ. 12 రోజుల్లో ప్రవాహం అంచనా వేయబడింది.', mr: 'गर्भधारणेची जास्त शक्यता. १२ दिवसात प्रवाहाचा अंदाज.' },
    day14: { en: 'Day 14', hi: 'दिन 14', bn: 'দিন 14', ta: 'நாள் 14', te: 'రోజు 14', mr: 'दिवस 14' },
    fatigueTitle: { en: 'Mild Fatigue', hi: 'हल्की थकान', bn: 'হালকা ক্লান্তি', ta: 'லேசான சோர்வு', te: 'తేలికపాటి అలసట', mr: 'सौम्य थकवा' },
    fatigueDesc: { en: 'Logged today: Bloating, Breast tenderness. Trends stable.', hi: 'आज लॉग किया गया: ब्लोटिंग, स्तन कोमलता। रुझान स्थिर।', bn: 'আজ লগ করা হয়েছে: ব্লোটিং, স্তনের কোমলতা। প্রবণতা স্থিতিশীল।', ta: 'இன்று பதிவு செய்யப்பட்டுள்ளது: வீக்கம், மார்பக மென்மை. போக்குகள் நிலையானவை.', te: 'ఈరోజు లాగ్ చేయబడింది: ఉబ్బరం, రొమ్ము సున్నితత్వం. పోకడలు స్థిరంగా ఉన్నాయి.', mr: 'आज लॉग केले: ब्लोटिंग, स्तनाचा कोमलता. कल स्थिर आहेत.' },
    updated2h: { en: 'Updated 2h ago', hi: '2 घंटे पहले अपडेट किया गया', bn: '2 ঘণ্টা আগে আপডেট করা হয়েছে', ta: '2 மணி நேரத்திற்கு முன் புதுப்பிக்கப்பட்டது', te: '2 గంటల క్రితం నవీకరించబడింది', mr: '२ तासांपूर्वी अद्यतनित' },
    moodTitle: { en: 'Balanced Mood', hi: 'संतुलित मनोदशा', bn: 'ভারসাম্যপূর্ণ মেজাজ', ta: 'சமநிலையான மனநிலை', te: 'సమతుల్య మానసిక స్థితి', mr: 'संतुलित मनस्थिती' },
    moodDesc: { en: "Your mood scores are 12% higher than last cycle's follicular phase.", hi: 'आपके मूड स्कोर पिछले चक्र के फॉलिकुलर चरण की तुलना में 12% अधिक हैं।', bn: 'আপনার মেজাজের স্কোর গত চক্রের ফলিকুলার পর্বের তুলনায় 12% বেশি।', ta: 'உங்கள் மனநிலை மதிப்பெண்கள் கடந்த சுழற்சியின் நுண்ணறை கட்டத்தை விட 12% அதிகம்.', te: 'మీ మూడ్ స్కోర్‌లు గత చక్రం ఫాలికులర్ దశ కంటే 12% ఎక్కువగా ఉన్నాయి.', mr: 'तुमचे मूड स्कोअर मागील सायकलच्या फॉलिक्युलर टप्प्यापेक्षा 12% जास्त आहेत.' },
    calm: { en: 'Calm', hi: 'शांत', bn: 'শান্ত', ta: 'அமைதி', te: 'ప్రశాంతత', mr: 'शांत' },
    logEmotion: { en: 'Log Emotion >', hi: 'भावना लॉग करें >', bn: 'আবেগ লগ করুন >', ta: 'உணர்ச்சியைப் பதிவு செய் >', te: 'భావోద్వేగాన్ని లాగ్ చేయండి >', mr: 'भावना नोंदवा >' },
    cycleCalendar: { en: 'Cycle Calendar', hi: 'चक्र कैलेंडर', bn: 'চক্র ক্যালেন্ডার', ta: 'சுழற்சி நாட்காட்டி', te: 'చక్రం క్యాలెండర్', mr: 'सायकल कॅलेंडर' },
    oct2024: { en: 'October 2024', hi: 'अक्टूबर 2024', bn: 'অক্টোবর 2024', ta: 'அக்டோபர் 2024', te: 'అక్టోబర్ 2024', mr: 'ऑक्टोबर 2024' },
    symptomTrends: { en: 'Symptom Trends', hi: 'लक्षण रुझान', bn: 'লক্ষণ প্রবণতা', ta: 'அறிகுறி போக்குகள்', te: 'లక్షణాల పోకడలు', mr: 'लक्षणे कल' },
    trackingDesc: { en: 'Tracking intensity over the last 6 months', hi: 'पिछले 6 महीनों में ट्रैकिंग तीव्रता', bn: 'গত 6 মাসে ট্র্যাকিং তীব্রতা', ta: 'கடந்த 6 மாதங்களில் கண்காணிப்பு தீவிரம்', te: 'గత 6 నెలల్లో తీవ్రతను ట్రాక్ చేస్తోంది', mr: 'मागील 6 महिन्यांत तीव्रतेचा मागोवा घेणे' },
    cramps: { en: 'Cramps', hi: 'ऐंठन', bn: 'পেটে ব্যথা', ta: 'தசைப்பிடிப்பு', te: 'కండరాల నొప్పులు', mr: 'पेटके' },
    energy: { en: 'Energy', hi: 'ऊर्जा', bn: 'শক্তি', ta: 'ஆற்றல்', te: 'శక్తి', mr: 'ऊर्जा' },
    aiInsights: { en: 'AI Insights', hi: 'एआई अंतर्दृष्टि', bn: 'এআই অন্তর্দৃষ্টি', ta: 'ஏஐ நுண்ணறிவு', te: 'ఏఐ అంతర్దృష్టులు', mr: 'एआय अंतर्दृष्टी' },
    aiTip1: { en: '"Your iron levels might be lower than usual this week based on your logged fatigue and cycle stage."', hi: '"आपके दर्ज की गई थकान और चक्र चरण के आधार पर इस सप्ताह आपके आयरन का स्तर सामान्य से कम हो सकता है।"', bn: '"আপনার লগ করা ক্লান্তি এবং চক্র পর্যায়ের উপর ভিত্তি করে এই সপ্তাহে আপনার আয়রনের মাত্রা স্বাভাবিকের চেয়ে কম হতে পারে।"', ta: '"உங்கள் பதிவு செய்யப்பட்ட சோர்வு மற்றும் சுழற்சி கட்டத்தின் அடிப்படையில் இந்த வாரம் உங்கள் இரும்பு அளவு வழக்கத்தை விட குறைவாக இருக்கலாம்."', te: '"మీరు నమోదు చేసిన అలసట మరియు చక్ర దశ ఆధారంగా ఈ వారం మీ ఇనుము స్థాయిలు సాధారణం కంటే తక్కువగా ఉండవచ్చు."', mr: '"तुमच्या नोंदवलेल्या थकवा आणि सायकल टप्प्यावर आधारित या आठवड्यात तुमची लोह पातळी नेहमीपेक्षा कमी असू शकते."' },
    aiRec1: { en: '📍 Recommendation: Add spinach and lentils to dinner.', hi: '📍 अनुशंसा: रात के खाने में पालक और दाल शामिल करें।', bn: '📍 সুপারিশ: রাতের খাবারে পালং শাক এবং ডাল যোগ করুন।', ta: '📍 பரிந்துரை: இரவு உணவில் கீரை மற்றும் பருப்பு சேர்க்கவும்.', te: '📍 సిఫార్సు: రాత్రి భోజనంలో బచ్చలికూర మరియు కాయధాన్యాలు జోడించండి.', mr: '📍 शिफारस: रात्रीच्या जेवणात पालक आणि मसूर घाला.' },
    aiTip2: { en: '"Sync your workout: Today is perfect for high-intensity training (HIIT) due to your peak estrogen levels."', hi: '"अपने वर्कआउट को सिंक करें: आज आपके चरम एस्ट्रोजन स्तर के कारण उच्च-तीव्रता वाले प्रशिक्षण (HIIT) के लिए एकदम सही है।"', bn: '"আপনার ওয়ার্কআউট সিঙ্ক করুন: আপনার সর্বোচ্চ ইস্ট্রোজেন মাত্রার কারণে আজ উচ্চ-তীব্রতার প্রশিক্ষণের (HIIT) জন্য উপযুক্ত।"', ta: '"உங்கள் உடற்பயிற்சியை ஒத்திசைக்கவும்: உங்கள் உச்ச ஈஸ்ட்ரோஜன் அளவுகள் காரணமாக இன்று அதிக-தீவிர பயிற்சிக்கு (HIIT) ஏற்றது."', te: '"మీ వ్యాయామాన్ని సమకాలీకరించండి: మీ గరిష్ట ఈస్ట్రోజెన్ స్థాయిల కారణంగా ఈ రోజు అధిక-తీవ్రత శిక్షణ (HIIT) కు సరైనది."', mr: '"तुमचे वर्कआउट सिंक करा: तुमच्या उच्च इस्ट्रोजेन पातळीमुळे आज उच्च-तीव्रतेच्या प्रशिक्षणासाठी (HIIT) योग्य आहे."' },
    aiRec2: { en: '🏃‍♀️ 45 min session suggested.', hi: '🏃‍♀️ 45 मिनट के सत्र का सुझाव दिया गया है।', bn: '🏃‍♀️ 45 মিনিটের সেশনের পরামর্শ দেওয়া হয়েছে।', ta: '🏃‍♀️ 45 நிமிட அமர்வு பரிந்துரைக்கப்படுகிறது.', te: '🏃‍♀️ 45 నిమిషాల సెషన్ సూచించబడింది.', mr: '🏃‍♀️ 45 मिनिटांच्या सत्राची सूचना दिली आहे.' },
    viewFullAnalysis: { en: 'View Full Analysis', hi: 'पूरा विश्लेषण देखें', bn: 'সম্পূর্ণ বিশ্লেষণ দেখুন', ta: 'முழு பகுப்பாய்வைக் காண்க', te: 'పూర్తి విశ్లేషణను వీక్షించండి', mr: 'पूर्ण विश्लेषण पहा' },
    mealPlan: { en: "Today's Meal Plan", hi: 'आज की भोजन योजना', bn: 'আজকের খাবার পরিকল্পনা', ta: 'இன்றைய உணவு திட்டம்', te: 'నేటి భోజన ప్రణాళిక', mr: 'आजची जेवण योजना' },
    breakfast: { en: 'Breakfast • 420 kcal', hi: 'नाश्ता • 420 किलो कैलोरी', bn: 'সকালের নাস্তা • 420 কিলোক্যালরি', ta: 'காலை உணவு • 420 கிலோகலோரி', te: 'అల్పాహారం • 420 కిలో కేలరీలు', mr: 'न्याहारी • 420 kcal' },
    lunch: { en: 'Lunch • 580 kcal', hi: 'दोपहर का भोजन • 580 किलो कैलोरी', bn: 'দুপুরের খাবার • 580 কিলোক্যালরি', ta: 'மதிய உணவு • 580 கிலோகலோரி', te: 'మధ్యాహ్న భోజనం • 580 కిలో కేలరీలు', mr: 'दुपारचे जेवण • 580 kcal' },
    dinner: { en: 'Dinner • 340 kcal', hi: 'रात का खाना • 340 किलो कैलोरी', bn: 'রাতের খাবার • 340 কিলোক্যালরি', ta: 'இரவு உணவு • 340 கிலோகலோரி', te: 'రాత్రి భోజనం • 340 కిలో కేలరీలు', mr: 'रात्रीचे जेवण • 340 kcal' },
    friendsActive: { en: '12 friends are active now', hi: '12 दोस्त अभी सक्रिय हैं', bn: '12 জন বন্ধু এখন সক্রিয়', ta: '12 நண்பர்கள் இப்போது செயலில் உள்ளனர்', te: '12 మంది స్నేహితులు ఇప్పుడు యాక్టివ్‌గా ఉన్నారు', mr: '12 मित्र आता सक्रिय आहेत' },
    joinHub: { en: 'Join the Hub', hi: 'हब से जुड़ें', bn: 'হাবে যোগ দিন', ta: 'மையத்தில் சேரவும்', te: 'హబ్‌లో చేరండి', mr: 'हबमध्ये सामील व्हा' },
    healthLog: { en: 'Health Log:', hi: 'स्वास्थ्य लॉग:', bn: 'স্বাস্থ্য লগ:', ta: 'சுகாதாரப் பதிவு:', te: 'ఆరోగ్య లాగ్:', mr: 'आरोग्य लॉग:' },
    isPeriodDay: { en: 'Is Period Day?', hi: 'क्या पीरियड का दिन है?', bn: 'আজ কি পিরিয়ডের দিন?', ta: 'மாதவிடாய் நாளா?', te: 'పీరియడ్ రోజా?', mr: 'पाळीचा दिवस आहे का?' },
    flowIntensity: { en: 'Flow Intensity', hi: 'प्रवाह की तीव्रता', bn: 'প্রবাহের তীব্রতা', ta: 'ஓட்ட தீவிரம்', te: 'ప్రవాహ తీవ్రత', mr: 'प्रवाहाची तीव्रता' },
    symptomsExp: { en: 'Symptoms Experienced', hi: 'लक्षण अनुभव किए गए', bn: 'অভিজ্ঞতা হওয়া লক্ষণ', ta: 'அனுபவித்த அறிகுறிகள்', te: 'అనుభవించిన లక్షణాలు', mr: 'अनुभवलेली लक्षणे' },
    moodState: { en: 'Mood State', hi: 'मनोदशा की स्थिति', bn: 'মেজাজের অবস্থা', ta: 'மனநிலை நிலை', te: 'మానసిక స్థితి', mr: 'मनस्थितीची स्थिती' },
    cancel: { en: 'Cancel', hi: 'रद्द करें', bn: 'বাতিল করুন', ta: 'ரத்து செய்', te: 'రద్దు చేయి', mr: 'रद्द करा' },
    saveLogs: { en: 'Save Logs', hi: 'लॉग सहेजें', bn: 'লগ সংরক্ষণ করুন', ta: 'பதிவுகளை சேமிக்கவும்', te: 'లాగ్‌లను సేవ్ చేయండి', mr: 'लॉग जतन करा' },
    levels: { 
      spotting: { en: 'SPOTTING', hi: 'स्पॉटिंग', bn: 'স্পটিং', ta: 'புள்ளிகள்', te: 'మచ్చలు', mr: 'स्पॉटिंग' },
      light: { en: 'LIGHT', hi: 'हल्का', bn: 'হালকা', ta: 'லேசான', te: 'తేలికపాటి', mr: 'हलका' },
      medium: { en: 'MEDIUM', hi: 'मध्यम', bn: 'মাঝারি', ta: 'நடுத்தர', te: 'మధ్యస్థం', mr: 'मध्यम' },
      heavy: { en: 'HEAVY', hi: 'भारी', bn: 'ভারী', ta: 'கடுமையான', te: 'భారీ', mr: 'भारी' }
    },
    symps: {
      cramps: { en: 'CRAMPS', hi: 'ऐंठन', bn: 'পেটে ব্যথা', ta: 'தசைப்பிடிப்பு', te: 'కండరాల నొప్పులు', mr: 'पेटके' },
      fatigue: { en: 'FATIGUE', hi: 'थकान', bn: 'ক্লান্তি', ta: 'சோர்வு', te: 'అలసట', mr: 'थकवा' },
      backache: { en: 'BACKACHE', hi: 'पीठ दर्द', bn: 'পিঠে ব্যথা', ta: 'முதுகுவலி', te: 'వెన్నునొప్పి', mr: 'पाठदुखी' },
      bloating: { en: 'BLOATING', hi: 'ब्लोटिंग', bn: 'ফোলাভাব', ta: 'வீக்கம்', te: 'ఉబ్బరం', mr: 'ब्लोटिंग' },
      headache: { en: 'HEADACHE', hi: 'सिरदर्द', bn: 'মাথাব্যথা', ta: 'தலைவலி', te: 'తలనొప్పి', mr: 'डोकेदुखी' }
    },
    moods: {
      calm: { en: 'Calm & Balanced', hi: 'शांत और संतुलित', bn: 'শান্ত ও ভারসাম্যপূর্ণ', ta: 'அமைதியான & சமநிலையான', te: 'ప్రశాంతమైన & సమతుల్య', mr: 'शांत आणि संतुलित' },
      happy: { en: 'Happy & Energetic', hi: 'खुश और ऊर्जावान', bn: 'সুখী ও উদ্যমী', ta: 'மகிழ்ச்சியான & ஆற்றல்மிக்க', te: 'సంతోషకరమైన & శక్తివంతమైన', mr: 'आनंदी आणि ऊर्जावान' },
      sad: { en: 'Sad & Low', hi: 'उदास और कम', bn: 'দুঃখিত ও নিম্ন', ta: 'சோகமான & குறைந்த', te: 'విచారకరమైన & తక్కువ', mr: 'दुःखी आणि कमी' },
      irritable: { en: 'Irritable / PMS', hi: 'चिड़चिड़ा / पीएमएस', bn: 'খিটখিটে / পিএমএস', ta: 'எரிச்சல் / பிஎம்எஸ்', te: 'చిరాకు / పిఎంఎస్', mr: 'चिडचिडे / पीएमएस' },
      anxious: { en: 'Anxious / Stressed', hi: 'चिंतित / तनावग्रस्त', bn: 'উদ্বিগ্ন / চাপযুক্ত', ta: 'பதட்டமான / மன அழுத்தமான', te: 'ఆత్రుత / ఒత్తిడి', mr: 'चिंताग्रस्त / तणावग्रस्त' }
    },
    days: {
      mon: { en: 'MON', hi: 'सोम', bn: 'সোম', ta: 'திங்', te: 'సోమ', mr: 'सोम' },
      tue: { en: 'TUE', hi: 'मंगल', bn: 'মঙ্গল', ta: 'செவ்', te: 'మంగళ', mr: 'मंगळ' },
      wed: { en: 'WED', hi: 'बुध', bn: 'বুধ', ta: 'புதன்', te: 'బుధ', mr: 'बुध' },
      thu: { en: 'THU', hi: 'गुरु', bn: 'বৃহঃ', ta: 'வியா', te: 'గురు', mr: 'गुरू' },
      fri: { en: 'FRI', hi: 'शुक्र', bn: 'শুক্র', ta: 'வெள்ளி', te: 'శుక్ర', mr: 'शुक्र' },
      sat: { en: 'SAT', hi: 'शनि', bn: 'শনি', ta: 'சனி', te: 'శని', mr: 'शनि' },
      sun: { en: 'SUN', hi: 'रवि', bn: 'রবি', ta: 'ஞாயிறு', te: 'ఆది', mr: 'रवि' }
    },
    months: {
      may: { en: 'MAY', hi: 'मई', bn: 'মে', ta: 'மே', te: 'మే', mr: 'मे' },
      jun: { en: 'JUN', hi: 'जून', bn: 'জুন', ta: 'ஜூன்', te: 'జూన్', mr: 'जून' },
      jul: { en: 'JUL', hi: 'जुलाई', bn: 'জুলাই', ta: 'ஜூலை', te: 'జూలై', mr: 'जुलै' },
      aug: { en: 'AUG', hi: 'अगस्त', bn: 'আগস্ট', ta: 'ஆகஸ்ட்', te: 'ఆగస్టు', mr: 'ऑगस्ट' },
      sep: { en: 'SEP', hi: 'सितंबर', bn: 'সেপ্টেম্বর', ta: 'செப்டம்பர்', te: 'సెప్టెంబర్', mr: 'सप्टेंबर' },
      oct: { en: 'OCT', hi: 'अक्टूबर', bn: 'অক্টোবর', ta: 'அக்டோபர்', te: 'అక్టోబర్', mr: 'ऑक्टोबर' }
    }
  };

  return (
    <div className="slide-in flex flex-col gap-8 text-left animate-fade-in">
      
      {/* 1. GREETING HEADER */}
      <div className="flex flex-col gap-1.5 pb-2">
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
          {strings.greeting[language] || strings.greeting['en']}
        </h1>
        <p className="text-xs text-[var(--text-secondary)] font-extrabold uppercase tracking-wider">
          {strings.landscape[language] || strings.landscape['en']}
        </p>
      </div>

      {/* 2. THREE METRICS CARDS ROW (Grid-3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Ovulation Window */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900 flex flex-col gap-4 relative">
          <span className="absolute top-4 right-4 bg-pink-50 dark:bg-pink-950/20 text-feminine-pink font-display text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {strings.day14[language] || strings.day14['en']}
          </span>
          <div className="flex justify-between items-start">
            <div className="h-9 w-9 rounded-full bg-pink-100/60 dark:bg-pink-950/30 text-feminine-pink flex items-center justify-center">
              📅
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] leading-snug mb-1">
              {strings.ovulationTitle[language] || strings.ovulationTitle['en']}
            </h3>
            <p className="text-[11px] text-[var(--text-secondary)] leading-normal mb-3">
              {strings.ovulationDesc[language] || strings.ovulationDesc['en']}
            </p>
            <div className="w-full h-1.5 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-feminine-pink rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* Mild Fatigue */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900 flex flex-col gap-4 relative">
          <span className="absolute top-4 right-4 bg-pink-50 dark:bg-pink-950/20 text-feminine-pink font-display text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {strings.updated2h[language] || strings.updated2h['en']}
          </span>
          <div className="flex justify-between items-start">
            <div className="h-9 w-9 rounded-full bg-pink-100/60 dark:bg-pink-950/30 text-feminine-pink flex items-center justify-center">
              🔴
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] leading-snug mb-1">
              {strings.fatigueTitle[language] || strings.fatigueTitle['en']}
            </h3>
            <p className="text-[11px] text-[var(--text-secondary)] leading-normal mb-3">
              {strings.fatigueDesc[language] || strings.fatigueDesc['en']}
            </p>
            <div className="flex gap-1.5">
              <div className="h-1 flex-grow bg-feminine-pink rounded-full"></div>
              <div className="h-1 flex-grow bg-feminine-pink rounded-full"></div>
              <div className="h-1 flex-grow bg-pink-100 dark:bg-zinc-800 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Balanced Mood */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900 flex flex-col gap-4 relative">
          <span className="absolute top-4 right-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 font-display text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {strings.calm[language] || strings.calm['en']}
          </span>
          <div className="flex justify-between items-start">
            <div className="h-9 w-9 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 flex items-center justify-center">
              🟢
            </div>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] leading-snug mb-1">
              {strings.moodTitle[language] || strings.moodTitle['en']}
            </h3>
            <p className="text-[11px] text-[var(--text-secondary)] leading-normal mb-3">
              {strings.moodDesc[language] || strings.moodDesc['en']}
            </p>
            <button 
              onClick={() => handleDayClick({ day: 23, dateStr: '2024-10-23', type: 'active' })}
              className="text-[11px] font-bold text-feminine-pink hover:underline cursor-pointer flex items-center gap-1"
            >
              {strings.logEmotion[language] || strings.logEmotion['en']}
            </button>
          </div>
        </div>

      </div>

      {/* 3. MAIN DASHBOARD CONTENT GRID (CALENDAR & AI INSIGHTS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (Wider, Calendar & Graphs) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
           {/* Calendar Widget */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-extrabold text-base text-[var(--text-primary)]">
                {strings.cycleCalendar[language] || strings.cycleCalendar['en']}
              </h3>
              <div className="flex items-center gap-4 text-xs font-extrabold text-[var(--text-secondary)]">
                <button className="h-6 w-6 border border-gray-200 dark:border-zinc-800 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-900 cursor-pointer">
                  &lt;
                </button>
                <span>{strings.oct2024[language] || strings.oct2024['en']}</span>
                <button className="h-6 w-6 border border-gray-200 dark:border-zinc-800 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-900 cursor-pointer">
                  &gt;
                </button>
              </div>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-2.5 text-center text-[10px] font-extrabold text-[var(--text-secondary)] tracking-wider mb-3">
              <span>{strings.days.mon[language] || strings.days.mon['en']}</span>
              <span>{strings.days.tue[language] || strings.days.tue['en']}</span>
              <span>{strings.days.wed[language] || strings.days.wed['en']}</span>
              <span>{strings.days.thu[language] || strings.days.thu['en']}</span>
              <span>{strings.days.fri[language] || strings.days.fri['en']}</span>
              <span>{strings.days.sat[language] || strings.days.sat['en']}</span>
              <span>{strings.days.sun[language] || strings.days.sun['en']}</span>
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-2.5 justify-items-center">
              {calendarDays.map((cell, idx) => {
                if (cell.type === 'empty') {
                  return <div key={idx} className="w-9 h-9"></div>;
                }
                let dayClass = "w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-display cursor-pointer transition-all duration-300 relative ";
                if (cell.type === 'period') {
                  dayClass += "bg-pink-100/60 dark:bg-pink-950/20 text-feminine-pink border border-pink-200/50 dark:border-pink-950/30";
                } else if (cell.type === 'active') {
                  dayClass += "bg-feminine-pink text-white shadow-lg shadow-pink-500/20 ring-4 ring-pink-100 dark:ring-pink-950/50 scale-105";
                } else {
                  dayClass += "hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-700 dark:text-zinc-250";
                }
                return (
                  <div key={idx} className={dayClass} onClick={() => handleDayClick(cell)}>
                    {cell.day}
                    {cell.type === 'period' && (<span className="absolute bottom-1 h-1 w-1 bg-feminine-pink rounded-full"></span>)}
                    {cell.type === 'active' && (<span className="absolute top-0 right-0 h-1.5 w-1.5 bg-white border border-feminine-pink rounded-full"></span>)}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Symptom Trends */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900">
            <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
              <div>
                <h3 className="font-display font-extrabold text-base text-[var(--text-primary)]">
                  {strings.symptomTrends[language] || strings.symptomTrends['en']}
                </h3>
                <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 font-bold">
                  {strings.trackingDesc[language] || strings.trackingDesc['en']}
                </p>
              </div>
              <div className="flex gap-4 text-[10px] font-extrabold">
                <span className="flex items-center gap-1.5 text-feminine-pink">
                  <span className="h-2 w-2 rounded-full bg-feminine-pink"></span>
                  {strings.cramps[language] || strings.cramps['en']}
                </span>
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--text-secondary)]"></span>
                  {strings.energy[language] || strings.energy['en']}
                </span>
              </div>
            </div>

            <div className="w-full h-44 relative">
              <svg viewBox="0 0 500 150" width="100%" height="100%" style={{ overflow: 'visible' }}>
                <line x1="0" y1="25" x2="500" y2="25" stroke="rgba(220, 220, 220, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(220, 220, 220, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="125" x2="500" y2="125" stroke="rgba(220, 220, 220, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 10 115 Q 100 130 190 90 T 370 120 T 490 85" fill="none" stroke="var(--color-feminine-pink)" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 10 70 Q 100 45 190 85 T 370 50 T 490 95" fill="none" stroke="var(--color-feminine-purple)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                <circle cx="190" cy="90" r="5" fill="var(--color-feminine-pink)" stroke="white" strokeWidth="1.5" />
                <circle cx="190" cy="85" r="5" fill="var(--color-feminine-purple)" stroke="white" strokeWidth="1.5" />
                <circle cx="430" cy="95" r="5" fill="var(--color-feminine-pink)" stroke="white" strokeWidth="1.5" />
                <circle cx="430" cy="65" r="5" fill="var(--color-feminine-purple)" stroke="white" strokeWidth="1.5" />
              </svg>
              <div className="flex justify-between mt-3 text-[9px] font-extrabold text-[var(--text-secondary)] px-1">
                <span>{strings.months.may[language] || strings.months.may['en']}</span>
                <span>{strings.months.jun[language] || strings.months.jun['en']}</span>
                <span>{strings.months.jul[language] || strings.months.jul['en']}</span>
                <span>{strings.months.aug[language] || strings.months.aug['en']}</span>
                <span>{strings.months.sep[language] || strings.months.sep['en']}</span>
                <span>{strings.months.oct[language] || strings.months.oct['en']}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Narrower, AI & Meal Plans) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          {/* AI Insights (Glowing Solid Pink) */}
          <div className="bg-feminine-pink text-white rounded-2xl p-6 shadow-xl shadow-pink-500/20 flex flex-col gap-5 border border-pink-400/20">
            <div className="flex items-center gap-2">
              <span className="text-lg">✦</span>
              <h3 className="font-display font-extrabold text-base">
                {strings.aiInsights[language] || strings.aiInsights['en']}
              </h3>
            </div>
            
            <div className="flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1 border-b border-white/20 pb-3">
                <p className="text-[11px] font-semibold opacity-95 leading-normal">
                  {strings.aiTip1[language] || strings.aiTip1['en']}
                </p>
                <span className="text-[9px] font-extrabold uppercase tracking-wide opacity-80 mt-1">
                  {strings.aiRec1[language] || strings.aiRec1['en']}
                </span>
              </div>

              <div className="flex flex-col gap-1 pb-1">
                <p className="text-[11px] font-semibold opacity-95 leading-normal">
                  {strings.aiTip2[language] || strings.aiTip2['en']}
                </p>
                <span className="text-[9px] font-extrabold uppercase tracking-wide opacity-80 mt-1">
                  {strings.aiRec2[language] || strings.aiRec2['en']}
                </span>
              </div>

              <button 
                onClick={() => setTab('diet-fitness')}
                className="w-full rounded-full bg-white text-feminine-pink hover:bg-zinc-50 text-xs font-extrabold py-3 shadow-md active:scale-98 transition-all cursor-pointer text-center"
              >
                {strings.viewFullAnalysis[language] || strings.viewFullAnalysis['en']}
              </button>
            </div>
          </div>

          {/* Today's Meal Plan */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-zinc-900">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-display font-extrabold text-base text-[var(--text-primary)] flex items-center gap-1.5">
                🍽️ {strings.mealPlan[language] || strings.mealPlan['en']}
              </h3>
            </div>

            <div className="flex flex-col gap-4 text-left">
              {/* Meal Item 1 */}
              <div className="flex items-center justify-between border-b border-gray-50 dark:border-zinc-900 pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-50 dark:bg-green-950/20 flex items-center justify-center text-sm shrink-0">
                    🥗
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[var(--text-primary)]">Avocado & Egg Greens</h4>
                    <span className="text-[9px] text-[var(--text-secondary)] font-bold">{strings.breakfast[language] || strings.breakfast['en']}</span>
                  </div>
                </div>
                <span className="h-5 w-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
              </div>

              {/* Meal Item 2 */}
              <div className="flex items-center justify-between border-b border-gray-50 dark:border-zinc-900 pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-amber-50 dark:bg-amber-950/20 flex items-center justify-center text-sm shrink-0">
                    🍲
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[var(--text-primary)]">Quinoa Power Bowl</h4>
                    <span className="text-[9px] text-[var(--text-secondary)] font-bold">{strings.lunch[language] || strings.lunch['en']}</span>
                  </div>
                </div>
                <button className="h-5 w-5 border border-gray-200 dark:border-zinc-800 hover:border-feminine-pink rounded-full flex items-center justify-center text-xs font-bold cursor-pointer text-[var(--text-secondary)] hover:text-feminine-pink">
                  +
                </button>
              </div>

              {/* Meal Item 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-pink-50 dark:bg-pink-950/20 flex items-center justify-center text-sm shrink-0">
                    🥣
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[var(--text-primary)]">Lentil & Spinach Dal</h4>
                    <span className="text-[9px] text-[var(--text-secondary)] font-bold">{strings.dinner[language] || strings.dinner['en']}</span>
                  </div>
                </div>
                <button className="h-5 w-5 border border-gray-200 dark:border-zinc-800 hover:border-feminine-pink rounded-full flex items-center justify-center text-xs font-bold cursor-pointer text-[var(--text-secondary)] hover:text-feminine-pink">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Friends Active Widget */}
          <div className="border border-dashed border-gray-250 dark:border-zinc-850 p-5 rounded-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full bg-pink-100 border border-white flex items-center justify-center text-[10px] font-bold text-pink-700">R</div>
                <div className="h-7 w-7 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[10px] font-bold text-blue-700">P</div>
                <div className="h-7 w-7 rounded-full bg-purple-100 border border-white flex items-center justify-center text-[10px] font-bold text-purple-700">S</div>
              </div>
              <div className="text-left">
                <p className="text-[11px] font-extrabold text-[var(--text-primary)] leading-none mb-1">
                  {strings.friendsActive[language] || strings.friendsActive['en']}
                </p>
                <button 
                  onClick={() => setTab('community')}
                  className="text-[10px] font-extrabold uppercase text-feminine-pink hover:underline cursor-pointer"
                >
                  {strings.joinHub[language] || strings.joinHub['en']}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. HEALTH DIARY LOG MODAL */}
      {showLogModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '999' }}>
          <div className="glass-panel slide-in" style={{ width: '450px', background: 'var(--bg-secondary)', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              📝 {strings.healthLog[language] || strings.healthLog['en']} {selectedDate}
            </h3>

            {/* Period Flow Switch */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '600' }}>{strings.isPeriodDay[language] || strings.isPeriodDay['en']}</span>
              <button 
                onClick={() => setFormIsPeriod(!formIsPeriod)}
                style={{ width: '50px', height: '26px', borderRadius: '13px', background: formIsPeriod ? 'var(--primary)' : 'var(--border-color)', border: 'none', position: 'relative', cursor: 'pointer', transition: 'var(--transition)' }}
              >
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'white', position: 'absolute', top: '3px', left: formIsPeriod ? '27px' : '3px', transition: 'var(--transition)' }}></div>
              </button>
            </div>

            {/* Flow intensity select */}
            {formIsPeriod && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{strings.flowIntensity[language] || strings.flowIntensity['en']}</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {['spotting', 'light', 'medium', 'heavy'].map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setFormFlow(lvl)}
                      style={{ padding: '6px', fontSize: '11px', fontWeight: '700', borderRadius: '6px', border: '1px solid', borderColor: formFlow === lvl ? 'var(--primary)' : 'var(--border-color)', background: formFlow === lvl ? 'var(--primary-light)' : 'transparent', color: formFlow === lvl ? 'var(--primary)' : 'var(--text-primary)', cursor: 'pointer' }}
                    >
                      {strings.levels[lvl][language] || strings.levels[lvl]['en']}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Symptoms Logging */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{strings.symptomsExp[language] || strings.symptomsExp['en']}</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['cramps', 'fatigue', 'backache', 'bloating', 'headache'].map(sym => {
                  const active = formSymptoms.includes(sym);
                  return (
                    <button
                      key={sym}
                      onClick={() => toggleSymptom(sym)}
                      style={{ padding: '6px 12px', borderRadius: '20px', border: '1px solid', borderColor: active ? 'var(--secondary)' : 'var(--border-color)', background: active ? 'var(--secondary-light)' : 'transparent', color: active ? 'var(--secondary)' : 'var(--text-primary)', fontSize: '12px', cursor: 'pointer' }}
                    >
                      {strings.symps[sym][language] || strings.symps[sym]['en']}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mood selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{strings.moodState[language] || strings.moodState['en']}</span>
              <select
                value={formMood}
                onChange={(e) => setFormMood(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '13px' }}
              >
                <option value="calm">{strings.moods.calm[language] || strings.moods.calm['en']}</option>
                <option value="happy">{strings.moods.happy[language] || strings.moods.happy['en']}</option>
                <option value="sad">{strings.moods.sad[language] || strings.moods.sad['en']}</option>
                <option value="irritable">{strings.moods.irritable[language] || strings.moods.irritable['en']}</option>
                <option value="anxious">{strings.moods.anxious[language] || strings.moods.anxious['en']}</option>
              </select>
            </div>

            {/* Save Buttons */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '10px' }}>
              <button className="btn btn-secondary" onClick={() => setShowLogModal(false)}>{strings.cancel[language] || strings.cancel['en']}</button>
              <button className="btn btn-primary" onClick={handleSaveLog}>{strings.saveLogs[language] || strings.saveLogs['en']}</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
