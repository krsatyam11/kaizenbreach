```markdown
# 🛡️ KaizenBreach Website

A modern, cybersecurity-themed portfolio and resource hub built for **Kr Satyam**. This project showcases a journey in offensive security, ethical hacking, and computer science, featuring a "cyber/hacker" aesthetic with interactive elements like glitch text, matrix rain, and neon UI components.

[![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge&logo=vercel)](https://kaizenbreach.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/code-repository-black?style=for-the-badge&logo=github)](https://github.com/krsatyam1607/kaizenbreach)

![Tech Stack](https://img.shields.io/badge/stack-React_|_TypeScript_|_Vite_|_Tailwind-blue?style=flat-square)

## 🔗 Quick Links

*   **Live Deployment:** [kaizenbreach.vercel.app](https://kaizenbreach.vercel.app/)
*   **Repository:** [github.com/krsatyam1607/kaizenbreach](https://github.com/krsatyam1607/kaizenbreach)

## ✨ Features

*   **Cyber Aesthetic:** distinct "dark mode" design using a Zinc palette with neon accents, complete with Matrix rain and glitch text effects.
*   **Resource Repository:** A filterable "Notes" section for sharing cybersecurity study materials, cheat sheets, and PDFs.
*   **Learning Tracker:** A dynamic section displaying current study topics (e.g., OSCP, Rust) and progress bars.
*   **Responsive Design:** Fully optimized for desktop and mobile devices using Tailwind CSS.
*   **Modern UI:** Built with [shadcn/ui](https://ui.shadcn.com/) components for accessible and consistent design.
*   **Fast Performance:** Powered by Vite and React.

## 🛠️ Tech Stack

*   **Runtime:** [Bun](https://bun.sh/) (Recommended) or Node.js
*   **Framework:** [React](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Library:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
*   **State Management:** TanStack Query

## 🚀 Getting Started

### Prerequisites

Ensure you have one of the following installed:
*   [Bun](https://bun.sh/) (Preferred, based on `bun.lockb`)
*   [Node.js](https://nodejs.org/) (v18+)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/krsatyam1607/kaizenbreach.git
    cd kaizenbreach
    ```

2.  **Install dependencies:**
    
    Using Bun:
    ```bash
    bun install
    ```
    
    Or using npm:
    ```bash
    npm install
    ```

3.  **Run the development server:**
    
    Using Bun:
    ```bash
    bun run dev
    ```
    
    Or using npm:
    ```bash
    npm run dev
    ```

4.  **Open the site:**
    Open your browser and navigate to `http://localhost:8080`.

## 📂 Project Structure

```text
KaizenBreach Website/
├── src/
│   ├── components/
│   │   ├── effects/       # Visual effects (MatrixRain, GlitchText)
│   │   ├── home/          # Homepage specific sections
│   │   ├── layout/        # Navbar, Footer, Main Layout
│   │   └── ui/            # Reusable shadcn/ui components
│   ├── data/
│   │   ├── learning.ts    # JSON data for 'What I'm Learning'
│   │   └── notes.ts       # JSON data for the Notes page
│   ├── pages/             # Route pages (Index, About, Notes, etc.)
│   ├── App.tsx            # Main router configuration
│   └── index.css          # Global styles and Tailwind directives
├── public/                # Static assets (images, pdfs)
└── ...config files
```

## ⚙️ Customization

This portfolio is data-driven. You can update the content without touching the complex React logic.

### 1. Update Personal Info
*   **Name & Bio:** Edit `src/components/home/HeroSection.tsx` and `src/pages/About.tsx`.
*   **Profile Picture:** Replace `profile.jpeg` in the public/root folder.
*   **Social Links:** Update links in `src/components/layout/Footer.tsx` and `src/pages/Connect.tsx`.

### 2. Add/Remove Notes
Navigate to `src/data/notes.ts`. Add a new object to the `notesData` array:

```typescript
{
  id: "11",
  title: "New Security Topic",
  description: "Description of the note...",
  category: "Web Security",
  difficulty: "Advanced",
  tags: ["New", "Tag"],
  downloadUrl: "/path/to/pdf",
  icon: "FileText",
}
```

### 3. Update Learning Progress
Navigate to `src/data/learning.ts` to update your current study goals and progress percentages.

## 🤝 Contributing

Contributions are welcome! If you find a bug or want to improve the code:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Author

**Kr Satyam**
*   YouTube: [@KaizenBreach](https://youtube.com/@KaizenBreach)
*   GitHub: [@krsatyam1607](https://github.com/krsatyam1607)
*   LinkedIn: [Kr Satyam](https://linkedin.com/in/krsatyam07)

---
*Built with 💻 and ☕ by KaizenBreach*
```