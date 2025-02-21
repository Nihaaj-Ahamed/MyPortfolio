import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavebarBts from './NavebarBts'
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarMain = () => {
  const[menuOpen,setMenuOpen]=useState(false);
  const toggleMenu=()=>{
    setMenuOpen(!menuOpen)
  }
  return (
   <nav className=' max-w-[1300px] mx-auto px-4 w-full fixed 
   left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2  '>
 <div className='flex justify-between w-full max-w-[1200px]
  mx-auto bg-black iterms-center p-6  rounded-r-full 
  rounded-l-full border-[0.5px] border-orange '>
    <NavbarLogo/>
    <div className={`${menuOpen ?"sm:block" : " sm:hidden"} lg:block `}>
    <NavbarLinks/>
    </div>
    <NavebarBts/>
   </div>
   <div className=' flex lg:hidden sm:block p-6 bg-black
    items-center rounded-full border-[0.5px] border-orange  '>
      <button className=' text-2xl p-3 border border-orange  rounded-full
       text-white  ' onClick={toggleMenu}>
   <RxHamburgerMenu/>
      </button>
   </div>
   </nav>
  )
}

export default NavbarMain
