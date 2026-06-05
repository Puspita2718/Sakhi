import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Heart, Trash2, Droplet, Star, ShoppingBag } from 'lucide-react';

export default function HygieneHub({ language }) {
  const [subTab, setSubTab] = useState('hub'); // 'hub' or 'product'
  
  // Cost Calculator states
  const [padsUsedPerCycle, setPadsUsedPerCycle] = useState('15');
  const [costPerPad, setCostPerPad] = useState('10');

  const strings = {
    tabHub: { en: '📖 Hygiene Education Hub', hi: '📖 स्वच्छता शिक्षा हब', bn: '📖 স্বাস্থ্যবিধি শিক্ষা হাব', ta: '📖 சுகாதார கல்வி மையம்', te: '📖 పరిశుభ్రత విద్యా కేంద్రం', mr: '📖 स्वच्छता शिक्षण हब' },
    tabProd: { en: '🛍️ Menstrual Product System', hi: '🛍️ मासिक धर्म उत्पाद प्रणाली', bn: '🛍️ মাসিক পণ্য সিস্টেম', ta: '🛍️ மாதவிடாய் தயாரிப்பு அமைப்பு', te: '🛍️ ఋతు ఉత్పత్తి వ్యవస్థ', mr: '🛍️ मासिक पाळी उत्पादन प्रणाली' },
    guides: [
      { 
        title: { en: 'Menstrual Hygiene Guide', hi: 'मासिक धर्म स्वच्छता गाइड', bn: 'মাসিক স্বাস্থ্যবিধি গাইড', ta: 'மாதவிடாய் சுகாதார வழிகாட்டி', te: 'ఋతు పరిశుభ్రత గైడ్', mr: 'मासिक पाळी स्वच्छता मार्गदर्शक' },
        items: [
          { en: 'Change sanitary pads every 4-6 hours to prevent bacterial accumulation.', hi: 'बैक्टीरिया को जमा होने से रोकने के लिए हर 4-6 घंटे में सेनेटरी पैड बदलें।', bn: 'ব্যাকটেরিয়া জমা হওয়া রোধ করতে প্রতি 4-6 ঘন্টা অন্তর স্যানিটারি প্যাড পরিবর্তন করুন।', ta: 'பாக்டீரியா குவிவதைத் தடுக்க ஒவ்வொரு 4-6 மணிநேரத்திற்கும் சானிட்டரி பேட்களை மாற்றவும்.', te: 'బాక్టీరియా చేరకుండా నిరోధించడానికి ప్రతి 4-6 గంటలకు శానిటరీ ప్యాడ్‌లను మార్చండి.', mr: 'जीवाणू जमा होण्यापासून रोखण्यासाठी दर ४-६ तासांनी सॅनिटरी पॅड बदला.' },
          { en: 'Wash your hands thoroughly before and after handling any menstrual products.', hi: 'किसी भी मासिक धर्म उत्पाद को संभालने से पहले और बाद में अपने हाथों को अच्छी तरह धो लें।', bn: 'যেকোনো মাসিক পণ্য পরিচালনার আগে এবং পরে আপনার হাত ভালো করে ধুয়ে নিন।', ta: 'எந்தவொரு மாதவிடாய் தயாரிப்புகளையும் கையாளுவதற்கு முன்னும் பின்னும் உங்கள் கைகளை நன்கு கழுவுங்கள்.', te: 'ఏదైనా రుతుక్రమ ఉత్పత్తులను నిర్వహించడానికి ముందు మరియు తరువాత మీ చేతులను బాగా కడగాలి.', mr: 'कोणतीही मासिक पाळी उत्पादने हाताळण्यापूर्वी आणि नंतर आपले हात चांगले धुवा.' },
          { en: 'Dispose of used pads/tampons in designated waste bags; never flush them down toilets.', hi: 'उपयोग किए गए पैड/टैम्पोन को निर्दिष्ट अपशिष्ट बैग में निपटाएं; उन्हें कभी भी शौचालय में न बहाएं।', bn: 'নির্ধারিত বর্জ্যের ব্যাগে ব্যবহৃত প্যাড/ট্যাম্পনগুলি নিষ্পত্তি করুন; তাদের কখনও টয়লেটে ফ্লাশ করবেন না।', ta: 'பயன்படுத்தப்பட்ட பேடுகள்/டம்பான்களை நியமிக்கப்பட்ட கழிவுப் பைகளில் அப்புறப்படுத்துங்கள்; அவற்றை ஒருபோதும் கழிப்பறைகளில் வெளியேற்றாதீர்கள்.', te: 'ఉపయోగించిన ప్యాడ్‌లు/టాంపాన్‌లను నియమించబడిన వ్యర్థ సంచులలో పారవేయండి; వాటిని ఎప్పుడూ మరుగుదొడ్లలో ఫ్లష్ చేయవద్దు.', mr: 'वापरलेले पॅड/टॅम्पन्स नियुक्त कचऱ्याच्या पिशव्यांमध्ये विल्हेवाट लावा; त्यांना कधीही शौचालयात फ्लश करू नका.' }
        ]
      },
      { 
        title: { en: 'Vaginal Hygiene Guide', hi: 'योनि स्वच्छता गाइड', bn: 'যোনি স্বাস্থ্যবিধি গাইড', ta: 'பிறப்புறுப்பு சுகாதார வழிகாட்டி', te: 'యోని పరిశుభ్రత గైడ్', mr: 'योनी स्वच्छता मार्गदर्शक' },
        items: [
          { en: 'Wash the vulva daily using plain, warm water only. Avoid chemical washes or soaps.', hi: 'वल्वा को रोजाना सिर्फ सादे, गर्म पानी से धोएं। रासायनिक वॉश या साबुन से बचें।', bn: 'শুধুমাত্র সাধারণ, হালকা গরম জল ব্যবহার করে প্রতিদিন ভালভা ধুয়ে নিন। রাসায়নিক ধোয়া বা সাবান এড়িয়ে চলুন।', ta: 'சாதாரண, வெதுவெதுப்பான நீரை மட்டுமே பயன்படுத்தி தினமும் யோனியை கழுவவும். இரசாயன கழுவுதல் அல்லது சோப்புகளைத் தவிர்க்கவும்.', te: 'సాధారణ, వెచ్చని నీటిని మాత్రమే ఉపయోగించి ప్రతిరోజూ వల్వాను కడగాలి. రసాయన వాష్‌లు లేదా సబ్బులను నివారించండి.', mr: 'फक्त साध्या, कोमट पाण्याचा वापर करून योनीमार्गाला दररोज धुवा. रासायनिक वॉश किंवा साबण टाळा.' },
          { en: 'Wipe strictly from front to back after urinating or bowel movements.', hi: 'पेशाब या मल त्याग के बाद सख्ती से आगे से पीछे की ओर पोंछें।', bn: 'প্রস্রাব বা মলত্যাগের পর সামনে থেকে পিছনে কঠোরভাবে মুছুন।', ta: 'சிறுநீர் கழித்த பின் அல்லது குடல் அசைவுகளுக்குப் பிறகு கண்டிப்பாக முன்னிருந்து பின்னாகத் துடைக்கவும்.', te: 'మూత్రవిసర్జన లేదా ప్రేగు కదలికల తర్వాత ముందు నుండి వెనుకకు కఠినంగా తుడవండి.', mr: 'लघवी किंवा शौचानंतर कठोरपणे पुढून मागे पुसून घ्या.' },
          { en: 'Conduct a clinical inspection if experiencing grey or foul-smelling discharge.', hi: 'ग्रे या दुर्गंधयुक्त स्राव का अनुभव होने पर नैदानिक ​​निरीक्षण करें।', bn: 'ধূসর বা দুর্গন্ধযুক্ত স্রাবের সম্মুখীন হলে একটি ক্লিনিকাল পরিদর্শন পরিচালনা করুন।', ta: 'சாம்பல் அல்லது துர்நாற்றம் வீசும் வெளியேற்றத்தை அனுபவித்தால் மருத்துவ பரிசோதனையை மேற்கொள்ளுங்கள்.', te: 'బూడిద రంగు లేదా దుర్వాసనతో కూడిన ఉత్సర్గను అనుభవిస్తే క్లినికల్ తనిఖీని నిర్వహించండి.', mr: 'राखाडी किंवा दुर्गंधीयुक्त स्त्राव जाणवत असल्यास क्लिनिकल तपासणी करा.' }
        ]
      },
      { 
        title: { en: 'Underwear Care Guide', hi: 'अंडरवियर केयर गाइड', bn: 'অন্তর্বাস যত্ন গাইড', ta: 'உள்ளாடை பராமரிப்பு வழிகாட்டி', te: 'లోదుస్తుల సంరక్షణ గైడ్', mr: 'अंडरवेअर काळजी मार्गदर्शक' },
        items: [
          { en: 'Prefer 100% breathable organic cotton fabrics rather than synthetics.', hi: 'सिंथेटिक्स के बजाय 100% सांस लेने वाले जैविक कपास के कपड़े पसंद करें।', bn: 'সিন্থেটিক্সের পরিবর্তে 100% শ্বাস-প্রশ্বাসযোগ্য জৈব সুতির কাপড় পছন্দ করুন।', ta: 'செயற்கை இழைகளை விட 100% சுவாசிக்கக்கூடிய கரிம பருத்தி துணிகளை விரும்புங்கள்.', te: 'సింథటిక్స్ కంటే 100% శ్వాసక్రియ ఆర్గానిక్ కాటన్ ఫ్యాబ్రిక్స్‌కు ప్రాధాన్యత ఇవ్వండి.', mr: 'सिंथेटिक्स ऐवजी 100% श्वास घेण्यायोग्य सेंद्रिय सूती कपड्यांना प्राधान्य द्या.' },
          { en: 'Wash period garments separately in warm, mild detergent and sun dry.', hi: 'पीरियड के कपड़ों को अलग से गर्म, हल्के डिटर्जेंट से धोएं और धूप में सुखाएं।', bn: 'পিরিয়ডের পোশাকগুলো হালকা গরম ডিটারজেন্টে আলাদাভাবে ধুয়ে রোদে শুকিয়ে নিন।', ta: 'மாதவிடாய் ஆடைகளை தனித்தனியாக சூடான, லேசான சவர்க்காரத்தில் கழுவி வெயிலில் உலர வைக்கவும்.', te: 'పీరియడ్ వస్త్రాలను విడిగా వెచ్చని, తేలికపాటి డిటర్జెంట్‌లో కడగాలి మరియు ఎండలో ఆరబెట్టండి.', mr: 'मासिक पाळीचे कपडे कोमट, सौम्य डिटर्जंटमध्ये स्वतंत्रपणे धुवा आणि उन्हात वाळवा.' },
          { en: 'Replace all daily intimate garments once every six to nine months.', hi: 'हर छह से नौ महीने में एक बार सभी दैनिक अंतरंग कपड़ों को बदलें।', bn: 'প্রতি ছয় থেকে নয় মাসে একবার সব নিত্যদিনের অন্তরঙ্গ পোশাক প্রতিস্থাপন করুন।', ta: 'ஒவ்வொரு ஆறு முதல் ஒன்பது மாதங்களுக்கு ஒரு முறை தினசரி உள்ளாடைகளை மாற்றவும்.', te: 'ప్రతి ఆరు నుండి తొమ్మిది నెలలకు ఒకసారి రోజువారీ సన్నిహిత వస్త్రాలన్నింటినీ భర్తీ చేయండి.', mr: 'दर सहा ते नऊ महिन्यांनी एकदा सर्व दररोजचे अंतरंग कपडे बदला.' }
        ]
      }
    ],
    checklistTitle: { en: '📝 Daily Vaginal Hygiene Checklist', hi: '📝 दैनिक योनि स्वच्छता चेकलिस्ट', bn: '📝 দৈনিক যোনি স্বাস্থ্যবিধি চেকলিস্ট', ta: '📝 தினசரி பிறப்புறுப்பு சுகாதார சரிபார்ப்பு பட்டியல்', te: '📝 రోజువారీ యోని పరిశుభ్రత చెక్‌లిస్ట్', mr: '📝 दैनिक योनी स्वच्छता चेकलिस्ट' },
    checklist: [
      { en: 'Washed with warm water', hi: 'गर्म पानी से धोया', bn: 'গরম জল দিয়ে ধোয়া', ta: 'வெதுவெதுப்பான நீரால் கழுவப்பட்டது', te: 'వెచ్చని నీటితో కడుగుతారు', mr: 'कोमट पाण्याने धुतले' },
      { en: 'Worn dry organic cotton garments', hi: 'सूखे जैविक कपास के कपड़े पहने', bn: 'শুকনো জৈব সুতির পোশাক পরা', ta: 'உலர்ந்த கரிம பருத்தி ஆடைகளை அணிந்திருந்தார்', te: 'పొడి సేంద్రీయ పత్తి వస్త్రాలు ధరించారు', mr: 'कोरडे सेंद्रिय सूती कपडे परिधान केले' },
      { en: 'Drank at least 2.5L fluids', hi: 'कम से कम 2.5L तरल पदार्थ पिया', bn: 'কমপক্ষে 2.5 লিটার তরল পান করেছে', ta: 'குறைந்தது 2.5 எல் திரவங்களை குடித்தார்', te: 'కనీసం 2.5 ఎల్ ద్రవాలు త్రాగారు', mr: 'किमान २.५L द्रव प्याले' },
      { en: 'Logged flow parameters', hi: 'लॉग किए गए प्रवाह पैरामीटर', bn: 'প্রবাহ পরামিতি লগ করা হয়েছে', ta: 'ஓட்டம் அளவுருக்கள் பதிவு செய்யப்பட்டன', te: 'లాగిన్ చేయబడిన ప్రవాహ పారామితులు', mr: 'लॉग केलेले प्रवाह मापदंड' },
      { en: 'Completed gentle movement stretch', hi: 'कोमल गति खिंचाव पूरा किया', bn: 'মৃদু আন্দোলন প্রসারিত সম্পন্ন', ta: 'மென்மையான இயக்க நீட்டிப்பு முடிந்தது', te: 'సున్నితమైన కదలిక సాగదీయడం పూర్తయింది', mr: 'सौम्य हालचाल ताणणे पूर्ण झाले' }
    ],
    calcTitle: { en: '💰 Lifetime Menstrual Expense Calculator', hi: '💰 आजीवन मासिक धर्म व्यय कैलकुलेटर', bn: '💰 আজীবন মাসিক ব্যয় ক্যালকুলেটর', ta: '💰 வாழ்நாள் மாதவிடாய் செலவு கால்குலேட்டர்', te: '💰 జీవితకాల రుతుక్రమ వ్యయ కాలిక్యులేటర్', mr: '💰 आजीवन मासिक पाळी खर्च कॅल्क्युलेटर' },
    calcDesc: { en: 'Enter your current single-use pad usage and costs to discover how much you can save annually by transitioning to reusable products.', hi: 'पुन: प्रयोज्य उत्पादों में परिवर्तन करके आप सालाना कितनी बचत कर सकते हैं, यह जानने के लिए अपने वर्तमान एकल-उपयोग पैड के उपयोग और लागत दर्ज करें।', bn: 'পুনঃব্যবহারযোগ্য পণ্যগুলিতে রূপান্তর করে আপনি বার্ষিক কতটা সাশ্রয় করতে পারেন তা আবিষ্কার করতে আপনার বর্তমান একক-ব্যবহারের প্যাড ব্যবহার এবং খরচ লিখুন।', ta: 'மறுபயன்பாட்டு தயாரிப்புகளுக்கு மாறுவதன் மூலம் ஆண்டுதோறும் எவ்வளவு சேமிக்கலாம் என்பதைக் கண்டறிய உங்கள் தற்போதைய ஒருமுறை பயன்படுத்தும் பேட் பயன்பாடு மற்றும் செலவுகளை உள்ளிடவும்.', te: 'పునర్వినియోగ ఉత్పత్తులకు మారడం ద్వారా మీరు ఏటా ఎంత ఆదా చేయవచ్చో తెలుసుకోవడానికి మీ ప్రస్తుత సింగిల్ యూజ్ ప్యాడ్ వినియోగం మరియు ఖర్చులను నమోదు చేయండి.', mr: 'पुन्हा वापरण्यायोग्य उत्पादनांमध्ये संक्रमण करून तुम्ही दरवर्षी किती बचत करू शकता हे शोधण्यासाठी तुमचा सध्याचा सिंगल-युज पॅड वापर आणि खर्च प्रविष्ट करा.' },
    padsUsed: { en: 'Pads Used per cycle', hi: 'प्रति चक्र उपयोग किए गए पैड', bn: 'প্রতি চক্রে ব্যবহৃত প্যাড', ta: 'சுழற்சிக்கு பயன்படுத்தப்படும் பேடுகள்', te: 'చక్రానికి ఉపయోగించే ప్యాడ్‌లు', mr: 'प्रति सायकल वापरलेले पॅड' },
    costPer: { en: 'Average Cost per pad (INR)', hi: 'प्रति पैड औसत लागत (INR)', bn: 'প্রতি প্যাডের গড় খরচ (INR)', ta: 'ஒரு பேடின் சராசரி செலவு (INR)', te: 'ప్యాడ్‌కు సగటు ధర (INR)', mr: 'प्रति पॅड सरासरी किंमत (INR)' },
    annualPads: { en: 'Annual Disposable Pads Cost:', hi: 'वार्षिक डिस्पोजेबल पैड लागत:', bn: 'বার্ষিক নিষ্পত্তিযোগ্য প্যাড খরচ:', ta: 'ஆண்டு செலவழிக்கக்கூடிய பேடுகள் செலவு:', te: 'వార్షిక డిస్పోజబుల్ ప్యాడ్స్ ధర:', mr: 'वार्षिक डिस्पोजेबल पॅड्सची किंमत:' },
    annualCups: { en: 'Annual Menstrual Cup cost (Amortized):', hi: 'वार्षिक मासिक धर्म कप लागत (परिशोधित):', bn: 'বার্ষিক মাসিক কাপের খরচ (অ্যামোর্টাইজড):', ta: 'ஆண்டு மாதவிடாய் கோப்பை செலவு (அமோர்டைஸ்):', te: 'వార్షిక రుతుక్రమ కప్పు ధర (అమోర్టైజ్ చేయబడింది):', mr: 'वार्षिक मासिक पाळी कपची किंमत (अमोर्टाइज्ड):' },
    annualPanties: { en: 'Annual Period Panties cost (Amortized):', hi: 'वार्षिक अवधि पैंटी लागत (परिशोधित):', bn: 'বার্ষিক পিরিয়ড প্যান্টি খরচ (অ্যামোর্টাইজড):', ta: 'ஆண்டு மாதவிடாய் பேண்டீஸ் செலவு (அமோர்டைஸ்):', te: 'వార్షిక పీరియడ్ ప్యాంటీస్ ధర (అమోర్టైజ్ చేయబడింది):', mr: 'वार्षिक पीरियड पँटीजची किंमत (अमोर्टाइज्ड):' },
    savings: { en: 'Potential Annual Cup Savings:', hi: 'संभावित वार्षिक कप बचत:', bn: 'সম্ভাব্য বার্ষিক কাপ সঞ্চয়:', ta: 'சாத்தியமான ஆண்டு கோப்பை சேமிப்பு:', te: 'సంభావ్య వార్షిక కప్ పొదుపులు:', mr: 'संभाव्य वार्षिक कप बचत:' },
    products: [
      {
        name: { en: 'Sanitary Pads', hi: 'सेनेटरी पैड', bn: 'স্যানিটারি প্যাড', ta: 'சானிட்டரி பேடுகள்', te: 'శానిటరీ ప్యాడ్‌లు', mr: 'सॅनिटरी पॅड्स' },
        usage: { en: 'Standard adhesive placement inside underwear.', hi: 'अंडरवियर के अंदर मानक चिपकने वाला प्लेसमेंट।', bn: 'অন্তর্বাসের ভিতরে স্ট্যান্ডার্ড আঠালো বসানো।', ta: 'உள்ளாடைகளுக்குள் நிலையான பிசின் வாய்ப்பு.', te: 'లోదుస్తుల లోపల ప్రామాణిక అంటుకునే స్థానం.', mr: 'अंडरवेअरच्या आत मानक चिकट प्लेसमेंट.' },
        pros: { en: 'Widely accessible, simple application, no insertion required.', hi: 'व्यापक रूप से सुलभ, सरल अनुप्रयोग, कोई प्रविष्टि आवश्यक नहीं है।', bn: 'ব্যাপকভাবে অ্যাক্সেসযোগ্য, সহজ প্রয়োগ, কোন সন্নিবেশের প্রয়োজন নেই।', ta: 'பரவலாக அணுகக்கூடியது, எளிய பயன்பாடு, செருகுவது தேவையில்லை.', te: 'విస్తృతంగా అందుబాటులో ఉంటుంది, సాధారణ అప్లికేషన్, చొప్పించడం అవసరం లేదు.', mr: 'व्यापकपणे प्रवेश करण्यायोग्य, सोपा अनुप्रयोग, कोणतीही प्रविष्टी आवश्यक नाही.' },
        cons: { en: 'Generates non-biodegradable waste, risk of moisture rashes.', hi: 'गैर-बायोडिग्रेडेबल कचरा उत्पन्न करता है, नमी के चकत्ते का खतरा।', bn: 'অ-বায়োডিগ্রেডেবল বর্জ্য তৈরি করে, আর্দ্রতা ফুসকুড়ি হওয়ার ঝুঁকি।', ta: 'மக்கும் தன்மை இல்லாத கழிவுகளை உருவாக்குகிறது, ஈரப்பதம் வெடிப்புகள் ஏற்படும் அபாயம்.', te: 'బయోడిగ్రేడబుల్ కాని వ్యర్థాలను ఉత్పత్తి చేస్తుంది, తేమ దద్దుర్లు వచ్చే ప్రమాదం ఉంది.', mr: 'नॉन-बायोडिग्रेडेबल कचरा निर्माण करते, ओलावा पुरळ येण्याचा धोका.' },
        sustainability: { en: '1 / 5 (Poor)', hi: '1 / 5 (खराब)', bn: '1 / 5 (দরিদ্র)', ta: '1 / 5 (மோசமானது)', te: '1 / 5 (పేద)', mr: '1 / 5 (खराब)' }
      },
      {
        name: { en: 'Tampons', hi: 'टैम्पोन', bn: 'ট্যাম্পন', ta: 'டம்பான்கள்', te: 'టాంపాన్స్', mr: 'टॅम्पन्स' },
        usage: { en: 'Internal vaginal placement using plastic or cardboard applicator.', hi: 'प्लास्टिक या कार्डबोर्ड एप्लिकेटर का उपयोग करके आंतरिक योनि प्रविष्टि।', bn: 'প্লাস্টিক বা পিচবোর্ড আবেদনকারী ব্যবহার করে অভ্যন্তরীণ যোনি বসানো।', ta: 'பிளாஸ்டிக் அல்லது அட்டை விண்ணப்பதாரரைப் பயன்படுத்தி உள் யோனி வாய்ப்பு.', te: 'ప్లాస్టిక్ లేదా కార్డ్‌బోర్డ్ అప్లికేటర్‌ని ఉపయోగించి అంతర్గత యోని స్థానం.', mr: 'प्लास्टिक किंवा कार्डबोर्ड ऍप्लिकेटर वापरून अंतर्गत योनी मार्ग प्लेसमेंट.' },
        pros: { en: 'Discrete, perfect for physical movement and swimming.', hi: 'असतत, शारीरिक गति और तैराकी के लिए एकदम सही।', bn: 'বিচ্ছিন্ন, শারীরিক নড়াচড়া এবং সাঁতারের জন্য উপযুক্ত।', ta: 'தனித்துவமானது, உடல் இயக்கம் மற்றும் நீச்சலுக்கு ஏற்றது.', te: 'వివిక్త, శారీరక కదలికలు మరియు స్విమ్మింగ్ కోసం పర్ఫెక్ట్.', mr: 'स्वतंत्र, शारीरिक हालचाल आणि पोहण्यासाठी योग्य.' },
        cons: { en: 'Single-use plastic disposal, strict 4-8h replacement to avoid TSS.', hi: 'एकल-उपयोग प्लास्टिक निपटान, टीएसएस से बचने के लिए सख्त 4-8h प्रतिस्थापन।', bn: 'একক-ব্যবহারের প্লাস্টিক নিষ্পত্তি, টিএসএস এড়াতে কঠোর 4-8h প্রতিস্থাপন।', ta: 'ஒரு முறை பயன்படுத்தும் பிளாஸ்டிக் அகற்றல், டிஎஸ்எஸ்ஸைத் தவிர்க்க கடுமையான 4-8 மணி நேர மாற்றம்.', te: 'సింగిల్-యూజ్ ప్లాస్టిక్ పారవేయడం, టీఎస్‌ఎస్ నివారించడానికి కఠినమైన 4-8 గంటల భర్తీ.', mr: 'सिंगल-युज प्लास्टिक विल्हेवाट, टीएसएस टाळण्यासाठी कठोर 4-8 तास बदलण्याची आवश्यकता.' },
        sustainability: { en: '2 / 5 (Moderate)', hi: '2 / 5 (मध्यम)', bn: '2 / 5 (মাঝারি)', ta: '2 / 5 (மிதமானது)', te: '2 / 5 (మితమైన)', mr: '2 / 5 (मध्यम)' }
      },
      {
        name: { en: 'Menstrual Cups', hi: 'मासिक धर्म कप', bn: 'মাসিক কাপ', ta: 'மாதவிடாய் கோப்பைகள்', te: 'రుతుక్రమ కప్పులు', mr: 'मासिक पाळीचे कप' },
        usage: { en: 'Internal folding placement. Emptied every 8-12 hours.', hi: 'आंतरिक तह प्लेसमेंट। हर 8-12 घंटे में खाली किया जाता है।', bn: 'অভ্যন্তরীণ ভাঁজ বসানো। প্রতি 8-12 ঘন্টা খালি করা হয়।', ta: 'உள் மடிப்பு வாய்ப்பு. ஒவ்வொரு 8-12 மணிநேரத்திற்கும் காலியாகிறது.', te: 'అంతర్గత మడత స్థానం. ప్రతి 8-12 గంటలకు ఖాళీ చేయబడుతుంది.', mr: 'अंतर्गत फोल्डिंग प्लेसमेंट. दर 8-12 तासांनी रिकामे केले जाते.' },
        pros: { en: 'Extremely cost-effective, reusable for 5-10 years, zero chemical bleach.', hi: 'अत्यंत लागत-प्रभावी, 5-10 वर्षों के लिए पुन: प्रयोज्य, शून्य रासायनिक ब्लीच।', bn: 'অত্যন্ত সাশ্রয়ী, 5-10 বছরের জন্য পুনঃব্যবহারযোগ্য, শূন্য রাসায়নিক ব্লিচ।', ta: 'மிகவும் செலவு குறைந்த, 5-10 ஆண்டுகளுக்கு மீண்டும் பயன்படுத்தக்கூடிய, பூஜ்ஜிய இரசாயன ப்ளீச்.', te: 'అత్యంత ఖర్చుతో కూడుకున్నది, 5-10 సంవత్సరాల పాటు పునర్వినియోగపరచదగినది, సున్నా కెమికల్ బ్లీచ్.', mr: 'अत्यंत किफायतशीर, 5-10 वर्षांसाठी पुन्हा वापरण्यायोग्य, शून्य रासायनिक ब्लीच.' },
        cons: { en: 'Requires minor insertion learning curve, rinsing access needed.', hi: 'मामूली प्रविष्टि सीखने की अवस्था की आवश्यकता है, रिंसिंग एक्सेस की आवश्यकता है।', bn: 'ক্ষুদ্র সন্নিবেশ শেখার বক্ররেখা প্রয়োজন, ধুয়ে ফেলার অ্যাক্সেস প্রয়োজন।', ta: 'சிறிய செருகும் கற்றல் வளைவு தேவை, கழுவுதல் அணுகல் தேவை.', te: 'చిన్న చొప్పించే అభ్యాస వక్రత అవసరం, ప్రక్షాళన ప్రాప్యత అవసరం.', mr: 'किरकोळ अंतर्भूत शिकण्याची वक्र आवश्यक आहे, स्वच्छ धुण्याची आवश्यकता आहे.' },
        sustainability: { en: '5 / 5 (Excellent)', hi: '5 / 5 (उत्कृष्ट)', bn: '5 / 5 (চমৎকার)', ta: '5 / 5 (சிறப்பானது)', te: '5 / 5 (అద్భుతమైన)', mr: '5 / 5 (उत्कृष्ट)' }
      },
      {
        name: { en: 'Period Panties', hi: 'अवधि पैंटी', bn: 'পিরিয়ড প্যান্টি', ta: 'மாதவிடாய் பேண்டீஸ்', te: 'పీరియడ్ ప్యాంటీస్', mr: 'पीरियड पँटीज' },
        usage: { en: 'Worn directly as standard underwear containing absorbent layers.', hi: 'अवशोषक परतों वाले मानक अंडरवियर के रूप में सीधे पहना जाता है।', bn: 'শোষণকারী স্তর সম্বলিত স্ট্যান্ডার্ড আন্ডারওয়্যার হিসাবে সরাসরি পরা হয়।', ta: 'உறிஞ்சக்கூடிய அடுக்குகளைக் கொண்ட நிலையான உள்ளாடைகளாக நேரடியாக அணியப்படுகிறது.', te: 'శోషక పొరలను కలిగి ఉన్న ప్రామాణిక లోదుస్తులుగా నేరుగా ధరిస్తారు.', mr: 'शोषक स्तर असलेल्या मानक अंडरवेअर म्हणून थेट परिधान केले जाते.' },
        pros: { en: 'Reusable, zero insertion, highly comfortable for sleep.', hi: 'पुन: प्रयोज्य, शून्य प्रविष्टि, नींद के लिए अत्यधिक आरामदायक।', bn: 'পুনঃব্যবহারযোগ্য, শূন্য সন্নিবেশ, ঘুমের জন্য অত্যন্ত আরামদায়ক।', ta: 'மீண்டும் பயன்படுத்தக்கூடிய, பூஜ்ஜிய செருகுதல், தூக்கத்திற்கு மிகவும் வசதியானது.', te: 'పునర్వినియోగపరచదగినది, సున్నా చొప్పించడం, నిద్రకు అత్యంత సౌకర్యవంతంగా ఉంటుంది.', mr: 'पुन्हा वापरण्यायोग्य, शून्य अंतर्भूत, झोपेसाठी अत्यंत आरामदायक.' },
        cons: { en: 'Requires laundry washing, higher initial individual purchase cost.', hi: 'लॉन्ड्री धोने की आवश्यकता है, उच्च प्रारंभिक व्यक्तिगत खरीद लागत।', bn: 'লন্ড্রি ধোয়ার প্রয়োজন, উচ্চ প্রাথমিক ব্যক্তিগত ক্রয় খরচ।', ta: 'சலவை கழுவுதல் தேவை, அதிக ஆரம்ப தனிப்பட்ட கொள்முதல் செலவு.', te: 'లాండ్రీ వాషింగ్ అవసరం, అధిక ప్రారంభ వ్యక్తిగత కొనుగోలు ఖర్చు.', mr: 'लाँड्री धुणे आवश्यक आहे, जास्त प्रारंभिक वैयक्तिक खरेदी खर्च.' },
        sustainability: { en: '4.5 / 5 (Great)', hi: '4.5 / 5 (महान)', bn: '4.5 / 5 (মহান)', ta: '4.5 / 5 (சிறந்தது)', te: '4.5 / 5 (గొప్పది)', mr: '4.5 / 5 (महान)' }
      }
    ],
    sustLbl: { en: 'Sustainability', hi: 'स्थिरता', bn: 'স্থায়িত্ব', ta: 'நிலைத்தன்மை', te: 'స్థిరత్వం', mr: 'टिकाव' },
    appLbl: { en: 'Application', hi: 'अनुप्रयोग', bn: 'আবেদন', ta: 'விண்ணப்பம்', te: 'అప్లికేషన్', mr: 'अनुप्रयोग' },
    advLbl: { en: 'Advantages', hi: 'लाभ', bn: 'সুবিধাদি', ta: 'நன்மைகள்', te: 'ప్రయోజనాలు', mr: 'फायदे' },
    disadvLbl: { en: 'Disadvantages', hi: 'नुकसान', bn: 'অসুবিধা', ta: 'தீமைகள்', te: 'ప్రతికూలతలు', mr: 'तोटे' }
  };

  // Annual Cost Calculator Logic
  const padInt = parseInt(padsUsedPerCycle) || 15;
  const costInt = parseInt(costPerPad) || 10;
  
  const annualPadsCost = padInt * costInt * 12;
  const annualCupsCost = 350; // A cup costs ₹350 once and lasts 5 years (annualized = ₹70)
  const annualPantiesCost = 800; // 2 pairs of panties cost ₹800 and last 2 years (annualized = ₹400)

  const pointerStyle = 'pointer';

  return (
    <div className="slide-in flex flex-col gap-8">
      
      {/* Sub tabs */}
      <div className="flex border-b border-gray-150/40 dark:border-zinc-800 gap-5">
        <button 
          onClick={() => setSubTab('hub')}
          className={`bg-transparent border-none py-2.5 px-5 font-display text-base font-bold cursor-pointer transition-colors ${subTab === 'hub' ? 'border-b-3 border-feminine-pink text-feminine-pink' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          {strings.tabHub[language] || strings.tabHub['en']}
        </button>
        <button 
          onClick={() => setSubTab('product')}
          className={`bg-transparent border-none py-2.5 px-5 font-display text-base font-bold cursor-pointer transition-colors ${subTab === 'product' ? 'border-b-3 border-feminine-pink text-feminine-pink' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          {strings.tabProd[language] || strings.tabProd['en']}
        </button>
      </div>

      {subTab === 'hub' ? (
        /* =================== HYGIENE EDUCATION =================== */
        <div className="flex flex-col gap-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strings.guides.map((guide, idx) => (
              <div key={idx} className="glass-panel p-6 flex flex-col gap-4 text-left">
                <h3 className="text-base font-display font-extrabold text-feminine-pink flex items-center gap-2 border-b border-gray-150/40 dark:border-zinc-800 pb-2.5">
                  <ShieldCheck size={18} /> {guide.title[language] || guide.title['en']}
                </h3>
                <ul className="list-disc pl-4 text-sm flex flex-col gap-2.5 text-[var(--text-primary)] font-semibold leading-relaxed">
                  {guide.items.map((item, iIdx) => <li key={iIdx}>{item[language] || item['en']}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Checklist Card */}
          <div className="glass-panel p-8 bg-gradient-to-br from-feminine-pink/5 to-feminine-purple/5 dark:from-zinc-900 dark:to-zinc-900 border border-feminine-pink/20 text-left">
            <h3 className="font-display font-extrabold text-lg mb-4 text-center text-[var(--text-primary)]">
              {strings.checklistTitle[language] || strings.checklistTitle['en']}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {strings.checklist.map((item, idx) => (
                <label key={idx} className="bg-white/80 dark:bg-zinc-950/50 p-3.5 rounded-xl border border-gray-200 dark:border-zinc-800 flex items-center gap-3 cursor-pointer text-sm font-bold text-[var(--text-secondary)] hover:border-feminine-pink transition-colors shadow-xs">
                  <input type="checkbox" className="accent-feminine-pink w-4 h-4" />
                  {item[language] || item['en']}
                </label>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* =================== PRODUCT RECOMMENDER & CALCULATOR =================== */
        <div className="flex flex-col gap-10">
          
          {/* Cost Calculator Section */}
          <div className="glass-panel p-8 grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
            <div className="md:col-span-3 flex flex-col justify-center">
              <h3 className="font-display font-extrabold text-xl text-feminine-pink mb-2">
                {strings.calcTitle[language] || strings.calcTitle['en']}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-semibold mb-6">
                {strings.calcDesc[language] || strings.calcDesc['en']}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-[var(--text-secondary)]">{strings.padsUsed[language] || strings.padsUsed['en']}</span>
                  <input 
                    type="number" 
                    value={padsUsedPerCycle}
                    onChange={(e) => setPadsUsedPerCycle(e.target.value)}
                    className="p-2.5 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 text-sm font-semibold outline-none focus:border-feminine-pink transition-colors text-[var(--text-primary)]"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-[var(--text-secondary)]">{strings.costPer[language] || strings.costPer['en']}</span>
                  <input 
                    type="number" 
                    value={costPerPad}
                    onChange={(e) => setCostPerPad(e.target.value)}
                    className="p-2.5 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 text-sm font-semibold outline-none focus:border-feminine-pink transition-colors text-[var(--text-primary)]"
                  />
                </div>
              </div>
            </div>

            {/* Calculations display */}
            <div className="md:col-span-2 bg-white/80 dark:bg-zinc-950/80 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 flex flex-col gap-3 justify-center shadow-xs">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-[var(--text-secondary)]">{strings.annualPads[language] || strings.annualPads['en']}</span>
                <strong className="text-red-500 font-extrabold">₹{annualPadsCost}</strong>
              </div>
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-[var(--text-secondary)]">{strings.annualCups[language] || strings.annualCups['en']}</span>
                <strong className="text-emerald-500 font-extrabold">₹{annualCupsCost}</strong>
              </div>
              <div className="flex justify-between items-center text-sm font-bold border-b border-gray-150 dark:border-zinc-800 pb-2.5">
                <span className="text-[var(--text-secondary)]">{strings.annualPanties[language] || strings.annualPanties['en']}</span>
                <strong className="text-emerald-500 font-extrabold">₹{annualPantiesCost}</strong>
              </div>
              <div className="flex justify-between items-center text-base font-extrabold mt-1">
                <span className="text-feminine-purple">{strings.savings[language] || strings.savings['en']}</span>
                <strong className="text-emerald-500 text-xl">₹{annualPadsCost - annualCupsCost > 0 ? annualPadsCost - annualCupsCost : 0}</strong>
              </div>
            </div>
          </div>

          {/* Product matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {strings.products.map((prod, idx) => (
              <div key={idx} className="glass-panel p-6 flex flex-col gap-3.5">
                <div className="flex justify-between items-center border-b border-gray-150/50 dark:border-zinc-800 pb-2.5">
                  <h4 className="font-display font-extrabold text-lg text-[var(--text-primary)]">✨ {prod.name[language] || prod.name['en']}</h4>
                  <span className="text-[10px] bg-feminine-purple/10 text-feminine-purple px-2 py-1 rounded-full font-extrabold tracking-wide uppercase">
                    {strings.sustLbl[language] || strings.sustLbl['en']}: {prod.sustainability[language] || prod.sustainability['en']}
                  </span>
                </div>
                
                <div className="text-xs text-[var(--text-secondary)] flex flex-col gap-2 font-semibold leading-relaxed">
                  <div><strong className="text-[var(--text-primary)]">{strings.appLbl[language] || strings.appLbl['en']}:</strong> {prod.usage[language] || prod.usage['en']}</div>
                  <div><strong className="text-[var(--text-primary)]">{strings.advLbl[language] || strings.advLbl['en']}:</strong> {prod.pros[language] || prod.pros['en']}</div>
                  <div><strong className="text-[var(--text-primary)]">{strings.disadvLbl[language] || strings.disadvLbl['en']}:</strong> {prod.cons[language] || prod.cons['en']}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
