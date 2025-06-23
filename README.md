
# 🌐 Product Management Frontend

This is the frontend application, built with **React**.  
It consumes the backend REST APIs and provides a user-friendly interface for authentication and product management.

---

## 🧰 Tech Stack

- React 18+
- Axios
- React Router
- Material-UI (or Tailwind, depending on your setup)
- JWT Authentication

---

## 📁 Project Structure

```bash
├── public/               # Static files
├── src/
│   ├── components/       # Reusable UI components
│   ├── containers/       # Logical wrappers for components
│   ├── pages/            # Page-level components (views)
│   ├── routes/           # App routing configuration
│   ├── services/         # API services (Axios setup)
│   ├── utils/            # Utility functions and helpers
│   └── App.js            # Root React component
└── package.json          # Project metadata and dependencies
```

---

## 📥 Clone the Repository

```bash
git clone https://github.com/Oumaymaazmi/crud-task-front.git
```

---

## 📦 Install Dependencies

```bash
npm install
```

Or if using yarn:

```bash
yarn install
```

---

## 🚀 Run the Application

```bash
npm start 
```

---

## 📌 Features

- ✨ Modern UI with responsive design
- 🔐 Login / Register with JWT
- 📦 View, add, update, delete products
- 🔄 Axios interceptor for authenticated requests
