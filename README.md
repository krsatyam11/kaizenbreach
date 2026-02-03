````markdown
# 🛡️ KaizenBreach Website

A modern, cybersecurity-themed **portfolio & resource hub** built for **Kr Satyam**.  
This project documents a journey into **offensive security, ethical hacking, and computer science**, wrapped in a sleek hacker aesthetic with interactive visuals like glitch text, Matrix rain, and neon UI elements.

---

## 🚀 Live & Code

[![Live Demo](https://img.shields.io/badge/STATUS-LIVE-00ff9c?style=for-the-badge)](https://kaizenbreach.vercel.app)
[![Deploy](https://img.shields.io/badge/DEPLOY-VERCEL-black?style=for-the-badge&logo=vercel&logoColor=white)](https://kaizenbreach.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/CODE-GITHUB-black?style=for-the-badge&logo=github)](https://github.com/krsatyam1607/kaizenbreach)

[![Stack](https://img.shields.io/badge/STACK-REACT%20%7C%20TYPESCRIPT%20%7C%20VITE%20%7C%20TAILWIND-blue?style=flat-square)](#)

---

## 🔗 Quick Links

- **Live Deployment:** https://kaizenbreach.vercel.app  
- **Source Code:** https://github.com/krsatyam1607/kaizenbreach  

---

## ✨ Features

- **Cyber Aesthetic**  
  Dark-mode Zinc palette with neon accents, Matrix rain animation, and glitch text effects.

- **Resource Repository**  
  A filterable **Notes** section for cybersecurity PDFs, cheat sheets, and study material.

- **Learning Tracker**  
  Dynamic progress tracking for current learning paths (OSCP, Rust, etc.).

- **Responsive Design**  
  Fully optimized for desktop and mobile using Tailwind CSS.

- **Modern UI Components**  
  Built with `shadcn/ui` for accessibility and visual consistency.

- **High Performance**  
  Powered by Vite + React for fast builds and smooth UX.

---

## 🛠️ Tech Stack

- **Runtime:** Bun (recommended) / Node.js  
- **Framework:** React  
- **Language:** TypeScript  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **UI Library:** shadcn/ui (Radix UI)  
- **State Management:** TanStack Query  

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **one** of the following installed:

- [Bun](https://bun.sh/) *(preferred — uses `bun.lockb`)*
- [Node.js](https://nodejs.org/) *(v18+)*

---

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krsatyam1607/kaizenbreach.git
   cd kaizenbreach
````

2. **Install dependencies**

   Using **Bun**:

   ```bash
   bun install
   ```

   Using **npm**:

   ```bash
   npm install
   ```

3. **Run the development server**

   Using **Bun**:

   ```bash
   bun run dev
   ```

   Using **npm**:

   ```bash
   npm run dev
   ```

4. **Open in browser**

   ```
   http://localhost:8080
   ```

---

## 📂 Project Structure

```text
KaizenBreach/
├── src/
│   ├── components/
│   │   ├── effects/        # MatrixRain, GlitchText, visual FX
│   │   ├── home/           # Homepage sections
│   │   ├── layout/         # Navbar, Footer, Layout
│   │   └── ui/             # shadcn/ui reusable components
│   ├── data/
│   │   ├── learning.ts     # Learning tracker data
│   │   └── notes.ts        # Notes & resources data
│   ├── pages/              # Route pages (Home, About, Notes)
│   ├── App.tsx             # App router
│   └── index.css           # Global styles
├── public/                 # Static assets (images, PDFs)
└── config files
```

---

## ⚙️ Customization

This project is **data-driven**, so most updates don’t require touching React logic.

### 1️⃣ Update Personal Info

* **Name / Bio:**
  `src/components/home/HeroSection.tsx`
  `src/pages/About.tsx`

* **Profile Image:**
  Replace `profile.jpeg` in `/public`

* **Social Links:**
  `src/components/layout/Footer.tsx`
  `src/pages/Connect.tsx`

---

### 2️⃣ Add or Edit Notes

Edit `src/data/notes.ts`:

```ts
{
  id: "11",
  title: "New Security Topic",
  description: "Description of the note...",
  category: "Web Security",
  difficulty: "Advanced",
  tags: ["New", "Tag"],
  downloadUrl: "/path/to/pdf",
  icon: "FileText"
}
```

---

### 3️⃣ Update Learning Progress

Modify `src/data/learning.ts` to update topics and progress percentages.

---

## 🤝 Contributing

Contributions are welcome 🚀

1. Fork the repository
2. Create your feature branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add AmazingFeature"
   ```
4. Push to GitHub

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📄 License

Licensed under the **MIT License**.
See the `LICENSE` file for details.

---

## 👤 Author

**Kr Satyam**

* YouTube: [@KaizenBreach](https://youtube.com/@KaizenBreach)
* GitHub: [@krsatyam1607](https://github.com/krsatyam1607)
* LinkedIn: [Kr Satyam](https://linkedin.com/in/krsatyam07)

---

<p align="center">
  Built with 💻 and ☕ by <strong>KaizenBreach</strong>
</p>
```
Just tell me 👊
