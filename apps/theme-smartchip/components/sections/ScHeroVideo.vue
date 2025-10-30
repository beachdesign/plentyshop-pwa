<template>
  <!-- EINZIGER Wrapper -->
  <section :id="id" class="relative pt-14 pb-20" :aria-labelledby="`${id}-title`">
    <!-- Container -->
    <div class="mx-auto max-w-7xl px-6 relative">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
        <!-- VIDEO -->
        <div
          :class="{
            'order-1 md:order-2': videoOn === 'right',
            'order-1': videoOn !== 'right',
          }"
        >
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <div class="relative pb-[100%] rounded-xl overflow-hidden shadow-lg">
              <video
                class="absolute inset-0 h-full w-full object-cover"
                :poster="videoSrc || undefined"
                autoplay
                muted
                playsinline
                loop>
                <source :src="videoSrc" type="video/mp4" />
              </video>
              <img src="https://nailconnect.smart-chip.com/images/landing/woman-getting-treatment_Copper.webp" />
            </div>
          </div>
        </div>

        <!-- COPY -->
        <div
          :class="{
            'order-2 md:order-1': videoOn === 'right',
            'order-2': videoOn !== 'right',
          }"
        >
          <h1 :id="`${id}-title`"
              class="text-4xl md:text-7xl font-bold leading-[1.1] text-gray-900 opacity-0 translate-y-3 opacity-100 translate-y-0">
            {{ title }}
          </h1>
          <p v-if="text" class="mt-4 text-base md:text-lg text-gray-600">
            {{ text }}
          </p>
          <div class="mt-8">
            <a :href="ctaHref" class="inline-flex items-center justify-center px-5 py-3 font-semibold rounded-md
                      bg-gray-900 text-white hover:bg-amber-400 focus:outline-none focus:ring-2
                      focus:ring-offset-2 focus:ring-indigo-600 transition">
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
    contained?: boolean
    videoOn?: 'left' | 'right'
    ratio?: '16/9' | '4/3' | '1/1' | '3/2'
    debug?: boolean            // 👈 NEU: Debug-Overlay/Farben
  }>(), {
    id: 'section-hero-video',
    text: '',
    ctaLabel: 'Jetzt registrieren',
    ctaHref: '#register',
    poster: '',
    contained: true,
    videoOn: 'right',
    ratio: '16/9',
    debug: true,               // zum Start EIN – danach kannst du auf false setzen
  })

  const ratioClass = {
    '16/9': 'pt-[56.25%]',
    '4/3' : 'pt-[75%]',
    '1/1' : 'pt-[100%]',
    '3/2' : 'pt-[66.6667%]',
  }[props.ratio || '16/9']
</script>

<style scoped>
/* nichts – alles Tailwind */
</style>