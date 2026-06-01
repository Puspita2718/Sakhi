import React, { useState } from 'react';
import { BookOpen, Database, Code, ShieldCheck, Cpu } from 'lucide-react';

export default function ServerBlueprints() {
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

  return (
    <div className="slide-in flex flex-col gap-8">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl bg-gradient-to-tr from-purple-50/50 to-indigo-50/50 dark:from-zinc-900/40 dark:to-zinc-950/40">
        <h1 className="font-display text-3xl font-extrabold tracking-tight dark:text-white flex items-center gap-2.5">
          <Cpu size={28} className="text-feminine-purple" /> Scalable Node.js & MongoDB Blueprints
        </h1>
        <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1">Review the production-ready Mongoose database schemas and Express.js REST controllers compiled for SAKHI.</p>
      </div>

      {/* Selector */}
      <div className="flex gap-2.5 border-b border-gray-200/50 dark:border-zinc-800 pb-2">
        <button
          onClick={() => setActiveCodeTab('database')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${activeCodeTab === 'database' ? 'bg-feminine-purple text-white shadow-md' : 'text-gray-500 hover:text-feminine-purple'}`}
        >
          <Database size={14} /> Mongoose Schemas (MongoDB)
        </button>
        <button
          onClick={() => setActiveCodeTab('api')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${activeCodeTab === 'api' ? 'bg-feminine-purple text-white shadow-md' : 'text-gray-500 hover:text-feminine-purple'}`}
        >
          <Code size={14} /> Express REST Controller
        </button>
      </div>

      {/* Code viewer viewport */}
      <div className="glass-panel p-6 rounded-2xl relative overflow-hidden bg-zinc-950 text-zinc-100 font-mono text-xs border border-zinc-800 shadow-2xl">
        <div className="absolute top-3 right-4 flex items-center gap-1.5 text-[10px] text-zinc-500 bg-zinc-900/80 border border-zinc-800 rounded px-2 py-1">
          <ShieldCheck size={12} className="text-emerald-500" /> SECURE CODE SPEC
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
