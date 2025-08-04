import { Cloud, Monitor, Server } from "lucide-react";

interface TechnologiesInterface {
    icon: string
    name: string
}

const Skill = () => {
    const backendTechnologies: TechnologiesInterface[] = [
        {
            icon: "nodejs.svg",
            name: "nodejs"
        },
        {
            icon: "mongodb.svg",
            name: "mongodb"
        },
        {
            icon: "docker.svg",
            name: "docker"
        },
        {
            icon: "redis.svg",
            name: "redis"
        },
        {
            icon: "kafka.svg",
            name: "kafka"
        },
        {
            icon: "grpc.svg",
            name: "gRPC"
        },
        {
            icon: "rabbitmq.svg",
            name: "rabbitmq"
        },
        {
            icon: "aws.svg",
            name: "aws cloud"
        },
        {
            icon: "ci-cd.svg",
            name: "ci/cd"
        },
        {
            icon: "postgresql.svg",
            name: "postgresql"
        },
        {
            icon: "prisma.svg",
            name: "Prisma"
        },
        {
            icon: "swagger.svg",
            name: "swagger"
        },
        {
            icon: "websocket.svg",
            name: "websocket"
        },
        {
            icon: "webrtc.svg",
            name: "webrtc"
        }
    ]

    const awsCloud: TechnologiesInterface[] = [
        {
            icon: "aws-ec2.svg",
            name: "aws ec2"
        },
        {
            icon: "s3.svg",
            name: "aws s3"
        },
        {
            icon: "route-53.svg",
            name: "route 53"
        },
        {
            icon: "load-balancer.svg",
            name: "loadbalancer"
        },
        {
            icon: "media-convert.svg",
            name: "MediaConvert"
        },
        {
            icon: "lambda.svg",
            name: "lambda"
        },
        {
            icon: "api-gateway.svg",
            name: "api gateway"
        },
        {
            icon: "event-bridge.svg",
            name: "EventBridge"
        }
    ]

    const frontendTechnologies: TechnologiesInterface[] = [
        {
            icon: "html5.svg",
            name: "html5"
        },
        {
            icon: "css-3.svg",
            name: "css3"
        },
        {
            icon: "javascript.svg",
            name: "javascript"
        },
        {
            icon: "typescript.svg",
            name: "typescript"
        },
        {
            icon: "reactjs.svg",
            name: "reactjs"
        },
        {
            icon: "nextjs.svg",
            name: "nextjs"
        },
        {
            icon: "tailwindcss.svg",
            name: "tailwindcss"
        },
        {
            icon: "bootstrap.svg",
            name: "bootstrap"
        },
        {
            icon: "redux.svg",
            name: "redux"
        },
        {
            icon: "zustand.svg",
            name: "zustand"
        },
        {
            icon: "antd.svg",
            name: "antd"
        },
        {
            icon: "shadcn.svg",
            name: "shadcn ui"
        },
    ]

    return (
        <div className="sm:px-4 md:px-8 mt-24 xl:mt-0" id="skill">
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
                MY SKILLS
            </h4>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#04060C] uppercase mb-5 sm:mb-8" style={{ perspective: "400px" }}>
                explore my <span className="font-bold">skills of</span>
            </h2>
            <div className="relative lg:-right-80 inline-block py-6 px-7 border border-[#FE5C05] rounded bg-white isolate">
                <span className="bg-gradient-to-r from-[#FF4308] to-[#FB8500] bg-clip-text text-transparent font-playfair italic text-5xl font-semibold uppercase">
                    Full stack developer
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

            <div className="mt-5 sm:mt-10 gap-x-5 gap-y-8 xl:gap-y-10">
                <h3 className='text-2xl leading-6 font-bold text-[#04060C] flex gap-1'><Server /> Backend technologies</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2 mb-10">
                    {
                        backendTechnologies.map((item: TechnologiesInterface, index: number) => (
                            <div key={index} className='inline-block transform transition-all duration-300 hover:-translate-y-1'>
                                <div className='h-24 w-28 leading-13 p-2 text-center inline-block text-2xl text-[#04060C] relative z-[1] rounded bg-white mt-6 mr-3 transition duration-300 hover:bg-gradient-to-r hover:from-[#FF4308] hover:to-[#FB8500] group'>
                                    <img src={`/assets/img/icons/${item.icon}`} alt={item.name} className='group-hover:invert group-hover:brightness-0 h-12 mx-auto mb-3' />
                                    <p className="text-sm font-bold uppercase">{item.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <h3 className='text-2xl leading-6 font-bold text-[#04060C] flex gap-1'><Cloud /> Aws cloud</h3>
                <div className="grid grid-cols-8 gap-2 mb-10">
                    {
                        awsCloud.map((item: TechnologiesInterface, index: number) => (
                            <div key={index} className='inline-block transform transition-all duration-300 hover:-translate-y-1 cursor-pointer'>
                                <div className='h-24 min-w-28 max-w-32 leading-13 p-2 text-center inline-block text-2xl text-[#04060C] relative z-[1] rounded bg-white mt-6 mr-3 transition duration-300 hover:bg-gradient-to-r hover:from-[#FF4308] hover:to-[#FB8500] group'>
                                    <img src={`/assets/img/icons/${item.icon}`} alt={item.name} className='h-12 mx-auto mb-3' />
                                    <p className="text-sm font-bold uppercase">{item.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <h3 className='text-2xl leading-6 font-bold text-[#04060C] flex gap-1'><Monitor /> Frontend technologies</h3>
                <div className="grid grid-cols-8 gap-2">
                    {
                        frontendTechnologies.map((item: TechnologiesInterface, index: number) => (
                            <div key={index} className='inline-block transform transition-all duration-300 hover:-translate-y-1'>
                                <div className='h-24 w-28 leading-13 p-2 text-center inline-block text-2xl text-[#04060C] relative z-[1] rounded bg-white mt-6 mr-3 transition duration-300 hover:bg-gradient-to-r hover:from-[#FF4308] hover:to-[#FB8500] group'>
                                    <img src={`/assets/img/icons/${item.icon}`} alt={item.name} className='h-12 mx-auto mb-3' />
                                    <p className="text-sm font-bold uppercase">{item.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Skill;
