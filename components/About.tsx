import React from 'react'
import Button from './common/Button'

const About = () => {
  return (
    <div className='sm:px-4 md:px-8 mt-16 xl:mt-0 flex flex-col xl:flex-row'>
        <div className='xl:w-1/3 flex flex-col items-center justify-center xl:block'>
            {/* box 1 */}
            <div className="h-64 w-64 text-center relative">
              <img src="/assets/img/bg/polygon6.png" alt="" className="absolute left-6 top-3" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-5xl font-bold uppercase stroke-text">4k</h2>
                <p className="text-xl font-medium leading-5 text-[#5D626F] uppercase mt-4 transition-all duration-500">
                  PROJECTS DEPLOYED
                </p>
              </div>
            </div>

            {/* box 2 */}
            <div className="h-64 w-64 text-center relative xl:left-28 xl:-top-14">
              <img src="/assets/img/bg/polygon7.png" alt="" className="absolute left-6 top-3" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-5xl font-bold uppercase text-white">3k</h2>
                <p className="font-figtree text-xl font-medium leading-5 text-white uppercase mt-4 transition-all duration-500">
                  Happy Client
                </p>
              </div>
            </div>

            {/* box 3 */}
            <div className="h-64 w-64 text-center relative xl:-top-28">
              <img src="/assets/img/bg/polygon6.png" alt="" className="absolute left-6 top-3" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-5xl font-bold uppercase stroke-text">1k</h2>
                <p className="text-xl font-medium leading-5 text-[#5D626F] uppercase mt-4 transition-all duration-500">
                  GITHUB STARS
                </p>
              </div>
            </div>

        </div>
        <div className='xl:w-2/3 mt-16'>
            <div>
                <h4 className="text-2xl font-medium mb-6 uppercase text-transparent bg-clip-text flex items-center gap-2"
                    style={{
                    backgroundImage: "linear-gradient(90deg, #FF4308 0%, #FB8500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                    }}>
                    <img src="/assets/img/icons/star3.png" alt="" />
                    About Me
                </h4>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-[#04060C] uppercase mb-4 sm:mb-8">A FULL STACK <span className='font-bold'>DEVELOPER</span></h2>
                <div className="relative lg:-right-16 2xl:-right-24 inline-block py-6 px-7 border border-[#FE5C05] rounded bg-white isolate">
                    <span className="bg-gradient-to-r from-[#FF4308] to-[#FB8500] bg-clip-text text-transparent font-playfair italic text-xl sm:text-4xl md:text-5xl font-semibold uppercase">
                        & SOFTWARE ENGINEER
                    </span>

                    <img src="/assets/img/elements/elements5.png" alt="" className="absolute -top-1 -right-1" />
                    <img src="/assets/img/elements/elements5.png" alt="" className="absolute -top-1 -left-1" />
                    <img src="/assets/img/elements/elements5.png" alt="" className="absolute -bottom-1 -left-1" />
                    <img src="/assets/img/elements/elements5.png" alt="" className="absolute -bottom-1 -right-1" />
                </div>

                <div className='lg:pl-24'>
                    <p className="text-md font-medium text-[#5D626F] opacity-80 mt-8">As a Full Stack Developer, I build scalable, fast, and secure web applications using the latest technologies like React, Next.js, Node.js, Express, MongoDB, and more. My mission is to deliver clean code, intuitive UI, and powerful backend architecture that brings your digital ideas to life.</p>

                    <div className="flex items-center mt-4">
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-5'>
                        <li className="flex items-center text-lg font-medium uppercase text-[#04060C] mt-4">
                        <img src="/assets/img/icons/check2.svg" alt="" className="mr-1.5" />
                        API Development
                        </li>
                        <li className="flex items-center text-lg font-medium uppercase text-[#04060C] mt-4">
                        <img src="/assets/img/icons/check2.svg" alt="" className="mr-1.5" />
                        Responsive UI/UX
                        </li>
                        <li className="flex items-center text-lg font-medium uppercase text-[#04060C] mt-4">
                        <img src="/assets/img/icons/check2.svg" alt="" className="mr-1.5" />
                        Performance Optimization
                        </li>
                        <li className="flex items-center text-lg font-medium uppercase text-[#04060C] mt-4">
                        <img src="/assets/img/icons/check2.svg" alt="" className="mr-1.5" />
                        Authentication & Security
                        </li>
                    </ul>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About