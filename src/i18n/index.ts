import i18n from "i18next";
import { initReactI18next } from "react-i18next"

import enJson from "./translations/en.json"
import esJson from "./translations/es.json"
import frJson from "./translations/fr.json"
import ptBRJson from "./translations/ptBR.json"


let language

 function GetLanguageValue() {
  try {
    language =  JSON.parse(localStorage.getItem('@CheckSpeechLanguage') || "")

  } catch {
    language = "en"
  }
} GetLanguageValue()

i18n.use(initReactI18next).init({
  fallbackLng: String(language),
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: enJson,
    fr: frJson,
    ptBR: ptBRJson,
    es: esJson,
  }
})

export default i18n;