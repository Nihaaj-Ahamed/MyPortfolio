import React from 'react'

const AboutMeText = () => {
  return (
    <div className=' flex  flex-col md:items-start  sm:items-center md:text-left  '>
      <h2 className=' text-cyan text-6xl'>About me</h2>
      <p className='text-white'>I'm Nihaaj ahamed,I am currently pursuing my BSc Hons in Information Technology & Managament at the University of Moratuwa.
      I am passionate about applying my academic knowledge to real-world projects, continuously learning and growing in the field of software development and machine learning</p>
      <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  )
}

export default AboutMeText
