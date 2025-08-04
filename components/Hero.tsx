import React from 'react'
import Button from './common/Button'


const Hero = () => {

  return (
    <div className='sm:px-4 md:px-8' id='home'>
        <h4 className="text-2xl font-semibold text-[#04060C] mb-2 md:mb-6 flex items-center">
            <img src="/assets/img/icons/hand1.svg" alt="hand icon" />
            Hi I’m Shakil Ahmad
        </h4>
        <h1 className="text-[24px] sm:text-4xl md:text-5xl xl:text-6xl font-bold text-[#04060C] uppercase mb-5 sm:mb-15">A FULL STACK <span className='font-black'>DEVELOPER &</span></h1>
        <div className="relative lg:-right-80 xl:-right-90 2xl:-right-[500px] inline-block py-3 sm:py-6 px-4 sm:px-7 border border-[#FE5C05] rounded bg-white isolate">
            <span className="bg-gradient-to-r from-[#FF4308] to-[#FB8500] bg-clip-text text-transparent font-playfair italic text-3xl sm:text-5xl font-semibold uppercase">
                TECH ENTHUSIAST
            </span>

            <img src="/assets/img/elements/elements5.png" alt="" className="absolute -top-1 -right-1" />
            <img src="/assets/img/elements/elements5.png" alt="" className="absolute -top-1 -left-1" />
            <img src="/assets/img/elements/elements5.png" alt="" className="absolute -bottom-1 -left-1" />
            <img src="/assets/img/elements/elements5.png" alt="" className="absolute -bottom-1 -right-1" />
        </div>

        <div className='flex flex-col lg:flex-row mt-12 xl:mt-0'>
            <div className='relative lg:-top-40 xl:-top-30 w-90 lg:w-74 xl:w-86 flex justify-center lg:block border-5 border-[#FB8500] rounded-full overflow-hidden'>
                <img src="/assets/img/all-images/abc.png" alt="" className='rounded w-full h-full object-cover' />
            </div>
            <div className='lg:w-1/2 pt-12 sm:ml-16 2xl:ml-38 pb-0'>
                <p className='text-xl font-medium text-[#5D626F] opacity-80'>As a passionate Full Stack Developer, I specialize in building scalable web applications from scratch using modern technologies like React, Next.js, Node.js, Express, and MongoDB. With over 3.5+ years of experience, I craft user-centric solutions that merge design with functionality.</p>
                <Button />
            </div>
        </div>

    </div>
  )
}

export default Hero