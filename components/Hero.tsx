import React from 'react'
import Button from './common/Button'

interface HeroInterface {
    src: string
    icon: string
    alt: string
}

const Hero = () => {
    const techStack: HeroInterface[] = [
        {
            src: "#",
            icon: "reactjs.svg",
            alt: "reactjs"
        },
        {
            src: "#",
            icon: "nextjs.svg",
            alt: "nextjs"
        },
        {
            src: "#",
            icon: "nodejs.svg",
            alt: "nodejs"
        },
        {
            src: "#",
            icon: "tailwindcss.svg",
            alt: "tailwindcss"
        },
        {
            src: "#",
            icon: "mongodb.svg",
            alt: "mongodb"
        }
    ]

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
            <div className='relative -top-12 xl:-top-32 lg:w-1/2 flex justify-center lg:block'>
                <img src="/assets/img/all-images/header-img2.png" alt="" className='rounded' />
            </div>
            <div className='lg:w-1/2 mt-16 sm:ml-16 2xl:ml-0'>
                <p className='text-xl font-medium text-[#5D626F] opacity-80'>As a passionate Full Stack Developer, I specialize in building scalable web applications from scratch using modern technologies like React, Next.js, Node.js, Express, and MongoDB. With over 3.5+ years of experience, I craft user-centric solutions that merge design with functionality.</p>
                <Button />

                <div className="mt-16 relative">
                            <h5 className='text-2xl leading-6 font-bold text-[#04060C]'>🛠️ Tech Stack</h5>
                            <ul className='flex'>
                                {
                                    techStack.map((item: HeroInterface, index: number) => (
                                        <li key={index} className='inline-block transform transition-all duration-300 hover:-translate-y-1'>
                                            <a href={item.src} className='h-13 w-13 leading-13 p-2 text-center inline-block text-2xl text-[#04060C] relative z-[1] rounded bg-white mt-6 mr-3 transition duration-300 hover:bg-gradient-to-r hover:from-[#FF4308] hover:to-[#FB8500] group'>
                                                <img src={`/assets/img/icons/${item.icon}`} alt={item.alt} className='group-hover:invert group-hover:brightness-0' />
                                            </a>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
            </div>
        </div>

    </div>
  )
}

export default Hero