import React from 'react'
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/novitasariangelina/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/novitasariangelina" target="_blank"><BsGithub /></a>
      <a href="https://t.me/novitasariangelina" target="_blank"><BsTelegram /></a>
    </div>
  )
}

export default HeaderSocials