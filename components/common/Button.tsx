import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <Link href="/assets/img/cv/cv2.pdf" download className="relative transform hover:-translate-y-1 font-figtree text-base font-bold leading-4 text-white inline-flex items-center justify-center px-6 py-4 rounded z-10 transition-all duration-400 mt-8 uppercase bg-gradient-to-r from-[#FF4308] to-[#FB8500] overflow-hidden after:content-[''] after:absolute after:inset-0 after:w-0 after:z-[-1] after:rounded after:transition-all after:duration-400 after:bg-gradient-to-r after:from-[#FB8500] after:to-[#FF4308] hover:after:w-full">
    <img
        src="/assets/img/icons/download.svg"
        alt="Download icon"
        className='h-5 w-5 mr-2'
        style={{filter: "brightness(0) invert(1)"}}
    />
    <span>Download CV</span> 
    </Link>
  )
}

export default Button