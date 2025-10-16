import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  // ⬇ lädt dein Theme-CSS global
  css: [resolve('./assets/css/theme.css')],

  // ⬇ (falls du Layer-Komponenten nutzt)
  components: {
    dirs: [{ path: resolve('./components'), pathPrefix: false, priority: 100 }],
  },

  // ⬇ (optional, nur falls Layer-/public Assets wie Fonts partout nicht auftauchen)
  nitro: {
    publicAssets: [{ dir: resolve('./public') }],
  },
  runtimeConfig: {
    public: {
      headerBackgroundColor: '#FF0000', // Smart Chip Config
    },
  },
})