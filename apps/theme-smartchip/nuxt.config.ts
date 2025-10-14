import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
    css: [resolve('./assets/css/theme.css')],
    components: {
        dirs: [{ path: resolve('./components'), pathPrefix: false, priority: 100 }],
    },
    nitro: {
    publicAssets: [{ dir: resolve('./public') }],
    },
})