"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tag: string[];
    gitUrl: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Portfolio en ligne",
        description: "C'est le site sur lequel vous vous trouvez ! Réalisé avec Next.js sous React",
        image: "/img/projets/portfolio.png",
        tag: ["Tout", "Web"],
        gitUrl: "https://github.com/xNujabes/Portfolio",
    },
    {
        id: 2,
        title: "Dark Kingdom Defense",
        description: "Projet réalisé en 2023 sur Microstudio en python. Ce jeu est un tower defense en 2D réalisé à l'occasion" +
            " des trophées NSI de 2023, concours national de programmation pour lycéens. Dans ce jeu vous incarnerez" +
            " le mal avec pour objectif de repousser les vagues ennemis incarnés par des Hommes !",
        image: "/img/projets/dkd.png",
        tag: ["Tout", "Jeux"],
        gitUrl: "https://github.com/xNujabes/DarkKingdomDefense",
    },
    {
        id: 3,
        title: "Infinite Runner",
        description: "Prototype développé sur Godot en GDScript pour mobile. Ce jeu est un jeu de type Infinite Runner en 3D, " +
            "vous incarnerez un personnage qui devras courir pour ne pas se faire éjecter de l'écran par les obstacles.",
        image: "/img/projets/InfiniteRunner.png",
        tag: ["Tout", "Jeux"],
        gitUrl: "https://github.com/xNujabes/InfiniteRunner",
    },
    {
        id: 4,
        title: "AquaClicker",
        description: "Prototype développé sur Godot en GDScript. Ce jeu est un jeu de type Clicker en 2D." +
            " Votre objectif serra comme la plupart des jeux incrémentaux et idle d'accumuler le plus d'argent" +
            " mais aussi de collectionner les différentes espèces marines disponibles dans le jeu.",
        image: "/img/projets/AquaClicker.png",
        tag: ["Tout", "Jeux"],
        gitUrl: "https://github.com/xNujabes/AquaClicker",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState<string>("Tout");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 75, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projets">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Mes projets
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="Tout"
                    isSelected={tag === "Tout"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Jeux"
                    isSelected={tag === "Jeux"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            imgUrl={project.image}
                            title={project.title}
                            description={project.description}
                            gitUrl={project.gitUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;