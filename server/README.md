# Server - URL Shortener Backend

This is the **Node.js backend** for the URL shortener application. It provides API endpoints to generate and retrieve shortened URLs, storing them in a **PostgreSQL** database.

## 🏗 Technologies Used

- **Node.js** (w/ TypeScript)
- **Express.js** (Backend API)
- **Prisma** (ORM for PostgreSQL)
- **Docker & Docker Compose** (For containerized setup)

## 🚀 Running the Server with Docker

### 1️⃣ **Build the Docker Image**

```bash
docker build -t shortener-service .
```

### 2️⃣ **Running Everything with Docker Compose**

```bash
docker compose up --build
```

This starts both the **backend** and **database** containers.

### **Obs: If you need stop the services and delete all the data, you can run:**

```bash
docker compose down -v
```

This **stops all services** and **removes all database data. Now you already can use the service.**

## 🖥 Running Locally (Without Docker)

If you want to run the server locally, follow these steps:

### 1️⃣ **Install Dependencies**

```bash
npm install
```

### 2️⃣ **Set Up the Database**

Ensure you have PostgreSQL running and update `.env` with your database credentials:

```
DATABASE_URL="postgresql://user:password@localhost:5432/shortener"
```

### 3️⃣ **Run Migrations**

```bash
npx prisma migrate dev --name init
```

### 4️⃣ **Start the Server**

```bash
npm run dev
```

The server will be running at **http://localhost:4000/**.

## 📡 API Endpoints

### 🔹 Shorten a URL

**POST** `/shorten`

```json
{
  "url": "https://example.com"
}
```

✅ **Response:**

```json
{
  "shortUrl": "http://localhost:4000/abc123"
}
```

### 🔹 Redirect a Short URL

**GET** `/:slug`

- Redirects to the original URL.
- Returns `404` if the slug is invalid.

## 🎯 Features

✅ Generates unique short URLs.
✅ Stores URLs in a PostgreSQL database.
✅ Redirects users when a short link is accessed.
✅ Dockerized for easy deployment.

---

🚀 **Now, the backend is ready to use!** See `../client/README.md` for frontend setup.
