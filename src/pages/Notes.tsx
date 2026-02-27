import { useState, useMemo } from "react";
import { Search, Download, Database, Code, Terminal, Network, Shield, Key, RefreshCw, Cpu, Scan, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notesData, categories } from "@/data/notes";

const IconMap: Record<string, any> = {
  Database, Code, Terminal, Network, Shield, Search: Scan, Key, RefreshCw, Cpu, Scan, FileText
};

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotes = useMemo(() => {
    return notesData.filter((note) => {
      const lowerQuery = searchQuery.toLowerCase();
      const matchesSearch =
        note.title.toLowerCase().includes(lowerQuery) ||
        note.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
      const matchesCategory = selectedCategory === "All" || note.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-mono">
            ~/Cybersecurity/<span className="text-primary">Notes</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl font-mono text-sm border-l-2 border-primary/50 pl-4">
            // Categorized study materials, cheat sheets, and offensive security references.
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col gap-6 mb-8 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/5">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search notes..."
              maxLength={50}
              className="pl-9 bg-secondary/20 border-white/10 focus:border-primary/50 font-mono text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs md:text-sm font-mono transition-all ${
                  selectedCategory === cat 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-transparent border-white/10 hover:border-primary/50 hover:bg-secondary/30"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Grid - Glassmorphism Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => {
              const IconComponent = IconMap[note.icon] || FileText;
              
              return (
                <Card key={note.id} className="group bg-black/40 backdrop-blur-md border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden">
                  <CardHeader className="relative">
                    {/* Subtle gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex justify-between items-start mb-3">
                      <div className="p-2 bg-white/5 border border-white/10 rounded-md group-hover:border-primary/30 transition-colors">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className={`
                        border-white/10 bg-black/50 font-mono text-[10px] uppercase tracking-wider
                        ${note.difficulty === 'Advanced' ? 'text-red-400' : 
                          note.difficulty === 'Intermediate' ? 'text-yellow-400' : 'text-green-400'}
                      `}>
                        {note.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="relative z-10 text-xl font-mono leading-tight group-hover:text-primary transition-colors">{note.title}</CardTitle>
                    <CardDescription className="relative z-10 line-clamp-2 text-muted-foreground mt-2 text-sm">
                      {note.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0 relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {note.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-muted-foreground bg-white/5 border border-white/5 px-2 py-0.5 rounded-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full gap-2 font-mono text-xs border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary" variant="outline" asChild>
                      <a href={note.downloadUrl}>
                        <Download className="h-3 w-3" /> 
                        DOWNLOAD_PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20 text-muted-foreground font-mono">
              <p>Error 404: No notes found matching criteria.</p>
              <Button variant="link" onClick={() => {setSearchQuery(""); setSelectedCategory("All")}} className="mt-2 text-primary font-mono">
                [ Clear Filters ]
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notes;