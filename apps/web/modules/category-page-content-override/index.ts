import { createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'CategoryPageContent',
  },
  setup (_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.hook('components:extend', (components) => {
      const categoryPageContent = components.find((c) => c.pascalName === 'CategoryPageContent');
      if (categoryPageContent) {
        categoryPageContent.filePath = resolver.resolve('./CategoryPageContent.vue');
      }
    });
  },
})