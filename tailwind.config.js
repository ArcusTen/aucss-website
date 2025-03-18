/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        // Updated modern color palette
        primary: {
          50: '#e6f0fa',
          100: '#cce0f5',
          200: '#99c2eb',
          300: '#66a3e0',
          400: '#3385d6',
          500: '#195294',
          600: '#164280',
          700: '#12316c',
          800: '#0e2657',
          900: '#0b1b43',
        },
        secondary: {
          50: '#edfcfe',
          100: '#d0f5fc',
          200: '#a1ebf9',
          300: '#72e0f6',
          400: '#43d6f3',
          500: '#6dd5ed',
          600: '#23b8d8',
          700: '#1c92ac',
          800: '#156b80',
          900: '#0f4554',
        },
        accent: {
          purple: '#6B46C1',
          pink: '#D53F8C',
          yellow: '#ECC94B',
          teal: '#319795',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      backgroundImage: {
        "hero-img": "url(assets/hero-bg.png)",
        "gradient-primary": "linear-gradient(to right, var(--tw-colors-primary-500), var(--tw-colors-secondary-500))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-colors-primary-500) 0deg, var(--tw-colors-secondary-500) 180deg, var(--tw-colors-accent-purple) 360deg)",
        "gradient-radial": "radial-gradient(circle at center, var(--tw-colors-primary-500), var(--tw-colors-secondary-500))",
        "gradient-mesh": "linear-gradient(to right, var(--tw-colors-primary-500) 1px, transparent 1px), linear-gradient(to bottom, var(--tw-colors-primary-500) 1px, transparent 1px)",
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'neon': '0 0 5px theme(colors.primary.200), 0 0 20px theme(colors.primary.400), 0 0 40px theme(colors.primary.600)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.5)',
        'frost': '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s linear infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px theme(colors.primary.200), 0 0 20px theme(colors.primary.400)' },
          '100%': { boxShadow: '0 0 10px theme(colors.primary.200), 0 0 40px theme(colors.primary.400)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'mesh': '40px 40px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
