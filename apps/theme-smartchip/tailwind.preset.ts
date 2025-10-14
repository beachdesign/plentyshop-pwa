import type { Config } from 'tailwindcss'

const preset = {
  theme: {
    extend: {
      fontFamily: {
        // App verwendet diese Keys:
        body:   ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        editor: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],

        // plus gängige Aliasse:
        sans:   ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading:['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Beispiel für Design-Tokens – optional erweitern:
      borderRadius: {
        'card': '28px',
      },
      boxShadow: {
        'card': '0 1px 20px rgba(0,0,0,0.06)',
      },
      colors: {
        // sc = SmartChip
        sc: {
          primary: '#FF0077',
          ink: '#111827',
        },
      },
    },
  },
  plugins: [
    // hier könntest du z.B. line-clamp, typography etc. hinzufügen
    // require('@tailwindcss/line-clamp'),
  ],
} satisfies Partial<Config>

export default preset