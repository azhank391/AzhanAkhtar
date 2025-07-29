
# 🌐 Full Stack Portfolio / Web App

This is a full-stack web application built using **React (Vite)** on the frontend, **Node.js/Express** on the backend, and **MySQL** as the database. It includes modern UI animations, secure API endpoints, and dynamic features like contact forms, authentication, and database-driven content.

---

## 🚀 Tech Stack

### Frontend:
- React (with Vite)
- Tailwind CSS
- Framer Motion / GSAP (for animations)
- React Router DOM
- Toastify for notifications

### Backend:
- Node.js
- Express.js
- Sequelize (ORM)
- JWT (for authentication)
- bcrypt (for password hashing)
- dotenv (for environment variables)

### Database:
- MySQL (locally or Railway hosted)

---

## 📁 Project Structure

```
project-root/
│
├── client/                 # Frontend (React Vite App)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── server/                 # Backend (Node/Express)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── migrations/
│   ├── seeders/
│   ├── server.js
│   └── .env
│
├── README.md
├── .gitignore
└── package.json
```

---

## ⚙️ Environment Variables

### Backend `.env` file:

```
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_database
DB_HOST=localhost
DB_PORT=3306

JWT_SECRET=your_jwt_secret
PORT=8080
```

### Frontend `.env` file:

```
VITE_API_BASE_URL=http://localhost:8080/contact
```

---

## 🧪 Local Development

### 1. Clone the Repo

```bash
git clone https://github.com/azhank391/portfolio-webpage.git
cd your-repo
```

### 2. Backend Setup

```bash
cd server
npm install
npx sequelize db:migrate
npm run dev
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

---

## 📦 Deployment

You can deploy using:
- **Frontend**: Vercel / Netlify
- **Backend**: Railway / Render / Fly.io
- **DB**: Railway / PlanetScale / Neon (if Postgres)

Make sure to update all `.env` files and CORS settings for production.

---

## 🧠 Features

- ⚡ Fast Vite-based React SPA
- 🔐 JWT-secured APIs
- 📬 Working contact form (with backend POST route)
- 🎨 Beautiful animations
- 💾 Persistent database storage
- ✅ Form validation and error handling

---

## 📈 SEO & Performance

- Use `react-helmet-async` for dynamic meta tags
- Deploy on Vercel for optimal speed
- Use Lighthouse to test performance and accessibility
- Compress images and minify CSS
- Add a `robots.txt` and `sitemap.xml`

---

## 🧑‍💻 Author

**Azhan Akhtar**  
Full Stack Developer | Portfolio & Client Projects  
📧 Email: [your-email@example.com]  
🌐 Website: [your-portfolio.com]

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
