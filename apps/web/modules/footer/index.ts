import { createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'ScFooter',
  },
  setup (_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.hook('components:extend', (components) => {
      const scFooter = components.find((c) => c.pascalName === 'FooterBlock');
      if (scFooter) {
        scFooter.filePath = resolver.resolve('./Footer.vue');
      }
    });
  },
})

// export default defineNuxtModule({
//   meta: {
//     name: 'ScFooter',
//   },
//   setup (_options, nuxt) {
//     const resolver = createResolver(import.meta.url)

//     nuxt.hook('components:extend', (components) => {
//       // Entferne die originale Komponente
//       const index = components.findIndex((c) => c.pascalName === 'BlocksFooter')
//       if (index !== -1) {
//         components.splice(index, 1)
//       }

//       // Füge die neue Komponente hinzu
//       components.push({
//         pascalName: 'BlocksFooter',
//         filePath: resolver.resolve('./Footer.vue'),
//         global: true,
//         priority: 100
//       })
//     })
//   }
// })