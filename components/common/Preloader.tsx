'use client'
import Image from 'next/image'

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-[#04060C] z-110 flex justify-center items-center overflow-hidden">
      <div className='p-10 bg-black rounded-full'>
            <div className="animate-spin-slow">
                <Image
                src="/assets/img/logo/logo3.png"
                alt="Loading..."
                width={100}
                height={100}
                priority
                />
            </div>
      </div>
    </div>
  )
}