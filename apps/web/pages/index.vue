<script setup lang="ts">
import Hero from '~/components/Hero.vue'

// Seitenspezifische Metadaten
definePageMeta({
  pageType: 'static',
  isBlockified: true,
})

const { t } = useI18n()
const { setPageMeta } = usePageMeta()
const icon = 'home'
setPageMeta(t('homepage.title'), icon)

const { getRobots, setRobotForStaticPage } = useRobots()
getRobots()
setRobotForStaticPage('Homepage')

const { setBlocksListContext } = useBlockManager()
setBlocksListContext('content')
</script>

<template>
  <div>
    <!-- Hero-Bereich -->
    <Hero />

    <!-- Statischer Content -->
    <div class="mx-auto max-w-7xl px-6 py-12">
      <h1 class="text-3xl font-bold mb-4">Willkommen in meinem Shop</h1>
      <p class="text-lg text-gray-600 mb-8">
        Das ist eine statische Startseite – hier kommt später dein richtiger Content.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-6 border rounded-lg shadow bg-white">
          <h2 class="font-semibold mb-2">Box 1</h2>
          <p>Kurztext für Box 1</p>
        </div>
        <div class="p-6 border rounded-lg shadow bg-white">
          <h2 class="font-semibold mb-2">Box 2</h2>
          <p>Kurztext für Box 2</p>
        </div>
        <div class="p-6 border rounded-lg shadow bg-white">
          <h2 class="font-semibold mb-2">Box 3</h2>
          <p>Kurztext für Box 3</p>
        </div>
      </div>
    </div>
  </div>
</template>