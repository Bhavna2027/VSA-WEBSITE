# VSA Coaching Institute — Website

> Full stack internship project | Pune | June–July 2025

---

## 🚀 Project Overview

A complete website for **VSA Coaching Institute, Pune** — one of Pune's trusted coaching centres for JEE, NEET, MHT-CET, HSC, CBSE, and ICSE students.

Built as part of a daily internship from **1 June → 22 July 2025**.

---

## 🛠 Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | HTML, CSS, JavaScript             |
| Backend  | Node.js, Express.js               |
| Database | MongoDB (Mongoose)                |
| Tools    | Git, GitHub, VS Code              |

---

## 📁 Folder Structure

```
VSA-WEBSITE/
├── index.html
├── style.css
├── mobile.css
├── animations.css
├── script.js
├── pages/
│   ├── courses.html
│   ├── results.html
│   ├── about.html
│   ├── contact.html
│   ├── pages.css
│   ├── admin.html
│   ├── admin.css
│   └── admin.js
└── backend/
    ├── server.js
    ├── .env.example
    ├── models/
    │   ├── Contact.js
    │   └── User.js
    ├── routes/
    │   ├── auth.js
    │   ├── contact.js
    │   └── admin.js
    └── middleware/
        └── authMiddleware.js
```

---

## 📅 Daily Internship Log

| Date | Work Done |
|------|-----------|
| 1 June 2025 | Repo setup, homepage, style.css, script.js — navbar, hero, courses, testimonials, footer |
| 2 June 2025 | Inner pages — courses, results, about, contact with form validation. Backend contact route + MongoDB model |
| 3 June 2025 | Backend auth — register/login routes, User model, JWT middleware |
| 4 June 2025 | Mobile responsiveness — mobile.css for all pages |
| 9 June 2025 | Admin panel frontend — enquiries dashboard with stats, search, filter, pagination |
| 11 June 2025 | Homepage animations — shimmer text, scroll-to-top, ripple buttons, section underlines |
| 13 June 2025 | Backend admin routes — fetch all enquiries, filter by course/search, pagination, delete, stats endpoint |

---

## ✨ Features

- ✅ Responsive navbar with hamburger menu
- ✅ Animated hero with stats counter
- ✅ Course, Results, About, Contact pages
- ✅ Contact form with client-side validation
- ✅ Backend API — save enquiries to MongoDB
- ✅ Auth system — register/login with JWT
- ✅ Mobile responsive across all pages
- ✅ Admin panel — view, search, filter enquiries
- ✅ Homepage animations — shimmer, ripple, scroll-to-top
- ✅ Backend admin routes — fetch, filter, delete enquiries, stats

---

## 🔗 API Endpoints

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | /api/auth/register | Register new user | None |
| POST | /api/auth/login | Login user | None |
| POST | /api/contact | Submit enquiry | None |
| GET | /api/admin/enquiries | Fetch all enquiries | Admin |
| GET | /api/admin/enquiries/:id | Fetch single enquiry | Admin |
| DELETE | /api/admin/enquiries/:id | Delete enquiry | Admin |
| GET | /api/admin/stats | Dashboard stats | Admin |

---

## ⚙️ How to Run Locally

**Frontend:** Open `index.html` in your browser.

**Backend:**
```bash
cd backend
npm install
cp .env.example .env
npm start
```

---

## 👩‍💻 Intern

**Bhavna** — Full Stack Web Development Internship
Daily commits from 1 June to 22 July 2025