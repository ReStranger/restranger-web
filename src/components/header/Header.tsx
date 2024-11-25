import React from "react";
import "../../styles/components/header/header.scss";
import logo1024 from "../../assets/img/logo1024.svg";
import NavButton from "./NavButton";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className={`header ${theme}`}>
      <div className={`logo-containter ${theme}`}>
        <div className="logo">
          <img src={logo1024} alt="RE" />
        </div>
        <div className="logo-cliding-text">
          <h1>Stranger</h1>
        </div>
      </div>
      <nav>
        <ul>
          <NavButton name="Home" section="home" theme={theme} />
          <NavButton name="About me" section="about_me" theme={theme} />
          <NavButton name="Projects" section="projects" theme={theme} />
          <NavButton name="Contacts" section="contacts" theme={theme} />
        </ul>
      </nav>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
};
export default Header;
