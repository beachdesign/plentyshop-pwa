<template>
  <div class="fixed bottom-4 right-4 z-[9999] max-w-[90vw]">
    <div class="px-3 py-2 rounded-md shadow bg-white/95 text-xs text-gray-800">
      <div class="font-semibold mb-1">PriceMode-Check</div>
      <div><b>priceMode:</b> {{ priceMode || '—' }}</div>
      <div><b>isNet:</b> {{ String(isNet) }}</div>
      <div class="mt-1"><b>Quelle:</b> {{ source }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

let cartRef: any = null
let source = 'unbekannt'

// 1) Versuch über useCart()
try {
  // @ts-ignore
  if (typeof useCart === 'function') {
    // @ts-ignore
    const { cart } = useCart()
    if (cart?.value) {
      cartRef = cart
      source = 'useCart().cart.value'
    }
  }
} catch (_) { /* noop */ }

// 2) Fallback: Pinia-Store durchsuchen
if (!cartRef) {
  const pinia: any = useNuxtApp().$pinia
  const state = pinia?.state?.value || {}
  const candidates = ['cart', 'basket', 'checkout', 'session', 'order']
  for (const key of candidates) {
    if (state[key]) {
      cartRef = { value: state[key] }
      source = `pinia.state.value.${key}`
      break
    }
  }
}

// 3) Werte ableiten
const priceMode = computed<string | undefined>(() => {
  const c = cartRef?.value
  if (!c) return undefined
  return c.priceMode || (c.isNet === true ? 'net' : (c.isNet === false ? 'gross' : undefined))
})

const isNet = computed<boolean>(() => {
  const c = cartRef?.value
  if (!c) return false
  if (typeof c.isNet === 'boolean') return c.isNet
  return String(c.priceMode || '').toLowerCase() === 'net'
})

</script>