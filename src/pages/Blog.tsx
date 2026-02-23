import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogsData, categories } from "@/data/blogs"; // Using the new folder structure
import { Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = selectedCategory === "All" 
    ? blogsData 
    : blogsData.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      <SEO 
        title="Security Logs & Blog" 
        description="Articles, writeups, and research notes on cybersecurity, hacking, and tech." 
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Security <span className="text-primary">Logs</span>
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            // Thoughts, writeups, and research notes.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="text-xs"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
                <Card className="bg-card/30 border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <span className="text-[10px] bg-secondary px-2 py-1 rounded text-primary">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
             <div className="text-center py-10 text-muted-foreground">
               No posts found in this category.
             </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;