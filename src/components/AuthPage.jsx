import React, { useState } from 'react';
import { Mail, Lock, User, Globe, AlertCircle, Loader } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../supabaseClient';

export default function AuthPage({ view, setPage, setUser, language }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const strings = {
    tag: { en: 'Care & Precision', hi: 'देखभाल और सटीकता', bn: 'যত্ন এবং নির্ভুলতা', ta: 'கவனிப்பு & துல்லியம்', te: 'సంరక్షణ & ఖచ్చితత్వం', mr: 'काळजी आणि अचूकता' },
    heroTitle: { en: 'Empowering your wellness with scientific clinical logs.', hi: 'वैज्ञानिक नैदानिक लॉग के साथ आपके कल्याण को सशक्त बनाना।', bn: 'বৈজ্ঞানিক ক্লিনিকাল লগ দিয়ে আপনার সুস্থতাকে ক্ষমতায়ন করা।', ta: 'அறிவியல் மருத்துவப் பதிவுகளுடன் உங்கள் ஆரோக்கியத்தை மேம்படுத்துதல்.', te: 'శాస్త్రీय క్లినికల్ లాగ్‌లతో మీ వెల్నెస్‌ని శక్తివంతం చేయడం.', mr: 'वैज्ञानिक क्लिनिकल लॉगसह आपले कल्याण सक्षम करणे.' },
    heroDesc: { en: 'Join thousands of women who securely track period cycles, consult top gynecologists, analyze biological variables, and access AI-driven nutritional strategies daily.', hi: 'उन हजारों महिलाओं में शामिल हों जो सुरक्षित रूप से अवधि चक्रों को ट्रैक करती हैं, शीर्ष स्त्री रोग विशेषज्ञों से परामर्श करती हैं, जैविक चर का विश्लेषण करती हैं, और प्रतिदिन एआई-संचालित पोषण रणनीतियों तक पहुंचती हैं।', bn: 'হাজার হাজার নারীদের সাথে যোগ দিন যারা নিরাপদে পিরিয়ড চক্র ট্র্যাক করে, শীর্ষ গাইনোকোলজিস্টদের সাথে পরামর্শ করে, জৈবিক ভেরিয়েবল বিশ্লেষণ করে এবং প্রতিদিন এআই-চালিত পুষ্টি কৌশলগুলি অ্যাক্সেস করে।', ta: 'பாதுகாப்பாக மாதவிடாய் சுழற்சிகளைக் கண்காணிக்கும் ஆயிரக்கணக்கான பெண்களுடன் சேருங்கள், சிறந்த மகளிர் மருத்துவ நிபுணர்களுடன் கலந்தாலோசிக்கவும், உயிரியல் மாறிகளைப் பகுப்பாய்வு செய்யவும், தினசரி AI-உந்துதல் ஊட்டச்சத்து உத்திகளை அணுகவும்.', te: 'పీరియడ్ సైకిల్‌లను సురక్షితంగా ట్రాక్ చేసే వేలాది మంది మహిళలతో చేరండి, అగ్ర గైనకాలజిస్ట్‌లను సంప్రదించండి, జీవసంబంధమైన వేరియబుల్స్‌ను విశ్లేషించండి మరియు రోజువారీ AI-ఆధారిత పోషకాహార వ్యూహాలను యాక్సెస్ చేయండి.', mr: 'हजारो महिलांमध्ये सामील व्हा ज्या सुरक्षितपणे पीरियड सायकल्स ट्रॅक करतात, शीर्ष स्त्रीरोग तज्ञांचा सल्ला घेतात, जैविक चलांचे विश्लेषण करतात आणि दररोज एआय-चालित पौष्टिक धोरणांमध्ये प्रवेश करतात.' },
    standards: { en: 'Clinical Standards', hi: 'नैदानिक मानक', bn: 'ক্লিনিকাল স্ট্যান্ডার্ড', ta: 'மருத்துவ தரநிலைகள்', te: 'క్లినికల్ ప్రమాణాలు', mr: 'क्लिनिकल मानके' },
    hipaa: { en: '100% HIPAA & GDPR Compliant', hi: '100% HIPAA और GDPR अनुपालन', bn: '১০০% HIPAA এবং GDPR অনুগত', ta: '100% HIPAA மற்றும் GDPR இணக்கமானது', te: '100% HIPAA & GDPR కంప్లైంట్', mr: '100% HIPAA आणि GDPR सुसंगत' },
    titles: {
      login: { en: 'Welcome Back', hi: 'वापसी पर स्वागत है', bn: 'স্বাগতম', ta: 'மீண்டும் வருக', te: 'మరలా స్వాగతం', mr: 'पुन्हा स्वागत आहे' },
      signup: { en: 'Create Account', hi: 'खाता बनाएं', bn: 'অ্যাকাউন্ট তৈরি করুন', ta: 'கணக்கை உருவாக்கு', te: 'ఖాతాను సృష్టించండి', mr: 'खाते तयार करा' },
      forgot: { en: 'Reset Password', hi: 'पासवर्ड रीसेट करें', bn: 'পাসওয়ার্ড রিসেट করুন', ta: 'கடவுச்சொல்லை மீட்டமை', te: 'పాస్‌వర్డ్‌ని రీసెట్ చేయండి', mr: 'पासवर्ड रीसेट करा' }
    },
    subtitles: {
      login: { en: 'Sign in to access your private health dashboard.', hi: 'अपने निजी स्वास्थ्य डैशबोर्ड तक पहुंचने के लिए साइन इन करें।', bn: 'আপনার ব্যক্তিগত স্বাস্থ্য ড্যাশবোর্ড অ্যাক্সেস করতে সাইন ইন করুন।', ta: 'உங்கள் தனிப்பட்ட சுகாதார டாஷ்போர்டை அணுக உள்நுழையவும்.', te: 'మీ ప్రైవేట్ హెల్త్ డ్యాష్‌బోర్డ్‌ను యాక్సెస్ చేయడానికి సైన్ ఇన్ చేయండి.', mr: 'तुमच्या खाजगी आरोग्य डॅशबोर्डवर प्रवेश करण्यासाठी साइन इन करा.' },
      forgot: { en: 'Initialize your secure, personalized care logs.', hi: 'अपने सुरक्षित, व्यक्तिगत देखभाल लॉग आरंभ करें।', bn: 'আপনার সুরক্ষিত, ব্যক্তিগতকৃত যত্নের লগগুলি শুরু করুন।', ta: 'உங்கள் பாதுகாப்பான, தனிப்பயனாக்கப்பட்ட பராமரிப்புப் பதிவுகளைத் தொடங்கவும்.', te: 'మీ సురక్షితమైన, వ్యక్తిగతీకరించిన సంరక్షణ లాగ్‌లను ప్రారంభించండి.', mr: 'तुमचे सुरक्षित, वैयक्तिकृत केअर लॉग सुरू करा.' }
    },
    firstName: { en: 'First Name', hi: 'पहला नाम', bn: 'প্রথম নাম', ta: 'முதல் பெயர்', te: 'మొదటి పేరు', mr: 'पहिले नाव' },
    emailLbl: { en: 'Email Address', hi: 'ईमेल पता', bn: 'ইমেইল ঠিকানা', ta: 'மின்னஞ்சல் முகவரி', te: 'ఇమెయిల్ చిరునామా', mr: 'ईमेल पत्ता' },
    passwordLbl: { en: 'Password', hi: 'पासवर्ड', bn: 'পাসওয়ার্ড', ta: 'கடவுச்சொல்', te: 'పాస్‌వర్డ్', mr: 'पासवर्ड' },
    forgotBtn: { en: 'Forgot Password?', hi: 'पासवर्ड भूल गए?', bn: 'पাসওয়ার্ড ভুলে গেছেন?', ta: 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?', te: 'పాస్‌వర్డ్ మర్చిపోయారా?', mr: 'पासवर्ड विसरलात?' },
    sendReset: { en: 'Send Reset Link', hi: 'रीसेट लिंक भेजें', bn: 'রিসেট লিঙ্ক পাঠান', ta: 'மீட்டமைப்பு இணைப்பை அனுப்பவும்', te: 'రీసెట్ లింక్‌ని పంపండి', mr: 'रीसेट लिंक पाठवा' },
    backLogin: { en: 'Back to Login', hi: 'लॉगिन पर वापस', bn: 'লগইন এ ফিরে যান', ta: 'உள்நுழைவுக்குத் திரும்பு', te: 'లాగిన్‌కి తిరిగి వెళ్ళు', mr: 'लॉगिनवर परत' },
    authBtn: { en: 'Authenticate Sign In', hi: 'साइन इन प्रमाणित करें', bn: 'সাইন ইন প্রমাণীকরণ করুন', ta: 'உள்நுழைவை அங்கீகரிக்கவும்', te: 'సైన్ ఇన్ ప్రామాణీకరించండి', mr: 'साइन इन प्रमाणित करा' },
    regBtn: { en: 'Register Account', hi: 'खाता पंजीकृत करें', bn: 'অ্যাকাউন্ট নিবন্ধন করুন', ta: 'கணக்கை பதிவு செய்', te: 'ఖాతాను నమోదు చేయండి', mr: 'खाते नोंदणी करा' },
    orAuth: { en: 'or authenticate with', hi: 'या इसके साथ प्रमाणित करें', bn: 'অথबा দিয়ে প্রমাণীকরণ করুন', ta: 'அல்லது அங்கீகரிக்கவும்', te: 'లేదా ప్రామాణీకరించండి', mr: 'किंवा यासह प्रमाणित करा' },
    googleAuth: { en: 'Google Authentication', hi: 'Google प्रमाणीकरण', bn: 'Google প্রমাণীকরণ', ta: 'Google அங்கீகாரம்', te: 'Google ప్రమాణీకరణ', mr: 'Google प्रमाणीकरण' },
    needAcc: { en: 'Need an account? ', hi: 'खाता चाहिए? ', bn: 'অ্যাকাউন্ট প্রয়োজন? ', ta: 'கணக்கு வேண்டுமா? ', te: 'ఖాతా కావాలా? ', mr: 'खाते हवे आहे? ' },
    haveAcc: { en: 'Have an account already? ', hi: 'क्या आपके पास पहले से खाता है? ', bn: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে? ', ta: 'ஏற்கனவே ஒரு கணக்கு உள்ளதா? ', te: 'ఇప్పటికే ఖాతా ఉందా? ', mr: 'आधीच खाते आहे? ' },
    regHere: { en: 'Register here', hi: 'यहां रजिस्टर करें', bn: 'এখানে নিবন্ধন করুন', ta: 'இங்கே பதிவு செய்யவும்', te: 'ఇక్కడ నమోదు చేసుకోండి', mr: 'येथे नोंदणी करा' },
    loginHere: { en: 'Login here', hi: 'यहां लॉगिन करें', bn: 'এখানে লগইন করুন', ta: 'இங்கே உள்நுழையவும்', te: 'ఇక్కడ లాగిన్ చేయండి', mr: 'येथे लॉगिन करा' }
  };

  const handleAuth = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!email || !password) return;
    
    setErrorMsg('');
    setSuccessMsg('');
    setIsLoading(true);

    try {
      if (view === 'login') {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        
        // Successful login
        const supabaseUser = data.user;
        setUser({
          firstName: supabaseUser.user_metadata?.firstName || supabaseUser.email.split('@')[0],
          lastName: supabaseUser.user_metadata?.lastName || '',
          email: supabaseUser.email,
          isAdmin: supabaseUser.email === 'admin@arogyanari.ai',
          subscriptionPlan: 'standard'
        });
        setPage('dashboard');
      } else if (view === 'signup') {
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              firstName: firstName || '',
            }
          }
        });
        if (signUpError) throw signUpError;

        // If session returned immediately (email confirm disabled), go to dashboard
        if (signUpData.session) {
          setUser({
            firstName: firstName || email.split('@')[0],
            lastName: '',
            email: email,
            isAdmin: email === 'admin@arogyanari.ai',
            subscriptionPlan: 'standard'
          });
          setPage('dashboard');
        } else {
          // Email confirmation required — attempt sign-in anyway to check
          const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
          if (!signInError && signInData.session) {
            setUser({
              firstName: firstName || signInData.user?.user_metadata?.firstName || email.split('@')[0],
              lastName: '',
              email: email,
              isAdmin: email === 'admin@arogyanari.ai',
              subscriptionPlan: 'standard'
            });
            setPage('dashboard');
          } else {
            setSuccessMsg('Account created! Check your email inbox to confirm, then come back and sign in.');
          }
        }
      }
    } catch (err) {
      if (err.message === 'Failed to fetch') {
        setErrorMsg('Connection to Supabase failed ("Failed to fetch"). Your database project may be paused/deleted, or you are offline. Check your Supabase dashboard, or set VITE_USE_MOCK=true in your .env file to use Sandbox Mock mode.');
      } else {
        setErrorMsg(err.message || 'Authentication failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!email) return;

    setErrorMsg('');
    setSuccessMsg('');
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      setSuccessMsg('Verification reset link queued. Check your inbox.');
    } catch (err) {
      setErrorMsg(err.message || 'Failed to send reset link.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMsg('');
    setSuccessMsg('');
    setIsLoading(true);

    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: window.location.origin
          }
        });
        if (error) throw error;
      } else {
        // Sandbox Mock login
        setUser({
          firstName: 'Ananya',
          lastName: 'Sharma',
          email: 'ananya@example.com',
          subscriptionPlan: 'standard'
        });
        setPage('dashboard');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Google authentication failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="slide-in flex items-center justify-center min-h-[600px] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden glass-panel border border-gray-150/30 bg-white/70 dark:bg-zinc-955/20 shadow-xs animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full min-h-[600px]">
        
        {/* Left branding panel */}
        <div className="hidden md:flex md:col-span-5 bg-gradient-to-tr from-feminine-pink to-feminine-purple text-white p-10 flex-col justify-between text-left relative overflow-hidden">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-2xl"></div>

          <div className="flex flex-col gap-2 relative z-10">
            <span className="font-display font-extrabold tracking-tight text-2xl">ArogyaNari</span>
            <span className="text-[10px] uppercase font-bold tracking-widest bg-white/25 px-2.5 py-0.5 rounded-full w-fit">{strings.tag[language] || strings.tag['en']}</span>
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            <h3 className="font-display text-2xl font-extrabold leading-tight">
              {strings.heroTitle[language] || strings.heroTitle['en']}
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              {strings.heroDesc[language] || strings.heroDesc['en']}
            </p>
          </div>

          <div className="flex flex-col gap-1 relative z-10">
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider">{strings.standards[language] || strings.standards['en']}</span>
            <span className="text-xs font-semibold">{strings.hipaa[language] || strings.hipaa['en']}</span>
          </div>
        </div>

        {/* Right auth form panel */}
        <div className="col-span-1 md:col-span-7 p-8 sm:p-12 flex flex-col justify-center gap-6 bg-white/40 dark:bg-zinc-900/10 text-left animate-fade-in">
          



          {/* Success / Error Messages */}
          {errorMsg && (
            <div className="p-3.5 bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 rounded-xl text-[11px] text-red-650 dark:text-red-400 font-bold flex items-center gap-2.5">
              <AlertCircle size={14} className="text-red-500 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
          {successMsg && (
            <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 rounded-xl text-[11px] text-emerald-650 dark:text-emerald-400 font-bold flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span>{successMsg}</span>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <h2 className="font-display font-extrabold text-2xl text-[var(--text-primary)]">
              {view === 'login' ? (strings.titles.login[language] || strings.titles.login['en']) : view === 'signup' ? (strings.titles.signup[language] || strings.titles.signup['en']) : (strings.titles.forgot[language] || strings.titles.forgot['en'])}
            </h2>
            <span className="text-xs text-[var(--text-secondary)] font-extrabold">
              {view === 'login' ? (strings.subtitles.login[language] || strings.subtitles.login['en']) : (strings.subtitles.forgot[language] || strings.subtitles.forgot['en'])}
            </span>
          </div>

          {view === 'forgot' ? (
            <form onSubmit={handleResetPassword} className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[var(--text-secondary)]">{strings.emailLbl[language] || strings.emailLbl['en']}</span>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-800 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" required />
                </div>
              </div>
              <button type="submit" disabled={isLoading} className="rounded-full bg-feminine-pink hover:bg-feminine-pink/90 text-white py-3.5 font-bold shadow-lg shadow-pink-500/20 transition-all duration-300 cursor-pointer flex justify-center items-center gap-2">
                {isLoading && <Loader size={14} className="animate-spin" />}
                <span>{strings.sendReset[language] || strings.sendReset['en']}</span>
              </button>
              <button type="button" onClick={() => setPage('login')} className="text-center font-bold text-feminine-purple hover:underline mt-2 cursor-pointer">
                {strings.backLogin[language] || strings.backLogin['en']}
              </button>
            </form>
          ) : (
            <form onSubmit={handleAuth} className="flex flex-col gap-4 text-xs">
              
              {view === 'signup' && (
                <div className="flex flex-col gap-1.5 animate-fade-in">
                  <span className="font-semibold text-[var(--text-secondary)]">{strings.firstName[language] || strings.firstName['en']}</span>
                  <div className="relative">
                    <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-800 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" required />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[var(--text-secondary)]">{strings.emailLbl[language] || strings.emailLbl['en']}</span>
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-850 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" required />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[var(--text-secondary)]">{strings.passwordLbl[language] || strings.passwordLbl['en']}</span>
                  {view === 'login' && (
                    <button type="button" onClick={() => setPage('forgot')} className="font-bold text-[10px] text-feminine-purple hover:underline cursor-pointer">
                      {strings.forgotBtn[language] || strings.forgotBtn['en']}
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 outline-none text-gray-800 dark:text-zinc-200 focus:border-feminine-pink transition-colors font-semibold" required />
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="rounded-full bg-gradient-to-r from-feminine-pink to-feminine-purple py-3.5 font-bold text-white shadow-xl shadow-pink-500/20 active:scale-98 transition-all duration-300 cursor-pointer flex justify-center items-center gap-2">
                {isLoading && <Loader size={14} className="animate-spin" />}
                <span>{view === 'login' ? (strings.authBtn[language] || strings.authBtn['en']) : (strings.regBtn[language] || strings.regBtn['en'])}</span>
              </button>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-gray-200/60 dark:border-zinc-800"></div>
                <span className="flex-shrink mx-4 text-[9px] text-[var(--text-secondary)] font-extrabold uppercase tracking-wider">{strings.orAuth[language] || strings.orAuth['en']}</span>
                <div className="flex-grow border-t border-gray-200/60 dark:border-zinc-800"></div>
              </div>

              <button type="button" disabled={isLoading} onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 rounded-full border border-gray-250 bg-white dark:bg-zinc-900 py-3 font-bold text-xs text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-850/50 transition-colors cursor-pointer shadow-xs">
                <Globe size={14} className="text-feminine-pink animate-pulse" /> {strings.googleAuth[language] || strings.googleAuth['en']}
              </button>

              <span className="text-center text-[11px] text-[var(--text-secondary)] font-bold mt-1">
                {view === 'login' ? (strings.needAcc[language] || strings.needAcc['en']) : (strings.haveAcc[language] || strings.haveAcc['en'])}
                <button type="button" onClick={() => setPage(view === 'login' ? 'signup' : 'login')} className="font-bold text-feminine-purple hover:underline cursor-pointer">
                  {view === 'login' ? (strings.regHere[language] || strings.regHere['en']) : (strings.loginHere[language] || strings.loginHere['en'])}
                </button>
              </span>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
