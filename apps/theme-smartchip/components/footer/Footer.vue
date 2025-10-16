<template>
  <footer class="bg-neutral-900 text-white" data-theme="smartchip">
    <!-- Top: 4-Spalten Shop-Navigation + App-Store -->
    <div class="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
      <nav aria-labelledby="footer-shop" class="space-y-3">
        <h3 id="footer-shop" class="text-sm font-semibold tracking-wide text-white/90">Shop</h3>
        <ul class="space-y-2 text-sm text-white/70">
          <li><NuxtLink to="/produkte" class="hover:text-white">Alle Produkte</NuxtLink></li>
          <li><NuxtLink to="/neu" class="hover:text-white">Neuheiten</NuxtLink></li>
          <li><NuxtLink to="/angebote" class="hover:text-white">Angebote</NuxtLink></li>
          <li><NuxtLink to="/zubehoer" class="hover:text-white">Zubehör</NuxtLink></li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-service" class="space-y-3">
        <h3 id="footer-service" class="text-sm font-semibold tracking-wide text-white/90">Service</h3>
        <ul class="space-y-2 text-sm text-white/70">
          <li><NuxtLink to="/versand" class="hover:text-white">Versand & Lieferung</NuxtLink></li>
          <li><NuxtLink to="/retoure" class="hover:text-white">Retoure & Erstattung</NuxtLink></li>
          <li><NuxtLink to="/garantie" class="hover:text-white">Garantie</NuxtLink></li>
          <li><NuxtLink to="/hilfe" class="hover:text-white">Hilfe & Kontakt</NuxtLink></li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-info" class="space-y-3">
        <h3 id="footer-info" class="text-sm font-semibold tracking-wide text-white/90">Informationen</h3>
        <ul class="space-y-2 text-sm text-white/70">
          <li><NuxtLink to="/ueber-uns" class="hover:text-white">Über uns</NuxtLink></li>
          <li><NuxtLink to="/karriere" class="hover:text-white">Karriere</NuxtLink></li>
          <li><NuxtLink to="/newsletter" class="hover:text-white">Newsletter</NuxtLink></li>
          <li><NuxtLink to="/fachhaendler" class="hover:text-white">Fachhändler</NuxtLink></li>
        </ul>
      </nav>

      <section aria-labelledby="footer-apps" class="space-y-3">
        <h3 id="footer-apps" class="text-sm font-semibold tracking-wide text-white/90">App herunterladen</h3>
        <div class="flex flex-col sm:flex-row gap-3">
          <a v-if="iosUrl" :href="iosUrl" target="_blank" rel="noopener" class="inline-block">
            <img src="/badges/app-store.svg" alt="App Store" class="h-10 w-auto"/>
          </a>
          <a v-if="androidUrl" :href="androidUrl" target="_blank" rel="noopener" class="inline-block">
            <img src="/badges/google-play.svg" alt="Google Play" class="h-10 w-auto"/>
          </a>
        </div>
      </section>
    </div>

    <div class="border-t border-white/10"></div>

    <div class="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center gap-3 md:gap-6">
      <p class="text-xs text-white/60">&copy; {{ storeName }} {{ year }}</p>
      <ul class="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/60">
        <li><NuxtLink to="/impressum" class="hover:text-white">Impressum</NuxtLink></li>
        <li><NuxtLink to="/datenschutz" class="hover:text-white">Datenschutz</NuxtLink></li>
        <li><NuxtLink to="/agb" class="hover:text-white">AGB</NuxtLink></li>
        <li><NuxtLink to="/widerruf" class="hover:text-white">Widerruf</NuxtLink></li>
      </ul>
      <div class="ms-auto flex items-center gap-2 text-xs text-white/50">
        <span class="inline-block h-1 w-1 rounded-full bg-white/30"></span>
        <span>Made with WTF</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const cfg = useRuntimeConfig().public as {
  storename?: string
  iosStoreUrl?: string
  androidStoreUrl?: string
}
const storeName  = cfg.storename || 'SmartChip'
const iosUrl     = cfg.iosStoreUrl || ''
const androidUrl = cfg.androidStoreUrl || ''
const year       = new Date().getFullYear()
</script>

<style scoped>
/* optional: a:hover { text-decoration: underline; } */
</style>