import React from "react";

interface NavButtonProps {
    name: string;
    section: string;
}

const NavButton: React.FC<NavButtonProps> = ({ name, section }) => {
  return (
    <li className="nav-button">
      <a href={`#${section}`}>{name}</a>
    </li>
  );
};

export default NavButton;
