import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className=' flex gap-4'>
        <SingleContactSocial link="" Icon={FaGithub} />
        <SingleContactSocial link="https://www.linkedin.com/in/nihaaj-ahamed-911177306" Icon={FaLinkedin} />
        <SingleContactSocial link="https://www.instagram.com/nihaaj_ahmd/" Icon={FaInstagram} />
      
    </div>
  )
}

export default ContactSocial
