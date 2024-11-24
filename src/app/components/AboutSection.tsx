"use client";
import React, {useCallback, useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {motion} from "framer-motion";
import { Badge } from "@/components/ui/badge"

interface TabData {
    title: string;
    id: string;
    content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
    {
        title: "Compétences",
        id: "skills",
        content: (
            <div className="grid grid-cols-2">
                <Badge variant="outline" className="mt-4 text-lg text-white hover:bg-gray-100/10">GDScript</Badge>
                <Badge variant="outline" className="mt-4 ml-4 text-lg text-white hover:bg-gray-100/10" >Golang</Badge>
                <Badge variant="outline" className="mt-4 text-lg text-white hover:bg-gray-100/10">Kotlin</Badge>
                <Badge variant="outline" className="mt-4 ml-4 text-lg text-white hover:bg-gray-100/10">Python</Badge>
                <Badge variant="outline" className="mt-4 text-lg text-white hover:bg-gray-100/10">Javascript</Badge>
                <Badge variant="outline" className="mt-4 ml-4 text-lg text-white hover:bg-gray-100/10">HTML/CSS</Badge>
            </div>
        ),
    },
    {
        title: "Formation",
        id: "education",
        content: (
            <div className="grid grid-cols-1">
                <Badge variant="outline" className="text-lg text-white hover:bg-gray-100/10">IUT Nantes : BUT Informatique Développement logiciels
                    2023 - 2025</Badge><br/>
                <Badge variant="outline" className="text-lg text-white hover:bg-gray-100/10">Lycée Paul Gauguin : Baccalauréat mention très bien
                    Mathématiques Informatique 2023</Badge>

            </div>
        ),
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const SENSITIVITY  = 50
    const [rotation,setRotation] = useState({x:0,y:0})

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const handleMouseMove = useCallback((e : React.MouseEvent<HTMLDivElement>) =>{
        const rect = e.currentTarget.getBoundingClientRect()
        const x =  e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width /2
        const centerY = rect.height /2

        const rotateX = (y- centerY) / SENSITIVITY
        const rotateY = -(x- centerX) / SENSITIVITY

        setRotation({x:rotateX,y:rotateY})

    }, []);


    const handleMouseLeave = useCallback(() => {
        setRotation({x:0,y:0})
    }, []);

    return (
        <section className="text-white" id="apropos">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, ease: "easeInOut"}} className="div">
                    <div className=""
                         onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
                        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                        transition: 'transform 0.1 ease-out'
                    }}>
                        <Image src="/img/photo2v2.jpg" alt="about" width={500} height={500}
                               className="antialiased w-full h-full rounded-lg border-slate-300/35 border-[2px] z-10 shadow-white/20 shadow-2xl"/>

                    </div>
                </motion.div>

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">A Propos</h2>
                    <p className="text-base lg:text-lg p-5 rounded-lg border-slate-300/10 border-[2px] z-10 shadow-white/10 shadow-lg">
                        Je m'appelle William Pinel, vous me connaissez peut être sous le nom de Kori
                        ou de xNujabes sur Git. J'essaie d'embellir la vie des autres à travers
                        des expérience vidéos ludiques et des projets avant tout passionnés.
                        Etudiant en informatique, j'ai eu l'occasion de participer à différents
                        projets et de me former sur différentes technologies. Je suis actuellement en
                        recherche de stage, si vous souhaitez en savoir plus n'hésitez pas à me contacter
                        sur
                        <a href="https://www.linkedin.com/in/william-pinel-06a434304/"
                           className="font-bold  text-blue-200"> Linkedin </a>
                        ou par mail <a href="mailto:william.pinel987@gmail.com"
                                       className="font-bold text-violet-200"> william.pinel987@gmail.com </a>
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        {TAB_DATA.map((tabData) => (
                            <TabButton
                                key={tabData.id}
                                selectTab={() => handleTabChange(tabData.id)}
                                active={tab === tabData.id}
                            >
                                {tabData.title}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((tabData) => tabData.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;