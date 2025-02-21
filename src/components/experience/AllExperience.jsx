import React from 'react'
import { SiWebauthn } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { BsAppIndicator } from "react-icons/bs";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
import SingleExperience from './SingleExperience';
import { MdNavigateNext } from "react-icons/md";
import{motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variants"

const experience=[
  {
    icon:<SiWebauthn/>,
    name1:'Web',
    name2:" Development",
    data:"I can bring best ideas into Web!"

  },
  {
    icon:<FaDatabase/>,
    name1:'Database',
    name2:" Management",
    data:"I can handle your data effciently and effectively"

  },
  {
    icon:<BsAppIndicator/>,
    name1:'App',
    name2:" creation",
    data:"I can make creative and innovative app!"


  },
  {
    icon:<PiPlugsConnectedFill/>,
    name1:'API',
    name2:" s",
    data:"connect with other site effectively"


  },
  {
    icon:<CiCirclePlus/>,
    name1:'MORE',
    name2:"",
    data:"There are more to explore!!"


    
    

  },
]

const AllExperience = () => {
  return (
    <div className=' flex md:flex-row sm:flex-col items-center justify-between  '>
      {experience.map((item,index)=>{
        return(
          <>
          <SingleExperience key={index} experience={item}/>;
          { index < 4 ?(
           <motion.div
           variants={fadeIn('right',0.2)}
           initial="hidden"
           whileInView="show"
           viewport={{once:false,amount:0.7}}>

             <MdNavigateNext className='text-6xl text-orange lg:block sm:hidden'/>
           </motion.div>
              
              ):(
                ""
                )}
           
          </>
        );
      })}
      
    </div>
  )
}

export default AllExperience
