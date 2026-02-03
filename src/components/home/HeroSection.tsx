import { Link } from "react-router-dom";
import { Download, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      {/* Subtle Background Gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center md:text-left animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Hi, I'm <span className="text-primary border-b-4 border-primary/20">Kr Satyam</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium font-mono">
                3rd Year CSE Student
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
                I am a cybersecurity learner focusing on offensive security and ethical hacking. 
                Documenting my journey through B.Tech and sharing resources for the community.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link to="/notes">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="h-4 w-4" />
                  Get Notes
                </Button>
              </Link>
              <a href="https://youtube.com/@KaizenBreach" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="gap-2 border-primary/20 hover:bg-secondary">
                  <Youtube className="h-4 w-4" />
                  YouTube
                </Button>
              </a>
              <Link to="/about">
                <Button size="lg" variant="ghost" className="gap-2 hover:bg-secondary">
                  About Me <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image / Profile Photo */}
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Photo */}
              <img 
                src="/profile.jpeg" 
                alt="Kr Satyam" 
                className="rounded-2xl object-cover w-full h-full border border-border shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Subtle Dark Glow behind image */}
              <div className="absolute -z-10 inset-0 bg-primary/10 blur-3xl rounded-full opacity-50" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;