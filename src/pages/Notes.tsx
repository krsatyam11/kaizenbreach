import { useState, useMemo } from "react";
import { Search, Download } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notesData, categories } from "@/data/notes";

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotes = useMemo(() => {
    return notesData.filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || note.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Cybersecurity Notes</h1>
          <p className="text-muted-foreground max-w-2xl">
            My categorized study materials, cheat sheets, and references.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search (e.g., SQL Injection, Linux)..."
              className="pl-9 bg-secondary/50 border-border focus:bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className="text-xs md:text-sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-muted-foreground border-border">{note.category}</Badge>
                  <span className="text-xs text-muted-foreground font-mono">{note.difficulty}</span>
                </div>
                <CardTitle className="text-xl text-foreground">{note.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-muted-foreground">
                  {note.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {note.tags.slice(0,3).map(tag => (
                    <span key={tag} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Button className="w-full gap-2 hover:bg-primary hover:text-primary-foreground" variant="outline" asChild>
                  <a href={note.downloadUrl}>
                    <Download className="h-4 w-4" /> Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Notes;