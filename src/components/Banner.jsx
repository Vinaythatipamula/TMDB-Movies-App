import React from 'react'
import image from "../assets/image.png"


const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat m-5 rounded-lg h-56 sm:h-72 md:h-[60vh] lg:h-[75vh]" style={{ backgroundImage: `url(${image})` }}>
       
    </div>
  )
}

export default Banner
