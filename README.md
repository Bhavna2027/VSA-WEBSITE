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
├── index.html          # Homepage
├── style.css           # Global styles
├── mobile.css          # Mobile responsiveness
├── script.js           # Global scripts
├── pages/
│   ├── courses.html    # All courses detail page
│   ├── results.html    # Toppers & year-wise results
│   ├── about.html      # About us, faculty, timeline
│   ├── contact.html    # Enquiry form with validation
│   ├── pages.css       # Shared styles for inner pages
│   ├── admin.html      # Admin panel — view enquiries
│   ├── admin.css       # Admin panel styles
│   └── admin.js        # Admin panel logic + API fetch
└── backend/
    ├── server.js
    ├── .env.example
    ├── models/
    │   ├── Contact.js
    │   └── User.js
    ├── routes/
    │   ├── auth.js
    │   └── contact.js
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
| 4 June 2025 | Mobile responsiveness — mobile.css for all pages, hamburger menu, responsive grids |
| 9 June 2025 | Admin panel — enquiries dashboard with stats, search, course filter, pagination, demo mode |

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