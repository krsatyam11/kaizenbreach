import { generalBlogs } from "./general";
import { websecurityBlogs } from "./websecurity";
import { BlogPost } from "./types";

// You can create other files like web.ts, network.ts later and import them here

export const blogsData: BlogPost[] = [
  ...generalBlogs,
  ...websecurityBlogs, 
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sorts by newest first

export const categories = [
  "All", 
  "General", 
  "Web Security", 
  "Network Security", 
  "CTF Writeups"
];