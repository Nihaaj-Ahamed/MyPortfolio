import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import{motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variants"
const projects=[
    {
        name:"Portfolio",
        image:"../../public/images/port.png",
        data:"This project showcases my foundational skills in web development . It includes a fully responsive webpage with interactive elements that adapt seamlessly across different devices and screen sizes.",
        align:"right"

        
    },
    {
        name:"Life Advoicer",
        image:"../../public/images/ad.png",
        data:"Built with React.js and Vite.js, this project is a modern advice generator website that fetches random pieces of advice from an API. It highlights my ability to create dynamic and user-friendly interfaces while integrating third-party services.",
        align:"left"

        
    },
    {
        name:"Qr Code Maker",
        image:"../../public/images/qr.png",
        data:"This project demonstrates my expertise in React.js and Vite.js to develop a tool that generates QR codes based on user input. It features a clean, intuitive design and emphasizes practical utility and efficiency.",
         align:"right"
        
    },
    {
        name:"About Cart Maker",
        image:"../../public/images/card.png",
        data:"A React.js and Vite.js project where I created a personal card generator. This tool allows users to input details like name, profession, and contact information to generate an aesthetically pleasing, CV-style card. It reflects my ability to create personalized and functional design solutions.",
         align:"left"
        
    },
]

const ProjectMain = () => {
  return (
    <div id='projects' className=' max-w[1200px] mx-auto px-4'>
        <motion.div
          variants={fadeIn('up',0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once:false,amount:0.7}}>

        </motion.div>
        <ProjectText/>
        <div className=' flext flex-col gap-20 max-w-[900px] mx-auto mt-12  '>
        {projects.map((item,index)=>{
            return(
                <SingleProject key={index} name={item.name} img={item.image} data={item.data} align={item.align}/>
            )
        })}
        </div>
    </div>
  )
}

export default ProjectMain
