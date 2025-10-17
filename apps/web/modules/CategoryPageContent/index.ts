import { addServerHandler, createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'ScCategoryPageContent',
  },
  setup (_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    nuxt.hook('components:extend', (components) => {
      const scCategoryPageContent = components.find((c) => c.pascalName === 'CategoryPageContent');
      if (scCategoryPageContent) {
        scCategoryPageContent.filePath = resolver.resolve('./ScCategoryPageContent.vue');
      }
    });
  },
})