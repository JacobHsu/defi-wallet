import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import tw from './i18n/tw.json';

const resources = {
  en: {
    translation: en,
  },
  tw :{
    translation: tw,
  }
};

window.localStorage.setItem('language', 'en');

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',            
  fallbackLng: 'en',     
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;