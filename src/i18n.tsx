import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// the translations
const backendOptions = {
  loadPath: '/locales/{{lng}}/translation.json',
  crossDomain: true,
};
const availableLanguages = ['pt-PT', 'en-GB'];

const detectionOptions = {
  lookupCookie: 'Language',
};

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: backendOptions,
    detection: detectionOptions,
    whitelist: availableLanguages,
    lng: 'pt-PT',
    fallbackLng: 'pt-PT', // use en if detected lng is not available
    keySeparator: '.', // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
