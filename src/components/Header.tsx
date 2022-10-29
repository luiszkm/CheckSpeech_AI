import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavBar } from "./NavBar";


export function Header() {
  const { t } = useTranslation()

  return (
    <div className="flex justify-center items-center">
      <nav className="w-full max-w-screen-xl flex items-center justify-between px-4 py-4 fixed top-0 ">
        <Link to=""><img src="" alt="Logo" /></Link>
        <ul className="hidden gap-4 md:flex ">
          <li><a href='#'>{t('HeaderHome')}</a></li>
          <li><a href='#'>{t('HeaderSolutions')}</a></li>
          <li><a href='#'>{t('HeaderClients')}</a></li>
          <li><a href='#'>{t('HeaderPrices')}</a></li>
          <li><a href='#contact'>{t('HeaderContact')}</a></li>
        </ul>
        <LanguageSwitcher />

        <NavBar />


      </nav>
    </div>
  )
}