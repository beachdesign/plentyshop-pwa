<template>
  <section
    class="relative pt-14 pb-20 bg-white"
    role="region"
    :aria-labelledby="sectionId + '-title'"
  >
    <div class="mx-auto max-w-7xl px-6 relative">
      <div ref="rootEl" class="grid md:grid-cols-12 gap-8 md:gap-20 items-center">
        <!-- Video rechts auf Desktop -->
        <div class="md:col-span-7 order-1 md:order-2">
          <div class="relative pb-[100%] rounded-xl overflow-hidden shadow-lg">
            <video
              class="absolute inset-0 h-full w-full object-cover"
              :poster="poster || undefined"
              :autoplay="true"
              playsinline
              loop
              muted
            >
              <source :src="videoSrc" type="video/mp4" />
              Dein Browser unterstützt kein HTML5 Video.
            </video>
          </div>
        </div>

        <!-- Copy links auf Desktop -->
        <div class="md:col-span-5 order-2 md:order-1">
          <h1
            :id="sectionId + '-title'"
            class="text-4xl md:text-7xl font-bold leading-[1.1] text-gray-900 transition-all duration-500"
            :class="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
          >
            {{ title }}
          </h1>

          <div class="mt-4 space-y-4 text-gray-600 text-base md:text-lg">
            <p
              class="transition-all duration-500 delay-100"
              :class="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
            >
              {{ text }}
            </p>
          </div>

          <div class="mt-8">
            <NuxtLink
              :to="ctaHref"
              class="inline-flex items-center justify-center px-5 py-3 font-semibold rounded-md bg-gray-900 text-white hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition"
              :class="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
            >
              {{ ctaLabel }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

/** Props – alles optional, hat Default-Werte wie in deinem Snippet */
const props = withDefaults(defineProps<{
  sectionId?: string
  title?: string
  text?: string
  ctaLabel?: string
  ctaHref?: string
  videoSrc: string
  poster?: string
}>(), {
  sectionId: 'section-hero-video',
  title: 'Möchtest du deinen Kunden den Smart Chip anbieten?',
  text:
    'Smart Chip ist ein digitales Portemonnaie auf deinem Fingernagel. Winzig klein. Unmöglich zu verlieren. Niemand kann es dir stehlen, und zu Hause vergessen kannst du es auch nicht. Es ist immer bei dir – egal wo.',
  ctaLabel: 'Jetzt registrieren',
  ctaHref: '#register',
  poster: '',
})

const shown = ref(false)
const rootEl = ref<HTMLElement | null>(null)
let io: IntersectionObserver | null = null

onMounted(() => {
  if (!rootEl.value) return
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          shown.value = true
          io?.disconnect()
          io = null
        }
      })
    },
    { rootMargin: '0px 0px -10% 0px' }
  )
  io.observe(rootEl.value)
})

onBeforeUnmount(() => {
  io?.disconnect()
  io = null
})

const sectionId = props.sectionId // alias für Template
const { title, text, ctaLabel, ctaHref, videoSrc, poster } = props
</script>