<template>
  <div>
    <UiHeader />
    <NarrowContainer v-if="breadcrumbs?.length" class="p-4 md:px-0">
      <LazyUiBreadcrumbs :breadcrumbs="breadcrumbs" />
    </NarrowContainer>
    <main>
      <slot />
    </main>
    <UiNavbarBottom v-if="viewport.isLessThan('lg')" />
    <Cookiebar />
    <PreviewMode />
    <!-- TEST-BANNER: Layout aktiv? -->
<div style="background:#ff0066;color:#fff;padding:8px;text-align:center">
  LAYOUT LEBT !!!
</div>
    <ClientOnly>
      <FooterBlock />
    </ClientOnly>
    <QuickCheckout v-if="isOpen" :product="product" />
  </div>
</template>

<script setup lang="ts">
import FooterBlock from '@theme/components/blocks/Footer/FooterBlock.vue'
import type { DefaultLayoutProps } from '~/layouts/types';

defineProps<DefaultLayoutProps>();

const { setLogoMeta } = useStructuredData();
const { isOpen, product } = useQuickCheckout();
const viewport = useViewport();
const route = useRoute();

setLogoMeta();
</script>
