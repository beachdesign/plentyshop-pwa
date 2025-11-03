import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  components: {
    // wichtig: genau dieses Verzeichnis, pathPrefix: false, priority hoch halten
    dirs: [{ path: resolve('./components'), pathPrefix: false, priority: 100 }],
  },
  // falls du Fonts/Bilder im Theme/public hast:
  // nitro: { publicAssets: [{ dir: resolve('./public') }] },
})