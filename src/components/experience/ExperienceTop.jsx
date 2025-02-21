import React from 'react'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopRight from './ExperienceTopRight'

const ExperienceTop = () => {
  return (
    <div className=' flex lg:flex-row sm:flex-col gap-4 items-center justify-center '>
      <ExperienceTopLeft/>
      <ExperienceTopMiddle/>
      <ExperienceTopRight/>
      
    </div>
  )
}

export default ExperienceTop
