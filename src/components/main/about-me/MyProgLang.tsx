import React from "react";
import "../../../styles/components/main/about-me/my-prog-lang.scss";
import AboutMeCard from "../../main/about-me/AboutMeCard";
import code_solid from "../../../assets/img/code-solid.svg";
import c_lang from "../../../assets/img/c-lang.png";
import rust from "../../../assets/img/rust.png";
import python from "../../../assets/img/python.png";
import typescript from "../../../assets/img/typescript.png";

interface MyProgLangProps {
  theme: "light" | "dark";
}
interface MyProgLangContentProps {
  theme: "light" | "dark";
}

interface ProgLangProps {
  icon: JSX.Element;
  name: string;
}
const ProgLang = ({ icon, name }: ProgLangProps) => {
  return (
    <div className="prog-lang">
      <div className="prog-lang-icon">{icon}</div>
      <h4>{name}</h4>
    </div>
  );
};
// TODO: Do it more properly using JSON
const ProgLangsCLang = () => {
  return <ProgLang icon={<img src={c_lang} alt="lang" />} name="C" />;
};
const ProgLangsRust = () => {
  return <ProgLang icon={<img src={rust} alt="rust" />} name="Rust" />;
};
const ProgLangsTS = () => {
  return (
    <ProgLang icon={<img src={typescript} alt="typescript" />} name="TS" />
  );
};
const ProgLangsPython = () => {
  return <ProgLang icon={<img src={python} alt="python" />} name="python" />;
};
const MyProgLangContent = ({ theme }: MyProgLangContentProps) => {
  return (
    <>
      <div className={`my-prog-lang-header ${theme}`}>
        <img src={code_solid} alt="code-solid" />
        <h3>Program Languages</h3>
      </div>
      <div className={`my-prog-lang-content ${theme}`}>
        <ProgLangsCLang />
        <ProgLangsRust />
        <ProgLangsTS />
        <ProgLangsPython />
      </div>
    </>
  );
};

const MyProgLang = ({ theme }: MyProgLangProps) => {
  return (
    <div className="my-prog-lang">
      <AboutMeCard theme={theme} entry={<MyProgLangContent theme={theme} />} />
    </div>
  );
};

export default MyProgLang;
