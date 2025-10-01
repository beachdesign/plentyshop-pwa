export default defineI18nConfig(() => ({
  legacy: false,
  // Nur Deutsch zulassen:
  availableLocales: ['de'],
  fallbackLocale: 'de',
  numberFormats: {
    de: {
      currency: { style: 'currency', currency: 'EUR', currencyDisplay: 'symbol' },
    },
    en: { 
      currency: { style: 'currency', currency: 'GBP', currencyDisplay: 'symbol' } 
    },
  },
  warnHtmlMessage: false,
}));