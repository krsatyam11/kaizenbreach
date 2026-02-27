import { Link } from "react-router-dom";
import { Download, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypeWriter from "@/components/effects/TypeWriter";
import { siteConfig } from "@/data/config";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden relative min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center md:text-left animate-fade-in-up">
            <div className="space-y-4">
              {/* Terminal Style Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/10 text-xs font-mono text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>System Online</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-mono">
                <span className="text-muted-foreground text-2xl md:text-4xl block mb-2">&gt; hello_world</span>
                I'm <span className="text-primary underline decoration-primary/30 underline-offset-8">{siteConfig.author}</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground font-medium font-mono min-h-[40px] pl-2 border-l-2 border-primary/50">
                <TypeWriter text={siteConfig.role} speed={50} delay={200} />
              </div>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
                {siteConfig.tagline}. Documenting my journey through B.Tech and sharing resources for the community.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link to="/notes">
                <Button size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90 font-mono">
                  <Download className="h-4 w-4" />
                  ./get_notes
                </Button>
              </Link>
              <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 border-white/10 hover:bg-secondary/50 hover:text-foreground font-mono">
                  <Youtube className="h-4 w-4" />
                  YouTube
                </Button>
              </a>
              <Link to="/about">
                <Button size="lg" variant="ghost" className="gap-2 hover:bg-secondary/30 font-mono">
                  About Me <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image / Profile Photo with Scanline Effect */}
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in-up delay-200">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                {/* The Image (Grayscale by default, color on hover) */}
                <img 
                  src="/profile.jpeg" 
                  alt={siteConfig.author} 
                  className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* CRT Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full animate-scanline pointer-events-none" />
                
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
              </div>

              {/* Decorative Elements behind image */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;