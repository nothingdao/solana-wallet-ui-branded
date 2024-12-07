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
        cyberpunk: {
          "primary": "#ff7598",
          "secondary": "#75d1f0",
          "accent": "#c07eec",
          "neutral": "#291334",
          "base-100": "#1d1021",
          "base-200": "#2a1929",
          "base-300": "#3a2a3a",
          "info": "#66c6ff",
          "success": "#87d039",
          "warning": "#e2d562",
          "error": "#ff1640",

          "*": {
            "font-family": "'Rajdhani', sans-serif",
            "border-color": "#6B1C67",
          },
          ".btn": {
            "border-width": "2px",
            "border-color": "currentColor",
            "text-transform": "uppercase",
            "font-weight": "700",
            "&:hover": {
              "transform": "translateY(-2px)",
              "box-shadow": "0 10px 20px -10px var(--primary)",
            }
          },
          ".card": {
            "background": "linear-gradient(45deg, var(--base-200), var(--base-300))",
            "border": "2px solid",
            "border-color": "var(--primary)",
          },
          ".navbar": {
            "background": "linear-gradient(180deg, var(--base-100), var(--base-200))",
            "border-bottom": "2px solid var(--primary)",
          },
          ".wallet-btn": {
            "border": "2px solid var(--primary)",
            "background": "linear-gradient(45deg, var(--base-200), var(--base-300))",
            "text-transform": "uppercase",
            "position": "relative",
            "overflow": "hidden",
            "&:hover": {
              "transform": "scale(1.02)",
              "box-shadow": "0 0 15px var(--primary)",
              "&::before": {
                "content": "''",
                "position": "absolute",
                "top": "-50%",
                "left": "-50%",
                "width": "200%",
                "height": "200%",
                "background": "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                "transform": "rotate(45deg)",
                "animation": "cyber-glint 2s infinite",
              }
            }
          }
        },

        minimal: {
          "primary": "#000000",
          "secondary": "#333333",
          "accent": "#666666",
          "neutral": "#000000",
          "base-100": "#FFFFFF",
          "base-200": "#FAFAFA",
          "base-300": "#F5F5F5",
          "info": "#000000",
          "success": "#000000",
          "warning": "#000000",
          "error": "#000000",

          // Minimal style overrides
          "*": {
            "font-family": "'Space Grotesk', sans-serif",
          },
          ".btn": {
            "border-radius": "0",
            "text-transform": "none",
            "font-weight": "400",
            "border": "1px solid #000000",
            "background": "none",
            "transition": "all 0.2s ease",
            "&:hover": {
              "background": "#000000",
              "color": "#FFFFFF",
            }
          },
          ".card": {
            "border-radius": "0",
            "border": "1px solid #000000",
            "box-shadow": "none",
          },
          ".navbar": {
            "border-bottom": "1px solid #000000",
          },
          ".modal": {
            "border-radius": "0",
            "border": "1px solid #000000",
          }
        },

        playful: {
          "primary": "#FF6B6B",
          "secondary": "#4ECDC4",
          "accent": "#FFE66D",
          "neutral": "#2C2C2C",
          "base-100": "#FFFFFF",
          "base-200": "#FFF5F5",
          "base-300": "#FFEDED",
          "info": "#45B7D1",
          "success": "#47D185",
          "warning": "#FFB84C",
          "error": "#FF6B6B",

          "*": {
            "font-family": "'Quicksand', sans-serif",
          },
          ".btn": {
            "border-radius": "999px",
            "font-weight": "700",
            "padding": "0.5rem 1.5rem",
            "&:hover": {
              "transform": "translateY(-2px)",
              "box-shadow": "0 10px 20px -10px var(--primary)",
            }
          },
          ".card": {
            "border-radius": "2rem",
            "box-shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            "border": "none",
          },
          // Fixed modal positioning
          ".modal": {
            "position": "fixed",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "border-radius": "2rem",
            "max-width": "90vw",
            "max-height": "90vh",
            "overflow-y": "auto",
            "background": "var(--base-100)",
            "box-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }
        },

        brutalist: {
          "primary": "#0000FF",
          "secondary": "#FF0000",
          "accent": "#00FF00",
          "neutral": "#000000",
          "base-100": "#FFFFFF",
          "base-200": "#FFFFFF",
          "base-300": "#CCCCCC",
          "info": "#0000FF",
          "success": "#00FF00",
          "warning": "#FF0000",
          "error": "#FF0000",

          // Brutalist style overrides
          "*": {
            "font-family": "'IBM Plex Mono', monospace",
          },
          "html": {
            "cursor": "crosshair",
          },
          ".btn": {
            "border-radius": "0",
            "border": "3px solid black",
            "text-transform": "uppercase",
            "background": "#FFFFFF",
            "color": "#000000",
            "box-shadow": "5px 5px 0px black",
            "transition": "all 0.1s ease",
            "&:hover": {
              "transform": "translate(-2px, -2px)",
              "box-shadow": "7px 7px 0px black",
            },
            "&:active": {
              "transform": "translate(2px, 2px)",
              "box-shadow": "3px 3px 0px black",
            }
          },
          ".card": {
            "border": "3px solid black",
            "border-radius": "0",
            "box-shadow": "8px 8px 0px black",
            "transform": "rotate(-1deg)",
          },
          ".navbar": {
            "border-bottom": "3px solid black",
            "background": "repeating-linear-gradient(45deg, #fff, #fff 10px, #000 10px, #000 11px)",
          },
          ".modal": {
            "border": "3px solid black",
            "border-radius": "0",
            "box-shadow": "10px 10px 0px black",
            "transform": "rotate(1deg)",
          },
          ".wallet-btn": {
            "border": "3px solid black",
            "background": "white",
            "font-family": "'IBM Plex Mono', monospace",
            "transform": "rotate(-0.5deg)",
            "box-shadow": "4px 4px 0 black",
            "transition": "all 0.1s ease",
            "&:hover": {
              "transform": "translate(-2px, -2px) rotate(-0.5deg)",
              "box-shadow": "6px 6px 0 black",
            },
            "&:active": {
              "transform": "translate(2px, 2px) rotate(-0.5deg)",
              "box-shadow": "2px 2px 0 black",
            }
          }
        },

      }
    ]
  }
}
