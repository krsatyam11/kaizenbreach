export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: "General" | "Web Security" | "Network Security" | "CTF Writeups";
  content: string; // Markdown content
}