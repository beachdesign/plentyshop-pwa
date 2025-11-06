<template>
  <div
    class="fixed z-[9999] bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
    :class="badgeClass"
    title="Login-/Kundenklasse-Test"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

const { user, isAuthorized, getSession } = useCustomer()
// useCart existiert in Plenty-PWA – wir nutzen nur priceMode/isNet
// @ts-ignore
const { cart } = useCart()

onMounted(() => { if (!user.value) getSession() })

const isNet = computed(() => {
  const c:any = cart?.value
  if (!c) return false
  if (String(c.priceMode || '').toLowerCase() === 'net') return true
  if (c.isNet === true) return true
  return false
})

const variant = computed<'public'|'b2b'|'b2c'>(() => {
  if (!isAuthorized.value) return 'public'
  return isNet.value ? 'b2b' : 'b2c'
})

const label = computed(() =>
  variant.value === 'public' ? 'PUBLIC' :
  variant.value === 'b2b'    ? 'B2B'    : 'B2C'
)

const badgeClass = computed(() =>
  variant.value === 'public' ? 'bg-gray-600' :
  variant.value === 'b2b'    ? 'bg-emerald-600' : 'bg-amber-600'
)
</script>