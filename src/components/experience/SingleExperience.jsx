import React from 'react'
import{motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variants"

const SingleExperience = ({experience}) => {
  return (
    <motion.div
    variants={fadeIn('right',0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0}}
     className=' group md:h-[250px] md:w-[200px] sm:h-auto sm:w-full flex flex-col items-center text-center border-2 border-orange border-dashed rounded-2xl mt-12 p-4 transition-all duration-500 hover:bg-yellow-900 hover:shadow-lg hover:scale-105 shadow-cyan-500/50 '>
      <div className=' text-6xl text-cyan-600 bg-black p-3 rounded-2xl group-hover:scale-105 duration-500 group-hover:shadow-[10px_10px_50px_rgba(0,0,0,0.5)] group-hover:border-2 border-gray-800 '>
        {experience.icon}
      </div>
      <h2 className=' text-orange text-2xl '>{experience.name1} <span className=' text-orange-300 '>{experience.name2}</span> </h2>
      <p className=' text-white'>{experience.data} </p>
      
    </motion.div>
  )
}

export default SingleExperience
