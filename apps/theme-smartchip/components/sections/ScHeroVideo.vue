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
  background?: string
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
  background: 'bg-white',
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

<template>
  <!-- EINZIGER Wrapper -->
  <section :id="id" class="relative pt-14 pb-20" :class="background" :aria-labelledby="`${id}-title`">
    <!-- Container -->
    <div :class="[contained ? 'mx-auto max-w-7xl px-6' : 'w-full px-6', 'relative']"
         :style="debug ? 'outline:2px dashed #ff00cc; outline-offset:6px;' : ''">

      <!-- Grid 12 -->
      <div class="grid md:grid-cols-12 gap-8 md:gap-20 items-center"
           :class="debug ? 'bg-[rgba(0,255,255,.08)]' : ''">
        <!-- VIDEO -->
        <div
          :class="[
            videoOn === 'right' ? 'order-1 md:order-2' : 'order-1',
            'md:col-span-7',
            debug ? 'bg-[rgba(0,128,255,.12)] p-1 md:p-2 rounded' : ''
          ]"
        >
          <div class="relative rounded-xl overflow-hidden shadow-lg"
               :class="debug ? 'ring-2 ring-blue-400/50' : ''">
            <div :class="['relative', ratioClass]">
              <video
                class="absolute inset-0 h-full w-full object-cover"
                :poster="poster || undefined"
                :src="videoSrc"
                autoplay
                muted
                playsinline
                loop
              />
            </div>
          </div>

          <!-- Label -->
          <div v-if="debug" class="mt-2 text-xs font-mono text-blue-800">
            VIDEO col-span-7 • order: {{ videoOn === 'right' ? 'md:2' : 'md:1' }} • ratio: {{ ratio }}
          </div>
        </div>

        <!-- COPY -->
        <div
          :class="[
            videoOn === 'right' ? 'order-2 md:order-1' : 'order-2',
            'md:col-span-5',
            debug ? 'bg-[rgba(255,128,0,.12)] p-1 md:p-2 rounded' : ''
          ]"
        >
          <h1 :id="`${id}-title`"
              class="text-4xl md:text-7xl font-bold leading-[1.1] text-gray-900">
            {{ title }}
          </h1>
          <p v-if="text" class="mt-4 text-base md:text-lg text-gray-600">
            {{ text }}
          </p>
          <div class="mt-8">
            <a :href="ctaHref"
               class="inline-flex items-center justify-center px-5 py-3 font-semibold rounded-md
                      bg-gray-900 text-white hover:bg-amber-400 focus:outline-none focus:ring-2
                      focus:ring-offset-2 focus:ring-indigo-600 transition">
              {{ ctaLabel }}
            </a>
          </div>

          <!-- Label -->
          <div v-if="debug" class="mt-2 text-xs font-mono text-orange-800">
            COPY col-span-5 • order: {{ videoOn === 'right' ? 'md:1' : 'md:2' }}
          </div>
        </div>
      </div>

      <!-- Debug-Info: Containerbreite etc. -->
      <div v-if="debug" class="mt-3 text-xs font-mono text-neutral-700">
        container: {{ contained ? 'max-w-7xl px-6' : 'full width' }} • bg: {{ background }} • videoOn: {{ videoOn }}
      </div>
    </div>
  </section>
</template>

<style scoped>
/* nichts – alles Tailwind */
</style>