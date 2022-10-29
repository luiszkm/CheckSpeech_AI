import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillTwitterCircle, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

import { Button } from "./Button";



export function NavBar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState<boolean>()

  return (

    <>
      {menuOpen ?
        <div className=" bg-cyan-500 w-full  absolute h-screen top-0 left-0 flex flex-col gap-5 items-center py-20 md:hidden">

          <IoIosClose className="cursor-pointer absolute top-4 right-3 hover:fill-white hover:animate-pulse"
            size={28}
            onClick={() => setMenuOpen(false)} />

          <ul>
            <li onClick={() => setMenuOpen(false)} ><a href='#'>{t('HeaderHome')}</a></li>
            <li onClick={() => setMenuOpen(false)} ><a href='#'>{t('HeaderSolutions')}</a></li>
            <li onClick={() => setMenuOpen(false)} ><a href='#'>{t('HeaderClients')}</a></li>
            <li onClick={() => setMenuOpen(false)} ><a href='#'>{t('HeaderPrices')}</a></li>
            <li onClick={() => setMenuOpen(false)} ><a href='#contact'>{t('HeaderContact')}</a></li>
          </ul>

          <Button>Contate-nops</Button>

          <ul className="flex gap-4 cursor-pointer ">
            <li className="hover:animate-bounce"><a href="#"> <AiOutlineInstagram size={24} /></a></li>
            <li className="hover:animate-bounce"><a href="#"> <AiOutlineFacebook size={24} /></a></li>
            <li className="hover:animate-bounce"><a href="#"> <AiFillTwitterCircle size={24} /></a></li>
            <li className="hover:animate-bounce"><a href="#"> <AiOutlineYoutube size={24} /></a></li>
            <li className="hover:animate-bounce"><a href="#"> <AiOutlineLinkedin size={24} /></a></li>
          </ul>

        </div> :
        <GiHamburgerMenu className="cursor-pointer hover:animate-bounce md:hidden "
          onClick={() => setMenuOpen(true)} />
      }
    </>
  )
}