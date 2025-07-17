import React, { FormEvent, useRef, useState } from 'react'
import Button from './common/Button'
import axios from 'axios';
import { Loader } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)
    const handleContact = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
 
        const formData = new FormData(e.currentTarget);
        
        const contactData: Record<string, string> = {}
        for(let [keys, values] of formData) {
            contactData[keys] = values as string
        }

        try {
            setLoading(true)
            const { data } = await axios.post('/api/contact', contactData);
            toast.success(data.message);
            formRef.current?.reset()
        } catch (err) {
            if(axios.isAxiosError(err)){
                return toast.error(err.message)
            }
            if(err instanceof Error){
                return toast.error(err.message)
            }
            toast.error("Network error")
        } finally {
            setLoading(false)
        }
    }
  return (
    <div className='sm:px-4 md:px-8 pb-4 xl:px-10 mt-10'>
        <div className='bg-white rounded border border-white p-3 sm:p-6 md:p-12 flex flex-col-reverse xl:flex-row gap-10'>
            <div className='xl:w-4/12'>
                <div className='bg-[#F4F4F6] rounded p-6 border border-[#F4F4F6]'>
                    <h3 className="text-2xl font-semibold uppercase text-[#04060C] mb-1">Leave A Message</h3>
                    <form onSubmit={handleContact} ref={formRef}>
                        <div>
                            <input type="text" name='name' required placeholder="Full Name" className="border-none outline-none w-full rounded mt-5 bg-white p-4 h-12 text-[#04060] text-lg" />
                        </div>
                        <div>
                            <input type="number" name='phone' placeholder="Phone Number" className="border-none outline-none w-full rounded mt-5 bg-white p-4 h-12 text-[#04060] text-lg" />
                        </div>
                        <div>
                            <input type="email" name='email'  placeholder="Email Address" className="border-none outline-none w-full rounded mt-5 bg-white p-4 h-12 text-[#04060] text-lg"  required />
                        </div>
                        <div>
                            <textarea placeholder="Message" name='message' className="border-none outline-none w-full rounded mt-5 bg-white p-4 h-[110px] text-[#04060] text-lg" required></textarea >
                        </div>
                        <div className="text-right border-none outline-none">
                        <button type="submit" disabled={loading} className="relative transform hover:-translate-y-1 text-base font-bold leading-4 text-white inline-flex items-center justify-center px-6 py-4 rounded z-10 transition-all duration-400 mt-8 uppercase bg-gradient-to-r from-[#FF4308] to-[#FB8500] overflow-hidden after:content-[''] after:absolute after:inset-0 after:w-0 after:z-[-1] after:rounded after:transition-all after:duration-400 after:bg-gradient-to-r after:from-[#FB8500] after:to-[#FF4308] hover:after:w-full">
                            {
                                loading ?
                                <>
                                    <Loader size={20} className='animate-spin mr-2' />
                                    submitting...
                                </>
                                :
                                "submit now"
                            }
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='xl:w-8/12'>
                <h4 className="text-2xl font-medium mb-12 sm:mb-6 uppercase text-transparent bg-clip-text flex items-center gap-2"
                    style={{
                    backgroundImage: "linear-gradient(90deg, #FF4308 0%, #FB8500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                    }}>
                    <img src="/assets/img/icons/star3.png" alt="" />
                    contact me
                </h4>
                <div className='flex items-center gap-4 sm:gap-10'>
                    <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-bold text-[#04060C] uppercase mb-8">get in touch</h2>
                    <div className="relative -top-4 inline-block py-3 sm:py-6 px-4 sm:px-7 border border-[#FE5C05] rounded bg-white isolate">
                        <span className="bg-gradient-to-r from-[#FF4308] to-[#FB8500] bg-clip-text text-transparent font-playfair italic text-3xl sm:text-5xl font-semibold uppercase">
                            today
                        </span>

                        <img src="/assets/img/elements/elements5.png" alt="" className="absolute -top-1 -right-1" />
                        <img src="/assets/img/elements/elements5.png" alt="" className="absolute -top-1 -left-1" />
                        <img src="/assets/img/elements/elements5.png" alt="" className="absolute -bottom-1 -left-1" />
                        <img src="/assets/img/elements/elements5.png" alt="" className="absolute -bottom-1 -right-1" />
                    </div>
                </div>

                <div className='mt-4 2xl:pl-16'>
                    <p className="text-md font-medium text-[#5D626F] opacity-80">At PICO, success goes beyond shipping code. It’s about understanding client needs, delivering maintainable full stack solutions, and ensuring long-term performance, scalability, and trust.</p>
                    <div className="flex flex-col sm:flex-row items-center">
                        <div className="w-full flex items-center bg-[#F4F4F6] rounded border border-[#F4F4F6] hover:border-[#FE5C05] py-6 px-2 sm:px-7 mt-5 sm:mr-[14px] transition-all duration-500">
                            <div className="h-[50px] w-[50px] text-center leading-12 rounded-full bg-white flex justify-center items-center">
                                <img src="assets/img/icons/phone2.svg" alt="" />
                            </div>
                            <div className="ml-4">
                                <h5 className="text-xl leading-5 text-[#04060C] font-semibold mb-3.5">CALL</h5>
                                <a href="tel:6201424759" className="text-[16px] leading-4 text-[#5D626F] opacity-80 font-semibold inline-block">6201424759</a>
                            </div>
                        </div>

                        <div className="w-full flex items-center bg-[#F4F4F6] rounded border border-[#F4F4F6] hover:border-[#FE5C05] py-6 px-2 sm:px-7 mt-5 sm:mr-[14px] transition-all duration-500">
                            <div className="h-[50px] w-[50px] text-center leading-12 rounded-full bg-white flex justify-center items-center">
                                <img src="assets/img/icons/email2.svg" alt="" />
                            </div>
                            <div className="ml-4">
                            <h5 className="text-xl leading-5 text-[#04060C] font-semibold mb-3.5">Email</h5>
                            <a href="mailto:shakilahmad342100@gmail.com" className="text-[16px] leading-4 text-[#5D626F] opacity-80 font-semibold inline-block">shakilahmad342100@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
        <Toaster position="top-center"/>
    </div>
  )
}

export default Contact