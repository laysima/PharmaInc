/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff8ff',
          100: '#dcefff',
          200: '#b6e0ff',
          300: '#78c8ff',
          400: '#33abff',
          500: '#0a8ff2',
          600: '#0881DE',
          700: '#0567b3',
          800: '#08548f',
          900: '#0c4571',
          950: '#082b48',
        },
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        aurora:
          'radial-gradient(60% 50% at 20% 20%, rgba(8,129,222,0.16) 0%, rgba(8,129,222,0) 60%), radial-gradient(50% 40% at 85% 15%, rgba(51,171,255,0.14) 0%, rgba(51,171,255,0) 60%), radial-gradient(45% 45% at 90% 80%, rgba(8,84,143,0.10) 0%, rgba(8,84,143,0) 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(8,129,222,0.08), 0 8px 30px -8px rgba(8,129,222,0.25)',
        card: '0 2px 8px -2px rgba(15,23,42,0.06), 0 12px 32px -12px rgba(15,23,42,0.10)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
