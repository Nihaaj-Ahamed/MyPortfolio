import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { CiBoxes } from "react-icons/ci";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { AiTwotoneApi } from "react-icons/ai";
import{motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variants"



const skills=[
    {
        skill:"HTML",
        icon:FaHtml5,
    },
    {
        skill:"CSS",
        icon:FaCss3Alt,
    },
    {
        skill:"JavaScript",
        icon:IoLogoJavascript,
    },
    {
        skill:"ReactJS",
        icon:RiReactjsLine,
    },
    {
        skill:"C",
        icon:CiBoxes,
    },
    {
        skill:"tailwindCSS",
        icon:SiTailwindcss,
    },
    {
        skill:"vite",
        icon:SiVite,
    },
    {
        skill:"APIs",
        icon:AiTwotoneApi,
    },
]
const AllSkillsSM = () => {
  return (
    <div className=' grid md:grid-cols-4 sm:grid-cols-2 my-12 '>
      {skills.map((item,index)=>{
        return(
            <motion.div
            variants={fadeIn('up',0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false,amount:0.7}}
             className='flex flex-col items-center  '>
                <item.icon className='text-7xl text-orange '/>
                <p className='text-center mt-4  text-white'>{item.skill}</p>
            </motion.div>
        )
      })}
    </div>
  )
}

export default AllSkillsSM
