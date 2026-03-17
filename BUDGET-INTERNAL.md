# Internal Budget Estimate — Phased Breakdown

> **INTERNAL ONLY — Do NOT share with client**
> This is for planning with your team. The client-facing proposal will be a separate document with marked-up pricing.

---

## Team Structure (5 members)

| Role | Person | Monthly Rate (Est.) | Notes |
|------|--------|-------------------|-------|
| Project Lead / Frontend | You | Your own time | Client relationship, architecture, frontend |
| Backend Developer | Member 1 | ₹50,000 - ₹70,000 | API, database, payments, auth |
| Frontend Developer | Member 2 | ₹40,000 - ₹55,000 | Pages, components, responsive UI |
| Mobile Developer | Member 3 | ₹50,000 - ₹70,000 | React Native / Flutter (Phase 3 only) |
| Admin Panel + DevOps | Member 4 | ₹35,000 - ₹50,000 | Admin dashboard, hosting, CI/CD |

---

## Phase 1: Core Website + E-Commerce + Donations

**Duration:** 8-10 weeks
**Team Active:** You + Frontend + Backend + DevOps (part-time)

### What Gets Built

- Full responsive website (all current pages polished)
- Product catalog with real images (8+ products)
- Shopping cart with persistence (localStorage/DB)
- Complete checkout flow with address collection
- Razorpay payment integration (UPI, cards, net banking, wallets)
- Order confirmation + email/SMS notifications
- Donation flow with multiple funds, KYC, 80G receipt generation
- Recurring donation support via Razorpay subscriptions
- Basic SEO and analytics (Google Analytics)
- Backend API + PostgreSQL database
- Deployment to production (Vercel + cloud backend)

### Cost Breakdown

| Item | Duration | Rate | Cost (Est.) |
|------|----------|------|-------------|
| Backend Developer | 2.5 months | ₹50K-70K/mo | ₹1,25,000 - ₹1,75,000 |
| Frontend Developer | 2.5 months | ₹40K-55K/mo | ₹1,00,000 - ₹1,37,500 |
| DevOps (part-time) | 1.5 months | ₹35K-50K/mo | ₹52,500 - ₹75,000 |
| Infrastructure setup | one-time | — | ₹15,000 - ₹20,000 |
| **Phase 1 Total** | | | **₹2,92,500 - ₹4,07,500** |

**Rounded estimate: ₹3,00,000 - ₹4,00,000**

---

## Phase 2: Admin Panel + User Accounts + Notifications

**Duration:** 6-8 weeks
**Team Active:** You + Frontend + Backend + DevOps
**Starts:** After Phase 1 launch

### What Gets Built

- Full admin dashboard (revenue overview, order stats, visitor analytics)
- Product management (add/edit/delete products, image upload, pricing)
- Order management (view orders, update status, process refunds)
- Donation management (view donors, export lists, generate reports)
- Event management (create/edit events, manage registrations)
- Content management (update mantras, media, blog posts, about page)
- User registration/login (phone + OTP via MSG91)
- User profiles with address book
- Order history + reorder functionality
- Donation history + 80G receipt downloads
- Wishlist
- Email/SMS notification system (order updates, event reminders)
- Shipping integration (Shiprocket/Delhivery for tracking)

### Cost Breakdown

| Item | Duration | Rate | Cost (Est.) |
|------|----------|------|-------------|
| Backend Developer | 2 months | ₹50K-70K/mo | ₹1,00,000 - ₹1,40,000 |
| Frontend Developer | 2 months | ₹40K-55K/mo | ₹80,000 - ₹1,10,000 |
| DevOps | 1.5 months | ₹35K-50K/mo | ₹52,500 - ₹75,000 |
| SMS/Email service setup | one-time | — | ₹5,000 - ₹10,000 |
| **Phase 2 Total** | | | **₹2,37,500 - ₹3,35,000** |

**Rounded estimate: ₹2,50,000 - ₹3,50,000**

---

## Phase 3: Mobile App (iOS + Android)

**Duration:** 10-12 weeks
**Team Active:** You + Mobile Dev + Backend (part-time for API extensions)
**Starts:** After Phase 2 is stable

### What Gets Built

- Cross-platform mobile app (React Native or Flutter)
- All e-commerce features (browse, cart, checkout, order tracking)
- Donation flow (with Razorpay mobile SDK)
- Mantra library with offline audio playback
- ThoughtYoga module (meditation timer, mood tracking, streaks)
- Push notifications (events, new products, daily mantras, order updates)
- Live Darshan streaming integration
- App Store (iOS) + Play Store (Android) submission
- Deep linking (share products/events via links)

