import React from 'react'
import { LuSquareArrowOutDownRight } from "react-icons/lu";

const NavebarBts = () => {
  return (
    <div>
        <button className='px-4 py-2 rounded-full text-xl font-bold
         text-white border-cyan border flex iterms-center gap-1
          bg-gradient-to-r from-cyan to-orange hover:border-orange
           hover:scale-110 transition-all duration-500'>
            Hire Me
            <div className=' sm:hidden md:block'>
            <LuSquareArrowOutDownRight />
            </div>
              
        </button>
      
    </div>
  )
}

export default NavebarBts
