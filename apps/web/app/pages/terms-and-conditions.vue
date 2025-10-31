<template>
  <div class="w-full p-5 overflow-x-auto">
    <div class="max-w-7xl mx-auto no-preflight" v-html="getHTMLTexts()" />
  </div>
</template>

<script setup lang="ts">
const { data, getLegalTexts } = useLegalInformation();
const { getRobots, setRobotForStaticPage } = useRobots();
const { t } = useI18n();

definePageMeta({
  pageType: 'static',
});
const { setPageMeta } = usePageMeta();

const icon = 'page';
setPageMeta(t('categories.legal.subcategories.termsAndConditions'), icon);

await getLegalTexts({
  type: 'TermsConditions',
});

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};

await getRobots();
setRobotForStaticPage('TermsAndConditions');
</script>
