import React from "react";
import "../../styles/components/header/navbutton.scss";

interface NavButtonProps {
  name: string;
  section: string;
  theme: "light" | "dark";
}

const NavButton: React.FC<NavButtonProps> = ({ name, section, theme }) => {
  return (
    <li className={`nav-button ${theme}`}>
      <a href={`#${section}`}>{name}</a>
    </li>
  );
};

export default NavButton;
