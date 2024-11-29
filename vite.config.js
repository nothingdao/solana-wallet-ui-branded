import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable fast refresh for React components
      fastRefresh: true,
    }),
  ],
  resolve: {
    alias: {
      // Set up path aliases for cleaner imports
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    // Optimize build output
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'solana-vendor': [
            '@solana/web3.js',
            '@solana/wallet-adapter-react',
            '@solana/wallet-adapter-wallets',
          ],
        },
      },
    },
  },
  // Optimize dev server
  server: {
    port: 3000,
    open: true,
    // Configure CORS for wallet adapters
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  // Handle WebAssembly modules used by Solana
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
})
