"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
    title: string;
    id: string;
    content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>GDScript</li>
                <li>Golang</li>
                <li>Kotlin</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>IUT Nantes : BUT Informatique Développement logiciels 2023 - 2025</li>
                <li>Lycée Paul Gauguin : Baccalauréat mention très bien Mathématiques Informatique 2023</li>
            </ul>
        ),
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="apropos">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/img/photo.jpg" alt="about" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">A Propos</h2>
                    <p className="text-base lg:text-lg">
                        Je m'appelle William Pinel, vous me connaissez peut être sous le nom de Kori
                        ou de xNujabes sur Git. J'essaie d'embellir la vie des autres à travers
                        des expérience vidéos ludiques et des projets avant tout passionnés.
                        Etudiant en informatique, j'ai eu l'occasion de participer à différents
                        projets et de me former sur différentes technologies. Je suis actuellement en
                         recherche de stage, si vous souhaitez en savoir plus n'hésitez pas à me contacter
                        sur
                        <a href="https://www.linkedin.com/in/william-pinel-06a434304/" className="font-bold  text-blue-200"> Linkedin </a>
                          ou par mail <a  href="mailto:william.pinel987@gmail.com" className="font-bold text-violet-200"> william.pinel987@gmail.com </a>
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