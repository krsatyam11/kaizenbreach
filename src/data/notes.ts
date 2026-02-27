export interface Note {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  downloadUrl: string;
  icon: string;
}

export const notesData: Note[] = [
  // ✅ NEW HELP DESK NOTE FILE
  {
    id: "1",
    title: "Practical Helpdesk - Intro to IT",
    description: "Beginner-friendly introduction to IT support, troubleshooting, and helpdesk fundamentals.",
    category: "Networking",
    difficulty: "Beginner",
    tags: ["Helpdesk", "IT", "Support", "Beginner"],
    downloadUrl: "/notes/practical-helpdesk-intro-to-it.pdf",
    icon: "BookOpen",
  },
];

export const categories = [
  "All",
  "Web Security",
  "Linux",
  "Networking",
  "Post Exploitation",
  "Reconnaissance",
  "Authentication",
  "Binary Exploitation",
];

export const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];