import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    const menus = [
                    { href: "#home", text: "Home", img: "home-h2.svg", duration: 700 },
                    { href: "#skill", text: "Skills", img: "skills-h2.svg", duration: 700 },
                    { href: "#portfolio", text: "Portfolio", img: "portfolio-h2.svg", duration: 1100 },
                    { href: "#about", text: "About ME", img: "about-h2.svg", duration: 800 },
                    { href: "#contact", text: "Contact", img: "contact-h2.svg", duration: 1300 },
                ]
    return (
        <div className='absolute top-0 left-0 w-full'>
            <div className='bg-white px-8 py-4'>
                <Link href="#">
                    <img src="/assets/img/logo/logo.png" alt="logo" className='w-full h-full object-cover' />
                </Link>
            </div>
            <div className="flex flex-col px-8 mt-8">
                {
                    menus.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className='flex items-center px-4 py-2 mb-5 rounded transition-all duration-400 text-white text-[16px] font-semibold uppercase opacity-80 hover:opacity-100 overflow-hidden group'
                            style={{background: "linear-gradient(90deg, #FF4308 0%, #FB8500 100%)"}}
                            >
                                <img
                                    src={`/assets/img/icons/${item.img}`}
                                    alt={item.text}
                                    className="mr-3 filter invert brightness-0 group-[.active]:filter-none"
                                />
                                {item.text}
                                <span 
                                    className="absolute inset-0 z-[-1] w-0 group-[.active]:w-full transition-all duration-400"
                                    style={{background: "linear-gradient(90deg, #2CE97A 0%, #D9D314 100%)"}}
                                ></span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar