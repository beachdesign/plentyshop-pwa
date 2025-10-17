import { addServerHandler, createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'ScCategorySidebar',
  },
  setup (_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    nuxt.hook('components:extend', (components) => {
      const scCategorySidebar = components.find((c) => c.pascalName === 'CategorySidebar');
      if (scCategorySidebar) {
        scCategorySidebar.filePath = resolver.resolve('./ScCategorySidebar.vue');
      }
    });
  },
})