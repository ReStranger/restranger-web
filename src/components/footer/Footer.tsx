import React from "react";
import "../../styles/components/footer/footer.scss";
import github from "../../assets/img/github-brands-solid.svg";
import telegram from "../../assets/img/telegram-brands-solid.svg";
import mail from "../../assets/img/folder-open-solid.svg";

interface FooterProps {
  theme: "light" | "dark";
}

interface ContactBoxProps {
  img: string;
  name: string;
  link: string;
  theme: "light" | "dark";
}

const ContactBox = ({ img, name, link, theme }: ContactBoxProps) => {
  return (
    <div className={`contact-box ${theme}`}>
      <img src={img} alt="contact-logo" />
      <a href={link}>{name}</a>
    </div>
  );
};

const Footer = ({ theme }: FooterProps) => {
  return (
    <footer id="contacts" className={`footer ${theme}`}>
      <div className="footer-wrapper">
        <ContactBox
          theme={theme}
          img={github}
          name="Github"
          link="https://github.com/ReStranger"
        />
        <ContactBox
          theme={theme}
          img={telegram}
          name="Telegram"
          link="https://t.me/ReStranger"
        />
        <ContactBox
          theme={theme}
          img={mail}
          name="Mail"
          link="mailto:aerafeev2@gamil.com"
        />
      </div>
    </footer>
  );
};
export default Footer;
