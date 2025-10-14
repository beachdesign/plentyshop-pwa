import { createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'BlocksFooter',
  },
  setup (_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.hook('components:extend', (components) => {
      const blocksFooter = components.find((c) => c.pascalName === 'BlocksFooter');
      if (blocksFooter) {
        blocksFooter.filePath = resolver.resolve('./BlocksFooter.vue');
      }
    });
  },
})