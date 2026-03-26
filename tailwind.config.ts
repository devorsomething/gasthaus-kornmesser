import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#722F37',
          50: '#F5EBEC',
          100: '#EDD6D9',
          200: '#DDB2B8',
          300: '#C78B93',
          400: '#B1626C',
          500: '#9D4A54',
          600: '#722F37',
          700: '#5C262D',
          800: '#3D1A21',
          900: '#1F0D11',
        },
        cream: {
          DEFAULT: '#FDF8F3',
          50: '#FFFFFF',
          100: '#FDF8F3',
          200: '#FAF0E6',
          300: '#F5E6D8',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#B0B0B0',
          300: '#808080',
          400: '#5C5C5C',
          500: '#3D3D3D',
          600: '#2D2D2D',
          700: '#1F1F1F',
          800: '#141414',
          900: '#0A0A0A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          50: '#FCF8E8',
          100: '#F7EFC7',
          200: '#EFDDA0',
          300: '#E5C874',
          400: '#D9B34E',
          500: '#C9A84C',
          600: '#B08F32',
          700: '#8A6F26',
          800: '#5E4C19',
          900: '#36290C',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
}

export default config
