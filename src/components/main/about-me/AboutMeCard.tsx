import "../../../styles/components/main/about-me/about-me-card.scss";
import React from "react";

interface AboutMeCardProps {
  theme: "light" | "dark";
  entry: JSX.Element;
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ theme, entry }) => {
  return <div className={`about-me-card ${theme}`}>{entry}</div>;
};

export default AboutMeCard;
