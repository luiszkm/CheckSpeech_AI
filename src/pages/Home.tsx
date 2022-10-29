import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export function Home() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <LanguageSwitcher />
      <h1>{t("welcome")}</h1>
      <h2>{t("welcomeYouCan")}</h2>

    </div>
  )
}


