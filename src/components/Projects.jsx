import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <section
        id="projects"
        className="projects"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="projects-header">
          <h3>Projects</h3>
        </div>
        <div className="project-grid">
          <ProjectCard
            src="project-image-1.PNG"
            title="The Billion Investers"
            desc="TheBillionInvesters is a platform for investors can invest their money in different packages and get profit from it."
            tags={["HTML", "CSS", "JavaScript"]}
            live="#"
            code="#"
          />
          <ProjectCard
            src="https://dummyimage.com/600x400/cccccc/000000.png&text=Coming Soon"
            title="E-commerce Website - (Coming Soon)"
            desc="E-commerce website built with modern web technologies."
            tags={["HTML", "CSS", "JavaScript"]}
            live="#"
            code="#"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
