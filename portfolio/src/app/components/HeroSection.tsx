"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

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
                            1000,
                            'William',
                            1000,
                            'William ou Kori ;)',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-white text-base sm:text-lg lg:text-xl mb-6">
                    Bienvenue sur mon portfolio, mon petit nuage. Ici vous en apprendrez plus sur moi (mais pas trop!),
                    vous verrez mes différents projets et en bas de page vous trouverez des liens pour me contacter.
                    Si vous avez des retours à faire sur ce portfolio je suis preneur !
                    Bonne visite !
                </p>
                <div>
                    <a href="CvWilliamPinel.pdf" download="CvWilliamPinel.pdf">
                        <button className="bg-white text-black w-full sm:w-fit px-4 py-2 rounded-full mr-4 hover:bg-slate-200 text-black">
                            Mon CV
                        </button>
                    </a>
                    <Link href="#contact">
                        <button className="text-white w-full sm:w-fit px-4 py-2 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                            Me contacter
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-8 lg:mt-4">
                <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative">
                    <Image src="/img/shark.png"
                           alt="photo"
                           className="absolute transform  -translate-y-1/2 top-1/2"
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