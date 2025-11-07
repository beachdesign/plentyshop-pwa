<template>
  <section v-if="isAuthorized" id="starter-sets" role="region" aria-labelledby="starter-sets-label" class="pt-16 pb-32">
    <div class="max-w-screen-2xl mx-auto px-6">
      <header class="text-left mb-10">
        <h2 id="starter-sets-label" class="text-4xl md:text-7xl font-bold text-gray-900">Starter-Sets für Studios</h2>
        <p class="mt-2 text-xl text-gray-600">Wähle das passende Paket – alle inkl. Online-Schulung.</p>
      </header>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col"
          aria-label="Set 10">
          <div class="flex-1 flex flex-col px-6 pb-10">
            <div class="px-5 pb-0">
              <h3 class="text-center text-2xl font-bold mt-6">
                Set 10
              </h3>
            </div>
            <div class="p-10 pb-0">
              <div class="relative pb-[100%]">
                <img src="https://nailconnect.smart-chip.com/images/sets/10er-set-h.webp" alt="Set mit 10 Smart Chips"
                  class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async">
              </div>
            </div>
            <hr class="mt-6 mb-4 border-gray-200">
            <ul class="space-y-2 text-base text-gray-700">
              <li class="text-center">
                <strong>10 x Smart Chips</strong>
              </li>
              <li class="text-center">
                Starter-Set mit: <br><strong>1 x First Bonder</strong> <br><strong>1 x Builder L</strong> <br><strong>1
                  x Builder H</strong> <br><strong>1 x Finish</strong> <br><strong>1 x SC Pyramide</strong>
                <br><strong>Feilensets</strong>
              </li>
              <li class="text-center">
                Inklusive <strong>Online-Schulung</strong>
              </li>
            </ul>
          </div>
        </article>
        <article class="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col"
          aria-label="Set 50">
          <div class="flex-1 flex flex-col px-6 pb-10">
            <div class="px-5 pb-0">
              <h3 class="text-center text-2xl font-bold mt-6">
                Set 50
              </h3>
            </div>
            <div class="p-10 pb-0">
              <div class="relative pb-[100%]">
                <img src="https://nailconnect.smart-chip.com/images/sets/50er-set-h.webp" alt="Set mit 50 Smart Chips"
                  class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async">
              </div>
            </div>
            <hr class="mt-6 mb-4 border-gray-200">
            <ul class="space-y-2 text-base text-gray-700">
              <li class="text-center">
                <strong>50 x Smart Chips</strong>
              </li>
              <li class="text-center">
                Starter-Set mit: <br><strong>1 x First Bonder</strong> <br><strong>1 x Builder L</strong> <br><strong>1
                  x Builder H</strong> <br><strong>1 x Finish</strong> <br><strong>1 x SC Pyramide</strong>
                <br><strong>Feilensets</strong>
              </li>
              <li class="text-center">
                Inklusive <strong>Online-Schulung</strong>
              </li>
            </ul>
          </div>
        </article>
        <article class="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col"
          aria-label="Set 200">
          <div class="flex-1 flex flex-col px-6 pb-10">
            <div class="px-5 pb-0">
              <h3 class="text-center text-2xl font-bold mt-6">
                Set 200
              </h3>
            </div>
            <div class="p-10 pb-0">
              <div class="relative pb-[100%]">
                <img src="https://nailconnect.smart-chip.com/images/sets/200er-set-l.webp" alt="Set mit 200 Smart Chips"
                  class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async">
              </div>
            </div>
            <hr class="mt-6 mb-4 border-gray-200">
            <ul class="space-y-2 text-base text-gray-700">
              <li class="text-center">
                <strong>200 x Smart Chips</strong>
              </li>
              <li class="text-center">
                Starter-Set mit: <br><strong>1 x First Bonder</strong> <br><strong>1 x Builder L</strong> <br><strong>1
                  x Builder H</strong> <br><strong>1 x Finish</strong> <br><strong>1 x SC Pyramide</strong>
                <br><strong>Feilensets</strong>
              </li>
              <li class="text-center">
                Inklusive <strong>Online-Schulung</strong>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
  <section v-else class="py-32">
    <div class="max-w-screen-2xl mx-auto px-6 text-center">
      <p class="text-xl text-gray-600">Bitte melde dich an, um unsere Starter-Sets für Studios zu sehen.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isAuthorized } = useCustomer();
</script>

<style scoped>
/* nichts – alles Tailwind */
</style>