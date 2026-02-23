import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { Badge } from "@/components/ui/badge";
import { Flag, Terminal } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About Me" 
        description="Background, journey, and CTF achievements of Kr Satyam." 
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am a 3rd-year B.Tech Computer Science student with a strong passion for Cybersecurity. 
              Currently, I am focusing on offensive security, CTFs, and network fundamentals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 animate-fade-in-up delay-100">
              <h2 className="text-2xl font-semibold">My Journey</h2>
              <p className="text-muted-foreground">
                Starting as a fresher, I realized the importance of structured learning. 
                I created this platform to document what I learn and share it with others 
                who are just starting out. I believe in the philosophy of "Kaizen" - continuous improvement.
              </p>
            </div>
            
            <div className="space-y-4 animate-fade-in-up delay-200">
              <h2 className="text-2xl font-semibold">Current Focus</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Web Security</Badge>
                <Badge variant="secondary">Linux Administration</Badge>
                <Badge variant="secondary">Python for Security</Badge>
                <Badge variant="secondary">Network Protocols</Badge>
                <Badge variant="secondary">CTF Challenges</Badge>
              </div>
            </div>
          </div>

          {/* CTF & Badges Section */}
          <div className="space-y-6 animate-fade-in-up delay-300">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Flag className="text-primary h-6 w-6" /> CTF Achievements
            </h2>
            <div className="bg-card/30 border border-border rounded-lg p-6">
              <div className="grid gap-6 md:grid-cols-2">
                
                {/* OverTheWire */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-medium text-foreground">
                    <Terminal className="h-4 w-4 text-green-500" /> OverTheWire
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <img src="https://img.shields.io/badge/Bandit-Level%2025-black?style=for-the-badge&logo=linux&logoColor=white" alt="Bandit" />
                    <img src="https://img.shields.io/badge/Natas-Level%2010-black?style=for-the-badge&logo=html5&logoColor=white" alt="Natas" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Building foundational Linux and Web Security skills through wargames.
                  </p>
                </div>

                {/* TryHackMe / HackTheBox Placeholder */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-medium text-foreground">
                    <Flag className="h-4 w-4 text-red-500" /> Platforms
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <img src="https://img.shields.io/badge/TryHackMe-Top%2010%25-red?style=for-the-badge&logo=tryhackme&logoColor=white" alt="THM" />
                    <img src="https://img.shields.io/badge/PicoCTF-Participant-blue?style=for-the-badge&logo=ctf&logoColor=white" alt="PicoCTF" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Active participant in community CTFs and learning paths.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default About;