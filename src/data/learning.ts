// src/data/learning.ts

export interface LearningItem {
  id: number;
  title: string;
  description: string;
  category: string;
  progress: number; // 0 to 100
  status: "Just Started" | "In Progress" | "Near Completion";
  resourceLink?: string; // Optional link to the course/book
}

export const currentLearningData: LearningItem[] = [
  {
    id: 1,
    title: "Offensive Security (OSCP) Prep",
    description: "Working through the PWK (Penetration Testing with Kali Linux) coursework and practicing on HackTheBox machines.",
    category: "Certification",
    progress: 45,
    status: "In Progress",
    resourceLink: "https://www.offensive-security.com/"
  },
  {
    id: 2,
    title: "Active Directory Exploitation",
    description: "Learning about Kerberos attacks, Golden Tickets, and pivoting through Windows domains.",
    category: "Network Security",
    progress: 20,
    status: "Just Started",
  },
  {
    id: 3,
    title: "Rust for Malware Dev",
    description: "Understanding low-level memory management and writing basic droppers to understand AV evasion.",
    category: "Programming",
    progress: 60,
    status: "In Progress",
    resourceLink: "https://doc.rust-lang.org/book/"
  }
];