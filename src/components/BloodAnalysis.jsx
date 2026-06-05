import React, { useState } from 'react';
import { Sparkles, Heart, AlertTriangle, HelpCircle } from 'lucide-react';

export default function BloodAnalysis({ language }) {
  const [filterType, setFilterType] = useState('all');

  const bloodColors = [
    {
      name: { en: 'Bright Red Blood', hi: 'चमकदार लाल रक्त', bn: 'উজ্জ্বল লাল রক্ত', ta: 'பிரகாசமான சிவப்பு இரத்தம்', te: 'ప్రకాశవంతమైన ఎరుపు రక్తం', mr: 'चमकदार लाल रक्त' },
      hex: 'hsl(355, 90%, 45%)',
      meaning: {
        en: 'Indicates fresh blood flowing quickly from the uterus.',
        hi: 'गर्भाशय से तेजी से बहने वाले ताजे रक्त को दर्शाता है।',
        bn: 'জরায়ু থেকে দ্রুত প্রবাহিত তাজা রক্ত নির্দেশ করে।',
        ta: 'கருப்பையிலிருந்து வேகமாக பாயும் புதிய இரத்தத்தை குறிக்கிறது.',
        te: 'గర్భాశయం నుండి వేగంగా ప్రవహించే తాజా రక్తాన్ని సూచిస్తుంది.',
        mr: 'गर्भाशयातून वेगाने वाहणारे ताजे रक्त दर्शवते.'
      },
      causes: {
        en: 'Common during the start or heavy days of a period when shedding is active.',
        hi: 'मासिक धर्म की शुरुआत या भारी दिनों में आम है जब शेडिंग सक्रिय होती है।',
        bn: 'পিরিয়ডের শুরু বা ভারী দিনগুলিতে সাধারণ যখন শেডিং সক্রিয় থাকে।',
        ta: 'மாதவிடாயின் தொடக்கம் அல்லது அதிக நாட்களில் பொதுவானது.',
        te: 'రుతుక్రమం ప్రారంభం లేదా భారీ రోజుల్లో సాధారణం.',
        mr: 'मासिक पाळीच्या सुरुवातीला किंवा जड दिवसांमध्ये सामान्य आहे.'
      },
      normal: {
        en: 'Standard period flow in almost all cycles.',
        hi: 'लगभग सभी चक्रों में मानक प्रवाह।',
        bn: 'প্রায় সব চক্রের আদর্শ পিরিয়ড প্রবাহ।',
        ta: 'கிட்டத்தட்ட அனைத்து சுழற்சிகளிலும் நிலையான ஓட்டம்.',
        te: 'దాదాపు అన్ని చక్రాలలో ప్రామాణిక ప్రవాహం.',
        mr: 'जवळपास सर्व चक्रांमध्ये मानक प्रवाह.'
      },
      warning: {
        en: 'If bleeding is extremely heavy (soaking >1 pad/hour) or accompanied by severe pain.',
        hi: 'यदि रक्तस्राव अत्यधिक भारी है (>1 पैड/घंटा) या गंभीर दर्द के साथ है।',
        bn: 'যদি রক্তপাত অত্যন্ত ভারী হয় (>১ প্যাড/ঘণ্টা) বা তীব্র ব্যথার সাথে থাকে।',
        ta: 'இரத்தப்போக்கு மிகவும் கடுமையாக இருந்தால் (>1 பேட்/மணி) அல்லது கடுமையான வலியுடன் இருந்தால்.',
        te: 'రక్తస్రావం చాలా ఎక్కువగా ఉంటే (>1 ప్యాడ్/గంట) లేదా తీవ్రమైన నొప్పితో ఉంటే.',
        mr: 'रक्तस्त्राव खूप जास्त असल्यास (>1 पॅड/तास) किंवा तीव्र वेदना होत असल्यास.'
      },
      severity: 'low'
    },
    {
      name: { en: 'Dark Red / Purple Blood', hi: 'गहरा लाल / बैंगनी रक्त', bn: 'গাঢ় লাল / বেগুনি রক্ত', ta: 'அடர் சிவப்பு / ஊதா இரத்தம்', te: 'ముదురు ఎరుపు / ఊదా రక్తం', mr: 'गडद लाल / जांभळे रक्त' },
      hex: 'hsl(340, 85%, 30%)',
      meaning: {
        en: 'Older blood that has stayed in the uterus longer and oxidized slightly.',
        hi: 'पुराना रक्त जो गर्भाशय में अधिक समय तक रहा और थोड़ा ऑक्सीकृत हुआ।',
        bn: 'পুরানো রক্ত যা জরায়ুতে বেশি সময় থাকে এবং কিছুটা অক্সিডাইজ হয়।',
        ta: 'கருப்பையில் நீண்ட நேரம் தங்கி சிறிது ஆக்ஸிஜனேற்றப்பட்ட பழைய இரத்தம்.',
        te: 'గర్భాశయంలో ఎక్కువ కాలం ఉండి కొద్దిగా ఆక్సీకరణం చెందిన పాత రక్తం.',
        mr: 'जुने रक्त जे गर्भाशयात जास्त काळ राहिले आणि थोडे ऑक्सिडाइज झाले.'
      },
      causes: {
        en: 'Common after waking up, or at the middle/end of the flow cycle.',
        hi: 'सोने के बाद जागने पर, या प्रवाह चक्र के मध्य/अंत में आम है।',
        bn: 'ঘুম থেকে ওঠার পর বা প্রবাহ চক্রের মাঝখানে/শেষে সাধারণ।',
        ta: 'தூங்கி எழுந்தவுடன் அல்லது ஓட்ட சுழற்சியின் நடுவில்/முடிவில் பொதுவானது.',
        te: 'నిద్రలేచిన తర్వాత లేదా ప్రవాహ చక్రం మధ్యలో/చివరిలో సాధారణం.',
        mr: 'झोपेतून उठल्यानंतर, किंवा प्रवाह चक्राच्या मध्य/शेवटी सामान्य आहे.'
      },
      normal: {
        en: 'Shedding older lining is a completely physiological, healthy cleaning process.',
        hi: 'पुरानी परत को हटाना पूरी तरह से शारीरिक, स्वस्थ सफाई प्रक्रिया है।',
        bn: 'পুরানো আস্তরণ বাদ দেওয়া সম্পূর্ণ স্বাস্থ্যকর পরিষ্কার প্রক্রিয়া।',
        ta: 'பழைய புறணியை அகற்றுவது முற்றிலும் ஆரோக்கியமான சுத்தம் செய்யும் செயல்முறையாகும்.',
        te: 'పాత పొరను వదిలించుకోవడం పూర్తిగా ఆరోగ్యకరమైన శుభ్రపరిచే ప్రక్రియ.',
        mr: 'जुने अस्तर काढून टाकणे ही पूर्णपणे शारीरिक, निरोगी स्वच्छता प्रक्रिया आहे.'
      },
      warning: {
        en: 'Standard; no warning unless clots are larger than a quarter.',
        hi: 'मानक; कोई चेतावनी नहीं जब तक कि थक्के एक सिक्के से बड़े न हों।',
        bn: 'স্ট্যান্ডার্ড; কোন সতর্কতা নেই যদি না জমাট বাঁধাগুলো একটি মুদ্রার চেয়ে বড় হয়।',
        ta: 'நிலையானது; கட்டிகள் ஒரு நாணயத்தை விட பெரிதாக இல்லாவிட்டால் எச்சரிக்கை இல்லை.',
        te: 'ప్రామాణికం; గడ్డలు నాణెం కంటే పెద్దవిగా ఉంటే తప్ప హెచ్చరిక లేదు.',
        mr: 'मानक; गुठळ्या नाण्यापेक्षा मोठ्या असल्याशिवाय कोणताही इशारा नाही.'
      },
      severity: 'low'
    },
    {
      name: { en: 'Brown / Black Blood', hi: 'भूरा / काला रक्त', bn: 'বাদামী / কালো রক্ত', ta: 'பழுப்பு / கருப்பு இரத்தம்', te: 'గోధుమ / నలుపు రక్తం', mr: 'तपकिरी / काळे रक्त' },
      hex: 'hsl(20, 60%, 20%)',
      meaning: {
        en: 'Highly oxidized old blood that took a long time to exit the body.',
        hi: 'अत्यधिक ऑक्सीकृत पुराना रक्त जिसे शरीर से बाहर निकलने में लंबा समय लगा।',
        bn: 'অত্যন্ত অক্সিডাইজড পুরানো রক্ত যা শরীর থেকে বের হতে দীর্ঘ সময় নেয়।',
        ta: 'அதிக அளவு ஆக்ஸிஜனேற்றப்பட்ட பழைய இரத்தம் உடலை விட்டு வெளியேற நீண்ட நேரம் எடுத்தது.',
        te: 'శరీరం నుండి బయటకు రావడానికి చాలా సమయం తీసుకున్న అధిక ఆక్సీకరణ పాత రక్తం.',
        mr: 'अत्यधिक ऑक्सिडाइज्ड जुने रक्त ज्याला शरीरातून बाहेर पडण्यास बराच वेळ लागला.'
      },
      causes: {
        en: 'Usually seen in the very first spotting days or last tail-end period days.',
        hi: 'आमतौर पर पहले स्पॉटिंग के दिनों या अंतिम टेल-एंड दिनों में देखा जाता है।',
        bn: 'সাধারণত প্রথম স্পটিং দিন বা শেষ পিরিয়ডের দিনগুলিতে দেখা যায়।',
        ta: 'பொதுவாக முதல் ஸ்பாட்டிங் நாட்கள் அல்லது கடைசி நாட்களில் காணப்படும்.',
        te: 'సాధారణంగా మొదటి మచ్చల రోజులు లేదా చివరి రోజుల్లో కనిపిస్తుంది.',
        mr: 'सहसा पहिल्या स्पॉटिंग दिवसांमध्ये किंवा शेवटच्या दिवसांमध्ये दिसून येते.'
      },
      normal: {
        en: 'Completely normal. It represents late discharge or leftover uterine clean-up.',
        hi: 'पूरी तरह से सामान्य। यह देर से डिस्चार्ज या बचे हुए गर्भाशय की सफाई का प्रतिनिधित्व करता है।',
        bn: 'সম্পূর্ণ স্বাভাবিক। এটি দেরিতে স্রাব বা জরায়ু পরিষ্কারের প্রতিনিধিত্ব করে।',
        ta: 'முற்றிலும் இயல்பானது. இது தாமதமான வெளியேற்றம் அல்லது கருப்பை சுத்தம் செய்வதைக் குறிக்கிறது.',
        te: 'పూర్తిగా సాధారణం. ఇది ఆలస్యంగా ఉత్సర్గ లేదా గర్భాశయ శుభ్రతను సూచిస్తుంది.',
        mr: 'पूर्णपणे सामान्य. हे उशिरा डिस्चार्ज किंवा गर्भाशयाच्या स्वच्छतेचे प्रतिनिधित्व करते.'
      },
      warning: {
        en: 'No medical concern unless foul-smelling or paired with continuous pelvic pain.',
        hi: 'कोई चिकित्सीय चिंता नहीं जब तक कि दुर्गंधयुक्त न हो या निरंतर पेल्विक दर्द न हो।',
        bn: 'দুর্গন্ধযুক্ত বা একটানা শ্রোণী ব্যথা না হলে কোন চিকিৎসা উদ্বেগ নেই।',
        ta: 'துர்நாற்றம் வீசும் அல்லது தொடர்ச்சியான இடுப்பு வலி இல்லாவிட்டால் எந்த மருத்துவ கவலையும் இல்லை.',
        te: 'దుర్వాసన లేదా నిరంతర పెల్విక్ నొప్పి తప్ప ఎటువంటి వైద్య ఆందోళన లేదు.',
        mr: 'दुर्गंधीयुक्त किंवा सतत पेल्विक वेदना असल्याशिवाय कोणतीही वैद्यकीय चिंता नाही.'
      },
      severity: 'low'
    },
    {
      name: { en: 'Pink Blood', hi: 'गुलाबी रक्त', bn: 'গোলাপী রক্ত', ta: 'இளஞ்சிவப்பு இரத்தம்', te: 'గులాబీ రక్తం', mr: 'गुलाबी रक्त' },
      hex: 'hsl(340, 75%, 70%)',
      meaning: {
        en: 'Blood diluted or mixed with fertile cervical fluid or vaginal discharge.',
        hi: 'रक्त जो उपजाऊ ग्रीवा द्रव या योनि स्राव के साथ मिश्रित हो गया है।',
        bn: 'রক্ত যা উর্বর জরায়ুর তরল বা যোনি স্রাবের সাথে মিশ্রিত হয়।',
        ta: 'இரத்தம் கருப்பை வாய் திரவம் அல்லது யோனி வெளியேற்றத்துடன் கலக்கப்படுகிறது.',
        te: 'రక్తం గర్భాశయ ద్రవం లేదా యోని ఉత్సర్గతో కలుపుతారు.',
        mr: 'रक्त जे सुपीक ग्रीवा द्रव किंवा योनि स्रावमध्ये मिसळले आहे.'
      },
      causes: {
        en: 'Low estrogen levels, ovulation spotting, light flow days, or early pregnancy implantation.',
        hi: 'कम एस्ट्रोजन स्तर, ओव्यूलेशन स्पॉटिंग, हल्के प्रवाह के दिन, या प्रारंभिक गर्भावस्था।',
        bn: 'কম ইস্ট্রোজেনের মাত্রা, ওভুলেশন স্পটিং, হালকা প্রবাহের দিন বা প্রাথমিক গর্ভাবস্থা।',
        ta: 'குறைந்த ஈஸ்ட்ரோஜன் அளவு, அண்டவிடுப்பின் ஸ்பாட்டிங், லேசான ஓட்ட நாட்கள் அல்லது ஆரம்பகால கர்ப்பம்.',
        te: 'తక్కువ ఈస్ట్రోజెన్ స్థాయిలు, అండోత్సర్గము మచ్చలు, తేలికపాటి ప్రవాహ రోజులు లేదా ప్రారంభ గర్భం.',
        mr: 'कमी इस्ट्रोजेन पातळी, ओव्हुलेशन स्पॉटिंग, हलके प्रवाहाचे दिवस किंवा लवकर गर्भधारणा.'
      },
      normal: {
        en: 'During ovulation windows (spotting) or start of light cycles.',
        hi: 'ओव्यूलेशन स्पॉटिंग या हल्के चक्र की शुरुआत के दौरान।',
        bn: 'ওভুলেশন স্পটিং বা হালকা চক্রের শুরুতে।',
        ta: 'அண்டவிடுப்பின் (ஸ்பாட்டிங்) போது அல்லது ஒளி சுழற்சியின் தொடக்கத்தில்.',
        te: 'అండోత్సర్గము (మచ్చలు) సమయంలో లేదా కాంతి చక్రం ప్రారంభంలో.',
        mr: 'ओव्हुलेशन (स्पॉटिंग) दरम्यान किंवा हलक्या सायकलच्या सुरूवातीस.'
      },
      warning: {
        en: 'If continuous, it might indicate low estrogen, hormonal imbalances, or vitamin deficiencies.',
        hi: 'यदि निरंतर है, तो यह कम एस्ट्रोजन या हार्मोनल असंतुलन का संकेत दे सकता है।',
        bn: 'অব্যাহত থাকলে এটি কম ইস্ট্রোজেন বা হরমোনের ভারসাম্যহীনতা নির্দেশ করতে পারে।',
        ta: 'தொடர்ச்சியாக இருந்தால், அது குறைந்த ஈஸ்ட்ரோஜன் அல்லது ஹார்மோன் ஏற்றத்தாழ்வைக் குறிக்கலாம்.',
        te: 'నిరంతరంగా ఉంటే, ఇది తక్కువ ఈస్ట్రోజెన్ లేదా హార్మోన్ల అసమతుల్యతను సూచిస్తుంది.',
        mr: 'सतत असल्यास, हे कमी इस्ट्रोजेन किंवा संप्रेरक असंतुलन दर्शवू शकते.'
      },
      severity: 'medium'
    },
    {
      name: { en: 'Orange Blood', hi: 'नारंगी रक्त', bn: 'কমলা রক্ত', ta: 'ஆரஞ்சு இரத்தம்', te: 'నారింజ రక్తం', mr: 'नारंगी रक्त' },
      hex: 'hsl(25, 85%, 55%)',
      meaning: {
        en: 'Blood mixed with cervical secretions, which can sometimes indicate a bacterial infection.',
        hi: 'रक्त ग्रीवा स्राव के साथ मिश्रित होता है, जो कभी-कभी संक्रमण का संकेत दे सकता है।',
        bn: 'রক্ত জরায়ুর ক্ষরণের সাথে মিশ্রিত হয়, যা কখনও কখনও সংক্রমণের ইঙ্গিত দিতে পারে।',
        ta: 'இரத்தம் கருப்பை வாய் சுரப்புடன் கலக்கப்படுகிறது, இது சில நேரங்களில் தொற்றுநோயைக் குறிக்கும்.',
        te: 'రక్తం గర్భాశయ స్రావాలతో కలుపుతారు, ఇది కొన్నిసార్లు ఇన్ఫెక్షన్‌ను సూచిస్తుంది.',
        mr: 'रक्त ग्रीवा स्रावात मिसळले जाते, जे कधीकधी संसर्ग दर्शवू शकते.'
      },
      causes: {
        en: 'Can be spotting, or associated with vaginitis/cervical infections.',
        hi: 'स्पॉटिंग हो सकती है, या वेजिनाइटिस/सर्वाइकल संक्रमण से जुड़ी हो सकती है।',
        bn: 'স্পটিং হতে পারে, বা ভ্যাজাইনাইটিস/সার্ভাইকাল সংক্রমণের সাথে যুক্ত হতে পারে।',
        ta: 'ஸ்பாட்டிங் ஆக இருக்கலாம் அல்லது வஜினினிடிஸ்/கர்ப்பப்பை வாய் தொற்றுகளுடன் தொடர்புடையதாக இருக்கலாம்.',
        te: 'మచ్చలు కావచ్చు లేదా వాగినిటిస్/గర్భాశయ ఇన్ఫెక్షన్‌లతో సంబంధం కలిగి ఉండవచ్చు.',
        mr: 'स्पॉटिंग असू शकते किंवा योनीसिस/ग्रीवा संसर्गाशी संबंधित असू शकते.'
      },
      normal: {
        en: 'Rarely normal; usually warrants verification.',
        hi: 'शायद ही कभी सामान्य; आमतौर पर सत्यापन की आवश्यकता होती है।',
        bn: 'খুব কমই স্বাভাবিক; সাধারণত যাচাই প্রয়োজন।',
        ta: 'அரிதாக சாதாரணமானது; வழக்கமாக சரிபார்ப்பு தேவைப்படுகிறது.',
        te: 'అరుదుగా సాధారణం; సాధారణంగా ధృవీకరణ అవసరం.',
        mr: 'क्वचितच सामान्य; सहसा पडताळणी आवश्यक असते.'
      },
      warning: {
        en: 'Highly recommended to check if paired with itching, burning during urination, or unusual odor.',
        hi: 'यदि खुजली, पेशाब के दौरान जलन या असामान्य गंध के साथ हो तो जांच करने की अत्यधिक सिफारिश की जाती है।',
        bn: 'চুলকানি, প্রস্রাবের সময় জ্বালা বা অস্বাভাবিক গন্ধ হলে চেক করার সুপারিশ করা হয়।',
        ta: 'அரிப்பு, சிறுநீர் கழிக்கும் போது எரிச்சல் அல்லது அசாதாரண வாசனை இருந்தால் சரிபார்க்க பரிந்துரைக்கப்படுகிறது.',
        te: 'దురద, మూత్రవిసర్జన సమయంలో మంట లేదా అసాధారణ వాసన ఉంటే తనిఖీ చేయాలని సిఫార్సు చేయబడింది.',
        mr: 'खाज सुटणे, लघवी करताना जळजळ किंवा असामान्य वास असल्यास तपासणी करण्याची शिफारस केली जाते.'
      },
      severity: 'high'
    },
    {
      name: { en: 'Gray Blood', hi: 'धूसर / ग्रे रक्त', bn: 'ধূসর রক্ত', ta: 'சாம்பல் இரத்தம்', te: 'బూడిద రక్తం', mr: 'ग्रे रक्त' },
      hex: 'hsl(0, 10%, 60%)',
      meaning: {
        en: 'A strong indicator of vaginal infections or potential pregnancy tissue passage.',
        hi: 'योनि संक्रमण या संभावित गर्भावस्था ऊतक मार्ग का एक मजबूत संकेतक।',
        bn: 'যোনি সংক্রমণ বা সম্ভাব্য গর্ভাবস্থার টিস্যু পাসের একটি শক্তিশালী সূচক।',
        ta: 'யோனி தொற்றுகள் அல்லது சாத்தியமான கர்ப்ப திசு பத்தியின் வலுவான காட்டி.',
        te: 'యోని అంటువ్యాధులు లేదా సంభావ్య గర్భం కణజాల మార్గానికి బలమైన సూచిక.',
        mr: 'योनिमार्गात संक्रमण किंवा संभाव्य गर्भधारणा ऊतक जाण्याचा मजबूत सूचक.'
      },
      causes: {
        en: 'Bacterial Vaginosis (BV), or potential miscarriage tissue.',
        hi: 'बैक्टीरियल वेजिनाइटिस (BV), या संभावित गर्भपात।',
        bn: 'ব্যাকটেরিয়াল ভ্যাজাইনোসিস (BV), বা সম্ভাব্য গর্ভপাতের টিস্যু।',
        ta: 'பாக்டீரியல் வஜினோசிஸ் (BV), அல்லது சாத்தியமான கருச்சிதைவு திசு.',
        te: 'బాక్టీరియల్ వాగినోసిస్ (BV), లేదా సంభావ్య గర్భస్రావం కణజాలం.',
        mr: 'बॅक्टेरियल व्हजायनोसिस (BV), किंवा संभाव्य गर्भपात ऊतक.'
      },
      normal: {
        en: 'Never normal. Warrants clinical checking.',
        hi: 'कभी भी सामान्य नहीं। चिकित्सीय जांच की आवश्यकता है।',
        bn: 'কখনই স্বাভাবিক নয়। ক্লিনিকাল চেকিং প্রয়োজন।',
        ta: 'ஒருபோதும் இயல்பானதல்ல. மருத்துவ பரிசோதனை தேவை.',
        te: 'ఎప్పుడూ సాధారణం కాదు. క్లినికల్ చెకింగ్ అవసరం.',
        mr: 'कधीही सामान्य नाही. क्लिनिकल तपासणी आवश्यक आहे.'
      },
      warning: {
        en: 'Seek immediate gynecological evaluation, especially if pregnant or experiencing severe cramping.',
        hi: 'तुरंत स्त्री रोग संबंधी मूल्यांकन की तलाश करें, खासकर यदि गर्भवती हैं या गंभीर ऐंठन है।',
        bn: 'অবিলম্বে গাইনোকোলজিকাল মূল্যায়ন করুন, বিশেষত যদি গর্ভবতী হন বা তীব্র ক্র্যাম্প অনুভব করেন।',
        ta: 'உடனடி மகளிர் மருத்துவ மதிப்பீட்டைத் தேடுங்கள், குறிப்பாக கர்ப்பமாக இருந்தால் அல்லது கடுமையான தசைப்பிடிப்பு ஏற்பட்டால்.',
        te: 'తక్షణ గైనకోలాజికల్ మూల్యాంకనాన్ని కోరండి, ముఖ్యంగా గర్భవతిగా ఉంటే లేదా తీవ్రమైన తిమ్మిరి ఉంటే.',
        mr: 'तात्काळ स्त्रीरोग मूल्यमापन घ्या, विशेषतः जर गरोदर असाल किंवा तीव्र पेटके येत असतील.'
      },
      severity: 'high'
    }
  ];

  const strings = {
    title: { en: 'Menstrual Blood Color Analyzer', hi: 'मासिक धर्म के रक्त रंग का विश्लेषण', bn: 'মেনস্ট্রুয়াল ব্লাড কালার অ্যানালাইজার', ta: 'மாதவிடாய் இரத்த நிற பகுப்பாய்வி', te: 'రుతు రక్త రంగు విశ్లేషణ', mr: 'मासिक पाळीच्या रक्ताचे रंग विश्लेषण' },
    desc: { en: 'The color of your menstrual blood provides critical biological insights into your hormones, cycle speed, and potential infections. Understand what is healthy and when to consult a doctor.', hi: 'आपके मासिक धर्म के रक्त का रंग आपके हार्मोन, चक्र की गति और संभावित संक्रमणों में महत्वपूर्ण जैविक अंतर्दृष्टि प्रदान करता है।', bn: 'আপনার মাসিকের রক্তের রঙ আপনার হরমোন, চক্রের গতি এবং সম্ভাব্য সংক্রমণ সম্পর্কে গুরুত্বপূর্ণ জৈবিক অন্তর্দৃষ্টি প্রদান করে।', ta: 'உங்கள் மாதவிடாய் இரத்தத்தின் நிறம் உங்கள் ஹார்மோன்கள், சுழற்சி வேகம் மற்றும் சாத்தியமான நோய்த்தொற்றுகள் பற்றிய முக்கியமான உயிரியல் நுண்ணறிவுகளை வழங்குகிறது.', te: 'మీ రుతు రక్త రంగు మీ హార్మోన్లు, చక్రం వేగం మరియు సంభావ్య ఇన్ఫెక్షన్ల గురించి ముఖ్యమైన జీవసంబంధమైన అంతర్దృష్టులను అందిస్తుంది.', mr: 'तुमच्या मासिक पाळीच्या रक्ताचा रंग तुमचे हार्मोन्स, सायकलचा वेग आणि संभाव्य संसर्गाबद्दल महत्त्वपूर्ण जैविक अंतर्दृष्टी देतो.' },
    allColors: { en: 'All Colors', hi: 'सभी रंग', bn: 'সব রং', ta: 'அனைத்து நிறங்களும்', te: 'అన్ని రంగులు', mr: 'सर्व रंग' },
    normalHealthy: { en: 'Normal / Healthy', hi: 'सामान्य / स्वस्थ', bn: 'স্বাভাবিক / সুস্থ', ta: 'சாதாரண / ஆரோக்கியமான', te: 'సాధారణం / ఆరోగ్యకరం', mr: 'सामान्य / निरोगी' },
    hormonalCheck: { en: 'Hormonal Check', hi: 'हार्मोनल जांच', bn: 'হরমোন চেক', ta: 'ஹார்மோன் சரிபார்ப்பு', te: 'హార్మోన్ల తనిఖీ', mr: 'हार्मोनल तपासणी' },
    medicalEval: { en: 'Medical Evaluation', hi: 'चिकित्सीय मूल्यांकन', bn: 'চিকিৎসা মূল্যায়ন', ta: 'மருத்துவ மதிப்பீடு', te: 'వైద్య మూల్యాంకనం', mr: 'वैद्यकीय मूल्यांकन' },
    statusLow: { en: 'Normal Clinical Status', hi: 'सामान्य नैदानिक स्थिति', bn: 'স্বাভাবিক ক্লিনিকাল স্ট্যাটাস', ta: 'சாதாரண மருத்துவ நிலை', te: 'సాధారణ క్లినికల్ స్థితి', mr: 'सामान्य क्लिनिकल स्थिती' },
    statusMedium: { en: 'Hormonal Variations', hi: 'हार्मोनल बदलाव', bn: 'হরমোনের তারতম্য', ta: 'ஹார்மோன் வேறுபாடுகள்', te: 'హార్మోన్ల వైవిధ్యాలు', mr: 'हार्मोनल बदल' },
    statusHigh: { en: 'Urgent Evaluation Recommended', hi: 'तत्काल मूल्यांकन की सिफारिश की गई', bn: 'জরুরী মূল্যায়ন সুপারিশ করা হয়', ta: 'அவசர மதிப்பீடு பரிந்துரைக்கப்படுகிறது', te: 'తక్షణ మూల్యాంకనం సిఫార్సు చేయబడింది', mr: 'तातडीचे मूल्यांकन सुचवले आहे' },
    meaningLabel: { en: '📖 Meaning & Biology', hi: '📖 अर्थ और जीव विज्ञान', bn: '📖 অর্থ এবং জীববিজ্ঞান', ta: '📖 பொருள் மற்றும் உயிரியல்', te: '📖 అర్థం మరియు జీవశాస్త్రం', mr: '📖 अर्थ आणि जीवशास्त्र' },
    causesLabel: { en: '💡 Common Causes', hi: '💡 सामान्य कारण', bn: '💡 সাধারণ কারণ', ta: '💡 பொதுவான காரணங்கள்', te: '💡 సాధారణ కారణాలు', mr: '💡 सामान्य कारणे' },
    normalLabel: { en: '✅ Normal Indicator', hi: '✅ सामान्य संकेतक', bn: '✅ সাধারণ সূচক', ta: '✅ சாதாரண காட்டி', te: '✅ సాధారణ సూచిక', mr: '✅ सामान्य सूचक' },
    warningLabel: { en: '⚠️ Seek Checking If', hi: '⚠️ जाँच करें यदि', bn: '⚠️ চেক করুন যদি', ta: '⚠️ சரிபார்க்கவும் என்றால்', te: '⚠️ తనిఖీ చేయండి ఉంటే', mr: '⚠️ तपासणी करा जर' }
  };

  const filteredColors = bloodColors.filter(color => {
    if (filterType === 'all') return true;
    return color.severity === filterType;
  });

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* 1. HEADER DESCRIPTION */}
      <div className="glass-panel" style={{ padding: '30px', textAlign: 'center', background: 'linear-gradient(to right, rgba(255, 240, 240, 0.4), rgba(255, 255, 255, 0.8))' }}>
        <h1 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '10px' }}>
          {strings.title[language] || strings.title['en']}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '14px' }}>
          {strings.desc[language] || strings.desc['en']}
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          {['all', 'low', 'medium', 'high'].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: filterType === type ? 'var(--primary)' : 'var(--border-color)',
                background: filterType === type ? 'var(--primary)' : 'var(--bg-secondary)',
                color: filterType === type ? 'white' : 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              {type === 'all' && (strings.allColors[language] || strings.allColors['en'])}
              {type === 'low' && (strings.normalHealthy[language] || strings.normalHealthy['en'])}
              {type === 'medium' && (strings.hormonalCheck[language] || strings.hormonalCheck['en'])}
              {type === 'high' && (strings.medicalEval[language] || strings.medicalEval['en'])}
            </button>
          ))}
        </div>
      </div>

      {/* 2. GRID OF COLOR CARDS */}
      <div className="grid-2">
        {filteredColors.map((color, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Top Drop & Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50% 50% 10% 50%', 
                  background: color.hex, 
                  transform: 'rotate(-45deg)', 
                  boxShadow: `0 4px 15px ${color.hex}40`,
                  border: '3px solid white'
                }}
              ></div>
              <div>
                <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>{color.name[language] || color.name['en']}</h3>
                <span 
                  style={{ 
                    fontSize: '11px', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    color: color.severity === 'low' ? 'var(--success)' : color.severity === 'medium' ? 'var(--warning)' : 'var(--danger)',
                    background: color.severity === 'low' ? 'var(--success-light)' : color.severity === 'medium' ? 'var(--warning-light)' : 'var(--danger-light)',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    display: 'inline-block',
                    marginTop: '4px'
                  }}
                >
                  {color.severity === 'low' ? (strings.statusLow[language] || strings.statusLow['en']) : color.severity === 'medium' ? (strings.statusMedium[language] || strings.statusMedium['en']) : (strings.statusHigh[language] || strings.statusHigh['en'])}
                </span>
              </div>
            </div>

            {/* Description details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px', fontSize: '13px' }}>
              <div>
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>{strings.meaningLabel[language] || strings.meaningLabel['en']}</span>
                <p style={{ color: 'var(--text-secondary)' }}>{color.meaning[language] || color.meaning['en']}</p>
              </div>

              <div>
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>{strings.causesLabel[language] || strings.causesLabel['en']}</span>
                <p style={{ color: 'var(--text-secondary)' }}>{color.causes[language] || color.causes['en']}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '4px' }}>
                <div style={{ background: 'var(--success-light)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(0, 200, 100, 0.1)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--success)', display: 'block', fontSize: '11px', textTransform: 'uppercase', marginBottom: '2px' }}>{strings.normalLabel[language] || strings.normalLabel['en']}</span>
                  <p style={{ color: 'var(--text-primary)', fontSize: '12px', lineHeight: '1.4' }}>{color.normal[language] || color.normal['en']}</p>
                </div>

                <div style={{ background: 'var(--danger-light)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(250, 50, 50, 0.1)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--danger)', display: 'block', fontSize: '11px', textTransform: 'uppercase', marginBottom: '2px' }}>{strings.warningLabel[language] || strings.warningLabel['en']}</span>
                  <p style={{ color: 'var(--text-primary)', fontSize: '12px', lineHeight: '1.4' }}>{color.warning[language] || color.warning['en']}</p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
