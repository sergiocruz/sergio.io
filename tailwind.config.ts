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
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        purple: {
          600: '#9333ea',
        },
        orange: {
          400: '#fb923c',
        },
        red: {
          500: '#ef4444',
        },
        teal: {
          400: '#2dd4bf',
        },
        
        // Transparent overlay colors for video backgrounds
        'primary-400-overlay': 'rgba(54, 165, 255, 0.75)',
        'primary-500-overlay': 'rgba(12, 135, 240, 0.75)',
        'primary-600-overlay': 'rgba(77, 110, 168, 0.75)',
        'green-overlay': 'rgba(16, 185, 129, 0.75)',
        'pink-overlay': 'rgba(236, 72, 153, 0.75)',
        'yellow-overlay': 'rgba(245, 158, 11, 0.75)',
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