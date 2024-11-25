import React from "react";
import "../../styles/components/main/main.scss";
import TypingEffect from "../../utils/TypingEffect";
import AboutMe from "./about-me/AboutMe";

interface MainProps {
  theme: "light" | "dark";
}

const Main: React.FC<MainProps> = ({ theme }) => {
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
      </div>
    </main>
  );
};

export default Main;
