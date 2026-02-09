import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am a 3rd-year B.Tech Computer Science student with a strong passion for Cybersecurity. 
              Currently, I am focusing on offensive security, CTFs, and network fundamentals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">My Journey</h2>
              <p className="text-muted-foreground">
                Starting as a fresher, I realized the importance of structured learning. 
                I created this platform to document what I learn and share it with others 
                who are just starting out. I believe in the philosophy of "Kaizen" - continuous improvement.
              </p>
            </div>
            
            <div className="space-y-4">
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

        </div>
      </div>
    </Layout>
  );
};

export default About;