# HerCare AI - REST API Specifications (Node.js + Express)

This document contains routing structures and expected request/response payloads for the HerCare AI core backend.

---

## 1. Authentication & Onboarding (`/api/auth`)

### POST `/api/auth/register`
Creates a new user record and initializes base details.
- **Request Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword123",
    "firstName": "Ananya",
    "lastName": "Sharma",
    "dateOfBirth": "1998-05-15",
    "averageCycleLengthDays": 28,
    "averagePeriodLengthDays": 5,
    "hipaaConsentSigned": true
  }
  ```
- **Response (201 Created)**:
  ```json
  {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "60d0fe4f5311236168a109a1",
      "email": "user@example.com",
      "fullName": "Ananya Sharma",
      "subscriptionPlan": "free"
    }
  }
  ```

---

## 2. Smart Menstrual Cycle Tracker (`/api/cycle`)

### GET `/api/cycle/logs`
Retrieves logs within a specified date range.
- **Request Headers**: `Authorization: Bearer <JWT_TOKEN>`
- **Query Parameters**: `startDate=2026-05-01&endDate=2026-05-31`
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "logs": [
      {
        "id": "60d0fe4f5311236168a109b5",
        "logDate": "2026-05-10",
        "isPeriodDay": true,
        "flowIntensity": "medium",
        "flowColor": "bright_red",
        "symptoms": ["cramps", "fatigue"],
        "moods": ["happy"],
        "waterIntakeMl": 2000
      }
    ],
    "predictions": {
      "nextPeriodDate": "2026-06-07",
      "ovulationDate": "2026-06-21",
      "fertilityWindow": ["2026-06-16", "2026-06-22"],
      "alerts": {
        "isIrregular": false,
        "alertMessage": null
      }
    }
  }
  ```

### POST `/api/cycle/log`
Logs or updates cycle statistics for a particular day.
- **Request Headers**: `Authorization: Bearer <JWT_TOKEN>`
- **Request Body**:
  ```json
  {
    "logDate": "2026-06-01",
    "isPeriodDay": true,
    "flowIntensity": "heavy",
    "flowColor": "bright_red",
    "symptoms": ["cramps", "backache"],
    "moods": ["irritable"],
    "waterIntakeMl": 1500,
    "weightKg": 58.5
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Daily log saved successfully.",
    "log": {
      "logDate": "2026-06-01",
      "isPeriodDay": true,
      "flowIntensity": "heavy",
      "flowColor": "bright_red"
    }
  }
  ```

---

## 3. AI Health Assistant & Symptom Analyst (`/api/ai`)

### POST `/api/ai/chat`
Submits a message to the AI clinical engine.
- **Request Headers**: `Authorization: Bearer <JWT_TOKEN>`
- **Request Body**:
  ```json
  {
    "message": "I have been feeling unusually tired for the past three days, and I'm having mild cramps even though my period isn't due for another week. What could this be?"
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "clinicalOverview": {
      "possibleExplanations": [
        "Ovulation pain (Mittelschmerz)",
        "Hormonal fluctuations (Progesterone peak)",
        "Early signs of nutritional deficiency (Iron/B12)"
      ],
      "severityLevel": "Low",
      "severityDescription": "Symptoms appear physiological. Monitor for changes in intensity.",
      "lifestyleSuggestions": [
        "Increase consumption of magnesium-rich foods.",
        "Ensure hydration stays above 2.5 Liters daily.",
        "Secure 7-8 hours of restorative sleep."
      ],
      "expertRecommendation": "If fatigue persists for more than 7 days or cramps become sharp, we recommend a CBC and Thyroid panel.",
      "recommendedActions": [
        { "action": "book_test", "label": "Book a blood test" },
        { "action": "chat_doctor", "label": "Chat with an Expert" }
      ]
    },
    "disclaimer": "AI provides educational guidance only and does not replace professional medical advice."
  }
  ```

---

## 4. Personalized Diet Planner (`/api/diet`)

### POST `/api/diet/generate`
Generates a customized diet plan using input metrics.
- **Request Headers**: `Authorization: Bearer <JWT_TOKEN>`
- **Request Body**:
  ```json
  {
    "condition": "PCOS",
    "weightGoal": "weight_loss",
    "age": 28,
    "foodPreference": "vegetarian",
    "country": "India",
    "monthlyBudgetInRupiahOrRupee": 5000
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "dietPlan": {
      "condition": "PCOS",
      "dailyMealPlan": {
        "breakfast": "Oatmeal with chia seeds & almonds",
        "lunch": "Quinoa bowl with spinach & lentils",
        "dinner": "Tofu broccoli stir-fry with brown rice"
      },
      "weeklyOverview": "Focus on high-fiber, low-glycemic, and anti-inflammatory meals.",
      "budgetAlternatives": [
        { "original": "Chia Seeds", "swap": "Flax Seeds (Alsi)", "saving": 200 }
      ],
      "shoppingList": ["Quinoa", "Spinach", "Lentils", "Flax Seeds", "Broccoli", "Tofu"]
    }
  }
  ```

---

## 5. Doctor Consultations (`/api/consultations`)

### GET `/api/consultations/schedule`
Lists available slots for a given doctor.
- **Query Parameters**: `doctorId=60d0fe4f5311236168a109a8&date=2026-06-05`
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "availableSlots": ["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"]
  }
  ```

### POST `/api/consultations/book`
Confirms a booking slot and registers payment details.
- **Request Body**:
  ```json
  {
    "doctorId": "60d0fe4f5311236168a109a8",
    "scheduledTime": "2026-06-05T10:30:00.000Z",
    "consultationType": "video",
    "paymentId": "pay_xyz123abc456"
  }
  ```
- **Response (201 Created)**:
  ```json
  {
    "success": true,
    "bookingId": "60d0fe4f5311236168a109f9",
    "message": "Appointment successfully booked. Confirmation SMS & Email sent."
  }
  ```
