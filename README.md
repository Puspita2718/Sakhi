# SAKHI - AI-Powered Women's Health & Wellness Platform

![SAKHI Banner](/hero_doctor.png)

> A premium, HIPAA-compliant digital sanctuary offering intelligent symptom analysis, menstrual tracking, customized nutrition planners, and peer-to-peer expert forums.

[Live Demo](#) • [Website](#) • [Documentation](#) • [Report Issues](#)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Architecture](#-system-architecture)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Folder Structure](#-folder-structure)
- [Roadmap](#-roadmap)
- [Security](#-security)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Team](#-team)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)

---

# 📖 Overview

SAKHI is a comprehensive FemTech health platform built to address critical diagnostic and daily wellness support gaps for women's care globally. Focused on privacy, precision, and elegance, SAKHI translates clinical medical details into manageable, intuitive indicators.

### What problem does it solve?
- **Diagnostic Delay**: Hormonal conditions like PCOS and Endometriosis often take years to diagnose. SAKHI leverages intelligent AI symptom loggers to speed up assessment timelines.
- **Data Fragmentation**: Replaces scattered apps with a single, beautiful dashboard covering menstrual flow indicators, biological tracking, nutrition therapy, and mental wellness.
- **Social Stigma**: Provides a safe-space anonymous community forum where women can share health struggles and consult qualified specialists without privacy risks.

### Why was it built?
It was engineered to offer a high-fidelity, premium medical interface with beautiful glassmorphic transitions and harmonized high-contrast HSL color schemes that feel welcoming and professional.

### Who is it for?
Specifically designed for women tracking hormonal wellness, reproductive health journeys, cycle phases, and seeking clinical nutritional interventions.

---

# ✨ Features

## Core Features
- **Menstrual Cycle Tracker & Logger**: Beautiful calendar tracking with flow intensity grids, period duration predictions, and ovulation window indicators.
- **Blood Color Analyzer**: Translates menstrual discharge details into biological oxygen indicators with clinical alerts.
- **Zen Breathing Sphere**: Interactive animation using customized scale breathing ratios to lower cortisol and ease stress.

## AI Features
- **My Health Chat (AI Assistant)**: A secure conversational assistant offering immediate symptom triaging and lifestyle alignment.
- **Hormonal Cycle Decoders**: Predictive algorithms detailing phase-syncing requirements.
- **Dynamic Diet & Fitness Planners**: Automated generators for low-GI PCOS meals, local ingredients swapping, and custom yoga sheets.

## User Features
- **Split-Screen Authentication**: Elegant HIPAA-compliant login, signup, and verification routines.
- **Personalized Health Landscape**: Premium Slate-charcoal cards showing daily statistics, hydration tracks, and meal plan statuses.
- **Profile Parameters**: Customizable age, sleep targets, hydration logs, and premium subscription tracking.

## Admin Features
- **Clinical Analytics**: Aggregate demographic statistics showing anonymous symptom report frequencies.
- **Moderator Dashboard**: User controls and peer story approval mechanisms.

---

# 📸 Screenshots

## Landing Page
![SAKHI Landing Page](/hero_doctor.png)

## Health Conditions
| PCOS Management | Endometriosis Care | Pelvic Health | Pregnancy Journey |
|---|---|---|---|
| ![](/pcos_flowers.png) | ![](/endometriosis_vases.png) | ![](/pelvic_spiral.png) | ![](/pregnancy_belly.png) |

## Reading & Research Hub
| Gut Health & Hormones | Interpreting Fertility Data |
|---|---|
| ![](/rolled_towels.png) | ![](/smartwatch_health.png) |

---

# 🛠 Tech Stack

## Frontend
- **React 19**: Responsive component architecture.
- **Vite 8**: Ultra-fast hot-reloading development server.
- **Tailwind CSS v4 & PostCSS**: Custom theme styles and glassmorphism definitions.
- **Framer Motion**: Premium, smooth micro-animations.
- **Lucide Icons**: Crisp vector clinical icons.

## Backend (Simulation Layer)
- **JWT Client Storage**: Encrypted simulation states.
- **Redundant Event Fallbacks**: High-reliability form handlers.

---

# 🏗 System Architecture

```text
       ┌─────────────────────────────────────────────────────────┐
       │                       User Agent                        │
       └────────────────────────────┬────────────────────────────┘
                                    │ (HTTPS / WSS)
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                 Vite Client (React 19)                  │
       │  ┌───────────────────────────────────────────────────┐  │
       │  │             Navbar & Sidebar Layouts             │  │
       │  └─────────────────────────┬─────────────────────────┘  │
       │                            ▼                            │
       │  ┌───────────────────────────────────────────────────┐  │
       │  │               Private View Controller             │  │
       │  │ ┌───────────────┬───────────────────┬───────────┐ │  │
       │  │ │ Dashboard.jsx │ BloodAnalysis.jsx │ Zen.jsx   │ │  │
       │  │ └───────────────┴───────────────────┴───────────┘ │  │
       │  └─────────────────────────┬─────────────────────────┘  │
       └────────────────────────────┼────────────────────────────┘
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                SAKHI Logic & AI Services                │
       │  ┌───────────────────────────────────────────────────┐  │
       │  │     HIPAA Client Encryption & LocalStorage State  │  │
       │  └─────────────────────────┬─────────────────────────┘  │
       │                            ▼                            │
       │  ┌───────────────────────────────────────────────────┐  │
       │  │           Conversational Assistant Engine         │  │
       │  └───────────────────────────────────────────────────┘  │
       └─────────────────────────────────────────────────────────┘
```

---

# 📥 Installation

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Puspita2718/Sakhi.git
   cd Sakhi
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5174/` in your browser.

---

# ⚙ Configuration

Create a `.env` file in the root directory to customize parameters (optional):

```env
VITE_API_URL=https://api.sakhi.ai
VITE_ENABLE_ANALYTICS=true
VITE_APP_MODE=development
```

---

# 🚀 Usage

### 1. Cycle Tracking
Select any date on the **Cycle Calendar** grid to log period flow intensities (Light, Medium, Heavy, Spotting), biological symptoms, and emotional moods.

### 2. Medical Readings
Use the **Blood Analysis** tab to analyze flow colors or view recommended diet suggestions tailored to your iron indicators.

### 3. Stress Reduction
Visit the **Zen Room** to engage the animated sphere breathing helpers.

---

# 📄 API Documentation

The platform interacts with mock client endpoints designed for offline-first state persistence:

### User Profile
- `GET /api/user/profile` — Retrieves biological parameters (age, hydration targets, cycle length).
- `POST /api/user/profile` — Updates parameter variables.

---

# 📂 Folder Structure

```text
SAKHI/
├── public/                 # Static clinical assets & PNGs
├── src/
│   ├── assets/             # Brand logos & SVGs
│   ├── components/
│   │   ├── AIChatbot.jsx   # AI clinical triaging system
│   │   ├── Dashboard.jsx   # Main metrics, calendar, & meal cards
│   │   ├── Navbar.jsx      # Universal top public header
│   │   ├── PublicPages.jsx # Landing page, split-screen auth, and profile
│   │   ├── Sidebar.jsx     # Logged-in lateral navigation bar
│   │   └── ...             # Healthcare components
│   ├── App.css             # Component overrides
│   ├── App.jsx             # Shell router, mobile & private header state
│   ├── index.css           # Tailwind custom @theme & HSL variables
│   └── main.jsx            # React root mount
├── package.json
└── vite.config.js
```

---

# 🗺 Roadmap
- [x] High-contrast slate-charcoal legibility upgrades for Light Mode.
- [x] Universal top header settings shift (Language & Themes) for all views.
- [ ] Direct telemetry integration for smart wear indicators.
- [ ] Certified clinical video streaming integrations.

---

# 🔒 Security
- **HIPAA-Compliant Layout**: No private telemetry data is exposed on public routes.
- **GDPR Ready**: Anonymized community profile generation controls are built-in.

---

# ⚡ Performance
- **120 FPS Rendering**: Smooth glassmorphic CSS transitions compiled via PostCSS.
- **Fast Bundle Size**: Vite client chunks transpile cleanly under **`1.07s`**.

---

# 🤝 Contributing
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

# ⚖ License
Distributed under the MIT License. See `LICENSE` for more information.

---

# 👥 Team
- **Ananya Sharma** - Clinical Lead
- **Puspita** - Engineering & Development Lead

---

# 💖 Acknowledgements
- Google Fonts (Outfit & Inter family)
- Lucide-React (Clinical Vector Icons)

---

# ✉ Contact
SAKHI Support - [support@sakhi.ai](mailto:support@sakhi.ai)  
Project Link: [https://github.com/Puspita2718/Sakhi](https://github.com/Puspita2718/Sakhi)
