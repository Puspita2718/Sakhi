# HerCare AI - Business Monetization Strategy & Product Roadmap

This document outlines subscription plans, transaction triggers, MVP feature scopes, and the development rollout timeline.

---

## 1. Subscription Tiers & Pricing Model

HerCare AI employs a freemium model combining entry-level health diaries with premium doctor-consultation packages.

| Plan | Price (INR / USD) | Included Features | Duration / Access |
| :--- | :--- | :--- | :--- |
| **Free Tier** | ₹0 / $0 | - Basic Period calendar tracking<br>- Vaginal Hygiene guides<br>- Standard Product Comparisons | Unlimited |
| **Basic Plan** | ₹499 / $5.99 | - **Doctor Chat Access** (General Physician)<br>- Smart PMS tracking & Mood insights<br>- AI Symptom assessment limit (5/month) | 7-Day Active Pass |
| **Standard Plan** | ₹1,499 / $17.99 | - **Doctor Chat + Video Calls** (Gynecologist)<br>- AI Symptom assessment (Unlimited)<br>- Dynamic Diet & Workout generator | 30-Day Active Pass |
| **Premium Plan** | ₹3,499 / $39.99 | - **Unlimited Doctor & Dietitian Video Calls**<br>- 24/7 Premium Mental Health Support<br>- Doctor-ready downloadable PDF summaries<br>- AI Wellness coaching logs | 90-Day Active Pass |

---

## 2. Monetization Strategy

In addition to subscriptions, HerCare AI secures recurring revenue streams through:
1. **Commission on Doctor Consultations**: A 15% transactional platform fee for single-session medical consultations booked outside active subscriptions.
2. **Affiliate Product Checkout**: Partnering with eco-friendly menstrual care brands (organic pads, reusable cups, panties) and charging a 10% referral fee on orders routed through our recommendations module.
3. **Enterprise Wellness Partnerships**: B2B white-labeled packages offered to corporate companies as a women's wellness benefit plan for employees.

---

## 3. MVP Feature Matrix (Version 1.0) vs Future Releases

To guarantee speed-to-market, features are segregated into immediate MVP launches and future updates.

| Feature Area | MVP Scope (V1.0) | Future Releases (V2.0+) |
| :--- | :--- | :--- |
| **Cycle Tracking** | Calendar logging of flows, cramps, moods; ovulation projections. | Wearable IoT device synchronization (basal temp, heart variability). |
| **AI Assistant** | Symptoms analyzer (PCOS, Anemia, UTI, Infections) with 3 risk ratings. | AI scan upload (reading ultrasound PDFs, hormone lab logs). |
| **Diets & Fitness** | Form generator compiling dynamic meal checklists. | Automated grocery delivery checkout via APIs (Instamart, Amazon Fresh). |
| **Consultations** | Video & Chat calendar booking; PDF upload. | Electronic Health Records (EHR) sync. |

---

## 4. Development Roadmap

```
  Phase 1: Planning & Blueprints (Weeks 1-2)  [CURRENT STATE]
  - Complete App Architecture, Database Model, API Designs, Prompts
  - Create high-fidelity interactive desktop & mobile web prototype

  Phase 2: Core Engineering & Backend Setup (Weeks 3-6)
  - Configure Node.js Express server inside AWS containers
  - Initialize MongoDB database structure
  - Integrate Firebase Authentication

  Phase 3: AI Core & Security Auditing (Weeks 7-10)
  - Setup Gemini / OpenAI API prompts, parser, and clinical disclaimers
  - Implement Double-Ratchet E2EE for chat consultations
  - Set up HTTPS TLS 1.3 encryption globally

  Phase 4: Frontend Development & Beta Launch (Weeks 11-14)
  - Build React Native / Flutter user interface
  - Implement dynamic graphs & dashboards
  - Conduct medical HIPAA compliance reviews and Beta test release
```
