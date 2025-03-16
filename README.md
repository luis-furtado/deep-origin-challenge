# URL Shortener

This project is a **URL shortener** application that allows users to generate short, shareable links for long URLs. It was developed as part of a coding challenge.

## 📂 Project Structure
```
.
├── client/   # Frontend (React + TypeScript)
├── server/   # Backend (Node.js + TypeScript + PostgreSQL)
└── README.md # Root Documentation
```

## 🚀 Features
✅ Shorten long URLs into short, easy-to-share links.
✅ Unique slugs to prevent duplication.
✅ Redirect users when accessing a shortened URL.
✅ Database storage for all shortened and link URLs.
✅ Docker support for both frontend and backend.

## 🏗 Technologies Used
- **Frontend:** React + TypeScript
- **Backend:** Node.js + Express + Prisma + PostgreSQL
- **Database:** PostgreSQL
- **Containerization:** Docker & Docker Compose

## 📂 Directories
### 🔹 `client/` - Frontend
- Contains the React-based user interface.
- Users can enter URLs and generate shortened links.

### 🔹 `server/` - Backend
- Provides API endpoints for shortening and redirecting URLs.
- Stores URL data in a PostgreSQL database.
- Ensures unique slugs and handles invalid URL entries and another business rules.

## 🛠 Setup & Execution
### 1️⃣ **You can run everything with Docker**
### 2️⃣ **To run server, open the './server' directory and use Readme to see the command to build and run image/container**
### 2️⃣ **To run client, open the './client' directory and use Readme to see the command to build and run image/container**

## 🎯 Challenge Overview
This project was created as part of a **URL Shortener Challenge**, requiring:
- A form to enter a URL and generate a shortened link.
- Storing links in a database with unique slugs.
- Redirecting users when they access a shortened link.
- A clean user interface in **React + TypeScript**.
- A backend API using **Node.js + Express + PostgreSQL**.
- Full **Docker support** for easy deployment.

---
🚀 **Now, you're ready to run the project!** Follow the instructions in `client/` and `server/` for more details.