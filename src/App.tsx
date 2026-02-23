import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import React, { Suspense } from "react";

// Pages
import Index from "./pages/Index";
import Notes from "./pages/Notes";
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Resume from "./pages/Resume";
import Certifications from "./pages/Certifications"; // Import New Page
import NotFound from "./pages/NotFound";

const HiddenTerminal = React.lazy(() =>
  import("./components/effects/HiddenTerminal")
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kr Satyam | Cybersecurity Learner</title>
        <meta name="description" content="Portfolio of a 3rd Year CSE Student exploring Cybersecurity." />
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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/certifications" element={<Certifications />} /> {/* Add Route */}
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
