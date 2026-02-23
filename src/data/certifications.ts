export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  badgeImage?: string; // Optional URL to badge image
}

export const certificationsData: Certification[] = [
  {
    title: "Pre Security",
    issuer: "TryHackMe",
    date: "22-02-2026",
    description: "Beginner-friendly cybersecurity course covering networking fundamentals, Linux, Windows basics, web fundamentals, and security concepts to build a strong foundation before offensive security.",
    skills: ["Networking Fundamentals", "Linux Basics", "Windows Fundamentals", "Web Fundamentals", "Cybersecurity Concepts"],
  },
  // Add more certifications here
];

export const skillsData = {
  languages: ["Python"],
  tools: ["Burp Suite", "Nmap", "Git"],
  platforms: ["Linux (Kali/Ubuntu)", "Windows", "Docker"],
  concepts: ["OWASP Top 10", "Network Protocols", "Cryptography", "Privilege Escalation"]
};