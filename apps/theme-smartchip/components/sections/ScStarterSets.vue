<template>
  <section id="starter-sets" role="region" aria-labelledby="starter-sets-label" class="pt-16 pb-32">
    <div class="max-w-screen-2xl mx-auto px-6">
      <header class="text-left mb-10">
        <h2 id="starter-sets-label" class="text-4xl md:text-7xl font-bold text-gray-900">Starter-Sets für Studios</h2>
        <p class="mt-2 text-xl text-gray-600">Wähle das passende Paket – alle inkl. Online-Schulung.</p>
      </header>

      <div class="grid gap-6 md:grid-cols-3">
        <!-- SC-Set 10 -->
        <article class="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col" aria-label="Set 10">
          <div class="flex-1 flex flex-col px-6 pb-10">
            <div class="px-5 pb-0">
              <h3 class="text-center text-2xl font-bold mt-6">SC-Set 10</h3>
            </div>

            <div class="p-10 pb-0">
              <!-- Bild nur im Client, und dort je nach Login verlinkt -->
              <ClientOnly>
                <div class="relative pb-[100%]">
                  <component
                    :is="isAuthorized ? 'a' : 'div'"
                    :href="isAuthorized ? ctaHref('/sc-set-10_184_1143') : undefined"
                    class="block relative pb-[100%]"
                  >
                    <img
                      src="https://cdn02.plentymarkets.com/ehe3e071agu5/frontend/sc-content/sc-set-10.webp"
                      alt="Set mit 10 Smart Chips"
                      class="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    >
                  </component>
                </div>
              </ClientOnly>
            </div>

            <hr class="mt-6 mb-4 border-gray-200">

            <ul class="space-y-2 text-base text-gray-700">
              <li class="text-center">
                <strong>10 x Smart Chips</strong>
              </li>
              <li class="text-center">
                Starter-Set mit: <br><strong>1 x First Bonder</strong> <br><strong>1 x Builder L</strong> <br><strong>1 x Builder H</strong> <br><strong>1 x Finish</strong> <br><strong>1 x SC Pyramide</strong>
                <br><strong>5 x Feilensets</strong>
              </li>
              <li class="text-center">
                Inklusive <strong>Online-Schulung</strong>
              </li>
            </ul>

            <!-- CTA -->
            <ClientOnly>
              <div class="mt-6 flex justify-center">
                <a
                  :href="ctaHref('/sc-set-10_184_1143')"
                  class="inline-flex items-center justify-center px-5 py-2 font-semibold rounded-md bg-gray-900 text-white hover:bg-amber-400 transition"
                  :aria-label="ctaAria('SC-Set 10')"
                >
                  {{ ctaLabel }}
                </a>
              </div>
            </ClientOnly>
          </div>
        </article>

        <!-- SC-Set 50 -->
        <article class="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col" aria-label="Set 50">
          <div class="flex-1 flex flex-col px-6 pb-10">
            <div class="px-5 pb-0">
              <h3 class="text-center text-2xl font-bold mt-6">SC-Set 50</h3>
            </div>

            <div class="p-10 pb-0">
              <ClientOnly>
                <div class="relative pb-[100%]">
                  <component
                    :is="isAuthorized ? 'a' : 'div'"
                    :href="isAuthorized ? ctaHref('/sc-set-50_185_1144') : undefined"
                    class="block relative pb-[100%]"
                  >
                    <img
                      src="https://cdn02.plentymarkets.com/ehe3e071agu5/frontend/sc-content/sc-set-50.webp"
                      alt="Set mit 50 Smart Chips"
                      class="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    >
                  </component>
                </div>
              </ClientOnly>
            </div>

            <hr class="mt-6 mb-4 border-gray-200">

            <ul class="space-y-2 text-base text-gray-700">
              <li class="text-center">
                <strong>50 x Smart Chips</strong>
              </li>
              <li class="text-center">
                Starter-Set mit: <br><strong>1 x First Bonder</strong> <br><strong>1 x Builder L</strong> <br><strong>1 x Builder H</strong> <br><strong>1 x Finish</strong> <br><strong>1 x SC Pyramide</strong>
                <br><strong>25 x Feilensets</strong>
              </li>
              <li class="text-center">
                Inklusive <strong>Online-Schulung</strong>
              </li>
            </ul>

            <!-- CTA -->
            <ClientOnly>
              <div class="mt-6 flex justify-center">
                <a
                  :href="ctaHref('/sc-set-50_185_1144')"
                  class="inline-flex items-center justify-center px-5 py-2 font-semibold rounded-md bg-gray-900 text-white hover:bg-amber-400 transition"
                  :aria-label="ctaAria('SC-Set 50')"
                >
                  {{ ctaLabel }}
                </a>
              </div>
            </ClientOnly>
          </div>
        </article>

        <!-- SC-Set 200 -->
        <article class="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col" aria-label="Set 200">
          <div class="flex-1 flex flex-col px-6 pb-10">
            <div class="px-5 pb-0">
              <h3 class="text-center text-2xl font-bold mt-6">SC-Set 200</h3>
            </div>

            <div class="p-10 pb-0">
              <ClientOnly>
                <div class="relative pb-[100%]">
                  <component
                    :is="isAuthorized ? 'a' : 'div'"
                    :href="isAuthorized ? ctaHref('/sc-set-200_186_1145') : undefined"
                    class="block relative pb-[100%]"
                  >
                    <img
                      src="https://cdn02.plentymarkets.com/ehe3e071agu5/frontend/sc-content/sc-set-200.webp"
                      alt="Set mit 200 Smart Chips"
                      class="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    >
                  </component>
                </div>
              </ClientOnly>
            </div>

            <hr class="mt-6 mb-4 border-gray-200">

            <ul class="space-y-2 text-base text-gray-700">
              <li class="text-center">
                <strong>200 x Smart Chips</strong>
              </li>
              <li class="text-center">
                Starter-Set mit: <br><strong>1 x First Bonder</strong> <br><strong>1 x Builder L</strong> <br><strong>1 x Builder H</strong> <br><strong>1 x Finish</strong> <br><strong>1 x SC Pyramide</strong>
                <br><strong>100 x Feilensets</strong>
              </li>
              <li class="text-center">
                Inklusive <strong>Online-Schulung</strong>
              </li>
            </ul>

            <!-- CTA -->
            <ClientOnly>
              <div class="mt-6 flex justify-center">
                <a
                  :href="ctaHref('/sc-set-200_186_1145')"
                  class="inline-flex items-center justify-center px-5 py-2 font-semibold rounded-md bg-gray-900 text-white hover:bg-amber-400 transition"
                  :aria-label="ctaAria('SC-Set 200')"
                >
                  {{ ctaLabel }}
                </a>
              </div>
            </ClientOnly>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Login-Status aus deinem vorhandenen Composable
const { isAuthorized } = useCustomer()

/**
 * CTA-Label abhängig vom Login
 */
const ctaLabel = computed(() =>
  isAuthorized.value ? 'Zum Set' : 'Jetzt registrieren'
)

/**
 * CTA-Href abhängig vom Login
 * - Public: /register
 * - Eingeloggt: übergebener Pfad unverändert
 */
const ctaHref = (path: string) => {
  if (!isAuthorized.value) return '/register'
  return path
}

/**
 * A11y: aria-label dynamisch
 */
const ctaAria = (setName: string) =>
  isAuthorized.value ? `Zum ${setName} wechseln` : 'Jetzt registrieren'
</script>

<style scoped>
/* alles Tailwind */
</style>