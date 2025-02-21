import React from 'react'
import{motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variants"

const Herotext = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
        <motion.h2
        variants={fadeIn('down',0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0}}
        className=' lg:text-2xl sm:text-xl text-cyan'>
          FRONT-END Web Developer
          </motion.h2>
      <motion.h1
       variants={fadeIn('right',0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{once:false,amount:0}}
       className=' md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange '>NIHAAJ AHAMED MS</motion.h1>
      < motion.p
       variants={fadeIn('up',0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{once:false,amount:0}}
       className='text-white mt-4 text-lg'>I have more than 1 year of experience in development.</motion.p>
    </div>
  )
}

export default Herotext
