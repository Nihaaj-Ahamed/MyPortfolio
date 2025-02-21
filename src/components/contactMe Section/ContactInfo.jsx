import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import SingleInfo from './singleInfo';

const ContactInfo = () => {
  return (
    <div className=' flex flex-col gap4 text-white '>
    <SingleInfo text="nihaajahamed@gmail.com" Image={HiOutlineMail}/>
    <SingleInfo text="+94759896910" Image={FiPhone}/>
    <SingleInfo text="Maruthamunai,Ampara,Sri Lanka" Image={GrLocation}/>
    </div>
    
  )
}

export default ContactInfo
