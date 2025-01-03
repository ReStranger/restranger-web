import React from "react";
import "../../styles/components/main/main.scss";
import TypingEffect from "../../utils/TypingEffect";
import AboutMe from "./about-me/AboutMe";
import Projects from "./projects/Projects";

interface MainProps {
  theme: "light" | "dark";
}

const Main = ({ theme }: MainProps) => {
  return (
    <main className={`main ${theme}`}>
      <div className="main-content">
        <div className="home" id="home">
          <TypingEffect
            base="re:"
            phases_massive={["android", "code", "design", "web", "rising"]}
            theme={theme}
          />
        </div>
        <AboutMe theme={theme} />
        <Projects theme={theme} />
      </div>
    </main>
  );
};

export default Main;
