<template>
  <section :id="id" class="relative pt-14 pb-20" :aria-labelledby="`${id}-title`">
    <div class="mx-auto max-w-screen-2xl px-6 relative">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
        <div :class="videoOn === 'right' ? 'order-1 md:order-2' : 'order-1'">
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <div class="relative overflow-hidden shadow-lg" :class="ratioClass">
              <video class="absolute inset-0 h-full w-full object-cover" :poster="poster || undefined" autoplay muted playsinline loop>
                <source :src="videoSrc" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div :class="videoOn === 'right' ? 'order-2 md:order-1' : 'order-2'">
          <h1 :id="`${id}-title`" class="text-4xl md:text-7xl font-bold leading-[1.1] text-gray-900">
            {{ title }}
          </h1>
          <p v-if="text" class="mt-4 text-base md:text-lg text-gray-600">{{ text }}</p>
          <div v-if="ctaHref && ctaLabel" class="mt-8">
            <a :href="ctaHref" class="inline-flex items-center justify-center px-5 py-3 font-semibold rounded-md bg-gray-900 text-white hover:bg-amber-400 transition">
              {{ ctaLabel }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
  title: string
  text?: string
  ctaLabel?: string
  ctaHref?: string
  videoSrc: string
  poster?: string
  videoOn?: 'left' | 'right'
  ratio?: '16/9' | '4/3' | '1/1' | '3/2'
}>(), {
  id: 'section-hero-video',
  text: '',
  videoOn: 'right',
  ratio: '16/9',
})

const ratioClass = {
  '16/9': 'pt-[56.25%]',
  '4/3' : 'pt-[75%]',
  '1/1' : 'pt-[100%]',
  '3/2' : 'pt-[66.6667%]',
}[props.ratio || '16/9']
</script>