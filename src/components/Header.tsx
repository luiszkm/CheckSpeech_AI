import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavBar } from "./NavBar";

export function Header() {

  const { t } = useTranslation()


  return (
    <div>
      <nav className="w-full max-w-screen-xl flex items-center justify-between px-4 py-4">
        <Link to=""><img src="" alt="Logo" /></Link>


        <ul className="hidden gap-4 md:flex ">
          <li><Link to=''>{t('HeaderHome')}</Link></li>
          <li><Link to=''>{t('HeaderSolutions')}</Link></li>
          <li><Link to=''>{t('HeaderClients')}</Link></li>
          <li><Link to=''>{t('HeaderPrices')}</Link></li>
          <li><Link to=''>{t('HeaderContact')}</Link></li>
        </ul>
        <LanguageSwitcher />

        <NavBar />
      </nav>
    </div>
  )
}