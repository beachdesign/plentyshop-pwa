<template>
  <div>
    <h1>Startseite WTF</h1>
    
    <template>
      <ScHeroVideo
        video-src="https://nailconnect.smart-chip.com/videos/payment-pool-topdown.mp4"
        poster=""
        title="Möchtest du deinen Kunden den Smart Chip anbieten?"
        text="Smart Chip ist ein digitales Portemonnaie auf deinem Fingernagel. Winzig klein…"
        cta-label="Jetzt registrieren"
        cta-href="#register"
      />
    </template>

     <h1>Startseite WTF</h1>

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
