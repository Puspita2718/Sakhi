import React, { useState } from 'react';
import { Shield, Users, Activity, MessageSquare, Trash2, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function AdminPanel({ language }) {
  const [adminTab, setAdminTab] = useState('users');

  // Admin users list state
  const [users, setUsers] = useState([
    { id: 'u-101', name: 'Ananya Sharma', email: 'ananya@example.com', plan: 'Standard', status: 'Active' },
    { id: 'u-102', name: 'Meera Kapoor', email: 'meera@example.com', plan: 'Premium', status: 'Active' },
    { id: 'u-103', name: 'Sneha Rao', email: 'sneha@example.com', plan: 'Free', status: 'Active' },
    { id: 'u-104', name: 'Rhea Sen', email: 'rhea@example.com', plan: 'Basic', status: 'Suspended' }
  ]);

  // Doctor Approvals list state
  const [doctors, setDoctors] = useState([
    { id: 'd-201', name: 'Dr. Shalini Iyer', specialty: 'Gynecologist', status: 'Approved' },
    { id: 'd-202', name: 'Dr. Rohan Sharma', specialty: 'Reproductive Specialist', status: 'Approved' },
    { id: 'd-203', name: 'Dr. Priya Sen', specialty: 'Dietitian & Nutritionist', status: 'Approved' },
    { id: 'd-204', name: 'Dr. Aditi Verma', specialty: 'Intimate Care Expert', status: 'Pending Approval' }
  ]);

  // Flags Forum Posts list
  const [flaggedPosts, setFlaggedPosts] = useState([
    { id: 'fp-301', title: 'Suspicious pills review request...', content: 'Selling cheap estrogen pills directly via whatsapp...', flaggedReason: 'Unauthorized drug advertisement' }
  ]);

  const strings = {
    title: { en: 'Administrative Core Panel', hi: 'प्रशासनिक कोर पैनल', bn: 'প্রশাসনিক কোর প্যানেल', ta: 'நிர்வாக முதன்மை குழு', te: 'పరిపాలనా కోర్ ప్యానెల్', mr: 'प्रशासकीय कोर पॅनेल' },
    desc: { en: 'Manage users, approve doctors, handle subscriptions, and moderate public forums.', hi: 'उपयोगकर्ताओं को प्रबंधित करें, डॉक्टरों को मंजूरी दें, सदस्यताएं संभालें और सार्वजनिक मंचों का संचालन करें।', bn: 'ব্যবহারকারীদের পরিচালনা করুন, ডাক্তারদের অনুমোদন করুন, সাবস্ক্রিপশন পরিচালনা করুন এবং পাবলিক ফোরাম মডারেট করুন।', ta: 'பயனர்களை நிர்வகிக்கவும், மருத்துவர்களை அங்கீகரிக்கவும், சந்தாக்களை கையாளவும் மற்றும் பொது மன்றங்களை நிர்வகிக்கவும்.', te: 'వినియోగదారులను నిర్వహించండి, వైద్యులను ఆమోదించండి, సభ్యత్వాలను నిర్వహించండి మరియు పబ్లిక్ ఫోరమ్‌లను నియంత్రించండి.', mr: 'वापरकर्ते व्यवस्थापित करा, डॉक्टरांना मान्यता द्या, सदस्यत्वे हाताळा आणि सार्वजनिक मंचांचे संचालन करा.' },
    totalUsers: { en: 'Total Users', hi: 'कुल उपयोगकर्ता', bn: 'মোট ব্যবহারকারী', ta: 'மொத்த பயனர்கள்', te: 'మొత్తం వినియోగదారులు', mr: 'एकूण वापरकर्ते' },
    activeSubs: { en: 'Active Subs', hi: 'सक्रिय सदस्यता', bn: 'সক্রিয় সাবস্ক্রিপশন', ta: 'செயலில் உள்ள சந்தாக்கள்', te: 'క్రియాశీల సభ్యత్వాలు', mr: 'सक्रिय सदस्यत्वे' },
    tabUsers: { en: 'Manage Users', hi: 'उपयोगकर्ता प्रबंधित करें', bn: 'ব্যবহারকারী পরিচালনা করুন', ta: 'பயனர்களை நிர்வகி', te: 'వినియోగదారులను నిర్వహించండి', mr: 'वापरकर्ते व्यवस्थापित करा' },
    tabDocs: { en: 'Doctor Approvals', hi: 'डॉक्टर की मंजूरी', bn: 'ডাক্তার অনুমোদন', ta: 'மருத்துவர் ஒப்புதல்கள்', te: 'డాక్టర్ ఆమోదాలు', mr: 'डॉक्टरांच्या मंजुरी' },
    tabForum: { en: 'Forum Moderation', hi: 'मंच मॉडरेशन', bn: 'ফোরাম মডারেশন', ta: 'மன்றம் கட்டுப்பாடு', te: 'ఫోరమ్ నియంత్రణ', mr: 'मंच मॉडरेशन' },
    
    // Users Table
    regUsers: { en: 'Registered Users', hi: 'पंजीकृत उपयोगकर्ता', bn: 'নিবন্ধিত ব্যবহারকারীরা', ta: 'பதிவு செய்யப்பட்ட பயனர்கள்', te: 'నమోదిత వినియోగదారులు', mr: 'नोंदणीकृत वापरकर्ते' },
    userId: { en: 'User ID', hi: 'उपयोगकर्ता आईडी', bn: 'ব্যবহারকারী আইডি', ta: 'பயனர் ஐடி', te: 'వినియోగదారు ID', mr: 'वापरकर्ता आयडी' },
    name: { en: 'Name', hi: 'नाम', bn: 'নাম', ta: 'பெயர்', te: 'పేరు', mr: 'नाव' },
    email: { en: 'Email', hi: 'ईमेल', bn: 'ইমেইল', ta: 'மின்னஞ்சல்', te: 'ఇమెయిల్', mr: 'ईमेल' },
    plan: { en: 'Active Subscription', hi: 'सक्रिय सदस्यता', bn: 'সক্রিয় সাবস্ক্রিপশন', ta: 'செயலில் உள்ள சந்தா', te: 'క్రియాశీల సభ్యత్వం', mr: 'सक्रिय सदस्यत्व' },
    status: { en: 'Status', hi: 'स्थिति', bn: 'স্ট্যাটাস', ta: 'நிலை', te: 'స్థితి', mr: 'स्थिती' },
    actions: { en: 'Actions', hi: 'कार्रवाई', bn: 'কর্ম', ta: 'செயல்கள்', te: 'చర్యలు', mr: 'कृती' },
    suspend: { en: 'Suspend', hi: 'निलंबित करें', bn: 'স্থগিত করুন', ta: 'இடைநிறுத்து', te: 'నిలిపివేయండి', mr: 'निलंबित करा' },
    unsuspend: { en: 'Unsuspend', hi: 'निलंबन रद्द करें', bn: 'স্থগিতাদেশ প্রত্যাহার করুন', ta: 'இடைநீக்கம் நீக்கு', te: 'నిలిపివేత రద్దు చేయండి', mr: 'निलंबन रद्द करा' },

    // Doctors Table
    docsTitle: { en: 'Gynecologists & Speciality Registrations', hi: 'स्त्री रोग विशेषज्ञ और विशेषता पंजीकरण', bn: 'গাইনোকোলজিস্ট এবং স্পেশালিটি রেজিস্ট্রেশন', ta: 'மகளிர் மருத்துவ நிபுணர்கள் & சிறப்பு பதிவுகள்', te: 'గైనకాలజిస్ట్‌లు & స్పెషాలిటీ రిజిస్ట్రేషన్‌లు', mr: 'स्त्रीरोगतज्ज्ञ आणि विशेष नोंदणी' },
    docId: { en: 'Doctor ID', hi: 'डॉक्टर आईडी', bn: 'ডাক্তার আইডি', ta: 'மருத்துவர் ஐடி', te: 'డాక్టర్ ID', mr: 'डॉक्टर आयडी' },
    docName: { en: 'Doctor Name', hi: 'डॉक्टर का नाम', bn: 'ডাক্তারের নাম', ta: 'மருத்துவர் பெயர்', te: 'డాక్టర్ పేరు', mr: 'डॉक्टरांचे नाव' },
    specialty: { en: 'Specialty', hi: 'विशेषता', bn: 'বিশেষত্ব', ta: 'சிறப்பு', te: 'ప్రత్యేకత', mr: 'वैशिष्ट्य' },
    licenseVer: { en: 'License Verification', hi: 'लाइसेंस सत्यापन', bn: 'লাইসেন্স যাচাইকরণ', ta: 'உரிமச் சரிபார்ப்பு', te: 'లైసెన్స్ ధృవీకరణ', mr: 'परवाना पडताळणी' },
    approveLic: { en: 'Approve License', hi: 'लाइसेंस स्वीकृत करें', bn: 'লাইসেন্স অনুমোদন করুন', ta: 'உரிமத்தை அங்கீகரி', te: 'లైసెన్స్‌ని ఆమోదించండి', mr: 'परवाना मंजूर करा' },
    verifiedLic: { en: 'Verified License', hi: 'सत्यापित लाइसेंस', bn: 'যাচাইকৃত লাইসেন্স', ta: 'சரிபார்க்கப்பட்ட உரிமம்', te: 'ధృవీకరించబడిన లైసెన్స్', mr: 'पडताळणी केलेला परवाना' },

    // Forum
    forumTitle: { en: 'Flagged Community Submissions', hi: 'फ्लैग किए गए सामुदायिक सबमिशन', bn: 'পতাকাবাহিত সম্প্রদায়ের জমা', ta: 'கொடியிடப்பட்ட சமூக சமர்ப்பிப்புகள்', te: 'ఫ్లాగ్ చేయబడిన కమ్యూనిటీ సమర్పణలు', mr: 'फ्लॅग केलेले समुदाय सबमिशन' },
    noFlags: { en: 'Excellent. Zero flagged threads in system queues.', hi: 'उत्कृष्ट। सिस्टम कतार में कोई फ्लैग किए गए थ्रेड नहीं हैं।', bn: 'চমৎকার। সিস্টেম কিউতে শূন্য পতাকাবাহিত থ্রেড।', ta: 'சிறப்பானது. கணினி வரிசைகளில் கொடியிடப்பட்ட இழைகள் இல்லை.', te: 'అద్భుతమైనది. సిస్టమ్ క్యూలలో ఫ్లాగ్ చేయబడిన థ్రెడ్‌లు సున్నా.', mr: 'उत्कृष्ट. सिस्टम रांगेत शून्य फ्लॅग केलेले थ्रेड.' },
    flaggedReasonLbl: { en: 'Flagged Reason:', hi: 'फ्लैग किया गया कारण:', bn: 'পতাকাবাহিত কারণ:', ta: 'கொடியிடப்பட்ட காரணம்:', te: 'ఫ్లాగ్ చేయబడిన కారణం:', mr: 'फ्लॅग केलेले कारण:' }
  };

  const handleToggleUserStatus = (id) => {
    setUsers(prev => prev.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' };
      }
      return u;
    }));
  };

  const handleApproveDoctor = (id) => {
    setDoctors(prev => prev.map(d => {
      if (d.id === id) {
        return { ...d, status: 'Approved' };
      }
      return d;
    }));
  };

  const handleDeleteFlaggedPost = (id) => {
    setFlaggedPosts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="slide-in flex flex-col gap-8">
      
      {/* 1. ADMIN HEADER SUMMARY CARD */}
      <div className="glass-panel p-8 rounded-3xl bg-gradient-to-tr from-indigo-50/50 to-purple-50/50 dark:from-zinc-900/40 dark:to-zinc-950/40 flex justify-between items-center flex-wrap gap-6 text-left">
        <div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight dark:text-white flex items-center gap-2">
            <Shield size={28} className="text-indigo-500" /> {strings.title[language] || strings.title['en']}
          </h1>
          <p className="text-xs text-[var(--text-secondary)] font-semibold mt-1">
            {strings.desc[language] || strings.desc['en']}
          </p>
        </div>

        {/* Total system metrics */}
        <div className="flex gap-4">
          <div className="bg-white/80 dark:bg-zinc-900 border border-gray-150/50 dark:border-zinc-800 p-4 rounded-xl text-center">
            <span className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">{strings.totalUsers[language] || strings.totalUsers['en']}</span>
            <strong className="block text-xl text-indigo-600 dark:text-indigo-400 mt-1">1,248</strong>
          </div>
          <div className="bg-white/80 dark:bg-zinc-900 border border-gray-150/50 dark:border-zinc-800 p-4 rounded-xl text-center">
            <span className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">{strings.activeSubs[language] || strings.activeSubs['en']}</span>
            <strong className="block text-xl text-emerald-600 dark:text-emerald-400 mt-1">456</strong>
          </div>
        </div>
      </div>

      {/* 2. ADMIN SUB-TABS SELECTOR */}
      <div className="flex gap-2.5 border-b border-gray-150/50 dark:border-zinc-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setAdminTab('users')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all border cursor-pointer shrink-0 ${adminTab === 'users' ? 'bg-indigo-600 text-white shadow-md border-indigo-600' : 'bg-transparent text-[var(--text-secondary)] border-transparent hover:border-indigo-200 hover:text-indigo-600'}`}
        >
          <Users size={14} /> {strings.tabUsers[language] || strings.tabUsers['en']}
        </button>
        <button
          onClick={() => setAdminTab('doctors')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all border cursor-pointer shrink-0 ${adminTab === 'doctors' ? 'bg-indigo-600 text-white shadow-md border-indigo-600' : 'bg-transparent text-[var(--text-secondary)] border-transparent hover:border-indigo-200 hover:text-indigo-600'}`}
        >
          <Activity size={14} /> {strings.tabDocs[language] || strings.tabDocs['en']}
        </button>
        <button
          onClick={() => setAdminTab('forum')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all border cursor-pointer shrink-0 ${adminTab === 'forum' ? 'bg-indigo-600 text-white shadow-md border-indigo-600' : 'bg-transparent text-[var(--text-secondary)] border-transparent hover:border-indigo-200 hover:text-indigo-600'}`}
        >
          <MessageSquare size={14} /> {strings.tabForum[language] || strings.tabForum['en']}
        </button>
      </div>

      {/* 3. SUB-TAB VIEWPORTS */}
      <div className="glass-panel p-6 rounded-2xl text-left">
        
        {/* USERS MANAGER TABLE */}
        {adminTab === 'users' && (
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-extrabold text-lg text-[var(--text-primary)] border-b border-gray-150/40 dark:border-zinc-800 pb-2.5">
              {strings.regUsers[language] || strings.regUsers['en']}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-150/40 dark:border-zinc-800 text-[var(--text-secondary)] font-extrabold">
                    <th className="py-3 px-4">{strings.userId[language] || strings.userId['en']}</th>
                    <th className="py-3 px-4">{strings.name[language] || strings.name['en']}</th>
                    <th className="py-3 px-4">{strings.email[language] || strings.email['en']}</th>
                    <th className="py-3 px-4">{strings.plan[language] || strings.plan['en']}</th>
                    <th className="py-3 px-4">{strings.status[language] || strings.status['en']}</th>
                    <th className="py-3 px-4 text-right">{strings.actions[language] || strings.actions['en']}</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id} className="border-b border-gray-150/20 dark:border-zinc-900/50 text-[var(--text-primary)] font-semibold">
                      <td className="py-3 px-4 font-mono text-[var(--text-secondary)]">{u.id}</td>
                      <td className="py-3 px-4 font-bold">{u.name}</td>
                      <td className="py-3 px-4">{u.email}</td>
                      <td className="py-3 px-4">
                        <span className="bg-feminine-purple/10 text-feminine-purple px-2 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide">
                          {u.plan}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${u.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'}`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleToggleUserStatus(u.id)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border cursor-pointer ${u.status === 'Active' ? 'border-red-200 text-red-500 hover:bg-red-500 hover:text-white' : 'border-emerald-200 text-emerald-500 hover:bg-emerald-500 hover:text-white'}`}
                        >
                          {u.status === 'Active' ? (strings.suspend[language] || strings.suspend['en']) : (strings.unsuspend[language] || strings.unsuspend['en'])}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DOCTORS APPROVAL MANAGER */}
        {adminTab === 'doctors' && (
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-extrabold text-lg text-[var(--text-primary)] border-b border-gray-150/40 dark:border-zinc-800 pb-2.5">
              {strings.docsTitle[language] || strings.docsTitle['en']}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-150/40 dark:border-zinc-800 text-[var(--text-secondary)] font-extrabold">
                    <th className="py-3 px-4">{strings.docId[language] || strings.docId['en']}</th>
                    <th className="py-3 px-4">{strings.docName[language] || strings.docName['en']}</th>
                    <th className="py-3 px-4">{strings.specialty[language] || strings.specialty['en']}</th>
                    <th className="py-3 px-4">{strings.licenseVer[language] || strings.licenseVer['en']}</th>
                    <th className="py-3 px-4 text-right">{strings.actions[language] || strings.actions['en']}</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map(d => (
                    <tr key={d.id} className="border-b border-gray-150/20 dark:border-zinc-900/50 text-[var(--text-primary)] font-semibold">
                      <td className="py-3 px-4 font-mono text-[var(--text-secondary)]">{d.id}</td>
                      <td className="py-3 px-4 font-bold">{d.name}</td>
                      <td className="py-3 px-4 text-indigo-600 dark:text-indigo-400 font-bold">{d.specialty}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${d.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>
                          {d.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {d.status === 'Pending Approval' ? (
                          <button
                            onClick={() => handleApproveDoctor(d.id)}
                            className="px-3 py-1.5 border border-emerald-200 text-emerald-500 rounded-lg text-[10px] font-bold hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                          >
                            {strings.approveLic[language] || strings.approveLic['en']}
                          </button>
                        ) : (
                          <span className="text-[10px] text-[var(--text-secondary)] font-bold">✓ {strings.verifiedLic[language] || strings.verifiedLic['en']}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FORUM MODERATOR */}
        {adminTab === 'forum' && (
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-extrabold text-lg text-[var(--text-primary)] border-b border-gray-150/40 dark:border-zinc-800 pb-2.5">
              {strings.forumTitle[language] || strings.forumTitle['en']}
            </h3>
            
            {flaggedPosts.length === 0 ? (
              <div className="text-center py-10 text-[var(--text-secondary)] text-xs font-bold bg-gray-50/50 dark:bg-zinc-900/30 rounded-xl border border-gray-150/40 dark:border-zinc-800">
                {strings.noFlags[language] || strings.noFlags['en']}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {flaggedPosts.map(post => (
                  <div key={post.id} className="p-5 rounded-xl bg-red-500/5 border border-red-200 dark:border-red-900/50 flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-extrabold text-red-500 uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                          <AlertTriangle size={14} /> {strings.flaggedReasonLbl[language] || strings.flaggedReasonLbl['en']} {post.flaggedReason}
                        </span>
                        <h4 className="font-display font-extrabold text-base text-[var(--text-primary)]">{post.title}</h4>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDeleteFlaggedPost(post.id)}
                          className="p-2.5 border border-red-200 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                          title="Delete Post"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteFlaggedPost(post.id)} // Mock approval
                          className="p-2.5 border border-emerald-200 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                          title="Dismiss Flag"
                        >
                          <CheckCircle2 size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] font-semibold leading-relaxed">{post.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
}
