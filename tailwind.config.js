/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#050507",
        neon: {
          purple: "#8b5cf6",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-purple":
          "0 0 40px -10px rgba(139, 92, 246, 0.45), 0 0 80px -20px rgba(139, 92, 246, 0.25)",
        "glow-blue":
          "0 0 40px -10px rgba(59, 130, 246, 0.45), 0 0 80px -20px rgba(59, 130, 246, 0.25)",
        "glow-mixed":
          "0 0 50px -12px rgba(139, 92, 246, 0.35), 0 0 60px -15px rgba(59, 130, 246, 0.25)",
        "card-cyan":
          "0 20px 50px -15px rgba(59, 130, 246, 0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-purple":
          "0 20px 50px -15px rgba(139, 92, 246, 0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-lime":
          "0 20px 50px -15px rgba(163, 230, 53, 0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
