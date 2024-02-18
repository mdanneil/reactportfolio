import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import englishTranslations from './translations/english.json'
import swedishTranslations from './translations/swedish.json'

const resources = {
  en: {
    translation: englishTranslations,
  },
  sv: {
    translation: swedishTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'sv',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;