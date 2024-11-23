import React from "react";

interface NavButtonProps {
  name: string;
  section: string;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  name,
  section,
  theme,
  toggleTheme,
}) => {
  return (
    <li className={`nav-button ${theme}`}>
      <a href={`#${section}`}>{name}</a>
    </li>
  );
};

export default NavButton;
