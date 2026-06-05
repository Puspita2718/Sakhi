import React, { useState } from 'react';
import { 
  Utensils, 
  Dumbbell, 
  Sparkles, 
  Check, 
  HelpCircle, 
  Play, 
  Compass, 
  ChevronRight,
  TrendingDown
} from 'lucide-react';

export default function DietGenerator({ language }) {
  const [subTab, setSubTab] = useState('diet'); 

  const [dietCondition, setDietCondition] = useState('PCOS');
  const [dietGoal, setDietGoal] = useState('weight_loss');
  const [dietPreference, setDietPreference] = useState('veg');
  const [dietBudget, setDietBudget] = useState('3000');
  const [generatedDiet, setGeneratedDiet] = useState(null);

  const [activeYogaCategory, setActiveYogaCategory] = useState('cramps');

  const handleGenerateDiet = () => {
    let meals = {};
    let swaps = [];
    let shopping = [];

    if (dietCondition === 'PCOS') {
      meals = {
        monday: { 
          b: { en: 'Avocado & Spinach Omelet', hi: 'एवोकैडो और पालक का आमलेट', bn: 'অ্যাভোকাডো এবং পালং শাকের অমলেট', ta: 'வெண்ணெய் மற்றும் கீரை ஆம்லெட்', te: 'అవోకాడో & బచ్చలికూర ఆమ్లెట్', mr: 'अवोकाडो आणि पालक ऑम्लेट' }, 
          l: { en: 'Quinoa Broccoli Bowl', hi: 'क्विनोआ ब्रोकली बाउल', bn: 'কুইনোয়া ব্রোকলি বাটি', ta: 'குயினோவா ப்ரோக்கோலி கிண்ணம்', te: 'క్వినోవా బ్రోకలీ బౌల్', mr: 'क्विनोआ ब्रोकोली बाऊल' }, 
          d: { en: 'Tofu stir-fry with brown rice', hi: 'ब्राउन राइस के साथ टोफू स्टिर-फ्राई', bn: 'ব্রাউন রাইস দিয়ে টোফু স্টির-ফ্রাই', ta: 'பழுப்பு அரிசியுடன் டோஃபு வறுக்கவும்', te: 'బ్రౌన్ రైస్‌తో టోఫు స్టైర్-ఫ్రై', mr: 'तपकिरी तांदूळ सह टोफू स्टिर-फ्राय' }, 
          s: { en: 'Flax seed yogurt', hi: 'अलसी का दही', bn: 'ফ্ল্যাক্স সিড দই', ta: 'ஆளி விதை தயிர்', te: 'ఫ్లాక్స్ సీడ్ పెరుగు', mr: 'जवस दही' } 
        },
        tuesday: { 
          b: { en: 'Chia Seed Pudding', hi: 'चिया बीज का हलवा', bn: 'চিয়া সিড পুডিং', ta: 'சியா விதை புட்டு', te: 'చియా సీడ్ పుడ్డింగ్', mr: 'चिया सीड पुडिंग' }, 
          l: { en: 'Lentil soup with spinach salad', hi: 'पालक सलाद के साथ दाल का सूप', bn: 'পালং শাক সালাদ দিয়ে মসুর ডাল', ta: 'கீரை சாலட்டுடன் பருப்பு சூப்', te: 'బచ్చలికూర సలాడ్‌తో పప్పు సూప్', mr: 'पालक सॅलडसह मसूर सूप' }, 
          d: { en: 'Roasted vegetables with chicken/paneer', hi: 'चिकन/पनीर के साथ भुनी हुई सब्जियां', bn: 'মুরগি/পনিরের সাথে ভাজা শাকসবজি', ta: 'கோழி/பனீருடன் வறுத்த காய்கறிகள்', te: 'చికెన్/పనీర్‌తో కాల్చిన కూరగాయలు', mr: 'चिकन/पनीर सोबत भाज्या' }, 
          s: { en: 'Almonds & green tea', hi: 'बादाम और ग्रीन टी', bn: 'বাদাম এবং গ্রিন টি', ta: 'பாதாம் மற்றும் கிரீன் டீ', te: 'బాదం & గ్రీన్ టీ', mr: 'बदाम आणि ग्रीन टी' } 
        },
        wednesday: { 
          b: { en: 'Oatmeal with almonds', hi: 'बादाम के साथ दलिया', bn: 'বাদাম দিয়ে ওটমিল', ta: 'பாதாம் உடன் ஓட்ஸ்', te: 'బాదంతో వోట్మీల్', mr: 'बदामासह ओटमील' }, 
          l: { en: 'Quinoa Broccoli Bowl', hi: 'क्विनोआ ब्रोकली बाउल', bn: 'কুইনোয়া ব্রোকলি বাটি', ta: 'குயினோவா ப்ரோக்கோலி கிண்ணம்', te: 'క్వినోవా బ్రోకలీ బౌల్', mr: 'क्विनोआ ब्रोकोली बाऊल' }, 
          d: { en: 'Tofu stir-fry with brown rice', hi: 'ब्राउन राइस के साथ टोफू स्टिर-फ्राई', bn: 'ব্রাউন রাইস দিয়ে টোফু স্টির-ফ্রাই', ta: 'பழுப்பு அரிசியுடன் டோஃபு வறுக்கவும்', te: 'బ్రౌన్ రైస్‌తో టోఫు స్టైర్-ఫ్రై', mr: 'तपकिरी तांदूळ सह टोफू स्टिर-फ्राय' }, 
          s: { en: 'Spearmint herbal tea', hi: 'स्पीयरमिंट हर्बल चाय', bn: 'স্পিয়ারমিন্ট ভেষজ চা', ta: 'ஸ்பியர்மின்ட் மூலிகை தேநீர்', te: 'స్పియర్‌మింట్ హెర్బల్ టీ', mr: 'स्पीअरमिंट हर्बल चहा' } 
        }
      };
      swaps = [
        { original: { en: 'Avocado', hi: 'एवोकैडो', bn: 'অ্যাভোকাডো', ta: 'வெண்ணெய்', te: 'అవోకాడో', mr: 'अवोकाडो' }, swap: { en: 'Local Spinaches / Eggs', hi: 'स्थानीय पालक / अंडे', bn: 'স্থানীয় পালং শাক / ডিম', ta: 'உள்ளூர் கீரை / முட்டை', te: 'స్థానిక బచ్చలికూర / గుడ్లు', mr: 'स्थानिक पालक / अंडी' }, saving: '₹150' },
        { original: { en: 'Chia Seeds', hi: 'चिया बीज', bn: 'চিয়া বীজ', ta: 'சியா விதைகள்', te: 'చియా విత్తనాలు', mr: 'चिया बिया' }, swap: { en: 'Flax Seeds (Alsi)', hi: 'अलसी के बीज', bn: 'ফ্ল্যাক্স সিডস (আলসি)', ta: 'ஆளி விதைகள்', te: 'ఫ్లాక్స్ విత్తనాలు', mr: 'जवस' }, saving: '₹120' }
      ];
      shopping = [
        { en: 'Quinoa', hi: 'क्विनोआ', bn: 'কুইনোয়া', ta: 'குயினோவா', te: 'క్వినోవా', mr: 'क्विनोआ' }, 
        { en: 'Tofu', hi: 'टोफू', bn: 'টোফু', ta: 'டோஃபு', te: 'టోఫు', mr: 'टोफू' }, 
        { en: 'Spinach', hi: 'पालक', bn: 'পালং শাক', ta: 'கீரை', te: 'బచ్చలికూర', mr: 'पालक' }, 
        { en: 'Broccoli', hi: 'ब्रोकली', bn: 'ব্রোকলি', ta: 'ப்ரோக்கோலி', te: 'బ్రోకలీ', mr: 'ब्रोकोली' }, 
        { en: 'Paneer', hi: 'पनीर', bn: 'পনির', ta: 'பனீர்', te: 'పనీర్', mr: 'पनीर' }, 
        { en: 'Flax Seeds', hi: 'अलसी के बीज', bn: 'ফ্ল্যাক্স সিড', ta: 'ஆளி விதைகள்', te: 'ఫ్లాక్స్ విత్తనాలు', mr: 'जवस' }, 
        { en: 'Spearmint Tea', hi: 'स्पीयरमिंट चाय', bn: 'স্পিয়ারমিন্ট চা', ta: 'ஸ்பியர்மின்ட் தேநீர்', te: 'స్పియర్‌మింట్ టీ', mr: 'स्पीअरमिंट चहा' }
      ];
    } else if (dietCondition === 'anemia') {
      meals = {
        monday: { 
          b: { en: 'Iron-fortified oats with strawberries', hi: 'स्ट्रॉबेरी के साथ आयरन-फोर्टिफाइड ओट्स', bn: 'স্ট্রবেরি দিয়ে আয়রন-ফর্টিফাইড ওটস', ta: 'ஸ்ட்ராபெர்ரிகளுடன் இரும்புச் செறிவூட்டப்பட்ட ஓட்ஸ்', te: 'స్ట్రాబెర్రీలతో ఐరన్-ఫోర్టిఫైడ్ వోట్స్', mr: 'स्ट्रॉबेरीसह लोहयुक्त ओट्स' }, 
          l: { en: 'Beetroot & lentil salad', hi: 'चुकंदर और दाल का सलाद', bn: 'বিটরুট এবং মসুর ডালের সালাদ', ta: 'பீட்ரூட் & பருப்பு சாலட்', te: 'బీట్‌రూట్ & పప్పు సలాడ్', mr: 'बीटरूट आणि मसूर सॅलड' }, 
          d: { en: 'Spinach chicken / Paneer curry', hi: 'पालक चिकन / पनीर करी', bn: 'পালং মুরগি / পনির তরকারি', ta: 'கீரை சிக்கன் / பனீர் குழம்பு', te: 'పాలకూర చికెన్ / పనీర్ కూర', mr: 'पालक चिकन / पनीर कढी' }, 
          s: { en: 'Pumpkin seeds', hi: 'कद्दू के बीज', bn: 'কুমড়োর বীজ', ta: 'பூசணி விதைகள்', te: 'గుమ్మడికాయ గింజలు', mr: 'भोपळ्याच्या बिया' } 
        },
        tuesday: { 
          b: { en: 'Scrambled eggs with pomegranate juice', hi: 'अनार के रस के साथ तले हुए अंडे', bn: 'ডালিমের রস দিয়ে স্ক্র্যাম্বলড ডিম', ta: 'மாதுளை சாறுடன் துருவிய முட்டை', te: 'దానిమ్మ రసంతో గిలకొట్టిన గుడ్లు', mr: 'डाळिंबाच्या रसासह स्क्रॅम्बल्ड अंडी' }, 
          l: { en: 'Red kidney beans (Rajma) with brown rice', hi: 'ब्राउन राइस के साथ राजमा', bn: 'ব্রাউন রাইস দিয়ে রাজমা', ta: 'பழுப்பு அரிசியுடன் ராஜ்மா', te: 'బ్రౌన్ రైస్‌తో రాజ్మా', mr: 'तपकिरी तांदूळ सोबत राजमा' }, 
          d: { en: 'Broccoli and tofu bowl', hi: 'ब्रोकोली और टोफू कटोरा', bn: 'ব্রোকলি এবং টোফু বাটি', ta: 'ப்ரோக்கோலி மற்றும் டோஃபு கிண்ணம்', te: 'బ్రోకలీ మరియు టోఫు బౌల్', mr: 'ब्रोकोली आणि टोफू बाऊल' }, 
          s: { en: 'Dates and cashews', hi: 'खजूर और काजू', bn: 'খেজুর এবং কাজু', ta: 'பேரீச்சம்பழம் மற்றும் முந்திரி', te: 'ఖర్జూరాలు మరియు జీడిపప్పు', mr: 'खजूर आणि काजू' } 
        },
        wednesday: { 
          b: { en: 'Iron-fortified oats with strawberries', hi: 'स्ट्रॉबेरी के साथ आयरन-फोर्टिफाइड ओट्स', bn: 'স্ট্রবেরি দিয়ে আয়রন-ফর্টিফাইড ওটস', ta: 'ஸ்ட்ராபெர்ரிகளுடன் இரும்புச் செறிவூட்டப்பட்ட ஓட்ஸ்', te: 'స్ట్రాబెర్రీలతో ఐరన్-ఫోర్టిఫైడ్ వోట్స్', mr: 'स्ट्रॉबेरीसह लोहयुक्त ओट्स' }, 
          l: { en: 'Beetroot & lentil salad', hi: 'चुकंदर और दाल का सलाद', bn: 'বিটরুট এবং মসুর ডালের সালাদ', ta: 'பீட்ரூட் & பருப்பு சாலட்', te: 'బీట్‌రూట్ & పప్పు సలాడ్', mr: 'बीटरूट आणि मसूर सॅलड' }, 
          d: { en: 'Spinach chicken / Paneer curry', hi: 'पालक चिकन / पनीर करी', bn: 'পালং মুরগি / পনির তরকারি', ta: 'கீரை சிக்கன் / பனீர் குழம்பு', te: 'పాలకూర చికెన్ / పనీర్ కూర', mr: 'पालक चिकन / पनीर कढी' }, 
          s: { en: 'Pumpkin seeds', hi: 'कद्दू के बीज', bn: 'কুমড়োর বীজ', ta: 'பூசணி விதைகள்', te: 'గుమ్మడికాయ గింజలు', mr: 'भोपळ्याच्या बिया' } 
        }
      };
      swaps = [
        { original: { en: 'Pomegranate', hi: 'अनार', bn: 'ডালিম', ta: 'மாதுளை', te: 'దానిమ్మ', mr: 'डाळिंब' }, swap: { en: 'Amla / Citrus Guavas', hi: 'आंवला / अमरूद', bn: 'আমলা / পেয়ারা', ta: 'நெல்லிக்காய் / கொய்யா', te: 'ఉసిరి / జామకాయలు', mr: 'आवळा / पेरू' }, saving: '₹100' },
        { original: { en: 'Pumpkin Seeds', hi: 'कद्दू के बीज', bn: 'কুমড়োর বীজ', ta: 'பூசணி விதைகள்', te: 'గుమ్మడికాయ గింజలు', mr: 'भोपळ्याच्या बिया' }, swap: { en: 'Sesame Seeds (Til)', hi: 'तिल', bn: 'তিল', ta: 'எள்', te: 'నువ్వులు', mr: 'तीळ' }, saving: '₹80' }
      ];
      shopping = [
        { en: 'Beetroot', hi: 'चुकंदर', bn: 'বিটরুট', ta: 'பீட்ரூட்', te: 'బీట్‌రూట్', mr: 'बीटरूट' }, 
        { en: 'Lentils', hi: 'दाल', bn: 'মসুর ডাল', ta: 'பருப்பு', te: 'పప్పు', mr: 'मसूर' }, 
        { en: 'Spinach', hi: 'पालक', bn: 'পালং শাক', ta: 'கீரை', te: 'బచ్చలికూర', mr: 'पालक' }, 
        { en: 'Dates', hi: 'खजूर', bn: 'খেজুর', ta: 'பேரீச்சம்பழம்', te: 'ఖర్జూరాలు', mr: 'खजूर' }, 
        { en: 'Eggs', hi: 'अंडे', bn: 'ডিম', ta: 'முட்டை', te: 'గుడ్లు', mr: 'अंडी' }, 
        { en: 'Rajma', hi: 'राजमा', bn: 'রাজমা', ta: 'ராஜ்மா', te: 'రాజ్మా', mr: 'राजमा' }, 
        { en: 'Broccoli', hi: 'ब्रोकली', bn: 'ব্রোকলি', ta: 'ப்ரோக்கோலி', te: 'బ్రోకలీ', mr: 'ब्रोकोली' }
      ];
    } else {
      meals = {
        monday: { 
          b: { en: 'Boiled egg and whole-wheat toast', hi: 'उबला हुआ अंडा और साबुत गेहूं का टोस्ट', bn: 'সেদ্ধ ডিম এবং পুরো-গমের টোস্ট', ta: 'வேகவைத்த முட்டை மற்றும் முழு கோதுமை டோஸ்ட்', te: 'ఉడికించిన గుడ్డు మరియు గోధుమ టోస్ట్', mr: 'उकडलेले अंडी आणि गव्हाचे टोस्ट' }, 
          l: { en: 'Mixed vegetable brown rice', hi: 'मिश्रित सब्जी ब्राउन राइस', bn: 'মিশ্র উদ্ভিজ্জ ব্রাউন রাইস', ta: 'கலப்பு காய்கறி பழுப்பு அரிசி', te: 'మిక్స్డ్ వెజిటబుల్ బ్రౌన్ రైస్', mr: 'मिश्रित भाजी तपकिरी तांदूळ' }, 
          d: { en: 'Grilled paneer with sautéed beans', hi: 'भुनी हुई बीन्स के साथ ग्रिल्ड पनीर', bn: 'ভাজা মটরশুটি দিয়ে গ্রিলড পনির', ta: 'வறுத்த பீன்ஸுடன் வறுக்கப்பட்ட பனீர்', te: 'వేయించిన బీన్స్‌తో పనీర్', mr: 'तळलेल्या बीन्ससह ग्रिल्ड पनीर' }, 
          s: { en: 'Walnuts', hi: 'अखरोट', bn: 'আখরোট', ta: 'அக்ரூட் பருப்புகள்', te: 'వాల్నట్', mr: 'अक्रोड' } 
        },
        tuesday: { 
          b: { en: 'Sprouted Moong salad', hi: 'अंकुरित मूंग सलाद', bn: 'অঙ্কুরিত মুগ সালাদ', ta: 'முளைக்கட்டிய பாசிப்பயறு சாலட்', te: 'మొలకెత్తిన పెసల సలాడ్', mr: 'मोड आलेली मूग कोशिंबीर' }, 
          l: { en: 'Whole-wheat roti with chickpea curry', hi: 'चना करी के साथ साबुत गेहूं की रोटी', bn: 'ছোলা তরকারির সাথে পুরো গমের রুটি', ta: 'கொண்டைக்கடலை கறியுடன் முழு கோதுமை ரொட்டி', te: 'శనగ కూరతో గోధుమ రోటీ', mr: 'हरभरा करी सोबत गव्हाची पोळी' }, 
          d: { en: 'Vegetable soup with paneer', hi: 'पनीर के साथ सब्जी का सूप', bn: 'পনিরের সাথে সবজি স্যুপ', ta: 'பனீருடன் காய்கறி சூப்', te: 'పనీర్ తో వెజిటబుల్ సూప్', mr: 'पनीरसह भाजीपाला सूप' }, 
          s: { en: 'Apple slice', hi: 'सेब का टुकड़ा', bn: 'আপেলের স্লাইস', ta: 'ஆப்பிள் துண்டு', te: 'ఆపిల్ ముక్క', mr: 'सफरचंद तुकडा' } 
        },
        wednesday: { 
          b: { en: 'Boiled egg and whole-wheat toast', hi: 'उबला हुआ अंडा और साबुत गेहूं का टोस्ट', bn: 'সেদ্ধ ডিম এবং পুরো-গমের টোস্ট', ta: 'வேகவைத்த முட்டை மற்றும் முழு கோதுமை டோஸ்ட்', te: 'ఉడికించిన గుడ్డు మరియు గోధుమ టోస్ట్', mr: 'उकडलेले अंडी आणि गव्हाचे टोस्ट' }, 
          l: { en: 'Mixed vegetable brown rice', hi: 'मिश्रित सब्जी ब्राउन राइस', bn: 'মিশ্র উদ্ভিজ্জ ব্রাউন রাইস', ta: 'கலப்பு காய்கறி பழுப்பு அரிசி', te: 'మిక్స్డ్ వెజిటబుల్ బ్రౌన్ రైస్', mr: 'मिश्रित भाजी तपकिरी तांदूळ' }, 
          d: { en: 'Grilled paneer with sautéed beans', hi: 'भुनी हुई बीन्स के साथ ग्रिल्ड पनीर', bn: 'ভাজা মটরশুটি দিয়ে গ্রিলড পনির', ta: 'வறுத்த பீன்ஸுடன் வறுக்கப்பட்ட பனீர்', te: 'వేయించిన బీన్స్‌తో పనీర్', mr: 'तळलेल्या बीन्ससह ग्रिल्ड पनीर' }, 
          s: { en: 'Walnuts', hi: 'अखरोट', bn: 'আখরোট', ta: 'அக்ரூட் பருப்புகள்', te: 'వాల్నట్', mr: 'अक्रोड' } 
        }
      };
      swaps = [
        { original: { en: 'Walnuts', hi: 'अखरोट', bn: 'আখরোট', ta: 'அக்ரூட் பருப்புகள்', te: 'వాల్నట్', mr: 'अक्रोड' }, swap: { en: 'Peanuts (Sengdana)', hi: 'मूंगफली', bn: 'চিনাবাদাম', ta: 'வேர்க்கடலை', te: 'వేరుశెనగ', mr: 'शेंगदाणे' }, saving: '₹200' }
      ];
      shopping = [
        { en: 'Brown Rice', hi: 'ब्राउन राइस', bn: 'ব্রাউন রাইস', ta: 'பழுப்பு அரிசி', te: 'బ్రౌన్ రైస్', mr: 'तपकिरी तांदूळ' }, 
        { en: 'Moong Sprouts', hi: 'मूंग अंकुरित', bn: 'মুগ ডাল', ta: 'பாசிப்பயறு', te: 'మొలకలు', mr: 'मूग मोड' }, 
        { en: 'Paneer', hi: 'पनीर', bn: 'পনির', ta: 'பனீர்', te: 'పనీర్', mr: 'पनीर' }, 
        { en: 'Whole-wheat bread', hi: 'साबुत गेहूं की ब्रेड', bn: 'পুরো গমের রুটি', ta: 'முழு கோதுமை ரொட்டி', te: 'గోధుమ బ్రెడ్', mr: 'गव्हाचा ब्रेड' }, 
        { en: 'Chickpeas', hi: 'छोले', bn: 'ছোলা', ta: 'கொண்டைக்கடலை', te: 'శనగలు', mr: 'हरभरा' }
      ];
    }

    setGeneratedDiet({
      condition: dietCondition,
      goal: dietGoal,
      preference: dietPreference,
      budget: dietBudget,
      meals,
      swaps,
      shopping
    });
  };

  const yogaExercises = {
    cramps: [
      { name: { en: "Child's Pose (Balasana)", hi: 'बालासन', bn: 'বালাসনা', ta: 'பாலாசனா', te: 'బాలాసన', mr: 'बालासन' }, desc: { en: 'Gently stretches the lower back muscles, relieving severe uterine cramping pressure.', hi: 'पीठ के निचले हिस्से की मांसपेशियों को धीरे से खींचता है, गर्भाशय में ऐंठन के दबाव से राहत देता है।', bn: 'আলতোভাবে পিঠের নিচের পেশী প্রসারিত করে, জরায়ুর ক্র্যাম্পিং চাপ উপশম করে।', ta: 'மெதுவாக கீழ் முதுகு தசைகளை நீட்டுகிறது, கடுமையான கருப்பை தசைப்பிடிப்பு அழுத்தத்தை குறைக்கிறது.', te: 'దిగువ వెనుక కండరాలను సున్నితంగా సాగదీస్తుంది, గర్భాశయ తిమ్మిరి ఒత్తిడిని తగ్గిస్తుంది.', mr: 'हळुवारपणे पाठीच्या खालच्या स्नायूंना ताणते, गर्भाशयाच्या पेटकेचा दबाव दूर करते.' }, duration: '5 Mins' },
      { name: { en: 'Cat-Cow Stretch (Marjaryasana)', hi: 'मार्जरी आसन', bn: 'মার্জারীয়াসন', ta: 'மார்ஜாரியாசனா', te: 'మార్జారియాసన', mr: 'मार्जरी आसन' }, desc: { en: 'Increases pelvic mobility and coordinates breathing to reduce spasm intensity.', hi: 'पेल्विक गतिशीलता बढ़ाता है और ऐंठन की तीव्रता को कम करने के लिए श्वास का समन्वय करता है।', bn: 'পেলভিক গতিশীলতা বাড়ায় এবং খিঁচুনি তীব্রতা কমাতে শ্বাস-প্রশ্বাসের সমন্বয় করে।', ta: 'இடுப்பு இயக்கத்தை அதிகரிக்கிறது மற்றும் பிடிப்பு தீவிரத்தை குறைக்க சுவாசத்தை ஒருங்கிணைக்கிறது.', te: 'పెల్విక్ చలనశీలతను పెంచుతుంది మరియు దుస్సంకోచం తీవ్రతను తగ్గించడానికి శ్వాసను సమన్వయం చేస్తుంది.', mr: 'पेल्विक गतिशीलता वाढवते आणि उबळ तीव्रता कमी करण्यासाठी श्वासोच्छ्वास समन्वयित करते.' }, duration: '3 Mins' },
      { name: { en: 'Bound Angle Pose (Baddha Konasana)', hi: 'बद्ध कोणासन', bn: 'বদ্ধ কোণাসনা', ta: 'பத்த கோனாசனா', te: 'బద్ధ కోణాసన', mr: 'बद्ध कोनासन' }, desc: { en: 'Stimulates ovaries, improves circulation throughout the pelvis, and relieves lower backache.', hi: 'अंडाशय को उत्तेजित करता है, श्रोणि में परिसंचरण में सुधार करता है, और पीठ के निचले हिस्से के दर्द से राहत देता है।', bn: 'ডিম্বাশয়কে উদ্দীপিত করে, পেলভিস জুড়ে রক্ত সঞ্চালন উন্নত করে এবং পিঠের নিচের ব্যথা উপশম করে।', ta: 'கருப்பையைத் தூண்டுகிறது, இடுப்பு முழுவதும் சுழற்சியை மேம்படுத்துகிறது மற்றும் கீழ் முதுகுவலியைக் குறைக்கிறது.', te: 'అండాశయాలను ప్రేరేపిస్తుంది, పెల్విస్ అంతటా రక్త ప్రసరణను మెరుగుపరుస్తుంది మరియు తక్కువ వెన్నునొప్పిని తగ్గిస్తుంది.', mr: 'अंडाशय उत्तेजित करते, श्रोणिमध्ये रक्ताभिसरण सुधारते आणि पाठदुखीपासून आराम देते.' }, duration: '4 Mins' }
    ],
    pcos: [
      { name: { en: 'Bridge Pose (Setu Bandhasana)', hi: 'सेतु बंधासन', bn: 'সেতু বন্ধাসনা', ta: 'சேது பந்தாசனா', te: 'సేతు బంధాసన', mr: 'सेतू बंधासन' }, desc: { en: 'Regulates thyroid function, stimulates endocrine organs, and tones pelvic muscles.', hi: 'थायराइड समारोह को नियंत्रित करता है, अंतःस्रावी अंगों को उत्तेजित करता है, और पेल्विक मांसपेशियों को टोन करता है।', bn: 'থাইরয়েড ফাংশন নিয়ন্ত্রণ করে, অন্তঃস্রাবী অঙ্গগুলিকে উদ্দীপিত করে এবং পেলভিক পেশীগুলিকে টোন করে।', ta: 'தைராய்டு செயல்பாட்டை ஒழுங்குபடுத்துகிறது, நாளமில்லா உறுப்புகளைத் தூண்டுகிறது மற்றும் இடுப்பு தசைகளைத் தொனிக்கிறது.', te: 'థైరాయిడ్ పనితీరును నియంత్రిస్తుంది, ఎండోక్రైన్ అవయవాలను ప్రేరేపిస్తుంది మరియు పెల్విక్ కండరాలను టోన్ చేస్తుంది.', mr: 'थायरॉईड कार्य नियंत्रित करते, अंतःस्रावी अवयवांना उत्तेजित करते आणि पेल्विक स्नायूंना टोन करते.' }, duration: '6 Mins' },
      { name: { en: 'Cobra Pose (Bhujangasana)', hi: 'भुजंगासन', bn: 'ভুজঙ্গাসনা', ta: 'புஜங்காசனா', te: 'భుజంగాసన', mr: 'भुजंगासन' }, desc: { en: 'Tones ovaries, stretches abdominal cavities, and aids digestion parameters.', hi: 'अंडाशय को टोन करता है, उदर गुहाओं को खींचता है, और पाचन मापदंडों में सहायता करता है।', bn: 'ডিম্বাশয় টোন করে, পেটের গহ্বর প্রসারিত করে এবং হজমের পরামিতিগুলিতে সহায়তা করে।', ta: 'கருப்பைகள், வயிற்று துவாரங்களை நீட்டுகிறது மற்றும் செரிமான அளவுருக்களுக்கு உதவுகிறது.', te: 'అండాశయాలను టోన్ చేస్తుంది, పొత్తికడుపు కావిటీస్ విస్తరిస్తుంది మరియు జీర్ణక్రియకు సహాయపడుతుంది.', mr: 'अंडाशय टोन करते, ओटीपोटातील पोकळी ताणते आणि पचनास मदत करते.' }, duration: '4 Mins' }
    ],
    stress: [
      { name: { en: 'Corpse Pose (Savasana)', hi: 'शवासन', bn: 'শবাসনা', ta: 'சவாசன', te: 'శవాసన', mr: 'शवासन' }, desc: { en: 'Induces deep neurological rest, lowers cortisol levels, and reduces heart rates.', hi: 'गहरे न्यूरोलॉजिकल आराम को प्रेरित करता है, कोर्टिसोल के स्तर को कम करता है, और हृदय गति को कम करता है।', bn: 'গভীর স্নায়বিক বিশ্রাম প্ররোচিত করে, কর্টিসলের মাত্রা কমায় এবং হৃদস্পন্দন হ্রাস করে।', ta: 'ஆழமான நரம்பியல் ஓய்வைத் தூண்டுகிறது, கார்டிசோலின் அளவைக் குறைக்கிறது மற்றும் இதயத் துடிப்பைக் குறைக்கிறது.', te: 'లోతైన నాడీ సంబంధిత విశ్రాంతిని ప్రేరేపిస్తుంది, కార్టిసాల్ స్థాయిలను తగ్గిస్తుంది మరియు హృదయ స్పందన రేటును తగ్గిస్తుంది.', mr: 'सखोल न्यूरोलॉजिकल विश्रांती प्रेरित करते, कॉर्टिसोलची पातळी कमी करते आणि हृदय गती कमी करते.' }, duration: '10 Mins' },
      { name: { en: 'Legs-Up-The-Wall (Viparita Karani)', hi: 'विपरीत करणी', bn: 'বিপরীত করণী', ta: 'விபரீத கரணி', te: 'విపరీత కరణి', mr: 'विपरीत करणी' }, desc: { en: 'Boosts lymphatic drainage, returns pooling blood, and relieves anxious muscle tension.', hi: 'लसीका जल निकासी को बढ़ाता है, जमा रक्त को वापस करता है, और चिंतित मांसपेशियों के तनाव से राहत देता है।', bn: 'লিম্ফ্যাটিক নিষ্কাশন বাড়ায়, পুলিং রক্ত ফেরত দেয় এবং উদ্বিগ্ন পেশীর টান উপশম করে।', ta: 'நிணநீர் வடிகட்டலை அதிகரிக்கிறது, இரத்தம் சேருவதை திருப்பித் தருகிறது மற்றும் கவலையான தசை பதற்றத்தை நீக்குகிறது.', te: 'శోషరస పారుదలని పెంచుతుంది, పూలింగ్ రక్తాన్ని తిరిగి ఇస్తుంది మరియు ఆత్రుతగా ఉన్న కండరాల ఉద్రిక్తతను తగ్గిస్తుంది.', mr: 'लिम्फॅटिक ड्रेनेज वाढवते, जमा झालेले रक्त परत करते आणि स्नायूंचा ताण कमी करते.' }, duration: '8 Mins' }
    ]
  };

  const stringsDict = {
    tabDiet: { en: '🍎 AI Diet Planner', hi: '🍎 AI आहार योजनाकार', bn: '🍎 এআই ডায়েট প্ল্যানার', ta: '🍎 ஏஐ டயட் பிளானர்', te: '🍎 ఏఐ డైట్ ప్లానర్', mr: '🍎 एआय आहार नियोजक' },
    tabFit: { en: '🧘‍♀️ Yoga & Fitness Hub', hi: '🧘‍♀️ योग और फिटनेस हब', bn: '🧘‍♀️ যোগ ও ফিটনেস হাব', ta: '🧘‍♀️ யோகா & உடற்பயிற்சி மையம்', te: '🧘‍♀️ యోగా & ఫిట్‌నెస్ హబ్', mr: '🧘‍♀️ योग आणि फिटनेस हब' },
    nutriPers: { en: '🍽️ Nutrition Personalization', hi: '🍽️ पोषण वैयक्तिकरण', bn: '🍽️ পুষ্টি ব্যক্তিগতকরণ', ta: '🍽️ ஊட்டச்சத்து தனிப்பயனாக்கம்', te: '🍽️ పోషకాహార వ్యక్తిగతీకరణ', mr: '🍽️ पोषण वैयक्तिकरण' },
    target: { en: 'Target Health Parameter', hi: 'लक्ष्य स्वास्थ्य पैरामीटर', bn: 'লক্ষ্য স্বাস্থ্য প্যারামিটার', ta: 'இலக்கு சுகாதார அளவுரு', te: 'లక్ష్య ఆరోగ్య పరామితి', mr: 'लक्ष्य आरोग्य पॅरामीटर' },
    pcosReg: { en: 'PCOS Regulation', hi: 'पीसीओएस विनियमन', bn: 'পিসিওএস নিয়ন্ত্রণ', ta: 'பிசிஓஎஸ் ஒழுங்குமுறை', te: 'పిసిఓఎస్ నియంత్రణ', mr: 'पीसीओएस नियमन' },
    anemiaMan: { en: 'Anemia Management', hi: 'एनीमिया प्रबंधन', bn: 'অ্যানিমিয়া ব্যবস্থাপনা', ta: 'இரத்த சோகை மேலாண்மை', te: 'అనీమియా నిర్వహణ', mr: 'अशक्तपणा व्यवस्थापन' },
    genWell: { en: 'General Wellness', hi: 'सामान्य कल्याण', bn: 'সাধারণ সুস্থতা', ta: 'பொது ஆரோக்கியம்', te: 'సాధారణ ఆరోగ్యం', mr: 'सामान्य कल्याण' },
    pregSup: { en: 'Pregnancy Support', hi: 'गर्भावस्था समर्थन', bn: 'গর্ভাবস্থার সহায়তা', ta: 'கர்ப்ப ஆதரவு', te: 'గర్భధారణ మద్దతు', mr: 'गर्भधारणा समर्थन' },
    weightGoal: { en: 'Weight Goal', hi: 'वजन लक्ष्य', bn: 'ওজন লক্ষ্য', ta: 'எடை இலக்கு', te: 'బరువు లక్ష్యం', mr: 'वजन ध्येय' },
    weightLoss: { en: 'Weight Loss Program', hi: 'वजन घटाने का कार्यक्रम', bn: 'ওজন কমানোর প্রোগ্রাম', ta: 'எடை இழப்பு திட்டம்', te: 'బరువు తగ్గించే కార్యక్రమం', mr: 'वजन कमी करण्याचा कार्यक्रम' },
    maintain: { en: 'Maintain Current Weight', hi: 'वर्तमान वजन बनाए रखें', bn: 'বর্তমান ওজন বজায় রাখুন', ta: 'தற்போதைய எடையை பராமரிக்கவும்', te: 'ప్రస్తుత బరువును నిర్వహించండి', mr: 'सध्याचे वजन राखा' },
    muscle: { en: 'Strength & Muscle Tone', hi: 'ताकत और स्नायु टोन', bn: 'শক্তি এবং পেশী টোন', ta: 'வலிமை & தசை தொனி', te: 'బలం & కండరాల టోన్', mr: 'शक्ती आणि स्नायू टोन' },
    foodPref: { en: 'Food Preference', hi: 'भोजन की प्राथमिकता', bn: 'খাবারের পছন্দ', ta: 'உணவு விருப்பம்', te: 'ఆహార ప్రాధాన్యత', mr: 'अन्न पसंती' },
    veg: { en: 'Vegetarian', hi: 'शाकाहारी', bn: 'নিরামিষ', ta: 'சைவம்', te: 'శాకాహారి', mr: 'शाकाहारी' },
    nonveg: { en: 'Non-Vegetarian', hi: 'मांसाहारी', bn: 'আমিষ', ta: 'அசைவம்', te: 'మాంసాహారి', mr: 'मांसाहारी' },
    vegan: { en: 'Vegan', hi: 'वीगन', bn: 'ভেগান', ta: 'சைவ உணவு', te: 'వీగన్', mr: 'शाकाहारी' },
    budget: { en: 'Monthly Food Budget (INR)', hi: 'मासिक खाद्य बजट (INR)', bn: 'মাসিক খাদ্য বাজেট (INR)', ta: 'மாதாந்திர உணவு பட்ஜெட் (INR)', te: 'నెలవారీ ఆహార బడ్జెట్ (INR)', mr: 'मासिक अन्न बजेट (INR)' },
    compileDiet: { en: 'Compile Meal Plan', hi: 'भोजन योजना संकलित करें', bn: 'খাবার পরিকল্পনা কম্পাইল করুন', ta: 'உணவு திட்டத்தை தொகுக்கவும்', te: 'భోజన ప్రణాళికను రూపొందించండి', mr: 'भोजन योजना संकलित करा' },
    pendingTitle: { en: 'Weekly Meal Program Pending', hi: 'साप्ताहिक भोजन कार्यक्रम लंबित', bn: 'সাপ্তাহিক খাবার প্রোগ্রাম মুলতুবি', ta: 'வாராந்திர உணவு திட்டம் நிலுவையில் உள்ளது', te: 'వారపు భోజన కార్యక్రమం పెండింగ్‌లో ఉంది', mr: 'साप्ताहिक भोजन कार्यक्रम प्रलंबित' },
    pendingDesc: { en: 'Set your target parameters and generate to view nutritional meal grids, shopping items, and cost saving swaps.', hi: 'अपने लक्ष्य पैरामीटर सेट करें और पोषण संबंधी भोजन ग्रिड, खरीदारी की वस्तुओं और लागत बचत स्वैप देखने के लिए उत्पन्न करें।', bn: 'আপনার লক্ষ্য পরামিতি সেট করুন এবং পুষ্টিকর খাবারের গ্রিড, কেনাকাটার আইটেম এবং খরচ সাশ্রয়ী অদলবদল দেখতে তৈরি করুন।', ta: 'உங்கள் இலக்கு அளவுருக்களை அமைத்து, ஊட்டச்சத்து உணவு கட்டங்கள், ஷாப்பிங் பொருட்கள் மற்றும் செலவு சேமிப்பு மாற்றங்களைக் காண உருவாக்கவும்.', te: 'మీ లక్ష్య పారామితులను సెట్ చేయండి మరియు పోషకమైన భోజన గ్రిడ్‌లు, షాపింగ్ అంశాలు మరియు ఖర్చు ఆదా మార్పిడులను వీక్షించడానికి రూపొందించండి.', mr: 'तुमचे लक्ष्य पॅरामीटर्स सेट करा आणि पौष्टिक आहार ग्रिड, खरेदीच्या वस्तू आणि खर्च बचत स्वॅप पाहण्यासाठी तयार करा.' },
    generatedFor: { en: 'Generated for: Budget ₹', hi: 'के लिए उत्पन्न: बजट ₹', bn: 'তৈরি করা হয়েছে: বাজেট ₹', ta: 'உருவாக்கப்பட்டது: பட்ஜெட் ₹', te: 'దీని కోసం రూపొందించబడింది: బడ్జెట్ ₹', mr: 'यासाठी व्युत्पन्न केले: बजेट ₹' },
    monthGoal: { en: '/Month • Goal: ', hi: '/महीना • लक्ष्य: ', bn: '/মাস • লক্ষ্য: ', ta: '/மாதம் • இலக்கு: ', te: '/నెల • లక్ష్యం: ', mr: '/महिना • ध्येय: ' },
    matrixTitle: { en: 'Weekly Meals Matrix', hi: 'साप्ताहिक भोजन मैट्रिक्स', bn: 'সাপ্তাহিক খাবার ম্যাট্রিক্স', ta: 'வாராந்திர உணவு அணி', te: 'వారపు భోజన మ్యాట్రిక్స్', mr: 'साप्ताहिक जेवण मॅट्रिक्स' },
    shopList: { en: '🛒 Ingredient Shopping List', hi: '🛒 सामग्री खरीदारी सूची', bn: '🛒 উপাদান কেনাকাটার তালিকা', ta: '🛒 மூலப்பொருள் ஷாப்பிங் பட்டியல்', te: '🛒 పదార్ధాల షాపింగ్ జాబితా', mr: '🛒 साहित्य खरेदी सूची' },
    ecoSwaps: { en: '💰 Local Economy Swaps', hi: '💰 स्थानीय अर्थव्यवस्था स्वैप', bn: '💰 স্থানীয় অর্থনীতির অদলবদল', ta: '💰 உள்ளூர் பொருளாதார மாற்றங்கள்', te: '💰 స్థానిక ఆర్థిక వ్యవస్థ మార్పిడి', mr: '💰 स्थानिक अर्थव्यवस्था स्वॅप' },
    replace: { en: 'Replace: ', hi: 'बदलें: ', bn: 'পরিবর্তন: ', ta: 'மாற்று: ', te: 'భర్తీ: ', mr: 'बदला: ' },
    swapWith: { en: 'Swap with: ', hi: 'के साथ स्वैप करें: ', bn: 'এর সাথে অদলবদল করুন: ', ta: 'இதனுடன் மாற்று: ', te: 'దీనితో మార్చు: ', mr: 'यासह स्वॅप करा: ' },
    save: { en: 'Save ', hi: 'बचाएं ', bn: 'সঞ্চয় ', ta: 'சேமி ', te: 'ఆదా ', mr: 'वाचवा ' },
    perItem: { en: ' / Item', hi: ' / वस्तु', bn: ' / আইটেম', ta: ' / பொருள்', te: ' / అంశం', mr: ' / वस्तू' },
    yogaHub: { en: '🧘‍♀️ Core Movement Routines', hi: '🧘‍♀️ कोर मूवमेंट रूटीन', bn: '🧘‍♀️ কোর মুভমেন্ট রুটিন', ta: '🧘‍♀️ கோர் மூவ்மென்ட் நடைமுறைகள்', te: '🧘‍♀️ కోర్ మూవ్మెంట్ రొటీన్స్', mr: '🧘‍♀️ कोर मूव्हमेंट रूटीन' },
    targetExc: { en: 'Target Exercise Category', hi: 'लक्ष्य व्यायाम श्रेणी', bn: 'লক্ষ্য ব্যায়াম বিভাগ', ta: 'இலக்கு உடற்பயிற்சி வகை', te: 'లక్ష్య వ్యాయామ వర్గం', mr: 'लक्ष्य व्यायाम श्रेणी' },
    catPain: { en: 'Period Pain Relief', hi: 'पीरियड दर्द से राहत', bn: 'পিরিয়ড ব্যথা উপশম', ta: 'மாதவிடாய் வலி நிவாரணம்', te: 'పీరియడ్ నొప్పి ఉపశమనం', mr: 'मासिक पाळीच्या वेदना आराम' },
    catPcos: { en: 'PCOS Management', hi: 'पीसीओएस प्रबंधन', bn: 'পিসিওএস ব্যবস্থাপনা', ta: 'பிசிஓஎஸ் மேலாண்மை', te: 'పిసిఓఎస్ నిర్వహణ', mr: 'पीसीओएस व्यवस्थापन' },
    catStress: { en: 'Stress Management', hi: 'तनाव प्रबंधन', bn: 'স্ট্রেস ম্যানেজমেন্ট', ta: 'மன அழுத்த மேலாண்மை', te: 'ఒత్తిడి నిర్వహణ', mr: 'तणाव व्यवस्थापन' },
    breathAssist: { en: '💨 Guided Breathing Assistant', hi: '💨 निर्देशित श्वास सहायक', bn: '💨 গাইডেড ব্রেথিং অ্যাসিস্ট্যান্ট', ta: '💨 வழிகாட்டப்பட்ட சுவாச உதவியாளர்', te: '💨 గైడెడ్ బ్రీతింగ్ అసిస్టెంట్', mr: '💨 मार्गदर्शित श्वासोच्छ्वास सहाय्यक' },
    breathe: { en: 'Breathe', hi: 'सांस लें', bn: 'শ্বাস নিন', ta: 'சுவாசி', te: 'గాలి పీల్చు', mr: 'श्वास घ्या' },
    breathDesc: { en: 'Follow the expanding ring for matching breathing cycles.', hi: 'सांस लेने के चक्र से मेल खाने के लिए विस्तार रिंग का पालन करें।', bn: 'শ্বাস-প্রশ্বাসের চক্রের সাথে মেলাতে প্রসারিত রিংটি অনুসরণ করুন।', ta: 'பொருந்தும் சுவாச சுழற்சிகளுக்கு விரிவடையும் வளையத்தைப் பின்தொடரவும்.', te: 'శ్వాస చక్రాలను సరిపోల్చడానికి విస్తరిస్తున్న రింగ్‌ను అనుసరించండి.', mr: 'श्वासोच्छवासाच्या चक्रांशी जुळण्यासाठी विस्तारणाऱ्या रिंगचे अनुसरण करा.' },
    posesList: { en: '🌸 Recommended Poses List', hi: '🌸 अनुशंसित आसन सूची', bn: '🌸 প্রস্তাবিত ভঙ্গি তালিকা', ta: '🌸 பரிந்துரைக்கப்பட்ட போஸ் பட்டியல்', te: '🌸 సిఫార్సు చేయబడిన భంగిమల జాబితా', mr: '🌸 शिफारस केलेली आसने यादी' },
    targetRelief: { en: '🔥 Target Relief Time: ', hi: '🔥 लक्ष्य राहत समय: ', bn: '🔥 লক্ষ্য ত্রাণ সময়: ', ta: '🔥 இலக்கு நிவாரண நேரம்: ', te: '🔥 లక్ష్య ఉపశమన సమయం: ', mr: '🔥 लक्ष्य आराम वेळ: ' }
  };

  return (
    <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Tab select: Diet vs Fitness */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', gap: '20px' }}>
        <button 
          onClick={() => setSubTab('diet')}
          style={{ background: 'none', border: 'none', borderBottom: subTab === 'diet' ? '3px solid var(--primary)' : 'none', padding: '10px 20px', fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: subTab === 'diet' ? 'var(--primary)' : 'var(--text-secondary)', cursor: pointerStyle }}
        >
          {stringsDict.tabDiet[language] || stringsDict.tabDiet['en']}
        </button>
        <button 
          onClick={() => setSubTab('fitness')}
          style={{ background: 'none', border: 'none', borderBottom: subTab === 'fitness' ? '3px solid var(--primary)' : 'none', padding: '10px 20px', fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: subTab === 'fitness' ? 'var(--primary)' : 'var(--text-secondary)', cursor: pointerStyle }}
        >
          {stringsDict.tabFit[language] || stringsDict.tabFit['en']}
        </button>
      </div>

      {subTab === 'diet' ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px' }} className="grid-2">
          
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
              {stringsDict.nutriPers[language] || stringsDict.nutriPers['en']}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{stringsDict.target[language] || stringsDict.target['en']}</span>
              <select value={dietCondition} onChange={(e) => setDietCondition(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <option value="PCOS">{stringsDict.pcosReg[language] || stringsDict.pcosReg['en']}</option>
                <option value="anemia">{stringsDict.anemiaMan[language] || stringsDict.anemiaMan['en']}</option>
                <option value="general">{stringsDict.genWell[language] || stringsDict.genWell['en']}</option>
                <option value="pregnancy">{stringsDict.pregSup[language] || stringsDict.pregSup['en']}</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{stringsDict.weightGoal[language] || stringsDict.weightGoal['en']}</span>
              <select value={dietGoal} onChange={(e) => setDietGoal(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <option value="weight_loss">{stringsDict.weightLoss[language] || stringsDict.weightLoss['en']}</option>
                <option value="maintain">{stringsDict.maintain[language] || stringsDict.maintain['en']}</option>
                <option value="muscle">{stringsDict.muscle[language] || stringsDict.muscle['en']}</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{stringsDict.foodPref[language] || stringsDict.foodPref['en']}</span>
              <select value={dietPreference} onChange={(e) => setDietPreference(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <option value="veg">{stringsDict.veg[language] || stringsDict.veg['en']}</option>
                <option value="nonveg">{stringsDict.nonveg[language] || stringsDict.nonveg['en']}</option>
                <option value="vegan">{stringsDict.vegan[language] || stringsDict.vegan['en']}</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{stringsDict.budget[language] || stringsDict.budget['en']}</span>
              <input type="number" value={dietBudget} onChange={(e) => setDietBudget(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
            </div>

            <button className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={handleGenerateDiet}>
              {stringsDict.compileDiet[language] || stringsDict.compileDiet['en']} <Sparkles size={16} />
            </button>
          </div>

          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: generatedDiet ? 'flex-start' : 'center', minHeight: '400px' }}>
            {!generatedDiet ? (
              <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                <Utensils size={40} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                <h4>{stringsDict.pendingTitle[language] || stringsDict.pendingTitle['en']}</h4>
                <p style={{ fontSize: '12px', padding: '0 40px' }}>{stringsDict.pendingDesc[language] || stringsDict.pendingDesc['en']}</p>
              </div>
            ) : (
              <div className="slide-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '12px' }}>
                  <h4 style={{ fontSize: '18px', color: 'var(--primary)' }}>
                    🥗 Personalized {generatedDiet.condition.toUpperCase()} Program
                  </h4>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{stringsDict.generatedFor[language] || stringsDict.generatedFor['en']}{generatedDiet.budget}{stringsDict.monthGoal[language] || stringsDict.monthGoal['en']}{generatedDiet.goal.replace('_', ' ')}</span>
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{stringsDict.matrixTitle[language] || stringsDict.matrixTitle['en']}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {Object.keys(generatedDiet.meals).map(day => (
                      <div key={day} style={{ background: 'var(--bg-primary)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>{day}</span>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', fontSize: '11px' }}>
                          <div><strong style={{ display: 'block' }}>B:</strong> {generatedDiet.meals[day].b[language] || generatedDiet.meals[day].b['en']}</div>
                          <div><strong style={{ display: 'block' }}>L:</strong> {generatedDiet.meals[day].l[language] || generatedDiet.meals[day].l['en']}</div>
                          <div><strong style={{ display: 'block' }}>D:</strong> {generatedDiet.meals[day].d[language] || generatedDiet.meals[day].d['en']}</div>
                          <div><strong style={{ display: 'block' }}>S:</strong> {generatedDiet.meals[day].s[language] || generatedDiet.meals[day].s['en']}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{stringsDict.shopList[language] || stringsDict.shopList['en']}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {generatedDiet.shopping.map((item, idx) => (
                        <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-primary)', cursor: pointerStyle }}>
                          <input type="checkbox" style={{ accentColor: 'var(--primary)' }} />
                          {item[language] || item['en']}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{stringsDict.ecoSwaps[language] || stringsDict.ecoSwaps['en']}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {generatedDiet.swaps.map((swp, idx) => (
                        <div key={idx} style={{ background: 'var(--success-light)', border: '1px solid rgba(0, 200, 100, 0.1)', padding: '8px 10px', borderRadius: '8px', fontSize: '11px' }}>
                          <span style={{ fontWeight: '700', color: 'var(--success)', display: 'block' }}>{stringsDict.replace[language] || stringsDict.replace['en']}{swp.original[language] || swp.original['en']}</span>
                          <span style={{ color: 'var(--text-primary)', display: 'block' }}>{stringsDict.swapWith[language] || stringsDict.swapWith['en']}{swp.swap[language] || swp.swap['en']}</span>
                          <span style={{ fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginTop: '2px' }}>{stringsDict.save[language] || stringsDict.save['en']}{swp.saving}{stringsDict.perItem[language] || stringsDict.perItem['en']}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}
          </div>

        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px' }} className="grid-2">
          
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', width: '100%' }}>
              {stringsDict.yogaHub[language] || stringsDict.yogaHub['en']}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{stringsDict.targetExc[language] || stringsDict.targetExc['en']}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'cramps', label: stringsDict.catPain },
                  { id: 'pcos', label: stringsDict.catPcos },
                  { id: 'stress', label: stringsDict.catStress }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveYogaCategory(cat.id)}
                    style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid', borderColor: activeYogaCategory === cat.id ? 'var(--primary)' : 'var(--border-color)', background: activeYogaCategory === cat.id ? 'var(--primary-light)' : 'transparent', color: activeYogaCategory === cat.id ? 'var(--primary)' : 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '600', cursor: pointerStyle, transition: 'var(--transition)', textAlign: 'left' }}
                  >
                    {cat.label[language] || cat.label['en']}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', width: '100%', textAlign: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
                {stringsDict.breathAssist[language] || stringsDict.breathAssist['en']}
              </span>
              <div className="breathe-animation" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', margin: '0 auto 12px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700' }}>
                {stringsDict.breathe[language] || stringsDict.breathe['en']}
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{stringsDict.breathDesc[language] || stringsDict.breathDesc['en']}</span>
            </div>

          </div>

          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
              {stringsDict.posesList[language] || stringsDict.posesList['en']}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {yogaExercises[activeYogaCategory].map((pose, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                  <div style={{ width: '110px', height: '70px', borderRadius: '8px', background: 'hsl(285, 20%, 94%)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: pointerStyle, color: 'var(--primary)', position: 'relative' }}>
                    <Play size={20} />
                    <span style={{ position: 'absolute', bottom: '4px', right: '4px', fontSize: '9px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '1px 4px', borderRadius: '4px' }}>{pose.duration}</span>
                  </div>

                  <div style={{ flexGrow: '1' }}>
                    <h4 style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{pose.name[language] || pose.name['en']}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4', marginTop: '2px' }}>{pose.desc[language] || pose.desc['en']}</p>
                    <span style={{ fontSize: '11px', color: 'var(--secondary)', fontWeight: '700', display: 'block', marginTop: '4px' }}>{stringsDict.targetRelief[language] || stringsDict.targetRelief['en']}{pose.duration}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

const pointerStyle = 'pointer';
