import { useState } from "react"
import { useTranslation } from "react-i18next"

const languageOptions = [
  {
    name: "Portuguese",
    value: "ptBR",
    flag: ""
  },
  {
    name: "French",
    value: "fr",
    flag: ""
  },
  {
    name: "Spanish",
    value: "es",
    flag: ""
  },
  {
    name: "English",
    value: "en",
    flag: ""
  }
]
const languageBrowser = JSON.parse(localStorage.getItem('@CheckSpeechLanguage') || "ptBR")

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState<string>()


  function setLanguageValue(value: string) {
    setLanguage(value)
    i18n.changeLanguage(value)
    localStorage.setItem('@CheckSpeechLanguage', JSON.stringify(value))
  }

  return (
    <div className="flex flex-col text-2xs">
      <label htmlFor="language">{t("selectYourLanguage")}</label>
      <select value={String(languageBrowser)} id="language" onChange={e => setLanguageValue(e.target.value)}>
        {
          languageOptions.map(optionLanguage => (
            <option value={optionLanguage.value}
            >{t(`${optionLanguage.name}`)}</option>

          ))
        }
      </select>
    </div>
  )
}