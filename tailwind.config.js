/** @type {import('tailwindcss').Config} */
const {blue} = require("next/dist/lib/picocolors");
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1400px",
      },
    },
    extend: {
      colors: {
        'light-blue': 'hsl(var(--light-blue))',
        'light-purple': 'hsl(var(--light-purple))',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        hero: "url(/hero/hero-bg-1.avif)",
        hero_shape: "url(/hero/shape-1.svg)",
        profilfe_image: "url(/hero/profile-foto-without-background.png)",
        hero_shape1_light: "url(/hero/shape-1-light.png)",
        hero_shape2_light: "url(/hero/shape-2-light.svg)",
        hero_shape2_dark: "url(/hero/shape-2-dark.svg)",
        dots_light: "url(/dots-light.svg)",
        dots_dark: "url(/dots-dark.svg)",
        work_project_bg_dark: "url(/work/project-bg-dark.avif)",
        contact_illutration_light: "url(/contact/illustration-light.svg)",
        contact_illutration_dark: "url(/contact/illustration-dark.svg)"
      },
      backgroundColor: {
        'gradient-light': 'linear-gradient(to right, hsl(198, 100%, 95%), hsl(198, 100%, 92%))',
        'gradient-dark': 'dark:bg-transparent',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}