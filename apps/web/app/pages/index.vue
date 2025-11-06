<template>
  <div>
    <ScHeroVideo title="Möchtest du deinen Kunden den Smart Chip anbieten?"
      text="Smart Chip ist ein ultradünner NFC-Sticker – blitzschnell, robust, immer dabei."
      cta-label="Jetzt registrieren" cta-href="/register"
      video-src="https://cdn02.plentymarkets.com/ehe3e071agu5/frontend/sc-content/payment-pool-topdown.mp4" :contained="true" video-on="right"
      ratio="1/1" :debug="true" />
    <ScWhatYouNeed />
    <ScStarterSets />
    <ClientOnly>
      <ScAuthBadge />
    </ClientOnly>
    <EditablePage :identifier="'index'" :type="'immutable'" />
  </div>
</template>

<script lang="ts" setup>
import type { Block } from '@plentymarkets/shop-api';
import homepageTemplateDataDe from '~/composables/useCategoryTemplate/homepageTemplateDataDe.json';
import homepageTemplateDataEn from '~/composables/useCategoryTemplate/homepageTemplateDataEn.json';

definePageMeta({
  pageType: 'static',
  isBlockified: true,
  type: 'immutable',
  identifier: 'index',
});

const useLocaleSpecificHomepageTemplate = (locale: string) =>
  locale === 'de' ? (homepageTemplateDataDe as Block[]) : (homepageTemplateDataEn as Block[]);

const { $i18n } = useNuxtApp();
const { t } = useI18n();

const { setPageMeta } = usePageMeta();
const route = useRoute();
const { setDefaultTemplate } = useCategoryTemplate(route?.meta?.identifier as string, route.meta.type as string);

const icon = 'home';
setPageMeta(t('homepage.title'), icon);

setDefaultTemplate(useLocaleSpecificHomepageTemplate($i18n.locale.value));

const { getRobots, setRobotForStaticPage } = useRobots();
getRobots();
setRobotForStaticPage('Homepage');

const { setBlocksListContext } = useBlockManager();
setBlocksListContext('content');
</script>
