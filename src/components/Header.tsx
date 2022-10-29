import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";



export function Header() {
  const { t } = useTranslation()

  return (
    <div>
      <nav>
        <Link to=""><img src="" alt="Logo" /></Link>
        <ul>
          <li><Link to=''>{t('HeaderHome')}</Link></li>
          <li><Link to=''>{t('HeaderSolutions')}</Link></li>
          <li><Link to=''>{t('HeaderClients')}</Link></li>
          <li><Link to=''>{t('HeaderPrices')}</Link></li>
          <li><Link to=''>{t('HeaderContact')}</Link></li>
        </ul>

        <LanguageSwitcher />
      </nav>
    </div>
  )
}