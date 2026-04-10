/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        'logistics-emerald': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          dark: '#042f2e',
        },
        'logistics-steel': '#94a3b8',
        'logistics-ghost': '#f1f5f9',
        'logistics-accent': '#94a3b8',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iI0VBM0UyRCIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMTAgMEwwIDEwdjEwakwwIDBoMTB6TTEwIDQwTDAgMzB2LTEwaEwwIDQwSDEwek0wIDB2MTBoMTBMRE0zMCA0MGgxMHYtMTBMMzAgNDB6TTQwIDBIMzB2MTBMMTQwIDB6Ii8+PC9nPjwvZz48L3N2Zz4=\")",
      },
      borderRadius: {
        'box': '10px',
      },
      boxShadow: {
        'steel': '0 0 20px rgba(148, 163, 184, 0.3)',
      },
    },
  },
  plugins: [],
}
