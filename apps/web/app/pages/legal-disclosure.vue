<template>
  <div class="w-full p-5 overflow-x-auto">
    <div class="max-w-7xl mx-auto no-preflight" v-html="getHTMLTexts()" />
  </div>
</template>

<script setup lang="ts">
const { data, getLegalTexts } = useLegalInformation();
const { getRobots, setRobotForStaticPage } = useRobots();
const { t } = useI18n();
const { setPageMeta } = usePageMeta();

const icon = 'page';
setPageMeta(t('categories.legal.subcategories.legalDisclosure'), icon);

definePageMeta({
  pageType: 'static',
});

await getLegalTexts({
  type: 'LegalDisclosure',
});

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};

await getRobots();
setRobotForStaticPage('LegalDisclosure');
</script>
