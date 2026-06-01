# HerCare AI - Database Schema Specification (MongoDB / Mongoose)

This document contains production-ready MongoDB database models mapped using Mongoose schemas for Node.js.

---

## 1. User & Subscription Schema

Tracks profile registration details, language settings, health parameters, subscription status, and security preferences.

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true }, // Encrypted bcrypt hash
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  country: { type: String, default: 'IN' },
  languagePreference: { type: String, enum: ['en', 'hi', 'bn', 'ta', 'te', 'mr'], default: 'en' },
  
  // Health Metrics
  heightCm: { type: Number },
  weightKg: { type: Number },
  averageCycleLengthDays: { type: Number, default: 28 },
  averagePeriodLengthDays: { type: Number, default: 5 },
  medicalConditions: [{ type: String }], // e.g., ['PCOS', 'Anemia']
  allergies: [{ type: String }],
  
  // Subscription Information
  subscription: {
    plan: { type: String, enum: ['free', 'basic', 'standard', 'premium'], default: 'free' },
    status: { type: String, enum: ['active', 'paused', 'canceled', 'expired'], default: 'free' },
    stripeCustomerId: { type: String },
    stripeSubscriptionId: { type: String },
    expiresAt: { type: Date }
  },

  // Security & Consents
  security: {
    hipaaConsentSigned: { type: Boolean, default: false },
    hipaaConsentDate: { type: Date },
    dataSharingOptIn: { type: Boolean, default: false }
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
```

---

## 2. Menstrual Cycle & Symptom Log Schema

Stores daily tracker entries. The combination of flow, symptoms, and temperature allows the ML/AI modules to predict ovulation and trigger irregularity alerts.

```javascript
const CycleLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  logDate: { type: Date, required: true, index: true }, // Format: YYYY-MM-DD
  
  // Cycle Events
  isPeriodDay: { type: Boolean, default: false },
  flowIntensity: { type: String, enum: ['none', 'spotting', 'light', 'medium', 'heavy'], default: 'none' },
  flowColor: { type: String, enum: ['bright_red', 'dark_red', 'brown', 'pink', 'orange', 'gray', 'none'], default: 'none' },
  
  // Basal Body Temperature & Mucus (Ovulation markers)
  basalBodyTempCelsius: { type: Number },
  cervicalMucusTexture: { type: String, enum: ['dry', 'sticky', 'creamy', 'watery', 'egg_white', 'none'], default: 'none' },

  // Tracking details
  symptoms: [{ type: String }], // e.g., ['cramps', 'fatigue', 'bloating', 'headache', 'backache']
  symptomSeverity: { type: String, enum: ['mild', 'moderate', 'severe'], default: 'mild' },
  moods: [{ type: String }], // e.g., ['happy', 'irritable', 'sad', 'anxious', 'calm']
  waterIntakeMl: { type: Number, default: 0 },
  weightKg: { type: Number },
  notes: { type: String },

  // System Predictions
  predictionTags: {
    isOvulationDay: { type: Boolean, default: false },
    isFertileWindow: { type: Boolean, default: false },
    isIrregularAlertTriggered: { type: Boolean, default: false }
  }
}, { timestamps: true });

// Avoid duplicate logs for the same day
CycleLogSchema.index({ userId: 1, logDate: 1 }, { unique: true });

module.exports = mongoose.model('CycleLog', CycleLogSchema);
```

---

## 3. Secure Doctor Consultation Schema

Contains information on booking sessions, chat details, and prescriptions.

```javascript
const ConsultationSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true, index: true },
  scheduledTime: { type: Date, required: true },
  status: { type: String, enum: ['booked', 'active', 'completed', 'canceled'], default: 'booked' },
  consultationType: { type: String, enum: ['chat', 'video'], required: true },
  
  // Double-Ratchet E2EE Key Management References
  e2eePublicKeyPatient: { type: String },
  e2eePublicKeyDoctor: { type: String },

  // Prescriptions & Reports
  prescriptions: [{
    fileName: { type: String },
    fileUrl: { type: String }, // AWS S3 Encrypted reference
    uploadedAt: { type: Date, default: Date.now }
  }],
  followUpReminders: [{
    reminderDate: { type: Date },
    message: { type: String },
    isSent: { type: Boolean, default: false }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Consultation', ConsultationSchema);
```

---

## 4. Personalized Diet Plan Schema

Stores personal nutrition parameters, meal recommendations, and grocery lists.

```javascript
const DietPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  targetCondition: { type: String, enum: ['PCOS', 'weight_loss', 'pregnancy', 'anemia', 'general'], required: true },
  budgetLevel: { type: String, enum: ['economy', 'standard', 'premium'], default: 'standard' },
  country: { type: String, default: 'India' },
  
  // Weekly meal distribution
  meals: {
    monday: { breakfast: String, lunch: String, dinner: String, snack: String },
    tuesday: { breakfast: String, lunch: String, dinner: String, snack: String },
    wednesday: { breakfast: String, lunch: String, dinner: String, snack: String },
    thursday: { breakfast: String, lunch: String, dinner: String, snack: String },
    friday: { breakfast: String, lunch: String, dinner: String, snack: String },
    saturday: { breakfast: String, lunch: String, dinner: String, snack: String },
    sunday: { breakfast: String, lunch: String, dinner: String, snack: String }
  },
  
  shoppingList: [{
    itemName: { type: String },
    category: { type: String }, // e.g. 'Produce', 'Grains'
    estimatedCost: { type: Number },
    isBought: { type: Boolean, default: false }
  }],

  budgetAlternatives: [{
    originalItem: { type: String },
    cheaperSwap: { type: String },
    costSaving: { type: Number }
  }]
}, { timestamps: true });

module.exports = mongoose.model('DietPlan', DietPlanSchema);
```

---

## 5. Community Forum Schema

Tracks threads and replies. Supports anonymous postings.

```javascript
const ForumPostSchema = new mongoose.Schema({
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, enum: ['pcos', 'pregnancy', 'general_wellness', 'hygiene', 'mental_health'], required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  isAnonymous: { type: Boolean, default: false },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  replies: [{
    replierId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    isAnonymous: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

module.exports = mongoose.model('ForumPost', ForumPostSchema);
```
