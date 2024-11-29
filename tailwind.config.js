/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "green": "#01D452",          // Boring green
          "primary": "#4C94F8",          // Primary blue
          "secondary": "#38BDF8",        // Secondary blue
          "accent": "#42B883",           // Accent green
          "neutral": "#2A3441",          // Dark gray
          "base-100": "#FFFFFF",         // Background white
          "base-200": "#F8FAFC",         // Slightly darker background
          "base-300": "#F1F5F9",         // Even darker background
          "info": "#0EA5E9",             // Info blue
          "success": "#22C55E",          // Success green
          "warning": "#F59E0B",          // Warning yellow
          "error": "#EF4444",            // Error red

          ".btn": {
            "border-radius": "0.5rem",    // Rounded buttons
          },

          ".card": {
            "background": "#FFFFFF",      // Card background
            "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            "border-radius": "0.75rem",   // Rounded cards
          },
        },
        dark: {
          "primary": "#4C94F8",          // Primary blue
          "secondary": "#38BDF8",        // Secondary blue
          "accent": "#42B883",           // Accent green
          "neutral": "#1E1E1E",          // Dark background
          "base-100": "#0F0F0F",         // Main background
          "base-200": "#1A1A1A",         // Slightly lighter background
          "base-300": "#262626",         // Even lighter background
          "info": "#0EA5E9",             // Info blue
          "success": "#22C55E",          // Success green
          "warning": "#F59E0B",          // Warning yellow
          "error": "#EF4444",            // Error red

          ".btn": {
            "border-radius": "0.5rem",    // Rounded buttons
          },

          ".card": {
            "background": "#1A1A1A",      // Card background
            "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.3)",
            "border-radius": "0.75rem",   // Rounded cards
          },
        },
      },
    ],
  },
}
