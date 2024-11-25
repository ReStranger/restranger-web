import "../../../styles/components/main/about-me/about-me.scss";
import React from "react";
import Whoami from "./Whoami";
import MyProgLang from "./MyProgLang";

interface AboutMeProps {
  theme: "light" | "dark";
}
const AboutMe: React.FC<AboutMeProps> = ({ theme }) => {
  return (
    <div className="about-me">
      <Whoami theme={theme} />
      <MyProgLang theme={theme} />
    </div>
  );
};

export default AboutMe;