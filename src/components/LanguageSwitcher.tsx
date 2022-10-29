import { useState, useEffect } from "react"
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

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState<string>()


  function setLanguageValue(value: string) {
    setLanguage(value)
    i18n.changeLanguage(value)
    localStorage.setItem('@CheckSpeechLanguage', JSON.stringify(value))
  }

  useEffect(()=>{
    const languageBrowser = JSON.parse(localStorage.getItem('@CheckSpeechLanguage') || "ptBR")
    setLanguage(languageBrowser)
    console.log("render");
    
  },[language])

    return (
      <div className="flex flex-col text-2xs">
        <label htmlFor="language">{t("selectYourLanguage")}</label>
        <select value={String(language)} id="language" onChange={e => setLanguageValue(e.target.value)}>
          {
            languageOptions.map(optionLanguage => (
              <option value={optionLanguage.value} key={String(optionLanguage.value)}
              >{t(`${optionLanguage.name}`)}</option>

            ))
          }
        </select>
      </div>
    )
  }



