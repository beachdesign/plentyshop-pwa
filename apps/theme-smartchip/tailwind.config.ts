import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0ea5e9', 600: '#0284c7' },
        secondary: { DEFAULT: '#111827' },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './assets/**/*.{css,scss}',
  ],
}