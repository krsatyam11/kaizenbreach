import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import React, { Suspense } from "react";
import { Loader2 } from "lucide-react"; // Import a loader icon

// Lazy Load Pages
const Index = React.lazy(() => import("./pages/Index"));
const Notes = React.lazy(() => import("./pages/Notes"));
const Tools = React.lazy(() => import("./pages/Tools"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const About = React.lazy(() => import("./pages/About"));
const Connect = React.lazy(() => import("./pages/Connect"));
const Resume = React.lazy(() => import("./pages/Resume"));
const Certifications = React.lazy(() => import("./pages/Certifications"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const HiddenTerminal = React.lazy(() =>
  import("./components/effects/HiddenTerminal")
);

const queryClient = new QueryClient();

// Create a simple loading component
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background text-primary">
    <Loader2 className="h-8 w-8 animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src 'self' 'unsafe-inline';
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.gstatic.com;
            img-src 'self' data: https:;
            connect-src 'self';
          "
        />
      </Helmet>

      <Toaster />
      <Sonner />

      <Suspense fallback={null}>
        <HiddenTerminal />
      </Suspense>

      <BrowserRouter>
        {/* Wrap Routes in Suspense with the loader */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/about" element={<About />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
