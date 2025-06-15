/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc4ff',
          400: '#36a5ff',
          500: '#0c87f0',
          600: '#0369ce',
          700: '#0454a6',
          800: '#08468a',
          900: '#0d3a72',
          950: '#08254e',
        },
        gray: {
          50: '#fafbfc',
          100: '#fffffc',
          200: '#e9ecef',
          300: '#d1d5db',
          400: '#c1c7cd',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#373940',
          900: '#1f2937',
        },
        // Accent colors from sergio.io
        pink: '#ff0077',
        green: '#9bff4a',
        yellow: '#efff00',
      },
      fontFamily: {
        sans: ['Raleway', 'Inter', 'system-ui', 'sans-serif'],
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
        }
      }
    },
  },
  plugins: [],
}