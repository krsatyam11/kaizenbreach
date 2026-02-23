import { BlogPost } from "./types";

export const websecurityBlogs: BlogPost[] = [
  // ========================= BLOG 1 ========================= //
  {
    slug: "tryhackme-presecurity-web-fundamentals",
    title: "Web Security Fundamentals (TryHackMe Pre Security Notes)",
    date: "2026-02-24",
    category: "Web Security",
    description:
      "My structured notes from TryHackMe Pre Security covering how the web works, HTTP, DNS, and basic web security concepts.",
    content: `
# Web Security Fundamentals (TryHackMe Pre Security)

These are my summarized notes from **TryHackMe Pre Security Path (Web Fundamentals section)**.  
This module builds the foundation for understanding how websites work and how attackers exploit them.

---

## 🌐 How the Web Works
- A **client (browser)** sends a request to a **web server**
- The server processes the request and sends back a response (HTML, CSS, JS, images)
- Communication happens using **HTTP/HTTPS protocols**

---

## 🔗 HTTP & HTTPS
- **HTTP (HyperText Transfer Protocol)** is stateless and unencrypted
- **HTTPS** uses **TLS/SSL encryption** to secure data transmission
- Common HTTP methods: GET, POST, PUT, DELETE

---

## 🌍 DNS (Domain Name System)
- Converts domain names (google.com) into IP addresses
- DNS hierarchy: Root → TLD → Domain → Subdomain
- Common DNS records: A, AAAA, CNAME, MX, TXT

---

## 🖥️ Web Servers
- Popular web servers: Apache, Nginx, IIS
- Serve static and dynamic content
- Use backend languages like PHP, Python, Node.js

---

## 🔐 Basic Web Security Concepts
- **Authentication:** Verifying user identity (login systems)
- **Authorization:** What a user is allowed to do
- **Encryption:** Protecting data in transit and at rest

---

## ⚠️ Common Web Vulnerabilities (OWASP Overview)
- SQL Injection (SQLi)
- Cross-Site Scripting (XSS)
- Broken Authentication
- Security Misconfiguration
- Sensitive Data Exposure

---

## ✅ Why This Matters
Understanding these fundamentals is essential before learning:
- Web penetration testing
- Bug bounty hunting
- Real-world exploitation techniques

This module is the stepping stone to advanced offensive security topics.
    `,
  },
];