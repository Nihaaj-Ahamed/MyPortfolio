import React from 'react'

const SingleContactSocial = ({Icon,link}) => {
  return (
    <div >
        <a href={link} className=' cursor-pointer'>
        <div className=' text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center  hover:text-cyan hover:scale-110 transition-all duration-500 '>

            <Icon/>
          </div>
        </a>
    </div>
      
  )
}

export default SingleContactSocial
