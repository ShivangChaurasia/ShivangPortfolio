<div align="center">

# 🚀 Shivang's Developer Portfolio

A modern, animated, and dark-theme first personal portfolio designed to showcase software development skills, full-stack projects, and competitive programming achievements.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

</div>

<br />

## ✨ Key Features

- **Interactive Typing Animations**: A premium initial load experience with a name-typing effect and smooth staggered reveals of profile details.
- **Live-Action Achievements**: A dedicated space highlighting platform metrics (GitHub, LeetCode, Codolio) with hovering glassmorphism cards.
- **Smart Contact Form**: Fully integrated with **Firebase Firestore** for database storage and **EmailJS** for instant, free email notifications.
- **Modern UI/UX**: Dark-theme first approach utilizing glassmorphism, dynamic gradients, and fluid Framer Motion animations.
- **Fully Responsive**: Optimized for flawless performance on mobile, tablet, and desktop.

## 🛠️ Tech Stack

- **Framework**: [React.js](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom Keyframes
- **Backend/Database**: [Firebase](https://firebase.google.com/) (Firestore)
- **Emails**: [EmailJS](https://www.emailjs.com/) (Free client-side notifications)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Lottie](https://lottiefiles.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- Firebase Account
- EmailJS Account

### 1. Clone & Install
```bash
git clone https://github.com/ShivangChaurasia/ShivangPortfolio.git
cd portfolio
npm install
```

### 2. Environment Variables
Create a `.env` file in the `portfolio` directory and add your credentials:
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Run Locally
```bash
npm run dev
```

## 🏗️ Deployment (Vercel)

To deploy this portfolio on Vercel:
1. Connect your repository to Vercel.
2. Set the **Root Directory** to `portfolio`.
3. Add all variables from your `.env` to the Vercel **Environment Variables** settings.
4. Deploy!

---

<div align="center">
  <b>Built with ❤️ by Shivang</b> <br />
  Feel free to reach out via <a href="https://github.com/ShivangChaurasia">GitHub</a>!
</div>
