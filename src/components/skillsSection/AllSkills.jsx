import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { CiBoxes } from "react-icons/ci";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { AiTwotoneApi } from "react-icons/ai";
import SingleSkill from './SingleSkill';
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

const AllSkills = () => {
  return (
    <div>
      <div className=' flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto '>
        {skills.map((item,index)=>{
            return(
                <motion.div
                variants={fadeIn('up',`0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false,amount:0}}>
                    <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>

                </motion.div>
            )
        })}
      </div>
    </div>
  )
}

export default AllSkills
