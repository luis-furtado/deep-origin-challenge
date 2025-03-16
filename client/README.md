# Client - URL Shortener Frontend

This is the **React frontend** for the URL shortener application. It provides a simple interface where users can enter long URLs and get shortened links.

## 🏗 Technologies Used
- **React** (w/ TypeScript)
- **Axios** for API requests
- **Tailwind CSS** for styling
- **Docker** for containerized execution

## 🚀 Running the Client with Docker
### 1️⃣ **Build the Docker Image**
```bash
docker build -t shortener-client .
```

### 2️⃣ **Run the Client Container**
```bash
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules --rm shortener-client
```
- This maps port **5173** from the container to your local machine.
- **Live code updates** are available via volume mounting (`-v $(pwd):/app`).

## 🖥 Running Locally (Without Docker)
If you prefer running the frontend without Docker, follow these steps:

### 1️⃣ **Install Dependencies**
```bash
npm install
```

### 2️⃣ **Start the Development Server**
```bash
npm run dev
```
This will start the frontend at **http://localhost:5173/**.

## 📡 API Connection
The frontend interacts with the backend API at:
```ts
const SERVER_LOCALHOST_BASEURL: string = 'http://localhost:4000/';
```
Make sure the backend is running before testing the frontend.

## 🎯 Features
✅ Users can enter a URL to generate a shortened link.
✅ Display of generated short URLs with a **copy button**.
✅ Error handling for invalid URLs.
✅ Clean, user-friendly UI.

---
🚀 **Now, the frontend is ready to use!** Ensure the backend is running before testing. See `../server/README.md` for backend setup.
