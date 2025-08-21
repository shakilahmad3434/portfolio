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
            icon: "expressjs.svg",
            name: "expressjs"
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
            name: "load balancer"
        },
        {
            icon: "media-convert.svg",
            name: "Media Convert"
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
            icon: "reactjs.svg",
            name: "reactjs"
        },
        {
            icon: "typescript.svg",
            name: "typescript"
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
                    Fullstack developer
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

            <div className="mt-10">
                <h3 className='text-2xl font-bold text-[#04060C] flex items-center gap-2 mb-4'>
                    <Server className="text-orange-500" />
                    Backend technologies
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 mb-10">
                    {
                        backendTechnologies.map((item: TechnologiesInterface, index: number) => (
                            <div key={index} className='group relative flex flex-col items-center justify-center text-center rounded-xl bg-white p-4 h-28 w-28 shadow-sm hover:shadow-md transform transition duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-[#FF4308] hover:to-[#FB8500]'>
                                <img
                                    src={`/assets/img/icons/${item.icon}`}
                                    alt={item.name}
                                    className="h-10 w-10 mb-3 transition duration-300 group-hover:invert group-hover:brightness-0"
                                />
                                <p className="text-sm font-semibold uppercase text-[#04060C] group-hover:text-white transition duration-300">
                                    {item.name}
                                </p>
                                <span className="absolute inset-0 rounded-xl border border-gray-200 group-hover:border-transparent transition duration-300"></span>
                            </div>
                        ))
                    }
                </div>

                <h3 className='text-2xl font-bold text-[#04060C] flex items-center gap-2 mb-4'>
                    <Cloud className="text-orange-500" />
                    Aws cloud
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 mb-10">
                    {
                        awsCloud.map((item: TechnologiesInterface, index: number) => (
                            <div key={index} className='group relative flex flex-col items-center justify-center text-center rounded-xl bg-white p-4 h-28 w-28 shadow-sm hover:shadow-md transform transition duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-[#FF4308] hover:to-[#FB8500]'>
                                <img
                                    src={`/assets/img/icons/${item.icon}`}
                                    alt={item.name}
                                    className="h-10 w-10 mb-3 transition duration-300"
                                />
                                <p className="text-sm font-semibold uppercase text-[#04060C] group-hover:text-white transition duration-300">
                                    {item.name}
                                </p>
                                <span className="absolute inset-0 rounded-xl border border-gray-200 group-hover:border-transparent transition duration-300"></span>
                            </div>
                        ))
                    }
                </div>

                <h3 className='text-2xl font-bold text-[#04060C] flex items-center gap-2 mb-4'>
                    <Monitor className="text-orange-500" />
                    Frontend technologies
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 mb-10">
                    {
                        frontendTechnologies.map((item: TechnologiesInterface, index: number) => (
                            <div key={index} className='group relative flex flex-col items-center justify-center text-center rounded-xl bg-white p-4 h-28 w-28 shadow-sm hover:shadow-md transform transition duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-[#FF4308] hover:to-[#FB8500]'>
                                <img
                                    src={`/assets/img/icons/${item.icon}`}
                                    alt={item.name}
                                    className="h-10 w-10 mb-3 transition duration-300"
                                />
                                <p className="text-sm font-semibold uppercase text-[#04060C] group-hover:text-white transition duration-300">
                                    {item.name}
                                </p>
                                <span className="absolute inset-0 rounded-xl border border-gray-200 group-hover:border-transparent transition duration-300"></span>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Skill;
