# Meeting Preparation: Guruji (Dr. Vasant Vijay Ji Maharaj)

> **Date:** Tomorrow (Feb 25, 2026)
> **Type:** 1:1 In-person Discovery Meeting
> **Goal:** Understand requirements, show MVP prototype, build trust — NO budget discussion

---

## 1. Client Profile — Know Before You Go

### Who He Is

- **Full Title:** Param Pujya Jagadguru Dr. Vasant Vijay Ji Maharaj
- **Role:** Peethadhiswar (Head) of **Shri Parsw Padmavati Shakti Peeth Teerth Dham Krishnagiri**
- **Recognized as:** "National Saint" of India
- **Official Website:** [jagadguruvasanthvijayanandgiri.com](https://jagadguruvasanthvijayanandgiri.com/)

### Credentials Worth Mentioning (shows you did your homework)

| Achievement | Detail |
|------------|--------|
| Nobel Prize Nomination | By 370 Indian MPs and world leaders |
| UN Ambassador of Peace | Appointed by the United Nations |
| Diplomatic Counsellor of India | By International Parliament of Safety and Peace |
| Guinness World Record | Lit 66,840 candles simultaneously — World Peace Festival, Leicester, UK (2008) |
| World Book of Records | Vishwashanti Mahayagna |
| International Recognition | Praised by the Pope and the Dalai Lama |
| Parliamentary Addresses | American Parliament and British Parliament |

### His Vision and Key Programs

- **Peace Education** — established in 190 countries; human values, tolerance, social harmony
- **Anand Yogam & Mantra Yogam** — transformative spiritual programs
- **ThoughtYoga** — his own philosophy/practice framework for inner peace
- **Philanthropy** — food rations to 1M+ people/year, medical camps, mediclaim insurance worth crores
- **Bhairav Ashtami Mahotsav 2024** — 9-day mega festival in Neemuch, MP; 84,000 sq ft rangoli

### Digital Presence

| Platform | Channels |
|----------|----------|
| YouTube | ThoughtYoga, Oorjaa Factory, Mantra School, Vasant Vijay Maharaj (English) |
| Television | Sanskar TV, Mana TV |
| Social Media | Instagram, Twitter, Facebook |

### Product Catalog (Known So Far)

| Product | Price (if known) | Notes |
|---------|-----------------|-------|
| Divinely Energized Kalash | Rs 5,100 | In current MVP |
| Nakoda Bhairav Dev Murti | Rs 3,100 | In current MVP |
| Books | TBD | Spiritual/religious publications — ask about titles and quantity |
| Magazines | TBD | Periodical content — ask about frequency |
| Laxmi Yantra | TBD | Sacred geometric instrument — ask about materials/sizes |
| Bhairav Murti | TBD | Clarify: same as Nakoda Bhairav Dev Murti or different? |
| Ganpati Stone Murti | TBD | Ask about sizes and pricing tiers |
| Ganpati Clay Murti | TBD | Ask if seasonal (Ganesh Chaturthi) or year-round |

**Ask in meeting:** "Are there more products planned? Do you want to add new products yourself over time?"

---

## 2. Current MVP Status — What You Can Demo

| Page | Status | What It Shows |
|------|--------|---------------|
| Homepage | Working | Hero with Guruji image, credentials ticker, product highlights, donation CTA, events preview |
| Shop | Working | Product grid with 2 products, trust badges |
| Product Detail | Working | Full product page with specs, benefits, add to cart |
| Cart | Working | Cart management, quantity controls, order summary |
| Donations | Working | 4 funds with progress bars, amount selection, KYC note |
| Events | Working | 4 upcoming events with details and registration CTA |
| Mantras | Working | 5 mantras with YouTube player, categories, Jaap Mala counter |
| Media | Working | YouTube channels, featured videos, TV schedule, social links |
| About | Working | Interactive timeline, credentials, contact info |
| ThoughtYoga | Working | Meditation timer, mood logging, affirmations, streak tracking |

**Important:** All e-commerce and donation flows are UI-only (no real payments, no backend). Make this clear if asked — "This is a working prototype to show the vision. The backend and payment integration come in the build phase."

### Before the Meeting Checklist

- [ ] Deploy MVP to Vercel (so you can demo without localhost)
- [ ] Test all 10 pages on mobile
- [ ] Charge laptop and phone
- [ ] Carry a notebook and pen
- [ ] Have this document open on your phone for reference

---

## 3. Full Feature Requirements — E-Commerce Platform

Use this as a mental checklist. Do NOT walk through this list with Guruji — instead, use it to understand what he needs based on his answers.

### A. Core E-Commerce (Must-Have for Launch)

- **Product Catalog Management** — add/edit/remove products, categories, images, pricing
- **Inventory Management** — stock tracking, low-stock alerts, out-of-stock handling
- **Shopping Cart** — persistent across sessions, multi-item
- **Checkout Flow** — shipping/billing address, order review, coupon/promo codes
- **Payment Gateway** — Razorpay (UPI, cards, net banking, wallets, EMI); international if needed
- **Order Management** — confirmation, status tracking, order history for users
- **Shipping Integration** — Shiprocket or Delhivery API for labels, tracking, delivery updates
- **Invoice & GST** — auto-generated invoices with GST compliance
- **Email/SMS Notifications** — order confirmation, shipping updates, delivery (SendGrid / MSG91)

### B. Donation Management (Must-Have)

- **Multiple Fund Support** — different campaigns (Mandir Nirman, Akhand Jyoti, Ann Prasadam, Medical Welfare)
- **KYC Collection** — PAN card for donations over Rs 2,000 (legal requirement)
- **80G Tax Receipts** — auto-generated for tax exemption
- **Recurring Donations** — monthly/annual auto-debit via Razorpay subscriptions
- **Progress Tracking** — real-time fund progress bars
- **Donor Dashboard** — donation history, downloadable receipts

### C. Admin Panel (Must-Have)

- **Dashboard** — revenue, orders today, donation totals, visitor stats
- **Product Management** — CRUD with image upload (so Guruji's team can manage independently)
- **Order Management** — view/update status, process refunds
- **Donation Management** — view donations, generate reports, export donor lists
- **Event Management** — create/edit events, manage registrations
- **Content Management** — update mantras, media, about page, blog posts
- **User Management** — registered users, roles
- **Analytics** — sales reports, donation reports, traffic

### D. User Accounts (Must-Have)

- **Registration/Login** — email + OTP (most common in India) or phone-based
- **User Profile** — name, addresses, phone
- **Order History** — past purchases, reorder
- **Donation History** — past donations, 80G receipt downloads
- **Wishlist** — save for later

### E. Content & Spiritual Features (Differentiator)

- **Mantra Library** — audio/video, categories, Jaap Mala counter
- **ThoughtYoga Module** — meditation timer, mood tracking, streaks, affirmations
- **Events** — calendar, registration, live broadcast links, reminders
- **Media Hub** — aggregated YouTube, TV schedules, social feeds
- **About / Biography** — timeline, credentials, photo gallery
- **Blog / Pravachan** — articles, discourses, news

### F. Mobile App (Discuss Separately)

- Cross-platform (iOS + Android) using React Native or Flutter
- Push notifications (events, new products, daily mantras)
- Offline mantra playback
- Daily reminders for ThoughtYoga
- Live Darshan streaming
- **Note:** This significantly increases scope and timeline — treat as Phase 2 or 3

### G. Infrastructure

- Hosting: Vercel (frontend) + cloud backend (AWS / Railway)
- Database: PostgreSQL + media storage (S3 / Cloudinary)
- CDN for fast delivery across India
- SSL, encryption, PCI compliance via Razorpay
- Automated daily backups
- Error tracking and uptime monitoring

---

## 4. Meeting Strategy — Step by Step

### The Golden Rule: Discovery First, Budget Later

Do NOT quote a budget number. Your goal is to **listen and understand**.

### Meeting Flow (~60-90 minutes)

#### Phase 1: Opening — Build Rapport (5-10 min)

- Show genuine respect and interest in his mission
- Reference something specific: *"I read about your Peace Education program reaching 190 countries — that is truly inspiring"*
- Introduce yourself briefly: what you do, your team's capability
- *"We've been working on something to show you the direction we have in mind"*

#### Phase 2: Discovery — Ask and Listen (30-40 min)

**Vision & Goals**
- "What is your primary goal for this platform — reaching more devotees, generating revenue, or both?"
- "Who is your target audience — devotees in India, NRIs abroad, or global?"
- "Do you envision a website, mobile app, or both?"

**E-Commerce**
- "How many products are you selling today? Do you see the catalog growing?"
- "Who handles packaging and shipping currently? Is there a team or warehouse?"
- "Do you ship outside India?"
- "How do customers buy your products today — in person, phone orders, online?"

**Donations**
- "How are donations currently collected — online, bank transfer, cash?"
- "Is the trust registered under 80G? Do you need automated tax receipts?"
- "Would recurring monthly donations be valuable?"

**Content & Media**
- "How often would you want to update content — mantras, events, blog?"
- "Who manages content day-to-day? Do they need a simple admin panel?"
- "Would live streaming of events be important?"

**Technical**
- "Do you have an existing website or app we should know about?"
- "Is there a preferred payment provider or bank relationship?"
- "Is there a team member who handles tech currently?"

**Timeline & Priority**
- "Is there a specific event or date you want to launch by?"
- "If you had to pick the top 3 things to launch first, what would they be?"

#### Phase 3: MVP Demo (10-15 min)

- Show the prototype on your phone (mobile-first)
- Walk through: Homepage → Shop → Product Detail → Cart → Donations → Mantras
- *"This is a working prototype to show what's possible"*
- Watch his reactions — what excites him tells you what to prioritize
- **Take notes on every reaction and comment**

#### Phase 4: Scope Discussion, NOT Budget (10-15 min)

- *"Based on everything we discussed, I'd like to put together a detailed scope document and phased roadmap"*
- *"I want to make sure we build exactly what serves your mission"*
- *"Can I send you a proposal within 5 days?"*
- **If he pushes for a number:** *"A platform like this varies quite a bit based on features and phases. Let me put together 2-3 options so you can choose what fits best."*

#### Phase 5: Close (5 min)

- Confirm next steps: *"I'll send a scope document and proposal by [date]"*
- *"Is there anyone else from your team I should coordinate with?"*
- *"What's the best way to reach you — WhatsApp, email, phone?"*

---

## 5. What to Bring

| Item | Why |
|------|-----|
| Laptop/tablet with MVP deployed | Demo the prototype live |
| Notebook + pen | Take notes visibly — shows respect |
| Phone (charged) | Backup for mobile demo |
| This document (on phone) | Quick reference for questions and product list |

---

## 6. Team Overview

**5 members total** (you + 4):

| Role | Responsibility |
|------|---------------|
| You (Lead) | Client relationship, project management, frontend architecture |
| Backend Developer | API, database, payment integration (Razorpay) |
| Frontend Developer | Pages, components, responsive UI |
| Mobile Developer | React Native / Flutter app (if needed) |
| Admin Panel + DevOps | Admin dashboard, hosting, CI/CD, deployment |

**In the meeting, keep it simple:** *"I have a capable team to deliver this end-to-end."* Do not go into team details unless asked.

---

## 7. Post-Meeting Deliverables

Send within **3-5 business days** after the meeting:

1. **Scope Document** — features broken into phases (Phase 1: MVP, Phase 2, Phase 3)
2. **Phased Roadmap** — timelines for each phase
3. **Budget Options** — 2-3 tiers (Basic / Standard / Premium) so he can choose
4. **Tech Stack Summary** — brief explanation of what you'll use and why

---

## 8. Mindset Reminders

- **Listen 70%, talk 30%** — your job today is to understand, not to sell
- **Do not oversell or overpromise** — be honest about what takes time
- **Respect his mission** — this is his life's work, not just a business project
- **Take notes visibly** — it shows you value what he says
- **Be confident** — you have a working prototype, which puts you ahead of most
- **No budget today** — *"Let me put together a proper proposal"* is always the right answer
- **Follow up fast** — send a thank-you message within 2 hours of the meeting ending

---

## 9. Quick Reference Card (Glance During Meeting)

```
PRODUCTS: Kalash, Bhairav Murti, Books, Magazines, Laxmi Yantra, Ganpati (Stone + Clay)
FUNDS:    Mandir Nirman, Akhand Jyoti, Ann Prasadam, Medical Welfare
PROGRAMS: ThoughtYoga, Anand Yogam, Mantra Yogam, Peace Education
CHANNELS: ThoughtYoga, Oorjaa Factory, Mantra School (YouTube) + Sanskar TV, Mana TV
EVENTS:   Kalash Mahayagya, Navratri Mahotsav, Krishnagiri Darshan, ThoughtYoga Retreat

KEY QUESTIONS TO NOT FORGET:
→ What's the #1 priority — shop, donations, or content?
→ Who manages day-to-day? Do they need admin panel?
→ Is 80G registered? Need automated receipts?
→ Mobile app — now or later?
→ Target launch date?
→ Ship outside India?
```

---

*Last updated: Feb 24, 2026*
