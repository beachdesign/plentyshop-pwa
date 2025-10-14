import { createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'ScFooter',
  },
  setup (_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.hook('components:extend', (components) => {
      const scFooter = components.find((c) => c.pascalName === 'BlocksFooter');
      if (scFooter) {
        scFooter.filePath = resolver.resolve('./Footer.vue');
      }
    });
  },
})