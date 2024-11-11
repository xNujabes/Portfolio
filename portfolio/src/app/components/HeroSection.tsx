"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Bonjour, je suis</span>
                    <br/>
                    <TypeAnimation
                        sequence={[

                            'William',
                            1000,
                            'Étudiant',
                            1000,
                            'Game Developpeur',
                            1000,
                            'Web Developpeur',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-whitetext-base sm:text-lg lg:text-xl mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptatum quae, officiis, quos quod, officia quia voluptate
                </p>
                <div>
                    <button className="bg-white text-black w-full sm:w-fit px-4 py-2 rounded-full mr-4 hover:bg-slate-200 text-black">
                        Linkedin
                    </button>
                    <button className="text-white w-full sm:w-fit px-4 py-2 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                        Github
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-8 lg:mt-4">
                <div className="rounded-full bg-[#141414] w-[300px] h-[300px] relative">
                    <Image src="/img/jellyfish.png"
                           alt="jellyfish"
                           className="absolute transform -transate-x-1/2 -translate-y-1/2 top-1/2"
                           width={300}
                           height={300}
                        >
                    </Image>
                </div>
            </div>
        </div>
    </section>;
};

export default HeroSection;