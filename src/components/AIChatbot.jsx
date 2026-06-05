import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  ShieldCheck, 
  MessageSquare, 
  Plus, 
  Activity, 
  Heart,
  TrendingUp,
  AlertTriangle,
  FolderHeart
} from 'lucide-react';

export default function AIChatbot({ language, setTab }) {
  const [activeChatTab, setActiveChatTab] = useState('chat'); // 'chat' or 'predictor'
  
  const strings = {
    tabChat: { en: 'AI Health Assistant', hi: 'एआई स्वास्थ्य सहायक', bn: 'এআই স্বাস্থ্য সহকারী', ta: 'ஏஐ சுகாதார உதவியாளர்', te: 'ఏఐ ఆరోగ్య సహాయకుడు', mr: 'एआय आरोग्य सहाय्यक' },
    tabPredictor: { en: 'AI Disease Predictor', hi: 'एआई रोग भविष्यवक्ता', bn: 'এআই रोग ভবিষ্যদ্বাণীকারী', ta: 'ஏஐ நோய் முன்னறிவிப்பாளர்', te: 'ఏఐ వ్యాధి అంచనాదారు', mr: 'एआय रोग भविष्यवाणी करणारा' },
    sessions: { en: 'Consultation Sessions', hi: 'परामर्श सत्र', bn: 'পরামর্শ সেশন', ta: 'ஆலோசனை அமர்வுகள்', te: 'సంప్రదింపు సెషన్లు', mr: 'सल्लामसलत सत्रे' },
    newConsult: { en: 'New Consult', hi: 'नया परामर्श', bn: 'নতুন পরামর্শ', ta: 'புதிய ஆலோசனை', te: 'కొత్త సంప్రదింపు', mr: 'नवीन सल्लामसलत' },
    disclaimer: { en: 'AI provides educational guidance only and does not replace professional medical advice.', hi: 'एआई केवल शैक्षिक मार्गदर्शन प्रदान करता है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है।', bn: 'এআই শুধুমাত্র শিক্ষামূলক নির্দেশনা প্রদান করে এবং পেশাদার চিকিৎসা পরামর্শ প্রতিস্থাপন করে না।', ta: 'ஏஐ கல்வி வழிகாட்டுதலை மட்டுமே வழங்குகிறது மற்றும் தொழில்முறை மருத்துவ ஆலோசனைக்கு மாற்றாகாது.', te: 'ఏఐ విద్యాపరమైన మార్గదర్శకత్వాన్ని మాత్రమే అందిస్తుంది మరియు వృత్తిపరమైన వైద్య సలహాను భర్తీ చేయదు.', mr: 'एआय केवळ शैक्षणिक मार्गदर्शन देते आणि व्यावसायिक वैद्यकीय सल्ल्याला पर्याय नाही.' },
    askAi: { en: 'Ask SAKHI AI Assistant', hi: 'सखी एआई असिस्टेंट से पूछें', bn: 'সখী এআই সহকারীকে জিজ্ঞাসা করুন', ta: 'சகி ஏஐ உதவியாளரைக் கேளுங்கள்', te: 'సఖి ఏఐ అసిస్టెంట్‌ని అడగండి', mr: 'सखी एआय असिस्टंटला विचारा' },
    askDesc: { en: 'Describe symptoms, upload reports, or ask cycle health questions.', hi: 'लक्षणों का वर्णन करें, रिपोर्ट अपलोड करें, या चक्र स्वास्थ्य प्रश्न पूछें।', bn: 'লক্ষণগুলি বর্ণনা করুন, রিপোর্ট আপলোড করুন বা চক্র স্বাস্থ্য প্রশ্ন জিজ্ঞাসা করুন।', ta: 'அறிகுறிகளை விவரிக்கவும், அறிக்கைகளை பதிவேற்றவும் அல்லது சுழற்சி சுகாதார கேள்விகளைக் கேட்கவும்.', te: 'లక్షణాలను వివరించండి, నివేదికలను అప్‌లోడ్ చేయండి లేదా సైకిల్ ఆరోగ్య ప్రశ్నలను అడగండి.', mr: 'लक्षणांचे वर्णन करा, अहवाल अपलोड करा किंवा सायकल आरोग्य प्रश्न विचारा.' },
    possibleExp: { en: 'Possible Explanations', hi: 'संभावित स्पष्टीकरण', bn: 'সম্ভাব্য ব্যাখ্যা', ta: 'சாத்தியமான விளக்கங்கள்', te: 'సాధ్యమైన వివరణలు', mr: 'संभाव्य स्पष्टीकरणे' },
    severity: { en: 'Severity Level', hi: 'गंभीरता स्तर', bn: 'তীব্রতার স্তর', ta: 'தீவிர நிலை', te: 'తీవ్రత స్థాయి', mr: 'तीव्रता पातळी' },
    lifestyle: { en: 'Lifestyle Suggestions', hi: 'जीवन शैली सुझाव', bn: 'জীবনধারা পরামর্শ', ta: 'வாழ்க்கை முறை பரிந்துரைகள்', te: 'జీవనశైలి సూచనలు', mr: 'जीवनशैली सूचना' },
    expertRec: { en: 'Expert Recommendation:', hi: 'विशेषज्ञ की सिफारिश:', bn: 'বিশেষজ্ঞের সুপারিশ:', ta: 'நிபுணர் பரிந்துரை:', te: 'నిపుణుల సిఫార్సు:', mr: 'तज्ञांची शिफारस:' },
    inputPlaceholder: { en: 'Describe symptoms in detail...', hi: 'अपने लक्षणों का विस्तार से वर्णन करें...', bn: 'লক্ষণগুলি বিস্তারিতভাবে বর্ণনা করুন...', ta: 'அறிகுறிகளை விரிவாக விவரிக்கவும்...', te: 'లక్షణాలను వివరంగా వివరించండి...', mr: 'लक्षणांचे सविस्तर वर्णन करा...' },
    symptomProfile: { en: 'Symptom Profile Assessment', hi: 'लक्षण प्रोफ़ाइल मूल्यांकन', bn: 'লক্ষণ প্রোফাইল মূল্যায়ন', ta: 'அறிகுறி சுயவிவர மதிப்பீடு', te: 'లక్షణ ప్రొఫైల్ అంచనా', mr: 'लक्षण प्रोफाइल मूल्यांकन' },
    yourAge: { en: 'Your Age', hi: 'आपकी आयु', bn: 'আপনার বয়স', ta: 'உங்கள் வயது', te: 'మీ వయస్సు', mr: 'तुमचे वय' },
    cycleDays: { en: 'Average Cycle length (Days)', hi: 'औसत चक्र की लंबाई (दिन)', bn: 'গড় চক্রের দৈর্ঘ্য (দিন)', ta: 'சராசரி சுழற்சி நீளம் (நாட்கள்)', te: 'సగటు చక్రం పొడవు (రోజులు)', mr: 'सरासरी सायकल लांबी (दिवस)' },
    enterSymptoms: { en: 'Enter Symptoms (comma separated)', hi: 'लक्षण दर्ज करें (अल्पविराम से अलग)', bn: 'লক্ষণগুলি লিখুন (কমা দ্বারা আলাদা)', ta: 'அறிகுறிகளை உள்ளிடவும் (கமாவால் பிரிக்கப்பட்டது)', te: 'లక్షణాలను నమోదు చేయండి (కామాతో వేరు చేయబడింది)', mr: 'लक्षणे प्रविष्ट करा (स्वल्पविरामाने विभक्त)' },
    placeholderSym: { en: 'e.g. Irregular periods, sudden weight gain, heavy fatigue...', hi: 'उदा. अनियमित पीरियड्स, अचानक वजन बढ़ना, भारी थकान...', bn: 'যেমন অনিয়মিত পিরিয়ড, হঠাৎ ওজন বৃদ্ধি...', ta: 'எ.கா. ஒழுங்கற்ற மாதவிடாய், திடீர் எடை அதிகரிப்பு...', te: 'ఉదా. సక్రమంగా లేని పీరియడ్స్, అకస్మాత్తుగా బరువు పెరగడం...', mr: 'उदा. अनियमित पाळी, अचानक वजन वाढणे...' },
    medicalHistory: { en: 'Existing Medical History', hi: 'मौजूदा चिकित्सा इतिहास', bn: 'বিদ্যমান চিকিৎসা ইতিহাস', ta: 'தற்போதைய மருத்துவ வரலாறு', te: 'ఉన్న వైద్య చరిత్ర', mr: 'विद्यमान वैद्यकीय इतिहास' },
    optNone: { en: 'No major conditions', hi: 'कोई बड़ी बीमारी नहीं', bn: 'কোন বড় রোগ নেই', ta: 'பெரிய நிலைமைகள் இல்லை', te: 'పెద్ద వ్యాధులు లేవు', mr: 'कोणतेही मोठे आजार नाहीत' },
    optPcos: { en: 'Diagnosed PCOS', hi: 'निदान पीसीओएस', bn: 'নির্ণয় পিসিওএস', ta: 'கண்டறியப்பட்ட பிசிஓஎஸ்', te: 'నిర్ధారణ పీసీఓఎస్', mr: 'निदान पीसीओएस' },
    optAnemia: { en: 'Anemia', hi: 'एनीमिया', bn: 'রক্তাল্পতা', ta: 'இரத்த சோகை', te: 'రక్తహీనత', mr: 'अशक्तपणा' },
    optThyroid: { en: 'Thyroid Irregularity', hi: 'थायराइड अनियमितता', bn: 'থাইরয়েড অনিয়ম', ta: 'தைராய்டு ஒழுங்கின்மை', te: 'థైరాయిడ్ అక్రమం', mr: 'थायरॉईड अनियमितता' },
    generateReport: { en: 'Generate AI Risk Report', hi: 'एआई जोखिम रिपोर्ट तैयार करें', bn: 'এআই ঝুঁকি প্রতিবেদন তৈরি করুন', ta: 'ஏஐ ஆபத்து அறிக்கை உருவாக்கு', te: 'ఏఐ ప్రమాద నివేదికను రూపొందించండి', mr: 'एआय जोखीम अहवाल तयार करा' },
    pendingReport: { en: 'Prediction Report Pending', hi: 'भविष्यवाणी रिपोर्ट लंबित', bn: 'ভবিষ্যদ্বাণী প্রতিবেদন মুলতুবি', ta: 'முன்னறிவிப்பு அறிக்கை நிலுவையில் உள்ளது', te: 'అంచనా నివేదిక పెండింగ్‌లో ఉంది', mr: 'भविष्यवाणी अहवाल प्रलंबित' },
    pendingDesc: { en: 'Complete the health profile assessment details and run analysis to compile your risk summary report.', hi: 'जोखिम सारांश रिपोर्ट संकलित करने के लिए स्वास्थ्य प्रोफ़ाइल मूल्यांकन विवरण पूरा करें और विश्लेषण चलाएं।', bn: 'ঝুঁকির সারসংক্ষেপ প্রতিবেদন কম্পাইল করতে স্বাস্থ্য প্রোফাইল মূল্যায়নের বিবরণ সম্পূর্ণ করুন এবং বিশ্লেষণ চালান।', ta: 'ஆபத்து சுருக்க அறிக்கையை தொகுக்க சுகாதார சுயவிவர மதிப்பீட்டு விவரங்களை முடித்து பகுப்பாய்வை இயக்கவும்.', te: 'ప్రమాద సారాంశ నివేదికను రూపొందించడానికి ఆరోగ్య ప్రొఫైల్ అంచనా వివరాలను పూర్తి చేయండి మరియు విశ్లేషణను అమలు చేయండి.', mr: 'जोखीम सारांश अहवाल संकलित करण्यासाठी आरोग्य प्रोफाइल मूल्यांकन तपशील पूर्ण करा आणि विश्लेषण चालवा.' },
    aiDiagnostic: { en: 'AI Diagnostic Prediction', hi: 'एआई डायग्नोस्टिक भविष्यवाणी', bn: 'এআই ডায়াগনস্টிக் ভবিষ্যদ্বাণী', ta: 'ஏஐ நோயறிதல் முன்னறிவிப்பு', te: 'ఏఐ డయాగ్నస్టిక్ అంచనా', mr: 'एआय डायग्नोस्टिक भविष्यवाणी' },
    age: { en: 'Age', hi: 'आयु', bn: 'বয়স', ta: 'வயது', te: 'వయస్సు', mr: 'वय' },
    identifiedCond: { en: 'Identified Potential Conditions', hi: 'पहचानी गई संभावित स्थितियां', bn: 'চিহ্নিত সম্ভাব্য অবস্থা', ta: 'அடையாளம் காணப்பட்ட சாத்தியமான நிலைமைகள்', te: 'గుర్తించబడిన సంభావ్య పరిస్థితులు', mr: 'ओळखल्या गेलेल्या संभाव्य परिस्थिती' },
    aggRisk: { en: 'Aggregated Risk Level:', hi: 'एकत्रित जोखिम स्तर:', bn: 'সমষ্টিগত ঝুঁকির স্তর:', ta: 'ஒட்டுமொத்த ஆபத்து நிலை:', te: 'సమగ్ర ప్రమాద స్థాయి:', mr: 'एकत्रित जोखीम पातळी:' },
    prevAction: { en: 'Preventive Action Steps', hi: 'निवारक कार्रवाई कदम', bn: 'প্রতিরোধমূলক পদক্ষেপ', ta: 'தடுப்பு நடவடிக்கை படிகள்', te: 'నివారణ చర్య దశలు', mr: 'प्रतिबंधात्मक कृती पायऱ्या' },
    dailyRec: { en: 'Daily Recovery Recommendations:', hi: 'दैनिक पुनर्प्राप्ति अनुशंसाएं:', bn: 'দৈনিক পুনরুদ্ধারের সুপারিশ:', ta: 'தினசரி மீட்பு பரிந்துரைகள்:', te: 'రోజువారీ రికవరీ సిఫార్సులు:', mr: 'दैनिक पुनर्प्राप्ती शिफारसी:' },
    downloadPdf: { en: 'Download Report Summary (PDF)', hi: 'रिपोर्ट सारांश डाउनलोड करें (पीडीएफ)', bn: 'প্রতিবেদনের সারাংশ ডাউনলোড করুন (পিডিএফ)', ta: 'அறிக்கை சுருக்கத்தை பதிவிறக்கவும் (PDF)', te: 'నివేదిక సారాంశాన్ని డౌన్‌లోడ్ చేయండి (PDF)', mr: 'अहवाल सारांश डाउनलोड करा (पीडीएफ)' },
    bookTest: { en: 'Book a blood test', hi: 'रक्त परीक्षण बुक करें', bn: 'একটি রক্ত পরীক্ষা বুক করুন', ta: 'ரத்தப் பரிசோதனை முன்பதிவு செய்', te: 'రక్త పరీక్షను బుక్ చేయండి', mr: 'रक्त चाचणी बुक करा' },
    chatDoc: { en: 'Chat with Doctor', hi: 'डॉक्टर से बात करें', bn: 'ডাক্তারের সাথে চ্যাট করুন', ta: 'மருத்துவரிடம் பேசுங்கள்', te: 'డాక్టర్‌తో చాట్ చేయండి', mr: 'डॉक्टरांशी चॅट करा' },
    sos: { en: 'Trigger SOS Alert', hi: 'SOS अलर्ट ट्रिगर करें', bn: 'SOS সতর্কতা ট্রিগার করুন', ta: 'SOS எச்சரிக்கையைத் தூண்டு', te: 'SOS హెచ్చరికను ప్రేరేపించండి', mr: 'SOS अलर्ट ट्रिगर करा' },
    callDoc: { en: 'Call Gynecologist Now', hi: 'अभी स्त्री रोग विशेषज्ञ को कॉल करें', bn: 'এখন স্ত্রীরোগ বিশেষজ্ঞকে কল করুন', ta: 'இப்போது மகளிர் நல மருத்துவரை அழைக்கவும்', te: 'ఇప్పుడు గైనకాలజిస్ట్‌కు కాల్ చేయండి', mr: 'आता स्त्रीरोग तज्ञाला कॉल करा' },
    genDiet: { en: 'Generate PCOS Diet', hi: 'पीसीओएस आहार उत्पन्न करें', bn: 'পিসিওএস ডায়েট তৈরি করুন', ta: 'பிசிஓஎஸ் உணவை உருவாக்கு', te: 'పీసీఓఎస్ డైట్‌ను రూపొందించండి', mr: 'पीसीओएस आहार तयार करा' },
    consultSpec: { en: 'Consult Specialist', hi: 'विशेषज्ञ से परामर्श लें', bn: 'বিশেষজ্ঞের পরামর্শ নিন', ta: 'நிபுணரை அணுகவும்', te: 'నిపుణుడిని సంప్రదించండి', mr: 'तज्ञाचा सल्ला घ्या' },
    logTracker: { en: 'Log in Tracker', hi: 'ट्रैकर में लॉग इन करें', bn: 'ট্র্যাকারে লগ করুন', ta: 'கண்காணிப்பானில் பதிவு செய்யவும்', te: 'ట్రాకర్‌లో లాగ్ చేయండి', mr: 'ट्रॅकरमध्ये नोंद करा' }
  };

  const [chats, setChats] = useState([
    {
      id: 'session-1',
      title: 'Migraine & Fatigue',
      messages: [
        {
          sender: 'user',
          text: 'I\'ve been feeling unusually tired for the past three days, and I\'m having mild cramps even though my period isn\'t due for another week. What could this be?'
        },
        {
          sender: 'ai',
          isClinicalOverview: true,
          possibleExplanations: [
            'Ovulation pain (Mittelschmerz)',
            'Hormonal fluctuations (Progesterone peak)',
            'Early signs of nutritional deficiency (Iron/B12)'
          ],
          severityLevel: 'Low',
          severityDesc: 'Symptoms appear physiological. Monitor for changes in intensity.',
          lifestyleSuggestions: [
            'Increase consumption of magnesium-rich foods.',
            'Ensure hydration stays above 2.5 Liters daily.',
            'Secure 7-8 hours of restorative, continuous sleep.'
          ],
          expertRecommendation: 'If fatigue persists for more than 7 days or cramps become sharp, we recommend a CBC and Thyroid panel.',
          ctaActions: [
            { action: 'book_test', label: 'bookTest' },
            { action: 'chat_doctor', label: 'chatDoc' }
          ]
        }
      ]
    },
    { id: 'session-2', title: 'Regular Check-up Inquiry', messages: [] },
    { id: 'session-3', title: 'Cycle Irregularity', messages: [] }
  ]);

  const [activeSessionId, setActiveSessionId] = useState('session-1');
  const [inputVal, setInputVal] = useState('');
  const chatEndRef = useRef(null);

  // Predictor Form States
  const [formAge, setFormAge] = useState('25');
  const [formCycleDays, setFormCycleDays] = useState('28');
  const [formSymptomInput, setFormSymptomInput] = useState('cramps');
  const [formHistory, setFormHistory] = useState('none');
  const [predictionResult, setPredictionResult] = useState(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  const currentSession = chats.find(s => s.id === activeSessionId) || chats[0];

  const handleSendMessage = () => {
    if (!inputVal.trim()) return;

    const userMsg = { sender: 'user', text: inputVal };
    
    // Core AI processing simulation logic
    let aiResponse = {};
    const textQuery = inputVal.toLowerCase();

    // Check emergency red-flags first
    if (
      textQuery.includes('fainting') || 
      textQuery.includes('passed out') || 
      textQuery.includes('severe bleeding') || 
      textQuery.includes('heavy bleeding') ||
      textQuery.includes('severe pelvic pain') ||
      textQuery.includes('high fever')
    ) {
      aiResponse = {
        sender: 'ai',
        isClinicalOverview: true,
        possibleExplanations: [
          'High Risk Menstrual Complication',
          'Potential Acute Pelvic Infection or Hemorrhage'
        ],
        severityLevel: 'High',
        severityDesc: 'EMERGENCY RED-FLAG INDICATORS DETECTED. Immediate evaluation is highly critical.',
        lifestyleSuggestions: [
          'Lie down with your legs elevated.',
          'Avoid taking any heavy self-medicated pain relievers immediately.',
          'Secure an immediate escort to the nearest Emergency Clinic.'
        ],
        expertRecommendation: 'Proceed immediately to your nearest emergency hospital care or dial our local emergency hotlines immediately.',
        ctaActions: [
          { action: 'sos', label: 'sos' },
          { action: 'chat_doctor', label: 'callDoc' }
        ]
      };
    } else if (textQuery.includes('pcos') || textQuery.includes('ovary') || textQuery.includes('irregular')) {
      aiResponse = {
        sender: 'ai',
        isClinicalOverview: true,
        possibleExplanations: [
          'Polycystic Ovary Syndrome (PCOS)',
          'Anovulatory Cycles',
          'Luteal Phase Deficiency'
        ],
        severityLevel: 'Medium',
        severityDesc: 'Hormonal parameters warrant a diagnostic profile test.',
        lifestyleSuggestions: [
          'Adopt a low-glycemic, anti-inflammatory whole food diet.',
          'Introduce moderate aerobic activity (30m daily).',
          'Log your BBT (Basal Body Temperature) daily.'
        ],
        expertRecommendation: 'We highly recommend requesting a pelvic ultrasound scan and fasting insulin + LH/FSH blood work.',
        ctaActions: [
          { action: 'diet', label: 'genDiet' },
          { action: 'chat_doctor', label: 'consultSpec' }
        ]
      };
    } else {
      // Default standard response
      aiResponse = {
        sender: 'ai',
        isClinicalOverview: true,
        possibleExplanations: [
          'Hormonal Cycle Fluctuations',
          'General Dehydration or Fatigue',
          'Follicular Phase Transition'
        ],
        severityLevel: 'Low',
        severityDesc: 'Symptoms align with standard physiological phase transitions.',
        lifestyleSuggestions: [
          'Increase fluid intake above 2.5 Liters.',
          'Conduct 10-15 minutes of gentle yoga or stretches.',
          'Consume a well-balanced low-glycemic meal.'
        ],
        expertRecommendation: 'Log symptoms in your SAKHI Tracker. If issues persist past 5 consecutive days, seek physician review.',
        ctaActions: [
          { action: 'track', label: 'logTracker' }
        ]
      };
    }

    setChats(prev => prev.map(s => {
      if (s.id === activeSessionId) {
        return {
          ...s,
          messages: [...s.messages, userMsg, aiResponse]
        };
      }
      return s;
    }));
    setInputVal('');
  };

  const handlePredict = () => {
    // Generate Disease Prediction Report
    let conditions = [];
    let severity = 'Low';
    let recovery = [];
    const sym = formSymptomInput.toLowerCase();

    if (sym.includes('cramps') && sym.includes('pelvic')) {
      conditions = ['Endometriosis', 'Hormonal Imbalance'];
      severity = 'Medium';
      recovery = ['Warm compresses', 'Omega-3 fatty acids', 'Hormonal balancing therapy'];
    } else if (sym.includes('period') || sym.includes('weight') || sym.includes('hair')) {
      conditions = ['Polycystic Ovary Syndrome (PCOS)', 'Hormonal Imbalance'];
      severity = 'Medium';
      recovery = ['Spearmint tea', 'Strength training', 'Inositol supplementation'];
    } else if (sym.includes('burning') || sym.includes('urine') || sym.includes('pain')) {
      conditions = ['Urinary Tract Infection (UTI)', 'Vaginal Infection'];
      severity = 'High';
      recovery = ['Increased cranberry concentrates', 'Antibiotic consultation', 'Probiotics support'];
    } else {
      conditions = ['Anemia', 'General Micronutrient Deficiency'];
      severity = 'Low';
      recovery = ['Iron-rich leafy vegetables', 'Vitamin C absorption boosters'];
    }

    setPredictionResult({
      age: formAge,
      symptoms: formSymptomInput,
      conditions,
      severity,
      recovery,
      measures: ['Avoid artificial sweeteners', 'Log flow colors daily', 'Get 8h sleep']
    });
  };

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Tab select: Chat vs Predictor */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', gap: '20px' }}>
        <button 
          onClick={() => setActiveChatTab('chat')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeChatTab === 'chat' ? '3px solid var(--primary)' : 'none',
            padding: '10px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '700',
            color: activeChatTab === 'chat' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          💬 {strings.tabChat[language] || strings.tabChat['en']}
        </button>
        <button 
          onClick={() => setActiveChatTab('predictor')}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: activeChatTab === 'predictor' ? '3px solid var(--primary)' : 'none',
            padding: '10px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '700',
            color: activeChatTab === 'predictor' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          🔬 {strings.tabPredictor[language] || strings.tabPredictor['en']}
        </button>
      </div>

      {activeChatTab === 'chat' ? (
        /* =================== CHAT SYSTEM =================== */
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px' }} className="grid-2">
          
          {/* Left sessions column */}
          <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', height: '560px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {strings.sessions[language] || strings.sessions['en']}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', flexGrow: '1' }}>
              {chats.map(session => (
                <button
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '10px 12px',
                    border: 'none',
                    borderRadius: '8px',
                    background: activeSessionId === session.id ? 'var(--primary-light)' : 'transparent',
                    color: activeSessionId === session.id ? 'var(--primary)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: activeSessionId === session.id ? '600' : '500',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <MessageSquare size={14} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{session.title}</span>
                </button>
              ))}
            </div>

            <button 
              className="btn btn-secondary" 
              style={{ padding: '8px', width: '100%', justifyContent: 'center', fontSize: '12px' }}
              onClick={() => {
                const newId = `session-${chats.length + 1}`;
                setChats(prev => [...prev, { id: newId, title: `New Inquiry ${chats.length}`, messages: [] }]);
                setActiveSessionId(newId);
              }}
            >
              <Plus size={14} /> {strings.newConsult[language] || strings.newConsult['en']}
            </button>
          </div>

          {/* Right chat screen */}
          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '560px' }}>
            
            {/* Disclaimer Banner */}
            <div style={{ background: 'var(--primary-light)', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--accent-pink)', marginBottom: '16px', fontSize: '11px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} />
              <span>{strings.disclaimer[language] || strings.disclaimer['en']}</span>
            </div>

            {/* Message Viewport */}
            <div style={{ flexGrow: '1', overflowY: 'auto', paddingRight: '6px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {currentSession.messages.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
                  <Sparkles size={32} style={{ color: 'var(--primary)', marginBottom: '12px', animation: 'pulse 2s infinite' }} />
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>{strings.askAi[language] || strings.askAi['en']}</h4>
                  <p style={{ fontSize: '13px' }}>{strings.askDesc[language] || strings.askDesc['en']}</p>
                </div>
              ) : (
                currentSession.messages.map((msg, idx) => {
                  if (msg.isClinicalOverview) {
                    // Render premium clinical overview box
                    return (
                      <div key={idx} className="glass-panel slide-in" style={{ padding: '24px', maxWidth: '85%', alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: `6px solid ${msg.severityLevel === 'High' ? 'var(--danger)' : msg.severityLevel === 'Medium' ? 'var(--warning)' : 'var(--success)'}` }}>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
                          <div>
                            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{strings.possibleExp[language] || strings.possibleExp['en']}</span>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '16px', fontSize: '13px', color: 'var(--text-primary)', marginTop: '4px' }}>
                              {msg.possibleExplanations.map((exp, eIdx) => <li key={eIdx}>{exp}</li>)}
                            </ul>
                          </div>

                          <div style={{ background: msg.severityLevel === 'High' ? 'var(--danger-light)' : msg.severityLevel === 'Medium' ? 'var(--warning-light)' : 'var(--success-light)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block' }}>{strings.severity[language] || strings.severity['en']}</span>
                            <span style={{ fontSize: '20px', fontWeight: '800', color: msg.severityLevel === 'High' ? 'var(--danger)' : msg.severityLevel === 'Medium' ? 'var(--warning)' : 'var(--success)', display: 'block', marginTop: '2px' }}>
                              {msg.severityLevel}
                            </span>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', display: 'block', lineHeight: '1.2', marginTop: '4px' }}>{msg.severityDesc}</span>
                          </div>
                        </div>

                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                          <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>🥗 {strings.lifestyle[language] || strings.lifestyle['en']}</span>
                          <ul style={{ listStyleType: 'decimal', paddingLeft: '16px', fontSize: '13px', color: 'var(--text-primary)' }}>
                            {msg.lifestyleSuggestions.map((sug, sIdx) => <li key={sIdx}>{sug}</li>)}
                          </ul>
                        </div>

                        <div style={{ background: 'var(--bg-primary)', padding: '12px', borderRadius: '8px', borderLeft: '4px solid var(--secondary)', fontSize: '12px' }}>
                          <span style={{ fontWeight: '700', color: 'var(--secondary)' }}>🩺 {strings.expertRec[language] || strings.expertRec['en']} </span>
                          {msg.expertRecommendation}
                        </div>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          {msg.ctaActions?.map((cta, cIdx) => (
                            <button
                              key={cIdx}
                              className="btn btn-secondary"
                              style={{ padding: '6px 12px', fontSize: '11px' }}
                              onClick={() => {
                                if (cta.action === 'sos') setTab('sos');
                                else if (cta.action === 'diet') setTab('diet-fitness');
                                else alert(`Simulating consultation call setup for: "${strings[cta.label]?.[language] || strings[cta.label]?.['en'] || cta.label}"...`);
                              }}
                            >
                              {strings[cta.label]?.[language] || strings[cta.label]?.['en'] || cta.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <div key={idx} className={`chat-bubble ${msg.sender}`}>
                      {msg.text}
                    </div>
                  );
                })
              )}
              <div ref={chatEndRef}></div>
            </div>

            {/* Input Bar */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <input
                type="text"
                placeholder={strings.inputPlaceholder[language] || strings.inputPlaceholder['en']}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                style={{
                  flexGrow: '1',
                  padding: '12px 18px',
                  borderRadius: '30px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)'
                }}
              />
              <button className="btn btn-primary" style={{ padding: '12px', borderRadius: '50%' }} onClick={handleSendMessage}>
                <Send size={18} />
              </button>
            </div>

          </div>
        </div>
      ) : (
        /* =================== DISEASE PREDICTOR =================== */
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }} className="grid-2">
          
          {/* Prediction input form */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
              🔬 {strings.symptomProfile[language] || strings.symptomProfile['en']}
            </h3>

            <div className="grid-2">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{strings.yourAge[language] || strings.yourAge['en']}</span>
                <input 
                  type="number" 
                  value={formAge} 
                  onChange={(e) => setFormAge(e.target.value)}
                  style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{strings.cycleDays[language] || strings.cycleDays['en']}</span>
                <input 
                  type="number" 
                  value={formCycleDays} 
                  onChange={(e) => setFormCycleDays(e.target.value)}
                  style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{strings.enterSymptoms[language] || strings.enterSymptoms['en']}</span>
              <textarea
                placeholder={strings.placeholderSym[language] || strings.placeholderSym['en']}
                value={formSymptomInput}
                onChange={(e) => setFormSymptomInput(e.target.value)}
                style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '80px', resize: 'none', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{strings.medicalHistory[language] || strings.medicalHistory['en']}</span>
              <select
                value={formHistory}
                onChange={(e) => setFormHistory(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
              >
                <option value="none">{strings.optNone[language] || strings.optNone['en']}</option>
                <option value="PCOS">{strings.optPcos[language] || strings.optPcos['en']}</option>
                <option value="anemia">{strings.optAnemia[language] || strings.optAnemia['en']}</option>
                <option value="thyroid">{strings.optThyroid[language] || strings.optThyroid['en']}</option>
              </select>
            </div>

            <button className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={handlePredict}>
              {strings.generateReport[language] || strings.generateReport['en']} <TrendingUp size={16} />
            </button>
          </div>

          {/* Prediction report results */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: predictionResult ? 'flex-start' : 'center', minHeight: '400px' }}>
            {!predictionResult ? (
              <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                <Activity size={40} style={{ color: 'var(--secondary)', marginBottom: '12px' }} />
                <h4>{strings.pendingReport[language] || strings.pendingReport['en']}</h4>
                <p style={{ fontSize: '12px', padding: '0 40px' }}>{strings.pendingDesc[language] || strings.pendingDesc['en']}</p>
              </div>
            ) : (
              <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '18px' }}>🔍 {strings.aiDiagnostic[language] || strings.aiDiagnostic['en']}</h4>
                  <span style={{ fontSize: '11px', background: 'var(--primary-light)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>{strings.age[language] || strings.age['en']} {predictionResult.age}</span>
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase' }}>{strings.identifiedCond[language] || strings.identifiedCond['en']}</span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                    {predictionResult.conditions.map((cond, cIdx) => (
                      <span key={cIdx} style={{ background: 'var(--secondary-light)', color: 'var(--secondary)', padding: '4px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: '600' }}>
                        🏥 {cond}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--bg-primary)', padding: '12px 16px', borderRadius: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700' }}>{strings.aggRisk[language] || strings.aggRisk['en']}</span>
                  <span style={{ fontSize: '16px', fontWeight: '800', color: predictionResult.severity === 'High' ? 'var(--danger)' : predictionResult.severity === 'Medium' ? 'var(--warning)' : 'var(--success)' }}>
                    {predictionResult.severity}
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>🛡️ {strings.prevAction[language] || strings.prevAction['en']}</span>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {predictionResult.measures.map((m, idx) => <li key={idx}>{m}</li>)}
                  </ul>
                </div>

                <div style={{ background: 'var(--success-light)', borderLeft: '4px solid var(--success)', padding: '12px', borderRadius: '6px', fontSize: '12px' }}>
                  <span style={{ fontWeight: '700', color: 'var(--success)' }}>🌱 {strings.dailyRec[language] || strings.dailyRec['en']} </span>
                  {predictionResult.recovery.join(', ')}
                </div>

                <button className="btn btn-secondary" style={{ justifyContent: 'center' }} onClick={() => alert('Compiling doctor-ready clinical PDF... Download ready.')}>
                  📥 {strings.downloadPdf[language] || strings.downloadPdf['en']}
                </button>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
