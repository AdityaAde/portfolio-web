"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/camp.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/cuit.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 3 description",
    image: "/images/projects/camp.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 4,
    title: "Potography Portfolio Website",
    description: "Project 4 description",
    image: "/images/projects/cuit.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "Project 5 description",
    image: "/images/projects/camp.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Potography Portfolio Website",
    description: "Project 6 description",
    image: "/images/projects/cuit.png",
    tag: ["All", "Mobile"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
