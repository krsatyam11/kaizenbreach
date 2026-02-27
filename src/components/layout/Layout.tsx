import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-x-hidden">
      {/* Background Grid Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* The grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        {/* The vignette mask to fade edges */}
        <div className="absolute inset-0 bg-background/60 bg-grid-mask" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;