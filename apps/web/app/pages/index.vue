<script setup lang="ts">
// Relativer Import vom Web-Page-Verzeichnis ins Theme
import ScCardShelfScroller from '../../../theme-smartchip/components/shelves/ScCardShelfScroller.vue'

definePageMeta({ pageType: 'static' })

const supportShelf = [
  {
    eyebrow: 'APPLE SPECIALIST',
    title: 'Hol dir Beratung durch unsere Specialists. Online oder im Apple Store.',
    href: '/de/shop/browse/overlay/store/specialist',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-help-202506?wid=960&hei=1000&fmt=p-jpg&qlt=95'
  },
  {
    eyebrow: 'TODAY AT APPLE',
    title: 'Apple Intelligence entdecken',
    desc: "Probier's doch einfach mal bei einer kostenlosen Session im Apple Store aus.",
    href: 'https://www.apple.com/de/today/event/spotlight-apple-intelligence?cid=rem-de-taa-store-consumer-spotlight-ai',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-202505?wid=960&hei=1000&fmt=p-jpg&qlt=95',
    external: true
  },
  {
    eyebrow: 'TODAY AT APPLE',
    title: 'Nimm an kostenlosen Sessions in deinem Apple Store teil.',
    desc: 'Erfahre, wie du mit deinen Apple Geräten noch mehr machen kannst.',
    href: 'https://www.apple.com/de/today/calendar?sessions=skills&topics=daily-sessions&cid=rem-de-taa-store-fundm-cal',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95',
    external: true
  },
  {
    eyebrow: 'PERSÖNLICHES SETUP',
    title: 'Richte zusammen mit unseren Specialists dein neues Gerät ein.',
    desc: 'Erhalte persönliche Beratung zur Datenübertragung, zu den neuesten Features und mehr.',
    href: '/de/shop/browse/overlay/store/personal',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-personal-setup-202408_GEO_DE?wid=960&hei=1000&fmt=p-jpg&qlt=95'
  },
  {
    title: 'Erhalte Service und Support durch Expert:innen an der Genius Bar.',
    href: '/de/shop/browse/overlay/store/genius',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95'
  }
]
</script>

<template>
  <div>
    <section class="mx-auto max-w-7xl px-6 py-12">
      <h1 class="text-3xl sm:text-4xl font-semibold text-neutral-900">Willkommen bei SmartChip</h1>
      <p class="mt-2 text-neutral-600">Erste statische Elemente, damit wir Look & Feel testen.</p>
    </section>

    <div class="bg-sc-primary text-white p-4 rounded-lg text-center">
  Preset-Farbe sichtbar = ✅ Theme-Config wird geladen
</div>

    <ScCardShelfScroller
      title="Wir helfen gerne."
      subtitle="Wann und wie du möchtest."
      :items="supportShelf"
      card-width="50"
    />

    <section class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="p-6 rounded-2xl ring-1 ring-neutral-200 bg-white">
          <h2 class="text-xl font-medium">Nächste Section</h2>
          <p class="mt-1 text-neutral-600">Platzhalter</p>
        </div>
        <div class="p-6 rounded-2xl ring-1 ring-neutral-200 bg-white">
          <h2 class="text-xl font-medium">Platzhalter</h2>
          <p class="mt-1 text-neutral-600">…</p>
        </div>
      </div>
    </section>
  </div>
</template>