// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';  // Ngôn ngữ tiếng Anh
import vi from './locales/vi.json';  // Ngôn ngữ tiếng Việt

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
    lng: 'vi',  // Ngôn ngữ mặc định
    fallbackLng: 'vi',  // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false, // React đã xử lý việc này
    },
  });

export default i18n;
