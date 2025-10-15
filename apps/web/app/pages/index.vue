<script setup lang="ts">
// Relativer Import vom Web-Page-Verzeichnis ins Theme
import ScCardShelfScroller from '../../../theme-smartchip/components/shelves/ScCardShelfScroller.vue'

definePageMeta({ pageType: 'static' })

const supportShelf = [
  {
    eyebrow: 'APPLE SPECIALIST',
    title: 'Hol dir Beratung durch unsere Specialists. Online oder im Apple Store.',
    href: '/nagelzubehoer',
    image: '/images/shelves/first-bonder-sm-01.png',
  },
  {
    eyebrow: 'TODAY AT APPLE',
    title: 'Apple Intelligence entdecken',
    desc: "Probier's doch einfach mal bei einer kostenlosen Session im Apple Store aus.",
    href: '/nagelzubehoer',
    image: '/images/shelves/first-bonder-sm-02.png',
    external: true
  },
  {
    eyebrow: 'TODAY AT APPLE',
    title: 'Nimm an kostenlosen Sessions in deinem Apple Store teil.',
    desc: 'Erfahre, wie du mit deinen Apple Geräten noch mehr machen kannst.',
    href: '/nagelzubehoer',
    image: '/images/shelves/first-bonder-sm-03.png',
    external: true
  },
  {
    eyebrow: 'PERSÖNLICHES SETUP',
    title: 'Richte zusammen mit unseren Specialists dein neues Gerät ein.',
    desc: 'Erhalte persönliche Beratung zur Datenübertragung, zu den neuesten Features und mehr.',
    href: '/nagelzubehoer',
    image: '/images/shelves/first-bonder-sm-04.png',
  },
  {
    title: 'Erhalte Service und Support durch Expert:innen an der Genius Bar.',
    href: '/nagelzubehoer',
    image: '/images/shelves/first-bonder-sm-05.png',
  }
]
</script>

<template>
  <div>
    <section class="mx-auto max-w-7xl px-6 py-12">
      <h1 class="text-3xl sm:text-4xl font-semibold text-neutral-900">Willkommen bei SmartChip</h1>
      <p class="mt-2 text-neutral-600">Erste statische Elemente, damit wir Look & Feel testen.</p>
    </section>

    <ScCardShelfScroller
  title="Wir helfen gerne YXC"
  :items="supportShelf"
  :offsetStart="140"
  debug
/>

<ScCardShelfScroller
  title="Wir helfen gerne!!!"
  :items="supportShelf"
  offsetStart="auto"
  debug
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