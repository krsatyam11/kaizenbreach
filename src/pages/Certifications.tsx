import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, Award, CheckCircle2 } from "lucide-react";
import { certificationsData, skillsData } from "@/data/certifications";

const Certifications = () => {
  return (
    <Layout>
      <SEO 
        title="Certifications & Skills" 
        description="My professional certifications, achievements, and technical skill set in cybersecurity." 
      />
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Certifications & <span className="text-primary">Skills</span>
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            // Validating expertise through continuous learning and practical application.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-8 mb-16">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Award className="text-primary" /> Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <Card key={index} className="bg-card/50 border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription className="flex justify-between mt-2">
                    <span className="text-primary font-semibold">{cert.issuer}</span>
                    <span className="font-mono text-xs">{cert.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-[10px]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <CheckCircle2 className="text-primary" /> Technical Arsenal
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/30">
              <CardHeader><CardTitle className="text-base">Languages</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsData.languages.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
              </CardContent>
            </Card>

            <Card className="bg-card/30">
              <CardHeader><CardTitle className="text-base">Tools & Frameworks</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsData.tools.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
              </CardContent>
            </Card>

            <Card className="bg-card/30">
              <CardHeader><CardTitle className="text-base">Platforms</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsData.platforms.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
              </CardContent>
            </Card>

             <Card className="bg-card/30">
              <CardHeader><CardTitle className="text-base">Core Concepts</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsData.concepts.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Certifications;