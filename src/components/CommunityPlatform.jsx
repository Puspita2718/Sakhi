import React, { useState } from 'react';
import { MessageSquare, Heart, Share2, Plus, Sparkles, User, ShieldAlert } from 'lucide-react';

export default function CommunityPlatform({ language }) {
  const [activeForumCategory, setActiveForumCategory] = useState('pcos');
  
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postAnonymous, setPostAnonymous] = useState(false);

  const strings = {
    anonUser: { en: 'Anonymous User', hi: 'अज्ञात उपयोगकर्ता', bn: 'বেনামী ব্যবহারকারী', ta: 'அநாமதேய பயனர்', te: 'అనామక వినియోగదారు', mr: 'अनामित वापरकर्ता' },
    loggedMember: { en: 'Logged Member', hi: 'लॉग इन सदस्य', bn: 'লগ ইন করা সদস্য', ta: 'உள்நுழைந்த உறுப்பினர்', te: 'లాగిన్ అయిన సభ్యుడు', mr: 'लॉग इन सदस्य' },
    likes: { en: 'Likes', hi: 'पसंद', bn: 'পছন্দ', ta: 'விருப்பங்கள்', te: 'లైక్‌లు', mr: 'पसंत' },
    replies: { en: 'Replies', hi: 'जवाब', bn: 'উত্তর', ta: 'பதில்கள்', te: 'ప్రత్యుత్తరాలు', mr: 'उत्तरे' },
    cats: [
      { id: 'pcos', label: { en: 'PCOS Support', hi: 'पीसीओएस समर्थन', bn: 'পিসিওএস সমর্থন', ta: 'பிசிஓஎஸ் ஆதரவு', te: 'పిసిఓఎస్ మద్దతు', mr: 'पीसीओएस समर्थन' } },
      { id: 'pregnancy', label: { en: 'Pregnancy Journey', hi: 'गर्भावस्था यात्रा', bn: 'গর্ভাবস্থার যাত্রা', ta: 'கர்ப்ப பயணம்', te: 'గర్భధారణ ప్రయాణం', mr: 'गर्भधारणा प्रवास' } },
      { id: 'hygiene', label: { en: 'Hygiene & Clean', hi: 'स्वच्छता और सफाई', bn: 'স্বাস্থ্যবিধি এবং পরিষ্কার', ta: 'சுகாதாரம் & சுத்தம்', te: 'పరిశుభ్రత & శుభ్రత', mr: 'स्वच्छता आणि साफसफाई' } },
      { id: 'mental_health', label: { en: 'Mental Wellness', hi: 'मानसिक कल्याण', bn: 'মানসিক সুস্থতা', ta: 'மன ஆரோக்கியம்', te: 'మానసిక ఆరోగ్యం', mr: 'मानसिक आरोग्य' } }
    ],
    noThreads: { en: 'No threads in this category yet. Be the first to start a conversation!', hi: 'इस श्रेणी में अभी तक कोई थ्रेड नहीं है। बातचीत शुरू करने वाले पहले व्यक्ति बनें!', bn: 'এই বিভাগে এখনও কোন থ্রেড নেই। প্রথম কথোপকথন শুরু করুন!', ta: 'இந்த வகையிலும் இதுவரை எந்தத் திரிகளும் இல்லை. உரையாடலைத் தொடங்கும் முதல் நபராக இருங்கள்!', te: 'ఈ విభాగంలో ఇంకా థ్రెడ్‌లు లేవు. సంభాషణను ప్రారంభించిన మొదటి వ్యక్తి అవ్వండి!', mr: 'या श्रेणीमध्ये अद्याप कोणतेही थ्रेड नाहीत. संभाषण सुरू करणारे पहिले व्हा!' },
    shareExp: { en: '💬 Share Your Experience', hi: '💬 अपना अनुभव साझा करें', bn: '💬 আপনার অভিজ্ঞতা শেয়ার করুন', ta: '💬 உங்கள் அனுபவத்தைப் பகிரவும்', te: '💬 మీ అనుభవాన్ని పంచుకోండి', mr: '💬 तुमचा अनुभव शेअर करा' },
    threadTitle: { en: 'Thread Title', hi: 'थ्रेड शीर्षक', bn: 'থ্রেড শিরোনাম', ta: 'நூல் தலைப்பு', te: 'థ్రెడ్ శీర్షిక', mr: 'थ्रेड शीर्षक' },
    titlePlaceholder: { en: 'e.g. Tips on managing ovulation fatigue...', hi: 'उदा. ओव्यूलेशन थकान के प्रबंधन पर सुझाव...', bn: 'যেমন ওভুলেশন ক্লান্তি পরিচালনার টিপস...', ta: 'எ.கா. அண்டவிடுப்பின் சோர்வை நிர்வகிப்பதற்கான உதவிக்குறிப்புகள்...', te: 'ఉదా. అండోత్సర్గము అలసటను నిర్వహించడానికి చిట్కాలు...', mr: 'उदा. ओव्हुलेशन थकवा व्यवस्थापित करण्यासाठी टिपा...' },
    postBody: { en: 'Post Body', hi: 'पोस्ट बॉडी', bn: 'পোস্ট বডি', ta: 'போஸ்ட் பாடி', te: 'పోస్ట్ బాడీ', mr: 'पोस्ट बॉडी' },
    bodyPlaceholder: { en: 'Share details, symptoms, questions or recovery guidelines...', hi: 'विवरण, लक्षण, प्रश्न या पुनर्प्राप्ति दिशानिर्देश साझा करें...', bn: 'বিশদ বিবরণ, লক্ষণ, প্রশ্ন বা পুনরুদ্ধারের নির্দেশিকা শেয়ার করুন...', ta: 'விவரங்கள், அறிகுறிகள், கேள்விகள் அல்லது மீட்பு வழிகாட்டுதல்களைப் பகிரவும்...', te: 'వివరాలు, లక్షణాలు, ప్రశ్నలు లేదా పునరుద్ధరణ మార్గదర్శకాలను భాగస్వామ్యం చేయండి...', mr: 'तपशील, लक्षणे, प्रश्न किंवा पुनर्प्राप्ती मार्गदर्शक तत्त्वे शेअर करा...' },
    postAnon: { en: 'Post anonymously (Your identity remains hidden)', hi: 'गुमनाम रूप से पोस्ट करें (आपकी पहचान छिपी रहती है)', bn: 'বেনামে পোস্ট করুন (আপনার পরিচয় গোপন থাকে)', ta: 'அநாமதேயமாக இடுகையிடவும் (உங்கள் அடையாளம் மறைக்கப்பட்டுள்ளது)', te: 'అనామకంగా పోస్ట్ చేయండి (మీ గుర్తింపు దాచబడి ఉంటుంది)', mr: 'निनावीपणे पोस्ट करा (तुमची ओळख लपलेली राहते)' },
    publish: { en: 'Publish Thread', hi: 'थ्रेड प्रकाशित करें', bn: 'থ্রেড প্রকাশ করুন', ta: 'நூலை வெளியிடு', te: 'థ్రెడ్‌ను ప్రచురించండి', mr: 'थ्रेड प्रकाशित करा' },
    rulesTitle: { en: '🛡️ Safe Space Intimate Guardrails', hi: '🛡️ सेफ स्पेस इंटिमेट गार्डरेल्स', bn: '🛡️ সেফ স্পেস ইন্টিমেট গার্ডরেলস', ta: '🛡️ பாதுகாப்பான இடைவெளி நெருக்கமான காவலர்கள்', te: '🛡️ సేఫ్ స్పేస్ ఇంటిమేట్ గార్డ్‌రెయిల్స్', mr: '🛡️ सुरक्षित जागा इंटिमेट गार्डरेल्स' },
    rules: [
      { en: 'Explicit biological reviews only; vulgarity or insults trigger immediate bans.', hi: 'केवल स्पष्ट जैविक समीक्षाएं; अश्लीलता या अपमान तत्काल प्रतिबंध को ट्रिगर करते हैं।', bn: 'শুধুমাত্র সুস্পষ্ট জৈবিক পর্যালোচনা; অশ্লীলতা বা অপমান তাৎক্ষণিক নিষেধাজ্ঞার সূত্রপাত করে।', ta: 'தெளிவான உயிரியல் மதிப்புரைகள் மட்டுமே; அநாகரீகம் அல்லது அவமானங்கள் உடனடி தடைகளை தூண்டுகின்றன.', te: 'స్పష్టమైన జీవసంబంధమైన సమీక్షలు మాత్రమే; అసభ్యత లేదా అవమానాలు తక్షణ నిషేధాలను ప్రేరేపిస్తాయి.', mr: 'केवळ स्पष्ट जैविक पुनरावलोकने; अश्लीलता किंवा अपमान त्वरित बंदी आणतात.' },
      { en: 'We recommend posting anonymously for intimate medical questions.', hi: 'हम अंतरंग चिकित्सा प्रश्नों के लिए गुमनाम रूप से पोस्ट करने की सलाह देते हैं।', bn: 'আমরা অন্তরঙ্গ চিকিৎসা প্রশ্নের জন্য বেনামে পোস্ট করার পরামর্শ দিই।', ta: 'நெருக்கமான மருத்துவ கேள்விகளுக்கு அநாமதேயமாக இடுகையிட பரிந்துரைக்கிறோம்.', te: 'సన్నిహిత వైద్య ప్రశ్నల కోసం అనామకంగా పోస్ట్ చేయాలని మేము సిఫార్సు చేస్తున్నాము.', mr: 'आम्ही जिव्हाळ्याच्या वैद्यकीय प्रश्नांसाठी निनावीपणे पोस्ट करण्याची शिफारस करतो.' },
      { en: 'Zero commercial solicitations or prescription recommendations are allowed.', hi: 'शून्य व्यावसायिक आग्रह या नुस्खे की सिफारिशों की अनुमति है।', bn: 'শূন্য বাণিজ্যিক অনুরোধ বা প্রেসক্রিপশন সুপারিশ অনুমোদিত।', ta: 'பூஜ்ஜிய வணிக கோரிக்கைகள் அல்லது மருந்து பரிந்துரைகள் அனுமதிக்கப்படுகின்றன.', te: 'సున్నా వాణిజ్య అభ్యర్థనలు లేదా ప్రిస్క్రిప్షన్ సిఫార్సులు అనుమతించబడతాయి.', mr: 'शून्य व्यावसायिक विनंत्या किंवा प्रिस्क्रिप्शन शिफारसींना परवानगी आहे.' }
    ]
  };

  const [forumPosts, setForumPosts] = useState([
    {
      id: 'p-1',
      category: 'pcos',
      title: 'Struggling with spearmint tea scheduling... does it actually help?',
      content: 'I was recently diagnosed with mild PCOS and my gynecologist suggested spearmint tea for hirsutism. Has anyone tried it? When do you drink it during your cycle?',
      author: 'Anonymous User',
      isAnonymous: true,
      likes: 12,
      replies: [
        { author: 'Meera K', text: 'Yes, it works! I have been drinking it twice daily during my luteal phase and noticed significant improvements after three months.' },
        { author: 'Dr. Priya Sen', text: 'Spearmint acts as an anti-androgen. Two cups daily is standard. Combine this with low-GI meals for optimal hormonal balance.' }
      ],
      liked: false
    },
    {
      id: 'p-2',
      category: 'pcos',
      title: 'Weight lifting vs Cardiovascular training for PCOS insulin resistance',
      content: 'I have heard mixed advice on workout types. Some say heavy cardio increases cortisol which worsens insulin issues, while strength training helps build muscle to absorb glucose.',
      author: 'Ananya S',
      isAnonymous: false,
      likes: 24,
      replies: [],
      liked: false
    },
    {
      id: 'p-3',
      category: 'pregnancy',
      title: 'Early signs of implantation cramping?',
      content: 'I am on day 22 of a 28-day cycle and experiencing mild pink spotting and cramps. Could this be implantation? My husband and I are trying to conceive.',
      author: 'Anonymous User',
      isAnonymous: true,
      likes: 8,
      replies: [],
      liked: false
    }
  ]);

  const handleCreatePost = () => {
    if (!postTitle.trim() || !postContent.trim()) return;

    const newPost = {
      id: `p-${forumPosts.length + 1}`,
      category: activeForumCategory,
      title: postTitle,
      content: postContent,
      author: postAnonymous ? 'Anonymous User' : 'Ananya S',
      isAnonymous: postAnonymous,
      likes: 0,
      replies: [],
      liked: false
    };

    setForumPosts([newPost, ...forumPosts]);
    setPostTitle('');
    setPostContent('');
    setPostAnonymous(false);
  };

  const handleToggleLike = (id) => {
    setForumPosts(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, likes: p.liked ? p.likes - 1 : p.likes + 1, liked: !p.liked };
      }
      return p;
    }));
  };

  const filteredPosts = forumPosts.filter(p => p.category === activeForumCategory);

  return (
    <div className="slide-in" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px' }} className="grid-2">
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div className="glass-panel" style={{ padding: '16px', display: 'flex', gap: '10px', overflowX: 'auto' }}>
          {strings.cats.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveForumCategory(cat.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: activeForumCategory === cat.id ? 'var(--primary)' : 'var(--border-color)',
                background: activeForumCategory === cat.id ? 'var(--primary)' : 'transparent',
                color: activeForumCategory === cat.id ? 'white' : 'var(--text-primary)',
                fontSize: '12px',
                fontWeight: '600',
                cursor: pointerStyle,
                transition: 'var(--transition)',
                whiteSpace: 'nowrap'
              }}
            >
              {cat.label[language] || cat.label['en']}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '500px', overflowY: 'auto', paddingRight: '4px' }}>
          {filteredPosts.length === 0 ? (
            <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <span>{strings.noThreads[language] || strings.noThreads['en']}</span>
            </div>
          ) : (
            filteredPosts.map(post => (
              <div key={post.id} className="glass-panel slide-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: post.isAnonymous ? 'var(--border-color)' : 'var(--primary-light)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: post.isAnonymous ? 'var(--text-secondary)' : 'var(--primary)' }}>
                    {post.isAnonymous ? <ShieldAlert size={14} /> : <User size={14} />}
                  </div>
                  <div>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', display: 'block' }}>{post.isAnonymous ? (strings.anonUser[language] || strings.anonUser['en']) : post.author}</span>
                    <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{strings.loggedMember[language] || strings.loggedMember['en']}</span>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '700', marginBottom: '6px' }}>{post.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{post.content}</p>
                </div>

                <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--border-color)', borderBottom: post.replies.length > 0 ? '1px solid var(--border-color)' : 'none', padding: '10px 0', fontSize: '12px' }}>
                  <button 
                    onClick={() => handleToggleLike(post.id)}
                    style={{ border: 'none', background: 'none', cursor: pointerStyle, display: 'flex', alignItems: 'center', gap: '6px', color: post.liked ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: '600' }}
                  >
                    <Heart size={14} fill={post.liked ? 'var(--primary)' : 'none'} /> {post.likes} {strings.likes[language] || strings.likes['en']}
                  </button>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                    <MessageSquare size={14} /> {post.replies.length} {strings.replies[language] || strings.replies['en']}
                  </span>
                </div>

                {post.replies.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '12px', borderLeft: '2px solid var(--primary-light)' }}>
                    {post.replies.map((rep, rIdx) => (
                      <div key={rIdx} style={{ background: 'var(--bg-primary)', padding: '10px', borderRadius: '6px', fontSize: '12px' }}>
                        <strong style={{ display: 'block', color: 'var(--secondary)', fontSize: '11px', marginBottom: '2px' }}>{rep.author}</strong>
                        <p style={{ color: 'var(--text-primary)' }}>{rep.text}</p>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))
          )}
        </div>

      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
            {strings.shareExp[language] || strings.shareExp['en']}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{strings.threadTitle[language] || strings.threadTitle['en']}</span>
            <input 
              type="text" 
              placeholder={strings.titlePlaceholder[language] || strings.titlePlaceholder['en']}
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '13px' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{strings.postBody[language] || strings.postBody['en']}</span>
            <textarea
              placeholder={strings.bodyPlaceholder[language] || strings.bodyPlaceholder['en']}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100px', resize: 'none', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
            />
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-primary)', cursor: pointerStyle }}>
            <input type="checkbox" checked={postAnonymous} onChange={(e) => setPostAnonymous(e.target.checked)} style={{ accentColor: 'var(--primary)' }} />
            {strings.postAnon[language] || strings.postAnon['en']}
          </label>

          <button className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={handleCreatePost}>
            {strings.publish[language] || strings.publish['en']} <Plus size={16} />
          </button>
        </div>

        <div className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid var(--secondary)' }}>
          <h4 style={{ fontSize: '14px', color: 'var(--secondary)', marginBottom: '8px' }}>{strings.rulesTitle[language] || strings.rulesTitle['en']}</h4>
          <ul style={{ listStyleType: 'decimal', paddingLeft: '16px', fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', lineHeight: '1.4' }}>
            {strings.rules.map((rule, idx) => (
              <li key={idx}>{rule[language] || rule['en']}</li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}

const pointerStyle = 'pointer';
