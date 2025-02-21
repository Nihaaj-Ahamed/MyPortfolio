import React from 'react'
import{motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variants"

const SingleProject = ({name,img,data,align}) => {
  return (
    <motion.div
    variants={fadeIn('up',0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0}}
    className={` group flex w-full sm:flex-col-reverse items-center gap-8
     ${align==="left"? "md:flex-row": "md:flex-row-reverse" } justify-end mb-13` }>

       <div>
        <h3 className={` md:text-3xl sm:text-2xl text-orange ${align==='left' ?"md:text-right ":"md:text-left"} `}>{name}</h3>


        <p className= {`w-[400px] text-xl ml-5     text-cyan
             ${align==='left' ?"md:text-right ":"md:text-left"}  group-hover:opacity-100 opacity-0  transition-all duration-1000  `}>{data}</p>
       </div>

        <div className=' max-h-[220px] max-w-[400px] rounded-xl overflow-hidden 
        hover:scale-110 transform transition-all duration-500 relative border border-white  '>
            <div className=' w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden  '></div>
            <img src={img} alt="" className=' w-full h-full'/>
        </div>
      
    </motion.div>
  )
}

export default SingleProject
