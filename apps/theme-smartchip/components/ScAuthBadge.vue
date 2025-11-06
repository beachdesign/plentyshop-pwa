<template>
  <div
    class="fixed z-[9999] bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold
           text-white"
    :class="badgeClass"
    title="Login-/Kundenklasse-Test"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
const { user, isAuthorized, getSession } = useCustomer()

onMounted(() => {
  if (!user.value) getSession()
})

const cfg = useRuntimeConfig()
const B2B_IDS: number[] = String(cfg.public?.B2B_CLASS_IDS ?? '2')
  .split(',')
  .map(s => Number(s.trim()))
  .filter(n => !Number.isNaN(n))

const classIds = computed<number[]>(() => {
  const u: any = user.value
  if (!u) return []
  const candidates = [u?.classIds, u?.customer?.classIds, u?.contact?.classIds, u?.user?.customer?.classIds]
  for (const c of candidates) if (Array.isArray(c)) return c.filter((n: any) => typeof n === 'number')
  if (typeof u?.customerClassId === 'number') return [u.customerClassId]
  return []
})

const isB2B = computed(() => classIds.value.some(id => B2B_IDS.includes(id)))

const variant = computed<'public'|'b2b'|'b2c'>(() => {
  if (!isAuthorized.value) return 'public'
  return isB2B.value ? 'b2b' : 'b2c'
})

const label = computed(() => (
  variant.value === 'public' ? 'PUBLIC' :
  variant.value === 'b2b'    ? 'B2B'    : 'B2C'
))

const badgeClass = computed(() => (
  variant.value === 'public' ? 'bg-gray-600' :
  variant.value === 'b2b'    ? 'bg-emerald-600' : 'bg-amber-600'
))
</script>