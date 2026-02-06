import { Github, Youtube, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kr Satyam. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
           <a href="https://github.com/krsatyam11" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/krsatyam07" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://youtube.com/@KaizenBreach" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="https://instagram.com/kaizenbreach" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;