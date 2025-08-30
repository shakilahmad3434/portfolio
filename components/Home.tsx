'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Link from 'next/link'
import { Mail, Menu, PhoneCall, X } from 'lucide-react'
import Button from './common/Button'
import Preloader from './common/Preloader'
import Skill from './Skill'

const Home = () => {
    const [open, setOpen] = useState(false)
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreloader(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, []);

    useEffect(() => {
        const link = document.createElement('a');
        link.href="/assets/img/cv/shakil-resume.pdf";
        link.download = "Resume_Shakil_Ahmad.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    }, [])
    
    const menus = [
                    { href: "#home", text: "Home" },
                    { href: "#skill", text: "Skills" },
                    { href: "#portfolio", text: "Portfolio" },
                    { href: "#about", text: "About ME"},
                    { href: "#contact", text: "Contact" },
                ]

  return (
    <div className="min-h-screen w-full bg-center bg-no-repeat bg-cover bg-fixed overflow-hidden" style={{ backgroundImage: "url('/assets/img/bg/pagebg2.png')" }}>
        {
            !!preloader &&
            <Preloader />
        }
      <div>
        <div className='hidden lg:block fixed top-0 left-0 w-64 h-screen bg-[#F4F4F6]'>
            <Sidebar />
        </div>
        <div className='fixed top-0 left-0 z-100 lg:hidden px-2 w-full bg-white flex justify-between items-center shadow-sm'>
            <div className='w-48 px-8 py-4'>
                <Link href="#">
                    <img src="/assets/img/logo/logo.png" alt="logo" className='w-full h-full object-cover' />
                </Link>
            </div>
            <div onClick={() => setOpen((prev) => !prev)} className='border border-gray-900 rounded p-0.5 cursor-pointer'>
                <Menu size={32} />
            </div>
        </div>
        
        <div className={`fixed top-0 left-0 z-101 bg-slate-900 w-full h-full transform transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex justify-between items-center shadow-sm px-4 py-2'>
                <div className='w-48'>
                <Link href="#">
                    <img src="/assets/img/logo/logo.png" alt="logo" className='w-full h-full object-cover' />
                </Link>
                </div>
                <div onClick={() => setOpen(false)} className='cursor-pointer'>
                <X size={32} className='text-white' />
                </div>
            </div>
            <div className='flex flex-col px-4'>
                {menus.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className='flex items-center py-2 mb-2 rounded transition-all duration-400 text-white text-md font-semibold uppercase opacity-80 hover:opacity-100 overflow-hidden group'
                >{item.text}</Link>
                ))}
            </div>
            <div className='px-4 mt-10'>
                <h2 className='text-white text-2xl uppercase font-semibold mb-5'>Contact info</h2>
                <div>
                <p className='flex items-center gap-2 text-white font-bold mb-2'>
                    <PhoneCall size={20}/>
                    <span>+91 7259542909</span>
                </p>
                <p className='flex items-center gap-2 text-white font-bold'>
                    <Mail size={20} />
                    <span>shakiltechsunset@gmail.com</span>
                </p>
                </div>
            </div>
            <div className='px-4 w-full'>
                <Button />
            </div>
        </div>


        <div className='w-full lg:pl-64 xl:pl-64 p-5 xl:p-12 mt-20 lg:mt-0'>
            <Hero />
            <Skill />
            <Portfolio />
            <About />
            <Contact />
        </div>
      </div>

      <div className='w-12 h-12 rounded-full fixed bottom-5 right-5 z-10 bg-gradient-to-r from-[#FF4308] to-[#FB8500] cursor-pointer animate-bounce'>
            <a href="https://wa.me/917259542909?text=Hi!" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/logo/whatsapp.webp" alt="whatsapp logo" />
            </a>
        </div>
    </div>
  )
}

export default Home
