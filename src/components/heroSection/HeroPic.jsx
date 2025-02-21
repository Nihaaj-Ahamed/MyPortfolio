import React from 'react'
import { BsHexagon } from "react-icons/bs";
import{motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variants"


const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left',0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0}}
     className=' h-full flex items-center justify-center  '>
      <img src="../../public/images/me1.png" alt="me nihaaj"
       className=' max-h-[650px] w-auto ' />
       <div className=' absolute -z-10 flex justify-center items-center animate-pulse'>
       <BsHexagon className=' md:h-[90%] sm:h-[120%] min-h-[350px] w-auto text-cyan blur-sm animate-[spin_20s_linear_infinite]  '/>
       </div>
    </motion.div>
  )
}

export default HeroPic
