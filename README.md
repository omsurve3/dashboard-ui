# Dashboard UI – Frontend Assignment

A pixel-perfect dashboard UI built with **Next.js (App Router)** and **Tailwind CSS**, focused on clean layout structure, reusable components, and precise visual alignment.

This project recreates a complex analytics dashboard with modular React components and custom chart layouts.

---

## ✨ Features

- 📊 Pixel-perfect dashboard layout
- 🧩 Fully componentized UI (each card built separately)
- 🎨 Tailwind CSS with custom colors and spacing
- 📐 Clean layout management using CSS Grid & Flexbox
- ⚡ Optimized for desktop screens (≥1280px)
- 🧠 Scalable structure for future backend integration

---

## 🛠 Tech Stack

- **Next.js 14+ (App Router)**
- **React**
- **Tailwind CSS**
- **Lucide Icons**
- **JavaScript (ES6+)**

---

## 📂 Project Structure

app/
├── page.jsx
├── layout.jsx
├── globals.css

components/
├── Dashcomp/
│ ├── PeopleActionBar.jsx
│ ├── RevenueHeader.jsx
│
├── charts/
│ ├── DealsByPlatformChart.jsx
│ ├── DealsByRefferrerChart.jsx
│ ├── PlatformValueChart.jsx
│ ├── SalesDynamicChart.jsx
│ ├── SalesProfileCard.jsx
│ └── SalesRow.jsx
│
└── MainDashboard.jsx

yaml
Copy code

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/omsurve3/dashboard-ui.git
cd dashboard-ui
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run the development server
bash
Copy code
npm run dev
Open:
👉 http://localhost:3000

🧱 Component Architecture
MainDashboard
Central layout container that assembles all dashboard components.

PeopleActionBar
User avatars and action controls.

RevenueHeader
Revenue summary, timeframe selector, and KPI cards.

PlatformValueChart
Custom-built bar chart with monthly comparisons.

SalesDynamicChart
Line chart representing sales trends.

DealsByPlatform / Referrer
Platform-wise deal distribution.

SalesProfileCard / SalesRow
Individual salesperson performance summaries.

Each component is isolated, reusable, and easy to test.

🎯 Design Goals
Match reference UI with high visual accuracy

Avoid UI libraries for charts — custom-built for control

Maintain clean, readable JSX

Use semantic spacing & consistent typography

📦 Deployment
This project is optimized for Vercel.

bash
Copy code
npm run build
Deploy directly via GitHub → Vercel.

📌 Notes
Charts are built using pure JSX + Tailwind, not external chart libraries

Focus is on UI craftsmanship, not backend logic

Code is structured for easy backend/API integration later

👨‍💻 Author
Built by Om Surve
Frontend Developer | MERN | UI Engineering