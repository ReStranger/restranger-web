import React from "react";
import "../../styles/components/header.scss";
import NavButton from "./NavButton";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header>
      <nav>
        <ul>
          <NavButton
            name="Home"
            section="home"
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <NavButton
            name="About me"
            section="about_me"
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <NavButton
            name="Projects"
            section="projects"
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <NavButton
            name="Contacts"
            section="contacts"
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
