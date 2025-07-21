import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // çeviri dosyalarını /public klasöründen yükler
  .use(LanguageDetector) // tarayıcının varsayılan dilini algılar
  .use(initReactI18next) // i18next'i react'e bağlar
  .init({
    fallbackLng: 'en', // eğer dil bulunamazsa varsayılan ingilizce olsun
    debug: true, // geliştirme aşamasında konsola bilgi basar
    interpolation: {
      escapeValue: false, // react zaten XSS'e karşı koruduğu için gereksiz
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // çeviri dosyalarının yolu
    },
  });

export default i18n;