# MyOKR - Modern OKR Management Application

## 🚀 Overview

**MyOKR** is a modern OKR (Objectives and Key Results) management application built to help organizations set and track goals efficiently. Inspired by tools like SugarOKR.

## ⚡ Features

- User authentication & authorization (JWT-based)
- Hierarchy management: Organization > Departments > Teams > Users
- Team OKRs assigned to users
- Full CRUD for OKRs
- Progress tracking dashboards
- Clean, user-friendly UI (Tailwind CSS)

### ✅ Bonus Features

- Email reminders for progress updates
- Discussion threads on each OKR
- Export OKRs as PDF/CSV

## 💻 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Auth**: JWT, bcrypt

## 🏗️ Project Structure

myokr/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── main.js
├── .env
├── README.md
└── package.json 

# How to Run:

### Backend
cd backend
npm install
npm run dev


### Frontend
cd frontend
npm install
npm run dev
