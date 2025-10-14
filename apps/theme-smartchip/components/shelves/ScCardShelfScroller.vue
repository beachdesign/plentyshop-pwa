<template>
  <section :aria-label="title" class="sc-cardshelf">
    <!-- Header -->
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-2xl sm:text-3xl font-semibold text-neutral-900">{{ title }}</h2>
      <p v-if="subtitle" class="mt-1 text-neutral-600">{{ subtitle }}</p>
    </div>

    <!-- Scroller -->
    <div class="relative mt-6">
      <div class="overflow-hidden">
        <div
          ref="scroller"
          class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6"
          role="list"
          :aria-label="title"
          @scroll="onScroll"
        >
          <!-- Item -->
          <div
            v-for="(it, i) in items"
            :key="i"
            class="shrink-0 snap-start"
            :class="cardWidthClass"
            role="listitem"
          >
            <article class="relative overflow-hidden rounded-[28px] ring-1 ring-neutral-200 bg-white">
              <!-- Full-card link -->
              <component
                :is="linkTag(it.href)"
                :to="nuxtLinkTo(it.href)"
                :href="anchorHref(it.href)"
                class="absolute inset-0 z-10"
                :aria-label="it.title"
                :target="it.external ? '_blank' : undefined"
                :rel="it.external ? 'noopener noreferrer' : undefined"
              />

              <!-- Bild -->
              <div class="relative">
                <img
                  :src="it.image"
                  :alt="it.alt || ''"
                  class="w-full h-[360px] md:h-[420px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <!-- kräftiger Verlauf für gute Lesbarkeit -->
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"></div>
              </div>

              <!-- Copy im Bildfuß -->
              <div class="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p v-if="it.eyebrow" class="text-[11px] tracking-[0.14em] text-white/80 uppercase">
                  {{ it.eyebrow }}
                </p>
                <h3 class="text-white text-lg sm:text-xl font-semibold leading-snug">
                  <span class="underline-offset-2 hover:underline">{{ it.title }}</span>
                </h3>
                <p v-if="it.desc" class="mt-1 text-white/80 text-sm sm:text-[15px] leading-snug">
                  {{ it.desc }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Paddle-Nav -->
      <button
        type="button"
        class="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-md ring-1 ring-black/10 p-2 disabled:opacity-40"
        :disabled="!canPrev"
        @click="scrollBy(-1)"
        aria-label="Zurück - {{ title }}"
      >
        <svg viewBox="0 0 36 36" class="h-6 w-6 fill-neutral-900" aria-hidden="true">
          <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.5 20.4571,26.5 C20.0711,26.5 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.5 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 Z"/>
        </svg>
      </button>
      <button
        type="button"
        class="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-md ring-1 ring-black/10 p-2 disabled:opacity-40"
        :disabled="!canNext"
        @click="scrollBy(1)"
        aria-label="Weiter - {{ title }}"
      >
        <svg viewBox="0 0 36 36" class="h-6 w-6 fill-neutral-900" aria-hidden="true">
          <path d="M23.5587,16.916 C24.1447,17.5 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.5 15.5427,26.5 C15.1607,26.5 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.528 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 Z"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

type ShelfItem = {
  title: string
  href: string
  image: string
  alt?: string
  eyebrow?: string
  desc?: string
  external?: boolean
}

const props = withDefaults(defineProps<{
  title: string
  subtitle?: string
  items: ShelfItem[]
  cardWidth?: '50' | '60' | '66'
}>(), {
  cardWidth: '50'
})

const scroller = ref<HTMLDivElement | null>(null)
const canPrev = ref(false)
const canNext = ref(true)

const cardWidthClass = computed(() => {
  // Apple „50“ ≈ 500px; mobil 85vw
  switch (props.cardWidth) {
    case '60': return 'w-[85vw] sm:w-[60vw] lg:w-[540px]'
    case '66': return 'w-[90vw] sm:w-[66vw] lg:w-[600px]'
    default:   return 'w-[85vw] sm:w-[55vw] lg:w-[500px]' // 50
  }
})

const updateArrows = () => {
  const el = scroller.value
  if (!el) return
  const { scrollLeft, clientWidth, scrollWidth } = el
  canPrev.value = scrollLeft > 0
  canNext.value = scrollLeft + clientWidth < scrollWidth - 4
}
const onScroll = () => updateArrows()
const scrollBy = (dir: number) => {
  const el = scroller.value
  if (!el) return
  el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: 'smooth' })
}

onMounted(() => {
  updateArrows()
  window.addEventListener('resize', updateArrows, { passive: true })
})

// interne/externe Links sauber behandeln
const isExternal = (url: string) => /^https?:\/\//i.test(url)
const linkTag = (url: string) => isExternal(url) ? 'a' : 'NuxtLink'
const nuxtLinkTo = (url: string) => isExternal(url) ? undefined : url
const anchorHref  = (url: string) => isExternal(url) ? url : undefined
</script>

<style scoped>
.sc-cardshelf {}
</style>