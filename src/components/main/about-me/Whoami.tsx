import React from "react";
import AboutMeCard from "./AboutMeCard";
import "../../../styles/components/main/about-me/whoami.scss";
import user_solid from "../../../assets/img/user-solid.svg";

interface WhoamiProps {
  theme: "light" | "dark";
}
interface WhoamiContentProps {
  theme: "light" | "dark";
}
const WhoamiContent = ({ theme }: WhoamiContentProps) => {
  return (
    <div className="whoami">
      <div className={`whoami-header ${theme}`}>
        <img src={user_solid} alt="user-solid" />
        <h3>About me</h3>
      </div>
      <div className={`whoami-content ${theme}`}>
        <span>
          I am a self-taught development student from Russia. Interested in
          linux and low-level programming languages
        </span>
      </div>
    </div>
  );
};
const Whoami = ({ theme }: WhoamiProps) => {
  return <AboutMeCard theme={theme} entry={<WhoamiContent theme={theme} />} />;
};
export default Whoami;
