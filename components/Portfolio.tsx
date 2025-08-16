import Image from "next/image";
import React from "react";

const Portfolio = () => {
    const portfolioArr = [
        {
            img: "/assets/img/all-images/livspace.png",
            tag: "#web development",
            title: "Livspace – End-to-End Home Interiors & Renovation Platform",
            href: "https://www.livspace.com",
        },
        {
            img: "/assets/img/all-images/chennai-properties.png",
            tag: "#web development",
            title: "Chennaiproperties.in – Hyperlocal Real Estate Portal",
            href: "https://www.chennaiproperties.in",
        },
        {
            img: "/assets/img/all-images/podareducation.png",
            tag: "#web development",
            title: "Podar Education – School Network & Franchise Solutions",
            href: "https://www.podareducation.org",
        },
        {
            img: "/assets/img/all-images/sosparty.png",
            tag: "#web development",
            title: "SOS Party – Corporate & Team-Building Event Platform",
            href: "https://sosparty.io",
        },
        {
            img: "/assets/img/all-images/homelane.png",
            tag: "#web development",
            title: "HomeLane – Tech-Enabled Interior Design Solutions",
            href: "https://www.homelane.com",
        }
    ];

    return (
        <div className="sm:px-4 md:px-8 mt-24" id="portfolio">
            <h4
                className="text-2xl font-medium mb-6 uppercase text-transparent bg-clip-text flex items-center gap-2"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, #FF4308 0%, #FB8500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                <img src="/assets/img/icons/star3.png" alt="" />
                my Portfolio
            </h4>
            <h2
                className="text-4xl sm:text-5xl font-semibold text-[#04060C] uppercase mb-5 sm:mb-8"
                style={{ perspective: "400px" }}
            >
                My latest <span className="font-bold">Work &</span>
            </h2>
            <div className="relative lg:-right-80 inline-block py-6 px-7 border border-[#FE5C05] rounded bg-white isolate">
                <span className="bg-gradient-to-r from-[#FF4308] to-[#FB8500] bg-clip-text text-transparent font-playfair italic text-5xl font-semibold uppercase">
                    Portfolio
                </span>

                <img
                    src="/assets/img/elements/elements5.png"
                    alt=""
                    className="absolute -top-1 -right-1"
                />
                <img
                    src="/assets/img/elements/elements5.png"
                    alt=""
                    className="absolute -top-1 -left-1"
                />
                <img
                    src="/assets/img/elements/elements5.png"
                    alt=""
                    className="absolute -bottom-1 -left-1"
                />
                <img
                    src="/assets/img/elements/elements5.png"
                    alt=""
                    className="absolute -bottom-1 -right-1"
                />
            </div>

            <div className="grid md:grid-cols-2 mt-12 sm:mt-24 gap-5 xl:gap-y-10">
                {portfolioArr.map((item, index) => (
                    <div key={index} className="xl:px-4 group">
                        <div className="relative mb-8 cursor-pointer transition-all duration-500 xl:mr-22">
                            <div className="overflow-hidden rounded-[4px] bg-green-500">
                                <Image
                                    src={item.img}
                                    alt="Portfolio"
                                    width={460}
                                    height={340}
                                    className="rounded-[4px] object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div
                                className="relative z-10 overflow-hidden w-full xl:-right-20 group-hover:right-0 -mt-1 xl:-mt-5 p-6 rounded-[4px] transition-all duration-500 group-hover:ml-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage:
                                        'url("/assets/img/bg/bg6.png")',
                                }}
                            >
                                <h4 className="text-base font-semibold uppercase text-[#fd5905] mb-1">
                                    {item.tag}
                                </h4>
                                <a
                                    href={item.href}
                                    className="text-[#04060C] font-figtree text-lg leading-7 hover:underline transition-all duration-300 uppercase font-semibold"
                                >
                                    {item.title}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
