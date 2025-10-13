import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  // Dein Theme-Name (optional, nur für Übersicht)
  app: { baseURL: '/', buildAssetsDir: '/_smartchip/' },

  // Globale Theme-CSS
  css: [resolve('./assets/css/theme.css')],

  // Komponenten dieses Layers automatisch verfügbar machen
  components: {
    dirs: [
      { path: resolve('./components'), pathPrefix: false, priority: 100 }]
  },

  // Runtime-Defaults (kann das Web-Projekt überschreiben)
  runtimeConfig: {
    public: {
      storename: 'Smart Chip',
      iosStoreUrl: 'https://apps.apple.com/app/idXXXXXXXXX',             // TODO: ersetzen
      androidStoreUrl: 'https://play.google.com/store/apps/details?id=XXX' // TODO: ersetzen
    }
  }
})