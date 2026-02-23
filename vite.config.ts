import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    sourcemap: false,
    // 1. Increase the warning limit slightly (optional, but reduces noise)
    chunkSizeWarningLimit: 1000, 
    
    // 2. Configure Manual Chunks to split code
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split UI libraries (Heavy)
            if (id.includes('@radix-ui') || id.includes('lucide-react') || id.includes('class-variance-authority')) {
              return 'ui-libs';
            }
            // Split React Core (Heavy)
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-core';
            }
            // Split Markdown processing (Heavy)
            if (id.includes('react-markdown') || id.includes('remark') || id.includes('rehype')) {
              return 'markdown-libs';
            }
            // Everything else goes into vendor
            return 'vendor';
          }
        },
      },
    },
  },
}));