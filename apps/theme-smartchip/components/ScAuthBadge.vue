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

// Optional: .env -> NUXT_PUBLIC_B2B_CLASS_IDS=2,7
const cfg = useRuntimeConfig()
const rawIds = String(cfg.public?.B2B_CLASS_IDS ?? '2')
const B2B_IDS_NUM = rawIds.split(',').map(s => Number(s.trim())).filter(n => !Number.isNaN(n))
const B2B_IDS_STR = rawIds.split(',').map(s => s.trim())

onMounted(() => {
  if (!user.value) getSession()
})

/** classIds aus typischen Shapes extrahieren (nur user-basiert) */
const classIds = computed<(number|string)[]>(() => {
  const u: any = user.value
  if (!u) return []

  const candidates = [
    u?.classIds,
    u?.customer?.classIds,
    u?.contact?.classIds,
    u?.user?.customer?.classIds,
    typeof u?.customerClassId === 'number' ? [u.customerClassId] : undefined,
    typeof u?.customerClassId === 'string' ? [u.customerClassId] : undefined,
  ].filter(Boolean)

  for (const c of candidates) {
    if (Array.isArray(c)) {
      return c.map(v => (typeof v === 'number' ? v : String(v)))
    }
  }
  return []
})

/** Zusatz-Heuristik: Firmenname vorhanden = eher B2B */
const hasCompany = computed(() => {
  const u: any = user.value
  return Boolean(u?.contact?.companyName || u?.companyName || u?.customer?.companyName)
})

/** B2B-Entscheidung */
const isB2B = computed(() => {
  const idsStr = classIds.value.map(v => String(v))
  const matchIds =
    idsStr.some(v => B2B_IDS_STR.includes(v)) ||
    classIds.value.some(v => typeof v === 'number' && B2B_IDS_NUM.includes(v as number))

  return matchIds || hasCompany.value
})

/** Variante + Anzeige */
const variant = computed<'public'|'b2b'|'b2c'>(() => {
  if (!isAuthorized.value) return 'public'
  return isB2B.value ? 'b2b' : 'b2c'
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