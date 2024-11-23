import React from "react";
import "../../styles/components/header.scss";
import NavButton from "./NavButton";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <NavButton name="Home" section="home" />
          <NavButton name="About me" section="about_me" />
          <NavButton name="Projects" section="projects" />
          <NavButton name="Contacts" section="contacts" />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
