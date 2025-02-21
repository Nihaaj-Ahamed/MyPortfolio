import React from 'react'
import Herotext from './Herotext'
import HeroPic from './heroPic'
import HeroGardient from './HeroGardient'
import SubHeroSection from './SubHeroSection'

const HeroMain = () => {
  return (
    <div className='pt-40  pb-16'>
      <div className=' flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4    '>
      <Herotext/>
      <HeroPic/>
      </div>
      <HeroGardient/>
      <SubHeroSection/>
      
    </div>
  )
}

export default HeroMain
