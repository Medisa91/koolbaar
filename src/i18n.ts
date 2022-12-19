import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      hello: "Hello",
      greet: "Hello, {{name}}!",
      documentation: "Go To Documentation",
    },
  },
  fa: {
    translation: {
      hello: "سلام",
      greet: "سلام, {{name}}!",
      documentation: "برو به دایکومنت",
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
