import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F94A29',    // Bright orange-red from the design (kept for contrast)
        'primary-dark': '#D93E1A', // A darker shade for hover effects
        background: '#FFFFFF',    // White background (will be overridden globally)
        'text-dark': '#222222',   // Very dark grey for main text (will be less used)
        'text-light': '#555555',  // Lighter grey for secondary text
        'accent-light': '#FFF0ED', // A very light orange for backgrounds or accents
        'brand-blue': '#2832c2', // User's requested blue
        'brand-blue-dark': '#1e258a', // Darker shade for gradient
        // New cobalt blue palette
        'cobalt': '#0047AB',
        'cobalt-light': '#2832c2', // Aligning with user's previous suggestion
        'cobalt-dark': '#003380',
        'cobalt-extra-dark': '#001a40',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'bubble': 'bubble 7s ease-in-out infinite',
        'jiggle': 'jiggle 0.5s ease-in-out infinite',
        'tada': 'tada 1s ease-in-out',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        bubble: {
          '0%, 100%': { transform: 'translateY(-15%) scale(1)' },
          '50%': { transform: 'translateY(15%) scale(1.05)' },
        },
        jiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;