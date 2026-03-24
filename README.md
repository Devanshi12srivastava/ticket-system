# 🎫 Ticket Management System

A full-stack **Ticket Management System** built using the MERN stack.
Users can create, view, and update support tickets with priority and status tracking.

---

## 🚀 Features

* 📝 Create support tickets (subject, message, priority)
* 📋 View all tickets in a responsive table/card layout
* 🔄 Update ticket status (NEW → INVESTIGATING → RESOLVED)
* 🎨 Clean and responsive UI (Tailwind CSS)
* 📱 Mobile-friendly design
* ⚡ REST API integration with MongoDB

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* Tailwind CSS
* Axios

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/Devanshi12srivastava/ticket-system.git
cd ticket-system
```

---

### 2️⃣ Install dependencies

#### Backend

```
cd backend
npm install
```

#### Frontend

```
cd frontend
npm install
```

---

### 3️⃣ Environment Variables 🔐

Create a `.env` file inside the **backend** folder and add:

```
MONGO_URI=mongodb://127.0.0.1:27017/ticketts-system
PORT=5000
```
### I used mongodb compass because I was getting DNS error while using mongodb atlas.
👉 **Important:**

* `.env` file is not uploaded to GitHub for security reasons
* Use your own MongoDB URI (local or Atlas)

---

### 4️⃣ Run the project

#### Start Backend

```
cd backend
npm run server
```

#### Start Frontend

```
cd frontend
npm run dev
```

---

## 🌐 API Endpoints

 Method |    Endpoint       | Description          |

| GET    | /api/tickets     | Get all tickets      |
| POST   | /api/tickets     | Create a ticket      |
| PATCH  | /api/tickets/:id | Update ticket status |

---

## 📸 Screenshots

### 🏠 Dashboard
![Dashboard](./screenshots/Dashboard.png)

### 📝 Create Ticket
![Create Ticket](./screenshots/Create ticket.png)

### 📋 Ticket List
![Ticket List](./screenshots/Ticket list.png)

### 📱 update status
![update status](./screenshots/ Ticket with update status.png)

---

## 🔐 Security Note

Sensitive data like database credentials are stored in `.env` file and are not pushed to GitHub.

---

## 👩‍💻 Author

**Devanshi Srivastava**

---

## ⭐ Conclusion

This project demonstrates a complete MERN stack workflow including API development, frontend integration, and responsive UI design.

---
