import { useTranslation } from "react-i18next"

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: ""
  },
  {
    name: "Frances",
    value: "fr",
    flag: ""
  },
  {
    name: "Espanhol",
    value: "es",
    flag: ""
  },
  {
    name: "Ingles",
    value: "en",
    flag: ""
  }
]

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <span>{t('selectYouLanguage')}</span>
      {
        languageOptions.map(option => (
          
          <button key={option.value}
            onClick={() => {
              i18n.changeLanguage(option.value)
            }}>
            <span>{option.name}</span>
          </button>
        ))
      }
    </div>
  )
}