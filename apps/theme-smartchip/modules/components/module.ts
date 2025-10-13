import { defineNuxtModule, addComponentsDir, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: { name: 'smartchip-components' },
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    // Registriert DEINE Komponenten mit hoher Priorität (über Core)
    addComponentsDir({
      path: resolve('../components'),
      pathPrefix: false,   // <FooterBlock /> statt <BlocksFooterFooter />
      priority: 100        // höher als Default => überschreibt Core
    })
  }
})