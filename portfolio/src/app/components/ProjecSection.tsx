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
    previewUrl: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Portfolio en ligne",
        description: "C'est le site sur lequel vous vous trouvez ! Réalisé avec Next.js sous React",
        image: "/images/projects/portfolio.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/xNujabes/Portfolio",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState<string>("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
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
                    name="All"
                    isSelected={tag === "Tout"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Jeu"
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
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;