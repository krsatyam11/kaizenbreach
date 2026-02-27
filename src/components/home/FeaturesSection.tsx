import { Link } from "react-router-dom";
import { ExternalLink, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData } from "@/data/config";

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs text-primary font-bold">RESOURCES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight">
            Resources for <span className="text-primary">Exploitation</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-mono text-sm">
            // Everything you need to start your journey in ethical hacking.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            const CardBody = (
              <Card className="h-full group bg-black/40 backdrop-blur-md border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-start h-full relative overflow-hidden">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`${feature.color} relative z-10 p-3 rounded-lg bg-white/5 border border-white/5 mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="relative z-10 text-lg font-semibold mb-2 flex items-center gap-2 font-mono group-hover:text-primary transition-colors">
                    {feature.title}
                    {feature.external && (
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </h3>
                  <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );

            return feature.external ? (
              <a key={index} href={feature.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                {CardBody}
              </a>
            ) : (
              <Link key={index} to={feature.link} className="block h-full">
                {CardBody}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;