### Cost Breakdown

| Item | Duration | Rate | Cost (Est.) |
|------|----------|------|-------------|
| Mobile Developer | 3 months | ₹50K-70K/mo | ₹1,50,000 - ₹2,10,000 |
| Backend Developer (API) | 1.5 months | ₹50K-70K/mo | ₹75,000 - ₹1,05,000 |
| DevOps (app stores) | 0.5 months | ₹35K-50K/mo | ₹17,500 - ₹25,000 |
| Apple Developer Account | one-time/year | — | ₹8,000 |
| Google Play Console | one-time | — | ₹2,100 |
| **Phase 3 Total** | | | **₹2,52,600 - ₹3,50,100** |

**Rounded estimate: ₹2,50,000 - ₹3,50,000**

---

## Total Project Cost (All 3 Phases)

| Phase | Duration | Cost Range |
|-------|----------|------------|
| Phase 1: E-Commerce + Donations | 8-10 weeks | ₹3,00,000 - ₹4,00,000 |
| Phase 2: Admin + Users + Notifications | 6-8 weeks | ₹2,50,000 - ₹3,50,000 |
| Phase 3: Mobile App | 10-12 weeks | ₹2,50,000 - ₹3,50,000 |
| **Total** | **24-30 weeks** | **₹8,00,000 - ₹11,00,000** |

---

## Monthly Infrastructure / Running Costs (Post-Launch)

These are ongoing costs the client will need to cover:

| Service | Monthly Cost | Notes |
|---------|-------------|-------|
| Vercel Pro (hosting) | ₹1,700 | Frontend hosting |
| Cloud Backend (Railway/AWS) | ₹2,000 - ₹5,000 | API + database, scales with traffic |
| Database (PostgreSQL) | included above | Managed DB on Railway/Supabase |
| Media Storage (Cloudinary/S3) | ₹500 - ₹2,000 | Product images, mantra audio |
| SMS Gateway (MSG91) | ₹2,000 - ₹5,000 | OTP login, order updates |
| Email Service (SendGrid) | ₹0 - ₹1,500 | Free tier covers initial volume |
| Domain + SSL | ₹125/mo (~₹1,500/yr) | Custom domain |
| Razorpay | 2% per transaction | No monthly fee, pay-per-use |
| **Total Monthly** | **₹6,500 - ₹15,000** | Depends on traffic and transactions |

---

## What to Charge the Client

Your internal cost is ₹8-11L. Here's how to price it for Guruji:

### Pricing Strategy

Add a **50-80% margin** on top of your costs. This covers:
- Your own time and effort (project lead, client management)
- Risk buffer (scope changes, delays, bug fixes)
- Post-launch support and maintenance
- Profit for your team

### Suggested Client Pricing (3 tiers)

| Tier | Includes | Price |
|------|----------|-------|
| **Basic** | Phase 1 only (website + e-commerce + donations) | ₹5,00,000 - ₹6,00,000 |
| **Standard** | Phase 1 + Phase 2 (+ admin panel + user accounts) | ₹9,00,000 - ₹11,00,000 |
| **Premium** | All 3 phases (+ mobile app) | ₹14,00,000 - ₹17,00,000 |

### Maintenance Contract (Optional, post-launch)

| Plan | Includes | Monthly |
|------|----------|---------|
| Basic Support | Bug fixes, server monitoring, minor updates | ₹15,000 - ₹20,000/mo |
| Full Support | Above + feature additions, content updates, priority support | ₹30,000 - ₹40,000/mo |

---

## Payment Milestones (Suggested)

For each phase, split payments into milestones:

| Milestone | % | When |
|-----------|---|------|
| Project Kickoff | 30% | On signing agreement |
| Mid-Phase Review | 30% | Midway demo/review |
| Phase Delivery | 30% | On delivery and testing |
| Go-Live | 10% | After production launch |

---

## Important Notes

1. **Do NOT share exact internal costs with the client.** Only share the client-facing tier pricing.
2. **Monthly rates for team members are estimates.** Finalize with each person before committing.
3. **Scope creep is the #1 risk.** Define scope clearly in the proposal. Any additions = change request with additional cost.
4. **Razorpay has no upfront cost** — they charge 2% per transaction. This is a recurring cost borne by the business.
5. **The mobile app (Phase 3) is the most negotiable.** If budget is tight, it can be deferred or replaced with a PWA (Progressive Web App) at much lower cost.
6. **Infrastructure costs are paid by the client**, not absorbed by you. Make this clear in the proposal.

---

*Last updated: Feb 24, 2026*
