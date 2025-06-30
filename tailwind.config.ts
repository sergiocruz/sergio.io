import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-light': '#F6F5F4',
        'brand-dark': '#121212',
        'brand-primary': '#2A2A2A',
        'brand-accent': '#8C735B',
        'brand-subtle': '#6B7280',
        'brand-subtle-light': '#9CA3AF',
        'brand-link': '#4D6EA8',
        'brand-code': '#36313D',
        
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc4ff',
          400: '#36a5ff',
          500: '#0c87f0',
          600: '#4D6EA8',
          700: '#0454a6',
          800: '#08468a',
          900: '#0d3a72',
          950: '#08254e',
        },
        
        'accent-bronze': '#8C735B',
        'accent-blue': '#4D6EA8',
        'accent-warm': '#B8A082',
        
        green: '#10b981',
        pink: '#ec4899',
        yellow: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config