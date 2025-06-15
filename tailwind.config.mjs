/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F6F5F4',       // near-white canvas (light mode)
          dark: '#121212',        // deep charcoal (dark mode)
          primary: '#2A2A2A',     // rich graphite
          accent: '#8C735B',      // muted bronze/gold (for CTA or details)
          subtle: '#6B7280',      // Updated: darker gray for better contrast
          'subtle-light': '#9CA3AF', // Lighter version for less important text
          link: '#4D6EA8',        // classy deep blue
          code: '#36313D',        // dark lavender-gray for code blocks
        },
        // Keep some legacy primary colors for gradual transition
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc4ff',
          400: '#36a5ff',
          500: '#0c87f0',
          600: '#4D6EA8', // Updated to match brand.link
          700: '#0454a6',
          800: '#08468a',
          900: '#0d3a72',
          950: '#08254e',
        },
        // Accent colors for pills and highlights
        accent: {
          bronze: '#8C735B',
          blue: '#4D6EA8',
          warm: '#B8A082',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
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