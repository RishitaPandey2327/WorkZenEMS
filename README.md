# 🚀 WorkZen EMS – Employee Management System

## 📌 Overview

**WorkZen EMS** is a full-stack Employee Management System designed to streamline HR operations and improve employee experience.
It provides a centralized platform for managing attendance, leave requests, notices, and role-based dashboards.

Built with the **MERN stack**, this project demonstrates real-world application architecture with authentication, RBAC, and live deployment.

---

## ✨ Features

### 🔐 Authentication & Authorization

* Secure login & registration using JWT
* Role-Based Access Control (RBAC)

  * **Employee** → Access personal data
  * **HR** → Manage employees and approvals

---

### 👨‍💻 Employee Features

* Apply for leave
* View leave status (Approved / Pending / Rejected)
* Mark daily attendance
* View attendance history
* View company notices

---

### 👨‍💼 HR Features

* View all employee leaves
* Approve / Reject leave requests
* Post company notices with expiry dates
* Monitor attendance records

---

### 🔔 Notice System (Advanced Feature)

* Create time-bound notices
* Automatic filtering of expired notices
* Displays remaining days for each notice

---

### 📊 Dashboard

* Real-time stats:

  * Total Leaves
  * Attendance Records
  * Notices
* Recent notices preview

---

### 🎨 UI/UX

* Clean modern dashboard layout
* Sidebar navigation
* Responsive design using Tailwind CSS
* Loading states & smooth interactions

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB (MongoDB Atlas)

### Authentication

* JSON Web Tokens (JWT)

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 🌐 Live Links

* 🔗 **Frontend:** [https://work-zen-ems.vercel.app](https://work-zen-ems.vercel.app/)
* 🔗 **Backend API:** [https://workzenems.onrender.com/api](https://workzenems.onrender.com/api)

---

## 📂 Project Structure

```
smart-ems/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/workzen-ems.git
cd workzen-ems
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔄 Application Flow

1. User registers (Employee or HR)
2. User logs in → JWT token generated
3. Protected routes restrict unauthorized access
4. Employee:

   * Applies for leave
   * Marks attendance
5. HR:

   * Views all leave requests
   * Approves/Rejects leaves
   * Posts notices
6. Dashboard displays real-time data

---


## 🔒 Security Features

* JWT-based authentication
* Protected routes
* Role-based authorization
* Secure API handling

---

## 🚀 Future Enhancements

* Email notifications
* Salary management module
* Recruitment tracking
* Charts & analytics dashboard
* Mobile responsiveness improvements

---

## 🧠 Key Learning Outcomes

* Full-stack development using MERN
* REST API design
* Authentication & RBAC implementation
* Real-world project deployment
* UI/UX design with Tailwind

---

## 👩‍💻 Author

**Rishita**

---

## ⭐ Conclusion

WorkZen EMS demonstrates the ability to design and deploy a scalable, real-world employee management system with secure authentication, role-based access, and modern UI.

---
