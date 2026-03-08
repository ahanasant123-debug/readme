/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          primary:   '#1A3C2E',
          secondary: '#C8A96E',
          accent:    '#4CAF82',
          bg:        '#080C09',
          surface:   '#0E1510',
          surface2:  '#131A14',
          fg:        '#F0EDE6',
          muted:     '#6B7A6E',
        },
      },
      animation: {
        'marquee': 'marquee-scroll 45s linear infinite',
        'pulse-dot': 'pulse-dot 2s infinite',
        'scroll-line': 'scroll-line-anim 2s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};