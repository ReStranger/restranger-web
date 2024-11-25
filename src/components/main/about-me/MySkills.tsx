import React from "react";
import "../../../styles/components/main/about-me/my-skils.scss";
import AboutMeCard from "../../main/about-me/AboutMeCard";
import bolt_solid from "../../../assets/img/bolt-solid.svg";
import git from "../../../assets/img/git.svg";
import nix from "../../../assets/img/nix.png";
import linux from "../../../assets/img/linux.png";

interface MySkillsProps {
  theme: "light" | "dark";
}
interface MySkillsContentProps {
  theme: "light" | "dark";
}

interface SkillsProps {
  icon: JSX.Element;
  name: string;
}
const Skills: React.FC<SkillsProps> = ({ icon, name }) => {
  return (
    <div className="skills">
      <div className="skills-icon">{icon}</div>
      <h4>{name}</h4>
    </div>
  );
};
// TODO: Do it more properly using JSON
const SkillsGit = () => {
  return <Skills icon={<img src={git} alt="git" />} name="Git" />;
};
const SkillsNix = () => {
  return <Skills icon={<img src={nix} alt="nix" />} name="Nix" />;
};
const SkillsLinux = () => {
  return <Skills icon={<img src={linux} alt="linux" />} name="Linux" />;
};
const MySkillsContent: React.FC<MySkillsContentProps> = ({ theme }) => {
  return (
    <>
      <div className={`my-skills-header ${theme}`}>
        <img src={bolt_solid} alt="code-solid" />
        <h3>Skills</h3>
      </div>
      <div className={`my-skills-content ${theme}`}>
        <SkillsGit />
        <SkillsNix />
        <SkillsLinux />
      </div>
    </>
  );
};

const MySkills: React.FC<MySkillsProps> = ({ theme }) => {
  return (
    <div className="my-skills">
      <AboutMeCard theme={theme} entry={<MySkillsContent theme={theme} />} />
    </div>
  );
};

export default MySkills;
