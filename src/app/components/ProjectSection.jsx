"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CAMP",
    description: "Project PT.Komuniatas Karya Transformasi",
    image: "/images/projects/camp.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 2,
    title: "Cocoride",
    description: "PT.Bagubagu Teknologi Indonesia",
    image: "/images/projects/cocoride.png",
    tag: ["All", "Mobile"],
  },

  {
    id: 3,
    title: "Buzzco",
    description: "Project PT.Tri Digital Perkasa",
    image: "/images/projects/buzzco.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 4,
    title: "Elit-mtrading",
    description: "PT.Erdikha Elit Sekuritas",
    image: "/images/projects/elit.png",
    tag: ["All", "Mobile"],
  },

  {
    id: 5,
    title: "Plant Sensors",
    description: "Skripsi",
    image: "/images/projects/plant-sensors.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 6,
    title: "CUiT",
    description: "Project PT.Tri Digital Perkasa",
    image: "/images/projects/cuit.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 7,
    title: "My Qur'an",
    description: "Project Personal",
    image: "/images/projects/my-quran.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 8,
    title: "Tenaga Kerja Indonesia",
    description: "Skripsi",
    image: "/images/projects/skripsi-apjati.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
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
