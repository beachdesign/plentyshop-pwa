import type { Config } from 'tailwindcss'

export default {
  content: [
    // Web-App
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',

    // 👇 Theme-Layer (sehr wichtig!)
    '../theme-smartchip/components/**/*.{vue,js,ts}',
    '../theme-smartchip/assets/**/*.{css,scss}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config