import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5500',
          'orange-hover': '#FF6A1A',
          'orange-dark': '#D94500',
          black: '#0A0A0A',
          dark: '#121212',
          surface: '#181818',
          card: '#1C1C1C',
          border: '#2A2A2A',
          muted: '#8E8E93',
          light: '#F4F4F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
