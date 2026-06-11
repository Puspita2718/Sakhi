import React, { useState } from 'react';
import { BookOpen, Database, Code, ShieldCheck, Cpu } from 'lucide-react';

export default function ServerBlueprints({ language = 'en' }) {
  const [activeCodeTab, setActiveCodeTab] = useState('database');

  const databaseCodes = `// MongoDB Mongoose Models - /server/models/Schemas.js
const mongoose = require('mongoose');

// 1. User & Intimate Health Profile Schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  subscription: {
    plan: { type: String, enum: ['free', 'basic', 'standard', 'premium'], default: 'free' },
    status: { type: String, default: 'free' },
    expiresAt: { type: Date }
  }
}, { timestamps: true });

// 2. Menstrual Cycle Logger Schema
const CycleLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logDate: { type: String, required: true }, // Format YYYY-MM-DD
  isPeriodDay: { type: Boolean, default: false },
  flowIntensity: { type: String, enum: ['none', 'spotting', 'light', 'medium', 'heavy'] },
  flowColor: { type: String, enum: ['bright_red', 'dark_red', 'brown', 'pink', 'orange', 'gray', 'none'] },
  symptoms: [{ type: String }],
  moods: [{ type: String }],
  waterIntakeMl: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = {
  User: mongoose.model('User', UserSchema),
  CycleLog: mongoose.model('CycleLog', CycleLogSchema)
};`;

  const apiControllerCodes = `// Express.js REST API Controller - /server/controllers/cycleController.js
const { CycleLog } = require('../models/Schemas');

// POST - Log daily health parameters
exports.logDailyMetrics = async (req, res) => {
  try {
    const { logDate, isPeriodDay, flowIntensity, flowColor, symptoms, moods, waterIntakeMl } = req.body;
    const userId = req.user.id; // Set by JWT Middleware

    const updatedLog = await CycleLog.findOneAndUpdate(
      { userId, logDate },
      { 
        isPeriodDay, 
        flowIntensity, 
        flowColor, 
        symptoms, 
        moods, 
        waterIntakeMl 
      },
      { upsert: true, new: true }
    );

    res.status(200).json({
      success: true,
      message: "Daily health metric successfully saved.",
      log: updatedLog
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};`;

  const strings = {
    title: {
      en: 'Scalable Node.js & MongoDB Blueprints',
      hi: 'स्केलेबल नोड.जेएस और मोंगोडीबी ब्लूप्रिंट',
      bn: 'স্কেলেবল নোড.জেএস এবং মঙ্গোডিবি ব্লুপ্রিন্ট',
      ta: 'அளவிடக்கூடிய Node.js & MongoDB ப்ளூபிரிண்ட்கள்',
      te: 'స్కేలబుల్ Node.js & MongoDB బ్లూప్రింట్‌లు',
      mr: 'स्केलेबल Node.js आणि MongoDB ब्लूप्रिंट्स'
    },
    desc: {
      en: 'Review the production-ready Mongoose database schemas and Express.js REST controllers compiled for ArogyaNari.',
      hi: 'सखी के लिए संकलित उत्पादन-तैयार मोंगोस डेटाबेस स्कीमा और एक्सप्रेस.जेएस रेस्ट नियंत्रकों की समीक्षा करें।',
      bn: 'সখীর জন্য সংকলিত উত্পাদন-প্রস্তুত মঙ্গুজ ডাটাবেস স্কিমা এবং এক্সপ্রেস.জেএস REST কন্ট্রোলারগুলি পর্যালোচনা করুন।',
      ta: 'சகிக்காக தொகுக்கப்பட்ட தயாரிப்புக்கு தயாராக உள்ள Mongoose தரவுத்தள திட்டங்கள் மற்றும் Express.js REST கட்டுப்படுத்திகளை மதிப்பாய்வு செய்யவும்.',
      te: 'సఖి కోసం కంపైల్ చేయబడిన ఉత్పత్తి-సిద్ధంగా ఉన్న Mongoose డేటాబేస్ స్కీమాలు మరియు Express.js REST కంట్రోలర్‌లను సమీక్షించండి.',
      mr: 'सखीसाठी संकलित केलेले उत्पादन-तयार Mongoose डेटाबेस स्कीमा आणि Express.js REST कंट्रोलर्सचे पुनरावलोकन करा.'
    },
    db: {
      en: 'Mongoose Schemas (MongoDB)',
      hi: 'मोंगोस स्कीमा (मोंगोडीबी)',
      bn: 'মঙ্গুজ স্কিমা (মঙ্গোডিবি)',
      ta: 'Mongoose திட்டங்கள் (MongoDB)',
      te: 'మంగూస్ స్కీమాలు (మొంగోడీబీ)',
      mr: 'मंगूज स्कीमा (मोंगोडीबी)'
    },
    api: {
      en: 'Express REST Controller',
      hi: 'एक्सप्रेस रेस्ट कंट्रोलर',
      bn: 'এক্সপ্রেস REST কন্ট্রোলার',
      ta: 'Express REST கட்டுப்படுத்தி',
      te: 'ఎక్స్‌ప్రెస్ REST కంట్రోలర్',
      mr: 'एक्स्प्रेस REST कंट्रोलर'
    },
    secure: {
      en: 'SECURE CODE SPEC',
      hi: 'सुरक्षित कोड विशिष्टता',
      bn: 'নিরাপদ কোড স্পেক',
      ta: 'பாதுகாப்பான குறியீடு விவரக்குறிப்பு',
      te: 'సురక్షిత కోడ్ స్పెక్',
      mr: 'सुरक्षित कोड स्पेसिफिकेशन'
    }
  };

  return (
    <div className="slide-in flex flex-col gap-8">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl bg-gradient-to-tr from-purple-50/50 to-indigo-50/50 dark:from-zinc-900/40 dark:to-zinc-950/40 text-left">
        <h1 className="font-display text-3xl font-extrabold tracking-tight dark:text-white flex items-center gap-2.5">
          <Cpu size={28} className="text-feminine-purple" /> {strings.title[language] || strings.title['en']}
        </h1>
        <p className="text-xs text-[var(--text-secondary)] font-semibold mt-1">
          {strings.desc[language] || strings.desc['en']}
        </p>
      </div>

      {/* Selector */}
      <div className="flex gap-2.5 border-b border-gray-150/50 dark:border-zinc-800 pb-2">
        <button
          onClick={() => setActiveCodeTab('database')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all border cursor-pointer ${activeCodeTab === 'database' ? 'bg-feminine-purple text-white shadow-md border-feminine-purple' : 'bg-transparent text-[var(--text-secondary)] border-transparent hover:border-feminine-purple/30 hover:text-feminine-purple'}`}
        >
          <Database size={14} /> {strings.db[language] || strings.db['en']}
        </button>
        <button
          onClick={() => setActiveCodeTab('api')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all border cursor-pointer ${activeCodeTab === 'api' ? 'bg-feminine-purple text-white shadow-md border-feminine-purple' : 'bg-transparent text-[var(--text-secondary)] border-transparent hover:border-feminine-purple/30 hover:text-feminine-purple'}`}
        >
          <Code size={14} /> {strings.api[language] || strings.api['en']}
        </button>
      </div>

      {/* Code viewer viewport */}
      <div className="glass-panel p-6 rounded-2xl relative overflow-hidden bg-zinc-950 text-zinc-100 font-mono text-xs border border-zinc-800 shadow-2xl text-left">
        <div className="absolute top-3 right-4 flex items-center gap-1.5 text-[10px] text-zinc-500 bg-zinc-900/80 border border-zinc-800 rounded px-2 py-1 font-extrabold uppercase tracking-widest">
          <ShieldCheck size={12} className="text-emerald-500" /> {strings.secure[language] || strings.secure['en']}
        </div>
        
        <pre className="overflow-x-auto leading-relaxed pt-4">
          <code>
            {activeCodeTab === 'database' ? databaseCodes : apiControllerCodes}
          </code>
        </pre>
      </div>

    </div>
  );
}
