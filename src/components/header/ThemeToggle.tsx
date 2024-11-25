import React from "react";

interface NavButtonProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ theme, toggleTheme }) => {
  return (
    <button className={`theme-toggle ${theme}`} onClick={toggleTheme}></button>
  );
};

export default NavButton;
