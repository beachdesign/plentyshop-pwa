<template>
  <div>
    <ClientOnly>
      <ScHeroVideoFancy v-bind="heroProps">
        <template #title>
          <span :class="heroTitleGradientClass">
            {{ heroTitleParts.highlight }}
          </span>
          {{ heroTitleParts.rest }}
        </template>
      </ScHeroVideoFancy>
    </ClientOnly>

    <ScWhatYouNeed />
    <ScStarterSets />

    <EditablePage :identifier="'index'" :type="'immutable'" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import type { Block } from '@plentymarkets/shop-api'
import homepageTemplateDataDe from '~/composables/useCategoryTemplate/homepageTemplateDataDe.json'
import homepageTemplateDataEn from '~/composables/useCategoryTemplate/homepageTemplateDataEn.json'

definePageMeta({
  pageType: 'static',
  isBlockified: true,
  type: 'immutable',
  identifier: 'index',
  middleware: ['newsletter-confirmation-client'],
});

const useLocaleSpecificHomepageTemplate = (locale: string) =>
  locale === 'de'
    ? (homepageTemplateDataDe as Block[])
    : (homepageTemplateDataEn as Block[])

const { $i18n } = useNuxtApp()
const { t } = useI18n()

const { setPageMeta } = usePageMeta()
const route = useRoute()
const { setDefaultTemplate } = useCategoryTemplate(
  route?.meta?.identifier as string,
  route.meta.type as string,
  useNuxtApp().$i18n.locale.value,
)

const icon = 'home'
setPageMeta(t('homepage.title'), icon)
setDefaultTemplate(useLocaleSpecificHomepageTemplate($i18n.locale.value))

const { getRobots, setRobotForStaticPage } = useRobots()
getRobots()
setRobotForStaticPage('Homepage')

const { setBlocksListContext } = useBlocksList();
setBlocksListContext('content');

const { user, isAuthorized, getSession } = useCustomer()

onMounted(() => {
  if (!user.value) getSession()
})

const heroProps = computed(() => {
  if (!isAuthorized.value) {
    return {
      title: 'Möchtest du deinen Kunden den Smart Chip anbieten?',
      text:
        'Melde dich im B2B-Onlineshop an, bestelle Smart Chips & Zubehör und nimm an der Online-Schulung teil.',
      ctaLabel: 'Jetzt registrieren',
      ctaHref: '/register',
      videoSrc:
        'https://cdn02.plentymarkets.com/ehe3e071agu5/frontend/sc-content/payment-pool-topdown.mp4',
      ratio: '1/1' as const,
      videoOn: 'right' as const,
      contained: true,
      debug: false,
    }
  }

  return {
    title: 'Wähle dein Starter-Set',
    text:
      'Drei Starter-Sets mit unterschiedlichen Vorteilen – alle inkl. Online-Schulung.',
    ctaLabel: 'Zu den Sets',
    ctaHref: '/sets',
    videoSrc:
      'https://cdn02.plentymarkets.com/ehe3e071agu5/frontend/sc-content/payment-pool-topdown.mp4',
    ratio: '1/1' as const,
    videoOn: 'right' as const,
    contained: true,
    debug: false,
  }
})

const heroTitleParts = computed(() => {
  if (!isAuthorized.value) {
    return {
      highlight: 'Möchtest du deinen Kunden',
      rest: ' den Smart Chip anbieten?',
    }
  }

  return {
    highlight: 'Wähle dein',
    rest: ' Starter-Set',
  }
})

const heroTitleGradientClass = computed(() =>
  isAuthorized.value ? 'sc-text-orange' : 'sc-text-intro',
)
</script>