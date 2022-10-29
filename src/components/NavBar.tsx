import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

interface NavigationProps {
  status?: boolean;
}

export function NavBar(props: NavigationProps) {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(props.status)

  return (

    <>
      { menuOpen ?
        <div className=" bg-cyan-500 w-full  absolute h-screen top-0 left-0 flex flex-col items-center py-20 md:hidden">

        <IoIosClose className="cursor-pointer absolute top-4 right-3 hover:fill-white hover:animate-pulse"
          size={28}
          onClick={() => setMenuOpen(false)} />

        <ul>
          <li><Link to=''>{t('HeaderHome')}</Link></li>
          <li><Link to=''>{t('HeaderSolutions')}</Link></li>
          <li><Link to=''>{t('HeaderClients')}</Link></li>
          <li><Link to=''>{t('HeaderPrices')}</Link></li>
          <li><Link to=''>{t('HeaderContact')}</Link></li>
        </ul>
      </div>:
        <GiHamburgerMenu className="cursor-pointer hover:animate-bounce md:hidden "
        onClick={() => setMenuOpen(true)} />
      }
    </>
  )
}