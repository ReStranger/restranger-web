import "../../../styles/components/main/projects/projects.scss";
import React from "react";
import Slider from "./Slider";

interface ProjectsProps {
  theme: "light" | "dark";
}
const Projects = ({ theme }: ProjectsProps) => {
  return (
    <div id="projects" className={`projects ${theme}`}>
      <Slider />
    </div>
  );
};

export default Projects;
