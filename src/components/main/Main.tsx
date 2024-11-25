import React from "react";
import "../../styles/components/main.scss";

interface MainProps {
  theme: "light" | "dark";
}
const Main: React.FC<MainProps> = ({ theme }) => {
  return <main className={`main ${theme}`}></main>;
};

export default Main;
