<template>
  <div>
    <ScHeroVideo title="Möchtest du deinen Kunden den Smart Chip anbieten?"
      text="Smart Chip ist ein ultradünner NFC-Sticker – blitzschnell, robust, immer dabei."
      cta-label="Jetzt registrieren" cta-href="/register"
      video-src="https://nailconnect.smart-chip.com/videos/payment-pool-topdown.mp4" :contained="true" video-on="right"
      ratio="1/1" :debug="true" />
    <ScWhatYouNeed />
    <ScStarterSets />
    <EditablePage :identifier="'index'" :type="'immutable'" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  pageType: 'static',
  isBlockified: true,
  type: 'immutable',
  identifier: 'index',
});
const { t } = useI18n();
const { setPageMeta } = usePageMeta();
const icon = 'home';
setPageMeta(t('homepage.title'), icon);

const { getRobots, setRobotForStaticPage } = useRobots();
getRobots();
setRobotForStaticPage('Homepage');

const { setBlocksListContext } = useBlockManager();
setBlocksListContext('content');
</script>
