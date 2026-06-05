import React from 'react';
import { AlertTriangle, Phone, MapPin, ShieldAlert, Award } from 'lucide-react';

export default function EmergencySystem({ language, closeEmergency }) {
  const strings = {
    flags: [
      { 
        title: { en: 'Excessive Flow Bleeding', hi: 'अत्यधिक प्रवाह रक्तस्राव', bn: 'অতিরিক্ত প্রবাহ রক্তপাত', ta: 'அதிகப்படியான இரத்தப்போக்கு', te: 'అధిక ప్రవాహ రక్తస్రావం', mr: 'अत्यधिक प्रवाह रक्तस्त्राव' }, 
        desc: { en: 'Soaking through one or more sanitary pads/tampons completely every hour for two or more consecutive hours.', hi: 'लगातार दो या अधिक घंटों तक हर घंटे एक या अधिक सैनिटरी पैड/टैम्पोन को पूरी तरह से भिगोना।', bn: 'পরপর দুই বা ততোধিক ঘন্টা প্রতি ঘন্টায় এক বা একাধিক স্যানিটারি প্যাড/ট্যাম্পন সম্পূর্ণরূপে ভিজিয়ে রাখা।', ta: 'தொடர்ச்சியாக இரண்டு அல்லது அதற்கு மேற்பட்ட மணிநேரங்களுக்கு ஒவ்வொரு மணி நேரமும் ஒன்று அல்லது அதற்கு மேற்பட்ட நாப்கின்களை நனைப்பது.', te: 'రెండు లేదా అంతకంటే ఎక్కువ వరుస గంటల పాటు ప్రతి గంటకు ఒకటి లేదా అంతకంటే ఎక్కువ ప్యాడ్‌లను పూర్తిగా నానబెట్టడం.', mr: 'सलग दोन किंवा अधिक तास दर तासाला एक किंवा अधिक सॅनिटरी पॅड पूर्णपणे भिजवणे.' }
      },
      { 
        title: { en: 'Acute Pelvic Pain', hi: 'तीव्र पेल्विक दर्द', bn: 'তীব্র শ্রোণী ব্যথা', ta: 'கடுமையான இடுப்பு வலி', te: 'తీవ్రమైన పెల్విక్ నొప్పి', mr: 'तीव्र पेल्विक वेदना' }, 
        desc: { en: 'Severe, sharp pain inside the lower abdomen that is sudden and restricts you from standing or breathing normally.', hi: 'निचले पेट के अंदर गंभीर, तेज दर्द जो अचानक होता है और आपको सामान्य रूप से खड़े होने या सांस लेने से रोकता है।', bn: 'তলপেটের অভ্যন্তরে গুরুতর, তীক্ষ্ণ ব্যথা যা হঠাৎ হয় এবং আপনাকে স্বাভাবিকভাবে দাঁড়াতে বা শ্বাস নিতে বাধা দেয়।', ta: 'கீழ் அடிவயிற்றின் உள்ளே கடுமையான வலி, இது உங்களை சாதாரணமாக நிற்பதையோ அல்லது சுவாசிப்பதையோ கட்டுப்படுத்துகிறது.', te: 'దిగువ ఉదరం లోపల తీవ్రమైన, పదునైన నొప్పి, ఇది అకస్మాత్తుగా వస్తుంది మరియు మిమ్మల్ని నిలబడకుండా చేస్తుంది.', mr: 'खालच्या ओटीपोटात तीव्र वेदना जी अचानक होते आणि आपल्याला सामान्यपणे उभे राहण्यापासून किंवा श्वास घेण्यापासून रोखते.' }
      },
      { 
        title: { en: 'Fainting & Dizziness', hi: 'बेहोशी और चक्कर आना', bn: 'মూర్ছা যাওয়া এবং মাথা ঘোরা', ta: 'மயக்கம் & தலைசுற்றல்', te: 'మూర్ఛ & మైకం', mr: 'मूर्च्छा आणि चक्कर' }, 
        desc: { en: 'Losing consciousness, extreme lightheadedness, or persistent severe vomiting during your period.', hi: 'मासिक धर्म के दौरान चेतना खोना, अत्यधिक हल्कापन, या लगातार गंभीर उल्टी।', bn: 'আপনার পিরিয়ডের সময় জ্ঞান হারানো, চরম হালকা মাথাব্যথা বা অবিরাম তীব্র বমি হওয়া।', ta: 'உங்கள் மாதவிடாயின் போது சுயநினைவை இழப்பது, தீவிர மயக்கம் அல்லது தொடர்ந்து கடுமையான வாந்தி.', te: 'మీ పీరియడ్ సమయంలో స్పృహ కోల్పోవడం, తీవ్రమైన తలతిరగడం లేదా నిరంతర తీవ్రమైన వాంతులు.', mr: 'तुमच्या मासिक पाळीच्या दरम्यान शुद्ध हरपणे, अतिशय हलके वाटणे किंवा सतत उलट्या होणे.' }
      },
      { 
        title: { en: 'High Infection Fever', hi: 'उच्च संक्रमण बुखार', bn: 'উচ্চ সংক্রমণ জ্বর', ta: 'அதிக தொற்று காய்ச்சல்', te: 'అధిక ఇన్ఫెక్షన్ జ్వరం', mr: 'उच्च संसर्ग ताप' }, 
        desc: { en: 'Temperature above 101°F (38.3°C) accompanied by foul-smelling vaginal discharge.', hi: 'दुर्गंधयुक्त योनि स्राव के साथ 101°F (38.3°C) से ऊपर का तापमान।', bn: 'দুর্গন্ধযুক্ত যোনি স্রাবের সাথে ১০১° ফারেনহাইট (৩৮.৩° সেন্টিগ্রেড) এর উপরে তাপমাত্রা।', ta: '101°F (38.3°C) க்கு மேல் வெப்பநிலை துர்நாற்றத்துடன் கூடிய யோனி வெளியேற்றத்துடன்.', te: 'దుర్వాసనతో కూడిన యోని ఉత్సర్గతో పాటు 101°F (38.3°C) కంటే ఎక్కువ ఉష్ణోగ్రత.', mr: 'दुर्गंधीयुक्त योनि स्रावासह १०१°F (३८.३°C) च्या वर तापमान.' }
      }
    ],
    alertTitle: { en: '⚠️ SOS Clinical Emergency Alert', hi: '⚠️ SOS नैदानिक आपातकालीन चेतावनी', bn: '⚠️ SOS ক্লিনিকাল ইমার্জেন্সি অ্যালার্ট', ta: '⚠️ SOS மருத்துவ அவசர எச்சரிக்கை', te: '⚠️ SOS క్లినికల్ ఎమర్జెన్సీ అలర్ట్', mr: '⚠️ SOS क्लिनिकल इमर्जन्सी अलर्ट' },
    alertDesc: { en: 'Potential High-Risk Menstrual Symptoms Identified', hi: 'संभावित उच्च-जोखिम वाले मासिक धर्म के लक्षणों की पहचान की गई', bn: 'সম্ভাব্য উচ্চ-ঝুঁকিপূর্ণ মাসিকের লক্ষণ চিহ্নিত করা হয়েছে', ta: 'அடையாளம் காணப்பட்ட சாத்தியமான அதிக ஆபத்து மாதவிடாய் அறிகுறிகள்', te: 'సంభావ్య అధిక-ప్రమాద రుతుక్రమ లక్షణాలు గుర్తించబడ్డాయి', mr: 'संभाव्य उच्च-जोखमीची मासिक पाळीची लक्षणे ओळखली गेली' },
    triggers: { en: 'Immediate ER Action Triggers:', hi: 'तत्काल ईआर कार्रवाई ट्रिगर:', bn: 'তাত্ক্ষণিক ইআর অ্যাকশন ট্রিগার:', ta: 'உடனடி ஈஆர் அதிரடி தூண்டுதல்கள்:', te: 'తక్షణ ఈఆర్ చర్య ట్రిగ్గర్లు:', mr: 'तात्काळ ईआर कृती ट्रिगर्स:' },
    hotlines: { en: 'National Care Hotlines', hi: 'राष्ट्रीय देखभाल हेल्पलाइन', bn: 'জাতীয় কেয়ার হটলাইন', ta: 'தேசிய பராமரிப்பு ஹாட்லைன்கள்', te: 'జాతీయ సంరక్షణ హెల్ప్‌లైన్‌లు', mr: 'राष्ट्रीय केअर हॉटलाइन' },
    ambulance: { en: 'Ambulance:', hi: 'एम्बुलेंस:', bn: 'অ্যাম্বুলেন্স:', ta: 'ஆம்புலன்ஸ்:', te: 'అంబులెన్స్:', mr: 'रुग्णवाहिका:' },
    careLine: { en: 'Intimate Care Line:', hi: 'अंतरंग देखभाल लाइन:', bn: 'ইন্টিমেট কেয়ার লাইন:', ta: 'நெருக்கமான பராமரிப்பு வரி:', te: 'ఇంటిమేట్ కేర్ లైన్:', mr: 'इंटिमेट केअर लाईन:' },
    localClinic: { en: 'Local Gynecological Emergency', hi: 'स्थानीय स्त्री रोग संबंधी आपातकाल', bn: 'স্থানীয় গাইনোকোলজিক্যাল ইমার্জেন্সি', ta: 'உள்ளூர் மகளிர் மருத்துவ அவசரநிலை', te: 'స్థానిక గైనకోలాజికల్ ఎమర్జెన్సీ', mr: 'स्थानिक स्त्रीरोगविषयक आणीबाणी' },
    nearest: { en: 'Nearest:', hi: 'निकटतम:', bn: 'নিকটতম:', ta: 'அருகிலுள்ள:', te: 'సమీప:', mr: 'सर्वांत जवळचे:' },
    travel: { en: 'Estimated Travel:', hi: 'अनुमानित यात्रा:', bn: 'আনুমানিক ভ্রমণ:', ta: 'மதிப்பிடப்பட்ட பயணம்:', te: 'అంచనా ప్రయాణం:', mr: 'अंदाजे प्रवास:' },
    minsAway: { en: '8 Mins Away', hi: '8 मिनट दूर', bn: '8 মিনিট দূরে', ta: '8 நிமிடங்கள் தொலைவில்', te: '8 నిమిషాల దూరం', mr: '8 मिनिटे दूर' },
    disclaimer: { en: '"Do not delay professional clinical care based on system predictions. Call ambulance immediately."', hi: '"सिस्टम भविष्यवाणियों के आधार पर पेशेवर नैदानिक देखभाल में देरी न करें। तुरंत एम्बुलेंस बुलाएं।"', bn: '"সিস্টেমের পূর্বাভাসের উপর ভিত্তি করে পেশাদার ক্লিনিকাল যত্নে দেরি করবেন না। অবিলম্বে অ্যাম্বুলেন্স কল করুন।"', ta: '"அமைப்பின் கணிப்புகளின் அடிப்படையில் தொழில்முறை மருத்துவ பராமரிப்பை தாமதப்படுத்த வேண்டாம். ஆம்புலன்ஸை உடனடியாக அழைக்கவும்."', te: '"సిస్టమ్ అంచనాల ఆధారంగా వృత్తిపరమైన క్లినికల్ సంరక్షణను ఆలస్యం చేయవద్దు. వెంటనే అంబులెన్స్‌కు కాల్ చేయండి."', mr: '"सिस्टमच्या अंदाजांवर आधारित व्यावसायिक क्लिनिकल काळजी घेण्यास उशीर करू नका. त्वरित रुग्णवाहिका कॉल करा."' },
    dismiss: { en: 'Dismiss Warning', hi: 'चेतावनी खारिज करें', bn: 'সতর্কতা বাতিল করুন', ta: 'எச்சரிக்கையை நிராகரி', te: 'హెచ్చరికను తీసివేయండి', mr: 'इशारा डिसमिस करा' },
    callNow: { en: 'Call Ambulance Now', hi: 'अभी एम्बुलेंस बुलाएं', bn: 'এখন অ্যাম্বুলেন্সে কল করুন', ta: 'இப்போது ஆம்புலன்ஸை அழைக்கவும்', te: 'ఇప్పుడే అంబులెన్స్‌కు కాల్ చేయండి', mr: 'आता रुग्णवाहिका कॉल करा' }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(20, 5, 10, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '9999', padding: '20px' }}>
      <div className="glass-panel slide-in" style={{ maxWidth: '650px', background: 'var(--bg-secondary)', padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px', border: '2px solid var(--danger)', boxShadow: '0 0 40px rgba(250, 50, 50, 0.4)' }}>
        
        {/* Header Warning */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '2px solid var(--danger)', paddingBottom: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--danger-light)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
            <AlertTriangle size={24} style={{ animation: 'pulse 1.5s infinite' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '22px', color: 'var(--danger)', fontWeight: '800' }}>{strings.alertTitle[language] || strings.alertTitle['en']}</h2>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{strings.alertDesc[language] || strings.alertDesc['en']}</span>
          </div>
        </div>

        {/* Clinical Red-Flags List */}
        <div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            {strings.triggers[language] || strings.triggers['en']}
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-2">
            {strings.flags.map((flag, idx) => (
              <div key={idx} style={{ background: 'var(--danger-light)', padding: '12px 14px', borderRadius: '8px', borderLeft: '4px solid var(--danger)' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>{flag.title[language] || flag.title['en']}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4', display: 'block' }}>{flag.desc[language] || flag.desc['en']}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Local Emergency Hotlines */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="grid-2">
          
          {/* Contacts */}
          <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} style={{ color: 'var(--secondary)' }} /> {strings.hotlines[language] || strings.hotlines['en']}
            </span>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              <div>📞 {strings.ambulance[language] || strings.ambulance['en']} <strong>102</strong></div>
              <div>📞 {strings.careLine[language] || strings.careLine['en']} <strong>1800-419-1020</strong></div>
            </div>
          </div>

          {/* Local Clinic Helper */}
          <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} style={{ color: 'var(--secondary)' }} /> {strings.localClinic[language] || strings.localClinic['en']}
            </span>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              <div>📍 {strings.nearest[language] || strings.nearest['en']} <strong>Max Speciality Hospital ER</strong></div>
              <div>🚗 {strings.travel[language] || strings.travel['en']} <strong>{strings.minsAway[language] || strings.minsAway['en']}</strong></div>
            </div>
          </div>

        </div>

        {/* Disclaimers & Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
          <span style={{ fontSize: '11px', color: 'var(--danger)', fontWeight: '600', display: 'block', textAlign: 'center', fontStyle: 'italic' }}>
            {strings.disclaimer[language] || strings.disclaimer['en']}
          </span>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button className="btn btn-secondary" onClick={closeEmergency} style={{ padding: '8px 16px' }}>
              {strings.dismiss[language] || strings.dismiss['en']}
            </button>
            <button 
              className="btn btn-primary" 
              style={{ background: 'var(--danger)', border: 'none', color: 'white', padding: '8px 16px' }}
              onClick={() => alert('Dialing ambulance... Simulating direct VoIP dial.')}
            >
              {strings.callNow[language] || strings.callNow['en']}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
